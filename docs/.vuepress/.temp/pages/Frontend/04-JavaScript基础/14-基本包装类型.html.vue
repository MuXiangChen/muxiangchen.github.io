<template><div><h2 id="基本数据类型不能绑定属性和方法" tabindex="-1"><a class="header-anchor" href="#基本数据类型不能绑定属性和方法"><span>基本数据类型不能绑定属性和方法</span></a></h2>
<p>属性和方法只能添加给对象，不能添加给基本数据类型。我们拿字符串来举例。</p>
<p><strong>1、基本数据类型：</strong></p>
<p>基本数据类型<code v-pre>string</code>是<strong>无法绑定属性和方法</strong>的。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">str<span class="token punctuation">.</span>aaa <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印结果为：string</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>aaa<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印结果为：undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，当我们尝试打印<code v-pre>str.aaa</code>的时候，会发现打印结果为：undefined。也就是说，不能给 <code v-pre>string</code> 绑定属性和方法。</p>
<p>当然，我们可以打印 str.length、str.indexOf(&quot;m&quot;)等等。因为这两个方法的底层做了数据类型转换（<strong>临时</strong>将 <code v-pre>string</code> 字符串转换为 <code v-pre>String</code> 对象，然后再调用内置方法），也就是我们在下一段将要讲到的<strong>包装类</strong>。</p>
<p><strong>2、引用数据类型：</strong></p>
<p>引用数据类型<code v-pre>String</code>是可以绑定属性和方法的。如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> strObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'smyhvae'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">strObj<span class="token punctuation">.</span>aaa <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strObj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> strObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印结果：Object</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strObj<span class="token punctuation">.</span>aaa<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20180202_1351.png" alt=""></p>
<p>内置对象 Number 也有一些自带的方法，比如：</p>
<ul>
<li>
<p>Number.MAX_VALUE;</p>
</li>
<li>
<p>Number.MIN_VALUE;</p>
</li>
</ul>
<p>内置对象 Boolean 也有一些自带的方法，但是用的不多。</p>
<h3 id="基本包装类型" tabindex="-1"><a class="header-anchor" href="#基本包装类型"><span>基本包装类型</span></a></h3>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3>
<p>我们都知道，JS 中的数据类型包括以下几种。</p>
<ul>
<li>
<p>基本数据类型：String 字符串、Number 数值、BigInt 大型数值、Boolean 布尔值、Null 空值、Undefined 未定义、Symbol。</p>
</li>
<li>
<p>引用数据类型：Object 对象。</p>
</li>
</ul>
<p>JS 为我们提供了三个<strong>基本包装类</strong>：</p>
<ul>
<li>
<p>String()：将基本数据类型字符串，转换为 String 对象。</p>
</li>
<li>
<p>Number()：将基本数据类型的数字，转换为 Number 对象。</p>
</li>
<li>
<p>Boolean()：将基本数据类型的布尔值，转换为 Boolean 对象。</p>
</li>
</ul>
<p>通过上面这这三个包装类，我们可以<strong>将基本数据类型的数据转换为对象</strong>。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'qianguyihao'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：string</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注意，打印结果：object</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>需要注意的是</strong>：我们在实际应用中一般不会使用基本数据类型的<strong>对象</strong>。如果使用基本数据类型的对象，在做一些比较时可能会带来一些<strong>不可预期</strong>的结果。</p>
<p>比如说：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> boo1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> boo2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>boo1 <span class="token operator">===</span> boo2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果竟然是：false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再比如说：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> boo3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>boo3<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'qianguyihao'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这行代码竟然执行了</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本包装类型的作用" tabindex="-1"><a class="header-anchor" href="#基本包装类型的作用"><span>基本包装类型的作用</span></a></h3>
<p>当我们对一些基本数据类型的值去调用属性和方法时，JS引擎会<strong>临时使用包装类将基本数据类型转换为引用数据类型</strong>（即“隐式类型转换”），这样的话，基本数据类型就有了属性和方法，然后再调用对象的属性和方法；调用完以后，再将其转换为基本数据类型。</p>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：11</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>比如，上面的代码，执行顺序是这样的：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 步骤（1）：把简单数据类型 string 转换为 引用数据类型  String，保存到临时变量中</span></span>
<span class="line"><span class="token keyword">var</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'qianguyihao'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 步骤（2）：把临时变量的值 赋值给 str</span></span>
<span class="line">str <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//  步骤（3）：销毁临时变量</span></span>
<span class="line">temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在底层-字符串以字符数组的形式保存" tabindex="-1"><a class="header-anchor" href="#在底层-字符串以字符数组的形式保存"><span>在底层，字符串以字符数组的形式保存</span></a></h2>
<p>在底层，字符串是以字符数组的形式保存的。代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'smyhvae'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取字符串的长度</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取字符串中的第3个字符（下标为2的字符）</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，<code v-pre>smyhvae</code>这个字符串在底层是以<code v-pre>[&quot;s&quot;, &quot;m&quot;, &quot;y&quot;, &quot;h&quot;, &quot;v&quot;, &quot;a&quot;, &quot;e&quot;]</code>的形式保存的。因此，我们既可以获取字符串的长度，也可以获取指定索引 index 位置的单个字符。这很像数组中的操作。</p>
<p>再比如，String 对象的很多内置方法，也可以直接给字符串用。此时，也是临时将字符串转换为 String 对象，然后再调用内置方法。</p>
<h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


