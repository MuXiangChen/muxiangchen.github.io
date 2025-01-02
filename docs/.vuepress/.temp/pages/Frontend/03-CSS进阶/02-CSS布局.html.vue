<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<h3 id="常见的布局属性" tabindex="-1"><a class="header-anchor" href="#常见的布局属性"><span>常见的布局属性</span></a></h3>
<p>（1）<code v-pre>display</code> 确定元素的显示类型：</p>
<ul>
<li>
<p>block：块级元素。</p>
</li>
<li>
<p>inline：行内元素。</p>
</li>
<li>
<p>inline-block：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。</p>
</li>
</ul>
<p>（2）<code v-pre>position</code> 确定元素的位置：</p>
<ul>
<li>
<p>static：默认属性值。</p>
</li>
<li>
<p>relative：相对定位。相对于元素本身进行偏移，<strong>不会改变它所占据的空间</strong>。</p>
</li>
<li>
<p>absolute：绝对定位。相对于父元素中最近的 relative/absolute 进行偏移，会脱离文档流。音标：[ˈæbsəluːt]。</p>
</li>
<li>
<p>fixed：固定定位。相对于可视区域固定，会脱离文档流。</p>
</li>
</ul>
<p><code v-pre>relative</code>、<code v-pre>absolute</code>、<code v-pre>fixed</code>这三个属性，可以结合 z-index 来设置层级。</p>
<h3 id="常见的布局方法" tabindex="-1"><a class="header-anchor" href="#常见的布局方法"><span>常见的布局方法</span></a></h3>
<p>1、<strong>table 表格布局</strong>：早期使用的布局，如今用得很少。</p>
<p>2、<strong>float 浮动 + margin</strong>：为了兼容低版本的IE浏览器，很多网站（比如腾讯新闻、网易新闻、淘宝等）都会采用 float 布局。</p>
<p>3、<strong>inline-block 布局</strong>：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。</p>
<p>4、<strong>flex 布局</strong>：为布局而生，非常灵活，是最为推荐的布局写法。</p>
<p>唯一的缺点是兼容性问题：</p>
<p><img src="http://img.smyhvae.com/20191005_1200.png" alt=""></p>
<p>上图中可以看到， flex 布局不支持 IE9 及以下的版本。如果你的页面不需要处理 IE浏览器的兼容性问题，则可以放心大胆地使用 flex 布局。</p>
<p>flex 是一种现代的布局方式，是 W3C 第一次提供真正用于布局的 CSS 规范。</p>
<p>5、响应式布局。</p>
<h2 id="float-布局" tabindex="-1"><a class="header-anchor" href="#float-布局"><span>float 布局</span></a></h2>
<p>是 CSS 中一种比较麻烦的属性，涉及到 BFC 和清除浮动（面试的重点）。</p>
<h3 id="float-属性的特点" tabindex="-1"><a class="header-anchor" href="#float-属性的特点"><span>float 属性的特点</span></a></h3>
<ul>
<li>
<p>元素浮动</p>
</li>
<li>
<p><strong>脱离文档流，但不脱离文本流</strong></p>
</li>
</ul>
<p>代码举例：</p>
<p>下面这两个并列的<code v-pre>div1</code>和<code v-pre>div2</code>，默认是在标准流中的：</p>
<p><img src="http://img.smyhvae.com/20191005_2029.png" alt=""></p>
<p>在此基础之上，如果给<code v-pre>div1</code>增加<code v-pre>float: left</code>属性后，效果如下：</p>
<p><img src="http://img.smyhvae.com/20191005_2037.png" alt=""></p>
<p>上图中，可以看到，<code v-pre>div1</code>设置为浮动后，会脱离文档流，不会对<code v-pre>div2</code>的布局造成影响；但是<code v-pre>div1</code>不会脱离文本流，它会影响<code v-pre>div2</code>中文字的排列。</p>
<p>其实，这正是 float 属性的作用。float 本身是用来做图文混排、文字环绕的效果。</p>
<h3 id="float-所带来的影响" tabindex="-1"><a class="header-anchor" href="#float-所带来的影响"><span>float 所带来的影响</span></a></h3>
<p><strong>1、对自身的影响</strong>：</p>
<ul>
<li>
<p>形成“块”（BFC）</p>
</li>
<li>
<p>位置尽量靠上</p>
</li>
<li>
<p>位置尽量靠左/右</p>
</li>
</ul>
<p>下面这两个并列的<code v-pre>div1</code>和<code v-pre>div2</code>，设置为浮动之后的效果：（都是尽量靠左显示的）</p>
<p><img src="http://img.smyhvae.com/20191005_2130.png" alt=""></p>
<p>在上方代码的基础之上，增加 <code v-pre>div2</code>的宽度之后，会发现，<code v-pre>div2</code>掉下来了：</p>
<p><img src="http://img.smyhvae.com/20191005_2135.png" alt=""></p>
<p><strong>2、对兄弟元素的影响</strong>：</p>
<ul>
<li>
<p>不影响其他块级元素的位置</p>
</li>
<li>
<p>影响其他块级元素的内部文本</p>
</li>
</ul>
<p><strong>3、对父级元素的影响</strong>：</p>
<ul>
<li>
<p>从父级的布局中“消失”</p>
</li>
<li>
<p>造成父级元素的高度塌陷：父级元素撑开 div1 之后（父级元素里没有其他元素的情况下），如果设置 div1 为 float 之后，，会让父级元素的高度变为0。</p>
</li>
</ul>
<h2 id="inline-block-布局" tabindex="-1"><a class="header-anchor" href="#inline-block-布局"><span>inline-block 布局</span></a></h2>
<p>对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。</p>
<p><strong>思路</strong>：像文本一样去排列 block 元素，没有清除浮动等问题。</p>
<p><strong>存在的问题</strong>：需要处理间隙。代码举例如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">	<span class="token selector">.container</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token selector">.div1</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token selector">.div2</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">background</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token selector">.div3</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>div1的inline-block 属性<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>div2的inline-block 属性<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">			琴棋书画不会，洗衣做饭嫌累。</span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20191005_2200.png" alt=""></p>
<p>上面的代码，存在两个问题。</p>
<p><strong>问题一</strong>：如果设置<code v-pre>div2</code>的宽度为 200px 之后，<code v-pre>div2</code> 掉下来。</p>
<p><strong>问题二</strong>：<code v-pre>div1</code>和<code v-pre>div2</code>设置为 inline-block之后，这两个盒子之间存在了间隙。这是因为，此时的 <code v-pre>div1</code>和<code v-pre>div2</code> 已经被当成文本了。文本和文本之间，本身就会存在间隙。</p>
<p>为了去掉这个间隙，可以有几种解决办法：</p>
<p>办法1：设置父元素<code v-pre>container</code>的字体大小为0，即<code v-pre>font-size: 0</code>，然后设置子元素 <code v-pre>div1</code>、<code v-pre>div2</code>的字体<code v-pre>font-size: 12px</code>。</p>
<p>办法2：在写法上，去掉<code v-pre>div1</code>和<code v-pre>div2</code>之间的换行。改为：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>div1的inline-block 属性<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>div2的inline-block 属性<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局"><span>响应式布局</span></a></h2>
<p>移动端用得较多，本文暂时先不讲。</p>
</div></template>


