import{_ as e,c as t,o as n,a}from"./app.db2e2705.js";const v='{"title":"TS\u5B9E\u73B0\u53EF\u5728React\u4E2D\u4F7F\u7528\u7684DI","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u4F9D\u8D56\u6CE8\u5165","slug":"\u4EC0\u4E48\u662F\u4F9D\u8D56\u6CE8\u5165"},{"level":2,"title":"\u57FA\u7840\u6982\u5FF5","slug":"\u57FA\u7840\u6982\u5FF5"},{"level":2,"title":"\u5728 TS \u4E2D\u5B9E\u73B0\u7B80\u5355\u7684DI","slug":"\u5728-ts-\u4E2D\u5B9E\u73B0\u7B80\u5355\u7684di"},{"level":3,"title":"\u4F9D\u8D56\u6536\u96C6","slug":"\u4F9D\u8D56\u6536\u96C6"},{"level":3,"title":"\u4F9D\u8D56\u6CE8\u518C\u548C\u521D\u59CB\u5316","slug":"\u4F9D\u8D56\u6CE8\u518C\u548C\u521D\u59CB\u5316"},{"level":2,"title":"\u5B9E\u73B0\u53EF\u5728 React \u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684 DI \u7CFB\u7EDF","slug":"\u5B9E\u73B0\u53EF\u5728-react-\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684-di-\u7CFB\u7EDF"},{"level":2,"title":"React \u4F53\u7CFB\u4E2D\u8FD8\u9700\u8981\u8FD9\u5957\u4E1C\u897F\u4E48\uFF1F","slug":"react-\u4F53\u7CFB\u4E2D\u8FD8\u9700\u8981\u8FD9\u5957\u4E1C\u897F\u4E48\uFF1F"},{"level":3,"title":"\u6709 Context \u5440","slug":"\u6709-context-\u5440"},{"level":3,"title":"\u6709 Redux \u5440","slug":"\u6709-redux-\u5440"}],"relativePath":"tech/di/react.md","lastUpdated":1644387726544}',r={},i=a(`<h1 id="ts\u5B9E\u73B0\u53EF\u5728react\u4E2D\u4F7F\u7528\u7684di" tabindex="-1">TS\u5B9E\u73B0\u53EF\u5728React\u4E2D\u4F7F\u7528\u7684DI <a class="header-anchor" href="#ts\u5B9E\u73B0\u53EF\u5728react\u4E2D\u4F7F\u7528\u7684di" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F\u4F9D\u8D56\u6CE8\u5165" tabindex="-1">\u4EC0\u4E48\u662F\u4F9D\u8D56\u6CE8\u5165 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a></h2><p>\u5728\u8BF4\u4F9D\u8D56\u6CE8\u5165\u4E4B\u524D\uFF0C\u6211\u4EEC\u53D1\u73B0\u6709\u4E2A\u6982\u5FF5\u53EB\u505A \u201C\u63A7\u5236\u53CD\u8F6C\u201D\u7ECF\u5E38\u4E00\u8D77\u51FA\u73B0\uFF0C\u5B83\u4EEC\u533A\u522B\u662F\uFF1A</p><ul><li>\u63A7\u5236\u53CD\u8F6C(Inversion of Control)\u662F\u4E00\u79CD\u8BBE\u8BA1\u601D\u60F3</li><li>\u4F9D\u8D56\u6CE8\u5165(Dependency Injection)\u662F\u4E00\u79CD\u7F16\u7A0B\u6280\u5DE7\uFF0C\u662F\u63A7\u5236\u53CD\u8F6C\u7684\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F</li></ul><p>\u901A\u8FC7\u4F9D\u8D56\u6CE8\u5165\uFF0C\u53EF\u4EE5\u5C06\u5BF9\u8C61\u7684\u521D\u59CB\u5316\u7684\u7EC6\u8282\u4E0E\u4F7F\u7528\u8005\u5265\u79BB\u5F00\u3002\u5728 OO \u4F53\u7CFB\u5185\u7C97\u66B4\u5730\u6765\u8BF4\uFF0C\u5C31\u662F\u4F7F\u7528\u8005\u4E0D\u7528\u901A\u8FC7 new \u6216\u5176\u4ED6\u65B9\u5F0F\u663E\u5F0F\u521B\u5EFA\u4F9D\u8D56\uFF0C\u800C\u53EA\u8981\u5728\u6784\u9020\u51FD\u6570\u4E2D\u505A\u51FA\u58F0\u660E\uFF0C\u5C31\u80FD\u76F4\u63A5\u4F7F\u7528\u5728\u5916\u90E8\u521B\u5EFA\u597D\u7684\u4F9D\u8D56\u5B9E\u4F8B\u3002</p><p>\u4E0D\u540C\u7684\u6846\u67B6\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F\u4E0D\u5C3D\u76F8\u540C\uFF0C\u540E\u7AEF\u6709 Java \u7684 Spring \u6846\u67B6\uFF0CNode.js \u7684 Nest.js \u670D\u52A1\u7AEF\u6846\u67B6\u7B49\u7B49\u3002\u5BF9\u4E8E\u524D\u7AEF\u6765\u8BF4\uFF0C\u6BD4\u8F83\u6709\u540D\u7684\u662F Angular \u6846\u67B6\u4E2D\u7684\u4F9D\u8D56\u6CE8\u5165\u5B9E\u73B0\u3002</p><h2 id="\u57FA\u7840\u6982\u5FF5" tabindex="-1">\u57FA\u7840\u6982\u5FF5 <a class="header-anchor" href="#\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\u4EE5 Angular \u4E3A\u4F8B\uFF0C\u5B83\u7684 DI \u7CFB\u7EDF\u91CC\u6709\u51E0\u4E2A\u6982\u5FF5\u3002</p><ul><li>injectable: \u53EF\u4EE5\u88AB\u6CE8\u5165\u7684\u4E00\u7C7B\u5BF9\u8C61\uFF0C\u5728\u4E1A\u52A1\u7CFB\u7EDF\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u58F0\u660E\u4E00\u4E9B &quot;\u53EF\u6CE8\u5165\u670D\u52A1&quot;(injectable service) \u4F9B\u5176\u4ED6\u5730\u65B9\u4F7F\u7528\u3002\u5728 Angular \u4E2D\uFF0C\u53EF\u6CE8\u5165\u7684\u670D\u52A1\u7C7B(Service Class)\u9700\u8981\u7528 @Injectable \u88C5\u9970\u3002\u5176\u4ED6\u7684\u4E00\u4E9B\u7B80\u5355\u5BF9\u8C61\u548C\u5E38\u91CF\uFF0C\u4E5F\u53EF\u4EE5\u88AB\u6CE8\u5165\u3002</li><li>di token: \u5728 DI \u8FC7\u7A0B\u4E2D\u7528\u4E8E\u67E5\u627E\u7684\u6807\u5FD7\uFF0C\u53EF\u4EE5\u662F\u4EFB\u4F55\u539F\u59CB\u7C7B\u578B\u6216\u5BF9\u8C61\uFF0C\u4E0D\u8FC7\u4E00\u822C\u4E3A\u4E86\u907F\u514D\u51B2\u7A81\uFF0C\u4F1A\u4F7F\u7528 symbol \u6216\u662F class \u6765\u4F5C\u4E3A\u6807\u5FD7\u3002</li><li>injector: \u6CE8\u5165\u5668\uFF0C\u5728 DI \u7CFB\u7EDF\u4E2D\u80FD\u6839\u636E token \u67E5\u627E\u5230\u4F9D\u8D56\u9879\u5E76\u4F20\u9012\u7ED9\u4F7F\u7528\u8005\u7684\u4E00\u7C7B\u5BF9\u8C61\u3002\u5728 Angular \u4E2D\u6709\u4E0D\u540C\u7684\u6CE8\u5165\u5668\u5B9E\u73B0\uFF0C\u6CA1\u6709\u7814\u7A76\u8FC7\uFF0C\u4E0D\u7EC6\u8BB2\u3002</li><li>provider: \u4F9B\u5E94\u8005\uFF0C\u8FD0\u884C\u65F6\u7684\u4F9D\u8D56\u5177\u4F53\u5BF9\u8C61\u63D0\u4F9B\u8005\u3002\u5177\u6709\u5F80 injector \u4E2D\u5199\u5165\u5BF9\u5E94\u67D0 token \u7684\u5B9E\u73B0\u7684\u80FD\u529B\u3002</li></ul><h2 id="\u5728-ts-\u4E2D\u5B9E\u73B0\u7B80\u5355\u7684di" tabindex="-1">\u5728 TS \u4E2D\u5B9E\u73B0\u7B80\u5355\u7684DI <a class="header-anchor" href="#\u5728-ts-\u4E2D\u5B9E\u73B0\u7B80\u5355\u7684di" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A DI \u7CFB\u7EDF\u5206\u4E3A\u4E24\u4E2A\u91CD\u8981\u9636\u6BB5\uFF1A\u4F9D\u8D56\u6536\u96C6\u548C\u4F9D\u8D56\u521D\u59CB\u5316</p><h3 id="\u4F9D\u8D56\u6536\u96C6" tabindex="-1">\u4F9D\u8D56\u6536\u96C6 <a class="header-anchor" href="#\u4F9D\u8D56\u6536\u96C6" aria-hidden="true">#</a></h3><p>\u624B\u52A8\u6307\u5B9A</p><div class="language-"><pre><code>// file1
export const USER_SERVICE_SYMBOL = Symbol(&#39;UserService&#39;)

// file2
import {USER_SERVICE_SYMBOL} from &#39;file1&#39;

@Inject({
  dependencies: [USER_SERVICE_SYMBOL],
})
class Component {
  constructor(private userService: UserService) {}
}
</code></pre></div><p>\u81EA\u52A8\u6536\u96C6 Typescript \u4ECE 1.5 \u5F00\u59CB\u5C31\u652F\u6301 metadata\uFF0C\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u5C06\u7F16\u8BD1\u7684\u5F97\u5230\u7684\u5143\u4FE1\u606F\u8BB0\u5F55\u4E0B\u6765\u4F7F\u7528, \u901A\u8FC7 Reflect.getMetadata(&#39;design:paramtypes&#39;, target) \u5C31\u53EF\u4EE5\u83B7\u53D6\u88C5\u9970\u5668\u6240\u88C5\u9970\u7C7B\u7684\u5165\u53C2\u3002\u6BD4\u5982:</p><div class="language-"><pre><code>import UserService from &#39;./UserService&#39;

@Inject
class Component {
  constructor(private userService: UserService) {}
}
</code></pre></div><p>TSC \u751F\u6210\u90E8\u5206\u4EE3\u7801:</p><div class="language-"><pre><code>var __metadata = (this &amp;&amp; this.__metadata) || function (k, v) {
    if (typeof Reflect === &quot;object&quot; &amp;&amp; typeof Reflect.metadata === &quot;function&quot;) return Reflect.metadata(k, v);
};

let Component = class Component {
    constructor(userService) {
        this.userService = userService;
    }
};
Component = __decorate([
    Inject,
    __metadata(&quot;design:paramtypes&quot;, [UserService])
], Component);
</code></pre></div><p>\u8BA9 ts \u80FD\u751F\u6210\u540E\u9762\u7684 __metadata \u8C03\u7528\u7684\u524D\u63D0\u662F\u63D0\u4F9B\u4E86\u7F16\u8BD1\u53C2\u6570 emitDecoratorMetadata:</p><div class="language-"><pre><code>{
    &quot;compilerOptions&quot;: {
        &quot;experimentalDecorators&quot;: true,
        &quot;emitDecoratorMetadata&quot;: true,
    },
}
</code></pre></div><p>\u82E5\u8FD0\u884C\u73AF\u5883\u4E0D\u652F\u6301 Reflect.metadata\uFF0C\u53EF\u4EE5\u5B89\u88C5\u548C\u4F7F\u7528 polyfill import &#39;reflect-metadata&#39;\u3002</p><h3 id="\u4F9D\u8D56\u6CE8\u518C\u548C\u521D\u59CB\u5316" tabindex="-1">\u4F9D\u8D56\u6CE8\u518C\u548C\u521D\u59CB\u5316 <a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u518C\u548C\u521D\u59CB\u5316" aria-hidden="true">#</a></h3><p>\u6709\u4E00\u4E9B\u53EF\u4EE5\u6CE8\u610F\u7684\u70B9\u5982\u4E0B\uFF0C\u5177\u4F53\u4F8B\u5B50\u89C1\u4E0B\u4E00\u8282\u7684\u5B9E\u73B0:</p><ul><li>Injectable Service \u53EF\u4EE5\u5728\u4F7F\u7528\u7684\u65F6\u5019\u624D\u521D\u59CB\u5316\u3002\u58F0\u660E\u4E3A class \u7684\u8BDD\u5F88\u81EA\u7136\u5730\u53EF\u4EE5\u5728 new \u7684\u65F6\u5019\u505A\u8FD9\u4E2A\u4E8B\u60C5\u3002\u5F53\u7136\u4E5F\u6709\u5176\u4ED6\u7684\u7EA6\u5B9A\u65B9\u5F0F\uFF0C\u89C6\u5177\u4F53\u6846\u67B6\u800C\u5B9A\u3002</li><li>\u4E00\u4E9B\u60C5\u51B5\u4E0B\u6211\u4EEC\u5E0C\u671B\u5BF9\u4E8E\u4E00\u79CD\u670D\u52A1\uFF0C\u5728 DI \u7CFB\u7EDF\u4E2D\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u8FD9\u53EF\u4EE5\u901A\u8FC7 injector \u7684\u4E00\u4E2A providerInstanceMap cache \u6765\u5B9E\u73B0\u3002</li></ul><h2 id="\u5B9E\u73B0\u53EF\u5728-react-\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684-di-\u7CFB\u7EDF" tabindex="-1">\u5B9E\u73B0\u53EF\u5728 React \u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684 DI \u7CFB\u7EDF <a class="header-anchor" href="#\u5B9E\u73B0\u53EF\u5728-react-\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684-di-\u7CFB\u7EDF" aria-hidden="true">#</a></h2><div class="language-"><pre><code>// \u7B80\u5355\u7684 Injector + Provider
class Injection {
  private providerMap = new Map();
  /** \u8BB0\u5F55 provider \u7684\u5B9E\u4F8B\uFF0C\u8D77\u5230 cache \u7684\u4F5C\u7528 */
  private providerInstanceMap = new Map();
  /** \u8BB0\u5F55 class constructor \u53C2\u6570\u7684\u4FE1\u606F */
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
 * Injectable \u7C7B\u88C5\u9970\u5668
 */
function Injectable() {
  return function(target) {
    // \u4E0B\u9762\u8003\u8651\u5230 service \u4E5F\u8BB8\u4E5F\u4F1A\u4F9D\u8D56\u5176\u4ED6\u7684 service
    const shouldMakeSubClass = target.length &gt; 0; // constructor \u6709\u53C2\u6570\u7684\u8BDD\uFF0C\u5C31\u9700\u8981\u6CE8\u5165

    let injectableToRegiter;
    if (shouldMakeSubClass) {
      class Injected extends (target as any) {
        constructor(...args) {
          const dependencyInstances = params.map(token =&gt;
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
      Reflect.getMetadata(&quot;design:paramtypes&quot;, target) || [];
    injection.registerParamTypes(injectableToRegiter, params);

    // \u6CE8\u518C provider
    injection.registerProvider(target, injectableToRegiter);
    if (target !== injectableToRegiter) {
      injection.registerProvider(injectableToRegiter, injectableToRegiter);
    }

    return injectableToRegiter;
  };
}

/**
 * React.Component \u7684\u7C7B\u88C5\u9970\u5668
 */
function InjectComponent() {
  return function&lt;T&gt;(target: T) {
    // React Component constructor \u7684\u524D\u4E24\u4E2A\u53C2\u6570\u5DF2\u56FA\u5B9A\uFF0C\u6CE8\u5165\u7684\u670D\u52A1\u53EA\u80FD\u5728\u540E\u9762
    const params: any[] =
      Reflect.getMetadata(&quot;design:paramtypes&quot;, target).slice(2) || [];

    const oldConstructor = target.constructor;

    class InjectedComponent extends (target as any) {
      static displayName = \`\${(oldConstructor as any).displayName ||
        oldConstructor.name})\`;
      constructor(...args) {
        const dependencyInstances = params.map(token =&gt;
          injection.getProviderInstance(token)
        );
        super(...args, ...dependencyInstances);
      }
    }

    return (InjectedComponent as unknown) as T;
  };
}

</code></pre></div><p>\u4EE5\u4E0A\u793A\u4F8B\u4E2D\u5168\u5C40\u53EA\u6709\u4E00\u4E2A injection\uFF0C\u7136\u800C\u6709\u65F6\u5728\u4E0D\u540C\u573A\u666F\uFF08\u547D\u540D\u7A7A\u95F4\uFF09\u4E0B\u6211\u4EEC\u5E0C\u671B\u6709\u4E0D\u540C\u7684 provider \u5B9E\u4F8B\uFF0C\u751A\u81F3\u8FD8\u6709\u53EF\u80FD\u5E0C\u671B provider \u4E5F\u6709\u4E00\u4E2A\u751F\u547D\u5468\u671F\u8DDF\u67D0\u4E2Ascope\u7ED1\u5B9A\u8D77\u6765\uFF08\u5728\u524D\u7AEF\u9879\u76EE\u4E2D\uFF0C\u4F8B\u5982\u6BCF\u4E2A\u9875\u9762\u7B97\u4E00\u4E2A scope ?)\uFF0C\u79BB\u5F00\u8FD9\u4E2A scope \u65F6 \u6267\u884C provider.dispose() \u4E4B\u7C7B\u7684\u9500\u6BC1\u903B\u8F91\u3002</p><p>Hierarchical injector\uFF0C\u5206\u5C42\u7684\u6CE8\u5165\u5668\uFF0C\u4F7F\u7528\u7684\u662F Angular \u91CC\u7684\u672F\u8BED\uFF0C\u7B80\u5355\u5730\u8BF4\u662F injector \u662F\u53EF\u4EE5\u6709\u591A\u5C42\u7684\uFF0C\u6BCF\u4E00\u5C42\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u8986\u76D6\u6389\u90E8\u5206\u4E4B\u524D\u5C42\u7684\u5B9E\u73B0\u3002\u4E00\u4E2A\u5F88\u5B9E\u7528\u7684\u573A\u666F\u5C31\u662F\u5728\u7EC4\u4EF6\u6811\u4E2D\u4ECE\u67D0\u4E00\u4E2A\u8282\u70B9\u5F00\u59CB\u5F00\u59CB\u66FF\u6362\u6389\u90E8\u5206\u5B9E\u73B0\uFF0C\u5B9E\u9645\u67E5\u627E\u7684\u65F6\u5019\u6709\u4E00\u4E2A lookup \u7684\u8FC7\u7A0B\uFF0C\u5F88\u7075\u6D3B\u3002</p><h2 id="react-\u4F53\u7CFB\u4E2D\u8FD8\u9700\u8981\u8FD9\u5957\u4E1C\u897F\u4E48\uFF1F" tabindex="-1">React \u4F53\u7CFB\u4E2D\u8FD8\u9700\u8981\u8FD9\u5957\u4E1C\u897F\u4E48\uFF1F <a class="header-anchor" href="#react-\u4F53\u7CFB\u4E2D\u8FD8\u9700\u8981\u8FD9\u5957\u4E1C\u897F\u4E48\uFF1F" aria-hidden="true">#</a></h2><h3 id="\u6709-context-\u5440" tabindex="-1">\u6709 Context \u5440 <a class="header-anchor" href="#\u6709-context-\u5440" aria-hidden="true">#</a></h3><p>React \u4E2D\u6709\u4E00\u79CD\u6982\u5FF5\u662F Context\uFF0C\u7B97\u662F\u4E00\u79CD\u7B80\u5355\u7684 DI \u5B9E\u73B0\uFF0C\u80FD\u591F\u6BD4\u8F83\u597D\u5730\u6EE1\u8DB3\u5728\u7EC4\u4EF6\u6811\u4E2D\u5171\u4EAB\u72B6\u6001\u6216\u670D\u52A1\u7684\u9700\u6C42\u3002\u4E0D\u8FC7\u5F53\u6709\u591A\u79CD Context \u7684\u65F6\u5019\uFF0CContext.Provider \u9700\u8981\u5D4C\u5957\u5199\uFF0C\u4EE3\u7801\u89C2\u611F\u5F88\u5DEE\u3002</p><p>\u800C\u4E14 Context \u4F1A\u6DF1\u5165\u53C2\u4E0E React \u7684 Reconciliation \u8FC7\u7A0B\uFF0C\u56E0\u6B64\u4E00\u822C\u6765\u8BF4\u4F7F\u7528 Context \u5171\u4EAB\u7684\u90FD\u662F\u4E00\u4E9B\u50CF\u662F Theme/I18n \u4E4B\u7C7B\u7684\u5BF9\u4E8E\u89C6\u56FE\u6709\u76F4\u63A5\u91CD\u8981\u5F71\u54CD\u7684\u6570\u636E\u548C\u670D\u52A1\u3002\u5176\u4ED6\u7684\u5404\u79CD\u5F62\u5F0F\u7684\u670D\u52A1\u90FD\u6254\u8FDB Context \u7684\u8BDD\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5904\u7406\u590D\u6742\u5316\uFF0C\u5F71\u54CD\u6027\u80FD\u3002</p><h3 id="\u6709-redux-\u5440" tabindex="-1">\u6709 Redux \u5440 <a class="header-anchor" href="#\u6709-redux-\u5440" aria-hidden="true">#</a></h3><p>A Predictable State Container for JS Apps\uFF0C\u4ECE\u6807\u8BED\u4E0A\u6765\u770B\uFF0Credux \u662F\u4E00\u4E2A\u72B6\u6001\u5BB9\u5668\uFF0Creact-redux \u4F53\u73B0\u7684\u662F UI \u7F16\u7A0B\u4E2D\u7684\u5173\u6CE8\u70B9\u5206\u79BB\uFF0C\u5C06 View \u4EC5\u4F5C\u4E3A\u6D88\u8D39 State \u7684\u5C55\u793A\u5C42\uFF0C\u540C\u65F6\u5BF9\u4E8E State \u7684\u64CD\u4F5C\u548C\u66F4\u6539\u90FD\u6709\u8FF9\u53EF\u5FAA\u3002</p><p>\u4F46\u4E00\u822C\u5728\u590D\u6742\u7684\u524D\u7AEF\u4E1A\u52A1\u7CFB\u7EDF\u4E2D\uFF0C\u66F4\u591A\u7684\u662F\u5C06 Redux \u4F5C\u4E3A View Data \u7684\u5B58\u50A8\u3002\u800C\u600E\u4E48\u4E0E\u540E\u7AEF\u4EA4\u4E92\u3001\u540E\u7AEF\u7684\u6570\u636E\u6A21\u578B\u5982\u4F55\u8F6C\u6362\u6210\u89C6\u56FE\u5C42\u6A21\u578B\u7B49\u7B49\u6211\u4EEC\u79F0\u4E3A ==\u201C\u4E1A\u52A1\u903B\u8F91\u201D== \u7684\u4EE3\u7801\uFF0C\u6700\u597D\u8FD8\u662F\u5728\u4E00\u4E2A\u5355\u72EC\u7684\u62BD\u8C61\u5C42\u4E2D\uFF0C\u4E0E\u89C6\u56FE\u5C42\u7684\u9009\u578B\u9694\u79BB\u5F00\u6765\u3002\u800C\u4F9D\u8D56\u6CE8\u5165\uFF0C\u5728\u4E1A\u52A1\u903B\u8F91\u7684\u590D\u7528\u4E2D\uFF0C\u53EF\u4EE5\u6709\u4E00\u5E2D\u4E4B\u5730\u3002</p>`,35),o=[i];function c(s,d,p,l,u,h){return n(),t("div",null,o)}var m=e(r,[["render",c]]);export{v as __pageData,m as default};
