<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>数组在实战开发中，使用得相当频繁。前端同学通过接口拿到json数据后，往往需要把数据进行各种形式的变换和展示。这个时候，数组的常见操作，就发挥了很大的作用。</p>
<p>如果你对数组的基础知识不太熟悉，建议回去看看<code v-pre>03-JavaScript</code>的基础知识。</p>
<p>掌握了基础知识之后，我们再来看看，实战开发中，数组都有哪些常见操作。</p>
<h2 id="数组的常见操作" tabindex="-1"><a class="header-anchor" href="#数组的常见操作"><span>数组的常见操作</span></a></h2>
<h3 id="从对象数组中-将属性的值提取为数组" tabindex="-1"><a class="header-anchor" href="#从对象数组中-将属性的值提取为数组"><span>从对象数组中，将属性的值提取为数组</span></a></h3>
<p>一般人可能会想着通过 for 循环进行遍历，但这种做法不够简洁。</p>
<p>最佳答案：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">      <span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">skuId</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"商品1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">skuId</span><span class="token operator">:</span> <span class="token string">"456"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"商品2"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">skuId</span><span class="token operator">:</span> <span class="token string">"789"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"商品3"</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">const</span> skuIdArr <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>skuId<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将数组 arr1 中的 skuId字段提取为一个新的数组</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>skuIdArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">	<span class="token punctuation">[</span><span class="token string">"123"</span><span class="token punctuation">,</span><span class="token string">"456"</span><span class="token punctuation">,</span><span class="token string">"789"</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参考链接：<a href="https://codeday.me/bug/20170426/12102.html" target="_blank" rel="noopener noreferrer">https://codeday.me/bug/20170426/12102.html</a></li>
</ul>
</div></template>


