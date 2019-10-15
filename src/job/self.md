# 为自己出套面试题

## 函数防抖(debounce)和节流(throttle)
函数节流和去抖的出现场景，一般都伴随着客户端 DOM 的事件监听。

节流 (throttle) 让一个函数不要执行的太频繁，减少执行过快的调用，叫节流。应用场景mousemove，mousedown/keydown，频繁点击，监听滚动事件等。
```
function throttle(func, wait) {
    let timeout, lastTime = null;
    return function() {
        let context = this, now = new Date();
        if (now - lastTime > wait) {
            // 上次执行的时间和这次触发的时间大于一个执行周期，则执行
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            func.apply(context, arguments);
            lastTime = now;
        } else {
          if (!timeout) {
            // 避免最后一次触发或者间隔很短而无法执行
            timeout = setTimeout(() => {
              func.apply(context, arguments);
            }, wait);
          }
        }

    };
}

function debounce(func, wait) {
    let timeout，lastTime = null;
    return function() {
        let context = this;
        let now = new Date();
        // 判定不是一次抖动
        if (now - lastTime > wait) {
            setTimeout(() => {
                func.apply(context, arguments);
            }, wait);
        } else {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            timeout = setTimeout(() => {
                func.apply(context, arguments);
            }, wait);
        }
        // 注意这里lastTime是上次的触发时间
        lastTime = now;
    }
}
```
去抖 (debounce) 就是对于一定时间段的连续的函数调用，只让其执行一次。应用场景，每次 resize/scroll 触发统计事件，文本输入的验证或发送请求等。
作为一个前端老司机，近两年更多的是出笔试题 考别人，突然想给 自己出一套 笔试题 坑自己，同时 也以此 分享给 需要的人。

## HTML 部分
- 1 使用一个div模拟textarea的实现？
div元素上加个contenteditable="true"属性。这是H5新增的内容可编辑属性，允许用户编辑元素内容包含的任意文本，包括子元素。应用了此属性后，普通的div标签也会像文本域一样可以获得焦点，同时有一个光标在那里。
- 2 请谈谈 vue 中使用的 template 元素？
    - template 元素 是一种用于保存客户端内容的机制，该内容在页面加载时不-被渲染，但可以在运行时使用JavaScript进行实例化。 
    - 在html中如果有很多重复的结构，就可以把重复部分写在这个标签内部供整个文档调用。2013年定稿的template标签为我们提供一种更统一、功能更强大的模板文本存放方式。

## CSS 部分
- 3 如何做好一个元素的居中？
    - 方法一
    ```
    div .box {
      width:300px;
      height:600px;
      position:absolute; // 把元素变成定位元素
      // 设置元素的定位位置，距离上、左都为50%
      left:50%; 
      top:50%;
      // 设置元素的左外边距、上外边距为宽高的负1/2
      margin-left:-150px;
      margin-top:-300px;
    }
    * 兼容性好; 但必须知道元素的宽高
    ```
    - 方法二
    ```
    div .box {
      position:absolute; // 把元素变成定位元素
      // 设置元素的定位位置，距离上、下、左、右都为0
      left:0;
      right:0;
      top:0;
      bottom:0;
      // 设置元素的margin样式值为 auto
      margin:auto;
    }
    * 兼容性较好，但不支持IE7以下的浏览器
    ```
    - 方法三
    ```
    div .box {
      position:absolute; // 把元素变成定位元素
      // 设置元素的定位位置，距离上、左都为50%
      left:50%; 
      top:50%;
      // 设置元素的相对于自身的偏移度为负50%
      transform:translate(-50%,-50%);
    }
    * transform是css3里的样式;兼容性不好，只支持IE9+的浏览器
    ```
    - 方法四
    ```
    div .box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    * flex布局是css3里才有的;兼容性不好，只支持IE9+的浏览器
    ```
-  4 请列举几种隐藏元素的方法?
    - visibility: hidden; 这个属性只是简单的隐藏某个元素，但是元素占用的空间任然存在
    - opacity: 0; CSS3属性，设置0可以使一个元素完全透明
    - position: absolute; 设置一个很大的 left 负值定位，使元素定位在可见区域之外
    - display: none; 元素会变得不可见，并且不会再占用文档的空间。
    - transform: scale(0); 将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留；
    - div 中 hidden="hidden" HTML5属性,效果和display:none;相同，但这个属性用于记录一个元素的状态；
    - height: 0; 将元素高度设为 0 ，并消除边框；
    - filter: blur(0); CSS3属性，将一个元素的模糊度设置为0，从而使这个元素“消失”在页面中。

## JS 部分
- 5 2 + 2 + '2' 和 '2' + 2 + 2的结果？
'42'和'222'
- 6 var const let 的区别？
    - 初始值：const 声明的变量必须设置初始值，且不能重复赋值。
    - 重复定义：const 和 let 不支持重复定义
    - const，let 支持块级作用域，有效避免变量覆盖
    - 变量提升：const 和 let 必须先声明再使用，不支持变量提升
- 7 函数声明与函数表达式的区别？
    - 在Javscript中，解析器在向执行环境中加载数据时，对函数声明和函数表达式并非是一视同仁的，解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；
    - 至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解析执行。

- 8 如何深拷贝对象？
    - 迭代递归法
      ```
      // 深拷贝对象与数组
      function deepClone(obj) {
          if (!isObject(obj)) {
            throw new Error('obj 不是一个对象！')
          }

          let isArray = Array.isArray(obj)
          let cloneObj = isArray ? [] : {}
          for (let key in obj) {
            cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
          }

          return cloneObj
      }
      ```
    - 序列化反序列化法
    ```
      // 序列化反序列化法
      function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj))
      }
    ```
- 9 代码输出结果及this几种不同的使用场景？
    ```
    var x = 1;
    var o = {
      x: 2,
      getX: function() {
        return this.x;
      }
    }

    console.log(o.getX()); // 2
    console.log(o.getX.call()); // 1
    console.log(o.getX.call({x:10})); // 10
    ```
    - 在构造函数中使用（构造函数本身）
    - 作为对象属性时使用（调用属性的对象）
    - 作为普通函数时使用（window）
    - call，apply，bind（执行的第一个参数）
- 10 模拟实现bind?
```
Function.prototype.bind2 = function (context) {
    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () {};
    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }
    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();
    return fbound;
}
// https://blog.csdn.net/daimomo000/article/details/72897035
```
- 11 代码输出结果及原因？
```
var x = 1; 
function test() {
   var x = 2;
   return () => {
     x += 1;
   }
}

var t = test();
t();
console.log(x); // 1 闭包形成局部变量
```
```
var x = 1;
if(!(y in window)) {
  var y = 2;
  x += 1;
} else {
  x += 2;
}
console.log(x); // 3
console.log(y); // undefined
```

- 12 代码输出结果及原因？
```
function Foo() {
  getName = function() {
    console.log(1)
  }
  return this;
}

Foo.getName = function() {console.log(2)}
Foo.prototype.getName = function() {console.log(3)}
var getName = function() {console.log(4)}
function getName() {console.log(5)}

Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
getName(); // 1

new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3
```

- 13 代码输出结果及原因？
    ```
    for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
    }
    
    console.log(i);
    ```
    - 只要你对 JS 中同步和异步代码的区别、变量作用域、闭包等概念有正确的理解，就知道正确答案是5,5,5,5,5,5；
    - 若用->表示其前后的两次输出之间有 1 秒，而逗号表示间隔可以忽略，结果是？ 循环执行过程中，几乎同时设置了 5 个定时器，一般情况下，这些定时器都会在 1 秒之后触发，而循环完的输出是立即执行的, 所以结果是 5 -> 5,5,5,5,5；
    - 如果期望代码的输出变成：5 -> 0,1,2,3,4，该怎么改造代码？ 巧妙的利用 IIFE（声明即执行的函数表达式）来解决闭包造成的问题, 相当于把i赋值给了j这个局部变量:
      ```
      for (var i = 0; i < 5; i++) {
      (function(j) { 
        setTimeout(function() {
        console.log(j);
        }, 1000);
      })(i);
      }
      console.log(i);
      ```
    - 有没有更符合直觉的做法？ 利用 JS 中基本类型的参数传递是按值传递的特征, 对循环体稍做手脚，让负责输出的那段代码能拿到每次循环的 i 值即可:
      ```
      var print = function (i) {
      setTimeout(function() {
        console.log(i);
      }, 1000);
      };
      for (var i = 0; i < 5; i++) {
        print(i); // 传递到 print 的 i 值被复制了
      }
      console.log(i);
      ```
    - 如果期望代码的输出变成 0 -> 1 -> 2 -> 3 -> 4 -> 5，并且要求原有的代码块中的循环和两处 console.log 不变，该怎么改造代码？
      ```
      for (var i = 0; i < 5; i++) {
        (function(j) {
          setTimeout(function() {
          console.log(j);
          }, 1000 * j)); // 这里修改 0~4 的定时器时间
        })(i);
      }
      
      setTimeout(function() { // 这里增加定时器，超时设置为 5 秒
        console.log(i);
      }, 1000 * i);
      ```
    - 有没有基于ES6 Promise 的解决方案 ?
      ```
      const tasks = [];
      for (var i = 0; i < 5; i++) { 
        ((j) => {
          tasks.push(new Promise((resolve) => {
          setTimeout(() => {
            console.log(j);
            resolve(); // 一定要 resolve
          }, 1000 * j); 
          }));
        })(i);
      }
      
      Promise.all(tasks).then(() => {
        setTimeout(() => {
          console.log( i);
        }, 1000); // 只需把超时设置为 1 秒
      });
      ```
    - 把上面 i 的声明改成 let，怎么做？
      ```
      const tasks = [];
      for (let i = 0; i < 5; i++) { 
        tasks.push(new Promise((resolve) => {
          setTimeout(() => {
            console.log(j);
            resolve(); // 一定要 resolve
          }, 1000 * j); 
        }));
      }
      
      Promise.all(tasks).then(() => {
        setTimeout(() => {
          console.log( i);
        }, 1000); // 只需把超时设置为 1 秒
      });
      ```
    - 有没有代码层次更好的做法？
      ```
      const tasks = []; // 存放异步操作的 Promise
      const print = (i) => new Promise((resolve) => {
        setTimeout(() => {
          console.log(i);
          resolve();
        }, 1000 * i);
      });
      
      // 获得全部的异步操作
      for (var i = 0; i < 5; i++) {
        tasks.push(print(i));
      }
      
      // 输出最后的 i
      Promise.all(tasks).then(() => {
        setTimeout(() => {
          console.log(i);
        }, 1000);
      });
      ```
    - 如何使用 ES7 中的 async await 特性来让这段代码变的更简洁？
      ```
        const sleep = (t) => new Promise((resolve) => {
          setTimeout(resolve, t);
        });
        
        (async () => { 
          for (var i = 0; i < 5; i++) {
            await sleep(1000);
            console.log(i);
          }
          await sleep(1000);
          console.log(i);
        })();
      ```
    - 还能优化吗？
      ```
        const sleep = (t) => new Promise((resolve) => {
          setTimeout(resolve, t);
        });
        
        const print = async () => { 
          for (let i = 0; i <= 5; i++) {
            await sleep(1000);
            console.log(i);
          }
        };

        print();
      ```
## 浏览器 部分
- 14 移动端 点击事件 300ms延迟如何去掉，原因是什么？
双击缩放是 300 毫秒延迟的主要原因：在移动端触发时间会按照 touchstart，touchmove，touchend，click 顺序触发；触发touchend，click之间会有200-400不等的时间延时（因为移动端需要判断用户是不是想要进行双击）； 
    - fastclick 和 zepto 的tap 事件 都可以解决 300 ms延时；原理：是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。 
    - tap 原理：在touchstart 时会记录一个值x1，y1，在touchend时会记录x2，y2，通过对比着几个值，判断用户是否是点击事件，而不是滑动事件，然后直接触发事件； 
https://www.cnblogs.com/chaojidan/p/4517895.html

- 15 浏览器渲染主流程
浏览器获取到html代码后，内核会做以下工作：
    - 构建DOM树（Parse html）
    - 构建CSSOM树（Recaculate Style）
    - 合并DOM树与CSSOM树为Render树
    - 布局（Layout）
    - 绘制（Paint）
    - 复合图层化（Composite）

- 16 cookies，sessionStorage和localStorage的区别？
    - 共同点：都是保存在浏览器端，且是同源的。
    - 区别：
      - cookies是为了标识用户身份而存储在用户本地终端上的数据，始终在同源http请求中携带，即cookies在浏览器和服务器间来回传递，而sessionstorage和localstorage不会自动把数据发给服务器，仅在本地保存。
      - 存储大小的限制不同。cookie保存的数据很小，不能超过4k，而sessionstorage和localstorage保存的数据大，可达到5M。
      - 数据的有效期不同。cookie在设置的cookie过期时间之前一直有效，即使窗口或者浏览器关闭。sessionstorage仅在浏览器窗口关闭之前有效。localstorage始终有效，窗口和浏览器关闭也一直保存，用作长久数据保存。
      - 作用域不同。cookie在所有的同源窗口都是共享；sessionstorage不在不同的浏览器共享，即使同一页面；localstorage在所有同源窗口都是共享。

## 主流框架使用
- 17 react 组件间是如何通信的？vue呢？
    - 父组件向子组件通信：使用 props
    - 子组件向父组件通信：使用 props 回调
    - 跨级组件间通信：使用 context 对象
    - 非嵌套组件间通信：使用事件订阅

vue父子组件间传值: 父组件通过标签上面定义传值, 子组件通过props方法接受数据;子组件通过$emit方法传递参数向父组件传递数据。

- 18 react 生命周期？ vue呢
    - 首次实例化时：
      - 客户端
        ```
          1、getDefaultProps
          2、getInitialState
          3、componentWillMount
          4、render
          5、componentDidMount
        ```
      - 服务端渲染：
        ```
          1、getDefaultProps
          2、getInitialState
          3、componentWillMount
          4、render
          //componentDidMount 不会在服务端被渲染的过程中调用。
        ```
    - 交互时：
        ```
        1、componentWillReceiveProps
        2、shouldComponentUpdate
        3、componentWillUpdate
        4、render
        5、componentDidUpdate
        ```
Vue生命周期钩子函数：
  - vue 实例从创建到销毁的过程，就是生命周期；
  - 创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有；
  - 载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染；
  - 更新前/后：当data变化时，会触发beforeUpdate和updated方法；
  - 销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在；
  - vue生命周期中的事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。
## 算法
- 19 去掉一组整型数组中重复的值
```
let unique =  function(arr){
  let hash={};
  let data=[];
  for (let i=0;i < arr.length; i++){
    if (!hash[arr[i]])  {
      hash[arr[i]] = true;
      data.push(arr[i]);
    }      
  }
  return data
}
```

- 20 合并两个有序链表
```
function ListNode(val) {
   this.val = val;
   this.next = null;
}
// 方法1
var mergeTwoLists = function(l1, l2) {
    var head=new ListNode(0);
    var curr=head;
    var p=l1,q=l2;
    while(p!=null&&q!=null){
    	if(p.val<q.val){
    		curr.next=new ListNode(p.val)
    		curr=curr.next;
    		p=p.next;
    	} else if (p.val==q.val){
    		curr.next=new ListNode(p.val);
    		curr=curr.next;
    		curr.next=new ListNode(p.val);
    		curr=curr.next
    		p=p.next;
    		q=q.next;
    	} else {
    		curr.next=new ListNode(q.val);
    		curr=curr.next;
    		q=q.next;
    	}
    }
    if(p!==null) {
    	curr.next=p;
    }
    if(q!==null) {
    	curr.next=q;
    }
    return head.next; 
};

// 方法2 将l2合并到l1
// 外层循环控制遍历第二条链表，内层循环负责插入新节点，所以是O(m*n)的算法。
var mergeTwoLists = function(l1, l2) {
    while(l2){
        var prev = null;
        var cur = l1;
        while(cur && l2.val > cur.val){
            prev = cur;
            cur = cur.next;
        }
        var newNode = new ListNode(l2.val);
        newNode.next = cur;
        if(prev){
            prev.next = newNode;
        }else{
            l1 = newNode;
        }
        l2 = l2.next;
    }
    return l1;
};
```