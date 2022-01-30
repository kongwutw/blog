# 基于 Inversify 打造 DI 业务框架
在前端的比较大型的框架构建中，依赖注入和控制反转已经是必不可少的设计原则。InversifyJS是当前相对最成熟的一个前端IoC(Inversion of Control)管理库。

## 使用装饰器实现依赖注入系统
💍 Decorators to rule them all !
得益于 Java 的 注解系统（Annotation）的设计，Typescript 给出了类似的 Decorator 方法，用于对类、类的构造器参数、属性等等，通过装饰器的方式，以清晰易懂，且侵入程度较低的方式实现了 DI 系统的要求，我们继续使用造车为例看一下 Inversify 的基础 API 使用：
```
import { Container, injectable, inject } from "inversify";

// 声明 V8Engine 是可以被依赖注入框架识别的
@injectable()
class V8Engine {
    public start() {
      	// ... 🏁 ...
        return "v8";
    }
}

@injectable()
class V9Engine {
    public start() {
        // ... 🏁 ...
        return "v9";
    }
}

// 声明 Car 类是可以被依赖注入框架识别的
@injectable()
class Car implements ICar {
    private engine: V8Engine;
    public constructor(engine: V8Engine) {
        this.engine = engine;
    }
    public start() { return this.engine.start(); };
    public stop() { return this.engine.stop(); };
}

// 创建一个依赖注入容器
const container = new Container();
// 进行依赖绑定
container.bind<IEngine>(V8Engine).to(V8Engine);
container.bind<IEngine>(V9Engine).to(V9Engine);
container.bind<ICar>(Car).to(Car);

// 解析 Car 实例，并将 V8Engine 实例化后传入 Car 的构造器函数中，作为参数初始化 Car 实例
container.get(Car);
```
我们可以看到整个 DI 过程通过 @injectable() 完成了 DI 框架的轻量侵入，使得编写及其少量的代码，就能够和框架产生关联。

## 对 IoC 容器的更进一步封装
🚀 Inversify 本身是一个好框架，但是各种花里胡哨的 API 使用，也给业务层带来更高的认知成本，我们可以考虑巧妙地封装部分方法，提供给上层使用，以降低「认知成本」。Inversify 还是有一定的学习成本的，光 API 就超过了 40+，直接使用对于新手和小白用户非常不友好，以 👇 的文档为例，理解 Inversify 的使用，至少要通读下面的文章，形成理解。

Inversify 对提供了比较原始版本的 IoC 容器，它提供了最原子化的功能。我们其实可以对它做进一步封装，来让使用者更好地使用，而不用关心其实现细节。
这里举几个可行的设计规则：
- 业务依赖注入框架中，只能够析出对象类型（单一类型析出，可以降低大量的理解成本，其实对象就已经可以 Cover 住 99% 的设计了，可以杜绝复杂的 API 使用带来的认知成本）
- 将 bind 的过程，在业务框架中自动化掉，开发者不用关心 bind 过程
- 在 IoC 容器层提供 get 过程中的稳定性保证，以至于解析出错的时候有 fallback （降级）的方案
- 在 IoC 容器层内置统计 IoC 析出的性能分析插件，可以对高性能操作进行高静
- 在 IoC 容器层提配置式的方式，来封装对 Inversify 的 API，让业务层框架使用者根本不用关心 Inversify 底层容器的实现
```
...

IoC 容器在业务层可以做很多事情，来屏蔽底层的复杂度，对业务开发提供简单的解决方案。对于使用者而言，他们只需要知道有 get 方法即可。
// di-framework.ts
export class DIContainer {
  get<T>(serviceIdentifier: Token): T;
}
export const container = new DIContainer();
```

## 依赖注入 Token 优化
通过业务框架指定 token 的设计规则，我们可以简化依赖注入 token 带来的认知复杂度，为此我们可以做如下的规则限制：
- Token 使用字符串保证唯一性，比如：ninja 保证是忍者类型的全局唯一性
- Token 可以是实现了 toString 方法的任何对象，该规则可以让后续依赖注入的解析 Token 和后续面向接口的设计整合在一起
```
// tokens.ts
import { createServiceIdentifier } from 'di-framework';
export const Engine = createServiceIdentifier('engine');
export const Tire = createServiceIdentifier('tire'); // 轮胎
export const Car = createServiceIdentifier('car');
```
后续我们可以让 Engine 和 Car 等通过 createServiceIdentifier 这个 Token 的工厂函数，加工，实现 toString() 的方法，同时有可以承当具备「语义」的功能型 Decorator，稍后在最终效果中，可以看到其优雅地实现方式。

## 封装 Provide 装饰器
为了进一步收敛装饰器，我们对用户提供 @provide 装饰器，用于提供类或者对象。
```
// impl.ts
import { Engine, Car, Tire } from 'tokens';
import { IEngine } from 'standard-engine-interface';

// engine.v8.impl.ts
@provide(Engine)
class V8Engine implements IEngine {
  start() {
    // ... 🏁 V8 ...
  }
}

// engine.v9.impl.ts
@provide(Engine)
class V9Engine implements IEngine {
  start() {
    // ... 🏁 V9 ...
  }
}
```
在不同的文件中使用 @provide 装饰器，提供不同的类来绑定 Engine Token，即可以实现对汽车引擎的无感知替换，只要实现了 IEngine 的引擎均可以。

## 实现消费依赖关系
在 MyCar 类 Constructor 中，我们可以直接在类构造函数中注入引擎和轮胎：
```
// car.impl.ts
import { container } from 'di-framework';
import { Engine, Tire, Car } from 'tokens';

// 直接实现
import 'engine.v9.impl';

@provide(Car)
class MyCar {
  constructor(
    @Engine private engine: IEngine,
    @Tire   private tire: ITire,
  ) {
    // init other parts ...
  }
  drive() {
    this.engine.start();
  }
}

// 最终我们只需要通过 Car Identifier 析出 Car 实例即可
const car = container.get<MyCar>(Car);
```

可以看到，上述过程，将复杂的 Inversify 框架的用法，凝练为：
```
createServiceIdentifier 创建依赖注入的唯一 Token，同时也是构造器参数的装饰器（两用对象，具备语义）
@provide(ServiceIdentifier) 提供依赖注入的服务，并自动将 Token 和装饰的类做绑定

@ServiceIdentifier 具备装饰语义的构造器参数的装饰器，在类的构造函数中表示依赖注入关系
container.get 获取依赖分析，析出需要的对象，完成整个 DI 过程
```

促使使用者（业务开发者）只需要掌握 4 个 API 就可以完成主要的 DI 系统设计，整体简化了依赖注入的理解成本，同时兼顾 DI 风格的优雅性。可以在实战过程中通过较低的成本封装 Inversify 实现。当然对于本身需求就比较简单的，也可以手撸一个简单版本的 Inversify 或者使用其它业界开源的 DI 框架辅助实现。

## 总结
- ● Inversify 真的非常强大，看项目起源于 2015 年，经过 5 年多的迭代，已经形成了一个很强大的依赖注入库，践行着 IOC 的思想，主流的应用程序架构基本上能够 cover 住。
- ● 使用 OO 的组织方式，来实现「链式调用」，建立 xxSyntax 类来处理还是颇有意思的。
- ● OO 的经典思想在大型项目里依旧不过时，近期在做扩展（SPI）机制的设计，和外部集成的时候，使用 Inversify 确实帮助自己「平地起高楼」，一定程度上熟悉源代码代码也是受益匪浅，对 IoC 的 TS 实现有了更全面的理解。