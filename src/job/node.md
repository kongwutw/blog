# js 后端开发基础面试题

## 1 为什么要用node?
- Node.js 是谷歌 V8 引擎（公认最快的 Javascript 解析引擎）、libuv平台抽象层（一个开源的、为 Node 定制而生的跨平台的异步 IO 库）以及主体使用 Javscript 编写的核心库三者集合的一个包装外壳；
- 一个使用事件驱动来实现异步开发的优秀解决方案，非阻塞IO, 能够处理庞大的并且高吞吐量的并发连接；
- 前后端使用统一编程语言，最佳地重用开发人员资源；
- ES2015 发布后，发展很快，各大主流公司应用广泛，生态繁荣。

## 2 谈谈 node 的适合场景？
NodeJS处理并发的能力强，但处理计算和逻辑的能力反而很弱，适合运用在高并发、I/O密集、少量业务逻辑的场景。因此，如果我们把复杂的逻辑运算都搬到前端（客户端）完成，而NodeJS只需要提供异步I/O，这样就可以实现对高并发的高性能处理。比如：RESTFUL API、实时聊天、客户端逻辑强大的单页APP。

## 3 谈谈 node的构架?
由 v8 、libuv, 内置模块、本地模块和其他辅助服务组成：
- v8：虚拟机的功能，执行js代码和提供C++函数接口，为node提供v8初始化，创建context，scope等；
- libuv：基于事件驱动的异步IO模型库，我们的js代码发出请求，最终由libuv完成，回调函数在libuv触发；
- 内置模块：由C++代码写成各类模块，包含了crypto，zlib, file stream等基础功能；
- 本地模块：由js写成，提供我们应用程序调用的库，同时这些模块又依赖内置模块来获取相应的服务支持；

## 4 node中的事件循环是什么样子的?
event loop其实就是一个事件队列，先加入先执行，执行完一次队列，再次循环遍历看有没有新事件加入队列．执行中的叫IO events, setImmediate是在当前队列立即执行,setTimout/setInterval是把执行定时到下一个队列，process.nextTick是在当前执行完，下次遍历前执行．所以总体顺序是: IO events >> setImmediate >> setTimeout/setInterval >> process.nextTick。

## 5 读写一个文件有多少种方法?
- POSIX式底层读写 
- 流式读写 
- 同步文件读写 
- 异步文件读写

## 6 node是怎样支持https,tls的?
- openssl生成公钥私钥 
- 服务器或客户端使用https替代http 
- 服务器或客户端加载公钥私钥证书

## 7 怎样实现一个简单的http服务器?
三部曲：加载http模块，创建服务器，监听端口
```
var http = require('http'); // 加载http模块
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // 200代表状态成功, 文档类型是给浏览器识别用的
    res.write('
      <meta charset="UTF-8">
      <h1>欢迎使用nodejs</h1> 
    '); // 返回给客户端的html数据
    res.end(); // 结束输出流
}).listen(3000); // 绑定端口, 通过 http://localhost:3000 访问
```

## 8 怎样绑定node程序到80端口?
- sudo 启动，因为在类Unix系统中监听80端口需要超级用户权限，不推荐
- apache/nginx代理 
- 用操作系统的firewall iptables进行端口重定向

## 9 如何避免回调地狱？
- 模块化：将回调函数转换为独立的函数
- 使用流程控制库，例如[aync]
- 使用Promise
- 使用async/await

## 10 最喜欢node哪个HTTP框架？为什么？
- 提到Node.js开发，不得不提服务端的开发框架express和koa，都是对HTTP Request和HTTP Response两个对象的封装和处理，应用的生命周期维护以及视图的处理等。Express主要基于Connect中间件框架，功能丰富，随取随用，并且框架自身封装了大量便利的功能，比如路由、视图处理等等。而koa主要基于co中间件框架，框架自身并没集成太多功能，大部分功能需要用户自行require中间件去解决，但是由于其基于ES6 generator特性的中间件机制，解决了长期诟病的“callback hell”和麻烦的错误处理的问题，大受开发者欢迎。
- 而基于koa框架，则会考虑360的thinkjs或阿里的egg，因为egg用得多且只专注于提供 Web 开发的核心功能和一套灵活可扩展的插件机制，而不去集成如数据库、模板引擎、前端框架等功能，更适合在团队中使用。

## 11 下列代码的输出结果？
```
var value1 = 0, value2 = 0, value3 = 0;
for ( var i = 1; i <= 3; i++) {
    var i2 = i;
    (function() {
        var i3 = i;
        setTimeout(function() {
            value1 += i;
            value2 += i2;
            value3 += i3;
        }, 1);
    })();
}
setTimeout(function() {
    console.log(value1, value2, value3);
}, 100);
```
12 9 6

## 结语
更多面试题请关注本公众号，node开发的面试远不止这些！