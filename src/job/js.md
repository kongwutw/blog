# js 基础面试题
## 1 js中使用typeof能得到哪些类型？
undefined、string、number、boolean、object、function

## 2 js中有哪些内置函数？
Object、Array、Boolean、Number、String、Function、Date、RegExp、Error

## 3 ==和===之间的区别？
==仅检查值相等，而===是一个更严格的等式判定，如果两个变量的值或类型不同，则返回false。

## 4 2 + 2 + '2' 和 '2' + 2 + 2的结果？
'42'和'222'

## 5 如何准确判断一个变量是数组类型
arr instanceof Array

## 6 split() 和 join() 的区别?
前者是将字符串切割成数组的形式，后者是将数组转换成字符串

## 7 this几种不同的使用场景？
- 在构造函数中使用（构造函数本身）
- 作为对象属性时使用（调用属性的对象）
- 作为普通函数时使用（window）
- call，apply，bind（执行的第一个参数）

## 8 break和continue语句的作用？
- break语句从当前循环中退出。
- continue语句继续下一个循环语句。

## 9 如何理解JSON？
JSON是JS的一个对象，也是一种数据格式，将JSON字符串转换成JSON对象 JSON.parse()，将JSON对象转换成JSON字符串 JSON.stringify()。

## 10 函数声明与函数表达式的区别？
- 在Javscript中，解析器在向执行环境中加载数据时，对函数声明和函数表达式并非是一视同仁的，解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；
- 至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解析执行。

## 11 JavaScript中定时器?
定时器用于在设定的时间执行一段代码，或者在给定的时间间隔内重复该代码。
- setTimeout（function，delay）函数用于启动在所述延迟之后调用特定功能的定时器。
- setInterval（function，delay）函数用于在提到的延迟中重复执行给定的功能，只有在取消时才停止。
- clearInterval（id）函数指示定时器停止。

## 12 

## 13 js中的继承有哪些？
- 原型链继承：通过使用call、apply方法可以在新创建的对象上执行构造函数,用父类的构造函数来增加子类的实例；
- 构造函数继承：利用原型链来实现继承，超类的一个实例作为子类的原型；
- 组合继承：最常用，利用构造继承和原型链组合；
- 原型式继承：采用原型式继承并不需要定义一个类，传入参数obj,生成一个继承obj对象的对象；
- 寄生式继承：原型式继承的一种拓展，创建一个仅仅用于封装继承过程的函数，然后在内部以某种方式增强对象，最后返回对象；
- 寄生组合式继承：结合寄生式继承和组合式继承，完美实现不带两份超类属性的继承方式；

## 14 请谈谈组合继承及写一个例子？
组合继承，指的是将原型链和借用构造函数的技术组合到一起, 避免了原型链和借用构造函数的缺点，融合了他们的优点，是JavaScript中最常用的继承模式。
- 思路是使用原型链实现对原型方法的继承，而通过借用构造函数来实现对实例属性的继承。
- 既通过在原型上定义方法实现了函数的复用，又能够保证每个实例都有它自己的属性。
```
function SuperType(name){
  this.name=name;
  this.colors=["red", "blue", "green"];
}
SuperType.prototype.sayName=function(){
  alert(this.name);
};
function SubType(name, age){
  //继承属性    使用借用构造函数实现对实例属性的继承
  SuperType.call(this,name);
  this.age=age;
}
//继承方法     使用原型链实现
SubType.prototype=new SuperType();
SubType.prototype.constructor=SubType;
subType.prototype.sayAge=function(){
  alert(this.age);
};
var instance1=new SubType("mary", 22);
instance1.colors.push("black");
alert(instance1.colors);   //red,blue,green,black
instance1.sayName();  //mary
instance1.sayAge();  //22

var instance2=new SubType("greg", 25);
alert(instance2.colors);   //red,blue,green
instance2.sayName();  //greg
instance2.sayAge();  //25
```

## 15 下面三段程序的结果是？
```
function a() {}
var a
console.log(typeof a)
```
```
var a = 1;  
function test() {  
  console.log(a);  
  var a = 2; 
}  
test();

```
```
var a = 10;
function a(a) {
  console.log(a);
  var a = 12;
}
a(11);
```
- js语言本身具有预处理机制，js引擎在预处理期对所有声明的变量和函数进行处理，就是先把变量进行声明并读到内存里。
- 当变量名和函数名一致时后者会覆盖前者, 所以第一段的结果为 function；
- 而第二段程序，外面声明了全局变量a，值为1，但里面把a声明成了局部变量，函数内部的预处理顺序为先声明var a；然后console.log(a)，最后a=2；a=2这赋值步骤是在console.log(a)后面执行的，所以我们运行时就看到undefined了。如果函数里面去掉var，那么打印出来的值就是1了，然后全局变量a又被赋值为2。
- 所以第三段程序，先预处理var a；然后预处理整个a函数, 此时a的typeof为function, 接下来再给c赋值为10，即c=10，typeof c为number了; 最后在执行a(10)调用函数,当然就会报 a 不是一个函数的错误了，因为它现在是一个整型变量了。

## 16 下面这段程序的结果是？
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