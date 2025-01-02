<template><div><h2 id="object-freeze-冻结对象" tabindex="-1"><a class="header-anchor" href="#object-freeze-冻结对象"><span>Object.freeze() 冻结对象</span></a></h2>
<p>Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">'8899'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 冻结对象 params</span></span>
<span class="line"></span>
<span class="line">params<span class="token punctuation">.</span>port <span class="token operator">=</span> <span class="token string">'8080'</span><span class="token punctuation">;</span><span class="token comment">// 修改无效</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，把 params 对象冻结后，如果想再改变 params 里面的属性值，是无效的。</p>
</div></template>


