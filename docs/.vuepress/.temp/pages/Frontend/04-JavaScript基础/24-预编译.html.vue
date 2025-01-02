<template><div><blockquote>
<p>我们在上一篇文章《作用域》中简单讲过“变量提升”，今天来讲一下预编译，这对我们深入理解变量提升会有帮助。</p>
</blockquote>
<h2 id="javascript-运行三部曲" tabindex="-1"><a class="header-anchor" href="#javascript-运行三部曲"><span>JavaScript 运行三部曲</span></a></h2>
<ul>
<li>
<p>语法分析</p>
</li>
<li>
<p>预编译</p>
</li>
<li>
<p>解释执行</p>
</li>
</ul>
<h2 id="预编译前奏" tabindex="-1"><a class="header-anchor" href="#预编译前奏"><span>预编译前奏</span></a></h2>
<blockquote>
<p>在讲预编译前，我们先来普及下面两个规律。</p>
</blockquote>
<h3 id="两个规律" tabindex="-1"><a class="header-anchor" href="#两个规律"><span>两个规律</span></a></h3>
<p><strong>规律1：任何变量，如果未经声明就赋值，此变量是属于 window 的属性</strong>，而且不会做变量提升。（注意，无论在哪个作用域内赋值）</p>
<p>比如说，如果我们直接在代码里写 <code v-pre>console.log(a)</code>，这肯定会报错的，提示找不到 <code v-pre>a</code>。但如果我直接写 <code v-pre>a = 100</code>，这就不会报错，此时，这个 <code v-pre>a</code> 就是 <code v-pre>window.a</code>。</p>
<p><strong>规律2：一切声明的全局变量，全是window的属性</strong>。（注意，这里说的是在全局作用域内声明的全局变量，不是说局部变量）</p>
<p>比如，当定义 <code v-pre>var a = 200</code> 时，这个 <code v-pre>a</code> 就是 <code v-pre>window.a</code>。</p>
<p>由此，我们可以看出：<strong>window 代表了全局作用域</strong>（是说「代表」，没说「等于」）。</p>
<h3 id="举例" tabindex="-1"><a class="header-anchor" href="#举例"><span>举例</span></a></h3>
<p>掌握了上面两句话之后，我们再来看看下面的例子。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> b <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// 连续赋值</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在全局范围内访问 b</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在全局范围内访问 b，但是前面没有加 window 这个关键字</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在全局范围内访问 a</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在全局范围内访问 a，但是前面没有加 window 这个关键字</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">100</span>
<span class="line"></span>
<span class="line">100</span>
<span class="line"></span>
<span class="line">undefined</span>
<span class="line"></span>
<span class="line">（会报错，提示 Uncaught ReferenceError: a is not defined）</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释</strong>：</p>
<p>当执行了<code v-pre>foo()</code>函数之后， <code v-pre>var a = b = 100</code> 这行<strong>连续赋值</strong>的代码等价于 <code v-pre>var a = (b = 100)</code>，其执行顺序是：</p>
<p>（1）先把 100 赋值给 b；</p>
<p>（2）再声明变量 a；</p>
<p>（3）再把 b 的值赋值给 a。</p>
<p>我们可以看到，b 是未经声明的变量就被赋值了，此时，根据规律1，这个 b 是属于 <code v-pre>window.b</code>；而 a 的作用域仅限于 foo() 函数内部，不属于 window。所以也就有了这样的打印结果。</p>
<h2 id="预编译" tabindex="-1"><a class="header-anchor" href="#预编译"><span>预编译</span></a></h2>
<h3 id="函数预编译的步骤" tabindex="-1"><a class="header-anchor" href="#函数预编译的步骤"><span>函数预编译的步骤</span></a></h3>
<blockquote>
<p>函数预编译，发生在函数执行的前一刻。</p>
</blockquote>
<p>（1）创建AO对象。AO即 Activation Object 活跃对象，其实就是「执行期上下文」。</p>
<p>（2）找形参和变量声明，将形参名和变量作为 AO 的属性名，值为undefined。</p>
<p>（3）将实参值和形参统一，实参的值赋给形参。</p>
<p>（4）查找函数声明，函数名作为 AO 对象的属性名，值为整个函数体。</p>
<p>这个地方比较难理解。但只有了解了函数的预编译，才能理解明白函数的执行顺序。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> <span class="token function-variable function">b</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">ƒ a() {}</span>
<span class="line">666</span>
<span class="line">666</span>
<span class="line">ƒ () {}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>
<ul>
<li>
<p>JavaScript预编译原理分析：<a href="https://blog.csdn.net/q1056843325/article/details/52951114" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/q1056843325/article/details/52951114</a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000018001871" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000018001871</a></p>
</li>
<li>
<p>预编译及变量提升：<a href="https://juejin.im/post/5aa6693df265da23884cb571" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5aa6693df265da23884cb571</a></p>
</li>
<li>
<p><a href="https://juejin.im/post/5adaf8215188256712781830" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5adaf8215188256712781830</a></p>
</li>
<li>
<p><a href="https://www.qqzmly.com/archives/1521" target="_blank" rel="noopener noreferrer">https://www.qqzmly.com/archives/1521</a></p>
</li>
<li>
<p>宏任务&amp;微任务相关：<a href="https://segmentfault.com/a/1190000018134157" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000018134157</a></p>
</li>
</ul>
<h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


