---
sidebar: auto
collapsable: true
---
最新我们团队使用vue技术栈对官网进行了重构和优化，经过调研，在架构上前后端分离，由于有SEO的要求，所以需要做服务端渲染，本文将分享一下我们实战的过程。

## 方案调研
在接到了重构和优化的需求后，我们首先需要去做技术调研，因为vue做服务端渲染已经很成熟了，并且我们团队就基本都用过vue，所以我们优先考虑使用vue技术栈进行重构。

实现业务功能和页面并不难，难点在于做服务端渲染，所以我们需要通过官网https://ssr.vuejs.org/zh/的Vue.js 服务器端渲染指南 和 网上各种实战分享了解各种必备知识。

### 什么是服务器端渲染 (SSR)？
早在SPA (Single Page Application 单页应用) 出现之前，所有的网页就是在服务端渲染的，服务器接收到客户端请求后，将数据和模板拼接成完整的html 文本到客户端。 

随着 JS 的发展, 特别是支持SPA 的react和vue框架的出现, 呈现页面完全静态化, 动态内容交给前端(Js)渲染, 服务器只提供数据，前端还能控制页面的路由跳转。

对于vue的项目，服务端渲染指的是，服务器端将Vue的页面和对应的业务数据，在服务器直接完全渲染成html字符串后，再发送至浏览器, 最后在浏览器中混合为可交互的应用程序。

### 服务器端渲染的利弊
与传统 SPA 相比，采用服务端渲染后，用户能够更快的看到页面内容, 同时也有利于爬虫抓取(SEO)。

同时服务端渲染，也需要 node 服务器, 需要耗费性能, 还需要做好缓存和优化, 相当于用空间换时间，全站 ssr 明显不可取, 现在流行较多的是首屏 ssr, 甚至首屏部分 ssr。

## 原理分析
先看一张Vue官网的服务端渲染示意图：
![原理图.png](/blog/img/ssr.png)

从图上可以看出，ssr 有两个入口文件，client.js 和 server.js， 都包含了应用代码，webpack 通过两个入口文件分别打包成给服务端用的 server bundle 和给客户端用的 client bundle。

当服务器接收到了来自客户端的请求之后，会创建一个渲染器 bundleRenderer，这个 bundleRenderer 会读取上面生成的 server bundle 文件，并且执行它的代码， 然后发送一个生成好的 html 到浏览器。

等到客户端加载了 client bundle 之后，会和服务端生成的DOM 进行 Hydration(判断这个DOM 和自己即将生成的DOM 是否相同，如果相同就将客户端的vue实例挂载到这个DOM上， 否则会提示警告)。

## 如何实现及源码分析
不管是参照vue官方的ssr教程从头配置，还是使用第三方的脚手架nuxt.js自动配置，都需要使用nodejs作为服务器渲染打包好的bundle，同时也需要在部署前通过入口文件生成对应的bundle。

### 生成bundle
- 对于不同端的打包，需要使用对应的webpack插件配置，其中打包client bundle时为：
```
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
```
client-plugin的内容为：
```
var onEmit = function (compiler, name, hook) {
  if (compiler.hooks) {
    compiler.hooks.emit.tapAsync(name, hook);
  } else {
    compiler.plugin('emit', hook);     // Webpack < 4.0.0
  }
};
var VueSSRClientPlugin = function VueSSRClientPlugin (options) {
  if ( options === void 0 ) options = {};
  this.options = Object.assign({
    filename: 'vue-ssr-client-manifest.json'
  }, options);
};

VueSSRClientPlugin.prototype.apply = function apply (compiler) {
  var this$1 = this;
  onEmit(compiler, 'vue-client-plugin', function (compilation, cb) {
    var stats = compilation.getStats().toJson();

    var allFiles = uniq(stats.assets
      .map(function (a) { return a.name; }));

    var initialFiles = uniq(Object.keys(stats.entrypoints)
      .map(function (name) { return stats.entrypoints[name].assets; })
      .reduce(function (assets, all) { return all.concat(assets); }, [])
      .filter(function (file) { return isJS(file) || isCSS(file); }));

    var asyncFiles = allFiles
      .filter(function (file) { return isJS(file) || isCSS(file); })
      .filter(function (file) { return initialFiles.indexOf(file) < 0; });

    var manifest = {
      publicPath: stats.publicPath,
      all: allFiles,
      initial: initialFiles,
      async: asyncFiles,
      modules: { /* [identifier: string]: Array<index: number> */ }
    };

    var assetModules = stats.modules.filter(function (m) { return m.assets.length; });
    var fileToIndex = function (file) { return manifest.all.indexOf(file); };
    stats.modules.forEach(function (m) {
      // ignore modules duplicated in multiple chunks
      if (m.chunks.length === 1) {
        var cid = m.chunks[0];
        var chunk = stats.chunks.find(function (c) { return c.id === cid; });
        if (!chunk || !chunk.files) {
          return
        }
        var id = m.identifier.replace(/\s\w+$/, ''); // remove appended hash
        var files = manifest.modules[hash(id)] = chunk.files.map(fileToIndex);
        // find all asset modules associated with the same chunk
        assetModules.forEach(function (m) {
          if (m.chunks.some(function (id) { return id === cid; })) {
            files.push.apply(files, m.assets.map(fileToIndex));
          }
        });
      }
    });

    var json = JSON.stringify(manifest, null, 2);
    compilation.assets[this$1.options.filename] = {
      source: function () { return json; },
      size: function () { return json.length; }
    };
    cb();
  });
};
module.exports = VueSSRClientPlugin;
```

而打包server bundle时为：
```
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
```
server-plugin的内容为：
```
var onEmit = function (compiler, name, hook) {
  if (compiler.hooks) {
    compiler.hooks.emit.tapAsync(name, hook);
  } else {
    compiler.plugin('emit', hook); // Webpack < 4.0.0
  }
};

var VueSSRServerPlugin = function VueSSRServerPlugin (options) {
  if ( options === void 0 ) options = {};

  this.options = Object.assign({
    filename: 'vue-ssr-server-bundle.json'
  }, options);
};

VueSSRServerPlugin.prototype.apply = function apply (compiler) {
  var this$1 = this;
  validate(compiler); // client插件没有

  onEmit(compiler, 'vue-server-plugin', function (compilation, cb) {
    var stats = compilation.getStats().toJson();
    var entryName = Object.keys(stats.entrypoints)[0];
    var entryInfo = stats.entrypoints[entryName];

    if (!entryInfo) {
      // #5553
      return cb()
    }

    var entryAssets = entryInfo.assets.filter(isJS);

    if (entryAssets.length > 1) {
      throw new Error(
        "Server-side bundle should have one single entry file. " +
        "Avoid using CommonsChunkPlugin in the server config."
      )
    }

    var entry = entryAssets[0];
    if (!entry || typeof entry !== 'string') {
      throw new Error(
        ("Entry \"" + entryName + "\" not found. Did you specify the correct entry option?")
      )
    }

    var bundle = {
      entry: entry,
      files: {},
      maps: {}
    };

    stats.assets.forEach(function (asset) {
      if (isJS(asset.name)) {
        bundle.files[asset.name] = compilation.assets[asset.name].source();
      } else if (asset.name.match(/\.js\.map$/)) {
        bundle.maps[asset.name.replace(/\.map$/, '')] = JSON.parse(compilation.assets[asset.name].source());
      }
      // do not emit anything else for server
      delete compilation.assets[asset.name];
    });

    var json = JSON.stringify(bundle, null, 2);
    var filename = this$1.options.filename;

    compilation.assets[filename] = {
      source: function () { return json; },
      size: function () { return json.length; }
    };

    cb();
  });
};

module.exports = VueSSRServerPlugin;
```
可以看到 sever-plugin主要多了：
```
var validate = function (compiler) {
  if (compiler.options.target !== 'node') {
    warn('webpack config `target` should be "node".');
  }

  if (compiler.options.output && compiler.options.output.libraryTarget !== 'commonjs2') {
    warn('webpack config `output.libraryTarget` should be "commonjs2".');
  }

  if (!compiler.options.externals) {
    tip(
      'It is recommended to externalize dependencies in the server build for ' +
      'better build performance.'
    );
  }
};
```
### createBundleRenderer
```
const { createBundleRenderer } = require('vue-server-renderer');

const createRenderer = (bundle, opts = {}) => createBundleRenderer(
  bundle,
  Object.assign(opts, {
    basedir: resolve('./dist'),
    template: fs.readFileSync(templatePath, 'utf-8'),
    runInNewContext: false,
  }),
);

(ctx.body = await renderer.renderToString(context));
```
### renderToString
```
    renderToString: function renderToString (
      component,
      context,
      cb
    ) {
      var assign;

      if (typeof context === 'function') {
        cb = context;
        context = {};
      }
      if (context) {
        templateRenderer.bindRenderFns(context);
      }

      // no callback, return Promise
      var promise;
      if (!cb) {
        ((assign = createPromiseCallback(), promise = assign.promise, cb = assign.cb));
      }

      var result = '';
      var write = createWriteFunction(function (text) {
        result += text;
        return false
      }, cb);
      try {
        render(component, write, context, function (err) {
          if (err) {
            return cb(err)
          }
          if (context && context.rendered) {
            context.rendered(context);
          }
          if (template) {
            try {
              var res = templateRenderer.render(result, context);
              if (typeof res !== 'string') {
                // function template returning promise
                res
                  .then(function (html) { return cb(null, html); })
                  .catch(cb);
              } else {
                cb(null, res);
              }
            } catch (e) {
              cb(e);
            }
          } else {
            cb(null, result);
          }
        });
      } catch (e) {
        cb(e);
      }

      return promise
    },
```

可以看到，vue实现服务端渲染主要是依靠vue-server-renderer，打包时用插件生成bundle，然后部署时提供createBundleRenderer处理页面请求，使用renderToString做服务端渲染。