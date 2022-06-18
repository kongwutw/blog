import{_ as n,c as e,o as i,a as t}from"./app.9aa1eb8d.js";const x='{"title":"6_3 \u57FA\u4E8Engnix\u90E8\u7F72\u9759\u6001\u7F51\u7AD9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5173\u4E8Engnix","slug":"\u5173\u4E8Engnix"},{"level":2,"title":"\u5B89\u88C5ngnix","slug":"\u5B89\u88C5ngnix"},{"level":2,"title":"ngnix\u5E38\u7528\u547D\u4EE4","slug":"ngnix\u5E38\u7528\u547D\u4EE4"},{"level":2,"title":"\u914D\u7F6E\u9759\u6001\u5B98\u7F51","slug":"\u914D\u7F6E\u9759\u6001\u5B98\u7F51"}],"relativePath":"tech/site/6_3.md","lastUpdated":1655551077726}',l={},a=t(`<h1 id="_6-3-\u57FA\u4E8Engnix\u90E8\u7F72\u9759\u6001\u7F51\u7AD9" tabindex="-1">6_3 \u57FA\u4E8Engnix\u90E8\u7F72\u9759\u6001\u7F51\u7AD9 <a class="header-anchor" href="#_6-3-\u57FA\u4E8Engnix\u90E8\u7F72\u9759\u6001\u7F51\u7AD9" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5206\u4EAB\u7684\u662F\u4F7F\u7528ngnix\u90E8\u7F72\u9759\u6001\u670D\u52A1\u5668\u3002</p><h2 id="\u5173\u4E8Engnix" tabindex="-1">\u5173\u4E8Engnix <a class="header-anchor" href="#\u5173\u4E8Engnix" aria-hidden="true">#</a></h2><p>Nginx\u662F\u4E00\u6B3E2004\u5E74\u7531\u4FC4\u7F57\u65AF\u7684Igor Sysoev\u4F7F\u7528C\u8BED\u8A00\u5F00\u53D1\u7684\u5F00\u53D1\u9AD8\u6027\u80FD\u7684 Web\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4E5F\u662F\u4E00\u4E2A IMAP/POP3/SMTP \u4EE3\u7406\u670D\u52A1\u5668\u3002\u5728\u9AD8\u8FDE\u63A5\u5E76\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0CNginx\u662FApache\u670D\u52A1\u5668\u4E0D\u9519\u7684\u66FF\u4EE3\u54C1\u3002</p><p>Apache\u7684\u53D1\u5C55\u65F6\u671F\u5F88\u957F\uFF0C\u800C\u4E14\u662F\u6BEB\u65E0\u4E89\u8BAE\u7684\u4E16\u754C\u7B2C\u4E00\u5927\u670D\u52A1\u5668\u3002\u5B83\u6709\u7740\u5F88\u591A\u4F18\u70B9\uFF1A\u7A33\u5B9A\u3001\u5F00\u6E90\u3001\u8DE8\u5E73\u53F0\u7B49\u7B49\u3002\u4F46\u5B83\u51FA\u73B0\u7684\u65F6\u95F4\u592A\u957F\u4E86\uFF0C\u5B83\u5174\u8D77\u7684\u5E74\u4EE3\uFF0C\u4E92\u8054\u7F51\u4EA7\u4E1A\u8FDC\u8FDC\u6BD4\u4E0D\u4E0A\u73B0\u5728\u3002\u6240\u4EE5\u5B83\u88AB\u8BBE\u8BA1\u4E3A\u4E00\u4E2A\u91CD\u91CF\u7EA7\u7684\uFF0C\u4E0D\u652F\u6301\u9AD8\u5E76\u53D1\u7684\u670D\u52A1\u5668\u3002\u5728Apache\u4E0A\u8FD0\u884C\u6570\u4EE5\u4E07\u8BA1\u7684\u5E76\u53D1\u8BBF\u95EE\uFF0C\u4F1A\u5BFC\u81F4\u670D\u52A1\u5668\u6D88\u8017\u5927\u91CF\u5185\u5B58\uFF0C\u5BFC\u81F4HTTP\u8BF7\u6C42\u7684\u5E73\u5747\u54CD\u5E94\u901F\u5EA6\u964D\u4F4E\uFF0C\u51B3\u5B9A\u4E86Apache\u4E0D\u53EF\u80FD\u6210\u4E3A\u9AD8\u6027\u80FDWEB\u670D\u52A1\u5668\u3002</p><h2 id="\u5B89\u88C5ngnix" tabindex="-1">\u5B89\u88C5ngnix <a class="header-anchor" href="#\u5B89\u88C5ngnix" aria-hidden="true">#</a></h2><ul><li>nginx\u7F16\u8BD1\u4F9D\u8D56gcc\u73AF\u5883</li></ul><div class="language-"><pre><code>yum install gcc-c++
</code></pre></div><ul><li>\u5B89\u88C5pcre\uFF0Cnginx\u7684http\u6A21\u5757\u4F7F\u7528pcre\u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F.</li></ul><div class="language-"><pre><code>yum install -y pcre pcre-devel
</code></pre></div><ul><li>\u5B89\u88C5zlib\uFF0Cnginx\u4F7F\u7528zlib\u5BF9http\u5305\u7684\u5185\u5BB9\u8FDB\u884Cgzip\u8FDB\u884C\u538B\u7F29\u548C\u89E3\u538B\u7F29\uFF1A</li></ul><div class="language-"><pre><code>yum install -y zlib zlib-devel
</code></pre></div><ul><li>openssl\uFF0C\u4E00\u4E2A\u5F3A\u5927\u7684\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0C\u56CA\u62EC\u4E3B\u8981\u7684\u5BC6\u7801\u7B97\u6CD5\u3001\u5E38\u7528\u7684\u5BC6\u94A5\u548C\u8BC1\u4E66\u5C01\u88C5\u7BA1\u7406\u529F\u80FD\u53CASSL\u534F\u8BAE\uFF0C\u5E76\u63D0\u4F9B\u4E30\u5BCC\u7684\u5E94\u7528\u7A0B\u5E8F\u4F9B\u6D4B\u8BD5\u6216\u5176\u5B83\u76EE\u7684\u4F7F\u7528\uFF0Cnginx\u4E0D\u4EC5\u652F\u6301http\u534F\u8BAE\uFF0C\u8FD8\u652F\u6301https\uFF08\u5373\u5728ssl\u534F\u8BAE\u4E0A\u4F20\u8F93http\uFF09\uFF1A.</li></ul><div class="language-"><pre><code>yum install -y openssl openssl-devel
</code></pre></div><ul><li>\u4E0B\u8F7Dnginx\u6E90\u7801\u5305</li></ul><div class="language-"><pre><code>wget http://nginx.org/download/nginx-1.12.0.tar.gz
</code></pre></div><ul><li>\u89E3\u538B</li></ul><div class="language-"><pre><code>tar -zxvf nginx-1.12.2.tar.gz

cd nginx-1.12.0
</code></pre></div><ul><li>\u914D\u7F6E\u7F16\u8BD1\u53C2\u6570(\u53EF\u4EE5\u4F7F\u7528./configure --help\u67E5\u8BE2\u8BE6\u7EC6\u53C2\u6570)</li></ul><div class="language-"><pre><code>./configure \\
--prefix=/usr/local/nginx \\
--pid-path=/var/run/nginx/nginx.pid \\
--lock-path=/var/lock/nginx.lock \\
--error-log-path=/var/log/nginx/error.log \\
--http-log-path=/var/log/nginx/access.log \\
--with-http_gzip_static_module \\
--http-client-body-temp-path=/var/temp/nginx/client \\
--http-proxy-temp-path=/var/temp/nginx/proxy \\
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\
--http-scgi-temp-path=/var/temp/nginx/scgi
</code></pre></div><p>\u6CE8\uFF1A\u5B89\u88C5\u4E4B\u524D\u9700\u8981\u624B\u52A8\u521B\u5EFA\u4E0A\u9762\u6307\u5B9A\u7684nginx\u6587\u4EF6\u5939\uFF0C\u5373/var/temp\u3001/var/temp/nginx\u3001/var/run/nginx/\u6587\u4EF6\u5939\uFF0C\u5426\u5219\u542F\u52A8\u65F6\u62A5\u9519\u3002</p><ul><li>\u7F16\u8BD1\u5E76\u5B89\u88C5</li></ul><div class="language-"><pre><code>make &amp;&amp; make install
</code></pre></div><p>\u53EF\u4EE5\u8FDB\u5165/usr/local/nginx\u67E5\u770B\u6587\u4EF6\u662F\u5426\u5B58\u5728conf\u3001sbin\u3001html\u6587\u4EF6\u5939\uFF0C\u82E5\u5B58\u5728\u5219\u5B89\u88C5\u6210\u529F\u3002</p><ul><li>nginx\u547D\u4EE4\u5168\u5C40\u6267\u884C\u8BBE\u7F6E</li></ul><div class="language-"><pre><code>cd /usr/local/nginx/sbin/
ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx
</code></pre></div><h2 id="ngnix\u5E38\u7528\u547D\u4EE4" tabindex="-1">ngnix\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#ngnix\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><ul><li>\u67E5\u770Bnginx\u7248\u672C</li></ul><div class="language-"><pre><code>nginx  -v
</code></pre></div><ul><li>\u542F\u52A8(\u4E00\u822C\u90FD\u9700\u8981root\u6743\u9650\uFF0C\u6240\u4EE5\u9700\u8981\u52A0sudo)</li></ul><div class="language-"><pre><code>sudo nginx
</code></pre></div><ul><li>\u505C\u6B62</li></ul><div class="language-"><pre><code>nginx -s stop

nginx -s quit
</code></pre></div><ul><li>\u52A8\u6001\u52A0\u8F7D</li></ul><div class="language-"><pre><code>nginx -s reload
</code></pre></div><ul><li>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6nginx.conf\u6B63\u786E\u6027</li></ul><div class="language-"><pre><code>nginx  -t
</code></pre></div><h2 id="\u914D\u7F6E\u9759\u6001\u5B98\u7F51" tabindex="-1">\u914D\u7F6E\u9759\u6001\u5B98\u7F51 <a class="header-anchor" href="#\u914D\u7F6E\u9759\u6001\u5B98\u7F51" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u771F\u5B9E\u9759\u6001\u5B98\u7F51\u7684\u914D\u7F6E\uFF0C\u652F\u6301http\u548Chttps\uFF0C\u6253\u5F00nginx.conf\u6587\u4EF6\uFF0C\u8F93\u5165\u5982\u4E0B\u5185\u5BB9\u5373\u53EF\uFF1A</p><div class="language-"><pre><code>user  root;
worker_processes  2;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    use epoll;
    multi_accept on;
    worker_connections  1024;
}
http {
    include       /etc/nginx/mime.types;
    server_names_hash_bucket_size 64;
    server_tokens off;
    tcp_nopush on;
    tcp_nodelay on;

    default_type  application/json;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;
    client_max_body_size 50m;

    keepalive_timeout  65;
    client_header_timeout 10;
    client_body_timeout 10;
    reset_timedout_connection on;
    send_timeout 10;

    limit_conn addr 5000;
    limit_conn_zone $binary_remote_addr zone=addr:5m;

    gzip  on;
    gzip_disable &quot;msie6&quot;;
    gzip_proxied any;
    gzip_min_length 1000;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

    open_file_cache max=100000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
    open_file_cache_errors on;

    server {
        listen 80;
	listen 443 ssl;
        server_name www.test.com;
	# ssl on;
    	ssl_certificate   cert/1540770424771.pem;
    	ssl_certificate_key  cert/1540770424771.key;
    	ssl_session_timeout 5m;
    	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    	ssl_prefer_server_ciphers on;

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root html;
        }

        root /home/xqart/office/current/dist ;
        index index.html;
    }
}
</code></pre></div>`,40),o=[a];function r(s,c,p,d,g,_){return i(),e("div",null,o)}var h=n(l,[["render",r]]);export{x as __pageData,h as default};
