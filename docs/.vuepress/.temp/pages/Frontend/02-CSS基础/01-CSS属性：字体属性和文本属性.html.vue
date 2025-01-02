<template><div><h2 id="本文重要内容" tabindex="-1"><a class="header-anchor" href="#本文重要内容"><span>本文重要内容</span></a></h2>
<ul>
<li>CSS的单位</li>
<li>字体属性</li>
<li>文本属性</li>
<li>定位属性：position、float、overflow等</li>
</ul>
<h2 id="css的单位" tabindex="-1"><a class="header-anchor" href="#css的单位"><span>CSS的单位</span></a></h2>
<p>html中的单位只有一种，那就是像素px，所以单位是可以省略的，但是在CSS中不一样。</p>
<font color="#0000FF">**CSS中的单位是必须要写的**，因为它没有默认单位。</font><h3 id="绝对单位" tabindex="-1"><a class="header-anchor" href="#绝对单位"><span>绝对单位</span></a></h3>
<p>1 <code v-pre>in</code>=2.54<code v-pre>cm</code>=25.4<code v-pre>mm</code>=72<code v-pre>pt</code>=6<code v-pre>pc</code>。</p>
<p>各种单位的含义：</p>
<ul>
<li><code v-pre>in</code>：英寸Inches (1 英寸 = 2.54 厘米)</li>
<li><code v-pre>cm</code>：厘米Centimeters</li>
<li><code v-pre>mm</code>：毫米Millimeters</li>
<li><code v-pre>pt</code>：点Points，或者叫英镑 (1点 = 1/72英寸)</li>
<li><code v-pre>pc</code>：皮卡Picas (1 皮卡 = 12 点)</li>
</ul>
<h3 id="相对单位" tabindex="-1"><a class="header-anchor" href="#相对单位"><span>相对单位</span></a></h3>
<p><code v-pre>px</code>：像素
<code v-pre>em</code>：印刷单位相当于12个点
<code v-pre>%</code>：百分比，相对周围的文字的大小</p>
<p>为什么说像素px是一个相对单位呢，这也很好理解。比如说，电脑屏幕的的尺寸是不变的，但是我们可以让其显示不同的分辨率，在不同的分辨率下，单个像素的长度肯定是不一样的啦。</p>
<p>百分比<code v-pre>%</code>这个相对单位要怎么用呢？这里也举个例子：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-17.png" alt=""></p>
<h2 id="font-字体属性" tabindex="-1"><a class="header-anchor" href="#font-字体属性"><span>font 字体属性</span></a></h2>
<p>CSS中，有很多<strong>非布局样式</strong>（与布局无关），包括：字体、行高、颜色、大小、背景、边框、滚动、换行、装饰性属性（粗体、斜体、下划线）等。</p>
<p>这一段，我们先来讲一下字体属性。</p>
<p>css样式中，常见的字体属性有以下几种：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> 		<span class="token comment">/*字体大小*/</span></span>
<span class="line">	<span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>      <span class="token comment">/*行高*/</span></span>
<span class="line">	<span class="token property">font-family</span><span class="token punctuation">:</span> 幼圆<span class="token punctuation">,</span>黑体<span class="token punctuation">;</span> 	<span class="token comment">/*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/</span></span>
<span class="line">	<span class="token property">font-style</span><span class="token punctuation">:</span> italic <span class="token punctuation">;</span>		<span class="token comment">/*italic表示斜体，normal表示不倾斜*/</span></span>
<span class="line">	<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>	<span class="token comment">/*粗体*/</span></span>
<span class="line">	<span class="token property">font-variant</span><span class="token punctuation">:</span> small-caps<span class="token punctuation">;</span>  <span class="token comment">/*小写变大写*/</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行高" tabindex="-1"><a class="header-anchor" href="#行高"><span>行高</span></a></h3>
<p>CSS中，所有的行，都有行高。盒子模型的padding，绝对不是直接作用在文字上的，而是作用在“行”上的。</p>
<p>如下图所示：</p>
<p><img src="http://img.smyhvae.com/20170808_2216.png" alt=""></p>
<p>上图中，我们设置行高为30px，30px * 5 = 150px，通过查看审查元素，这个p标签的高度果然为150px。而且我们发现，我们并没有给这个p标签设置高度，显然是内容将其撑高的。</p>
<p>垂直方向来看，文字在自己的行里是居中的。比如，文字是14px，行高是24px，那么padding就是5px：</p>
<p><img src="http://img.smyhvae.com/20170808_2220.png" alt=""></p>
<p>为了严格保证字在行里面居中，我们的工程师有一个约定： <strong>行高、字号，一般都是偶数</strong>。这样可以保证，它们的差一定偶数，就能够被2整除。</p>
<h3 id="如何让单行文本垂直居中" tabindex="-1"><a class="header-anchor" href="#如何让单行文本垂直居中"><span>如何让单行文本垂直居中</span></a></h3>
<p>小技巧：如果一段文本只有一行，如果此时设置<strong>行高 = 盒子高</strong>，就可以保证单行文本垂直居中。这个很好理解。</p>
<p>上面这个小技巧，只适用于单行文本垂直居中，不适用于多行。如果想让多行文本垂直居中，还需要计算盒子的padding。计算方式如下：</p>
<p><img src="http://img.smyhvae.com/20170808_2240.png" alt=""></p>
<h3 id="vertical-align-middle-属性" tabindex="-1"><a class="header-anchor" href="#vertical-align-middle-属性"><span><code v-pre>vertical-align: middle;</code> 属性</span></a></h3>
<p><code v-pre>vertical-align</code>属性可用于指定<strong>行内元素</strong>（inline）、<strong>行内块元素</strong>（inline-block）、<strong>表格的单元格</strong>（table-cell）的垂直对齐方式。主要是用于图片、表格、文本的对齐。</p>
<p>代码举例：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span> <span class="token comment">/*指定行级元素的垂直对齐方式。*/</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>关于这一点，连 MDN 上都没我讲得详细。MDN上的原话是 “vertical-align 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。” MDN上的这种描述是不完整的，漏掉了行内块元素（inline-block）。</p>
<h3 id="字号、行高、字体三大属性" tabindex="-1"><a class="header-anchor" href="#字号、行高、字体三大属性"><span>字号、行高、字体三大属性</span></a></h3>
<p>（1）字号：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font-size:14px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（2）行高：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	line-height:24px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（3）字体：（font-family就是“字体”，family是“家庭”的意思）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font-family:"宋体";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>是否加粗属性以及上面这三个属性，我们可以连写：（是否加粗、字号 font-size、行高 line-height、字体 font-family）</p>
<p>格式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font: 加粗 字号/行高/ 字体</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font: 400 14px/24px "宋体";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>PS：400是nomal，700是bold。</p>
<p>上面这几个属性可以连写，但是有一个要求，font属性连写至少要有<strong>字号和字体</strong>，否则连写是不生效的（相当于没有这一行代码）。</p>
<p><strong>2、字体属性的说明：</strong></p>
<p>（1）网页中不是所有字体都能用，因为这个字体要看用户的电脑里面装没装，比如你设置：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font-family: "华文彩云";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上方代码中，如果用户的 Windows 电脑里面没有这个字体，那么就会变成宋体。</p>
<p>页面中，中文我们一般使用：微软雅黑、宋体、黑体。英文使用：Arial、Times New Roman。页面中如果需要其他的字体，就需要单独安装字体，或者切图。</p>
<p>（2）为了防止用户电脑里，没有微软雅黑这个字体。就要用英语的逗号，提供备选字体。如下：（可以备选多个）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font-family: "微软雅黑","宋体";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上方代码表示：如果用户电脑里没有安装微软雅黑字体，那么就是宋体。</p>
<p>（3）我们须将英语字体放在最前面，这样所有的中文，就不能匹配英语字体，就自动的变为后面的中文字体：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font-family: "Times New Roman","微软雅黑","宋体";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上方代码的意思是，英文会采用Times New Roman字体，而中文会采用微软雅黑字体（因为美国人设计的Times New Roman字体并不针对中文，所以中文会采用后面的微软雅黑）。比如说，对于<code v-pre>smyhvae哈哈哈</code>这段文字，<code v-pre>smyhvae</code>会采用Times New Roman字体，而<code v-pre>哈哈哈</code>会采用微软雅黑字体。</p>
<p>可是，如果我们把中文字体写在前面：(错误写法)</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font-family: "微软雅黑","Times New Roman","宋体";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上方代码会导致，中文和英文都会采用微软雅黑字体。</p>
<p>（4）所有的中文字体，都有英语别名。</p>
<p>微软雅黑的英语别名：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font-family: "Microsoft YaHei";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>宋体的英语别名：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font-family: "SimSun";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>于是，当我们把字号、行高、字体这三个属性合二为一时，也可以写成：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	font:12px/30px  "Times New Roman","Microsoft YaHei","SimSun";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（5）行高可以用百分比，表示字号的百分之多少。</p>
<p>一般来说，百分比都是大于100%的，因为行高一定要大于字号。</p>
<p>比如说， <code v-pre>font:12px/200% “宋体”</code>等价于<code v-pre>font:12px/24px “宋体”</code>。<code v-pre>200%</code>可以理解成word里面的2倍行高。</p>
<p>反过来， <code v-pre>font:16px/48px “宋体”;</code>等价于<code v-pre>font:16px/300% “宋体”</code>。</p>
<h3 id="字体加粗属性" tabindex="-1"><a class="header-anchor" href="#字体加粗属性"><span>字体加粗属性</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.div</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span> <span class="token comment">/*正常*/</span></span>
<span class="line">	<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>  <span class="token comment">/*加粗*/</span></span>
<span class="line">	<span class="token property">font-weight</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">font-weight</span><span class="token punctuation">:</span> 200<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">font-weight</span><span class="token punctuation">:</span> 900<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在设置字体是否加粗时，属性值既可以填写<code v-pre>normal</code>、<code v-pre>bold</code>这样的加粗字体，也可以直接填写 100至900 这样的数字。<code v-pre>normal</code>的值相当于400，<code v-pre>bold</code>的值相当于700。</p>
<h2 id="文本属性" tabindex="-1"><a class="header-anchor" href="#文本属性"><span>文本属性</span></a></h2>
<p>CSS样式中，常见的文本属性有以下几种：</p>
<ul>
<li><code v-pre>letter-spacing: 0.5cm ;</code>  单个字母之间的间距</li>
<li><code v-pre>word-spacing: 1cm;</code>   单词之间的间距</li>
<li><code v-pre>text-decoration: none;</code> 字体修饰：none 去掉下划线、<strong>underline 下划线</strong>、line-through 中划线、overline 上划线</li>
<li><code v-pre>color:red;</code> 字体颜色</li>
<li><code v-pre>text-align: center;</code> 在当前容器中的对齐方式。属性值可以是：left、right、center（<font color="#0000FF"><strong>在当前容器的中间</strong></font>）、justify</li>
<li><code v-pre>text-transform: lowercase;</code> 单词的字体大小写。属性值可以是：<code v-pre>uppercase</code>（单词大写）、<code v-pre>lowercase</code>（单词小写）、<code v-pre>capitalize</code>（每个单词的首字母大写）</li>
</ul>
<p>这里来一张表格的图片吧，一览无遗：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-18.png" alt=""></p>
<h2 id="列表属性" tabindex="-1"><a class="header-anchor" href="#列表属性"><span>列表属性</span></a></h2>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">ul li</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">list-style-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>images/2.gif<span class="token punctuation">)</span></span> <span class="token punctuation">;</span>  <span class="token comment">/*列表项前设置为图片*/</span></span>
<span class="line">	<span class="token property">margin-left</span><span class="token punctuation">:</span>80px<span class="token punctuation">;</span>  <span class="token comment">/*公有属性*/</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外还有一个简写属性叫做<code v-pre>list-style</code>，它的作用是：将上面的多个属性写在一个声明中。</p>
<p>我们来看一下<code v-pre>list-style-image</code>属性的效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-23.png" alt=""></p>
<p>给列表前面的图片加个边距吧，不然显示不完整：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-24_2.png" alt=""></p>
<p>这里来一张表格的图片吧，一览无遗：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-26.png" alt=""></p>
<h2 id="overflow属性-超出范围的内容要怎么处理" tabindex="-1"><a class="header-anchor" href="#overflow属性-超出范围的内容要怎么处理"><span>overflow属性：超出范围的内容要怎么处理</span></a></h2>
<p><code v-pre>overflow</code>属性的属性值可以是：</p>
<ul>
<li><code v-pre>visible</code>：默认值。多余的内容不剪切也不添加滚动条，会全部显示出来。</li>
<li><code v-pre>hidden</code>：不显示超过对象尺寸的内容。</li>
<li><code v-pre>auto</code>：如果内容不超出，则不显示滚动条；如果内容超出，则显示滚动条。</li>
<li><code v-pre>scroll</code>：Windows 平台下，无论内容是否超出，总是显示滚动条。Mac 平台下，和 <code v-pre>auto</code> 属性相同。</li>
</ul>
<p>针对上面的不同的属性值，我们来看一下效果：
举例：</p>
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
<span class="line">			<span class="token property">background-color</span><span class="token punctuation">:</span> #00cc66<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">margin-right</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token selector">#div1</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span><span class="token comment">/*超出的部分让浏览器自行解决*/</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">#div2</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span><span class="token comment">/*超出的部分会显示出来*/</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token selector">#div3</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span><span class="token comment">/*超出的部分将剪切掉*/</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-31.png" alt=""></p>
<h2 id="鼠标的属性-cursor" tabindex="-1"><a class="header-anchor" href="#鼠标的属性-cursor"><span>鼠标的属性 cursor</span></a></h2>
<p>鼠标的属性<code v-pre>cursor</code>有以下几个属性值：</p>
<ul>
<li><code v-pre>auto</code>：默认值。浏览器根据当前情况自动确定鼠标光标类型。</li>
<li><code v-pre>pointer</code>：IE6.0，竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。</li>
<li><code v-pre>hand</code>：和<code v-pre>pointer</code>的作用一样：竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。</li>
</ul>
<p>比如说，我想让鼠标放在那个标签上时，光标显示手状，代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">p:hover{</span>
<span class="line">	cursor: pointer;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外还有以下的属性：（不用记，需要的时候查一下就行了）</p>
<ul>
<li>all-scroll      :　 IE6.0  有上下左右四个箭头，中间有一个圆点的光标。用于标示页面可以向上下左右任何方向滚动。</li>
<li>col-resize      :　 IE6.0  有左右两个箭头，中间由竖线分隔开的光标。用于标示项目或标题栏可以被水平改变尺寸。</li>
<li>crosshair       :　  简单的十字线光标。</li>
<li>default         :　  客户端平台的默认光标。通常是一个箭头。</li>
<li>hand            :　  竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。</li>
<li>move            :　  十字箭头光标。用于标示对象可被移动。</li>
<li>help            :　  带有问号标记的箭头。用于标示有帮助信息存在。</li>
<li>no-drop         :　 IE6.0  带有一个被斜线贯穿的圆圈的手形光标。用于标示被拖起的对象不允许在光标的当前位置被放下。</li>
<li>not-allowed     :　 IE6.0  禁止标记(一个被斜线贯穿的圆圈)光标。用于标示请求的操作不允许被执行。</li>
<li>progress        :　 IE6.0  带有沙漏标记的箭头光标。用于标示一个进程正在后台运行。</li>
<li>row-resize      :　 IE6.0  有上下两个箭头，中间由横线分隔开的光标。用于标示项目或标题栏可以被垂直改变尺寸。</li>
<li>text            :　  用于标示可编辑的水平文本的光标。通常是大写字母 I 的形状。</li>
<li>vertical-text   :　 IE6.0  用于标示可编辑的垂直文本的光标。通常是大写字母 I 旋转90度的形状。</li>
<li>wait            :　  用于标示程序忙用户需要等待的光标。通常是沙漏或手表的形状。</li>
<li>*-resize        :　  用于标示对象可被改变尺寸方向的箭头光标。</li>
<li>
<pre><code>                 w-resize | s-resize | n-resize | e-resize | ne-resize | sw-resize | se-resize | nw-resize
</code></pre>
</li>
<li>url ( url )     :　 IE6.0  用户自定义光标。使用绝对或相对 url 地址指定光标文件(后缀为 .cur 或者 .ani )。</li>
</ul>
<h2 id="滤镜" tabindex="-1"><a class="header-anchor" href="#滤镜"><span>滤镜</span></a></h2>
<p>这里只举一个滤镜的例子吧。比如说让图片变成灰度图的效果，可以这样设置滤镜：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3.jpg<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">filter</span><span class="token punctuation">:</span><span class="token function">gray</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例代码：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>原始图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>图片加入黑白效果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3.jpg<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">filter</span><span class="token punctuation">:</span><span class="token function">gray</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span> /*滤镜：设置图片为灰白效果*/</span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：（IE有效果，google浏览器无效果）</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-36.png" alt=""></p>
<p><strong>延伸：</strong>
滤镜本身是平面设计中的知识。如果你懂一点PS的话···打开PS看看吧：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-38.png" alt=""></p>
<p>爆料一下，表示博主有两年多的平面设计经验，我做设计的时间其实比写代码的时间要长，嘿嘿···</p>
<h2 id="导航栏的制作-本段内容请忽略" tabindex="-1"><a class="header-anchor" href="#导航栏的制作-本段内容请忽略"><span>导航栏的制作（本段内容请忽略）</span></a></h2>
<p>现在，我们利用float浮动属性来把无序列表做成一个简单的导航栏吧，效果如下：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-34.png" alt=""></p>
<p>代码：</p>
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
<span class="line">		<span class="token selector">ul</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span><span class="token comment">/*去掉列表前面的圆点*/</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 420px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span><span class="token comment">/*设置整个导航栏的背景为灰色*/</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token selector">li</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span><span class="token comment">/*平铺*/</span></span>
<span class="line">			<span class="token property">margin-right</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">margin-top</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token selector">a</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span><span class="token comment">/*去掉超链的下划线*/</span></span>
<span class="line">			<span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">color</span><span class="token punctuation">:</span> #BBBBBB<span class="token punctuation">;</span><span class="token comment">/*设置超链的字体为黑色*/</span></span>
<span class="line">			<span class="token property">font-family</span><span class="token punctuation">:</span>微软雅黑<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>博客园<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>新随笔<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>联系<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>订阅<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>管理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现效果如下：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-35.png" alt=""></p>
<p>国庆这四天，连续写了四天的博客，白天和黑夜，从未停歇，只交替没交换，为的就是这每日一发。以后会不断更新的。</p>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="http://img.smyhvae.com/20190101.png" alt=""></p>
</div></template>


