# TS实现可在React中使用的DI

## 什么是依赖注入
在说依赖注入之前，我们发现有个概念叫做 “控制反转”经常一起出现，它们区别是：
- 控制反转(Inversion of Control)是一种设计思想
- 依赖注入(Dependency Injection)是一种编程技巧，是控制反转的一种实现方式

通过依赖注入，可以将对象的初始化的细节与使用者剥离开。在 OO 体系内粗暴地来说，就是使用者不用通过 new 或其他方式显式创建依赖，而只要在构造函数中做出声明，就能直接使用在外部创建好的依赖实例。

不同的框架实现依赖注入的方式不尽相同，后端有 Java 的 Spring 框架，Node.js 的 Nest.js 服务端框架等等。对于前端来说，比较有名的是 Angular 框架中的依赖注入实现。

## 基础概念
以 Angular 为例，它的 DI 系统里有几个概念。
- injectable: 可以被注入的一类对象，在业务系统中，我们希望声明一些 "可注入服务"(injectable service) 供其他地方使用。在 Angular 中，可注入的服务类(Service Class)需要用 @Injectable 装饰。其他的一些简单对象和常量，也可以被注入。
- di token: 在 DI 过程中用于查找的标志，可以是任何原始类型或对象，不过一般为了避免冲突，会使用 symbol 或是 class 来作为标志。
- injector: 注入器，在 DI 系统中能根据 token 查找到依赖项并传递给使用者的一类对象。在 Angular 中有不同的注入器实现，没有研究过，不细讲。
- provider: 供应者，运行时的依赖具体对象提供者。具有往 injector 中写入对应某 token 的实现的能力。

## 在 TS 中实现简单的DI
一个 DI 系统分为两个重要阶段：依赖收集和依赖初始化
### 依赖收集
手动指定
```
// file1
export const USER_SERVICE_SYMBOL = Symbol('UserService')

// file2
import {USER_SERVICE_SYMBOL} from 'file1'

@Inject({
  dependencies: [USER_SERVICE_SYMBOL],
})
class Component {
  constructor(private userService: UserService) {}
}
```
自动收集
Typescript 从 1.5 开始就支持 metadata，在编译的时候将编译的得到的元信息记录下来使用, 通过 Reflect.getMetadata('design:paramtypes', target) 就可以获取装饰器所装饰类的入参。比如:
```
import UserService from './UserService'

@Inject
class Component {
  constructor(private userService: UserService) {}
}
```
TSC 生成部分代码:
```
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Component = class Component {
    constructor(userService) {
        this.userService = userService;
    }
};
Component = __decorate([
    Inject,
    __metadata("design:paramtypes", [UserService])
], Component);
```
让 ts 能生成后面的 __metadata 调用的前提是提供了编译参数 emitDecoratorMetadata:
```
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
    },
}
```
若运行环境不支持 Reflect.metadata，可以安装和使用 polyfill import 'reflect-metadata'。

### 依赖注册和初始化
有一些可以注意的点如下，具体例子见下一节的实现:
- Injectable Service 可以在使用的时候才初始化。声明为 class 的话很自然地可以在 new 的时候做这个事情。当然也有其他的约定方式，视具体框架而定。
- 一些情况下我们希望对于一种服务，在 DI 系统中只有一个实例，这可以通过 injector 的一个 providerInstanceMap cache 来实现。

## 实现可在 React 组件中使用的 DI 系统
```
// 简单的 Injector + Provider
class Injection {
  private providerMap = new Map();
  /** 记录 provider 的实例，起到 cache 的作用 */
  private providerInstanceMap = new Map();
  /** 记录 class constructor 参数的信息 */
  private typeInfoMap = new Map();

  registerParamTypes(token, paramTypes) {
    this.typeInfoMap.set(token, paramTypes);
  }

  registerProvider(token, provider) {
    this.providerMap.set(token, provider);
  }

  getProviderInstance(token) {
    let depInstance;
    if (this.providerInstanceMap.has(token)) {
      depInstance = this.providerInstanceMap.get(token);
    } else {
      depInstance = new (this.providerMap.get(token))();
      this.providerInstanceMap.set(token, depInstance);
    }
    return depInstance;
  }
}

const injection = new Injection();

/**
 * Injectable 类装饰器
 */
function Injectable() {
  return function(target) {
    // 下面考虑到 service 也许也会依赖其他的 service
    const shouldMakeSubClass = target.length > 0; // constructor 有参数的话，就需要注入

    let injectableToRegiter;
    if (shouldMakeSubClass) {
      class Injected extends (target as any) {
        constructor(...args) {
          const dependencyInstances = params.map(token =>
            injection.getProviderInstance(token)
          );
          super(...args, ...dependencyInstances);
        }
      }
      injectableToRegiter = Injected;
    } else {
      injectableToRegiter = target;
    }

    const params: any[] =
      Reflect.getMetadata("design:paramtypes", target) || [];
    injection.registerParamTypes(injectableToRegiter, params);

    // 注册 provider
    injection.registerProvider(target, injectableToRegiter);
    if (target !== injectableToRegiter) {
      injection.registerProvider(injectableToRegiter, injectableToRegiter);
    }

    return injectableToRegiter;
  };
}

/**
 * React.Component 的类装饰器
 */
function InjectComponent() {
  return function<T>(target: T) {
    // React Component constructor 的前两个参数已固定，注入的服务只能在后面
    const params: any[] =
      Reflect.getMetadata("design:paramtypes", target).slice(2) || [];

    const oldConstructor = target.constructor;

    class InjectedComponent extends (target as any) {
      static displayName = `${(oldConstructor as any).displayName ||
        oldConstructor.name})`;
      constructor(...args) {
        const dependencyInstances = params.map(token =>
          injection.getProviderInstance(token)
        );
        super(...args, ...dependencyInstances);
      }
    }

    return (InjectedComponent as unknown) as T;
  };
}

```

以上示例中全局只有一个 injection，然而有时在不同场景（命名空间）下我们希望有不同的 provider 实例，甚至还有可能希望 provider 也有一个生命周期跟某个scope绑定起来（在前端项目中，例如每个页面算一个 scope ?)，离开这个 scope 时 执行 provider.dispose() 之类的销毁逻辑。

Hierarchical injector，分层的注入器，使用的是 Angular 里的术语，简单地说是 injector 是可以有多层的，每一层可以选择性地覆盖掉部分之前层的实现。一个很实用的场景就是在组件树中从某一个节点开始开始替换掉部分实现，实际查找的时候有一个 lookup 的过程，很灵活。

## React 体系中还需要这套东西么？
### 有 Context 呀
React 中有一种概念是 Context，算是一种简单的 DI 实现，能够比较好地满足在组件树中共享状态或服务的需求。不过当有多种 Context 的时候，Context.Provider 需要嵌套写，代码观感很差。

而且 Context 会深入参与 React 的 Reconciliation 过程，因此一般来说使用 Context 共享的都是一些像是 Theme/I18n 之类的对于视图有直接重要影响的数据和服务。其他的各种形式的服务都扔进 Context 的话，可能会导致处理复杂化，影响性能。

### 有 Redux 呀
A Predictable State Container for JS Apps，从标语上来看，redux 是一个状态容器，react-redux 体现的是 UI 编程中的关注点分离，将 View 仅作为消费 State 的展示层，同时对于 State 的操作和更改都有迹可循。

但一般在复杂的前端业务系统中，更多的是将 Redux 作为 View Data 的存储。而怎么与后端交互、后端的数据模型如何转换成视图层模型等等我们称为 ==“业务逻辑”== 的代码，最好还是在一个单独的抽象层中，与视图层的选型隔离开来。而依赖注入，在业务逻辑的复用中，可以有一席之地。
