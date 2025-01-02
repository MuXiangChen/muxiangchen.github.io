<template><div><h2 id="var、let、const-的区别" tabindex="-1"><a class="header-anchor" href="#var、let、const-的区别"><span>var、let、const 的区别</span></a></h2>
<h3 id="_1、var-声明的变量会挂载在-window-对象上-而-let-和-const-声明的变量不会" tabindex="-1"><a class="header-anchor" href="#_1、var-声明的变量会挂载在-window-对象上-而-let-和-const-声明的变量不会"><span>1、var 声明的变量会挂载在 window 对象上，而 let 和 const 声明的变量不会</span></a></h3>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'我是a'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：我是a</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：我是a</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">'我是b'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：我是b</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token string">'我是c'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：我是c</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>var 的这一特性，会造成 window 全局变量的污染。举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> innerHeight <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：永远都是100  ==> 会覆盖 window 自带的 innerHeight 属性</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、var-声明的变量存在变量提升-let-和-const-声明的变量不存在变量提升" tabindex="-1"><a class="header-anchor" href="#_2、var-声明的变量存在变量提升-let-和-const-声明的变量不存在变量提升"><span>2、var 声明的变量存在变量提升，let 和 const 声明的变量不存在变量提升</span></a></h3>
<p>举例：(先使用，再声明)</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：undefined ==> a已经声明但没有赋值</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'我是a'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错：Uncaught ReferenceError: Cannot access 'b' before initialization ==> 找不到b这个变量</span></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">'我是b'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错：Uncaught ReferenceError: Cannot access 'c' before initialization ==> 找不到c这个变量</span></span>
<span class="line"><span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token string">'我是c'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、var-声明不存在块级作用域-let-和-const-声明存在块级作用域" tabindex="-1"><a class="header-anchor" href="#_3、var-声明不存在块级作用域-let-和-const-声明存在块级作用域"><span>3、var 声明不存在块级作用域，let 和 const 声明存在块级作用域</span></a></h3>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'我是a'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">'我是b'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token string">'我是c'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 我是a</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错：Uncaught ReferenceError: b is not defined ==> 找不到b这个变量</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错：Uncaught ReferenceError: c is not defined ==> 找不到c这个变量</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错是因为找不到 b 和 c 这两个变量。</p>
<h3 id="_4、同一作用域下-var-可以重复声明变量-let-和-const-不能重复声明变量" tabindex="-1"><a class="header-anchor" href="#_4、同一作用域下-var-可以重复声明变量-let-和-const-不能重复声明变量"><span>4、同一作用域下，var 可以重复声明变量，let 和 const 不能重复声明变量</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'我是a'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：qianguyihao</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">'我是b'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//报错：Uncaught SyntaxError: Identifier 'b' has already been declared  ==> 变量 b 已经被声明了</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token string">'我是c'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//报错：Uncaught SyntaxError: Identifier 'c' has already been declared  ==> 变量 c 已经被声明了</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：通过第3、第4点可以看出：使用 let/const 声明的变量，不会造成全局污染。</p>
<h3 id="_5、let-和-const-的暂时性死区-dtc" tabindex="-1"><a class="header-anchor" href="#_5、let-和-const-的暂时性死区-dtc"><span>5、let 和 const 的暂时性死区（DTC）</span></a></h3>
<p><strong>举例 1</strong>：（表现正常）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行函数后，打印结果：smyhvae</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方例子中， 变量 name 被声明在函数外部，此时函数内部可以直接使用。</p>
<p><strong>举例 2</strong>：（报错）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行函数后，控制台报错：Uncaught ReferenceError: Cannot access 'name' before initialization</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：如果在当前块级作用域中使用了变量 name，并且当前块级作用域中通过 let/const 声明了这个变量，那么，<strong>声明语句必须放在使用之前，也就是所谓的 DTC（暂时性死区）</strong>。DTC 其实是一种保护机制，可以让我们养成良好的编程习惯。</p>
<p>关于”暂时性死区“的更多介绍，详本项目的另一篇文章《JavaScript之ES6语法：变量let、const和块级作用域.md》。</p>
<h3 id="_6、const-一旦声明必须赋值-声明后不能再修改" tabindex="-1"><a class="header-anchor" href="#_6、const-一旦声明必须赋值-声明后不能再修改"><span>6、const：一旦声明必须赋值；声明后不能再修改</span></a></h3>
<p>一旦声明必须赋值：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> a<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错：Uncaught SyntaxError: Missing initializer in const declaration</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<p>基于上面的种种区别，我们可以知道：var 声明的变量，很容易造成全局污染。以后我们尽量使用 let 和 const 声明变量吧。</p>
<h2 id="const-常量到底能不能被修改" tabindex="-1"><a class="header-anchor" href="#const-常量到底能不能被修改"><span>const 常量到底能不能被修改</span></a></h2>
<p>我们知道：用 const 声明的变量无法被修改。但还有一点，我们一定要记住：</p>
<ul>
<li>
<p>如果用 const 声明基本数据类型，则无法被修改；</p>
</li>
<li>
<p>如果用 const 声明引用数据类型（即“对象”），这里的“无法被修改”指的是<strong>不能改变内存地址的引用</strong>；但对象里的内容是可以被修改的。</p>
</li>
</ul>
<p>举例 1：（不能修改）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line">name <span class="token operator">=</span> <span class="token string">'vae'</span><span class="token punctuation">;</span> <span class="token comment">// 因为无法被修改，所以报错：Uncaught TypeError: Assignment to constant variable</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 2：（不能修改）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vae'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 因为无法被修改，所以报错：Uncaught TypeError: Assignment to constant variable</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 3：（可以修改）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'vae'</span><span class="token punctuation">;</span> <span class="token comment">// 对象里的 name 属性可以被修改</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 变量名 obj 是保存在<strong>栈内存</strong>中的，它代表的是对象的引用地址，它是基本数据类型，无法被修改。但是 obj 里面的内容是保存在<strong>堆内存</strong>中的，它是引用数据类型，可以被修改。</p>
<h2 id="传值和传址的区别" tabindex="-1"><a class="header-anchor" href="#传值和传址的区别"><span>传值和传址的区别</span></a></h2>
<p>详见《JavaScript基础/对象简介.md》。</p>
<h2 id="for-循环的经典案例" tabindex="-1"><a class="header-anchor" href="#for-循环的经典案例"><span>for 循环的经典案例</span></a></h2>
<p>详见《JavaScript之ES6语法：变量let、const和块级作用域.md》。</p>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>
<ul>
<li><a href="https://juejin.im/post/5e49249be51d4526e651b654" target="_blank" rel="noopener noreferrer">JS 中 var、let、const 区别</a></li>
</ul>
</div></template>


