<template><div><h3 id="让flex盒子中的子元素们-居中" tabindex="-1"><a class="header-anchor" href="#让flex盒子中的子元素们-居中"><span>让flex盒子中的子元素们，居中</span></a></h3>
<p>flex布局常用的三行代码：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">    display: flex;</span>
<span class="line">    justify-content: center; // 子元素在横轴的对齐方式 （左右居中）</span>
<span class="line">    align-items: center;  // 子元素在竖轴的对齐方式（上下居中）</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="让文字只显示一行-超出显示省略号" tabindex="-1"><a class="header-anchor" href="#让文字只显示一行-超出显示省略号"><span>让文字只显示一行，超出显示省略号</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="让文字最多只显示两行-超出后显示省略号" tabindex="-1"><a class="header-anchor" href="#让文字最多只显示两行-超出后显示省略号"><span>让文字最多只显示两行，超出后显示省略号</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们把 <code v-pre>-webkit-line-clamp</code>的值设为1，也能达到“让文字只显示一行，超出显示省略号”的效果。</p>
<p>参考链接：<a href="https://blog.csdn.net/NN_nan/article/details/55045562" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/NN_nan/article/details/55045562</a></p>
<h3 id="让文字最多只显示三行-超过后显示省略号" tabindex="-1"><a class="header-anchor" href="#让文字最多只显示三行-超过后显示省略号"><span>让文字最多只显示三行，超过后显示省略号</span></a></h3>
<blockquote>
<p>如果当前元素处于flex布局等复杂的场景中，那么，样式可能比较难调，用上面两种写法未必能达到预期效果。此时可以试试下面这种写法（多加了一行 <code v-pre>white-space: normal</code>）。</p>
</blockquote>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题描述-文本内容里自带了换行-但是在前端没有展示出来" tabindex="-1"><a class="header-anchor" href="#问题描述-文本内容里自带了换行-但是在前端没有展示出来"><span>问题描述：文本内容里自带了换行，但是在前端没有展示出来</span></a></h3>
<p>解决办法：增加如下属性即可。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">white-space: pre-wrap;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">white-space: pre-line;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2019-11-12-css的逗号和空格" tabindex="-1"><a class="header-anchor" href="#_2019-11-12-css的逗号和空格"><span>2019-11-12-CSS的逗号和空格</span></a></h3>
<p>CSS的逗号一般写在()里。<strong>不同属性值之间，用的是空格</strong>，不是逗号。比如：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 这种写逗号 */</span></span>
<span class="line">	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/* 不同属性值之间，用的是空格 */</span></span>
<span class="line"></span>
<span class="line">	<span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>  <span class="token comment">/* 这里是空格，不是逗号 */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2019-11-01" tabindex="-1"><a class="header-anchor" href="#_2019-11-01"><span>2019-11-01</span></a></h3>
<p>人民币价格中的羊角符号，有半角和全角之分：</p>
<ul>
<li>
<p>¥半角</p>
</li>
<li>
<p>￥全角</p>
</li>
</ul>
<p>可以看出，半角的宽度更小。考虑到容器的空间一般比较紧张，所以推荐使用<strong>半角</strong>。</p>
<h3 id="_2019-11-19-鼠标悬停时-弹出提示文字" tabindex="-1"><a class="header-anchor" href="#_2019-11-19-鼠标悬停时-弹出提示文字"><span>2019-11-19-鼠标悬停时，弹出提示文字</span></a></h3>
<p>参考链接：<a href="https://www.cnblogs.com/zhaojian-08/p/10074660.html" target="_blank" rel="noopener noreferrer">css实现鼠标悬浮后的提示效果</a></p>
<h3 id="_2019-11-27-图片的宽度固定-高度自适应" tabindex="-1"><a class="header-anchor" href="#_2019-11-27-图片的宽度固定-高度自适应"><span>2019-11-27-图片的宽度固定，高度自适应</span></a></h3>
<p>这个场景下，别用background。直接放img元素就好了，将图片的高度设置为<code v-pre>auto</code>。</p>
<h3 id="_2020-03-26-通过css扩大点击热区" tabindex="-1"><a class="header-anchor" href="#_2020-03-26-通过css扩大点击热区"><span>2020-03-26-通过CSS扩大点击热区</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">/* [其余样式] */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.button::before</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">right</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">bottom</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">left</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，button 里面不要写 <code v-pre>overflow: hidden</code> 属性，否则扩大的热区无效。</p>
<p>参考链接：<a href="https://www.jianshu.com/p/b83fc87cb222" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/b83fc87cb222</a></p>
<h3 id="_2020-10-09-上下滚动-不显示滚动条" tabindex="-1"><a class="header-anchor" href="#_2020-10-09-上下滚动-不显示滚动条"><span>2020-10-09-上下滚动，不显示滚动条</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.sku_list</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-left</span><span class="token punctuation">:</span> 25rpx<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 617rpx<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">/* 去掉滚动条 */</span></span>
<span class="line">	<span class="token selector">&amp;::-webkit-scrollbar</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，去掉滚动条的那行代码里，建议用<code v-pre>display: none;</code>，不要用<code v-pre>width: 0;</code>。因为，当你需要设置横向滚动的效果时，<code v-pre>display: none;</code>这个属性的效果更好，不会改变容器的size；<code v-pre>width: 0;</code>可能会改变容器的size。</p>
<p>参考链接：</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_42157001/article/details/90176510" target="_blank" rel="noopener noreferrer">html设置局部区域上下滚动，不显示滚动条</a></li>
</ul>
<h3 id="_2021-05-06-设置页面的宽高-撑满屏幕" tabindex="-1"><a class="header-anchor" href="#_2021-05-06-设置页面的宽高-撑满屏幕"><span>2021-05-06-设置页面的宽高，撑满屏幕</span></a></h3>
<p>一般来说，我们在开发一个页面的时候，默认是希望这个页面的宽高能够撑满屏幕的。代码可以这样写：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.app</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2021-09-13-js中插入css" tabindex="-1"><a class="header-anchor" href="#_2021-09-13-js中插入css"><span>2021-09-13-JS中插入CSS</span></a></h3>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">new_element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"style"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">new_element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">".tucao-content p{font-size:18px;}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>new_element<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>
<ul>
<li>js 插入公共css的方法：https://blog.csdn.net/u013970232/article/details/90578937</li>
</ul>
</div></template>


