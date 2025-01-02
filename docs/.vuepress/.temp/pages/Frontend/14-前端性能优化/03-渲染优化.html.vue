<template><div><h2 id="浏览器的渲染机制" tabindex="-1"><a class="header-anchor" href="#浏览器的渲染机制"><span>浏览器的渲染机制</span></a></h2>
<p>我们需要先理解浏览器的渲染经历了哪些过程，才能有针对性的进行相关优化。</p>
<p>掌握浏览器的渲染优化，可以说是前端工程师的一个分水岭。如果想要具备架构师的思维，需要达到什么样的能力？不光是要解决当下的问题，还需要掌握基本的原理，将来在遇到新问题时也能解决，即“预测问题”。</p>
<p>有一个经典的面试题是：“在浏览器的地址栏输入url，回车后，经历了哪些过程？”这个问题并不简单，根据你回答的详细程度，可以看出你对前后端知识的掌握程度。你能否答出“浏览器的渲染机制”？如果不能，说明你对浏览器渲染的性能优化，不够了解。</p>
<p>关于浏览器的渲染机制，可以看本教程的另外一篇文章：</p>
<blockquote>
<p>《前端面试/面试必看/浏览器渲染机制.md》</p>
</blockquote>
<p>关键渲染路径举例：</p>
<h2 id="避免布局抖动-layout-thrashing" tabindex="-1"><a class="header-anchor" href="#避免布局抖动-layout-thrashing"><span>避免布局抖动（layout thrashing）</span></a></h2>
<p>1、尽量避免 重排：</p>
<p>比如说，如果想改变一个元素的位置，很多人可能会使用相对布局的left、top属性，但是这个属性会引起重排。我们可以使用 <code v-pre>transfrom:translate</code>让元素做位移，这个属性既不会触发重排，也不会触发 重绘，只会触发 conmposite。</p>
<p>再比如说，vue、react这样的框架，采用了虚拟DOM，它会把涉及到DOM修改的操作积攒起来，然后统一计算，批量处理，最后应用到真正的DOM上。</p>
<p>2、读写分离。建议先批量读（获取位置等信息），然后再批量做写操作（修改位置）。</p>
<p>补充：</p>
<p>如果你的页面经常需要做重排、重绘，就很容易导致“页面抖动”。</p>
<p>很多时候，我们知道原理和解决方案。但是在工程化实践的时候，往往时间很紧，没有时间去做这些事情。我们希望有一些拿来就可以用的、而且经过测试没有问题的工具，来帮我们解决问题。</p>
<p>FastDom是用于做防抖的一个比较流行的解决方案。</p>
<h2 id="减少重绘-repaint" tabindex="-1"><a class="header-anchor" href="#减少重绘-repaint"><span>减少重绘（repaint）</span></a></h2>
<h2 id="防抖-debounce-降低事件的触发频率" tabindex="-1"><a class="header-anchor" href="#防抖-debounce-降低事件的触发频率"><span>防抖（Debounce）：降低事件的触发频率</span></a></h2>
<p>我们可以针对<strong>高频事件</strong>做防抖。</p>
<p><strong>高频事件处理函数</strong>：有很多事件的触发频率非常高，甚至超过了屏幕的刷新率（60帧/秒）。比如页面滚动、鼠标移动、移动端的touch事件。</p>
<p>如果我们不对这些事件做处理，就会频繁导致浏览器做重排、重绘，影响性能，导致页面卡顿，也就是“抖动”。因此需要对这些高频事件处理函数做防抖处理，降低它们的触发频率。</p>
<p>比如说滚动事件：我其实并不关心滚动中间的过程，我只关心最终滚动到了哪里。</p>
<p>requestAnimationFrame 这个api可以做防抖。</p>
<p>参考文章：</p>
<ul>
<li>防抖与节流：https://juejin.cn/post/6885250789825052679</li>
</ul>
<h2 id="代码优化" tabindex="-1"><a class="header-anchor" href="#代码优化"><span>代码优化</span></a></h2>
<h3 id="js的开销" tabindex="-1"><a class="header-anchor" href="#js的开销"><span>JS的开销</span></a></h3>
<p>静态资源有很多种：js、图片、css、字体等。这些资源都有可能会很大，但是JS的开销仍然是最昂贵的，因为JS除了加载资源之外，还需要经历<strong>解析&amp;编译</strong>、<strong>执行的</strong>过程。</p>
<h3 id="如何缩短js的解析事件" tabindex="-1"><a class="header-anchor" href="#如何缩短js的解析事件"><span>如何缩短JS的解析事件</span></a></h3>
<h3 id="web-loading-is-a-journey" tabindex="-1"><a class="header-anchor" href="#web-loading-is-a-journey"><span>Web loading is a Journey</span></a></h3>
<h3 id="v8引擎" tabindex="-1"><a class="header-anchor" href="#v8引擎"><span>V8引擎</span></a></h3>
<h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充"><span>补充</span></a></h2>
<ul>
<li>首屏尽快打开，剩下的内容延迟加载，减少初次加载的资源量。首屏的内容是可以确定的。</li>
</ul>
</div></template>


