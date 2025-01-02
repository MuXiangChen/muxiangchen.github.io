<template><div><h2 id="内置对象简介" tabindex="-1"><a class="header-anchor" href="#内置对象简介"><span>内置对象简介</span></a></h2>
<blockquote>
<p>JavaScript 中的对象分为3种：自定义对象、内置对象、浏览器对象。</p>
</blockquote>
<blockquote>
<p>前面两种对象：是JS的基础内容，属于 ECMAScript； 第三个浏览器对象：属于JS独有，即 JS 内置的API。</p>
</blockquote>
<p><strong>内置对象</strong>：就是指这个语言自带的一些对象，供开发者使用，这些对象提供了一些常用或者基本而必要的功能（属性和方法）。</p>
<p>内置对象最大的优点就是帮助我们快速开发。</p>
<p><strong>JavaScript的内置对象</strong>：</p>
<table>
<thead>
<tr>
<th style="text-align:left">内置对象</th>
<th style="text-align:left">对象说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Arguments</td>
<td style="text-align:left">函数参数集合</td>
</tr>
<tr>
<td style="text-align:left">Array</td>
<td style="text-align:left">数组</td>
</tr>
<tr>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">布尔对象</td>
</tr>
<tr>
<td style="text-align:left">Math</td>
<td style="text-align:left">数学对象</td>
</tr>
<tr>
<td style="text-align:left">Date</td>
<td style="text-align:left">日期时间</td>
</tr>
<tr>
<td style="text-align:left">Error</td>
<td style="text-align:left">异常对象</td>
</tr>
<tr>
<td style="text-align:left">Function</td>
<td style="text-align:left">函数构造器</td>
</tr>
<tr>
<td style="text-align:left">Number</td>
<td style="text-align:left">数值对象</td>
</tr>
<tr>
<td style="text-align:left">Object</td>
<td style="text-align:left">基础对象</td>
</tr>
<tr>
<td style="text-align:left">RegExp</td>
<td style="text-align:left">正则表达式对象</td>
</tr>
<tr>
<td style="text-align:left">String</td>
<td style="text-align:left">字符串对象</td>
</tr>
</tbody>
</table>
<h2 id="字符串前言" tabindex="-1"><a class="header-anchor" href="#字符串前言"><span>字符串前言</span></a></h2>
<blockquote>
<p>在日常开发中，String 对象（字符串对象）的使用频率是非常高的。所以有必要详细介绍。</p>
</blockquote>
<p>需要注意的是：<strong>字符串的所有方法，都不会改变原字符串</strong>（字符串的不可变性），操作完成后会返回一个新的值。</p>
<p>字符串的常见方法如下。</p>
<h2 id="查找字符串" tabindex="-1"><a class="header-anchor" href="#查找字符串"><span>查找字符串</span></a></h2>
<h3 id="_1、indexof-lastindexof-获取字符串中指定内容的索引" tabindex="-1"><a class="header-anchor" href="#_1、indexof-lastindexof-获取字符串中指定内容的索引"><span>1、indexOf()/lastIndexOf()：获取字符串中指定内容的索引</span></a></h3>
<blockquote>
<p>这个方法，是使用频率最高的一个方法。</p>
</blockquote>
<p><strong>语法 1</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">索引值 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>想要查询的字符串<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>备注：<code v-pre>indexOf()</code> 是从前向后查找字符串的位置。同理，<code v-pre>lastIndexOf()</code>是从后向前寻找。</p>
<p><strong>解释</strong>：可以检索一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回其<strong>第一次出现</strong>的索引；如果没有找到指定的内容，则返回 -1。</p>
<p>因此可以得出一个重要技巧：</p>
<ul>
<li>
<p><strong>如果获取的索引值为 0，说明字符串是以查询的参数为开头的</strong>。</p>
</li>
<li>
<p>如果获取的索引值为-1，说明这个字符串中没有指定的内容。</p>
</li>
</ul>
<p>举例 1：(查找单个字符)</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'abcdea'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//给字符查索引(索引值为0,说明字符串以查询的参数为开头)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20180202_1420.png" alt=""></p>
<p>举例 2：（查找字符串）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'yi'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>语法 2</strong>：</p>
<p>这个方法还可以指定第二个参数，用来指定查找的<strong>起始位置</strong>。语法如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">索引值 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>想要查询的字符串<span class="token punctuation">,</span> <span class="token punctuation">[</span>起始位置<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例 3：（两个参数时，需要特别注意）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从下标为3的位置开始查找 'a'这个字符 【重要】</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：9</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，<code v-pre>indexOf()</code>方法中携带了两个参数，具体解释请看注释。</p>
<h3 id="indexof-举例" tabindex="-1"><a class="header-anchor" href="#indexof-举例"><span>indexOf 举例</span></a></h3>
<p><strong>案例</strong>：查找字符串&quot;qianguyihao&quot;中，所有 <code v-pre>a</code> 出现的位置以及次数。</p>
<p>思路：</p>
<p>（1）先查找第一个 a 出现的位置。</p>
<p>（2）只要 indexOf 返回的结果不是 -1 就继续往后查找。</p>
<p>（3）因为 indexOf 只能查找到第一个，所以后面的查找，可以利用第二个参数，在当前索引加 1，从而继续查找。</p>
<p>代码实现：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> index <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    num<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 每打印一次，就计数一次</span></span>
<span class="line">    index <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a 出现的次数是: '</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、search-获取字符串中指定内容的索引-参数里一般是正则" tabindex="-1"><a class="header-anchor" href="#_2、search-获取字符串中指定内容的索引-参数里一般是正则"><span>2、search()：获取字符串中指定内容的索引（参数里一般是正则）</span></a></h3>
<p><strong>语法</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">索引值 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>想要查找的字符串<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">索引值 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>正则表达式<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：<code v-pre>search()</code> 方法里的参数，既可以传字符串，也可以传正则表达式。</p>
<p><strong>解释</strong>：可以检索一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回其<strong>第一次出现</strong>的索引；如果没有找到指定的内容，则返回 -1。</p>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">'yi'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：6</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">yi</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：上方的<code v-pre>/yi/i</code>采用的是正则表达式的写法，意思是，让 name去匹配字符<code v-pre>yi</code>，忽略大小写。我们在后面会专门介绍正则表达式。</p>
<h3 id="_3、includes-字符串中是否包含指定的内容" tabindex="-1"><a class="header-anchor" href="#_3、includes-字符串中是否包含指定的内容"><span>3、includes()：字符串中是否包含指定的内容</span></a></h3>
<p><strong>语法</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">布尔值 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>想要查找的字符串<span class="token punctuation">,</span> <span class="token punctuation">[</span>position<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>解释</strong>：判断一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回 true；否则返回 false。</p>
<p>参数中的 <code v-pre>position</code>：如果不指定，则默认为0；如果指定，则规定了检索的起始位置。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'yi'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'haha'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：false</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'yi'</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、startswith-字符串是否以指定的内容开头" tabindex="-1"><a class="header-anchor" href="#_4、startswith-字符串是否以指定的内容开头"><span>4、startsWith()：字符串是否以指定的内容开头</span></a></h3>
<p><strong>语法</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">布尔值 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>想要查找的内容<span class="token punctuation">,</span> <span class="token punctuation">[</span>position<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>解释</strong>：判断一个字符串是否以指定的子字符串开头。如果是，则返回 true；否则返回 false。</p>
<p><strong>参数中的position</strong>：</p>
<ul>
<li>
<p>如果不指定，则默认为0。</p>
</li>
<li>
<p>如果指定，则规定了<strong>检索的起始位置</strong>。检索的范围包括：这个指定位置开始，直到字符串的末尾。即：[position, str.length)</p>
</li>
</ul>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'abcdefg'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 因为指定了起始位置为3，所以是在 defg 这个字符串中检索。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'d'</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、endswith-字符串是否以指定的内容结尾" tabindex="-1"><a class="header-anchor" href="#_5、endswith-字符串是否以指定的内容结尾"><span>5、endsWith()：字符串是否以指定的内容结尾</span></a></h3>
<p><strong>语法</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">布尔值 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span>想要查找的内容<span class="token punctuation">,</span> <span class="token punctuation">[</span>position<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>解释</strong>：判断一个字符串是否以指定的子字符串结尾。如果是，则返回 true；否则返回 false。</p>
<p><strong>参数中的position</strong>：</p>
<ul>
<li>
<p>如果不指定，则默认为 str.length。</p>
</li>
<li>
<p>如果指定，则规定了<strong>检索的结束位置</strong>。检索的范围包括：从第一个字符串开始，直到这个指定的位置。即：[0, position)</p>
</li>
<li>
<p>或者你可以这样简单理解：endsWith() 方法里的position，表示<strong>检索的长度</strong>。</p>
</li>
</ul>
<p>注意：startsWith() 和 endsWith()这两个方法，他们的 position 的含义是不同的，请仔细区分。</p>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'abcdefg'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'g'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'f'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 因为指定了截止位置为3，所以是在 abc 这个长度为3字符串中检索</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意看上方的注释。</p>
<p>参考链接：<a href="https://www.softwhy.com/article-2885-1.html" target="_blank" rel="noopener noreferrer">JavaScript endsWith()介绍</a></p>
<h2 id="获取指定位置的字符" tabindex="-1"><a class="header-anchor" href="#获取指定位置的字符"><span>获取指定位置的字符</span></a></h2>
<h3 id="_1、charat-index" tabindex="-1"><a class="header-anchor" href="#_1、charat-index"><span>1、charAt(index)</span></a></h3>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">字符 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：返回字符串指定位置的字符。这里的 <code v-pre>str.charAt(index)</code>和<code v-pre>str[index]</code>的效果是一样的。</p>
<p>注意：字符串中第一个字符的下标是 0。如果参数 index 不在 [0, string.length) 之间，该方法将返回一个空字符串。</p>
<p><strong>代码举例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'smyhvae'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20180202_1401.png" alt=""></p>
<p>上面这个例子一般不用。一般打印数组和 json 的时候用索引，打印 String 不建议用索引。</p>
<h3 id="_2、str-index" tabindex="-1"><a class="header-anchor" href="#_2、str-index"><span>2、str[index]</span></a></h3>
<p><code v-pre>str.charAt(index)</code>和<code v-pre>str[index]</code>的效果是一样的，不再赘述。区别在于：<code v-pre>str[index]</code>是 H5 标准里新增的特性。</p>
<h3 id="_3、charcodeat-index" tabindex="-1"><a class="header-anchor" href="#_3、charcodeat-index"><span>3、charCodeAt(index)</span></a></h3>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">字符 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：返回字符串指定位置的字符的 Unicode 编码。不会修改原字符串。</p>
<p>在实际应用中，通过这个方法，我们可以判断用户按下了哪个按键。</p>
<p><strong>代码举例</strong>：打印字符串的<strong>占位长度</strong>。</p>
<p>提示：一个英文占一个位置，一个中文占两个位置。</p>
<p>思路：判断该字符是否在 0-127 之间（在的话是英文，不在是非英文）。</p>
<p>代码实现：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">//    sort();   底层用到了charCodeAt();</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'I love my country!我你爱中国！'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//需求：求一个字符串占有几个字符位。</span></span>
<span class="line">    <span class="token comment">//思路；如果是英文，站一个字符位，如果不是英文占两个字符位。</span></span>
<span class="line">    <span class="token comment">//技术点：判断该字符是否在0-127之间。（在的话是英文，不在是非英文）</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">getZFWlength</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//定义方法：字符位</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getZFWlength</span><span class="token punctuation">(</span><span class="token parameter">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//定义一个计数器</span></span>
<span class="line">        <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> string<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//对每一位字符串进行判断，如果Unicode编码在0-127，计数器+1；否则+2</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">128</span> <span class="token operator">&amp;&amp;</span> string<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                count <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> count<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">    30</span>
<span class="line">    24</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>从打印结果可以看出：字符串的长度是 24，但是却占了 30 个字符位（一个中文占两个字符位）。</p>
<p>另外，sort()方法其实底层也是用到了 charCodeAt()，因为用到了 Unicode 编码。</p>
<h2 id="字符串截取" tabindex="-1"><a class="header-anchor" href="#字符串截取"><span>字符串截取</span></a></h2>
<h3 id="_1、slice" tabindex="-1"><a class="header-anchor" href="#_1、slice"><span>1、slice()</span></a></h3>
<blockquote>
<p>slice() 方法用的最多。</p>
</blockquote>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">新字符串 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>开始索引<span class="token punctuation">,</span> 结束索引<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//两个参数都是索引值。包左不包右。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：从字符串中截取指定的内容。不会修改原字符串，而是将截取到的内容返回。</p>
<p>注意：上面的参数，包左不包右。参数举例如下：</p>
<ul>
<li>
<p><code v-pre>(2, 5)</code> 截取时，包左不包右。</p>
</li>
<li>
<p><code v-pre>(2)</code> 表示<strong>从指定的索引位置开始，截取到最后</strong>。</p>
</li>
<li>
<p><code v-pre>(-3)</code> 表示从倒数第三个开始，截取到最后。</p>
</li>
<li>
<p><code v-pre>(1, -1)</code> 表示从第一个截取到倒数第一个。</p>
</li>
<li>
<p><code v-pre>(5, 2)</code> 表示前面的大，后面的小，返回值为空。</p>
</li>
</ul>
<h3 id="_2、substring" tabindex="-1"><a class="header-anchor" href="#_2、substring"><span>2、substring()</span></a></h3>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">新字符串 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>开始索引<span class="token punctuation">,</span> 结束索引<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//两个参数都是索引值。包左不包右。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：从字符串中截取指定的内容。和<code v-pre>slice()</code>类似。</p>
<p><code v-pre>substring()</code>和<code v-pre>slice()</code>是类似的。但不同之处在于：</p>
<ul>
<li>
<p><code v-pre>substring()</code>不能接受负值作为参数。如果传递了一个<strong>负值</strong>，则默认使用 0。</p>
</li>
<li>
<p><code v-pre>substring()</code>还会自动调整参数的位置，如果第二个参数小于第一个，则自动交换。比如说， <code v-pre>substring(1, 0)</code>相当于截取的是第一个字符。</p>
</li>
</ul>
<h3 id="_3、substr" tabindex="-1"><a class="header-anchor" href="#_3、substr"><span>3、substr()</span></a></h3>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">字符串 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>开始索引<span class="token punctuation">,</span> 截取的长度<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：从字符串中截取指定的内容。不会修改原字符串，而是将截取到的内容返回。</p>
<p>注意，这个方法的第二个参数<strong>截取的长度</strong>，不是结束索引。</p>
<p>参数举例：</p>
<ul>
<li>
<p><code v-pre>(2,4)</code> 从索引值为 2 的字符开始，截取 4 个字符。</p>
</li>
<li>
<p><code v-pre>(1)</code> 从指定位置开始，截取到最后。</p>
</li>
<li>
<p><code v-pre>(-3)</code> 从倒数第几个开始，截取到最后。</p>
</li>
</ul>
<p>备注：ECMAscript 没有对 <code v-pre>substr()</code> 方法进行标准化，因此不建议使用它。</p>
<h2 id="string-fromcharcode" tabindex="-1"><a class="header-anchor" href="#string-fromcharcode"><span>String.fromCharCode()</span></a></h2>
<p><code v-pre>String.fromCharCode()</code>：根据字符的 Unicode 编码获取字符。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> result1 <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token number">72</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> result2 <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token number">20013</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：H</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：中</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="concat" tabindex="-1"><a class="header-anchor" href="#concat"><span>concat()</span></a></h2>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    新字符串 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span>； <span class="token comment">//连接两个字符串</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：字符串的连接。</p>
<p>这种方法基本不用，直接把两个字符串相加就好。</p>
<p>是的，你会发现，数组中也有<code v-pre>concat()</code>方法，用于数组的连接。这个方法在数组中用得挺多的。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'qiangu'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'yihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> result <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：qianguyihao</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="split-字符串转换为数组-【重要】" tabindex="-1"><a class="header-anchor" href="#split-字符串转换为数组-【重要】"><span>split()：字符串转换为数组 【重要】</span></a></h2>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">新的数组 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>分隔符<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：通过指定的分隔符，将一个字符串拆分成一个<strong>数组</strong>。不会改变原字符串。</p>
<p>备注：<code v-pre>split()</code>这个方法在实际开发中用得非常多。一般来说，从接口拿到的 json 数据中，经常会收到类似于<code v-pre>&quot;q, i, a, n&quot;</code>这样的字符串，前端需要将这个字符串拆分成<code v-pre>['q', 'i', 'a', 'n']</code>数组，这个时候<code v-pre>split()</code>方法就派上用场了。</p>
<p><strong>代码举例 1</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'qian, gu, yi, hao'</span><span class="token punctuation">;</span> <span class="token comment">// 用逗号隔开的字符串</span></span>
<span class="line"><span class="token keyword">var</span> array <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将字符串 str 拆分成数组，通过逗号来拆分</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果是数组：["qian", " gu", " yi", " hao"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码举例 2</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//split()方法：字符串变数组</span></span>
<span class="line"><span class="token keyword">var</span> str3 <span class="token operator">=</span> <span class="token string">'千古壹号|qianguyihao|许嵩'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'结果1：'</span> <span class="token operator">+</span>str3<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 无参数，表示：把整个字符串作为一个元素添加到数组中。</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str3<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 参数为空字符串，则表示：分隔字符串中每一个字符，分别添加到数组中</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str3<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'|'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 参数为指定字符，表示：用 '|' 分隔字符串。此分隔符将不会出现在数组的任意一个元素中</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str3<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'许'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 同上</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：（都是数组）</p>
<p><img src="http://img.smyhvae.com/20200611_2050.png" alt=""></p>
<h2 id="replace" tabindex="-1"><a class="header-anchor" href="#replace"><span>replace()</span></a></h2>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">新的字符串 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>被替换的子串，新的子串<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：将字符串中的指定内容，替换为新的内容并返回。不会修改原字符串。</p>
<p>注意：这个方法，默认只会替换第一个被匹配到的字符。如果要全局替换，需要使用正则。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//replace()方法：替换</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'Today is fine day,today is fine day !'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'today'</span><span class="token punctuation">,</span> <span class="token string">'tomorrow'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//只能替换第一个today</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">today</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> <span class="token string">'tomorrow'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//这里用到了正则，才能替换所有的today</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="repeat-重复字符串" tabindex="-1"><a class="header-anchor" href="#repeat-重复字符串"><span>repeat()：重复字符串</span></a></h2>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">newStr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>重复的次数<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：将字符串重复指定的次数。会返回新的值，不会修改原字符串。</p>
<p>举例1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印内容：qianguyihaoqianguyihao</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例2：（模糊字符串的后四位）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> telephone <span class="token operator">=</span> <span class="token string">'13088889999'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> mix_telephone <span class="token operator">=</span> telephone<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'*'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 模糊电话号码的后四位</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>telephone<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：13088889999</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mix_telephone<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：1308888****</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trim" tabindex="-1"><a class="header-anchor" href="#trim"><span>trim()</span></a></h2>
<p><code v-pre>trim()</code>：去除字符串前后的空白。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//去除字符串前后的空格，trim();</span></span>
<span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'   a   b   c   '</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20200607_2132.png" alt=""></p>
<h2 id="大小写转换" tabindex="-1"><a class="header-anchor" href="#大小写转换"><span>大小写转换</span></a></h2>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'abcdEFG'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//转换成小写</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//转换成大写</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-方法" tabindex="-1"><a class="header-anchor" href="#html-方法"><span>html 方法</span></a></h2>
<ul>
<li>
<p>anchor() 创建 a 链接</p>
</li>
<li>
<p>big()</p>
</li>
<li>
<p>sub()</p>
</li>
<li>
<p>sup()</p>
</li>
<li>
<p>link()</p>
</li>
<li>
<p>bold()</p>
</li>
</ul>
<p>注意，str.link() 返回值是字符串。</p>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'你好'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">anchor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">big</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">sup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">link</span><span class="token punctuation">(</span><span class="token string">'http://www.baidu.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20180202_1536.png" alt=""></p>
<h2 id="字符串练习" tabindex="-1"><a class="header-anchor" href="#字符串练习"><span>字符串练习</span></a></h2>
<p><strong>练习 1</strong>：&quot;smyhvaevaesmyh&quot;查找字符串中所有 m 出现的位置。</p>
<p>代码实现：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'smyhvaevaesmyh'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//如果指定位置的符号=== "o"</span></span>
<span class="line">    <span class="token comment">//str2[i]</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'m'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>练习 2</strong>：判断一个字符串中出现次数最多的字符，统计这个次数</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'smyhvaevaesmyhvae'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//定义一个json，然后判断json中是够有该属性，如果有该属性，那么值+1;否则创建一个该属性，并赋值为1；</span></span>
<span class="line">    <span class="token keyword">var</span> json <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//判断：如果有该属性，那么值+1;否则创建一个该属性，并赋值为1；</span></span>
<span class="line">        <span class="token keyword">var</span> key <span class="token operator">=</span> str2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>json<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            json<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            json<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'----------------'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//获取json中属性值最大的选项</span></span>
<span class="line">    <span class="token keyword">var</span> maxKey <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">var</span> maxValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> json<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//        if(maxKey == ""){</span></span>
<span class="line">        <span class="token comment">//            maxKey = k;</span></span>
<span class="line">        <span class="token comment">//            maxValue = json[k];</span></span>
<span class="line">        <span class="token comment">//        }else{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>json<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">></span> maxValue<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            maxKey <span class="token operator">=</span> k<span class="token punctuation">;</span></span>
<span class="line">            maxValue <span class="token operator">=</span> json<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//        }</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>maxKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>maxValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20180202_1540.png" alt=""></p>
<h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


