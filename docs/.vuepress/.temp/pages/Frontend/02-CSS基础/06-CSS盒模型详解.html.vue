<template><div><h2 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型"><span>盒子模型</span></a></h2>
<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h3>
<p>盒子模型，英文即box model。无论是div、span、还是a都是盒子。</p>
<p>但是，图片、表单元素一律看作是文本，它们并不是盒子。这个很好理解，比如说，一张图片里并不能放东西，它自己就是自己的内容。</p>
<h3 id="盒子中的区域" tabindex="-1"><a class="header-anchor" href="#盒子中的区域"><span>盒子中的区域</span></a></h3>
<p>一个盒子中主要的属性就5个：width、height、padding、border、margin。如下：</p>
<ul>
<li>width和height：<strong>内容</strong>的宽度、高度（不是盒子的宽度、高度）。</li>
<li>padding：内边距。</li>
<li>border：边框。</li>
<li>margin：外边距。</li>
</ul>
<p>盒子模型的示意图：</p>
<p><img src="http://img.smyhvae.com/20170727_2128.png" alt=""></p>
<p>代码演示：</p>
<p><img src="http://img.smyhvae.com/20170727_2326.png" alt=""></p>
<p>上面这个盒子，width:200px; height:200px; 但是真实占有的宽高是302*302。 这是因为还要加上padding、border。</p>
<p>注意：**宽度和真实占有宽度，不是一个概念！**来看下面这例子。</p>
<h3 id="标准盒模型和ie盒模型" tabindex="-1"><a class="header-anchor" href="#标准盒模型和ie盒模型"><span>标准盒模型和IE盒模型</span></a></h3>
<blockquote>
<p>我们目前所学习的知识中，以标准盒子模型为准。</p>
</blockquote>
<p>标准盒子模型：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-27.jpg" alt=""></p>
<p>IE盒子模型：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-30.jpg" alt=""></p>
<p>上图显示：</p>
<p>在 CSS 盒子模型 (Box Model) 规定了元素处理元素的几种方式：</p>
<ul>
<li>width和height：<strong>内容</strong>的宽度、高度（不是盒子的宽度、高度）。</li>
<li>padding：内边距。</li>
<li>border：边框。</li>
<li>margin：外边距。</li>
</ul>
<p>CSS盒模型和IE盒模型的区别：</p>
<ul>
<li>
<p>在 <font color="#0000FF"><strong>标准盒子模型</strong></font>中，<font color="#0000FF"><strong>width 和 height 指的是内容区域</strong></font>的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。</p>
</li>
<li>
<font color="#0000FF">**IE盒子模型**</font>中，<font color="#0000FF">**width 和 height 指的是内容区域+border+padding**</font>的宽度和高度。</li>
</ul>
<p>注：Android中也有margin和padding的概念，意思是差不多的，如果你会一点Android，应该比较好理解吧。区别在于，Android中没有border这个东西，而且在Android中，margin并不是控件的一部分。</p>
<h3 id="body-标签也有margin" tabindex="-1"><a class="header-anchor" href="#body-标签也有margin"><span><code v-pre>&lt;body&gt;</code>标签也有margin</span></a></h3>
<p><code v-pre>&lt;body&gt;</code>标签有必要强调一下。很多人以为<code v-pre>&lt;body&gt;</code>标签占据的是整个页面的全部区域，其实是错误的，正确的理解是这样的：整个网页最大的盒子是<code v-pre>&lt;document&gt;</code>，即浏览器。而<code v-pre>&lt;body&gt;</code>是<code v-pre>&lt;document&gt;</code>的儿子。浏览器给<code v-pre>&lt;body&gt;</code>默认的margin大小是8个像素，此时<code v-pre>&lt;body&gt;</code>占据了整个页面的一大部分区域，而不是全部区域。来看一段代码。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Generator<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>EditPlus®<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Author<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Keywords<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line">		<span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>有生之年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>狭路相逢<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们对div标签设置了边距等信息。打开google浏览器，按住F12，显示效果如下：</p>
<p><img src="http://img.smyhvae.com/20151003_27.png" alt=""></p>
<h2 id="认识width、height" tabindex="-1"><a class="header-anchor" href="#认识width、height"><span>认识width、height</span></a></h2>
<p>一定要知道，在前端开发工程师眼中，世界中的一切都是不同的。</p>
<p>比如说，丈量稿纸，前端开发工程师只会丈量内容宽度：</p>
<p><img src="http://img.smyhvae.com/20170727_2329.png" alt=""></p>
<p>下面这两个盒子，真实占有宽高，都是302*302：</p>
<p>盒子1：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.box1</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>盒子2：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.box2</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真实占有宽度 = 左border + 左padding + width + 右padding + 右border</p>
<p>上面这两个盒子的盒模型图如下：</p>
<p><img src="https://img.smyhvae.com/20170728_0925.png" alt=""></p>
<p><strong>如果想保持一个盒子的真实占有宽度不变，那么加width的时候就要减padding。加padding的时候就要减width</strong>。因为盒子变胖了是灾难性的，这会把别的盒子挤下去。</p>
<h2 id="认识padding" tabindex="-1"><a class="header-anchor" href="#认识padding"><span>认识padding</span></a></h2>
<h3 id="padding区域也有颜色" tabindex="-1"><a class="header-anchor" href="#padding区域也有颜色"><span>padding区域也有颜色</span></a></h3>
<p>padding就是内边距。padding的区域有背景颜色，css2.1前提下，并且背景颜色一定和内容区域的相同。也就是说，background-color将填充<strong>所有border以内的区域。</strong></p>
<p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20170728_1005.png" alt=""></p>
<h3 id="padding有四个方向" tabindex="-1"><a class="header-anchor" href="#padding有四个方向"><span>padding有四个方向</span></a></h3>
<p>padding是4个方向的，所以我们能够分别描述4个方向的padding。</p>
<p>方法有两种，第一种写小属性；第二种写综合属性，用空格隔开。</p>
<p>小属性的写法：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token property">padding-top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding-bottom</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综合属性的写法：(上、右、下、左)（顺时针方向，用空格隔开。margin的道理也是一样的）</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">padding</span><span class="token punctuation">:</span>30px 20px 40px 100px<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果写了四个值，则顺序为：上、右、下、左。</p>
<p>如果只写了三个值，则顺序为：上、右和左、下。</p>
<p>如果只写了两个值，则顺序为：上和下、左和右。</p>
<p>比如说：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">padding: 30px 40px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>则顺序等价于：30px 40px 30px 40px;</p>
<p>要懂得，<strong>用小属性层叠大属性</strong>。比如：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">padding: 20px;</span>
<span class="line">padding-left: 30px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的padding对应盒子模型为：</p>
<p><img src="http://img.smyhvae.com/20170728_1039.png" alt=""></p>
<p>下面的写法：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">padding-left: 30px;</span>
<span class="line">padding: 20px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行的小属性无效，因为被第二行的大属性层叠掉了。</p>
<p>下面的题，会做了，说明你明白了。</p>
<h3 id="一些题目" tabindex="-1"><a class="header-anchor" href="#一些题目"><span>一些题目</span></a></h3>
<p><strong>题目1</strong>：说出下面盒子真实占有宽高，并画出盒模型图。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px 30px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">padding-right</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p>
<p><img src="http://img.smyhvae.com/20170728_1048.png" alt=""></p>
<p><strong>题目2</strong>：说出下面盒子真实占有宽高，并画出盒模型图。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">padding-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">padding-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">padding</span><span class="token punctuation">:</span>40px 50px 60px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">padding-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p>
<p><code v-pre>padding-left:10px；</code> 和<code v-pre>padding-right:20px;</code> 没用，因为后面的padding大属性，层叠掉了他们。</p>
<p>盒子模型如下：</p>
<p><img src="http://img.smyhvae.com/20170728_1100.png" alt=""></p>
<p><strong>题目3</strong>：现在给你一个盒子模型图，请写出代码，试着用最最简单的方法写。</p>
<p><img src="http://img.smyhvae.com/20170728_1401.png" alt=""></p>
<p>答案：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token property">width</span><span class="token punctuation">:</span>123px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span>123px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span>20px 40px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>题目4</strong>：现在给你一个盒子模型图，请写出代码，试着用最最简单的方法写。</p>
<p><img src="http://img.smyhvae.com/20170728_1402.png" alt=""></p>
<p>答案：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token property">width</span><span class="token punctuation">:</span>123px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span>123px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding-right</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一些元素-默认带有padding" tabindex="-1"><a class="header-anchor" href="#一些元素-默认带有padding"><span>一些元素，默认带有padding</span></a></h3>
<p>一些元素，默认带有<code v-pre>padding</code>，比如ul标签。如下：</p>
<p><img src="http://img.smyhvae.com/20170728_1413.png" alt=""></p>
<p>上图显示，不加任何样式的ul，也是有40px的padding-left。</p>
<p>所以，我们做站的时候，为了便于控制，总是喜欢清除这个默认的padding。</p>
<p>可以使用<code v-pre>*</code>进行清除：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">		<span class="token selector">*</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，<code v-pre>*</code>的效率不高，所以我们使用并集选择器，罗列所有的标签（不用背，有专业的清除默认样式的样式表，今后学习）：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{</span>
<span class="line">    margin:0;</span>
<span class="line">    padding:0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="认识border" tabindex="-1"><a class="header-anchor" href="#认识border"><span>认识border</span></a></h2>
<p>border就是边框。边框有三个要素：像素（粗细）、线型、颜色。</p>
<p>比如：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token selector">.div1</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span> 2px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>颜色如果不写，默认是黑色。另外两个属性如果不写，则无法显示边框。</p>
<h3 id="border-style" tabindex="-1"><a class="header-anchor" href="#border-style"><span>border-style</span></a></h3>
<p>border的所有的线型如下：（我们可以通过查看<code v-pre>CSS参考手册</code>得到）</p>
<p><img src="http://img.smyhvae.com/20170728_1435.png" alt=""></p>
<p>比如<code v-pre>border:10px ridge red;</code>这个属性，在chrome和firefox、IE中有细微差别：（因为可以显示出效果，因此并不是兼容性问题，只是有细微差别而已）</p>
<p><img src="http://img.smyhvae.com/20170728_1619.png" alt=""></p>
<p>如果公司里面的设计师是处女座的，追求极高的<strong>页面还原度</strong>，那么不能使用css来制作边框。就要用到图片，就要切图了。</p>
<p>所以，比较稳定的border-style就几个：solid、dashed、dotted。</p>
<h3 id="border拆分" tabindex="-1"><a class="header-anchor" href="#border拆分"><span>border拆分</span></a></h3>
<p>border是一个大综合属性。比如说：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>就是把上下左右这四个方向的边框，都设置为 1px 宽度、线型实线、red颜色。</p>
<p>PS：小技巧：在sublime text中，为了快速输入<code v-pre>border:1px solid red;</code>这个属性，可以直接输入<code v-pre>bd</code>，然后选第二个后回车。</p>
<p>border属性是能够被拆开的，有两大种拆开的方式：</p>
<ul>
<li>
<p>（1）按三要素拆开：border-width、border-style、border-color。（一个border属性是由三个小属性综合而成的）</p>
</li>
<li>
<p>（2）按方向拆开：border-top、border-right、border-bottom、border-left。</p>
</li>
</ul>
<p>现在我们明白了：<strong>一个border属性，是由三个小属性综合而成的</strong>。如果某一个小属性后面是空格隔开的多个值，那么就是上右下左的顺序。举例如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">border-width:10px 20px;</span>
<span class="line">border-style:solid dashed dotted;</span>
<span class="line">border-color:red green blue yellow;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20170728_1516.png" alt=""></p>
<p>（1）按三要素拆：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border-width</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>    //边框宽度</span>
<span class="line"><span class="token property">border-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>   //线型</span>
<span class="line"><span class="token property">border-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>     //颜色。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">border:10px solid red;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>(2)按方向来拆：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border-top</span><span class="token punctuation">:</span>10px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token property">border-right</span><span class="token punctuation">:</span>10px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token property">border-bottom</span><span class="token punctuation">:</span>10px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token property">border-left</span><span class="token punctuation">:</span>10px solid red<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border</span><span class="token punctuation">:</span>10px solid red<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（3）按三要素和方向来拆：(就是把每个方向的，每个要素拆开。3*4 = 12)</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">	<span class="token property">border-top-width</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-top-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-top-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-right-width</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-right-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-right-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-bottom-width</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-bottom-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-bottom-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-left-width</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-left-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-left-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border</span><span class="token punctuation">:</span>10px solid red<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>工作中到底用什么？很简答：什么简单用什么。但要懂得，用小属性层叠大属性。举例如下：</p>
<p><img src="http://img.smyhvae.com/20170728_1606.png" alt=""></p>
<p>为了实现上方效果，写法如下：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border</span><span class="token punctuation">:</span>10px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token property">border-right-color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20170728_1608.png" alt=""></p>
<p>为了实现上方效果，写法如下：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border</span><span class="token punctuation">:</span>10px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token property">border-style</span><span class="token punctuation">:</span>solid dashed<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>border可以没有：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可以某一条边没有：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border-left</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以调整左边边框的宽度为0：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border-left-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="border-image-属性" tabindex="-1"><a class="header-anchor" href="#border-image-属性"><span>border-image 属性</span></a></h3>
<p>比如：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">border-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>.img.png<span class="token punctuation">)</span></span> 30 round<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个属性在实际开发中用得不多，暂时忽略。</p>
<h3 id="举例1-利用-border-属性画一个三角形-小技巧" tabindex="-1"><a class="header-anchor" href="#举例1-利用-border-属性画一个三角形-小技巧"><span>举例1：利用 border 属性画一个三角形（小技巧）</span></a></h3>
<p>完整代码如下：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-top-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤如下：</p>
<p>（1）当我们设置盒子的width和height为0时，此时效果如下：</p>
<p><img src="http://img.smyhvae.com/20170728_1639.png" alt=""></p>
<p>（2）然后将border的底部取消：</p>
<p><img src="http://img.smyhvae.com/20170728_1645.png" alt=""></p>
<p>（3）最后设置border的左边和右边为白色或者<strong>透明</strong>：</p>
<p><img src="http://img.smyhvae.com/20170728_1649.png" alt=""></p>
<p>这样，一个三角形就画好了。</p>
<h3 id="举例2-利用-border-属性画一个三角形-更推荐的技巧" tabindex="-1"><a class="header-anchor" href="#举例2-利用-border-属性画一个三角形-更推荐的技巧"><span>举例2：利用 border 属性画一个三角形（更推荐的技巧）</span></a></h3>
<p>上面的例子1中，画出来的是直角三角形，可如果我想画等边三角形，要怎么做呢？</p>
<p>完整代码如下：（用 css 画等边三角形）</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.div1</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-top</span><span class="token punctuation">:</span> 30px solid red<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">/* 通过改变 border-left 和 border-right 中的像素值，来改变三角形的形状 */</span></span>
<span class="line">	<span class="token property">border-left</span><span class="token punctuation">:</span> 20px solid transparent<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-right</span><span class="token punctuation">:</span> 20px solid transparent<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20191004_1830.png" alt=""></p>
<p>另外，我们在上方代码的基础之上，再加一个 <code v-pre>border-radus: 20px;</code> 就能画出一个扇形。</p>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="http://img.smyhvae.com/20190101.png" alt=""></p>
</div></template>


