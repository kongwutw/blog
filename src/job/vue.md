# vue 必知面试题

## css 相关
## 1 如何让CSS只在当前组件中起作用?
在当前组件的style中加入scoped：```<style scoped>```，scoped 有限制在某范围的含义，如果不设置，容易引起样式错乱！

## 2 vue项目如何适配移动端？
一般会引入淘宝移动端布局库amfe-flexible，不过由于viewport单位得到众多浏览器的兼容，该库维护团队建议使用viewport来替代此方案。但使用viewport也需要解决兼容问题。

## vue 核心库
## 3 v-if和v-show的异同?
- v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果
- v-show指令是通过修改元素的displayCSS属性让其显示或者隐藏

## 4 组件之间的如何传值？
- 父组件与子组件传值
  - 父组件通过标签上面定义传值
  - 子组件通过props方法接受数据
- 子组件向父组件传递数据
  - 子组件通过$emit方法传递参数

## 5 页面如何跳转？
- 声明式（标签跳转） 
- 编程式（借助vue-router）

## 6 vue-cli中怎样使用自定义的组件？
- 在components目录新建你的组件文件；
- 在需要用的页面（组件）中导入；
- 注入到vue的组件的components属性上面；
- 在template视图view中使用。

## 请谈谈Vue生命周期钩子函数?
- vue 实例从创建到销毁的过程，就是生命周期；
- 创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有；
- 载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染；
- 更新前/后：当data变化时，会触发beforeUpdate和updated方法；
- 销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在；
- vue生命周期中的事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。

## 谈谈 keep-alive?
```<keep-alive></keep-alive>``` 包裹动态组件时，会缓存不活动的组件实例, 主要用于保留组件状态或避免重新渲染，在activated生命周期函数可以做相应处理。

## 在vue中如何使用插件？
- 采用ES6的import ... from ...语法或CommonJS的require()方法引入插件；
- 使用全局方法Vue.use( plugin )使用插件,可以传入一个选项对象Vue.use(MyPlugin, { someOption: true })；

## 为什么使用key？
当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。

## 为什么避免 v-if 和 v-for 用在一起？
当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中。通过v-if 移动到容器元素，不会再重复遍历列表中的每个值。取而代之的是，我们只检查它一次，且不会在 v-if 为否的时候运算 v-for。

## 状态管理库vuex
## 怎么使用vuex？
- 在src下新建一个目录vuex；
- 如果不用模块功能的话，在vuex下创建一个index.js文件；
- 然后引入vuex, 创建相关的state,actions,getters, mutations并导出；
- 在main.js中引入vuex并注入vue实例。

## vuex的State特性
- vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的data;
- state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新;
- 它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中;

## vuex的Getter特性
- getters 可以对State进行计算操作，它就是Store的计算属性
- 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
- 如果一个状态只在一个组件内使用，是可以不用getters

## 不用vuex会带来什么问题？
- 可维护性会下降，想修改数据要维护三个地方；
- 可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的；
- 增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背;

## 怎么定义vue-router的动态路由以及如何获取传过来的动态参数？
- 在router目录下的index.js文件中，对path属性加上/:id。
- 使用router对象的params.id。

## vue-loader是什么？使用它的用途有哪些？
- 根据官网的定义，vue-loader 是 webpack 的一个 loader，用于处理 .vue 文件。
- 使用vue-cli脚手架，作者已经配置好了基本的配置，开箱及用，你需要做的就是npm install 安装下依赖，然后就可以开发业务代码了。

## 请说出vue.cli项目中src目录每个文件夹和文件的用法？
- assets文件夹是放静态资源；
- components是放组件；
- router是定义路由相关的配置;
- view视图；app.vue是一个应用主组件；
- main.js是入口文件
