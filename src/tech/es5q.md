# ES5教程-阅读指南
带着问题去看书，学习效率更高。

## 入门篇参考问题

学习教材为：https://wangdoc.com/javascript/basic/index.html

1 JavaScript 的宿主环境有哪些？

2 JavaScript 的核心语法包括？

3 浏览器提供的API 有哪几类？

4 什么是WebAssembly？

5 JavaScript 语言标准是什么？哪个组织负责制定？JavaScript 与 ECMAScript 的关系？

6 如何理解JavaScript 的编程风格是函数式编程和面向对象编程的混合体？

7 JavaScript 程序的执行单位？

8 语句和表达式的区别？

9 什么是变量？

10 什么是变量提升？

11 标识符命名规则有？

12 什么是“区块”？

13 为什么优先采用“严格相等运算符？

14 switch语句后面的表达式，与case语句后面的表示式比较运行结果时，采用的是严格相等运算符还是是相等运算符？

15 while 循环和for循环的区别？

16 break 语句和 continue 语句的区别？

17 JavaScript 语言语句的前面有标签（label）的作用？

18 JavaScript 语言有哪些不足之处？

## 运算符和语法专题 参考问题

学习教材为：
- https://wangdoc.com/javascript/operators/index.html
- https://wangdoc.com/javascript/features/index.html

1 运算符有什么作用？

2 加法运算符 有哪些规则？

3 JS引擎如何处理对象相加？

4 余数运算符对浮点数的运算有什么问题？

5  自增和自减运算符需要注意什么？

6 如何理解指数运算符是右结合，而不是左结合？

7 动态类型语言有什么特点？

8 强制转换有什么规则？

9 什么情况下，JavaScript 会自动转换数据类型？

10 谈谈JavaScript 原生提供Error构造函数？

11 JavaScript 定义了哪些错误对象？

12 如何定义自己的错误对象？

13 throw语句的作用？

14 try...catch finally 的作用？

15 什么是编程风格？

16 使用分号的好处？

17 全局变量的缺点？

18 相等和严格相等的区别？

19 如何提升代码可读性？

20 console 对象有哪些常用的方法？

## 数据类型参考问题

学习教材为：https://wangdoc.com/javascript/types/index.html

1 ES5中的数据类型有哪些？

2 对象又分为哪些类型？

3 对象与数组的异同点？

4 JavaScript 有哪三种方法确定一个值的类型？

5 typeof 的返回值都有哪些？

6 为什么null的类型是object？

7 null与undefined的区别与联系？

8 JS转换为布尔值的规则有哪些？

9 布尔值的应用场景有？

10 空数组（[]）和空对象（{}）对应的布尔值是？

11 1与1.0是否相同？

12 JavaScript 的数值，表示方法有哪些？

13 如何理解JavaScript 内部实际上存在2个0？

14 NaN === NaN 和 [NaN].indexOf(NaN) 的结果？

15 与数值相关的全局方法有哪些？

16 单引号和双引号字符串的区别？为什么很多项目约定 JavaScript 语言的字符串只使用单引号？

17 字符串与数组如何相互转化？

18 如何理解对象的引用？

19 JavaScript 引擎如何处理  { foo: 123 }？

20 如何读取对象的属性？

21 如何理解delete命令只能删除对象本身的属性，无法删除继承的属性？

22 遍历对象的方法有哪些？

23 JavaScript 声明函数的方法有哪些？

24 JS引擎如何处理函数的重复声明？

25 如何调用函数？

26 函数和对象的关系？

27 函数名的提升和变量提升的区别？

28 如何理解函数作用域和参数传递？

29 如何理解函数闭包？

30 数组的本质是什么？

31 如何判断一个变量的数据类型为数组？

32 数组的遍历方法的区别于联系？


## 标准库参考问题

学习教材为：https://wangdoc.com/javascript/stdlib/index.html

1 JavaScript 的内置对象有哪些？

2 如何区分Object本身的方法与Object的实例方法？

3 如何理解Object本身是一个函数？

4 Object方法如何处理参数是原始类型的值？

5 Object方法的参数是一个对象，会返回什么？

6 Object作为构造函数，有什么作用？

7 什么是Object 的静态方法？

8 有哪些方法可以遍历对象的属性？

9 什么是不可枚举的属性？

10 对象中原型链相关方法有哪些？

11 Object 的实例方法有哪些？

12 Object 的实例方法和静态方法的区别是？

13 什么是属性描述对象？有哪些元属性？

14 如何拷贝对象？有哪些坑？如何避免？

15 如何控制对象的状态？

16 数组和对象的区别和联系？

17 Array对象的作用？Array()作为构造函数有什么缺陷？

18 Array有哪些方法？如何把字符串数组转换为字符串？

19 如何理解数组的链式使用？

20 如何理解包装对象？都有哪些？

21 JS还有哪些常用的工具对象？都有哪些坑？

## 面向对象编程参考问题

学习教材为：https://wangdoc.com/javascript/oop/index.html

1 如何理解编程语言中的对象？有哪些生成对象的方法？

2 面向对象编程的利弊？

3 谈谈JavaScript 语言的对象体系

4 Object方法如何处理参数是原始类型的值？

5 什么是构造函数？和普通函数的区别在哪？

6 new命令有什么作用？

7 如果忘了使用new命令，直接调用构造函数会发生什么事？

8 使用new命令时，会执行哪些的步骤？

9 什么是this？

10 this都有哪些指向？

11 为何JavaScript 语言有 this 的设计？

12 this有哪些使用场合？

13 使用this 有哪些注意点？

14 如何改变this的指向？

15 JavaScript 语言继承的机制？

16 JS都有哪些实现继承的方式？

17 如何理解原型链？

18 instanceof 运算符的作用？

19 JavaScript 如何实现多重继承？

20 如何实现JavaScript 模块化编程？

21 Object 对象的相关方法有哪些？

22 为何会有严格模式？


## 异步操作参考问题

学习教材为：https://wangdoc.com/javascript/async/index.html

1 如何理解JS的单线程模型？单线程模型优劣势？

2 JavaScript 引擎都有哪些线程？

3 什么是同步任务和异步任务？

4 如何理解JS引擎提供的任务队列？

5 什么是事件循环？

6 异步操作都有哪些模式？

7 什么是串行执行和并行执行？

8 如何理解观察者模式？

9 JavaScript 提供定时执行代码功能的相关函数有哪些？

10 setTimeout 和 setInterval 的区别？

11 实现一个 debounce 函数？

12 setTimeout(f, 0) 的用途有哪些？

13 Promise 对象 与普通对象的区别与联系？

14 Promise 实例具有哪三种状态？

15 then() 用法有哪些？

16 Promise 的优点和缺点？

17 如何理解JS中的微任务和宏任务？

## DOM 参考问题

学习教材为：https://wangdoc.com/javascript/dom/index.html

1 什么是DOM ？其作用是？

2 为什么说DOM 不是 JavaScript 语法的一部分？

3 什么是节点（node）？其类型有哪些？

4 节点间的层级关系有哪些？

5  DOM 节点对象都有哪些属性？

6 DOM 节点对象都有哪些方法？

7 NodeList和HTMLCollection的区别？

8 类数组对象和数组的区别？相互如何转化？

9 ParentNode和ChildNode的区别？

10 有哪些方法可以获取document对象？

11 document节点对象有哪些属性和方法？

12 什么是Element节点对象？有哪些常用的属性和方法？

13 属性操作的标准方法有哪些？

14 如何获取文本节点？

15 有哪些操作 CSS 样式的方法？

16 什么是Mutation Observer API ？与事件有什么区别？

17 MutationObserver 的实例方法有哪些？

## 事件 参考问题

学习教材为：https://wangdoc.com/javascript/events/index.html

1 事件的本质是什么？

2 EventTarget接口有哪几个实例方法？

3 什么是浏览器的事件模型？

4 JavaScript 有哪三种方法为事件绑定监听函数？

5 事件监听函数内部的this指向哪？

6 事件传播会分成哪三个阶段？

7 什么是事件的代理？

8 如何理解Event对象？

9 与鼠标相关的事件有哪些？

10 键盘事件的种类有哪些？

11 进度事件有哪些？

12 表单事件有哪些？

13 触摸事件有哪些？

14 拖拉事件有哪些？

15 还有哪些常见事件？

16 什么是GlobalEventHandlers？

## 浏览器模型参考问题
学习教材为：https://wangdoc.com/javascript/bom/index.html

1 如何让JS可以控制浏览器的各种功能？

2 有哪些方法可以网页中嵌入 JavaScript 代码？

3 script标签的type属性有什么作用？

4 如何防止攻击者篡改外部脚本？

5 网页是如何加载的？

6 为什么要把脚本文件都放在网页尾部加载？

7 defer属性和async属性的异同？

8 如何实现脚本的动态加载？

9 浏览器的组成？

10 重流和重绘的异同？

11 如何理解window对象？它有哪些属性和方法？

12 Navigator 对象有哪些属性和方法？

13 Cookie的用途有哪些？Cookie 与 HTTP 协议的关系？

14 AJAX 需经过哪些步骤？

15 如何理解同源？
