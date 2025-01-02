<template><div><h1 id="常见代码解读" tabindex="-1"><a class="header-anchor" href="#常见代码解读"><span>常见代码解读</span></a></h1>
<h3 id="callback-callback-的含义" tabindex="-1"><a class="header-anchor" href="#callback-callback-的含义"><span><code v-pre>callback &amp;&amp; callback()</code>的含义</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>含义是：如果callback存在，则执行callback()函数。</p>
<p>这个 callback 通常作为函数的参数使用。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// do something</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不传 callback 参数，则不会执行 callback() 函数</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 只执行do something中的代码</span></span>
<span class="line"><span class="token function">foo</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//callback是另一个函数，将此函数传入 foo，将会执行callback()</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


