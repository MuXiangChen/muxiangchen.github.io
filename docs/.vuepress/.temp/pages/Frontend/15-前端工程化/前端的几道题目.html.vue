<template><div><p>几道面试题</p>
<h2 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局"><span>页面布局</span></a></h2>
<h3 id="如何实现一个三栏布局-要求两边固定宽度、中间自适应。" tabindex="-1"><a class="header-anchor" href="#如何实现一个三栏布局-要求两边固定宽度、中间自适应。"><span>如何实现一个三栏布局，要求两边固定宽度、中间自适应。</span></a></h3>
<p>此题可以考察的知识点：</p>
<ul>
<li>
<p>圣杯布局</p>
</li>
<li>
<p>双飞翼布局</p>
</li>
<li>
<p>flex布局（css3）</p>
</li>
</ul>
<h3 id="让元素垂直居中" tabindex="-1"><a class="header-anchor" href="#让元素垂直居中"><span>让元素垂直居中</span></a></h3>
<p>**方式一：**如果宽高已知，可以利用绝对定位。</p>
<p>**方式二：**用 translate 位移来做。（在宽高未知的情况下，也可以这样做）</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>       绝对定位的盒子</span>
<span class="line">        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>               首先，让上边线居中</span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>    然后，利用translate，往上走自己宽度的一半【推荐写法】</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**方式三：**flex 布局</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token selector">parentElement</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span><span class="token comment">/*Flex布局*/</span></span>
<span class="line">        <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span> <span class="token comment">/* Safari */</span></span>
<span class="line">        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span><span class="token comment">/*设置子元素在侧轴方向上的布局*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>
<ul>
<li>
<p><a href="https://www.zhihu.com/question/20543196" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/20543196</a></p>
</li>
<li>
<p><a href="https://www.cnblogs.com/coco1s/p/4444383.html" target="_blank" rel="noopener noreferrer">水平垂直居中方案与flexbox布局</a></p>
</li>
</ul>
<h2 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升"><span>变量提升</span></a></h2>
<p><strong>问题</strong>：说一下你对JavaScript变量提升的理解。</p>
<p><strong>定义</strong>：</p>
<p>在函数体内部，声明变量，会把该变量提升到函数体的最顶端。注意：<strong>只提升变量声明，不赋值</strong>。</p>
<p><strong>代码1</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中：</p>
<p>（1）给fn创建函数上下文，找到fn中<strong>所有</strong>用var声明的变量（即x和y）；</p>
<p>（2）将这些变量初始化为undefined；</p>
<p>（3）将x赋值为1，将y赋值为2。</p>
<p><strong>代码2</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中：</p>
<p>（1）创建全局上下文，找到所有用function声明的变量，在环境中“创建”这些变量。</p>
<p>（2）将这些变量<strong>初始化</strong>，并<strong>赋值</strong>为 <code v-pre>function(){ console.log(2) }</code>（并不是undefined）</p>
<p>（3）开始执行代码<code v-pre>fn2();</code></p>
<p><strong>代码3</strong>：（let的出现）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">  x <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中：</p>
<p>（1）找到所有用 let 声明的变量，在环境中「创建」这些变量</p>
<p>（2）开始执行代码（注意现在还没有初始化）</p>
<p>（3）执行 x = 1，将 x 「初始化」为 1（这并不是一次赋值，如果代码是 let x，就将 x 初始化为 undefined）</p>
<p>（4）执行 x = 2，对 x 进行「赋值」</p>
<p>代码4：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">'global'</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// Uncaught ReferenceError: x is not defined</span></span>
<span class="line">  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因有两个：</p>
<ul>
<li>
<p>console.log(x) 中的 x 指的是下面的 x，而不是全局的 x</p>
</li>
<li>
<p>执行 log 时 x 还没「初始化」，所以不能使用（也就是所谓的暂时死区）</p>
</li>
</ul>
<p>看到这里，你应该明白了 let 到底有没有提升：</p>
<ul>
<li>
<p>let 的「创建」过程被提升了，但是初始化没有提升。</p>
</li>
<li>
<p>var 的「创建」和「初始化」都被提升了。</p>
</li>
<li>
<p>function 的「创建」「初始化」和「赋值」都被提升了。</p>
</li>
</ul>
<p>参考链接：</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/28140450" target="_blank" rel="noopener noreferrer">我用了两个月的时间才理解 let</a></li>
</ul>
<h3 id="this" tabindex="-1"><a class="header-anchor" href="#this"><span>this</span></a></h3>
<p>问题：下方代码的打印结果是什么？</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'smyhvae'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    a<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果是window.name，但实际的结果是空的。</p>
<p>这个神奇的特性，被用来解决跨域数据传递。（网上可以查一下iframe相关）</p>
<p><strong>总结1</strong>：this永远指向<strong>函数运行时所在的对象</strong>，而不是函数被创建时所在的对象。即：<strong>谁调用</strong>，指向谁。</p>
<p><strong>举例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'全局'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'局部'</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的打印结果是：<code v-pre>全局</code>。</p>
<p>分析：<code v-pre>getName()</code>这个函数其实是window调用的，所以this指向的window，因为外部有name这个变量，所以打印结果为<code v-pre>全局</code>。</p>
<p><strong>总结2</strong>：没有明确的当前对象时，this永远指向window。这个在setTimeout里比较常见。</p>
<h3 id="apply、call、bind的区别" tabindex="-1"><a class="header-anchor" href="#apply、call、bind的区别"><span>apply、call、bind的区别</span></a></h3>
<h2 id="链式调用" tabindex="-1"><a class="header-anchor" href="#链式调用"><span>链式调用</span></a></h2>
<p><strong>问题</strong>：如何实现类似jQuery的链式调用？</p>
<p>答案：一直return <code v-pre>this</code>就好了。</p>
<h2 id="yslow和pagespeed" tabindex="-1"><a class="header-anchor" href="#yslow和pagespeed"><span>Yslow和pageSpeed</span></a></h2>
<p>Yslow和pageSpeed你知道怎么用吗？你记得其中多少规则？</p>
<h2 id="dns的查询时间" tabindex="-1"><a class="header-anchor" href="#dns的查询时间"><span>DNS的查询时间</span></a></h2>
<p>**问题：**前端怎样拿到DNS的查询时间？</p>
<h3 id="h5中的方法-performance-timing" tabindex="-1"><a class="header-anchor" href="#h5中的方法-performance-timing"><span>H5中的方法：performance.timing</span></a></h3>
<p>window.performance这个api可以用来做前端性能监控。其中，timing这个方法。。</p>
<p>参考链接：</p>
<ul>
<li><a href="https://github.com/fredshare/blog/issues/5" target="_blank" rel="noopener noreferrer">https://github.com/fredshare/blog/issues/5</a></li>
</ul>
</div></template>


