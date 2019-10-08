(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{285:function(t,a,e){"use strict";e.r(a);var n=e(38),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_5-2-导航栏的吸顶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-导航栏的吸顶","aria-hidden":"true"}},[t._v("#")]),t._v(" 5_2 导航栏的吸顶")]),t._v(" "),e("p",[t._v("本节将分享的是吸顶导航栏的实现。")]),t._v(" "),e("h2",{attrs:{id:"导航栏还存在的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导航栏还存在的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 导航栏还存在的问题")]),t._v(" "),e("p",[t._v("当页面比较长的时候，我们往下滑动得比较多的时候，想回到头部导航位置，目前只能通过往回滚动到导航位置，这样的操作显得繁琐与不便。")]),t._v(" "),e("p",[t._v("一般优化的方式有两种：")]),t._v(" "),e("ul",[e("li",[t._v("在页面右侧加一个，固定的”回到顶部”按钮，点击重新滚动回到顶部导航栏；")]),t._v(" "),e("li",[t._v("让导航栏在页面向下滚动后吸顶，")])]),t._v(" "),e("p",[t._v("其最大的好处是将最常用或者产品想让用户看到的内容、功能保持在用户面前，为用户提供了极大的便利与确保了良好的交互体验。")]),t._v(" "),e("h2",{attrs:{id:"实现思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现思路")]),t._v(" "),e("ul",[e("li",[t._v("监听 scroll 事件，判断当前页面的滚动位置，当滚动距离大于导航条距顶部的距离时，为导航条采用窗口定位。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('  var navBar = document.getElementById("nav");\n  var titleTop = navBar.offsetTop;\n  document.onscroll = function(){\n    var btop = document.body.scrollTop || document.documentElement.scrollTop;\n    if (btop > titleTop) {\n      navBar.className = "fix";\n    } else {\n      navBar.className = "";\n    }\n  }\n')])])]),e("ul",[e("li",[t._v("然后在哪css文件中加入fix的样式定义：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".fix {\n  position:fixed;\n  top:0;\n  left:0;\n  background-color:#000;\n  color: #fff;\n}\n.fix a {\n  color: #fff;\n}\n\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);