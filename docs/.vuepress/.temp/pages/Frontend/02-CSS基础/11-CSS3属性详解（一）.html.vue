<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>我们在上一篇文章中学习了<a href="http://www.cnblogs.com/smyhvae/p/8426799.html" target="_blank" rel="noopener noreferrer">CSS3的选择器</a>，本文来学一下CSS3的一些属性。</p>
<p>本文主要内容：</p>
<ul>
<li>
<p>文本</p>
</li>
<li>
<p>盒模型中的 box-sizing 属性</p>
</li>
<li>
<p>处理兼容性问题：私有前缀</p>
</li>
<li>
<p>边框</p>
</li>
<li>
<p>背景属性</p>
</li>
<li>
<p>渐变</p>
</li>
</ul>
<h2 id="文本" tabindex="-1"><a class="header-anchor" href="#文本"><span>文本</span></a></h2>
<h3 id="text-shadow-设置文本的阴影" tabindex="-1"><a class="header-anchor" href="#text-shadow-设置文本的阴影"><span>text-shadow：设置文本的阴影</span></a></h3>
<p>格式举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	text<span class="token operator">-</span>shadow<span class="token operator">:</span> 20px 27px 22px pink<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参数解释：水平位移 垂直位移 模糊程度 阴影颜色。</p>
<p>效果举例：</p>
<p><img src="http://img.smyhvae.com/20180207_1600.png" alt=""></p>
<h3 id="举例-凹凸文字效果" tabindex="-1"><a class="header-anchor" href="#举例-凹凸文字效果"><span>举例：凹凸文字效果</span></a></h3>
<p>text-shadow 可以设置多个阴影，每个阴影之间使用逗号隔开。我们来看个例子。</p>
<p>代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Microsoft Yahei"</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">/* text-shadow 可以设置多个阴影，每个阴影之间使用逗号隔开*/</span></span>
<span class="line">        <span class="token selector">.tu</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">text-shadow</span><span class="token punctuation">:</span> -1px -1px 1px #fff<span class="token punctuation">,</span> 1px 1px 1px #000<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">.ao</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">text-shadow</span><span class="token punctuation">:</span> -1px -1px 1px #000<span class="token punctuation">,</span> 1px 1px 1px #fff<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>生命壹号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>生命壹号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20180207_1617.png" alt=""></p>
<p>上图中，实现凹凸文字效果的方式比较简单，给左上角放黑色的阴影，右下角放白色的阴影，就达到了凹下去的效果。</p>
<h2 id="盒模型中的-box-sizing-属性" tabindex="-1"><a class="header-anchor" href="#盒模型中的-box-sizing-属性"><span>盒模型中的 box-sizing 属性</span></a></h2>
<p>我们在**<a href="http://www.cnblogs.com/smyhvae/p/7256371.html" target="_blank" rel="noopener noreferrer">之前的文章</a>**中专门讲过盒子模型。</p>
<p>CSS3 对盒模型做出了新的定义，即允许开发人员<strong>指定盒子宽度和高度的计算方式</strong>。</p>
<p>这就需要用到 <code v-pre>box-sizing</code>属性。它的属性值可以是：<code v-pre>content-box</code>、<code v-pre>border-box</code>。解释如下。</p>
<p><strong>外加模式：</strong>（css的默认方式）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	box<span class="token operator">-</span>sizing<span class="token operator">:</span> content<span class="token operator">-</span>box<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：此时设置的 width 和 height 是<strong>内容区域</strong>的宽高。<code v-pre>盒子的实际宽度 = 设置的 width + padding + border</code>。此时改变 padding 和 border 的大小，也不会改变内容的宽高，而是盒子的总宽高发生变化。</p>
<p><strong>内减模式：</strong>【需要注意】</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：此时设置的 width 和 height 是<strong>盒子</strong>的总宽高。<code v-pre>盒子的实际宽度 = 设置的 width</code>。此时改变 padding 和 border 的大小，会改变内容的宽高，盒子的总宽高不变。</p>
<h2 id="处理兼容性问题-私有前缀" tabindex="-1"><a class="header-anchor" href="#处理兼容性问题-私有前缀"><span>处理兼容性问题：私有前缀</span></a></h2>
<p>通过网址<a href="http://caniuse.com/" target="_blank" rel="noopener noreferrer">http://caniuse.com/</a> 可以查询CSS3各特性的支持程度。</p>
<p>处理兼容性问题的常见方法：为属性添加<strong>私有前缀</strong>。</p>
<p>如此方法不能解决，应尽量避免使用，无需刻意去处理CSS3的兼容性问题。</p>
<p><strong>私有前缀的举例</strong>：</p>
<p>比如说，我想给指定的div设置下面这样一个属性：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> green<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面这个属性的作用是：添加从左到右的线性渐变，颜色从绿色变为黄色。</p>
<p>如果直接这样写属性，是看不到效果的：</p>
<p><img src="http://img.smyhvae.com/20180207_1700.png" alt=""></p>
<p>此时，我们可以<strong>为浏览器添加不同的私有前缀</strong>，属性就可以生效了。</p>
<p>格式如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    -webkit-: 谷歌 苹果</span>
<span class="line">    -moz-:火狐</span>
<span class="line">    -ms-：IE</span>
<span class="line">    -o-：欧朋</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>格式举例如下：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> green<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-moz-linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> green<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-ms-linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> green<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-o-linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> green<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> green<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20180207_1710.png" alt=""></p>
<h2 id="边框" tabindex="-1"><a class="header-anchor" href="#边框"><span>边框</span></a></h2>
<p>边框的属性很多，其中<strong>边框圆角</strong>和<strong>边框阴影</strong>这两个属性，应用十分广泛，兼容性也相对较好，且符合<strong>渐进增强</strong>的原则，需要重点熟悉。</p>
<h3 id="边框圆角-border-radius-属性" tabindex="-1"><a class="header-anchor" href="#边框圆角-border-radius-属性"><span>边框圆角：<code v-pre>border-radius</code> 属性</span></a></h3>
<p>边框的每个圆角，本质上是一个圆，圆有<strong>水平半径</strong>和<strong>垂直半径</strong>：如果二者相等，就是圆；如果二者不等， 就是椭圆。</p>
<p>单个属性的写法：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 60px 120px<span class="token punctuation">;</span>        //参数解释：水平半径   垂直半径</span>
<span class="line"></span>
<span class="line">	<span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 60px 120px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token property">border-bottom-left-radius</span><span class="token punctuation">:</span> 60px 120px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token property">border-bottom-right-radius</span><span class="token punctuation">:</span> 60px 120px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复合写法：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	border-radius: 60px/120px;             //参数：水平半径/垂直半径</span>
<span class="line"></span>
<span class="line">	border-radius: 20px 60px 100px 140px;  //从左上开始，顺时针赋值。如果当前角没有值，取对角的值</span>
<span class="line"></span>
<span class="line">	border-radius: 20px 60px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最简洁的写法：（四个角的半径都相同时）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	border-radius: 60px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line">        <span class="token selector">.parent</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgb</span><span class="token punctuation">(</span>144<span class="token punctuation">,</span> 12<span class="token punctuation">,</span> 63<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 141<span class="token punctuation">,</span> 26<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">/*画圆形的方式一*/</span></span>
<span class="line">        <span class="token selector">.box:nth-child(1)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">/*画圆形的方式二*/</span></span>
<span class="line">        <span class="token selector">.box:nth-child(2)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">.box:nth-child(3)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">border-radius</span><span class="token punctuation">:</span> 100px 0 0 0<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">.box:nth-child(4)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">border-radius</span><span class="token punctuation">:</span> 100px/50px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">.box:nth-child(5)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">.box:nth-child(6)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 100px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>parent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20180207_1750.png" alt=""></p>
<h3 id="边框阴影-box-shadow-属性" tabindex="-1"><a class="header-anchor" href="#边框阴影-box-shadow-属性"><span>边框阴影：<code v-pre>box-shadow</code> 属性</span></a></h3>
<p>格式举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	box<span class="token operator">-</span>shadow<span class="token operator">:</span> 水平偏移 垂直偏移 模糊程度 阴影大小 阴影颜色</span>
<span class="line"></span>
<span class="line">	box<span class="token operator">-</span>shadow<span class="token operator">:</span> 15px 21px 48px <span class="token operator">-</span>2px #<span class="token number">666</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解释：</p>
<ul>
<li>
<p>水平偏移：正值向右 负值向左。</p>
</li>
<li>
<p>垂直偏移：正值向下 负值向上。</p>
</li>
<li>
<p>模糊程度：不能为负值。</p>
</li>
</ul>
<p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20180207_2027.png" alt=""></p>
<p>另外，后面还可以再加一个inset属性，表示内阴影。如果不写，则默认表示外阴影。例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	box<span class="token operator">-</span>shadow<span class="token operator">:</span>3px 3px 3px 3px #<span class="token number">666</span> inset<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20180207_2028.png" alt=""></p>
<p><strong>注意</strong>：设置边框阴影不会改变盒子的大小，即不会影响其兄弟元素的布局。</p>
<p>我们还可以设置多重边框阴影，实现更好的效果，增强立体感。</p>
<h3 id="边框图片" tabindex="-1"><a class="header-anchor" href="#边框图片"><span>边框图片</span></a></h3>
<p>边框图片有以下属性：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	<span class="token comment">/* 边框图片的路径*/</span></span>
<span class="line">	border<span class="token operator">-</span>image<span class="token operator">-</span>source<span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"images/border.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">/* 图片边框的裁剪*/</span></span>
<span class="line">	border<span class="token operator">-</span>image<span class="token operator">-</span>slice<span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">/*图片边框的宽度*/</span></span>
<span class="line">	border<span class="token operator">-</span>image<span class="token operator">-</span>width<span class="token operator">:</span> 27px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">/*边框图片的平铺*/</span></span>
<span class="line">	<span class="token comment">/* repeat :正常平铺 但是可能会显示不完整*/</span></span>
<span class="line">	<span class="token comment">/*round: 平铺 但是保证 图片完整*/</span></span>
<span class="line">	<span class="token comment">/*stretch: 拉伸显示*/</span></span>
<span class="line">	border<span class="token operator">-</span>image<span class="token operator">-</span>repeat<span class="token operator">:</span> stretch<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以写成一个综合属性：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	 border<span class="token operator">-</span>image<span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"images/border.png"</span><span class="token punctuation">)</span> <span class="token number">27</span><span class="token operator">/</span>20px round<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个属性要好好理解，我们假设拿下面这张图来作为边框图片：</p>
<p><img src="http://img.smyhvae.com/20180207_2045.png" alt=""></p>
<p><img src="http://img.smyhvae.com/20180207_2046.png" alt=""></p>
<p>这张图片将会被“切割”成<strong>九宫格</strong>形式，然后进行平铺。四个角位置、形状保持不变，中心位置和水平垂直向两个方向平铺：</p>
<p><img src="http://img.smyhvae.com/20180207_2050.png" alt=""></p>
<p>再具体一点：</p>
<p><img src="http://img.smyhvae.com/20180207_2051.png" alt=""></p>
<h3 id="常见的边框图片汇总" tabindex="-1"><a class="header-anchor" href="#常见的边框图片汇总"><span>常见的边框图片汇总</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>CSS3的更多属性，且看下文继续。</p>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="http://img.smyhvae.com/20190101.png" alt=""></p>
</div></template>


