# 如何自学图形学
图形学这个领域目前来看是很好玩也很有前景的一个方向，当我们了解它的基础知识，get到它好玩地方的时候，我们可以很轻松延伸到可视化这一领域进行拓展。
跟月影学可视化：https://time.geekbang.org/column/intro/100053801

计算机图形学是一门综合多学科的活跃的研究性学科，不是朴素的工程实践。

计算机图形学可以笼统的分为三个大方向，渲染rendering, 几何geometry和模拟simulation。

## 图形基础
在 Web 上，图形通常是通过浏览器绘制的。现代浏览器是一个复杂的系统，其中负责绘制图形的部分是渲染引擎。渲染引擎绘制图形的方式，一般大体上有 4 种。

### 传统的html + css
​与传统的 Web 应用相比，可视化项目，尤其是 PC 端的可视化大屏展现，使用HTML 与 CSS 情景相对较少，于是可能有些人会误认为，可视化只能使用 SVG、Canvas 这些方式，不能使用 HTML 与 CSS。当然了，这个想法是不对。
​
其实现代浏览器的HTML、CSS 表现能力很强大,其实一些简单的可视化图表，完全可以用 CSS 来实现，比如，我们常见的柱状图、饼图和折线图。能简化开发，又不需要引入额外的库，可以节省资源，提高网页打开的速度。

但是使用HTML + CSS也是有一定得弊端：
1）维护麻烦，在 CSS 代码里，我们很难看出数据与图形的对应关系，有很多换算也需要开发人员自己来做。这样一来，一旦图表或数据发生改动，就需要我们重新计算，所以维护起来会很麻烦。

性能开销是非常大，HTML 和 CSS 作为浏览器渲染引擎的一部分，为了完成页面渲染的工作，除了绘制图形外，还要做很多额外的工作。比如说，浏览器的渲染引擎在工作时，要先解析 HTML、SVG、CSS，构建 DOM 树、RenderObject 树和 RenderLayer 树，然后用 HTML（或 SVG）绘图。当图形发生变化时，我们很可能要重新执行全部的工作。

那有没有更好的实现方式，当我们在重绘图像时，不会发生重新解析文档和构建结构的过程，这个当然是有的，那后面也会介绍到。

### SVG
SVG 它是浏览器支持的一种基于 XML 语法的图像格式，它的 XML 语言本身和 HTML 非常接近，都是由标签 + 属性构成的，而且浏览器的 CSS、JavaScript 都能够正常作用于 SVG 元素。

### canvas2D
接下来到了图形基础的重点，canvas2D,后续的数学基础部分也是大多数以它为基础进行绘制。

这里说一下它的声明式绘图系统和指令式绘图系统区别:
- 声明式绘图系统：我们根据数据创建各种不同的图形元素（或者 CSS 规则），然后利用浏览器渲染引擎解析它们并渲染出来。
- 指令式绘图系统：它更多的是浏览器提供的一种可以直接用代码在一块平面的画布上绘制图形的api，使用它来绘图更像是传统的“编写代码”，简单来说就是调用绘图指令，然后引擎直接在页面上绘制图形。

总结来说，像Canvas 能够直接操作绘图上下文，不需要经过 HTML、CSS 解析、构建渲染树、布局等一系列操作。因此单纯绘图的话，Canvas 比 HTML/CSS 和 SVG 要快得多、在重绘图像时，也不会发生重新解析文档和构建结构的过程，开销要小很多。

### WebGL
webGL的使用场景:
​- 第一种情况，如果我们要绘制的图形数量非常多，比如有多达数万个几何图形需要绘制，而且它们的位置和方向都在不停地变化，如果使用 Canvas2D 绘制，性能是会达到瓶颈的。这个时候，我们就需要使用 GPU 能力，直接用 WebGL 来绘制。
​- 第二种情况，如果我们要对较大图像的细节做像素处理，比如，实现物体的光影、流体效果和一些复杂的像素滤镜。由于这些效果往往要精准地改变一个图像全局或局部区域的所有像素点，要计算的像素点数量非常的多（一般是数十万甚至上百万数量级的），我们也要用 WebGL 来绘制。
​- 第三种情况是绘制 3D 物体。因为 WebGL 内置了对 3D 物体的投影、深度检测等特性，所以用它来渲染 3D 物体就不需要我们自己对坐标做底层的处理了。在这种情况下，WebGL 无论是在使用上还是性能上都有很大优势。

要使用 WebGL 绘图，我们必须要深入细节。换句话说就是，我们必须要和内存、GPU 打交道，真正控制图形输出的每一个细节。数据经过CPU（中央处理单元，负责逻辑计算）处理，成为具有特定结构的几何信息。然后，信息会被送到GPU（图形处理单元，负责图形计算）中进行处理。在GPU中要经过两个步骤生成光栅信息（构成图像的像素矩阵），这些光栅信息会输出到帧缓存（一块内存地址）中，最后渲染到屏幕上。

GPU 是由大量的小型处理单元构成的，它可能远远没有 CPU 那么强大，但胜在数量众多，可以保证每个单元处理一个简单的任务。即使我们要处理一张 800 * 600 大小的图片，GPU 也可以保证这 48 万个像素点分别对应一个小单元，这样我们就可以同时对每个像素点进行计算了。

## 总结
在前端整体迅猛发展的大环境下，因为产品需求的驱动，图形学方向技术发展也非常迅速，前端图形学属于一个比较小众的领域，甚至延伸到可视化方向依然属于一比较小众的领域，那么真正阻挡的技术门槛是什么呢？

其实就是对使用者的数学基础比较高，但当我们真正突破了这个技术门槛，甚至可视化方向上突破了WebGL这种更偏底层的门槛，在行业里我们会是特别非常有竞争力的。

- 图形基础：带你熟悉 HTML/CSS、SVG、Canvas2D 和 WebGL 这四种图形系统，学会它们的基本用法、优点和局限性，从而能在实际应用中选择合适的图形系统，以达到最好的视觉效果。
- 数学基础：深入讲解向量、矩阵运算、参数方程、三角剖分以及仿射变换等内容，并配合综合运用，帮你建立一套通用的数学知识体系，适用于所有图形系统，以此来解决可视化图形呈现中的大部分问题。
- 视觉呈现：和你讨论像素化、动画、3D 和交互等话题，结合美颜、图片处理和视觉特效等实际例子，来应用各种数学和图形学知识，帮你全面提升视觉呈现的能力，实现更高级的视觉效果。
- 性能优化：通过学习 WebGL 渲染复杂的 2D、3D 模型的方法，了解可视化高性能渲染的技术思路。在这一模块月影将和你分享他总结的一些成熟的方法论，帮助你在实现可视化项目的时候，解决大规模数据批量渲染的性能瓶颈问题。
- 数据驱动：结合 3D 柱状图、3D 层级结构图、3D 音乐可视化等案例，讲解数据处理的技巧，真正正将数据和视觉呈现结合起来，实现具有科技感的 3D 可视化大屏效果，最终形成完整的可视化解决方案。

