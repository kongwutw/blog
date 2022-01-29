---
sidebar: auto
collapsable: false
---
最近几个月因为公司的业务需求，一直在折腾小程序，从开始的完全不熟悉，到后面被各种坑折磨，是时候写一篇总结了，避免下一次遇到还找不到解决的方案。

其实主要还是关于一些常用的东西进行了一次汇总，作了一个简单的总结而已，大多都跟业务相关，需要注意到的一些关注点。入门教程还是推荐直接参考微信开发的官方文档。

本篇文档仅针对于原生官方API进行微信小程序开发，类似uni-app这类框架的总结后期再继续分享。

目录：

- [配置项](#配置项app-json和page-json)
- [语法区别](#语法区别)
- [组件](#组件)
- [事件系统](#事件系统)
- [小程序相关机制](#小程序相关机制)
- [小程序运行流程](#小程序运行流程)
- [生命周期函数](#生命周期函数)
- [网络](#网络)
- [自定义tabBar](#自定义tabbar)
- [小程序登录流程](#小程序登录流程)
- [小程序优化操作](#小程序优化操作)
    
##  配置项app.json和page.json 

###  app.json

首先，需要确定的是，app.json 是小程序的全局配置，放在根目录下。

常用的一些字段如下：

- pages： 这个用于设置页面的路径，通常访问的页面都放在pages文件夹里面，且必须在这个全局配置文件中设置好路径，否则访问的时候会报错找不到该路径，**写在 pages 字段的第一个页面就是这个小程序的首页**（打开小程序看到的第一个页面）
- window: 全局样式的配置
    - 导航栏相关：可配置导航栏背景颜色、标题颜色，标题内容，
    - 可以隐藏导航栏（navigationStyle设置为custom，但需要注意，**自定义导航栏仍然保留右上角胶囊，且没有返回键，如果想要实现返回功能，需要自己自定义返回的样式和功能**），==该设置对web-view 组件无效==
    - 窗口的背景色， backgroundColor，（即小程序下拉时露出的那一截），另外，仅ios支持的还有backgroundColorTop和backgroundColorBottom， 顶部和底部窗口的背景色
    - 下拉loading的样式，只有黑色和白色（dark / light）
    - **enablePullDownRefresh**，小程序默认页面是没有下拉刷新功能的，如果在app.json中配置该项为true，则所有页面都可以生效。如果只想在单个页面使用下拉刷新，需要在对应的page.json中进行配置
    - onReachBottomDistance， 上拉加载更多生效时距页面底部距离，默认为50px
    - 屏幕旋转，pageOrientation， 暂时还没有用到过，支持 auto / portrait / landscape，默认为portrait竖屏显示，
- tabbar： tab栏设置
    - 位置：支持顶部和底部（通常使用底部tab栏）， position（bottom / top）
    - tab列表 list： 文字以及对应的路径
        - 最少2个，最多5个
        - pagePath，页面路径（必须是pages中定义的路径）
        - text， tab上的文字
        - iconPath， 图片路径，（**大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片**）
        - selectedIconPath，选中时的图片路径。限制同上
    - 样式相关：color字体颜色，selectedColor选中文字的颜色，backgroundColor是tab栏背景色 ，borderStyle上边框颜色，
    - custom是否自定义，默认为否， 具体文档参考： [自定义tabBar](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)
- networkTimeout（设置网络请求的超时时间）
    - request
    - connectSocket
    - uploadFile
    - downloadFile
- debug， 开启调试,会输出Page 的注册，页面路由，数据更新，事件触发等信息，方便查看生命周期的调试
- navigateToMiniProgramAppIdList， 跳转到其他小程序时，需要先在app.json中进行声明
- usingComponents，如果在app.json中声明该组件，则全局可以使用该自定义组件，不需要再在page的json中声明
- permission， 用于授权相关，平时项目中是自己写的页面，调用button的open-type属性唤起授权，其实可以通过插件功能页来实现，比如授权昵称，[用户信息功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/user-info.html)

###  page.json

页面的样式配置优先级比全局配置中的window高。

- 可以设置导航栏背景颜色、导航栏标题颜色，导航栏标题，
- 可以隐藏导航栏，custom 自定义导航栏，只保留右上角胶囊按钮
- 窗口的背景色	， 以及ios支持顶部和底部窗口的背景色
- backgroundTextStyle，下拉 loading 的样式，仅支持 dark / light
- enablePullDownRefresh开启下拉刷新，这个属性只控制当前的page页面可以刷新
- onReachBottomDistance，上拉加载更多生效时距页面底部距离，默认为50px
- pageOrientation，屏幕旋转设置
- **disableScroll**，为 true 则页面整体不能上下滚动。只在页面配置中有效，无法在 app.json 中设置
- disableSwipeBack， 禁止页面右滑手势返回
- usingComponents， 使用自定义组件，如果没有在页面的json中声明，直接使用组件会报错


###  sitemap.json文件（用于微信索引）
默认规则为都默认被索引：

`{"action": "allow", "page": "*"}  `


##  语法区别
###  wxml文件跟html的区别：
- 没有div, p, span， 使用view代替div， text代替span
- wx:if的使用同vue中的v-if， 但使用上略有区别，不管在标签中还是文本上，都是使用双大括号来表示插值， `wx:for="{{array}}"`,
- 条件渲染有wx:if, wx:elif, wx:else, 使用方式： `<view wx:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>`
- **尤其注意，如果是使用boolean类型的值，不要直接在双引号内直接写，也需要写在双大括号里面。如`<checkbox checked="{{false}}"> </checkbox>`**
- 列表渲染` wx:for="{{array}}"`, 可直接使用item和index，也可以使用`wx:for-item="idx"`, 和`wx:for-item="itemName"`重新指定index和item的key值，**花括号和引号之间如果有空格，将最终被解析成为字符串**
- wxml文件中有一个标签是block， 仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性
- wx:key的值只能是字符串或者 "\*this", `wx:key="*this"`表示for 循环中的 item 本身， 但是要保证这个item本身是一个唯一的字符串或者数字， 当key绑定的是对象的时候会报错


问题思考？

`wx:if` 和 `hidden`该怎么合理的判断使用场景？

- wx:if 是惰性的，只有为true时才会局部渲染，当 wx:if 的条件值切换时，条件块会在切换时销毁或重新渲染。
- 而hidden始终会被渲染，只是控制显示与隐藏
- 所以，如果需要频繁切换的情景下，用 hidden 更好，如果在运行时条件不大可能改变则 wx:if 较好


##  组件

###  基础组件

- 组件的公共属性：
    - id, class, style, hidden, data-*, bind*/catch*
- 视图容器：
    - 可移动： movable-area， movable-view。 其中，movable-view必须在 movable-area 组件中，并且必须是直接子节点
    - 覆盖原生组件：cover-view， cover-image，主要用于覆盖 map、video、canvas、camera、live-player、live-pusher等级别高的原生组件。 **注意，在cover-view中只能嵌套cover-view、cover-image和button**
    - 可滚动的视图区域：scroll-view，**竖向滚动时，需要给scroll-view一个固定高度**
    - 滑块视图容器： swiper， 其中只能放置swiper-item组件（常用于轮播图）
    - 视图容器view， 如果想使用hover的样式，可以指定按下去的样式类，跟hover相关的属性： hover-class，hover-stop-propagation， hover-start-time， hover-stay-time
- 图标icon，在小程序中可以使用自带的一些icon图标，可以设置type、大小、颜色，详情查看， [小程序icon组件](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html)
- 进度条，progress， 普通的进度条包括动画等可以直接使用该组件
- 富文本，rich-txt, (可以使用该组件渲染html内容，传入html字符串)
- 文本，text， （如果需要展示多个空格，可以设置space属性）
- 按钮，button，（可以设置disabled属性进行禁用，防止多次点击触发事件）
- 单选、多选框：radio、radio-goup、checkbox、checkbox-group
- 富文本编辑器，editor
- 表单form，支持switch input checkbox slider radio picker 的提交
- 输入框input，支持文本、数字、身份证、带小数点的数字键盘等4个类型，password可以显示密码类型，（可以控制键盘右下角的文字，使用confirm-type属性控制，包括“发送”、“搜索”、“下一个”、“前往”、“完成”）注意：input无法设置 font-family，使用的是系统字体
- 滚动选择器，picker，支持普通、多列、时间、日期、省市选择器，
- 嵌入页面的滚动选择器， picker-view， picker-view-column
- 滑动选择器，slider，类似进度条不过可以拖动
- 开关，switch
- 多行输入框，textarea
- 导航，navigator，（类似于a标签，可以使用navigate、redirect、switchTab、reLaunch、navigateBack、exit（退出小程序）等类型）
- 系统相机，camera，可以用于扫描二维码
- 视频video，（注意，使用video组件在列表中的时候会引起小程序页面卡顿甚至崩溃，目前项目中的解决方案是使用阿里云上传视频的截帧图片来替换掉video组件，只有点击图片后才会播放视频，查看网上资料说是video的src默认为空，解决了viode自动下载的bug，使用custom-cache="{{false}}"可以解决视频缓存中卡住的问题，不过还没有试过）
- 公众号关注组件，official-account
- 承载网页的容器，web-view，（适用于第三方网站内容的嵌入，注意需要在公众平台配置业务域名），避免在链接中带有中文字符，在 iOS中会有打开白屏的问题，建议加一下encodeURIComponent


###  原生组件的使用限制
- 原生组件包括：
    - camera
    - canvas
    - input（仅在focus时表现为原生组件）
    - live-player
    - live-pusher
    - map
    - textarea
    - video
- 层级： 最高，其他组件无论设置 z-index 为多少，都无法盖在原生组件上
- 原生组件不能设置动画、fixed布局、不能使用overflow: hidden来裁剪原生组件的显示区域，
- 事件监听不能使用 bind:eventname 的写法，只支持 bindeventname，不支持 catch 和 capture 的事件绑定方式


##  事件系统
- 事件处理函数，参数是event，event的事件内容包括：
    - type
    - timeStamp， 事件生成时的时间戳
    - target，触发事件的**源组件**
    - currentTarget，事件绑定的**当前组件**
    - detail， 自定义事件所携带的数据
    - touches，一个数组，每个元素为一个 Touch 对象
    - changedTouches， 有变化的触摸点
   
- dataset：在target或currentTarget的事件对象中，可以通过dataset获取当前自定义的一些数据，（在JS文件中使用event.currentTarget.dataset时，dataset的属性会自动转换字符串，**连字符写法会转换成驼峰写法，而大写字符会自动转成小写字符**）
- mark，类似于dataset，（如果存在同名的 mark ，父节点的 mark 会被子节点覆盖）
- 页面的用户行为：
    - 下拉刷新 onPullDownRefresh
    - 上拉触底 onReachBottom
    - 页面滚动 onPageScroll
    - 用户转发 onShareAppMessage
 
思考： 
1. 小程序中bind事件和catch事件有什么区别？

- bind事件绑定不会阻止冒泡事件向上冒泡，
- catch事件绑定可以阻止冒泡事件向上冒泡

2. target和currentTarget有什么不同？

```
<view id="outer" bindtap="handleTap1">
  outer view
  <view id="middle" catchtap="handleTap2">
    middle view
    <view id="inner" bindtap="handleTap3">
      inner view
    </view>
  </view>
</view>
```

如上面这个示例中，点击inner view会触发handleTap3，同时会冒泡到handleTap2。
对于handleTap2这个组件来说，此时收到事件对象的target就是inner的元素，而currentTarget是middle的部分

3. mark 和 dataset 有什么区别？
- mark 会包含从触发事件的节点到根节点上所有的 mark: 属性值；
- dataset 仅包含一个节点的 data- 属性值
- 节点的 mark 不会做连字符和大小写转换


##  小程序相关机制
- 小程序框架的逻辑层并非运行在浏览器中，因此 JavaScript 在 web 中一些能力都无法使用，如 window，document 等

###  小程序的运行机制：冷启动和热启动
- 冷启动： 首次打开小程序；或小程序销毁后打开。（冷启动会触发app.js中的onLaunch生命周期函数）
- 热启动： 点击右上角胶囊退出、或者home键离开微信、或者左右滑动返回到微信等动作，都是热启动，并没有销毁小程序，（所以热启动不会触发onLaunch函数，但会触发onShow函数）

###  启动场景
- 小程序启动场景分为两种：
    - 从发现栏、另一个小程序返回、微信支付、首页下拉小程序栏等为A场景
    - B场景：打开某个特定页面：如转发分享的卡片链接
- 热启动场景效果：
    1. 如果重新进入的场景和退出时的场景都是A场景，则保留原来状态；例如：停留在“个人中心”页面，退出后，下拉首页的小程序列表进入后还是会停留在“个人中心”页面，（触发“个人中心”Page的onShow函数，但是不会触发onLoad函数）
    2. 如果当前是A场景，上一个是B场景，则清空原来的页面栈，打开首页（即执行 wx.reLaunch 到首页）如分享出去的卡片是“学员列表”页面，点击卡片停留后退出，再从首页下拉的小程序进入，此时会跳转到首页
    3. 不管上一个场景是什么，如果当前是B场景，如点击小程序的分享卡片，此时会清空原来的页面栈，重新进入这个分享页，首先触发app中的onShow函数，然后触发这个分享页的onLoad函数，当然如果app中已经进行了跳转到其它页面，则不会再走这个分享页。
- 冷启动场景效果：
    - 冷启动规则比较简单，如果冷启动时是A场景，则进入小程序首页
    - 如果冷启动时是B场景，则进入对应的特定页面

###  更新机制

- 小程序首先会在后台有一个最新版本，一般来说会在24小时内下发新版本信息到用户，静默更新到新版本（此时用户是无感知态）
- 在后台还没及时更新版本时，每次冷启动都会检测是否有更新版本，如果有，会**异步下载**，同时启动当前的旧版本包，所以新版本需要下一次的冷启动才会应用上
- 如果启动时就想立刻获取最新版本，需要使用 wx.getUpdateManager 的API，用wx.showModal提示用户是否重启应用更新

###  ES6的支持情况：

- 微信小程序已经支持了绝大部分的 ES6 API，但部分API仍依赖于系统版本而不支持
- String的normalize在ios8，ios9不支持
- 数组的values在ios8和android不支持
- 数组的includes在ios8不支持
- Proxy不支持ios8、ios9和android

###  注册小程序

- app.js中注册小程序，整个小程序只有一个 App 实例，是全部页面共享的。
- 开发者可以通过 getApp 方法获取到全局唯一的 App 示例，获取App上的数据或调用开发者注册在 App 上的函数
- 在app.js中可以直接使用this.globalData赋值，但在其他页面需通过getApp()方法获取到实例后才能使用全局变量globalData


```
App({
  onLaunch: function(options) {},
  onShow: function(options) {},
  onHide: function() {},
  onError: function(msg) {},
  globalData: 'I am global data'
})
```

###  注册页面和自定义组件
####  页面
- data 是页面第一次渲染使用的初始数据
- onLoad页面加载时触发。一个页面只会调用一次；
- onShow在页面显示/切入前台时触发
- onPageScroll，监听用户滑动页面事件，（**请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时**）
- onShareAppMessage监听页面内的转发，转发有button 组件 open-type="share"和右上角转发两个方式，（只有Page中定义了onShareAppMessage，右上角才会出现转发功能）
- setData：
    - 将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）（跟react的setState类似，但又不一样）
    - 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致
    - 不要把 data 中任何一项的 value 设为 undefined
    - 如果需要视图层更新完毕后再处理事件，可以将事件放在setData的回调函数中

Page构造器：


```
Page({
  data: { text: "This is page data." },
  onLoad: function(options) { },
  onReady: function() { },
  onShow: function() { },
  onHide: function() { },
  onUnload: function() { },
  onPullDownRefresh: function() { },
  onReachBottom: function() { },
  onShareAppMessage: function () { },
  onPageScroll: function() { }
})
```


####  自定义组件
- 页面使用自定义组件时需要现在page的json文件中声明usingComponents定义段
- 组件使用页面的生命周期方法时（即 on 开头的方法），应该写在methods定义段中
- **behaviors**提取所有页面中公用的代码段，例如，**在所有页面被创建和销毁时都要执行同一段代码，就可以把这段代码提取到 behaviors 中**

```
// page-common-behavior.js
module.exports = Behavior({
  attached: function() {
    // 页面创建时执行
    console.info('Page loaded!')
  },
  detached: function() {
    // 页面销毁时执行
    console.info('Page unloaded!')
  }
})


// 页面 A
var pageCommonBehavior = require('./page-common-behavior')
Component({
  behaviors: [pageCommonBehavior],
  data: { /* ... */ },
  methods: { /* ... */ },
})


// 页面 B
var pageCommonBehavior = require('./page-common-behavior')
Component({
  behaviors: [pageCommonBehavior],
  data: { /* ... */ },
  methods: { /* ... */ },
})
```

- 在 properties 定义段中，属性名采用驼峰写法（propertyName）；在 wxml 中，指定属性值时则对应使用连字符写法（component-tag-name property-name="attr value"），应用于数据绑定时采用驼峰写法（attr=""）
- observers数据监听器，（类似于vue中的watch），具体请参考 [数据监听器
](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html)
- created，组件实例刚被创建，（**注意此时不能调用 setData**）
- definitionFilter，定义段过滤器，用于自定义组件扩展（如扩展自定义组件一个computed计算属性功能）


**注意：** 
- 使用 this.data 可以获取内部数据和属性值；但直接修改它不会将变更应用到界面上，应使用 setData 修改
- 生命周期函数无法在组件方法中通过 this 访问到

#####  组件间的通信与事件
- 父传子：父组件绑定属性值，子组件通过properties获取，
- 子组件向父组件传递数据：使用事件传递
- 父组件访问子组件： 父组件可以通过 this.selectComponent 方法获取子组件实例对象，这样就可以直接访问组件的任意数据和方法

此处列举第二种自定义事件传递数据的方法：


```
// 1. 父组件中监听事件
<component-tag-name bindmyevent="onMyEvent" />

// 2. 子组件触发事件，触发wxml的onMyEvent事件，触发父组件的方法
<!--自定义组件中-->
<button bindtap="onTap">点击这个按钮将触发“myevent”事件</button>

<!--自定义组件js文件中-->
Component({
  properties: {},
  methods: {
    onTap: function(){
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})

```
具体可参考文档： [组件间通信与事件
](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)

**注意：**
- 组件和引用组件的页面不能使用id选择器（#a）、属性选择器（[a]）和标签名选择器，请改用class选择器
- 避免使用后代选择器（.a .b）
- 子元素选择器（.a>.b）只能用于 view 组件与其子节点之间，用于其他组件可能导致非预期的情况
- app.wxss 中的样式、组件所在页面的的样式对自定义组件无效（除继承样式外，如 font 、 color会继承自组件外）


#####  组件间关系
场景： 如果一个页面中需要使用到A组件和B组件，而A组件与B组件之间需要通信，此时可以在组件定义时加入relations定义段，如封装的ul和li组件后，之间需要存在关联的父子关系

- 必须在两个组件定义中都加入relations定义，否则不会生效
- type，与目标组件的相对关系，可选的值为 parent 、 child 、 ancestor 、 descendant
- 另一种情况是关联一类组件（如form与input、checkbox等的关系），需要使用到behavior

具体使用方式参见 [组件间关系](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/relations.html)



#####  使用setData应注意的事项：
- 不要频繁的去 setData，否则可能导致Android 下用户在滑动时会感觉到卡顿，或者渲染有出现延时
- 不要每次 setData 都传递大量新数据
- 不要在后台态页面进行 setData ，

##  小程序运行流程
1. 微信打开小程序前，会把整个小程序的代码包下载到本地
2. 通过 app.json 的 pages 字段就可以知道你当前小程序的所有页面路径
3. 写在 pages 字段的第一个页面就是这个小程序的首页（打开小程序看到的第一个页面），所以微信会把首页的代码装载进来
4. 小程序启动，触发app.js 定义的 App 实例的 onLaunch回调，启动时也会触发onShow函数，或切前台、从其他页面返回到这个页面，都会触发onShow；onHide监听小程序切后台，（如tab切换，navigateTo，离开微信等）； onPageNotFound页面不存在监听函数
5. 页面的渲染流程开始，微信客户端会先根据 page的json文件配置生成一个界面，
6. 接着装载这个页面的 WXML 结构和 WXSS 样式
7. 最后客户端会装载 page的js文件
8. Page构造器会生成一个页面，生成页面的时候小程序框架会把 data 数据和 index.wxml 一起渲染出最终的结构，渲染完界面
9. 渲染完界面之后，页面实例就会收到一个 onLoad 的回调


##  生命周期函数
小程序里面又三种生命周期：小程序运行的生命周期（在app.js中处理），页面的生命周期（在page的js文件中处理，或者组件的pageLifetimes触发的生命周期函数），组件的生命周期

###  小程序生命周期函数
- onLaunch， 小程序初始化完成时触发，全局只触发一次
- onShow，小程序启动，或从后台进入前台显示时触发
- onHide，从前台进入后台时触发
- onError，小程序发生脚本错误或 API 调用报错时触发
- onPageNotFound，小程序要打开的页面不存在时触发

**onLaunch,onShow参数：**

- path：	打开小程序的页面路径
- query：	打开小程序的页面参数query
- scene：	打开小程序的场景值，
- shareTicket：	转发分享参数
- referrerInfo：当场景为由从另一个小程序或公众号或App打开时，返回此字段
- referrerInfo.appId：	来源小程序或公众号或App的 appId
- referrerInfo.extraData： 来源小程序传过来的数据，scene=1037或1038时支持

###  页面生命周期函数
- onLoad，监听页面加载
- onShow, 监听页面显示（如tab切换或者离开微信、或navigateTo）
- onReady, 监听页面初次渲染完成(一个页面只会调用一次，代表页面已经准备妥当)
- onHide, 监听页面隐藏, (如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等)
- onUnload, 监听页面卸载(如wx.redirectTo或wx.navigateBack到其他页面时)

###  组件生命周期函数
- created,在组件实例刚刚被创建时执行，注意此时不能调用 setData
- attached,在组件实例进入页面节点树时执行
- ready,在组件布局完成后执行
- moved, 在组件实例被移动到节点树另一个位置时执行
- detached, 在组件实例被从页面节点树移除时执行

注意：

组件中存在一个组件所在页面的生命周期，定义在pageLifetimes中，其中可用的生命周期包括：
- show， 组件所在的页面被展示时执行	
- hide， 组件所在的页面被隐藏时执行	
- resize， 组件所在的页面尺寸变化时执行	


##  网络

1. 服务器域名配置，当使用体验版或者开发版报“服务器开小差”了的错误，大部分可能性都是因为没有打开调试，因为在调试模式下，小程序不会去校验域名的合法性。
2. 小程序只可以跟指定的域名与进行网络通信，包括普通 HTTPS 请求（wx.request）、上传文件（wx.uploadFile）、下载文件（wx.downloadFile) 和 WebSocket 通信（wx.connectSocket）
3. 如果接入第三方网页，使用web-view组件，需要配置业务域名
4. 默认超时时间为60s，超时时间可以在 app.json 或 game.json 中通过 networktimeout 配置
5. 并发限制：wx.request、wx.uploadFile、wx.downloadFile 的最大并发限制是 10 个；wx.connectSockt 的最大并发限制是 5 个
6. 返回状态，只要成功接收到服务器返回，**无论 statusCode 是多少，都会进入 success 回调**

##  自定义tabBar

用户可以通过配置app.json 中的 tabBar 项指定 custom 字段为true，来自定义tabBar，不过有些使用地方还需要注意：

1. tabBar 的相关配置项仍然需完整声明，以兼容低版本以及区分哪些是tab页
2. 需要用户自定义一个组件来渲染 tabBar，推荐用 fixed 在底部的 cover-view + cover-image 组件渲染样式，以保证 tabBar 层级相对较高
3. 与 tabBar 样式相关的接口，如 wx.setTabBarItem 等将失效
4. 可以在自定义组件下通过 getTabBar 接口，获取当前页面的自定义 tabBar 组件实例


##  小程序登录流程

小程序登录需要调用微信的开放接口，整体流程如下：

1. 小程序通过wx.login()获取一个code
2. 调用后端的api，发送code，后端通过这个code来校验接口，并返回一个自定义登录态
3. 小程序将登录状态存入storage
4. 之后再访问服务器发送业务请求就只用后端判断登录态查询openid和session_key返回业务数据




##  小程序优化操作
1. 缩短白屏时间：
    - 首屏渲染的内容较多，需要集合多份数据进行渲染：此时可以把优先级高的内容做优先展示
    - 首屏内容依赖的数据从服务端请求的时间太长：分析数据返回的时间长的原因
    - 一次性渲染数据太大或依赖的计算过于复杂：减少渲染的数据量、优化渲染相关数据的算法
2. 渲染界面的耗时过长，需要校验下是否同时渲染的区域太大（例如列表过长）
3. 脚本执行时间过长：需要确认并优化脚本的逻辑
4. setData调用频繁：避免无用的频繁调用，每秒调用setData的次数不超过 20 次，

```
// 不要频繁调用setData
    this.setData({ a: 1 })
    this.setData({ b: 2 })
// 绝大多数时候可优化为
    this.setData({ a: 1, b: 2 })
```

5. setData的数据太大，setData的数据在JSON.stringify后不超过 256KB
6. setData一个未绑定的变量

```
// 不要设置不在界面渲染时使用的数据，并将界面无关的数据放在data外
    this.setData({
      myData: {
        a: '这个字符串在WXML中用到了',
        b: '这个字符串未在WXML中用到，而且它很长…………………………'
      }
    })
    // 可以优化为
    this.setData({
      'myData.a': '这个字符串在WXML中用到了'
    })
    this._myData = {
      b: '这个字符串未在WXML中用到，而且它很长…………………………'
    }

```

7. 开启 HTTP 缓存控制
8. 控制WXML节点数

```
<view data-my-data="{{myData}}"> <!-- 这个 view 和下一行的 view 可以合并 -->
  <view class="my-class" data-my-data="{{myData}}" bindtap="onTap">
    <text> <!-- 这个 text 通常是没必要的 -->
      {{myText}}
    </text>
  </view>
</view>

<!-- 可以简化为 -->

<view class="my-class" data-my-data="{{myData}}" bindtap="onTap">
  {{myText}}
</view>
```

9. 控制图片大小，图片宽高都不超过实际显示宽高的3倍
10. 合理控制网络请求数量
11. 控制图片请求数
12. 开启惯性滚动：wxss中带有overflow: scroll的元素，在 iOS 下需要设置-webkit-overflow-scrolling: touch样式
13. 避免使用:active伪类来实现点击态
14. 保持图片大小比例
15. 可点击元素的宽高都不小于 20px
16. iphoneX兼容，用以下wxss进行兼容：

```
padding-bottom: constant(safe-area-inset-bottom);
padding-bottom: env(safe-area-inset-bottom);
```
17. 避免JS异常
18. 不使用废弃接口
19. 设置最低基础库版本
20. 移除不可访问到的页面
21. 移除大量未使用的样式
22. 及时回收定时器：定时器是全局的，并不是跟页面绑定的，当小程序从一个页面路由到另一个页面之后，前一个页面定时器应注意手动回收
