import{_ as e,c as a,o as n,a as t}from"./app.65637521.js";const k='{"title":"4_2 koa \u6E90\u7801","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6E90\u7801\u7ED3\u6784","slug":"\u6E90\u7801\u7ED3\u6784"},{"level":2,"title":"\u4E00\u4E9B\u5E38\u7528\u65B9\u6CD5\u7684\u5B9E\u73B0","slug":"\u4E00\u4E9B\u5E38\u7528\u65B9\u6CD5\u7684\u5B9E\u73B0"}],"relativePath":"tech/site/4_2.md","lastUpdated":1645373384279}',s={},r=t(`<h1 id="_4-2-koa-\u6E90\u7801" tabindex="-1">4_2 koa \u6E90\u7801 <a class="header-anchor" href="#_4-2-koa-\u6E90\u7801" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u5E26\u7740\u5927\u5BB6\u7B80\u5355\u770B\u4E00\u4E0Bkoa2.x\u6700\u65B0\u7248\u672C\u7684\u6E90\u7801\u3002</p><h2 id="\u6E90\u7801\u7ED3\u6784" tabindex="-1">\u6E90\u7801\u7ED3\u6784 <a class="header-anchor" href="#\u6E90\u7801\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u5728\u4E0A\u4E00\u7AE0\u6211\u4EEC\u5DF2\u7ECF\u5206\u4EAB\u4E86\u67E5\u770B\u4F9D\u8D56\u5E93\u6E90\u7801\u7684\u65B9\u6CD5\uFF0C\u672C\u8282\u6211\u4EEC\u8FD8\u662F\u57FA\u4E8E\u65B9\u5F0F\u4E00\uFF0C\u76F4\u63A5\u5230\u9879\u76EE\u4E0Bde node_modules\u76EE\u5F55\u4E0B\u627E\u5230koa\u3002\u5305\u542B\u4E86\u5982\u4E0B\u6587\u4EF6\uFF1A</p><div class="language-"><pre><code>\u251C\u2500\u2500 History.md // \u5386\u53F2\u7248\u672C\u7BA1\u7406
\u251C\u2500\u2500 LICENSE // \u5F00\u6E90\u534F\u8BAE
\u251C\u2500\u2500 Readme.md // \u4F9D\u8D56\u5E93\u7684\u6709\u5173\u4ECB\u7ECD
\u251C\u2500\u2500 lib
\u2502\xA0\xA0 \u251C\u2500\u2500 application.js //\u5165\u53E3\u6587\u4EF6\uFF0C\u5C01\u88C5\u4E86context\uFF0Crequest\uFF0Cresponse\uFF0C\u4EE5\u53CA\u6700\u6838\u5FC3\u7684\u4E2D\u95F4\u4EF6\u5904\u7406\u6D41\u7A0B\u3002
\u2502\xA0\xA0 \u251C\u2500\u2500 context.js //\u5904\u7406\u5E94\u7528\u4E0A\u4E0B\u6587\uFF0C\u91CC\u9762\u76F4\u63A5\u5C01\u88C5\u90E8\u5206request.js\u548Cresponse.js\u7684\u65B9\u6CD5
\u2502\xA0\xA0 \u251C\u2500\u2500 request.js // \u5904\u7406http\u8BF7\u6C42
\u2502\xA0\xA0 \u2514\u2500\u2500 response.js // \u5904\u7406http\u54CD\u5E94
\u2514\u2500\u2500 package.json // \u6A21\u5757\u7BA1\u7406
</code></pre></div><p>\u6211\u4EEC\u770B\u5230\u6E90\u7801\u90FD\u5728lib\u76EE\u5F55\u4E0B, koa2.x\u4F5C\u4E3A\u4E00\u4E2Aweb\u6846\u67B6\uFF0C\u53EA\u63D0\u4F9B\u4E86\u5C01\u88C5\u597D\u7684HTTP\u670D\u52A1\uFF0C\u4EE5\u53CA\u57FA\u4E8Easync/await\u7684\u4E2D\u95F4\u4EF6\u5BB9\u5668\u3002\u7528Koa.js\u60F3\u5B9E\u73B0\u5927\u90E8\u5206Web\u529F\u80FD\u7684\u8BDD\uFF0C\u5C31\u9700\u8981\u901A\u8FC7\u4E2D\u95F4\u4EF6\u6765\u5B9E\u73B0\uFF0C\u5982\u6211\u4EEC\u524D\u9762\u7528\u5230\u7684koa-static\u3002</p><h2 id="\u4E00\u4E9B\u5E38\u7528\u65B9\u6CD5\u7684\u5B9E\u73B0" tabindex="-1">\u4E00\u4E9B\u5E38\u7528\u65B9\u6CD5\u7684\u5B9E\u73B0 <a class="header-anchor" href="#\u4E00\u4E9B\u5E38\u7528\u65B9\u6CD5\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h2><ul><li>listen\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F</li></ul><div class="language-"><pre><code> listen(...args) {
    debug(&#39;listen&#39;);
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }
</code></pre></div><ul><li>app.use() \u5E72\u4E86\u5565\uFF1F</li></ul><div class="language-"><pre><code>  use(fn) {
    ...\u7701\u7565\u4E86\u5404\u79CD\u5F02\u5E38\u548C\u517C\u5BB9\u5904\u7406
    if (isGeneratorFunction(fn)) {
      fn = convert(fn); 
      // koa@2\u4E2D\u95F4\u4EF6\u53EA\u652F\u6301 async/await \u5C01\u88C5\u7684\uFF0C\u5982\u679C\u8981\u4F7F\u7528koa@1\u57FA\u4E8Egenerator\u4E2D\u95F4\u4EF6\uFF0C\u9700\u8981\u901A\u8FC7\u4E2D\u95F4\u4EF6koa-convert\u5C01\u88C5\u4E00\u4E0B\u624D\u80FD\u4F7F\u7528
    }
    this.middleware.push(fn);
    return this;
  }
</code></pre></div><ul><li>callback \u6E90\u7801</li></ul><div class="language-"><pre><code>  callback() {
    const fn = compose(this.middleware);
    if (!this.listenerCount(&#39;error&#39;)) this.on(&#39;error&#39;, this.onerror);
    const handleRequest = (req, res) =&gt; {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };
    return handleRequest;
  }
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u6211\u4EEC\u5B9E\u4F8B\u5316 <code>const app = new koa();</code> \u540E\uFF0C\u6267\u884C <code>app.use()</code> \u7CFB\u5217\u4E2D\u95F4\u4EF6\u540E\uFF0C\u4F1A\u628A\u5404\u4E2D\u95F4\u4EF6\u6DFB\u52A0\u8FDB middleware \u8FD9\u4E2A\u6570\u7EC4\uFF0C\u7136\u540E\u518D\u6267\u884C<code>app.listen()</code> \u7684\u65F6\u5019\uFF0C\u4F1A\u628Acallback()\u56DE\u8C03\u51FD\u6570\u4F20\u5165 node\u539F\u751F\u7684http\u6A21\u5757\u7684createServer()\u65B9\u6CD5\uFF0C\u7136\u540E\u5728\u542F\u52A8\u670D\u52A1\u5668\u4EE5\u540E\u5C31\u4F1A\u6267\u884Ccallback()\u4E2D\u8BF7\u6C42\u3001\u54CD\u5E94\u3001\u4E0A\u4E0B\u6587\u4EE5\u53CA\u4E2D\u95F4\u4EF6\u7684\u6709\u5173\u903B\u8F91\u4E86\u3002\u66F4\u6DF1\u5165\u7684\u63A2\u7A76\uFF0C\u5C31\u662F\u57FA\u4E8E\u6B64\u4E00\u6B65\u6B65\u5206\u6790\u5404\u4E2A\u6A21\u5757\u7684\u5B9E\u73B0\u4E86\u3002</p>`,14),o=[r];function c(i,d,l,p,h,u){return n(),a("div",null,o)}var f=e(s,[["render",c]]);export{k as __pageData,f as default};
