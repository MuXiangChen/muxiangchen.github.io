<template><div><p>CSS的定位属性有三种，分别是绝对定位、相对定位、固定定位。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	position: absolute;  &lt;!-- 绝对定位 --></span>
<span class="line"></span>
<span class="line">	position: relative;  &lt;!-- 相对定位 --></span>
<span class="line"></span>
<span class="line">	position: fixed;     &lt;!-- 固定定位 --></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面逐一介绍。</p>
<h2 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位"><span>相对定位</span></a></h2>
<p><strong>相对定位</strong>：让元素相对于自己原来的位置，进行位置调整（可用于盒子的位置微调）。</p>
<p>我们之前学习的背景属性中，是通过如下格式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	background-position:向右偏移量 向下偏移量;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>但这回的定位属性，是通过如下格式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	position: relative;</span>
<span class="line">	left: 50px;</span>
<span class="line">	top: 50px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相对定位的举例：</p>
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
<span class="line">		<span class="token selector">body</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token selector">.div1</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token selector">.div2</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span><span class="token comment">/*相对定位：相对于自己原来的位置*/</span></span>
<span class="line">			<span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span><span class="token comment">/*横坐标：正值表示向右偏移，负值表示向左偏移*/</span></span>
<span class="line">			<span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span><span class="token comment">/*纵坐标：正值表示向下偏移，负值表示向上偏移*/</span></span>
<span class="line"></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>有生之年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>狭路相逢<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-28.png" alt=""></p>
<h3 id="相对定位不脱标" tabindex="-1"><a class="header-anchor" href="#相对定位不脱标"><span>相对定位不脱标</span></a></h3>
<p><strong>相对定位</strong>：不脱标，老家留坑，<strong>别人不会把它的位置挤走</strong>。</p>
<p>也就是说，相对定位的真实位置还在老家，只不过影子出去了，可以到处飘。</p>
<h3 id="相对定位的用途" tabindex="-1"><a class="header-anchor" href="#相对定位的用途"><span>相对定位的用途</span></a></h3>
<p>如果想做“压盖”效果（把一个div放到另一个div之上），我们一般<strong>不用</strong>相对定位来做。相对定位，就两个作用：</p>
<ul>
<li>（1）微调元素</li>
<li>（2）做绝对定位的参考，子绝父相</li>
</ul>
<h3 id="相对定位的定位值" tabindex="-1"><a class="header-anchor" href="#相对定位的定位值"><span>相对定位的定位值</span></a></h3>
<ul>
<li>
<p>left：盒子右移</p>
</li>
<li>
<p>right：盒子左移</p>
</li>
<li>
<p>top：盒子下移</p>
</li>
<li>
<p>bottom：盒子上移</p>
</li>
</ul>
<p>PS：负数表示相反的方向。</p>
<p>↘：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	position: relative;</span>
<span class="line">	left: 40px;</span>
<span class="line">	top: 10px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>↙：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	position: relative;</span>
<span class="line">	right: 100px;</span>
<span class="line">	top: 100px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>↖：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	position: relative;</span>
<span class="line">	right: 100px;</span>
<span class="line">	bottom: 100px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>↗：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	position: relative;</span>
<span class="line">	left: 200px;</span>
<span class="line">	bottom: 200px;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20180115_1716.png" alt=""></p>
<p>如果要描述上面这张图的方向，我们可以首先可以这样描述：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	position: relative;</span>
<span class="line">	left: 200px;</span>
<span class="line">	top: 100px;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为<code v-pre>left: 200px</code>等价于<code v-pre>right: -200px</code>，所以这张图其实有四种写法。</p>
<h2 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位"><span>绝对定位</span></a></h2>
<p><strong>绝对定位</strong>：定义横纵坐标。原点在父容器的左上角或左下角。横坐标用left表示，纵坐标用top或者bottom表示。</p>
<p>格式举例如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	position: absolute;  /*绝对定位*/</span>
<span class="line">	left: 10px;  /*横坐标*/</span>
<span class="line">	top/bottom: 20px;  /*纵坐标*/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绝对定位脱标" tabindex="-1"><a class="header-anchor" href="#绝对定位脱标"><span>绝对定位脱标</span></a></h3>
<p><strong>绝对定位的盒子脱离了标准文档流。</strong></p>
<p>所以，所有的标准文档流的性质，绝对定位之后都不遵守了。</p>
<p>绝对定位之后，标签就不区分所谓的行内元素、块级元素了，不需要<code v-pre>display:block</code>就可以设置宽、高了。</p>
<h3 id="绝对定位的参考点-重要" tabindex="-1"><a class="header-anchor" href="#绝对定位的参考点-重要"><span>绝对定位的参考点（重要）</span></a></h3>
<p>（1）如果用<strong>top描述</strong>，那么参考点就是<strong>页面的左上角</strong>，而不是浏览器的左上角：</p>
<p><img src="http://img.smyhvae.com/20180115_2120.png" alt=""></p>
<p>（2）如果用<strong>bottom描述</strong>，那么参考点就是<strong>浏览器首屏窗口尺寸</strong>（好好理解“首屏”二字），对应的页面的左下角：</p>
<p><img src="http://img.smyhvae.com/20180115_2121.png" alt=""></p>
<p>为了理解“<strong>首屏</strong>”二字的含义，我们来看一下动态图：</p>
<p><img src="https://img.smyhvae.com/20180115_2200.gif" alt=""></p>
<p>问题：</p>
<p><img src="http://img.smyhvae.com/20180115_2131.png" alt=""></p>
<p>答案：</p>
<p>用bottom的定位的时候，参考的是浏览器首屏大小对应的页面左下角。</p>
<p><img src="http://img.smyhvae.com/20180115_2132.png" alt=""></p>
<h3 id="以盒子为参考点" tabindex="-1"><a class="header-anchor" href="#以盒子为参考点"><span>以盒子为参考点</span></a></h3>
<p>一个绝对定位的元素，如果父辈元素中也出现了已定位（无论是绝对定位、相对定位，还是固定定位）的元素，那么将以父辈这个元素，为参考点。</p>
<p>如下：（子绝父相）</p>
<p><img src="http://img.smyhvae.com/20180115_2210.png" alt=""></p>
<p>以下几点需要注意。</p>
<p>（1） 要听最近的已经定位的祖先元素的，不一定是父亲，可能是爷爷：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">		&lt;div class="box1">        相对定位</span>
<span class="line">			&lt;div class="box2">    没有定位</span>
<span class="line">				&lt;p>&lt;/p>           绝对定位，将以box1为参考，因为box2没有定位，box1就是最近的父辈元素</span>
<span class="line">			&lt;/div></span>
<span class="line">		&lt;/div></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再比如：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">		&lt;div class="box1">        相对定位</span>
<span class="line">			&lt;div class="box2">    相对定位</span>
<span class="line">				&lt;p>&lt;/p>           绝对定位，将以box2为参考，因为box2是自己最近的父辈元素</span>
<span class="line">			&lt;/div></span>
<span class="line">		&lt;/div></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）不一定是相对定位，任何定位，都可以作为儿子的参考点：</p>
<p>子绝父绝、<strong>子绝父相</strong>、子绝父固，都是可以给儿子定位的。但是在工程上，如果子绝、父绝，没有一个盒子在标准流里面了，所以页面就不稳固，没有任何实战用途。</p>
<p><strong>工程应用：</strong></p>
<p>“<strong>子绝父相</strong>”有意义：这样可以保证父亲没有脱标，儿子脱标在父亲的范围里面移动。于是，工程上经常这样做：</p>
<blockquote>
<p>父亲浮动，设置相对定位（零偏移），然后让儿子绝对定位一定的距离。</p>
</blockquote>
<p>（3）绝对定位的儿子，无视参考的那个盒子的padding：</p>
<p>下图中，绿色部分是父亲div的padding，蓝色部分p是div的内容区域。此时，如果div相对定位，p绝对定位，那么，
p将无视父亲的padding，在border内侧为参考点，进行定位：</p>
<p><img src="http://img.smyhvae.com/20180116_0812.png" alt=""></p>
<p><strong>工程应用：</strong></p>
<p>绝对定位非常适合用来做“压盖”效果。我们来举个lagou.com上的例子。</p>
<p>现在有如下两张图片素材：</p>
<p><img src="http://img.smyhvae.com/20180116_1115.png" alt=""></p>
<p><img src="http://img.smyhvae.com/20180116_1116.jpg" alt=""></p>
<p>要求作出如下效果：</p>
<p><img src="http://img.smyhvae.com/20180116_1117.png" alt=""></p>
<p>代码实现如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">		<span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">margin</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 308px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 307px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #FF7E00<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>  <span class="token comment">/*子绝父相*/</span></span>
<span class="line"></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.box .image img</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 308px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 196px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.box .dtc</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>  <span class="token comment">/*转为块级元素，才能设置span的宽高*/</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 52px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>http://img.smyhvae.com/20180116_1115.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">background-position</span><span class="token punctuation">:</span> -108px 0px<span class="token punctuation">;</span> <span class="token comment">/*这里用到了精灵图*/</span></span>
<span class="line">			<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>  <span class="token comment">/*采用绝对定位的方式，将精灵图盖在最上层*/</span></span>
<span class="line">			<span class="token property">top</span><span class="token punctuation">:</span> -9px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">left</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.box h4</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span>308px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">top</span><span class="token punctuation">:</span> 156px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dtc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://img.smyhvae.com/20180116_1116.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>广东深圳宝安区建安一路海雅缤纷城4楼<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释如下：</p>
<ul>
<li>
<p>为了显示“多套餐”那个小图，我们需要用到精灵图。</p>
</li>
<li>
<p>“多套餐”下方黑色背景的文字都是通过“子绝父相”的方式的盖在大海报image的上方的。</p>
</li>
</ul>
<p>代码的效果如下：</p>
<p><img src="http://img.smyhvae.com/20180116_1335.png" alt=""></p>
<h3 id="让绝对定位中的盒子在父亲里居中" tabindex="-1"><a class="header-anchor" href="#让绝对定位中的盒子在父亲里居中"><span>让绝对定位中的盒子在父亲里居中</span></a></h3>
<p>我们知道，如果想让一个<strong>标准流中的盒子在父亲里居中</strong>（水平方向看），可以将其设置<code v-pre>margin: 0 auto</code>属性。</p>
<p>可如果盒子是绝对定位的，此时已经脱标了，如果还想让其居中（位于父亲的正中间），可以这样做：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	div {</span>
<span class="line">		width: 600px;</span>
<span class="line">		height: 60px;</span>
<span class="line">		position: absolute;  绝对定位的盒子</span>
<span class="line">		left: 50%;           首先，让左边线居中</span>
<span class="line">		top: 0;</span>
<span class="line">		margin-left: -300px;  然后，向左移动宽度（600px）的一半</span>
<span class="line">	}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上方代码所示，我们先让这个宽度为600px的盒子，左边线居中，然后向左移动宽度（600px）的一半，就达到效果了。</p>
<p><img src="http://img.smyhvae.com/20180116_1356.png" alt=""></p>
<p>我们可以总结成一个公式：</p>
<blockquote>
<p>left:50%; margin-left:负的宽度的一半</p>
</blockquote>
<h2 id="固定定位" tabindex="-1"><a class="header-anchor" href="#固定定位"><span>固定定位</span></a></h2>
<p><strong>固定定位</strong>：就是相对浏览器窗口进行定位。无论页面如何滚动，这个盒子显示的位置不变。</p>
<p>备注：IE6不兼容。</p>
<p><strong>用途1</strong>：网页右下角的“返回到顶部”</p>
<p>比如我们经常看到的网页右下角显示的“返回到顶部”，就可以固定定位。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">		<span class="token selector">.backtop</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">right</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">background-color</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">line-height</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>   <span class="token comment">/*去掉超链接的下划线*/</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**用途2：**顶部导航条</p>
<p>我们经常能看到固定在网页顶端的导航条，可以用固定定位来做。</p>
<p>需要注意的是，假设顶部导航条的高度是60px，那么，为了防止其他的内容被导航条覆盖，我们要给body标签设置60px的padding-top。</p>
<p>顶部导航条的实现如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD XHTML 1.0 Transitional//EN"</span> <span class="token string">"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/1999/xhtml<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xml:</span>lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content-Type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/html;charset=UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">		<span class="token selector">*</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">body</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">/*为什么要写这个？*/</span></span>
<span class="line">			<span class="token comment">/*不希望我们的页面被nav挡住*/</span></span>
<span class="line">			<span class="token property">padding-top</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token comment">/*IE6不兼容固定定位，所以这个padding没有什么用，就去掉就行了*/</span></span>
<span class="line">			<span class="token property">_padding-top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.nav</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">	 		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">z-index</span><span class="token punctuation">:</span> 99999999<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.inner_c</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.inner_c ul</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.inner_c ul li</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">line-height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.inner_c ul li a</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.inner_c ul li a:hover</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">background-color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.btn</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">top</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span></span>
<span class="line">			<span class="token property">left</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inner_c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网页栏目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、z-index属性" tabindex="-1"><a class="header-anchor" href="#_5、z-index属性"><span>5、z-index属性：</span></a></h3>
<p><strong>z-index</strong>属性：表示谁压着谁。数值大的压盖住数值小的。</p>
<p>有如下特性：</p>
<p>（1）属性值大的位于上层，属性值小的位于下层。</p>
<p>（2）z-index值没有单位，就是一个正整数。默认的z-index值是0。</p>
<p>（3）如果大家都没有z-index值，或者z-index值一样，那么在HTML代码里写在后面，谁就在上面能压住别人。定位了的元素，永远能够压住没有定位的元素。</p>
<p>（4）只有定位了的元素，才能有z-index值。也就是说，不管相对定位、绝对定位、固定定位，都可以使用z-index值。<strong>而浮动的元素不能用</strong>。</p>
<p>（5）从父现象：父亲怂了，儿子再牛逼也没用。意思是，如果父亲1比父亲2大，那么，即使儿子1比儿子2小，儿子1也能在最上层。</p>
<p>针对（1）（2）（3）条，举例如下：</p>
<p>这是默认情况下的例子：（div2在上层，div1在下层）</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-32.png" alt=""></p>
<p>现在加一个<code v-pre>z-index</code>属性，要求效果如下：</p>
<p><img src="http://img.smyhvae.com/2015-10-03-css-33.png" alt=""></p>
<p>第五条分析：</p>
<p><img src="http://img.smyhvae.com/20180116_1445.png" alt=""></p>
<p>z-index属性的应用还是很广泛的。当好几个已定位的标签出现覆盖的现象时，我们可以用这个z-index属性决定，谁处于最上方。也就是<strong>层级</strong>的应用。</p>
<p><strong>层级：</strong></p>
<p>（1）必须有定位（除去static）</p>
<p>（2）用<code v-pre>z-index</code>来控制层级数。</p>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="http://img.smyhvae.com/20190101.png" alt=""></p>
</div></template>


