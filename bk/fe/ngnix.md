# 关于ngnix
Nginx是一款2004年由俄罗斯的Igor Sysoev使用C语言开发的开发高性能的 Web和反向代理服务器，也是一个 IMAP/POP3/SMTP 代理服务器。在高连接并发的情况下，Nginx是Apache服务器不错的替代品。

Apache的发展时期很长，而且是毫无争议的世界第一大服务器。它有着很多优点：稳定、开源、跨平台等等。但它出现的时间太长了，它兴起的年代，互联网产业远远比不上现在。所以它被设计为一个重量级的，不支持高并发的服务器。在Apache上运行数以万计的并发访问，会导致服务器消耗大量内存，导致HTTP请求的平均响应速度降低，决定了Apache不可能成为高性能WEB服务器。

## 安装ngnix
- nginx编译依赖gcc环境
```
yum install gcc-c++
```
- 安装pcre，nginx的http模块使用pcre来解析正则表达式.
```
yum install -y pcre pcre-devel
```
- 安装zlib，nginx使用zlib对http包的内容进行gzip进行压缩和解压缩：
```
yum install -y zlib zlib-devel
```
- openssl，一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及SSL协议，并提供丰富的应用程序供测试或其它目的使用，nginx不仅支持http协议，还支持https（即在ssl协议上传输http）：.
```
yum install -y openssl openssl-devel
```
- 下载nginx源码包
```
wget http://nginx.org/download/nginx-1.12.0.tar.gz
```
- 解压
```
tar -zxvf nginx-1.12.2.tar.gz

cd nginx-1.12.0
```

- 配置编译参数(可以使用./configure --help查询详细参数)
```
./configure \
--prefix=/usr/local/nginx \
--pid-path=/var/run/nginx/nginx.pid \
--lock-path=/var/lock/nginx.lock \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module \
--http-client-body-temp-path=/var/temp/nginx/client \
--http-proxy-temp-path=/var/temp/nginx/proxy \
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
--http-scgi-temp-path=/var/temp/nginx/scgi
```
注：安装之前需要手动创建上面指定的nginx文件夹，即/var/temp、/var/temp/nginx、/var/run/nginx/文件夹，否则启动时报错。

- 编译并安装
```
make && make install
```
可以进入/usr/local/nginx查看文件是否存在conf、sbin、html文件夹，若存在则安装成功。
- nginx命令全局执行设置
```
cd /usr/local/nginx/sbin/
ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx
```
## ngnix常用命令
- 查看nginx版本
```
nginx  -v
```

- 启动(一般都需要root权限，所以需要加sudo)
```
sudo nginx
```

- 停止
```
nginx -s stop

nginx -s quit
```

- 动态加载
```
nginx -s reload
```

- 测试配置文件nginx.conf正确性
```
nginx  -t
```

## 真实配置
### 配置静态官网
以下是一个真实静态官网的配置，支持http和https，打开nginx.conf文件，输入如下内容即可：
```
user  root;
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

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

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
    gzip_disable "msie6";
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
```

### 配置前后端分离的vue 
内容参考以下例子：
```
server {
        listen 80;
        server_name localhost;
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        root html;
        }

        root /home/xqart/h5/current/dist ;
        index index.html;

        location / {
        try_files $uri $uri/ @router;
        index index.html;
        }

        location @router {
        rewrite ^.*$ /index.html last;
        }

        location /api {
            proxy_pass http://localhost:3600;
        }
        location /assets {
            proxy_pass http://localhost:3600;
        }
}
```