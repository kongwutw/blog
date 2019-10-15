# HTML 基础知识

## 1 DOCTYPE有什么作用？
用于声明文档使用哪种规范，告诉浏览器使用哪个版本的HTML规范来渲染文档。

## 2 HTML5为什么只需要写 <!DOCTYPE HTML>？
HTML5 不基于 SGML 标准，因此不需要对DTD（文档类型定义）进行引用，但是需要DOCTYPE来规范浏览器行为。

## 3 页面导入样式时，使用link和@import异同？
他们都是外部引用CSS方式，区别如下：
- link属于HTML标签，除了加载CSS外，还能用于定义RSS，定义rel连接属性等作用；而@import是CSS提供，只能加载CSS;
- link引用CSS时候，页面载入时同时加载；@import需要在页面完全加载以后加载，而且@import被引用的CSS会等到引用它的CSS文件被加载完才加载
- import是CSS2.1提出的，只在IE5以上才能被识别，而link是HTML标签，无兼容问题；
link支持使用javascript控制去改变样式，而@import不支持；
- link方式的样式的权重高于@import的权重；

## 4 无样式内容闪烁（FOUC）的原因及解决方案？
- 原因：@import导入CSS文件会等到文档加载完后再加载CSS样式表。因此，在页面DOM加载完成到CSS导入完成之间会有一段时间页面上的内容是没有样式的。
- 解决方法：使用link标签加载CSS样式文件。因为link是顺序加载的，这样页面会等到CSS下载完之后再下载HTML文件，这样先布局好，就不会出现FOUC问题。

## 5 为何推荐 HTML 语义化？
- 用正确的标签做正确的事情后，去掉或丢失样式的时候能够让页面呈现出清晰的结构。
- 语义化让页面的内容结构化，有利于SEO和搜索引擎建立良好沟通，有助于爬虫抓取更多的信息，爬虫依赖于标签来确定上下文和各个关键字的权重。
- 即使在没有样式CSS情况下也以一种文档格式显示，并且是使阅读源代码的人更容易对网站分块，便于团队开发和维护。

## 6 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
- 行内元素：a span img input select 
- 块级元素：div ul ol li dl dt dd h1 p
- 空元素：br hr link meta

## 7 关于置换元素和不可替换元素
- 置换元素：浏览器根据元素的标签和属性，来决定元素的具体显示内容。 例如：浏览器会根据<img>标签的src属性的值来读取图片信息并显示出来，而如果查看html代码，则看不到图片的实际内容；
- 不可替换元素：html 的大多数元素是不可替换元素，即其内容直接表现给用户端（如浏览器）。例如：label中的内容将全被显示。

## 8 标签中src和href的区别？
- href是指网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
- src是指向外部资源的位置，指向的内容会嵌入到文档中当前标签所在的位置，在请求src资源时会将其指向的资源下载并应用到文档内，如js脚本，img图片；当浏览器解析到该元素时，会暂停其他资源的下载和处理，知道将该资源加载、编译、执行完毕，所以一般js脚本会放在底部而不是头部。

## 9 form表单中input元素的readonly与disabled属性描述
- 设置readonly = true，页面上无法修改内容，但是可以通过JavaScript修改,内容会被提交
- 设置disabled = true,无法修改内容，也不会被提交

## 10 img标签中的alt属性的作用是
提供替代图片的信息，使屏幕阅读器能获取到关于图片的信息

## 11 label的作用是什么? 是怎么用的?
label标签用来定义表单控件间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。label 中有两个属性是非常有用的, FOR和ACCESSKEY。
- FOR属性功能：表示label标签要绑定的HTML元素，你点击这个标签的时候，所绑定的元素将获取焦点。
- ACCESSKEY属性功能：表示访问label标签所绑定的元素的热键，当您按下热键，所绑定的元素将获取焦点。

## 12 元素的alt和title属性有什么异同？
在alt和title同时设置的时候，alt作为图片的替代文字出现，title是图片的解释文字。

## 13 input和textarea的区别
- Input标签填写格式是单独出现的，textarea 可设置多行文本，带滚动条的。
- input标签编写代码时大多用来放置字数较少的单行文字内容，textarea 一般让用户可以输入多行文字,输入的文字信息量相比较大。
- input标签的 value值 放在里面，textarea标签的 value值 是放在标签中间.

## 14 onchange和onblur
- onchange 在元素值改变时触发。onchange 属性适用于：input、textarea 以及 select元素。
- onblur 事件会在对象失去焦点时发生。支持该事件的 JavaScript 对象：button, checkbox,fileUpload, layer, frame, password, radio, reset, submit, text,textarea, window。

## 15 用一个div模拟textarea的实现
Div元素上加个contenteditable="true"。H5增加了内容可编辑属性contenteditable，允许用户编辑元素内容包含的任意文本，包括子元素。应用了此属性后，普通的div标签也会像文本域一样可以获得焦点，同时有一个光标在那里。

## 16 onchange和onblur
- onchange 在元素值改变时触发。onchange 属性适用于：input、textarea 以及 select元素。
- onblur 事件会在对象失去焦点时发生。支持该事件的 JavaScript 对象：button, checkbox,fileUpload, layer, frame, password, radio, reset, submit, text,textarea, window。

## 17 HTML5有哪些优势？
- 更多的语义化标签：header、footer、nav、hgroup、article、section、time等；
- 对媒体支持：使用audio和video标签避免先前以插件的方式播放音频、视频带来的麻烦
- Canvas绘图：实现在HTML页面中绘制图形和图像，且所有的绘图内容都是使用js来控制的；
- SVG绘图技术：矢量图技术，可以无限缩放
- 实时通信：HTML5提供了对Web Sockets的支持；
- Geolocation： 地理定位，使用浏览器获得客户端所在的地理坐标；
- 客户端本地存储：会话级客户端存储sessionStorage和跨会话级客户端存储localStorage；
- Web Worker：在浏览器中创建新线程，在HTML中需要运行一些JS代码，由于算法很耗时，若直接在HTML中加入，会导致“主渲染线程”阻塞，此时页面中动画、事件、后续元素的渲染都会无法进行。
- 拖放API：在HTML页面中实现GUI程序中的“拖”和“放”操作，提供了七个新事件。
- 更强大的表单：HTML5提供了功能更加强大的表单界面控件，如calendar、date、time、url、search，使用更方便；
- 文件离线储存：在线情况下，浏览器发现HTML头部有manifest属性，它会请求manifest文件，如果是第一次访问，那么浏览器就会根据manifest文件的内容下载相应的资源，并进行离线存储。如果已经访问过并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面。

总之，H5界面更加精美，内容更加清晰，用户的操作更加简单方便，用户体验大大改善！

## 18 HTML5新增的input类型：
- email search url color date week
- tel 在PC浏览器中无效果，只在手机中有效
- number 只允许输入数字，且可以限定范围和步长
- range 在指定范围内选择，可以限定范围和步长

## 19 HTML5 template元素?
在html中如果有很多重复的结构，就可以把重复部分写在这个标签内部供整个文档调用。2013年定稿的template标签为我们提供一种更统一、功能更强大的模板文本存放方式。

## 20 localStorage常用的api有？
- localStorage.setItem( k, v ); // 在会话中保存数据
- localStorage.getItem( k ); // 取出会话中的数据
- localStorage.removeItem( k ); // 删除会话中的某个数据
- localStorage.clear(); // 清空会话中的所有键值对
- localStorage.length // 获取键值对的个数

