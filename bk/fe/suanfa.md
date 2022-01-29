# 常见算法
## 基础算法题
### 1 不需要借助第三个临时变量，实现两个变量的交换
```
function swap（a,b）{
  b = b - a;
  a = a + b;
  b = a - b;
  return [a,b];
}
```
或使用位运算实现
```
function swap（a,b）{
  a = a^b
  b = a^b
  a = a^b
  return [a,b];
}
```

### 2 确保字符串的每个单词首字母都大写，其余部分小写
```
function titleCase(str) {
  var lstr = str.toLowerCase().split(' ');
  for(var i = 0 ; i < lstr.length; i++) {
    lstr[i] = lstr[i][0].toUpperCase() + lstr[i].substring(1, lstr[i].length);
  }
  var res = lstr.join(' ');
  return res;
}
titleCase("good night"); // Good Night
```

### 3 找出正整数 数组的最大差值
```
function getMaxPro(arr){
  var min = arr[0];
  var max = 0;
  for (var i=0;i<arr.length;i++){
    var current = arr[i];
    min = Math.min(min, current);
    var res = currenr - min;
    max = Math.max(max, res);
  }
  return max;  
}
```

### 4 清除字符串前后的空格（兼容所有浏览器）
```
function trim(str) {
  if (str & typeof str === "string") {
    return str.replace(/(^s*)|(s*)$/g, ''); //去除前后空白符
  }
}
```

### 5 去掉一组整型数组中重复的值
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

### 6 翻转字符串
- split（）字符串转成数组；
- reverse()翻转数组；
- join()数组转化成字符串。
```
function reverseString(str){    
  return str.split('').reverse().join('');	
}
```

### 7 找到提供的句子中最长的单词，并计算它的长度。
- 转化成数组；
- 根据元素长度排序；
- 输出最长元素并返回长度。
```
function findLongestString(str){
  var arr = str.split(' ');	
  var arrSort = arr.sort(function (a,b) {	   
    return b.length - a.length;
  });
  return [arrSort[0], arrSort[0].length];
}
```

### 8 截断一个字符串，如果字符串的长度比指定的参数num长，则把多余的部分用...来表示
```
function truncate(str, num){
  var trStr = str.slice(0, num);
  if (trStr.length > num) {					
    return trStr.concat('...');
  } else {
    return str;
  }
}
```

### 9 判断一个字符串中出现次数最多的字符，统计这个次数
```
funcion findMaxStrCount(str) {
  var countObj = {};
  var max = '';
  for(var i = 0; i < str.length; i++) {
    var cur = str[i];
    if(!countObj[cur]) {
      countObj[cur] = 0;
    } 
    countObj[cur]++;
    if(max === '' || countObj[cur] > countObj[max]) { max = cur; }
  }
  return [max, countObj[max]];
}

```
### 10 快速排序（Quick Sort）
快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：
```
var quickSort = function(arr) {
　if (arr.length <= 1) { return arr; }
　var pivotIndex = Math.floor(arr.length / 2);
　var pivot = arr.splice(pivotIndex, 1)[0];
　var left = [];
　var right = [];
　for (var i = 0; i < arr.length; i++){
　　if (arr[i] < pivot) {
　　　left.push(arr[i]);
　　} else {
　　　right.push(arr[i]);
　　}
　}
　return quickSort(left).concat([pivot], quickSort(right));
};
```

### 11 斐波那契数列
```
function fib(n){
  if(typeof n === 'number' && n > 0 && parseInt(n) === n ) {
    return n < 2 ? 1 : fib(n-1)+fib(n-2);　
  } else {
    return '输入不合法，请输入正整数！'；
  }　　　
}
```

### 12 深拷贝
```
function deepCopy(obj) {
  const copyObj = obj instanceof Array ? [] : {};
  for (const o in obj) {
    if (obj.hasOwnProperty(o)) {
      if (typeof obj[o] !== 'object' || obj[o] === null) {
        copyObj[o] = obj[o];
      } else {
        copyObj[o] = deepCopy(obj[o]);
      }
    }
  }
  return copyObj;
}
```

### 13 防抖
```
const debounce = (fn, time) => {
  let timer = null;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    fn();
  }, time);
};
```

### 14 节流
```
const throttle = function (fn, time) {
  let last = 0;
  const now = new Date().getTime();
  if (now - last > time) {
    fn();
    last = now;
  }
};
```

## 进阶算法题

### 15 js实现链表
链表其实有许多的种类：单向链表、双向链表、单向循环链表和双向循环链表，接下来，我们基于对象来实现一个单向链表，因为它的使用最为广泛。
```
 //节点
 
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
    this.previous = null;         //上一个节点链接
}

//链表类

function LList () {
    this.head = new Node( 'head' );
    this.find = find;
    this.findLast = findLast;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.dispReverse = dispReverse;
}

//查找元素

function find ( item ) {
    var currNode = this.head;
    while ( currNode.element != item ){
        currNode = currNode.next;
    }
    return currNode;
}

//查找链表中的最后一个元素

function findLast () {
    var currNode = this.head;
    while ( !( currNode.next == null )){
        currNode = currNode.next;
    }
    return currNode;
}


//插入节点

function insert ( newElement , item ) {
    var newNode = new Node( newElement );
    var currNode = this.find( item );
    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;
}

//显示链表元素

function display () {
    var currNode = this.head;
    while ( !(currNode.next == null) ){
        console.debug( currNode.next.element );
        currNode = currNode.next;
    }
}

//反向显示链表元素

function dispReverse () {
    var currNode = this.findLast();
    while ( !( currNode.previous == null )){
        console.log( currNode.element );
        currNode = currNode.previous;
    }
}

//删除节点

function remove ( item ) {
    var currNode = this.find ( item );
    if( !( currNode.next == null ) ){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

var fruits = new LList();

fruits.insert('Apple' , 'head');
fruits.insert('Banana' , 'Apple');
fruits.insert('Pear' , 'Banana');
fruits.insert('Grape' , 'Pear');

console.log( fruits.display() );        // Apple
                                        // Banana
                                        // Pear
                                        // Grape
                                        
console.log( fruits.dispReverse() );    // Grape
                                        // Pear
                                        // Banana
                                        // Apple
```
### 16 前端框架的diff算法
vue2.0加入了virtual dom，有点向react靠拢的意思。vue的diff位于patch.js文件中，复杂度为O(n)。
听大神说了解diff过程可以让我们更高效的使用框架，工作和女朋友都更加好找了，我们赶快了解哈~。
了解diff过程，我们先从虚拟dom开始。

所谓的virtual dom，也就是虚拟节点。它通过JS的Object对象模拟DOM中的节点，然后再通过特定的render方法将其渲染成真实的DOM节点
dom diff 则是通过JS层面的计算，返回一个patch对象，即补丁对象，在通过特定的操作解析patch对象，完成页面的重新渲染，

实现步骤
用JavaScript对象模拟DOM
把此虚拟DOM转成真实DOM并插入页面中
如果有事件发生修改了虚拟DOM
比较两棵虚拟DOM树的差异，得到差异对象
把差异对象应用到真正的DOM树上
```
class crtateElement {
    constructor (el, attr, child) {
        this.el = el
        this.attrs = attr
        this.child = child || []
    }
    render () { 
        let virtualDOM =  document.createElement(this.el)
        // attr是个对象所以要遍历渲染
        for (var attr in this.attrs) {
            virtualDOM.setAttribute(attr, this.attrs[attr])
        }

        // 深度遍历child
        this.child.forEach(el => {
            console.log(el instanceof crtateElement)
            //如果子节点是一个元素的话，就调用它的render方法创建子节点的真实DOM，如果是一个字符串的话，创建一个文件节点就可以了
            // 判断一个对象是否是某个对象的实力
            let childElement = (el instanceof crtateElement) ? el.render() : document.createTextNode(el);
            virtualDOM.appendChild(childElement);
        });
        return virtualDOM
    }
}
function element (el, attr, child) {
    return new crtateElement(el, attr, child)
}

module.exports = element
```
用JavaScript对象结构表示DOM树的结构；然后用这个树构建一个真正的DOM树，插到文档当中
```
let element = require('./element') 

let myobj = {
    "class": 'big_div'
}
let ul = element('div',myobj,[
    '我是文字',
    element('div',{'id': 'xiao'},['1']),
    element('div',{'id': 'xiao1'},['2']),
    element('div',{'id': 'xiao2'},['3']),
])
console.log(ul)
ul = ul.render()
document.body.appendChild(ul)
```
比较两棵DOM树的差异是Virtual DOM算法最核心的部分.简单的说就是新旧虚拟dom 的比较，如果有差异就以新的为准，然后再插入的真实的dom中，重新渲染。

比较只会在同层级进行, 不会跨层级比较。
比较后会出现四种情况：
1、此节点是否被移除 -> 添加新的节点 
2、属性是否被改变 -> 旧属性改为新属性
3、文本内容被改变-> 旧内容改为新内容
4、节点要被整个替换  -> 结构完全不相同 移除整个替换
看diff.js 的简单代码实现，下面都有相应的解释说明
```
let utils = require('./utils');

let keyIndex = 0;
function diff(oldTree, newTree) {
    //记录差异的空对象。key就是老节点在原来虚拟DOM树中的序号，值就是一个差异对象数组
    let patches = {};
    keyIndex = 0;  // 儿子要起另外一个标识
    let index = 0; // 父亲的表示 1 儿子的标识就是1.1 1.2
    walk(oldTree, newTree, index, patches);
    return patches;
}
//遍历
function walk(oldNode, newNode, index, patches) {
    let currentPatches = [];//这个数组里记录了所有的oldNode的变化
    if (!newNode) {//如果新节点没有了，则认为此节点被删除了
        currentPatches.push({ type: utils.REMOVE, index });
        //如果说老节点的新的节点都是文本节点的话
    } else if (utils.isString(oldNode) && utils.isString(newNode)) {
        //如果新的字符符值和旧的不一样
        if (oldNode != newNode) {
            ///文本改变 
            currentPatches.push({ type: utils.TEXT, content: newNode });
        }
    } else if (oldNode.tagName == newNode.tagName) {
        //比较新旧元素的属性对象
        let attrsPatch = diffAttr(oldNode.attrs, newNode.attrs);
        //如果新旧元素有差异 的属性的话
        if (Object.keys(attrsPatch).length > 0) {
            //添加到差异数组中去
            currentPatches.push({ type: utils.ATTRS, attrs: attrsPatch });
        }
        //自己比完后再比自己的儿子们
        diffChildren(oldNode.children, newNode.children, index, patches, currentPatches);
    } else {
        currentPatches.push({ type: utils.REPLACE, node: newNode });
    }
    if (currentPatches.length > 0) {
      patches[index] = currentPatches;
    }
}
//老的节点的儿子们 新节点的儿子们 父节点的序号 完整补丁对象 当前旧节点的补丁对象
function diffChildren(oldChildren, newChildren, index, patches, currentPatches) {
    oldChildren.forEach((child, idx) => {
        walk(child, newChildren[idx], ++keyIndex, patches);
    });
}
function diffAttr(oldAttrs, newAttrs) {
    let attrsPatch = {};
    for (let attr in oldAttrs) {
        //如果说老的属性和新属性不一样。一种是值改变 ，一种是属性被删除 了
        if (oldAttrs[attr] != newAttrs[attr]) {
            attrsPatch[attr] = newAttrs[attr];
        }
    }
    for (let attr in newAttrs) {
        if (!oldAttrs.hasOwnProperty(attr)) {
            attrsPatch[attr] = newAttrs[attr];
        }
    }
    return attrsPatch;
}
module.exports = diff;
```
其中有个需要注意的是新旧虚拟dom比较的时候，是先同层比较，同层比较完看看时候有儿子，有则需要继续比较下去，直到没有儿子。
```
let keyIndex = 0;
let utils = require('./utils');
let allPatches;//这里就是完整的补丁包
function patch(root, patches) {
    allPatches = patches;
    walk(root);
}
function walk(node) {
    let currentPatches = allPatches[keyIndex++];
    (node.childNodes || []).forEach(child => walk(child));
    if (currentPatches) {
        doPatch(node, currentPatches);
    }
}
function doPatch(node, currentPatches) {
    currentPatches.forEach(patch => {
        switch (patch.type) {
            case utils.ATTRS:
                for (let attr in patch.attrs) {
                    let value = patch.attrs[attr];
                    if (value) {
                        utils.setAttr(node, attr, value);
                    } else {
                        node.removeAttribute(attr);
                    }
                }
                break;
            case utils.TEXT:
                node.textContent = patch.content;
                break;
            case utils.REPLACE:
                let newNode = (patch.node instanceof Element) ? path.node.render() : document.createTextNode(path.node);
                node.parentNode.replaceChild(newNode, node);
                break;
            case utils.REMOVE:
                node.parentNode.removeChild(node);
                break;
        }
    });
}
module.exports = patch;
```

### 17 js实现二叉树
```
//定义节点
class Node {
    constructor(data){
        this.root = this;
        this.data = data;
        this.left = null;
        this.right = null
    }
}
//创建二叉搜索树(BST)）
class BinarySearchTree {
    constructor(){
    this.root = null
    }
    //插入节点
    insert(data){
        const newNode = new Node(data);
        const insertNode = (node,newNode) => {
            if (newNode.data < node.data){
                if(node.left === null){
                    node.left = newNode
                }else {
                    insertNode(node.left,newNode)
                }
            }else {
                if(node.right === null){
                    node.right = newNode
                }else{
                    insertNode(node.right,newNode)
                }

            }
        };
        if(!this.root){
            this.root = newNode
        }else {
            insertNode(this.root,newNode)

        }
    }
    //中序遍历
    inOrder(){
        let backs = [];
        const inOrderNode = (node,callback) => {
            if(node !== null){
                inOrderNode(node.left,callback);
                backs.push(callback(node.data));
                inOrderNode(node.right,callback)
            }
        };
        inOrderNode(this.root,callback);
        function callback(v){
            return v
        }
        return backs
    }
    //前序遍历
    preOrder(){
        let backs = [];
        const preOrderNode = (node,callback) => {
            if(node !== null){
                backs.push(callback(node.data));
                preOrderNode(node.left,callback);
                preOrderNode(node.right,callback)
            }
        };
        preOrderNode(this.root,callback);
        function callback(v){
            return v
        }
        return backs
    }
    //后序遍历
    postOrder(){
        let backs = [];
        const postOrderNode = (node,callback) => {
            if(node !== null){
                postOrderNode(node.left,callback);
                postOrderNode(node.right,callback);
                backs.push(callback(node.data))
            }
        };
        postOrderNode(this.root,callback);
        function callback(v){
            return v
        }
        return backs
    }
    //查找最小值
    getMin(node){
        const minNode = node => {
            return node? (node.left? minNode(node.left):node):null
        };
        return minNode( node || this.root)
    }
    //查找最大值
    getMax(node){
        const minNode = node => {
            return node? (node.right? minNode(node.right):node):null
        };
        return minNode(node || this.root)
    }
    //查找特定值
    find(data){
        const findNode = (node,data) => {
            if(node===null) return false;
            if(node.data===data) return node;
            return findNode((data < node.data)? node.left: node.right,data)
        };
        return findNode(this.root,data)

    }
    //删除节点
    remove(data){
        const removeNode = (node,data) => {
            if(node === null) return null;
            if(node.data === data){
                if(node.left === null && node.right === null) return null;
                if(node.left === null) return node.right;
                if(node.right === null) return node.left;
                if(node.left !==null && node.right !==null){
                let _node = this.getMin(node.right);
                node.data = _node.data;
                node.right = removeNode(node.right,data);
                return node
                }
            } else if(data < node.data){
                node.left=removeNode(node.left,data);
                return node
            } else {
                node.right=removeNode(node.right,data);
                return node
            }
        };
        return removeNode(this.root,data)
    }
}
```

### 18 下面这段程序的结果是？
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

  ### 19 实现发布订阅
  ```
  class EventEmitter {
    constructor() {
        // 事件对象，存放订阅的名字和事件
        this.events = {};
    }
    // 订阅事件的方法
    on(eventName,callback) {
       if (!this.events[eventName]) {
           // 注意时数据，一个名字可以订阅多个事件函数
           this.events[eventName] = [callback]
       } else  {
          // 存在则push到指定数组的尾部保存
           this.events[eventName].push(callback)
       }
    }
    // 触发事件的方法
    emit(eventName) {
        // 遍历执行所有订阅的事件
       this.events[eventName] && this.events[eventName].forEach(cb => cb());
    }
    // 移除订阅事件
    removeListener(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb != callback)
        }
    }
    // 只执行一次订阅的事件，然后移除
    once(eventName,callback) {
        // 绑定的时fn, 执行的时候会触发fn函数
        let fn = () => {
           callback(); // fn函数中调用原有的callback
           this.removeListener(eventName,fn); // 删除fn, 再次执行的时候之后执行一次
        }
        this.on(eventName,fn)
    }
  }
  ```