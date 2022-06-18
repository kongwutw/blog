import{_ as e,c as a,o as t,a as n}from"./app.9aa1eb8d.js";const f='{"title":"1_2 \u6700\u7EC8\u4EE3\u7801\u548C\u6548\u679C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6700\u7EC8\u4EE3\u7801","slug":"\u6700\u7EC8\u4EE3\u7801"},{"level":2,"title":"\u6700\u7EC8\u6548\u679C(\u8FD8\u6709\u5F85\u5B8C\u5584)","slug":"\u6700\u7EC8\u6548\u679C-\u8FD8\u6709\u5F85\u5B8C\u5584"}],"relativePath":"tech/site/1_2.md","lastUpdated":1655551077721}',r={},i=n(`<h1 id="_1-2-\u6700\u7EC8\u4EE3\u7801\u548C\u6548\u679C" tabindex="-1">1_2 \u6700\u7EC8\u4EE3\u7801\u548C\u6548\u679C <a class="header-anchor" href="#_1-2-\u6700\u7EC8\u4EE3\u7801\u548C\u6548\u679C" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u5206\u4EAB\u4E00\u4E0B\u6700\u7EC8\u4EE3\u7801\u548C\u6548\u679C\u3002</p><h2 id="\u6700\u7EC8\u4EE3\u7801" tabindex="-1">\u6700\u7EC8\u4EE3\u7801 <a class="header-anchor" href="#\u6700\u7EC8\u4EE3\u7801" aria-hidden="true">#</a></h2><ul><li>\u670D\u52A1\u5668\u53EA\u6709\u4E00\u4E2Aindex.js\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</li></ul><div class="language-"><pre><code>const Koa = require(&#39;koa&#39;);
const KoaStatic = require(&#39;koa-static&#39;);
const cp = require(&#39;child_process&#39;);

const app = new Koa();

// \u4F7F\u7528koa-static\u4E2D\u95F4\u4EF6\u5904\u7406\u9759\u6001\u8D44\u6E90
app.use(KoaStatic(&#39;./public&#39;)); 

app.listen(3600);

// \u5728\u975E\u751F\u4EA7\u73AF\u5883\u4E0B\uFF0C\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE\u670D\u52A1
cp.exec(&#39;open http://localhost:3600/&#39;);
</code></pre></div><h2 id="\u6700\u7EC8\u6548\u679C-\u8FD8\u6709\u5F85\u5B8C\u5584" tabindex="-1">\u6700\u7EC8\u6548\u679C(\u8FD8\u6709\u5F85\u5B8C\u5584) <a class="header-anchor" href="#\u6700\u7EC8\u6548\u679C-\u8FD8\u6709\u5F85\u5B8C\u5584" aria-hidden="true">#</a></h2><p>\u53C2\u7167\u57FA\u4E8E\u6B64\u5F00\u53D1\u7684\u4F01\u4E1A\u771F\u5B9E\u5B98\u7F51\uFF1A<a href="https://www.yibiankeji.com/" target="_blank" rel="noopener noreferrer">https://www.yibiankeji.com/</a></p>`,7),o=[i];function s(c,_,d,p,l,h){return t(),a("div",null,o)}var b=e(r,[["render",s]]);export{f as __pageData,b as default};
