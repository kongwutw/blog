# 关于nodejs
作为前端工程师，不得不懂nodejs。

## 什么是 nodejs?
百度百科是这样定义的：Node.js是一个Javascript运行环境。从定义看， Node.js 不是一个 JavaScript 框架，更不是浏览器端的库，而是一个让 JavaScript 运行在服务端的开发平台。

### node特点
chrome v8引擎， 事件驱动，非阻塞 I/O， 单线程

### 如何安装nodejs？
在不同系统下，安装 nodejs，都有很多种方法。主流的方式有：

- 直接到 nodejs 的官网[https://nodejs.org/](https://nodejs.org/)下载页 下载 对应系统下 自己想要的版本，成功后一路点击 安装即可, 如遇到问题，网上一搜就有对应的解决办法。
- 使用 nvm 安装，它是 Node Version Manager（Node版本管理器）的简称，用它可以方便的在机器上安装并维护多个Node的版本。

## node 发展历程
原生node提供web服务
```
const Server = http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type': 'application/json;charset=utf-8;'});
  res.write('{text: "hello world!"}');
  res.end();
}).listen(8888)；
```
express 封装开发web服务
```
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('hello world!');
});
app.listen(8888);
```
随着es6普及，express团队基于generator推出koa框架
koa 1.x
```
var koa = require('koa');
var app = koa();

app.use('/file', function *() {
    yield readFile1();
    var data = yield readFile2();
    this.body = data;
});
app.listen(8888);
```
基于promise配合async 实现异步开发 2.x版本
koa 2.x
```
app.use(async (ctx, next) => {
    await next();
    var data = await readFile();
    ctx.response.type = 'text/plain';
    ctx.response.body = data;
});

```
#### koa vs express
- express没有统一的错误处理，而koa有默认的错误处理方式
- Koa 支持 es6 语法，Koa 在内核方法中不绑定任何中间件，不提供路由功能和某些工具，摒弃了的回调，采用 generator 或 promise的方式，在 Context中，Koa 对 request 和 response 进行了封装，使用方式也相应改变
#### koa1 vs koa2
- 中间件的使用:  koa1依赖 co 并采用 generator 函数，在函数内使用 yield 语句，而koa2增加了箭头函数，移除了 co 依赖，使用 Promise，因此可以结合 async，await 使用；
- context 对象的获取：koa1为this 对象，this.req, this.res；koa2: cxt 参数，cxt.req, cxt.res。
## koa2.x
listen 方法实现
```
 listen(...args) {
    debug('listen');
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }

```
引入中间件 use 方法,将generator模式中间件添加到middleware中
```
use(fn) {
    if (isGeneratorFunction(fn)) {
      fn = convert(fn); 
    }
    this.middleware.push(fn);
    return this;
  }
```
koa callback回调方法，接收到请求后，依据中间件各个部分依次处理请求，返回处理结果
```
callback() {
  const fn = compose(this.middleware);
  if (!this.listenerCount('error')) this.on('error', this.onerror);
  const handleRequest = (req, res) => {
    const ctx = this.createContext(req, res);
    return this.handleRequest(ctx, fn);
  };
  return handleRequest;
}

```
中间件分为狭义中间件和广义中间件，狭义中间件是指可以直接使用app.use()来挂载的中间件，例koa-static，广义中间件是指不能直接被app.use()加载，但是可以间接挂载进项目，或者通过封装引入项目，例如：koa-router
## node fs模块
- Node.js内置的fs模块就是文件系统模块，负责读写文件
fs 读异步
```
use strict';

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
```
fs 读同步
```
'use strict';

var fs = require('fs');

var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);
```
fs 写异步
```
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
```
fs 写同步
```
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);
```
fs 信息
```
'use strict';

var fs = require('fs');

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
```
## 关于nvm
维护多个版本的node将会是一件非常麻烦的事情，而nvm就是为解决这个问题而产生的：
```
  sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```
常用命令
```
nvm ls-remote // 查看node有哪些版本可以安装
nvm ls // 查看本地 所有安装的版本
nvm install node // 安装最新版 Node.js
nvm install --lts // 安装最新稳定版
nvm install v10.10.0 // 安装 node 10.10.0
nvm use v9.6.2 // 切换到node 9.6.2
```
