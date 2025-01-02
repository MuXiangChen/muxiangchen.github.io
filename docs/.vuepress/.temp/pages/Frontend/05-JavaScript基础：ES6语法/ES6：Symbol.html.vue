<template><div><h2 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol"><span>Symbol</span></a></h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h3>
<p>背景：ES5中对象的属性名都是字符串，容易造成重名，污染环境。</p>
<p><strong>概念</strong>：ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。</p>
<p><strong>特点：</strong></p>
<ul>
<li>
<p>Symbol属性对应的值是唯一的，解决<strong>命名冲突问题</strong></p>
</li>
<li>
<p>Symbol值不能与其他数据进行计算，包括同字符串拼串</p>
</li>
<li>
<p>for in、for of 遍历时不会遍历Symbol属性。</p>
</li>
</ul>
<h3 id="创建symbol属性值" tabindex="-1"><a class="header-anchor" href="#创建symbol属性值"><span>创建Symbol属性值</span></a></h3>
<p>Symbol是函数，但并不是构造函数。创建一个Symbol数据类型：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> mySymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> mySymbol<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//打印结果：symbol</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mySymbol<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//打印结果：Symbol()</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20180317_1134.png" alt=""></p>
<p>下面来讲一下Symbol的使用。</p>
<h3 id="_1、将symbol作为对象的属性值" tabindex="-1"><a class="header-anchor" href="#_1、将symbol作为对象的属性值"><span>1、将Symbol作为对象的属性值</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> mySymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'smyhvae'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">26</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//obj.mySymbol = 'male'; //错误：不能用 . 这个符号给对象添加 Symbol 属性。</span></span>
<span class="line">    obj<span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>    <span class="token comment">//正确：通过**属性选择器**给对象添加 Symbol 属性。后面的属性值随便写。</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们尝试给obj添加一个Symbol类型的属性值，但是添加的时候，不能采用<code v-pre>.</code>这个符号，而是应该用<code v-pre>属性选择器</code>的方式。打印结果：</p>
<p><img src="http://img.smyhvae.com/20180317_1134.png" alt=""></p>
<p>现在我们用for in尝试对上面的obj进行遍历：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> mySymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'smyhvae'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">26</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    obj<span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//遍历obj</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20180317_1134.png" alt=""></p>
<p>从打印结果中可以看到：for in、for of 遍历时不会遍历Symbol属性。</p>
<h3 id="创建symbol属性值时-传参作为标识" tabindex="-1"><a class="header-anchor" href="#创建symbol属性值时-传参作为标识"><span>创建Symbol属性值时，传参作为标识</span></a></h3>
<p>如果我通过 Symbol()函数创建了两个值，这两个值是不一样的：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> mySymbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> mySymbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mySymbol1 <span class="token operator">==</span> mySymbol2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印结果：false</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mySymbol1<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//打印结果：Symbol()</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mySymbol2<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//打印结果：Symbol()</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20180317_1134.png" alt=""></p>
<p>上面代码中，倒数第三行的打印结果也就表明了，二者的值确实是不相等的。</p>
<p>最后两行的打印结果却发现，二者的打印输出，肉眼看到的却相同。那该怎么区分它们呢？</p>
<p>既然Symbol()是函数，函数就可以传入参数，我们可以通过参数的不同来作为<strong>标识</strong>。比如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token comment">//在括号里加入参数，来标识不同的Symbol</span></span>
<span class="line">    <span class="token keyword">let</span> mySymbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'one'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> mySymbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'two'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mySymbol1 <span class="token operator">==</span> mySymbol2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印结果：false</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mySymbol1<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//打印结果：Symbol(one)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mySymbol2<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//打印结果：Symbol(two)。颜色为红色。</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mySymbol2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//打印结果：Symbol(two)。颜色为黑色。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20180317_1134.png" alt=""></p>
<h3 id="定义常量" tabindex="-1"><a class="header-anchor" href="#定义常量"><span>定义常量</span></a></h3>
<p>Symbol 可以用来定义常量：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> <span class="token constant">MY_NAME</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'my_name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="内置的-symbol-值" tabindex="-1"><a class="header-anchor" href="#内置的-symbol-值"><span>内置的 Symbol 值</span></a></h3>
<p>除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。</p>
<ul>
<li><code v-pre>Symbol.iterator</code>属性</li>
</ul>
<p>对象的<code v-pre>Symbol.iterator</code>属性，指向该对象的默认遍历器方法。</p>
</div></template>


