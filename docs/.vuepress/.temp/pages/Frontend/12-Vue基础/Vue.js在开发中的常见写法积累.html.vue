<template><div><h3 id="_001、对象的赋值" tabindex="-1"><a class="header-anchor" href="#_001、对象的赋值"><span>001、对象的赋值</span></a></h3>
<p>（1）在 store 中定义一个对象：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">pin</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">avatarUrl</span><span class="token operator">:</span> <span class="token constant">DEFAULT_AVATAR</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">definePin</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">isbind</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）从接口拿到数据后，给这个对象赋值：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">pin</span><span class="token operator">:</span> res<span class="token punctuation">.</span>base<span class="token punctuation">.</span>curPin<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">nickName</span><span class="token operator">:</span> res<span class="token punctuation">.</span>base<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">avatarUrl</span><span class="token operator">:</span> res<span class="token punctuation">.</span>base<span class="token punctuation">.</span>headImageUrl <span class="token operator">?</span> res<span class="token punctuation">.</span>base<span class="token punctuation">.</span>headImageUrl <span class="token operator">:</span> <span class="token constant">DEFAULT_AVATAR</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">definePin</span><span class="token operator">:</span> res<span class="token punctuation">.</span>definePin</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


