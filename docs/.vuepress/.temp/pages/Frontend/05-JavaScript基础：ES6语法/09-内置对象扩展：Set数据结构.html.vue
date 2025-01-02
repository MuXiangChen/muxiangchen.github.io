<template><div><h2 id="set-数据结构" tabindex="-1"><a class="header-anchor" href="#set-数据结构"><span>Set 数据结构</span></a></h2>
<h3 id="set-数据结构的介绍" tabindex="-1"><a class="header-anchor" href="#set-数据结构的介绍"><span>Set 数据结构的介绍</span></a></h3>
<p>ES6 提供了 新的数据结构 Set。Set 类似于<strong>数组</strong>，但成员的值都是<strong>唯一</strong>的，没有重复的值。</p>
<p>Set 的应用有很多。比如，在 H5 页面的搜索功能里，用户可能会多次搜索重复的关键字；但是在数据存储上，不需要存储重复的关键字。此时，我们就可以用 Set 来存储用户的搜索记录，Set 内部会自动判断值是否重复，如果重复，则不会进行存储，十分方便。</p>
<h3 id="生成-set-数据结构" tabindex="-1"><a class="header-anchor" href="#生成-set-数据结构"><span>生成 Set 数据结构</span></a></h3>
<p>Set 本身就是一个构造函数，可通过 <code v-pre>new Set()</code> 生成一个 Set 的实例。</p>
<p>举例 1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> set1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set1<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例 2</strong>、可以接收一个<strong>数组</strong>作为参数，实现<strong>数组去重</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> set2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'张三'</span><span class="token punctuation">,</span> <span class="token string">'李四'</span><span class="token punctuation">,</span> <span class="token string">'王五'</span><span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注意，这个数组里有重复的值</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注意，这里的 set2 并不是数组，而是一个单纯的 Set 数据结构</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {"张三", "李四", "王五"}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 通过扩展运算符，拿到 set 中的元素（用逗号分隔的序列）</span></span>
<span class="line"><span class="token comment">// ...set2 //  "张三", "李四", "王五"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注意，到这一步，才获取到了真正的数组</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>set2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["张三", "李四", "王五"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上方的第一行代码，虽然参数里传递的是数组结构，但拿到的 <code v-pre>set2</code> 不是数组结构，而是 Set 结构，而且里面元素是去重了的。通过 <code v-pre>[...set2]</code>就可以拿到<code v-pre>set2</code>对应的数组。</p>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="https://img.smyhvae.com/20200102.png" alt=""></p>
</div></template>


