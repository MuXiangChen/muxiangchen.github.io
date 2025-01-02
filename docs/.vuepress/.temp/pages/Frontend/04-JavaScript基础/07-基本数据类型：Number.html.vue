<template><div><h2 id="数值型-number" tabindex="-1"><a class="header-anchor" href="#数值型-number"><span>数值型：Number</span></a></h2>
<p>在 JS 中所有的数值都是 Number 类型，包括整数和浮点数（小数）。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// 定义一个变量 a，并且赋值整数100</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出变量 a 的类型</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">12.3</span><span class="token punctuation">;</span> <span class="token comment">// 定义一个变量 b，并且赋值浮点数 12.3</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的输出结果为：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">number</span>
<span class="line">number</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>再次补充：在 JS 中，只要是数，就是 Number 数值型的。无论整浮、浮点数（即小数）、无论大小、无论正负，都是 Number 类型的。包括接下来要讲的Infinity、-Infinity、NaN 等特殊数值也是 Number 类型的。</p>
<h3 id="数值范围" tabindex="-1"><a class="header-anchor" href="#数值范围"><span>数值范围</span></a></h3>
<p>ECMAScript 并不能表示世界上所有的数值。</p>
<ul>
<li>
<p>最大正数值：<code v-pre>Number.MAX_VALUE</code>，这个值为： 1.7976931348623157e+308</p>
</li>
<li>
<p>最小正数值：<code v-pre>Number.MIN_VALUE</code>，这个值为： 5e-324 ，或者 2的负1074 次方。它是能够在浮点精度范围内表示的最小正数（<strong>不是最小负数</strong>）。小于这个数的正数会被转成0。</p>
</li>
</ul>
<p>如果使用 Number 表示的变量超过了最大值，则会返回 Infinity。</p>
<ul>
<li>
<p><code v-pre>Infinity</code>：无穷大（正无穷）。比如 1/0 的值就是无穷大。</p>
</li>
<li>
<p><code v-pre>-Infinity</code>：无穷小（负无穷）</p>
</li>
</ul>
<p>注意：<code v-pre>typeof Infinity</code>的返回结果是 number。</p>
<h3 id="nan" tabindex="-1"><a class="header-anchor" href="#nan"><span>NaN</span></a></h3>
<p><strong>NaN</strong>：是一个特殊的数字，表示 Not a Number，非数值。在进行数值运算时，如果得不到正常结果，就会返回 NaN。</p>
<p>比如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'abc'</span> <span class="token operator">/</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果是NaN</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'abc'</span> <span class="token operator">*</span> <span class="token string">'abcd'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//按理说，字符串相乘是没有结果的，但如果你非要让JS去算，它就一定会给你一个结果，结果是NaN。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p>
<ol>
<li>
<p><code v-pre>typeof NaN</code>的返回结果是 number。</p>
</li>
<li>
<p><strong>Undefined 和任何数值计算的结果为 NaN。NaN 与任何值都不相等，包括 NaN 本身。</strong></p>
</li>
<li>
<p>关于 isNaN() 函数，可以看后续要将的内容——数据类型转换。</p>
</li>
</ol>
<h3 id="连字符和加号的区别" tabindex="-1"><a class="header-anchor" href="#连字符和加号的区别"><span>连字符和加号的区别</span></a></h3>
<p>键盘上的<code v-pre>+</code>可能是连字符，也可能是数字的加号。如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我"</span> <span class="token operator">+</span> <span class="token string">"爱"</span> <span class="token operator">+</span> <span class="token string">"你"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 连字符，把三个独立的汉字，连接在一起了</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我+爱+你"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// 原样输出</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>				<span class="token comment">// 输出6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">我爱你</span>
<span class="line">我+爱+你</span>
<span class="line">6</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong>：如果加号两边<strong>都是</strong> Number 类型，此时是数字相加。否则，就是连字符（用来连接字符串）。</p>
<p>举例 1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'1'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">12</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例 2：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">var a = 1;</span>
<span class="line">var b = 2;</span>
<span class="line">console.log("a" + b);	//"a"就不是变量了！所以就是"a"+2 输出a2</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">a2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>于是我们明白了，在变量中加入字符串进行拼接，可以被同化为字符串。【重要】</p>
<h3 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换"><span>隐式转换</span></a></h3>
<p>我们知道，<code v-pre>&quot;2&quot;+1</code>得到的结果其实是字符串，但是<code v-pre>&quot;2&quot;-1</code>得到的结果却是数值 1，这是因为计算机自动帮我们进行了“<strong>隐式转换</strong>”。</p>
<p>也就是说，<code v-pre>-</code>、<code v-pre>*</code>、<code v-pre>/</code>、<code v-pre>%</code>这几个符号会自动进行隐式转换。例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'4'</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">-</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token number">37</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>虽然程序可以对<code v-pre>-</code>、<code v-pre>*</code>、<code v-pre>/</code>、`%``这几个符号自动进行“隐式转换”；但作为程序员，我们最好自己完成转换，方便程序的可读性。</p>
<p>关于隐式转换的详细知识，可以看后续的内容——和数据类型转换。</p>
<h3 id="其他进制的数字" tabindex="-1"><a class="header-anchor" href="#其他进制的数字"><span>其他进制的数字</span></a></h3>
<p>数字不仅有10进制，也有其他进制。</p>
<ul>
<li>
<p>16 进制的数字，以<code v-pre>0x</code>开头</p>
</li>
<li>
<p>8 进制的数字，以<code v-pre>0</code>开头</p>
</li>
<li>
<p>2 进制的数字，<code v-pre>0b</code>开头（不是所有的浏览器都支持：chrome 和火狐支持，IE 不支持）</p>
</li>
</ul>
<h2 id="浮点数的运算" tabindex="-1"><a class="header-anchor" href="#浮点数的运算"><span>浮点数的运算</span></a></h2>
<h3 id="运算精度问题" tabindex="-1"><a class="header-anchor" href="#运算精度问题"><span>运算精度问题</span></a></h3>
<p>在 JS 中，整数的运算<strong>基本</strong>可以保证精确；但是<strong>小数的运算，可能会得到一个不精确的结果</strong>。所以，千万不要使用 JS 进行对精确度要求比较高的运算。</p>
<p>如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印结果十分意外：0.30000000000000004</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，打印结果并不是 0.3，而是 0.30000000000000004。</p>
<p>这是因为，计算机在做运算时，所有的运算都要转换成二进制去计算。然而，有些数字转换成二进制之后，无法精确表示。比如说，0.1 和 0.2 转换成二进制之后，是无穷的，因此存在浮点数的计算不精确的问题。</p>
<h3 id="处理数学运算的精度问题" tabindex="-1"><a class="header-anchor" href="#处理数学运算的精度问题"><span>处理数学运算的精度问题</span></a></h3>
<p>如果只是一些简单的精度问题，可以使用 <code v-pre>toFix()</code> 方法进行小数的截取。备注：关于 <code v-pre>toFixed()</code>方法， 详见《JavaScript 基础/内置对象：Number 和 Math》。</p>
<p>在实战开发中，关于浮点数计算的精度问题，往往比较复杂。市面上有很多针对数学运算的开源库，比如<a href="https://github.com/MikeMcl/decimal.js/" target="_blank" rel="noopener noreferrer">decimal.js</a>、 <a href="https://github.com/josdejong/mathjs" target="_blank" rel="noopener noreferrer">Math.js</a>。这些开源库都比较成熟，我们可以直接拿来用。</p>
<ul>
<li>
<p>Math.js：属于很全面的运算库，文件很大，压缩后的文件就有 500kb。如果你的项目涉及到大型的复杂运算，可以使用 Math.js。</p>
</li>
<li>
<p>decimal.js：属于轻量的运算库，压缩后的文件只有 32kb。大多数项目的数学运算，使用 decimal.js 足够了。</p>
</li>
</ul>
<p>在使用这几个开源库时，既可以用 cdn 的方式引入，也可以用 npm 包的方式引入。</p>
<p>比如说，通过 cdn 的方式引入 decimal.js 时，可以这样用：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.bootcdn.net/ajax/libs/decimal.js/10.2.0/decimal.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'加法：'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Decimal</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Decimal</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'减法：'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">0.7</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Decimal</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Decimal</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'乘法：'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1.01</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1.003</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Decimal</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mul</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Decimal</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'除法：'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0.029</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">/</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Decimal</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Decimal</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">加法：</span>
<span class="line">0.30000000000000004</span>
<span class="line">0.3</span>
<span class="line"></span>
<span class="line">减法：</span>
<span class="line">0.30000000000000004</span>
<span class="line">0.3</span>
<span class="line"></span>
<span class="line">乘法：</span>
<span class="line">1.0130299999999999</span>
<span class="line">1.01303</span>
<span class="line"></span>
<span class="line">除法：</span>
<span class="line">0.0029000000000000002</span>
<span class="line">0.0029</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>
<ul>
<li>
<p><a href="https://www.bloghome.com.cn/post/nodejsxue-xi-bi-ji-shi-qi-fu-dian-yun-suan-decimal-js.html" target="_blank" rel="noopener noreferrer">https://www.bloghome.com.cn/post/nodejsxue-xi-bi-ji-shi-qi-fu-dian-yun-suan-decimal-js.html</a></p>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/62381711" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/62381711</a></p>
</li>
</ul>
<h2 id="变量值的传递-赋值" tabindex="-1"><a class="header-anchor" href="#变量值的传递-赋值"><span>变量值的传递（赋值）</span></a></h2>
<p>语句：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">a = b;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>把 b 的值赋给 a，b 不变。</p>
<p>将等号右边的值，赋给左边的变量；等号右边的变量，值不变。</p>
<p>来做几个题目，看看数字是如何参与运算的。</p>
<p>举例 1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">           <span class="token comment">// a		  b       c</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 1</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 1     2</span></span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 1     2       3</span></span>
<span class="line">a <span class="token operator">=</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span> <span class="token comment">// 5     2       3</span></span>
<span class="line">b <span class="token operator">=</span> c <span class="token operator">-</span> a<span class="token punctuation">;</span> <span class="token comment">// 5     -2      3</span></span>
<span class="line">c <span class="token operator">=</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span> <span class="token comment">// 5     -2      -10</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">5</span>
<span class="line">-2</span>
<span class="line">-10</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 2：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">           <span class="token comment">// a    b     c</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 1     2     3</span></span>
<span class="line">a <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">// 3     2     3</span></span>
<span class="line">b <span class="token operator">=</span> b <span class="token operator">+</span> a<span class="token punctuation">;</span> <span class="token comment">// 3     5     3</span></span>
<span class="line">c <span class="token operator">=</span> c <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">// 3     5     8</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">3</span>
<span class="line">5</span>
<span class="line">8</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 3：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">            <span class="token comment">//a       b</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'1'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// "1"     2</span></span>
<span class="line">a <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">// "12"    2</span></span>
<span class="line">b <span class="token operator">=</span> b <span class="token operator">+</span> a<span class="token punctuation">;</span> <span class="token comment">// "12"    "212"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出12</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出212</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">12</span>
<span class="line">212</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 4：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">           <span class="token comment">//a         b</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'1'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">a <span class="token operator">=</span> b <span class="token operator">+</span> a<span class="token punctuation">;</span> <span class="token comment">//"21"       2</span></span>
<span class="line">b <span class="token operator">=</span> b <span class="token operator">+</span> a<span class="token punctuation">;</span> <span class="token comment">//"21"       "221"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//21</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//221</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">21</span>
<span class="line">221</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 5：（这个例子比较特殊，字符串减去数字）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'3'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：（注意，字符串 - 数值 = 数值）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


