# 深入浅出依赖注入
近几年的前端技术发展尤为迅猛，诞生了诸多如 Typescript、Angular 等前端技术，支撑了 VSCode 这类史诗级项目的诞生。在这些大型工程/项目中，架构师们为了让项目在如此大规模的协同下，依旧能够有效控制复杂度。

他们在这些工程中深度实践了面向对象（OO）的编程范式，其中 控制反转（Inversion of Control，后文简称 IoC）以及 依赖注入（Dependency Injection，后文简称 DI），这两种技术手段被大量使用。

本文希望通过前端视角，以 Typescript 作为编程语言，谈谈如何使用 IoC 和 DI 等机制，让大型的前端项目在解决代码依赖、复用和扩展的时候，轻松自如，游刃有余。

## IoC、DI、AOP 之间的关系
控制反转（Inversion of Control，缩写为IoC），是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度;其中最常见的方式叫做依赖注入（Dependency Injection，简称DI），还有一种方式叫“依赖查找”（Dependency Lookup）。

将创建对象的任务转移给其他 class，并直接使用依赖项的过程，被称为“依赖项注入”。（DI）
IOC（Inversion of Control， 控制反转）就是一个可以自动实例化具体类并且管理各对象之间关系的容器，有了这个自动化的容器，我们关注的就不是具体的关系，而是上升到只需关注抽象之间的关系，而且还可以省去手动实例化。

其实 依赖注入 和 控制反转 说的是同一件事情，只是站的角度不同而已。通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体，将其所依赖的对象的引用传递(注入)给它。

依赖注入（Dependency Injection，简称DI）的上游有更加抽象的IOC设计思想，下游有更加具体的AOP编程思想和装饰器语法，核心概念的关系如下图所示：

![1354575-20210206111759962-16656485.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8d20e254da44381ad8b61cdec1c029a~tplv-k3u1fbpfcp-watermark.image?)

面向对象的编程是基于“类”和“实例”来运作的，当你希望使用一个类的功能时，通常需要先对它进行实例化，然后才能调用相关的实例方法。

IOC是一种很好的解耦合思想，在开发中，IoC意味着你设计好的对象交给容器控制，而不是使用传统的方式，在对象内部直接控制。

控制反转是依赖注入的web应用，专门使用一个容器对要注入的类进行管理。方便了用户在类外重复创建依赖类。

写过java web的同学一定使用过一个注解@Autowired，通过这个注解就可以直接生成一个类对象，而不需要显式 new一个出来。当我们可以控制一个对象何时生成时这便是控制，而通过IOC容器将对象的创建权夺走，这便是权力反转。

## 依赖注入的例子
使用依赖注入的模块有：
```
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

或者是：
```
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
    `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}

```

## JS的Decorator
javascript 作为一门面向对象的语言，本质上是函数跟原型的组合，我们通常所说的 this 指向的是函数的轨迹，其面向对象的封装、多态跟继承，是在原型的基础上实现的。

es6 为 javascript 赋予了类 (class) 的属性，虽然我们知道这只是函数的语法糖，但是它确实实现了传统意义上的类，因此其让类的特性得以应用。类能够实现的依赖注入，也就能在我们代码的实现得以应用。

Decorator 其实就是一个语法糖，背后其实就是利用 es5 的 Object.defineProperty， 其本质是一个普通的函数，用于扩展类属性和类方法。其接收三个参数(target, name, descriptor)， 参数指代的含义也跟 Object.defineProperty 一样。

```
@eat
class Pig {
  constructor() {}
}

function eat(target, key, descriptor) {
  console.log('吃饭');
  console.log(target);
  console.log(key);
  console.log(descriptor);
  target.prototype.eat = '吃吃吃';
}

const peppa = new Pig();
console.log(peppa.eat);

// 吃饭
// [Function: Pig]
// undefined
// undefined
// 吃吃吃
```
上面是一个最简单的装饰器的运用，我们首先声明一个类 Pig，然后在声明一个装饰器函数 eat， 在eat中将传入的三个参数分别打印出来，并将第一个参数 target 的原型 prototype 上添加一个属性 eat，并赋值为'吃吃吃'，然后将函数 eat 作为装饰在 Person 这个类本身上。最后，构造一个Pig的实例peppa，并打印 peppa 上的eat属性。

然后从下面的运行结果中我们可以看出，代码中会先打印出'吃饭'，然后是参数target，其次是参数key，再然后是参数descriptor，最后才是peppa的eat属性。这是因为装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数。

综上， Decorator 有如下特点：
- 使用简单，易于理解
- 在不改变原有代码情况下，扩展类属性和类方法
- 是一个编译时执行的函数

Decorator 可以作用在类、类的属性上，不能直接作用在函数上。



## 简易DI实现
- 实现一个 IoC 容器 Injector ，并实例化一个根容器 rootInjector（用于存放各个依赖的工厂容器）
- 实现一个依赖注入方法 Injectable(...)（用于将各个依赖类注入根容器）
- 实现基于注解的属性注入方法 Inject(...)（将类需要用到的依赖从根容器取出来并注入到类中，若根容器不存在则创建此依赖）

Reflect Metadata 是 ES7 的一个提案，它主要用来在声明的时候添加和读取元数据，可以被用于类，类成员以及参数。你可以通过装饰器来给类添加一些自定义的信息。然后通过反射将这些信息提取出来。当然你也可以通过反射来添加这些信息。
```
import 'reflect-metadata';

// 工厂里面的各种操作
export class Injector {
  private readonly providerMap: Map<any, any> = new Map();
  private readonly instanceMap: Map<any, any> = new Map();

  public setProvider(key: any, value: any): void {
    if (!this.providerMap.has(key)) {
      this.providerMap.set(key, value);
    }
  }
  
  public getProvider(key: any): any {
    return this.providerMap.get(key);
  }

  public setInstance(key: any, value: any): void {
    if (!this.instanceMap.has(key)) {
    	this.instanceMap.set(key, value);
		}
  }
  
  public getInstance(key: any): any {
    if (this.instanceMap.has(key)) {
      return this.instanceMap.get(key);
    }
    return null;
  }
}

// 表示根注入器(用于存放各个依赖的根容器)
export const rootInjector = new Injector();

// 将类注入到工厂中 类装饰器返回一个值，它会使用提供的构造函数来替换原来类的声明
export function Injectable(): (_constructor: any) => any {
  return function (_constructor: any): any {
    rootInjector.setProvider(_constructor, _constructor);
    return _constructor;
  };
}

// 将依赖注入到生产者
export function Inject(): (_constructor: any, propertyName: string) => any {
  return function (_constructor: any, propertyName: string): any {
    /* 
    ** 获取属性定义时的类型
    ** 使用 Reflect 的元数据 Reflect.getMetadata('design:type') 获取属性的类型，并作为唯一标识去 	        
    ** injector.getInstance 查询对应的实例，如果有则直接将属性映射为查找到的实例。这样就保证我们每次使用
    ** 装饰器的属性都会获得单例。
    */
    const propertyType: any = Reflect.getMetadata('design:type', _constructor, propertyName);
    const injector: Injector = rootInjector;
    let providerInsntance = injector.getInstance(propertyType);
    if (!providerInsntance) {
      const providerClass = injector.getProvider(propertyType);
      providerInsntance = new providerClass();
      injector.setInstance(propertyType, providerInsntance);
    }
    _constructor[propertyName] = providerInsntance;
  };
}

@Injectable()
class Cloth {
  name: string = '麻布';
}

@Injectable()
class Clothes {
  // 为类 Clothes 注入类 Cloth 之后类 Clothes 就拥有了使用类 Cloth 的能力
  @Inject()
  cloth: Cloth;
  clotheName: string;
  constructor() {
    this.cloth = this.cloth;
    this.clotheName = this.clotheName;
  }
  updateName(name: string) {
    this.clotheName = name;
  }
}

class Humanity {
  @Inject() 
  clothes: Clothes;
  name: string;
  constructor(name: string) {
    this.clothes = this.clothes;
    this.name = name;
  }
  update(name: string) {
    this.clothes.updateName(name);
  }
}

// 单例：用于数据状态的维护(一个变 所有变)
const people = new Humanity('syz');
console.log(people);
// Humanity {
//   clothes: Clothes { cloth: Cloth { name: '麻布' }, clotheName: undefined }
// }

people.update('耐克');
console.log(people);
// Humanity {
//   clothes: Clothes { cloth: Cloth { name: '麻布' }, clotheName: '耐克' }
// }
```

## 依赖注入的实现方式：
- 基于接口。实现特定接口以供外部容器注入所依赖类型的对象。
- 基于 set 方法。实现特定属性的public set方法，来让外部容器调用传入所依赖类型的对象。
- 基于构造函数。实现特定参数的构造函数，在新建对象时传入所依赖类型的对象。
- 基于注解。基于Java的注解功能，在私有变量前加“@Autowired”等注解，不需要显式的定义以上三种代码，便可以让外部容器传入对应的对象。

使用构造器注入的好处：
- 保证依赖不可变（final关键字）
- 保证依赖不为空（省去了我们对其检查）
- 保证返回客户端（调用）的代码的时候是完全初始化的状态
- 避免了循环依赖
- 避免了和容器的高度耦合，提升了代码的可复用性

构造器注入适用于强制对象注入；Setter 注入适合于可选对象注入；并且构造器注入在构造过程中可以保证线程的安全

## 依赖反转原则
依赖反转原则的英文翻译是 Dependency Inversion Principle，缩写为 DIP。中文翻译有时候也叫依赖倒置原则。

主要的概念是：高层模块（high-level modules）不要依赖低层模块（low-level）。高层模块和低层模块应该通过抽象（abstractions）来互相依赖。除此之外，抽象（abstractions）不要依赖具体实现细节（details），具体实现细节
（details）依赖抽象（abstractions）。

所谓高层模块和低层模块的划分，简单来说就是，在调用链上，调用者属于高层，被调用者属于低层。在平时的业务代码开发中，高层模块依赖底层模块是没有任何问题的。实际上，这条原则主要还是用来指导框架层面的设计。

Tomcat 是运行 Java Web 应用程序的容器。我们编写的 Web 应用程序代码只需要部署在Tomcat 容器下，便可以被 Tomcat 容器调用执行。按照之前的划分原则，Tomcat 就是高层模块，我们编写的 Web 应用程序代码就是低层模块。

Tomcat 和应用程序代码之间并没有直接的依赖关系，两者都依赖同一个“抽象”，也就是 Sevlet 规范。Servlet 规范不依赖具体的 Tomcat 容器和应用程序的实现细节，而 Tomcat 容器和应用程序依赖 Servlet规范。

## 总结
依赖注入就是通过DI框架（外部源）将程序中服务类所需的依赖项进行提取并实例化，最后自动注入到指定服务类中的一种设计模式。其无需我们在服务类中再手动创建实例，规避了类与类之间的高度耦合的情况。
