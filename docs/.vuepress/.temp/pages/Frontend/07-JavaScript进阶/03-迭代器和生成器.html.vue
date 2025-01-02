<template><div><h2 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器"><span>迭代器</span></a></h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3>
<p><strong>迭代器</strong>（Iterator）是 JavaScript 中一种特殊的对象，它提供了一种<strong>统一的、通用的</strong>方式<strong>遍历</strong>个各种不同类型的数据结构。可以遍历的数据结构包括：数组、字符串、Set、Map 等<strong>可迭代对象</strong>。我们也可以自定义实现迭代器，以支持遍历自定义的数据结构。</p>
<p>通过迭代器，我们可以按顺序逐个获取数据中的元素，不需要手动跟踪索引（索引也可称之为指针、游标）。迭代器的行为很像数据库中的游标（cursor）。</p>
<p>我们也不需要关心可迭代对象内部的实现细节，即不需要关心目标对象是数组还是字符串，还是其他的数据结构。对于迭代器来说，这些数据结构都是一样的处理方式。</p>
<p>迭代器是一种常见的编程模式，最早出现在1974年设计的CLU编程语言中。不仅仅在JS中，其他许多编程语言（比如 Java、Python 等）都提供了迭代器的概念和实现。技术实现各有不同，但目的都是帮助我们用通用的方式遍历对象的数据结构，提高代码的简洁性、可读性和维护性。</p>
<h3 id="迭代协议" tabindex="-1"><a class="header-anchor" href="#迭代协议"><span>迭代协议</span></a></h3>
<p>迭代协议并不是编程语言的内置实现或语法，而是协议。迭代协议具体分为两个协议：可迭代协议、迭代器协议。</p>
<p><strong>迭代器协议</strong>规定了产生一系列值（无论是有限个还是无限个）的标准方式。</p>
<p>迭代器是一个具体的对象，这个对象要符合迭代器协议。<strong>在JS中，某个对象只有实现了符合特定要求的 next() 方法，这个对象才能成为迭代器</strong>。</p>
<h3 id="实现原理-next-方法" tabindex="-1"><a class="header-anchor" href="#实现原理-next-方法"><span>实现原理：next() 方法</span></a></h3>
<p>在JS中，迭代器的实现原理是通过定义一个特定的<code v-pre>next()</code> 方法，该方法在每次迭代中返回一个包含两个属性的对象：done 和 value。</p>
<p>具体来说，next() 方法有如下要求：</p>
<p>（1）参数：无参数或者有一个参数。</p>
<p>（2）返回值：返回一个应当有以下两个属性的对象。属性值如下：</p>
<ul>
<li>
<p>done 属性（Boolean 类型）：表示迭代是否已经完成。当迭代器遍历完所有元素时，done 为 true，否则为 false。具体解释如下：</p>
<ul>
<li>
<p>如果迭代器可以产生序列中的下一个值，则为 false，这等价于没有指定 done 属性。</p>
</li>
<li>
<p>如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 可以省略，如果 value 依然存在，即为迭代结束之后的默认返回值。</p>
</li>
</ul>
</li>
<li>
<p>value 属性：包含当前迭代步骤的值，可能是具体的值，也可能是 undefined。每次调用 next() 方法时，迭代器返回下一个值。done 为true时，可以省略。</p>
</li>
</ul>
<h3 id="举例-为数组创建迭代器" tabindex="-1"><a class="header-anchor" href="#举例-为数组创建迭代器"><span>举例：为数组创建迭代器</span></a></h3>
<p>按照上面讲的迭代器协议，我们可以给一个数组手动创建一个用于遍历的迭代器。代码举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> strArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'qian'</span><span class="token punctuation">,</span> <span class="token string">'gu'</span><span class="token punctuation">,</span> <span class="token string">'yi'</span><span class="token punctuation">,</span> <span class="token string">'hao'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 为数组封装迭代器</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createArrayIterator</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> arr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> strArrIterator <span class="token operator">=</span> <span class="token function">createArrayIterator</span><span class="token punctuation">(</span>strArr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{"done":false,"value":"qian"}</span>
<span class="line">{"done":false,"value":"gu"}</span>
<span class="line">{"done":false,"value":"yi"}</span>
<span class="line">{"done":false,"value":"hao"}</span>
<span class="line">{"done":true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能会有疑问：实际开发中，我们真的需要大费周章地为一个简单的数组写一个迭代器函数吗？数组直接拿来遍历不就完事了吗？</p>
<p>是的，这大可不必。初衷是为了了解迭代器的原理。</p>
<h2 id="可迭代对象" tabindex="-1"><a class="header-anchor" href="#可迭代对象"><span>可迭代对象</span></a></h2>
<p>我们要注意区分一些概念：迭代器、可迭代对象、容器。迭代器是提供迭代功能的对象。可迭代对象是被迭代的目标对象，也称之为容器。</p>
<h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1"><span>概念</span></a></h3>
<p>当一个对象实现了 <strong>iterable protocol 协议</strong>时，它就是一个可迭代对象。这个对象要求必须实现了 <code v-pre>@@iterator</code> 方法，在内部封装了迭代器。我们可以通过 <code v-pre>Symbol.iterator</code> 函数调用该迭代器。</p>
<p>当我们使用迭代器的方式去遍历数组、字符串、Set、Map 等数据结构时，这些数据对象就属于可迭代对象。这些数据对象本身，内部就自带了迭代器。</p>
<p>可是，有些数据对象，并不具备可迭代的能力，那要怎么封装成可迭代对象呢？以及，可迭代对象需要具备什么特征？可迭代对象有什么用处？这就是本段要讲的内容。</p>
<h3 id="可迭代对象的特征" tabindex="-1"><a class="header-anchor" href="#可迭代对象的特征"><span>可迭代对象的特征</span></a></h3>
<p>凡是可迭代对象，都具备如下特征：</p>
<p>1、可迭代对象都有一个 [Symbol.iterator] 函数。通过这个函数，我们可以进行数据遍历操作。以一个简单的数组进行举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'qian'</span><span class="token punctuation">,</span> <span class="token string">'gu'</span><span class="token punctuation">,</span> <span class="token string">'yi'</span><span class="token punctuation">,</span> <span class="token string">'hao'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myArr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myArr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 获取数组自带的迭代器对象</span></span>
<span class="line"><span class="token keyword">const</span> myIterator <span class="token operator">=</span> myArr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 通过迭代器的 next() 方法遍历数组</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<img src="https://img.smyhvae.com/image-20230525211636012.png" alt="image-20230525211636012" style="zoom:50%;" />
<p>2、可迭对象可以进行 for ...  of 操作。其实  for ...  of  底层就是调用了 <code v-pre>@@iterator</code> 方法。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'qian'</span><span class="token punctuation">,</span> <span class="token string">'gu'</span><span class="token punctuation">,</span> <span class="token string">'yi'</span><span class="token punctuation">,</span> <span class="token string">'hao'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 可迭代对象可以进行 for ... of 操作。for ... of 也是一种遍历操作。</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> myArr<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 这里的 item，其实就是迭代器里的 value 属性的值。</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">qian</span>
<span class="line">gu</span>
<span class="line">yi</span>
<span class="line">hao</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原生可迭代对象" tabindex="-1"><a class="header-anchor" href="#原生可迭代对象"><span>原生可迭代对象</span></a></h3>
<p>以下这些对象，都是原生可迭代对象，请务必记住：</p>
<ul>
<li>String 字符串</li>
<li>Array 数组</li>
<li>Map</li>
<li>Set</li>
<li>arguments 对象</li>
<li>NodeList 对象（DOM节点的集合）</li>
</ul>
<p>原生可迭代对象的内部已经实现了可迭代协议，它们都符合可迭代对象的特征。比如，它们内部都有一个迭代器；他们可以用  for ... of 进行遍历。</p>
<p>为何要记住上面这些可迭代对象，因为可迭代对象的应用场景非常多，且非常好用。我们继续往下学习。</p>
<h3 id="可迭代对象的应用场景-重要" tabindex="-1"><a class="header-anchor" href="#可迭代对象的应用场景-重要"><span>可迭代对象的应用场景（重要）</span></a></h3>
<p>可迭代对象有许多应用场景，包括但不仅限于：</p>
<p>1、JavaScript的语法：</p>
<ul>
<li>for ... of</li>
<li>展开语法 ...</li>
<li>yield*</li>
<li>解构赋值</li>
</ul>
<p>2、创建一些对象：</p>
<ul>
<li>new Map([Iterable])：参数是可选的，可不传参数，也可以传一个可迭代对象作为参数</li>
<li>new WeakMap([iterable])</li>
<li>new Set([iterable])</li>
<li>new WeakSet([iterable])</li>
</ul>
<p>3、方法调用</p>
<ul>
<li>Array.from(iterable)：将一个可迭代对象转为数组</li>
<li>Promise.all(iterable)</li>
<li>Promise.race(iterable)</li>
</ul>
<p>今后在遇到这些应用场景时，这些原生可迭代对象可以直接拿来用。</p>
<p>比如说，通过阅读官方文档后我们得知，<code v-pre>new Set()</code>的写法中，括号里的参数可以不写，也可以传入一个可迭代对象 <code v-pre>iterable</code>。那么，字符串、数组、Set、Map等可迭代对象，在你需要的时候都可以传进去使用。而且，<code v-pre>const a = new Set()</code>写法中，变量 a 也是一个可迭代对象。</p>
<p><code v-pre>Promise.all(iterable)</code> 只能传数组吗？非也。准确来说，Promise.all()的参数中，传入的不是数组，而是一个可迭代对象。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> promise1 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'promise1 resolve'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> promise2 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'promise2 resolve'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> promise3 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'promise3 resolve'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> promiseSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">promiseSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>promise1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">promiseSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>promise2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">promiseSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>promise3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 准确来说，Promise.all()的参数中，传入的不是数组，而是一个可迭代对象</span></span>
<span class="line">Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promiseSet<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'res:'</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码举例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">res: ['promise1 resolve', 'promise2 resolve', 'promise3 resolve']</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>arguments 同样是一个可迭代对象，但不是数组。我们可以通过<code v-pre>Array.from(iterable)</code>方法将 arguments 转为数组，进而让其享受数组的待遇，调用数组的各种方法。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Array.from() 中的参数可以传入可迭代对象，将参数转为数组。arguments 是 foo() 函数的参数</span></span>
<span class="line">  <span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">['a', 'b', 'c']</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>学完了迭代器、可迭代对象的知识之后，很多关于函数传参、数据遍历、数据结构等方面的JS知识，就能融会贯通了。</p>
<h2 id="手写迭代器" tabindex="-1"><a class="header-anchor" href="#手写迭代器"><span>手写迭代器</span></a></h2>
<p>很多数据对象由于不是可迭代对象，我们可以为其手动创建一个迭代器，这个数据对象就成了可迭代对象。</p>
<h3 id="为普通对象创建外部迭代器" tabindex="-1"><a class="header-anchor" href="#为普通对象创建外部迭代器"><span>为普通对象创建外部迭代器</span></a></h3>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myObj1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">strArr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'qian'</span><span class="token punctuation">,</span> <span class="token string">'gu'</span><span class="token punctuation">,</span> <span class="token string">'yi'</span><span class="token punctuation">,</span> <span class="token string">'hao'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 为 myObj.strArr 封装迭代器</span></span>
<span class="line"><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> strArrIterator <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> myObj1<span class="token punctuation">.</span>strArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> myObj1<span class="token punctuation">.</span>strArr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{done: false, value: 'qian'}</span>
<span class="line">{done: false, value: 'gu'}</span>
<span class="line">{done: false, value: 'yi'}</span>
<span class="line">{done: false, value: 'hao'}</span>
<span class="line">{done: true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将普通对象封装为可迭代对象" tabindex="-1"><a class="header-anchor" href="#将普通对象封装为可迭代对象"><span>将普通对象封装为可迭代对象</span></a></h3>
<p>上面的数据 myObj1，不属于可迭代对象，因此我们单独写了一个迭代器对象 strArrIterator。但是这两个对象是分开的。</p>
<p>还有一种更高级的做法是，把迭代器封装到数据对象的内部。完事之后，这个数据对象就是妥妥的可迭代对象。</p>
<p>将普通的数据对象封装为可迭代对象时，<strong>具体做法</strong>是：在数据对象内部，创建一个名为<code v-pre>[Symbol.iterator]</code>的迭代器函数，这个函数名是固定的（这种写法属于计算属性名）；然后这个函数内需要返回一个迭代器，用于迭代当前的数据对象。</p>
<p>我们以下面这两个对象为例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myObj1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">strArr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'qian'</span><span class="token punctuation">,</span> <span class="token string">'gu'</span><span class="token punctuation">,</span> <span class="token string">'yi'</span><span class="token punctuation">,</span> <span class="token string">'hao'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> myObj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token string">'web'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果尝试用 for of 去遍历它们，会报错：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myObj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token string">'web'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> myObj2<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token comment">// 打印报错：Uncaught TypeError: myObj2 is not iterable。意思是：myObj2 不是可迭代对象</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，我们可以将这两个普通对象封装为可迭代对象。</p>
<p>1、将 myObj1 封装为可迭代对象，遍历 myObj1.strArr。代码举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myObj1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">strArr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'qian'</span><span class="token punctuation">,</span> <span class="token string">'gu'</span><span class="token punctuation">,</span> <span class="token string">'yi'</span><span class="token punctuation">,</span> <span class="token string">'hao'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 在 myObj1 的内部创建一个迭代器</span></span>
<span class="line">  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> strArrIterator <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> myObj1<span class="token punctuation">.</span>strArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> myObj1<span class="token punctuation">.</span>strArr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> strArrIterator<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取 myObj1 的迭代器对象</span></span>
<span class="line"><span class="token keyword">const</span> strArrIterator <span class="token operator">=</span> myObj2<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 通过迭代器遍历 myObj1.strArr 的数据</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{done: false, value: 'qian'}</span>
<span class="line">{done: false, value: 'gu'}</span>
<span class="line">{done: false, value: 'yi'}</span>
<span class="line">{done: false, value: 'hao'}</span>
<span class="line">{done: true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码有一个改进之处，如果把迭代器函数改成箭头函数，就可以通过 <code v-pre>this.strArr</code> 代表 <code v-pre>myObj2.strArr</code> 了，写法更简洁。代码改进如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myObj1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">strArr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'qian'</span><span class="token punctuation">,</span> <span class="token string">'gu'</span><span class="token punctuation">,</span> <span class="token string">'yi'</span><span class="token punctuation">,</span> <span class="token string">'hao'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 在 myObj1 的内部创建一个迭代器</span></span>
<span class="line">  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> strArrIterator <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>strArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>strArr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> strArrIterator<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取 myObj1 的迭代器对象</span></span>
<span class="line"><span class="token keyword">const</span> strArrIterator <span class="token operator">=</span> myObj2<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 通过迭代器遍历 myObj1.strArr 的数据</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果不变。</p>
<p>2、将 myObj2 封装为可迭代对象，遍历里面的键值对。代码举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myObj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token string">'web'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 将普通对象 myObj2 封装为可迭代对象，目的是遍历 myObj2 的键值对</span></span>
<span class="line">  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// const keys = Object.keys(this); // 获取对象的 key</span></span>
<span class="line">    <span class="token comment">// const values = Object.values(this); // 获取对象的 value</span></span>
<span class="line">    <span class="token keyword">const</span> entries <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取对象的键值对</span></span>
<span class="line">    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> iterator <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> entries<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> entries<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> iterator<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 可迭对象可以进行for of操作，遍历对象的键值对</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> myObj2<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">name qianguyihao</span>
<span class="line">skill web</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将自定义类封装为可迭代对象" tabindex="-1"><a class="header-anchor" href="#将自定义类封装为可迭代对象"><span>将自定义类封装为可迭代对象</span></a></h3>
<p>在面向对象开发时，如果你希望自己创建的类也具备可迭代的能力，那么，你可以在定义类的时候手动添加一个 <code v-pre>@@iterator</code>方法，让其成为可迭代对象。</p>
<p>代码举例：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// 定义类</span></span>
<span class="line">class Person <span class="token punctuation">{</span></span>
<span class="line">  constructor(name<span class="token punctuation">,</span> arr) <span class="token punctuation">{</span></span>
<span class="line">    this.name = name;</span>
<span class="line">    this.arr = arr;</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 定义一个名为 [Symbol.iterator] 的实例方法，封装迭代器</span></span>
<span class="line">  <span class="token punctuation">[</span>Symbol.iterator<span class="token punctuation">]</span>() <span class="token punctuation">{</span></span>
<span class="line">    let index = <span class="token number">0</span>;</span>
<span class="line">    const iterator = <span class="token punctuation">{</span></span>
<span class="line">      next<span class="token operator">:</span> () => <span class="token punctuation">{</span></span>
<span class="line">        if (index &lt; this.arr.length) <span class="token punctuation">{</span></span>
<span class="line">          return <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> value<span class="token operator">:</span> this.arr<span class="token punctuation">[</span>index++<span class="token punctuation">]</span> <span class="token punctuation">}</span>;</span>
<span class="line">        <span class="token punctuation">}</span> else <span class="token punctuation">{</span></span>
<span class="line">          return <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>;</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span>;</span>
<span class="line">    return iterator;</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">const person1 = new Person('千古壹号'<span class="token punctuation">,</span> <span class="token punctuation">[</span>'前端'<span class="token punctuation">,</span> '工程师'<span class="token punctuation">]</span>);</span>
<span class="line">const person2 = new Person('许嵩'<span class="token punctuation">,</span> <span class="token punctuation">[</span>'想象之中'<span class="token punctuation">,</span> '有何不可'<span class="token punctuation">]</span>);</span>
<span class="line"></span>
<span class="line"><span class="token comment">// Person的实例已经封装为可迭代对象了，可以通过 for ... of 进行遍历</span></span>
<span class="line">for (const item of person2) <span class="token punctuation">{</span></span>
<span class="line">  console.log(item);</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">想象之中</span>
<span class="line">有何不可</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何中断迭代器-停止继续遍历" tabindex="-1"><a class="header-anchor" href="#如何中断迭代器-停止继续遍历"><span>如何中断迭代器，停止继续遍历</span></a></h3>
<p>迭代器在遍历数据对象的过程中，如果我们希望在符合指定条件下停止继续遍历，那么，我们可以使用 break、return、throw 等关键字中断迭代器。其中， break 关键字用得最多。</p>
<p>此外，我们还可在迭代器函数中添加一个名为<code v-pre>return()</code>的方法，这个方法的作用是监听迭代器的中断，书写代码的位置与 <code v-pre>next()</code>方法并列。</p>
<p>代码举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myObj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token string">'web'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 将普通对象 myObj2 封装为可迭代对象，目的是遍历 myObj2 的键值对</span></span>
<span class="line">  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> entries <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取对象的键值对</span></span>
<span class="line">    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> iterator <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> entries<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> entries<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 【关键代码】监听迭代器的中断</span></span>
<span class="line">      <span class="token function-variable function">return</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'迭代器被中断了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> iterator<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 可迭对象可以进行 for of 操作，遍历对象的键值对</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> myObj2<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 【关键代码】如果发现 value 为 qianguyihao，则中断迭代器，停止继续遍历</span></span>
<span class="line">    <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">name qianguyihao</span>
<span class="line">迭代器被中断了</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据打印结果可以看出，迭代器只遍历了 myObj2 对象的第一个元素，符合指定条件后，通过 break 语句中断了迭代器，停止了继续遍历；与此同时，迭代器中的 return() 函数监听到了迭代器的中断。对了，return() 函数中，还需要写 <code v-pre>return { done: true }</code>表示迭代器的使命已结束；如果不写这行则会报错：<code v-pre>Uncaught TypeError: Iterator result undefined is not an object</code>。</p>
<h2 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器"><span>生成器</span></a></h2>
<h3 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2"><span>概念</span></a></h3>
<p>我们平时写的函数，基本是通过 return 返回值，或者发生异常，函数才会终止执行。这还不够灵活。</p>
<p><strong>生成器</strong>是 ES6 中新增的一种特殊的函数，所以也称为“生成器函数”。它可以更灵活地控制函数什么时候执行， 什么时候暂停等等，<strong>控制精度很高</strong>。</p>
<p>生成器函数使用 <code v-pre>function*</code> 语法编写。最初调用时，生成器函数不执行任何代码，而是返回一个称为 Generator 的迭代器。通过调用生成器的 next() 方法时，Generator 函数将执行，直到遇到 yield 关键字时暂停执行。</p>
<p>可以根据需要多次调用该函数，并且每次都返回一个新的 Generator，但每个 Generator 只能迭代一次。</p>
<h3 id="生成器函数和普通函数的区别" tabindex="-1"><a class="header-anchor" href="#生成器函数和普通函数的区别"><span>生成器函数和普通函数的区别</span></a></h3>
<ul>
<li>生成器函数需要在 <code v-pre>function</code> 关键字后面加一个符号 <code v-pre>*</code>。</li>
<li>生成器函数可以通过 <code v-pre>yield</code> 关键字控制函数的执行流程。</li>
<li>生成器函数的返回值是一个生成器（Generator）。生成器是一种特殊的迭代器。</li>
</ul>
<h2 id="生成器函数拆解" tabindex="-1"><a class="header-anchor" href="#生成器函数拆解"><span>生成器函数拆解</span></a></h2>
<h3 id="定义一个生成器函数" tabindex="-1"><a class="header-anchor" href="#定义一个生成器函数"><span>定义一个生成器函数</span></a></h3>
<p>如果要定义一个生成器函数，我们需要在<code v-pre>function</code>单词和函数名之间加一个<code v-pre>*</code>符号。</p>
<p><code v-pre>*</code>符号有下面四种写法，最推荐的是第一种写法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*code*/</span> <span class="token punctuation">}</span> <span class="token comment">// 推荐写法</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">generator2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*code*/</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">generator3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*code*/</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span><span class="token function">generator4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*code*/</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>截图如下：</p>
<p><img src="https://img.smyhvae.com/image-20230624184902630.png" alt="image-20230624184902630"></p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yield-表达式" tabindex="-1"><a class="header-anchor" href="#yield-表达式"><span>yield 表达式</span></a></h3>
<p>但是上面的代码写完后，并不会有打印结果，因为<strong>我们还需要调用生成器的 next()方法，生成器函数才会执行，直到遇到 yield 关键字后暂停执行</strong>；反反复复，<strong>直到遇到 return关键字，或者遇到函数末尾时，结束执行</strong>。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 通过 * 符号，定义一个生成器函数</span></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">yield</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 下面这行 console.log('a') 会跟 yield 一起执行</span></span>
<span class="line">  <span class="token keyword">yield</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回一个生成器对象</span></span>
<span class="line"><span class="token comment">// 调用生成器的 next()方法，生成器才会执行，直到遇到 yield 后暂停执行</span></span>
<span class="line">generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这行代码执行后，打印结果是：1</span></span>
<span class="line">generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这行代码执行后，打印结果是：1 2 a</span></span>
<span class="line">generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这行代码执行后，打印结果是：1 2 a 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仔细看注释，生成器 generator 每调用一次 next() ，foo()函数里的代码就往下执行一次，直到遇到 yield 后暂停。</p>
<h3 id="next-方法的返回值" tabindex="-1"><a class="header-anchor" href="#next-方法的返回值"><span>next() 方法的返回值</span></a></h3>
<p>生成器既然是一种特殊的迭代器，那么它也有 next()方法，而且 next()方法里同样有 done 和 value 这两个属性。我们来看看这两个属性的<strong>默认属性值</strong>是什么：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 通过 * 符号，定义一个生成器函数</span></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">yield</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">yield</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 执行 return 之后，函数不再继续往下走了，生成器的 next()方法的 done 属性值为 true。</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段4'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 执行生成器函数，返回一个生成器对象</span></span>
<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 调用生成器的 next()方法，生成器才会执行，直到遇到 yield 后暂停执行；遇到 return关键字，或者遇到函数末尾时，结束执行。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">阶段1</span>
<span class="line">{value: undefined, done: false}</span>
<span class="line"></span>
<span class="line">阶段2</span>
<span class="line">{value: undefined, done: false}</span>
<span class="line"></span>
<span class="line">阶段3</span>
<span class="line">{value: undefined, done: true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的打印结果可以看出，生成器函数在遇到函数的末尾，或者遇到 return 之后，函数就不再继续往下走了，next()方法的 done 属性值为 true。</p>
<p>还可以看到，next()方法的 value 属性值默认为 undefined，<strong>如果某些情况下我们希望 value属性有值</strong>的话，可以通过 yield 关键字进行传递。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 通过 * 符号，定义一个生成器函数</span></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">yield</span> <span class="token string">'a'</span><span class="token punctuation">;</span> <span class="token comment">// 【关键代码】yield 后面写的内容，就是传递给 next() 方法的 value 属性值</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">yield</span> <span class="token string">'b'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 这里的 return，相当于 return undefined</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段4'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 执行生成器函数，返回一个生成器对象</span></span>
<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 调用生成器的 next()方法，生成器才会执行，直到遇到 yield 后暂停执行；遇到 return关键字，或者遇到函数末尾时，结束执行。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印生成器对象的 next()方法</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">阶段1</span>
<span class="line">{value: 'a', done: false}</span>
<span class="line"></span>
<span class="line">阶段2</span>
<span class="line">{value: 'b', done: false}</span>
<span class="line"></span>
<span class="line">阶段3</span>
<span class="line">{value: undefined, done: true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next-方法的参数" tabindex="-1"><a class="header-anchor" href="#next-方法的参数"><span>next() 方法的参数</span></a></h3>
<p>根据前面的代码实例得知，生成器函数是分多个阶段执行的。此时有一个诉求：如何给当前阶段传递参数呢？</p>
<p>答案是：可以通过当前阶段 next() 方法的参数，给当前阶段传值。这个参数值会成为<strong>上一个阶段</strong> yield 语句的返回值。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 通过 * 符号，定义一个生成器函数</span></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 【关键代码】第二次调用 next()方法时，通过 res2 接收 next()方法的参数值</span></span>
<span class="line">  <span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">'a'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段2:'</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 第三次调用 next()方法时，通过 res3 接收 next()方法的参数值</span></span>
<span class="line">  <span class="token keyword">const</span> res3 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">'b'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段3:'</span><span class="token punctuation">,</span> res3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 执行生成器函数，返回一个生成器对象</span></span>
<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 调用生成器的 next()方法，生成器才会执行，直到遇到 yield 后暂停执行；遇到 return关键字，或者遇到函数末尾时，结束执行。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行第一阶段</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'next2'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行第二阶段，并传参</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'next3'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 指定第三阶段</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">阶段1</span>
<span class="line">{value: 'a', done: false}</span>
<span class="line"></span>
<span class="line">阶段2: next2</span>
<span class="line">{value: 'b', done: false}</span>
<span class="line"></span>
<span class="line">阶段3: ntext3</span>
<span class="line">{value: undefined, done: true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次学习时，这段代码可能比较难理解。在理解时需要注意的是，将 next2 这个属性值赋值给 res2，这个操作的执行时机是在<strong>第二阶段的最开始</strong>做的，不是在第一阶段的末尾做的。并且，这个属性值是通过第一阶段的 yield 返回值接收的。</p>
<h3 id="如何中途结束生成器的执行" tabindex="-1"><a class="header-anchor" href="#如何中途结束生成器的执行"><span>如何中途结束生成器的执行</span></a></h3>
<p>如果想在中途结束生成器的执行，有三种方式：</p>
<ul>
<li>方式1：return 语句。这个在前面已经讲过。</li>
<li>方式2：通过生成器的 return() 函数。</li>
<li>方式3：通过生成器的 throw() 函数抛出异常。</li>
</ul>
<p>方式2的代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 通过 * 符号，定义一个生成器函数</span></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">'a'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段2:'</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> res3 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">'b'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段3:'</span><span class="token punctuation">,</span> res3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 执行生成器函数，返回一个生成器对象</span></span>
<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 【关键代码】通过生成器的 return()方法， 立即结束 foo 函数的执行</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token string">'next2'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 这行写了也没用，阶段2、阶段3都不会执行的</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'next3'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">阶段1</span>
<span class="line">{value: 'a', done: false}</span>
<span class="line"></span>
<span class="line">{value: 'next2', done: true}</span>
<span class="line"></span>
<span class="line">{value: undefined, done: true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码可以看出，阶段2、阶段3都不会执行；return()方法里的参数传给了 value 属性。</p>
<p>方式3的代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 通过 * 符号，定义一个生成器函数</span></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">'a'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段2:'</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> res3 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">'b'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'阶段3:'</span><span class="token punctuation">,</span> res3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 执行生成器函数，返回一个生成器对象</span></span>
<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 【关键代码】通过生成器的 throw()方法抛出异常， 立即结束 foo 函数的执行</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'next2 error'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 这行写了也没用，阶段2、阶段3都不会执行的</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'next3'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">阶段1</span>
<span class="line">{value: 'a', done: false}</span>
<span class="line"></span>
<span class="line">Uncaught Error: next2 error</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成器的应用" tabindex="-1"><a class="header-anchor" href="#生成器的应用"><span>生成器的应用</span></a></h2>
<h3 id="用生成器代替迭代器" tabindex="-1"><a class="header-anchor" href="#用生成器代替迭代器"><span>用生成器代替迭代器</span></a></h3>
<p>在前面的迭代器内容中，我们学习过“将普通对象封装为可迭代对象”。那段代码改用生成器的写法也可以实现。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myObj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token string">'web'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 将普通对象 myObj2 封装为可迭代对象，目的是遍历 myObj2 的键值对。通过生成器 function* 的的方式实现</span></span>
<span class="line">  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> entries <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取对象的键值对</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> entries<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 【关键代码】通过 yield 控制迭代器分阶段执行；并将每个阶段的值存放到迭代器的 next() 方法的 value 属性中</span></span>
<span class="line">      <span class="token keyword">yield</span> entries<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 写法1：通过 for ... of 遍历可迭代对象</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> myObj2<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 写法2：通过 next() 方法遍历可迭代对象。与写法1等价。</span></span>
<span class="line"><span class="token keyword">const</span> iterator <span class="token operator">=</span> myObj2<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">name qianguyihao</span>
<span class="line">demo.html:30 skill web</span>
<span class="line">---</span>
<span class="line">done: false, value:['name', 'qianguyihao']</span>
<span class="line">done: false, value:['skill', 'web']</span>
<span class="line">done: true, value:undefined</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在指定数字范围内生成一个值" tabindex="-1"><a class="header-anchor" href="#在指定数字范围内生成一个值"><span>在指定数字范围内生成一个值</span></a></h3>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createValueGenerator</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 前闭后开</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">yield</span> i<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> valueGenerator <span class="token operator">=</span> <span class="token function">createValueGenerator</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>valueGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>valueGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>valueGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{value: 1, done: false}</span>
<span class="line">{value: 2, done: false}</span>
<span class="line">{value: undefined, done: true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yield-的使用" tabindex="-1"><a class="header-anchor" href="#yield-的使用"><span>yield* 的使用</span></a></h2>
<h3 id="使用-yield-迭代可迭代对象" tabindex="-1"><a class="header-anchor" href="#使用-yield-迭代可迭代对象"><span>使用 yield* 迭代可迭代对象</span></a></h3>
<p>语法格式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">yield</span><span class="token operator">*</span> 某个可迭代对象</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>yield*</code> 是 yield 的一种语法糖，也就是一种简写形式。它会依次迭代一个<strong>可迭对对象</strong>，每次迭代一个值，并且会产生一个<strong>新的可迭代对象</strong>。</p>
<p>我们在前面讲过可迭代对象的应用场景，简单提到过 <code v-pre>yield*</code>，接下来讲讲它具体如何使用的。</p>
<p>先来看下面这段代码，用生成器的方式迭代数组：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createArrayGenerator</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">yield</span> item<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> myArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arrGenerator <span class="token operator">=</span> <span class="token function">createArrayGenerator</span><span class="token punctuation">(</span>myArr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{value: 'a', done: false}</span>
<span class="line">{value: 'b', done: false}</span>
<span class="line">{value: 'c', done: false}</span>
<span class="line">{value: undefined, done: true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码，换成 <code v-pre>yield*</code> 的写法会非常简洁，如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createArrayGenerator</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 【关键代码】yield* 的后面必须是一个可迭代对象</span></span>
<span class="line">  <span class="token keyword">yield</span><span class="token operator">*</span> arr<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> myArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arrGenerator <span class="token operator">=</span> <span class="token function">createArrayGenerator</span><span class="token punctuation">(</span>myArr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrGenerator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果不变。代码解释：<code v-pre>yield*</code> 的后面必须是一个可迭代对象，而且 createArrayGenerator()函数会返回一个可迭代对象 arrGenerator。</p>
<h3 id="将自定义类封装为可迭代对象-1" tabindex="-1"><a class="header-anchor" href="#将自定义类封装为可迭代对象-1"><span>将自定义类封装为可迭代对象</span></a></h3>
<p>我们在前面学习迭代器时，曾通过迭代器“将自定义类封装为可迭代对象”。那段代码，改用生成器 <code v-pre>yield*</code> 的方式也可以实现。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> arr<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 【关键代码】在定义生成器函数时，如果没有 function 这个单词的话，也可以直接在函数名的前面添加 * 符号。</span></span>
<span class="line">  <span class="token operator">*</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 【关键代码】一行代码，直接遍历 this.arr 这个可迭代对象，同时返回一个新的可迭代对象</span></span>
<span class="line">    <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'千古壹号'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'前端'</span><span class="token punctuation">,</span> <span class="token string">'工程师'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'许嵩'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'想象之中'</span><span class="token punctuation">,</span> <span class="token string">'有何不可'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Person的实例已经封装为可迭代对象了，可以通过 for ... of 进行遍历</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> person1<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 也可以通过 Symbol.iterator() 方法进行遍历</span></span>
<span class="line"><span class="token keyword">const</span> personIterator <span class="token operator">=</span> person2<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">前端</span>
<span class="line">工程师</span>
<span class="line">---</span>
<span class="line">{value: '想象之中', done: false}</span>
<span class="line">{value: '有何不可', done: false}</span>
<span class="line">{value: undefined, done: true}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


