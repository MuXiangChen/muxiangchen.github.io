<template><div><h2 id="对象赋值" tabindex="-1"><a class="header-anchor" href="#对象赋值"><span>对象赋值</span></a></h2>
<h3 id="用-object-assgin-实现浅拷贝" tabindex="-1"><a class="header-anchor" href="#用-object-assgin-实现浅拷贝"><span>用 Object.assgin() 实现浅拷贝</span></a></h3>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'hello world'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'许嵩'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 【关键代码】浅拷贝：把 obj1 赋值给 obj2。这行代码的返回值也是 obj2</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{</span>
<span class="line">    "name":"qianguyihao",</span>
<span class="line">    "sex":"男",</span>
<span class="line">    "age":28,</span>
<span class="line">    "desc":"hello world"</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<strong>上面这行代码在实际开发中，会经常遇到，一定要掌握</strong>。它的作用是：将 obj1 的值追加到 obj2 中。如果两个对象里的属性名相同，则 obj2 中的值会被 obj1 中的值覆盖。</p>
<h2 id="数组赋值" tabindex="-1"><a class="header-anchor" href="#数组赋值"><span>数组赋值</span></a></h2>
<h3 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符"><span>扩展运算符</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">arr2 <span class="token operator">=</span> arr1<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上方代码中，其实是让 arr2 指向 arr1 的地址。也就是说，二者指向的是同一个内存地址。</p>
<p>如果不想让 arr1 和 arr2 指向同一个内存地址，我们可以借助扩展运算符来做：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//arr2 会开辟新的内存地址</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参考链接：</p>
<ul>
<li><a href="https://github.com/wengjq/Blog/issues/3" target="_blank" rel="noopener noreferrer">javaScript中浅拷贝和深拷贝的实现</a></li>
</ul>
</div></template>


