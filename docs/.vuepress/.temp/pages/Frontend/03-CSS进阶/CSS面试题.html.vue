<template><div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="你是如何理解-html-语义化的" tabindex="-1"><a class="header-anchor" href="#你是如何理解-html-语义化的"><span>你是如何理解 HTML 语义化的？</span></a></h3>
<p><strong>语义化</strong>：指对文本内容的结构化（内容语义化），选择合乎语义的标签（代码语义化）。</p>
<p><strong>举例</strong>：段落用 p，边栏用 aside，主要内容用 main 标签。</p>
<p><strong>好处：</strong></p>
<ul>
<li>
<p>便于开发者阅读和维护</p>
</li>
<li>
<p>有利于SEO：让浏览器的爬虫和辅助技术更好的解析，</p>
</li>
</ul>
<p><strong>语义化标签介绍</strong>：</p>
<p>在HTML5出来之前，我们习惯于用div来表示页面的章节或者不同模块，但是<code v-pre>div</code>本身是没有语义的。但是现在，HTML5中加入了一些语义化标签，来更清晰的表达文档结构。</p>
<p>20180322_1120.jpg</p>
<p>参考链接：</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/32570423" target="_blank" rel="noopener noreferrer">初探 · HTML5语义化</a></li>
</ul>
<h3 id="meta-viewport-是做什么用的-怎么写" tabindex="-1"><a class="header-anchor" href="#meta-viewport-是做什么用的-怎么写"><span>meta viewport 是做什么用的，怎么写？</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"> 	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>控制页面在移动端不要缩小显示。</p>
<h3 id="canvas-元素是干什么的" tabindex="-1"><a class="header-anchor" href="#canvas-元素是干什么的"><span>canvas 元素是干什么的？</span></a></h3>
<p>看 MDN 的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API" target="_blank" rel="noopener noreferrer">canvas 入门手册</a>。</p>
<h3 id="说一下css盒模型" tabindex="-1"><a class="header-anchor" href="#说一下css盒模型"><span>说一下CSS盒模型</span></a></h3>
<p>可以参考本人的另外一篇文章：《02-CSS基础/06-CSS盒模型详解》。</p>
<h3 id="css-reset-和-normalize-css-有什么区别" tabindex="-1"><a class="header-anchor" href="#css-reset-和-normalize-css-有什么区别"><span>css reset 和 Normalize.css 有什么区别</span></a></h3>
<blockquote>
<p>此题考英文。</p>
</blockquote>
<p>二者都是用来<strong>统一</strong>浏览器的默认样式：</p>
<ul>
<li>
<p>reset：重置。相对「暴力」，不管你有没有用，统统重置成一样的效果，且影响的范围很大，讲求跨浏览器的一致性。（一刀切）</p>
</li>
<li>
<p><code v-pre>Normalize.css</code> ：标准化。相对「平和」，注重通用的方案，重置掉该重置的样式，保留有用的 user agent 样式，同时进行一些 bug 的修复，这点是 reset 所缺乏的。（去伪存真）</p>
</li>
</ul>
<p>参考链接：</p>
<ul>
<li>
<p><a href="https://p.baidu.com/question/ab496162636234613761335c00" target="_blank" rel="noopener noreferrer">Normalize.css 与传统的 CSS Reset 有哪些区别？</a></p>
</li>
<li>
<p><a href="http://www.bbsxiaomi.com/html_css/html5_css3/177.html" target="_blank" rel="noopener noreferrer">CSS3初始化代码Normalize.css中文版</a></p>
</li>
<li>
<p><a href="https://github.com/chokcoco/iCSS" target="_blank" rel="noopener noreferrer">谈谈一些有趣的 CSS 话题</a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000006890725" target="_blank" rel="noopener noreferrer">前端面试之CSS总结(上)</a></p>
</li>
</ul>
<h3 id="选择器的优先级如何确定" tabindex="-1"><a class="header-anchor" href="#选择器的优先级如何确定"><span>选择器的优先级如何确定</span></a></h3>
<ul>
<li>
<p>选择器越具体，优先级越高。 #xxx 大于 .yyy</p>
</li>
<li>
<p>同样优先级，写在后面的覆盖前面的。</p>
</li>
<li>
<p>color: red !important; 优先级最高。</p>
</li>
</ul>
<h3 id="bfc-是什么" tabindex="-1"><a class="header-anchor" href="#bfc-是什么"><span>BFC 是什么</span></a></h3>
<p>overflow:hidden ：取消父子 margin 合并。 （另一种推荐做法：<code v-pre>padding-top: 0.1px;</code>）</p>
<h3 id="如何清除浮动" tabindex="-1"><a class="header-anchor" href="#如何清除浮动"><span>如何清除浮动</span></a></h3>
<p>（1）overflow: hidden</p>
<p>（2）.clearfix 清除浮动写在爸爸身上</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 兼容 IE */</span></span>
<span class="line">    <span class="token selector">.clearfix</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="伪类和伪元素的区别是什么" tabindex="-1"><a class="header-anchor" href="#伪类和伪元素的区别是什么"><span>伪类和伪元素的区别是什么？</span></a></h3>
<p>概念上的区别：</p>
<ul>
<li>
<p>伪类表示一种状态</p>
</li>
<li>
<p>伪元素是真的有元素。比如 ::after 是真的有元素，可以在页面上显示内容。</p>
</li>
</ul>
<p>使用上的区别：</p>
<ul>
<li>
<p>伪类：使用单冒号</p>
</li>
<li>
<p>伪元素：使用双冒号</p>
</li>
</ul>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/33998813" target="_blank" rel="noopener noreferrer">互联网公司招聘启事的正确阅读方式</a></li>
</ul>
</div></template>


