<template><div><p>我们在前面讲过变量，本文讲一下<strong>运算符</strong>和表达式。</p>
<h2 id="运算符的定义和分类" tabindex="-1"><a class="header-anchor" href="#运算符的定义和分类"><span>运算符的定义和分类</span></a></h2>
<h3 id="运算符的定义" tabindex="-1"><a class="header-anchor" href="#运算符的定义"><span>运算符的定义</span></a></h3>
<p><strong>运算符</strong>：也叫操作符，是一种符号。通过运算符可以对一个或多个值进行运算，并获取运算结果。</p>
<p><strong>表达式</strong>：数字、运算符、变量的组合（组成的式子）。</p>
<p>表达式最终都会有一个运算结果，我们将这个结果称为表达式的<strong>返回值</strong>。</p>
<p>比如：<code v-pre>+</code>、<code v-pre>*</code>、<code v-pre>/</code>、<code v-pre>()</code> 都是<strong>运算符</strong>，而<code v-pre>（3+5）/2</code>则是<strong>表达式</strong>。</p>
<p>比如：typeof 就是运算符，可以获得一个值的类型。它会将该值的类型以<strong>字符串</strong>的形式返回，返回值可以是 number、string、boolean、undefined、object。</p>
<h3 id="运算符的分类" tabindex="-1"><a class="header-anchor" href="#运算符的分类"><span>运算符的分类</span></a></h3>
<p>JS 中的运算符，分类如下：</p>
<ul>
<li>算数运算符</li>
<li>自增/自减运算符</li>
<li>一元运算符</li>
<li>三元运算符（条件运算符）</li>
<li>逻辑运算符</li>
<li>赋值运算符</li>
<li>比较运算符</li>
</ul>
<p>下面来逐一讲解。</p>
<h2 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符"><span>算数运算符</span></a></h2>
<p><strong>算术运算符</strong>：用于执行两个变量或值的算术运算。</p>
<p>此外，算数运算符存在隐式类型转换的情况，前文“数据类型转换”一节中已讲过，本文不再赘述。</p>
<p>常见的算数运算符有以下几种：</p>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">+</td>
<td style="text-align:center">加、字符串连接</td>
</tr>
<tr>
<td style="text-align:left">-</td>
<td style="text-align:center">减</td>
</tr>
<tr>
<td style="text-align:left">*</td>
<td style="text-align:center">乘</td>
</tr>
<tr>
<td style="text-align:left">/</td>
<td style="text-align:center">除</td>
</tr>
<tr>
<td style="text-align:left">%</td>
<td style="text-align:center">获取余数（取余、取模）</td>
</tr>
</tbody>
</table>
<p><strong>求余的举例</strong>：</p>
<p>假设用户输入 345，怎么分别得到 3、4、5 这三个数呢？</p>
<p><strong>答案</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">得到3的方法：345 除以100，得到3.45然后取整，得到3。即：parseInt(345/100)</span>
<span class="line"></span>
<span class="line">得到4的方法：345 除以100，余数是45，除以10，得到4.5，取整。即：parseInt(345 % 100 / 10)</span>
<span class="line"></span>
<span class="line">得到5的方法：345 除以10，余数就是5。即：345 % 10</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="算数运算符的运算规则" tabindex="-1"><a class="header-anchor" href="#算数运算符的运算规则"><span>算数运算符的运算规则</span></a></h3>
<p>（1）<code v-pre>* / %</code> 的优先级高于 <code v-pre>+ -</code></p>
<p>（2）无论是<code v-pre>+ - * / %</code>都是左结合性（从左至右计算）</p>
<p>（2）小括号<code v-pre>( )</code>：能够影响计算顺序，且可以嵌套。没有中括号、没有大括号，只有小括号。</p>
<p>举例 1：（取余）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出结果为 3。</p>
<p>举例 2：（注意运算符的优先级）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>结果分析：</p>
<p>原式 = 1 + 6 % 4 / 3 = 1 + 2 / 3 = 1.66666666666666</p>
<h3 id="取模-取余-运算" tabindex="-1"><a class="header-anchor" href="#取模-取余-运算"><span>取模（取余）运算</span></a></h3>
<p>格式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">余数 <span class="token operator">=</span> m <span class="token operator">%</span> n<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>计算结果注意：</p>
<ul>
<li>
<p>取余运算结果的正负性，取决于 m，而不是 n。比如：<code v-pre>10 % -3</code>的运算结果是 1。<code v-pre>-10 % 3</code>的运算结果是-1。</p>
</li>
<li>
<p>如果 n &lt; 0，那就先把 n 取绝对值后，再计算。等价于 m % (-n)。</p>
</li>
<li>
<p>如果 n 是 0，那么结果是 NaN。</p>
</li>
<li>
<p>在 n &gt; 0 的情况下：</p>
<ul>
<li>如果 m&gt;=n，那就正常取余。</li>
<li>如果 m&lt;n，那结果就是 m。</li>
</ul>
</li>
</ul>
<h3 id="浮点数运算的精度问题" tabindex="-1"><a class="header-anchor" href="#浮点数运算的精度问题"><span>浮点数运算的精度问题</span></a></h3>
<p>浮点数值的最高精度是 17 位小数，但在进行算术计算时，会丢失精度，导致计算不够准确。比如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 运算结果不是 0.3，而是 0.30000000000000004</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0.07</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 运算结果不是 7，而是 7.000000000000001</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，<strong>不要直接判断两个浮点数是否相等</strong>。前面的文章《JavaScript 基础：基本数据类型：Number》有详细介绍。</p>
<h2 id="自增和自减运算符" tabindex="-1"><a class="header-anchor" href="#自增和自减运算符"><span>自增和自减运算符</span></a></h2>
<h3 id="自增运算符" tabindex="-1"><a class="header-anchor" href="#自增运算符"><span>自增运算符 <code v-pre>++</code></span></a></h3>
<p>作用：可以快速对一个变量进行加1操作。只能操作变量，不能操作常量或者表达式。</p>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> a2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">a1<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> a1<span class="token operator">++</span> <span class="token operator">+</span> a2<span class="token punctuation">;</span> <span class="token comment">// result的结果为4</span></span>
<span class="line"><span class="token comment">// (a1+a2)++; // 报错，没有这种写法</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> a3 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">a3<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 报错，因为常量无法再自加</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自增分成两种：<code v-pre>a++</code>和<code v-pre>++a</code>。共同点：</p>
<p>（1）无论是 <code v-pre>a++</code> 还是<code v-pre>++a</code>，自增都会使原变量的值加 1。</p>
<p>（2）<strong>我们要注意的是</strong>：<code v-pre>a</code>是变量，而<code v-pre>a++</code>和<code v-pre>++a</code>是<strong>表达式</strong>。</p>
<p>那这两种自增，有啥区别呢？区别是：<code v-pre>a++</code> 和 <code v-pre>++a</code>的值不同：（也就是说，表达式的值不同）</p>
<ul>
<li>
<p><code v-pre>a++</code>这个表达式的值等于原变量的值（a 自增前的值）。可以这样理解：先把 a 的值赋值给表达式，然后 a 再自增。</p>
</li>
<li>
<p><code v-pre>++a</code>这个表达式的值等于新值 （a 自增后的值）。 可以这样理解：a 先自增，然后把自增后的值赋值给表达式。</p>
</li>
</ul>
<h3 id="自减运算符" tabindex="-1"><a class="header-anchor" href="#自减运算符"><span>自减运算符 <code v-pre>--</code></span></a></h3>
<p>作用：可以快速对一个变量进行减1操作。原理同自增运算符。</p>
<p>开发时，大多使用后置的自增/自减，并且代码独占一行，例如：<code v-pre>num++</code>，或者 <code v-pre>num--</code>。</p>
<h3 id="代码举例" tabindex="-1"><a class="header-anchor" href="#代码举例"><span>代码举例</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> n1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> n2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> result1 <span class="token operator">=</span> n1<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> <span class="token operator">++</span>n1<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//12</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//12</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> result2 <span class="token operator">=</span> n2<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 19</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span></span>
<span class="line"></span>
<span class="line">result2 <span class="token operator">=</span> <span class="token operator">--</span>n2<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐式类型转换" tabindex="-1"><a class="header-anchor" href="#隐式类型转换"><span>隐式类型转换</span></a></h3>
<p>自增和自减时，a的执行过程：</p>
<p>（1）先调用<code v-pre>Number(a)</code>函数；</p>
<p>（2）然后将<code v-pre>Number(a)</code>的返回结果进行 加 1 操作，得到的结果赋值给 a。</p>
<p>举例 1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'666'</span><span class="token punctuation">;</span> <span class="token comment">// 这里不能用 const 定义，否则报错。</span></span>
<span class="line">a<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：667</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果： number</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例2：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'abc'</span><span class="token punctuation">;</span></span>
<span class="line">a<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：NaN。因为 Number('abc')的结果为 NaN，再自增后，结果依然是 NaN</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：number</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一元运算符" tabindex="-1"><a class="header-anchor" href="#一元运算符"><span>一元运算符</span></a></h2>
<p>一元运算符，只需要一个操作数。常见的一元运算符如下。</p>
<h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof"><span>typeof</span></a></h3>
<blockquote>
<p>typeof 是典型的一元运算符，因为后面只跟一个操作数。</p>
</blockquote>
<p>因为 JS是弱类型语言，是<a href="https://blog.csdn.net/cuk0051/article/details/108340196" target="_blank" rel="noopener noreferrer">松散型</a>语言，所以我们不需要<strong>显式</strong>指定数据的具体类型。但是很多时候，我们仍需要通过一种手段知道某个变量到底是哪一种数据类型，typeof 运算符应运而生。</p>
<p><code v-pre>typeof()</code>表示“<strong>获取变量的数据类型</strong>”，它是 JS 提供的一个操作符。返回的是小写，语法为：（两种写法都可以）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 写法1</span></span>
<span class="line"><span class="token keyword">typeof</span> 变量<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 写法2</span></span>
<span class="line"><span class="token keyword">typeof</span><span class="token punctuation">(</span>变量<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typeof 这个运算符的返回结果就是变量的数据类型。那返回结果的类型是什么呢？是字符串。</p>
<p>typeof 是一个运算符，或者说是一个操作符，所以说，typeof() 并不是一个函数，<code v-pre>()</code>只是将括起来的内容当做一个整体而已。</p>
<p>延伸一下，<code v-pre>()</code> 这个符号至少有两个作用：</p>
<ul>
<li>作用1：调用函数</li>
<li>作用2：<strong>表示括起来的内容/表达式是一个整体</strong>。比如 <code v-pre>1+2*3</code> 与 (1+2)*3的写法是有区别的。</li>
</ul>
<p>typeof() 的<strong>返回结果</strong>：</p>
<table>
<thead>
<tr>
<th style="text-align:left">typeof 的语法</th>
<th style="text-align:center">返回结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">typeof 数字（含 typeof NaN）</td>
<td style="text-align:center">number</td>
</tr>
<tr>
<td style="text-align:left">typeof 字符串</td>
<td style="text-align:center">string</td>
</tr>
<tr>
<td style="text-align:left">typeof 布尔型</td>
<td style="text-align:center">boolean</td>
</tr>
<tr>
<td style="text-align:left">typeof 对象</td>
<td style="text-align:center">object</td>
</tr>
<tr>
<td style="text-align:left">typeof 方法</td>
<td style="text-align:center">function</td>
</tr>
<tr>
<td style="text-align:left">typeof null</td>
<td style="text-align:center">object</td>
</tr>
<tr>
<td style="text-align:left">typeof undefined</td>
<td style="text-align:center">undefined</td>
</tr>
</tbody>
</table>
<p>备注：</p>
<ul>
<li>为啥 <code v-pre>typeof null</code>的返回值也是 object 呢？因为 null 代表的是<strong>空对象</strong>。</li>
<li><code v-pre>typeof NaN</code>的返回值是 number，之前的内容中讲过，NaN 是一个特殊的数字。</li>
</ul>
<p><strong>返回结果举例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：string</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空数组的打印结果：object</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空对象的打印结果：object</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：这里的空数组<code v-pre>[]</code>、空对象<code v-pre>{}</code> ，为啥他们在使用 typeof 时，返回值也是 <code v-pre>object</code>呢？因为空数组、空对象都是<strong>引用数据类型 Object</strong>。</p>
<p>typeof 无法区分数组，但 instanceof 可以。比如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于 instanceof 的详细内容，以后讲对象的时候，会详细介绍。</p>
<h3 id="正号-负号-a、-a" tabindex="-1"><a class="header-anchor" href="#正号-负号-a、-a"><span>正号/负号：<code v-pre>+a</code>、<code v-pre>-a</code></span></a></h3>
<blockquote>
<p>注意，这里说的是正号/负号，不是加号/减号。</p>
</blockquote>
<p>（1）不会改变原数值。</p>
<p>（1）正号不会对数字产生任何影响。比如说，<code v-pre>2</code>和<code v-pre>+2</code>是一样的。</p>
<p>（2）我们可以对其他的数据类型使用<code v-pre>+</code>，来将其转换为 number【重要的小技巧】。比如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token operator">+</span>a<span class="token punctuation">;</span> <span class="token comment">// 注意这行代码的一元运算符操作</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a：'</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'-----------------'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">'18'</span><span class="token punctuation">;</span></span>
<span class="line">b <span class="token operator">=</span> <span class="token operator">+</span>b<span class="token punctuation">;</span> <span class="token comment">// 注意这行代码的一元运算符操作</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'b：'</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">a：1</span>
<span class="line">number</span>
<span class="line"></span>
<span class="line">-----------------</span>
<span class="line"></span>
<span class="line">b：18</span>
<span class="line">number</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）负号可以对数字进行取反。</p>
<h3 id="隐式类型转换——正号-负号" tabindex="-1"><a class="header-anchor" href="#隐式类型转换——正号-负号"><span>隐式类型转换——正号/负号</span></a></h3>
<p>任何值做<code v-pre>+a</code>、<code v-pre>-a</code>运算时， 内部调用的是 Number() 函数。</p>
<p><strong>举例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">'666'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token operator">+</span>a<span class="token punctuation">;</span> <span class="token comment">// 对 a 进行一元运算，b是运算结果</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：string。说明 a 的数据类型保持不变。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果："666"。不会改变原数值。</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：number。说明 b 的数据类型发生了变化。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：666</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三目运算符" tabindex="-1"><a class="header-anchor" href="#三目运算符"><span>三目运算符</span></a></h2>
<p>三目运算符也叫三元运算符、条件运算符。</p>
<p>语法：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">条件表达式 ? 语句1 : 语句2;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>执行流程</strong>——条件运算符在执行时，首先对条件表达式进行求值：</p>
<ul>
<li>
<p>如果该值为 true，则执行语句 1，并返回执行结果</p>
</li>
<li>
<p>如果该值为 false，则执行语句 2，并返回执行结果</p>
</li>
</ul>
<p>如果条件表达式的求值结果是一个非布尔值，会将其转换为布尔值然后再运算。</p>
<h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符"><span>逻辑运算符</span></a></h2>
<p>逻辑运算符有三个：</p>
<ul>
<li>
<p><code v-pre>&amp;&amp;</code>： 与（且）。两个都为真，结果才为真。特点：一假则假。</p>
</li>
<li>
<p><code v-pre>||</code> ：或。只要有一个是真，结果就是真。特点：特点: 一真则真。</p>
</li>
<li>
<p><code v-pre>!</code> ：非。对一个布尔值进行取反。特点: 真变假, 假变真。</p>
</li>
</ul>
<p>注意：能参与逻辑运算的，都是布尔值。</p>
<p><strong>连比的写法：</strong></p>
<p>来看看逻辑运算符连比的写法。</p>
<p>举例 1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出结果为 false。</p>
<p>举例 2：（判断一个人的年龄是否在 18~65 岁之间）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入您的年龄'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">>=</span> <span class="token number">18</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&lt;</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'可以上班'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'准备退休'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：上面的<code v-pre>a&gt;=18 &amp;&amp; a&lt;= 65</code>千万别想当然地写成<code v-pre> 18&lt;= a &lt;= 65</code>，没有这种语法。</p>
<h3 id="非布尔值的与或运算【重要】" tabindex="-1"><a class="header-anchor" href="#非布尔值的与或运算【重要】"><span>非布尔值的与或运算【重要】</span></a></h3>
<blockquote>
<p>之所以重要，是因为在实际开发中，我们经常用这种代码做容错处理或者兜底处理。</p>
</blockquote>
<p>非布尔值进行<strong>与或运算</strong>时，会通过隐式类型转换，先将其转换为布尔值，然后再运算，但返回结果是<strong>原值</strong>。比如说：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// 运算过程：true &amp;&amp; true;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'result：'</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：6（也就是最后面的那个值）</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码可以看到，虽然运算过程为布尔值的运算，但返回结果是原值。</p>
<p>那么，返回结果是哪个原值呢？我们来看一下。</p>
<p>1、两个非布尔值，做逻辑运算：</p>
<p><strong>与运算</strong>的返回结果：</p>
<ul>
<li>
<p>如果第一个值为 false，则只执行第一条语句，并直接返回第一个值；不会再往后执行。</p>
</li>
<li>
<p>如果第一个值为 true，则继续执行第二条语句，并返回第二个值（无论第二个值的结果如何）。</p>
</li>
</ul>
<p><strong>或运算</strong>的返回结果：</p>
<ul>
<li>
<p>如果第一个值为 true，则只执行第一条语句，并直接返回第一个值；不会再往后执行。</p>
</li>
<li>
<p>如果第一个值为 false，则继续执行第二条语句，并返回第二个值（无论第二个值的结果如何）。</p>
</li>
</ul>
<p>2、三个及以上的非布尔值，做逻辑运算：</p>
<p><strong>与运算</strong>的返回结果：（value1 &amp;&amp; value2 &amp;&amp; value3）</p>
<ul>
<li>从左到右依次计算操作数，找到第一个为 false 的值为止。</li>
<li>如果所有的值都为 true，则返回最后一个值。</li>
</ul>
<p><strong>或运算</strong>的返回结果：（value1 || value2 || value3）</p>
<ul>
<li>从左到右依次计算操作数，找到第一个为 true 的值为止。</li>
<li>如果所有的值都为 false，则返回最后一个值。</li>
</ul>
<h3 id="非布尔值的-运算" tabindex="-1"><a class="header-anchor" href="#非布尔值的-运算"><span>非布尔值的 <code v-pre>!</code> 运算</span></a></h3>
<p>非布尔值进行<strong>非运算</strong>时，会先将其转换为布尔值，然后再运算，返回结果是<strong>布尔值</strong>。</p>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token operator">!</span>a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// boolean</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="短路运算的妙用【重要】" tabindex="-1"><a class="header-anchor" href="#短路运算的妙用【重要】"><span>短路运算的妙用【重要】</span></a></h3>
<blockquote>
<p>下方举例中的写法技巧，在实际开发中，经常用到。这种写法，是一种很好的「容错、容灾、降级」方案，需要多看几遍。</p>
</blockquote>
<p>1、JS 中的<code v-pre>&amp;&amp;</code>属于<strong>短路</strong>的与：</p>
<ul>
<li>
<p>如果第一个值为 false，则不会执行后面的内容。</p>
</li>
<li>
<p>如果第一个值为 true，则继续执行第二条语句，并返回第二个值。</p>
</li>
</ul>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 第一个值为true，会继续执行后面的内容</span></span>
<span class="line">a1 <span class="token operator">&amp;&amp;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'看 a1 出不出来'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以弹出 alert 框</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> a2 <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 第一个值为false，不会继续执行后面的内容</span></span>
<span class="line">a2 <span class="token operator">&amp;&amp;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'看 a2 出不出来'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不会弹出 alert 框</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、JS 中的<code v-pre>||</code>属于<strong>短路</strong>的或：</p>
<ul>
<li>
<p>如果第一个值为 true，则不会执行后面的内容。</p>
</li>
<li>
<p>如果第一个值为 false，则继续执行第二条语句，并返回第二个值。</p>
</li>
</ul>
<p>实际开发中，我们经常是这样来做「容错处理」的，如下。</p>
<p>举例1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> result<span class="token punctuation">;</span> <span class="token comment">// 请求接口时，后台返回的内容</span></span>
<span class="line"><span class="token keyword">let</span> errorMsg <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span> <span class="token comment">// 前端的文案提示</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&amp;</span> result<span class="token punctuation">.</span>retCode <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  errorMsg <span class="token operator">=</span> <span class="token string">'恭喜你中奖啦~'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>retCode <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 接口返回异常码时</span></span>
<span class="line">	errorMsg <span class="token operator">=</span> result<span class="token punctuation">.</span>msg <span class="token operator">||</span> <span class="token string">'活动太火爆，请稍后再试'</span><span class="token punctuation">;</span> <span class="token comment">// 文案提示信息，优先用 接口返回的msg字段，其次用 '活动太火爆，请稍后再试' 这个文案兜底。</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 接口挂掉时</span></span>
<span class="line">	errorMsg <span class="token operator">=</span> <span class="token string">'网络异常，请稍后再试'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例2，当前端成功调用一个接口后，返回的数据为 result 对象。这个时候，我们用变量 a 来接收 result 里的图片资源：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>retCode <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> result <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>imgUrl <span class="token operator">||</span> <span class="token string">'http://img.smyhvae.com/20160401_01.jpg'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的意思是，获取返回结果中的<code v-pre>result.data.imgUrl</code>这个图片资源；如果返回结果中没有 <code v-pre>result.data.imgUrl</code> 这个字段，就用 <code v-pre>http://img.smyhvae.com/20160401_01.jpg</code> 作为<strong>兜底</strong>图片。这种写法，在实际开发中经常用到。</p>
<h2 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符"><span>赋值运算符</span></a></h2>
<p>赋值：将等号右侧的值赋给符号左侧的变量。</p>
<h3 id="赋值运算符包括哪些" tabindex="-1"><a class="header-anchor" href="#赋值运算符包括哪些"><span>赋值运算符包括哪些</span></a></h3>
<ul>
<li>
<p><code v-pre>=</code> 直接赋值。比如 <code v-pre>var a = 5</code>。意思是，把 5 这个值，往 a 里面存一份。简称：把 5 赋值给 a。</p>
</li>
<li>
<p><code v-pre>+=</code>：比如 a += 5 等价于 a = a + 5。</p>
</li>
<li>
<p><code v-pre>-=</code>：比如 a -= 5 等价于 a = a - 5。</p>
</li>
<li>
<p><code v-pre>*=</code>：比如 a _ = 5 等价于 a = a -5。</p>
</li>
<li>
<p><code v-pre>/=</code>：比如 a /= 5 等价于 a = a / 5。</p>
</li>
<li>
<p><code v-pre>%=</code>：比如 a %= 5 等价于 a = a % 5。</p>
</li>
</ul>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3>
<p>（1）算数运算符的优先级高于赋值运算符。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 先计算 1 + 2，再把计算结果赋值给 result。因为算数运算符的优先级高于赋值运算符。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（2）赋值运算符的结合性是右结合性（从右至左的顺序计算）。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> a1<span class="token punctuation">,</span> a2<span class="token punctuation">;</span></span>
<span class="line">a1 <span class="token operator">=</span> a2 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 先将 3 复制给 a2，再将 a2 的值赋值给 a1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符"><span>比较运算符</span></a></h2>
<p>比较运算符可以比较两个值之间的大小关系，如果关系成立它会返回 true，如果关系不成立则返回 false。</p>
<p>比较运算符有很多种，比如：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">>	大于号</span>
<span class="line">&lt;	小于号</span>
<span class="line">>= 	大于或等于</span>
<span class="line">&lt;=  小于或等于</span>
<span class="line">== 	等于</span>
<span class="line">=== 全等于</span>
<span class="line">!=	不等于</span>
<span class="line">!== 不全等于</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>比较运算符，得到的结果都是布尔值：要么是 true，要么是 false</strong>。如果关系成立，就返回true；如果关系不成立，就返回false。</p>
<p>举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="非数值的比较" tabindex="-1"><a class="header-anchor" href="#非数值的比较"><span>非数值的比较</span></a></h3>
<p>（1）对于非数值进行比较时，会将其转换为数值类型（内部是调用<code v-pre>Number()方法</code>），再进行比较。</p>
<p>举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">></span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">>=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">></span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//console.log(10 > null); //true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//任何值和NaN做任何比较都是false</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&lt;=</span> <span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">></span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）特殊情况：如果参与比较的都是字符串，则<strong>不会</strong>将其转换为数字进行比较，比较的是字符串的<strong>Unicode 编码</strong>。【非常重要，这里是个大坑，很容易踩到】</p>
<p>比较字符编码时，是一位一位进行比较，顺序从左到右。如果大一样，则继续比较下一位。</p>
<p>比如说，当你尝试去比较<code v-pre>&quot;123&quot;</code>和<code v-pre>&quot;56&quot;</code>这两个字符串时，你会发现，字符串&quot;56&quot;竟然比字符串&quot;123&quot;要大（因为 5 比 1 大）。也就是说，下面这样代码的打印结果，其实是 true:（这个我们一定要注意，在日常开发中，很容易忽视）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 比较两个字符串时，比较的是字符串的字符编码，所以可能会得到不可预期的结果</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'56'</span> <span class="token operator">></span> <span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>因此</strong>：当我们想比较两个字符串型的数字时，<strong>一定一定要先转型</strong>再比较大小，比如 <code v-pre>parseInt()</code>。</p>
<p>（3）任何值和 NaN 做任何比较都是 false。</p>
<h3 id="符号的强调" tabindex="-1"><a class="header-anchor" href="#符号的强调"><span><code v-pre>==</code>符号的强调</span></a></h3>
<p><code v-pre>==</code>这个符号，它是<strong>判断是否等于</strong>，而不是赋值。注意事项如下：</p>
<p>（1）<code v-pre>== </code>这个符号，还可以验证字符串是否相同。例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我爱你中国'</span> <span class="token operator">==</span> <span class="token string">'我爱你中国'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出结果为true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（2）<code v-pre>== </code>这个符号并不严谨，会做隐式转换，将不同的数据类型，<strong>转为相同类型</strong>进行比较。例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'6'</span> <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true。这里的字符串"6"会先转换为数字6，然后再进行比较</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）undefined 衍生自 null，所以这两个值做相等判断时，会返回 true。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印结果：true。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（4）NaN 不和任何值相等，包括它本身。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：那如果我想判断 b 的值是否为 NaN，该怎么办呢？</p>
<p>答案：可以通过 isNaN()函数来判断一个值是否是 NaN。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如上方代码所示，如果 b 为 NaN，则返回 true；否则返回 false。</p>
<h3 id="全等符号的强调" tabindex="-1"><a class="header-anchor" href="#全等符号的强调"><span><code v-pre>===</code>全等符号的强调</span></a></h3>
<p><strong>全等在比较时，不会做类型转换</strong>。如果要保证<strong>完全等于</strong>（即：不仅要判断取值相等，还要判断数据类型相同），我们就要用三个等号<code v-pre>===</code>。例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'6'</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述内容分析出：</p>
<ul>
<li>
<p><code v-pre>==</code>两个等号，不严谨，&quot;6&quot;和 6 是 true。</p>
</li>
<li>
<p><code v-pre>===</code>三个等号，严谨，&quot;6&quot;和 6 是 false。</p>
</li>
</ul>
<p>另外还有：<strong><code v-pre>==</code>的反面是<code v-pre>!=</code>，<code v-pre>===</code>的反面是<code v-pre>!==</code></strong>。例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">!=</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">!=</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false，因为3=="3"是true，所以反过来就是false。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">!==</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true，应为3==="3"是false，所以反过来是true。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不同数据类型之间的大小比较" tabindex="-1"><a class="header-anchor" href="#不同数据类型之间的大小比较"><span>不同数据类型之间的大小比较</span></a></h2>
<p>这一段是比较运算符的延伸，内容繁琐，新手可以不用记，等以后用到的时候再查阅。</p>
<h3 id="数值类型和其他类型比较" tabindex="-1"><a class="header-anchor" href="#数值类型和其他类型比较"><span>数值类型和其他类型比较</span></a></h3>
<p>先将其他类型隐式转换为数值类型（内部是调用<code v-pre>Number()</code>方法），然后比较大小。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//字符串与数字比较</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'200'</span> <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a'</span> <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false。 'a' 被转换成 NaN 进行比较</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'110a'</span> <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false。 '110a' 被转换成 NaN 进行比较。说明`110a`在做隐式转换的时候，是调用了 Number('110a')方法，而不是调用  parseInt('110a')方法</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 布尔值与数字比较</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// null 与数字进行比较</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true。这是一个很严重的bug</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true。同上</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// undefined 与数字进行比较：结果都是 false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期大小比较" tabindex="-1"><a class="header-anchor" href="#日期大小比较"><span>日期大小比较</span></a></h3>
<p>如果日期的格式为字符串，则比较字符串的<strong>Unicode 编码</strong>。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myDate1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> myDate2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> myDate3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> myDate4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myDate1 <span class="token operator">&lt;</span> myDate2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myDate1 <span class="token operator">&lt;</span> myDate3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myDate3 <span class="token operator">&lt;</span> myDate4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> date1 <span class="token operator">=</span> <span class="token string">'2022-08-08'</span><span class="token punctuation">;</span> <span class="token comment">// "2022/08/08"同理</span></span>
<span class="line"><span class="token keyword">const</span> date2 <span class="token operator">=</span> <span class="token string">'2022-08-09'</span><span class="token punctuation">;</span> <span class="token comment">// "2022/08/09"同理</span></span>
<span class="line"><span class="token keyword">const</span> date3 <span class="token operator">=</span> <span class="token string">'2022-09-08'</span><span class="token punctuation">;</span> <span class="token comment">// "2022/09/08"同理</span></span>
<span class="line"><span class="token keyword">const</span> date4 <span class="token operator">=</span> <span class="token string">'2023-08-08'</span><span class="token punctuation">;</span> <span class="token comment">// "2023/08/08"同理</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date1 <span class="token operator">&lt;</span> date2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date1 <span class="token operator">&lt;</span> date3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date3 <span class="token operator">&lt;</span> date4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> time1 <span class="token operator">=</span> <span class="token string">'2022-08-08 08:00:00'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> time2 <span class="token operator">=</span> <span class="token string">'2022-08-08 08:00:01'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> time3 <span class="token operator">=</span> <span class="token string">'2022-08-08 08:01:00'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> time4 <span class="token operator">=</span> <span class="token string">'2022-08-08 09:00:00'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time1 <span class="token operator">&lt;</span> time2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time1 <span class="token operator">&lt;</span> time3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time1 <span class="token operator">&lt;</span> time4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 数据类型不同，此处是先将 myDate1 转为字符串类型，然后比较大小。可想而知，结果都是 false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myDate1 <span class="token operator">>=</span> date1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myDate1 <span class="token operator">&lt;=</span> date1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 虽然时间格式不同，但都是字符串，所以可以比较大小</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date1 <span class="token operator">&lt;</span> time1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>
<ul>
<li><a href="https://blog.csdn.net/w390058785/article/details/79957206" target="_blank" rel="noopener noreferrer">【JavaScript】探究数据类型之间的隐式转换和大小比较</a></li>
</ul>
<h2 id="逗号运算符" tabindex="-1"><a class="header-anchor" href="#逗号运算符"><span>逗号运算符</span></a></h2>
<p>逗号运算符一般用于简化代码。逗号运算符的优先级是所有运算符中最低的。</p>
<p>逗号运算符也是一个运算符, 所以也有运算符结果。它的运算符结果是最后一个表达式的结果。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 利用逗号运算符同时定义多个变量</span></span>
<span class="line"><span class="token keyword">let</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 利用逗号运算符同时给多个变量赋值</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：11</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符的优先级" tabindex="-1"><a class="header-anchor" href="#运算符的优先级"><span>运算符的优先级</span></a></h2>
<p>运算符的优先级如下：（优先级从高到低）</p>
<ul>
<li>
<p><code v-pre>.</code>、<code v-pre>[]</code>、<code v-pre>new</code></p>
</li>
<li>
<p><code v-pre>()</code></p>
</li>
<li>
<p><code v-pre>++</code>、<code v-pre>--</code></p>
</li>
<li>
<p><code v-pre>!</code>、<code v-pre>~</code>、<code v-pre>+</code>（单目）、<code v-pre>-</code>（单目）、<code v-pre>typeof</code>、<code v-pre>void</code>、<code v-pre>delete</code></p>
</li>
<li>
<p><code v-pre>*</code>、<code v-pre>/</code>、<code v-pre>%</code></p>
</li>
<li>
<p><code v-pre>+</code>（双目）、<code v-pre>-</code>（双目）</p>
</li>
<li>
<p><code v-pre>&lt;&lt;</code>、<code v-pre>&gt;&gt;</code>、<code v-pre>&gt;&gt;&gt;</code></p>
</li>
<li>
<p>比较运算符：<code v-pre>&lt;</code>、<code v-pre>&lt;=</code>、<code v-pre>&gt;</code>、<code v-pre>&gt;=</code></p>
</li>
<li>
<p>比较运算符：<code v-pre>==</code>、<code v-pre>!==</code>、<code v-pre>===</code>、<code v-pre>!==</code></p>
</li>
<li>
<p><code v-pre>&amp;</code></p>
</li>
<li>
<p><code v-pre>^</code></p>
</li>
<li>
<p><code v-pre>|</code></p>
</li>
<li>
<p>逻辑运算符：<code v-pre>&amp;&amp;</code> （注意：逻辑与 <code v-pre>&amp;&amp;</code> 比逻辑或 <code v-pre>||</code> 的优先级更高）</p>
</li>
<li>
<p>逻辑运算符：<code v-pre>||</code></p>
</li>
<li>
<p><code v-pre>?:</code></p>
</li>
<li>
<p><code v-pre>=</code>、<code v-pre>+=</code>、<code v-pre>-=</code>、<code v-pre>*=</code>、<code v-pre>/=</code>、<code v-pre>%=</code>、<code v-pre>&lt;&lt;=</code>、<code v-pre>&gt;&gt;=</code>、<code v-pre>&gt;&gt;&gt;=</code>、<code v-pre>&amp;=</code>、<code v-pre>^=</code>、<code v-pre>|=</code></p>
</li>
<li>
<p><code v-pre>,</code></p>
</li>
</ul>
<p>备注：在实际写代码的时候，如果你不清楚哪个优先级更高，可以先尝试把括号用上。</p>
<h2 id="unicode-编码" tabindex="-1"><a class="header-anchor" href="#unicode-编码"><span>Unicode 编码</span></a></h2>
<blockquote>
<p>这一段中，我们来讲引申的内容：Unicode 编码的使用。</p>
</blockquote>
<p>各位同学可以先在网上查一下“Unicode 编码表”。</p>
<p>1、在字符串中可以使用转义字符输入 Unicode 编码。格式如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">\u四位编码</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'\u2600'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里的 2600 采用的是16进制</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'\u2602'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里的 2602 采用的是16进制。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20181222_1218.png" alt=""></p>
<p>2、我们还可以在 HTML 网页中使用 Unicode 编码。格式如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&amp;#四位编码;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>PS：我们知道，Unicode 编码采用的是 16 进制，但是，这里的编码需要使用 10 进制。</p>
<p>举例如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token entity" title="&#9860;">&amp;#9860;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20181222_1226.png" alt=""></p>
<h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


