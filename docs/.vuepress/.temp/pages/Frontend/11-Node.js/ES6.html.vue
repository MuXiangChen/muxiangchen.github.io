<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>ECMAScript 是 JS 的语言标准。而 ES6 是新的 JS 语法标准。</p>
<h3 id="发展历史" tabindex="-1"><a class="header-anchor" href="#发展历史"><span>发展历史</span></a></h3>
<p>20180303_1633.png</p>
<ul>
<li>2015年6月，ES6正式发布。</li>
</ul>
<h3 id="es6-的其他优势" tabindex="-1"><a class="header-anchor" href="#es6-的其他优势"><span>ES6 的其他优势</span></a></h3>
<ul>
<li>
<p>使用 babel 语法转换器，支持低端浏览器</p>
</li>
<li>
<p>流行的库基本都是基于 ES6 构建。 React 默认使用 ES6 新源发开发。</p>
</li>
</ul>
<h2 id="es6-的常用语法" tabindex="-1"><a class="header-anchor" href="#es6-的常用语法"><span>ES6 的常用语法</span></a></h2>
<h3 id="es6语法概览" tabindex="-1"><a class="header-anchor" href="#es6语法概览"><span>ES6语法概览</span></a></h3>
<ul>
<li>
<p>块级作用域、字符串</p>
</li>
<li>
<p>对象扩展、解构</p>
</li>
<li>
<p>类、模块化等。</p>
</li>
</ul>
<h3 id="作用域-let-和-const" tabindex="-1"><a class="header-anchor" href="#作用域-let-和-const"><span>作用域：let 和 const</span></a></h3>
<ul>
<li>
<p>用 <code v-pre>let</code>定义变量 ，替代 var</p>
</li>
<li>
<p>用const 定义常量（定义后，不可修改）</p>
</li>
<li>
<p>作用域和 {}</p>
</li>
</ul>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> a1 <span class="token operator">=</span> <span class="token string">'haha'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">smyhvae</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串"><span>模板字符串</span></a></h3>
<p>我们以前让字符串进行拼接的时候，是这样做的：（传统写法的字符串拼接）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'smyhvae'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token string">'26'</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'name:'</span><span class="token operator">+</span>name<span class="token operator">+</span><span class="token string">',age:'</span><span class="token operator">+</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//传统写法</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法，比较繁琐，而且容易出错。</p>
<p>现在有了 ES6 语法，字符串拼接可以这样写：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'smyhvae'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token string">'26'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'name:'</span><span class="token operator">+</span>name<span class="token operator">+</span><span class="token string">',age:'</span><span class="token operator">+</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//传统写法</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">name:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,age:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//ES6 写法</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，上方代码中，倒数第二行用的是单引号，最后一行用的是反引号（在tab键的上方）。</p>
<h3 id="函数扩展" tabindex="-1"><a class="header-anchor" href="#函数扩展"><span>函数扩展</span></a></h3>
<p>ES6 中函数的用法：</p>
<ul>
<li>
<p>参数默认值</p>
</li>
<li>
<p>箭头函数</p>
</li>
<li>
<p>展开运算符</p>
</li>
</ul>
<p>定义和调用函数：（传统写法）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token string">'smyhvae'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义和调用函数：（ES6写法）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">var</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token string">'smyhvae'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两端代码，执行的结果是一样的。</p>
<p>当然，也可以给上面这个函数的参数加一个默认值：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">var</span> fn2 <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">'enen'</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//参数用默认值 enen</span></span>
<span class="line">    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token string">'smyhvae'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如说，1秒后执行一段代码，可以用箭头函数：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'something'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果函数体只有一条 return 语句，那么大括号可以省略：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">myDouble</span> <span class="token operator">=</span> <span class="token parameter">x</span><span class="token operator">=></span>x<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myDouble</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//打印结果为10</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数的好处：</p>
<ul>
<li>
<p>简写代码</p>
</li>
<li>
<p>保持 this 的作用域</p>
</li>
</ul>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>
</div></template>


