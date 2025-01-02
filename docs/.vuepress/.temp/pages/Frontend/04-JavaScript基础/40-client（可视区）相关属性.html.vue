<template><div><h2 id="client-家族的组成" tabindex="-1"><a class="header-anchor" href="#client-家族的组成"><span>client 家族的组成</span></a></h2>
<h3 id="clientwidth-和-clientheight" tabindex="-1"><a class="header-anchor" href="#clientwidth-和-clientheight"><span>clientWidth 和 clientHeight</span></a></h3>
<p>元素调用时：</p>
<ul>
<li>
<p>clientWidth：获取元素的可见宽度（width + padding）。</p>
</li>
<li>
<p>clientHeight：获取元素的可见高度（height + padding）。</p>
</li>
</ul>
<p>body/html 调用时：</p>
<ul>
<li>
<p>clientWidth：获取网页可视区域宽度。</p>
</li>
<li>
<p>clientHeight：获取网页可视区域高度。</p>
</li>
</ul>
<p><strong>声明</strong>：</p>
<ul>
<li>
<p><code v-pre>clientWidth</code> 和 <code v-pre>clientHeight</code> 属性是只读的，不可修改。</p>
</li>
<li>
<p><code v-pre>clientWidth</code> 和 <code v-pre>clientHeight</code> 的值都是不带 px 的，返回的都是一个数字，可以直接进行计算。</p>
</li>
</ul>
<h3 id="clientx-和-clienty" tabindex="-1"><a class="header-anchor" href="#clientx-和-clienty"><span>clientX 和 clientY</span></a></h3>
<p>event调用：</p>
<ul>
<li>
<p>clientX：鼠标距离可视区域左侧距离。</p>
</li>
<li>
<p>clientY：鼠标距离可视区域上侧距离。</p>
</li>
</ul>
<h3 id="clienttop-和-clientleft" tabindex="-1"><a class="header-anchor" href="#clienttop-和-clientleft"><span>clientTop 和 clientLeft</span></a></h3>
<ul>
<li>
<p>clientTop：盒子的上border。</p>
</li>
<li>
<p>clientLeft：盒子的左border。</p>
</li>
</ul>
<h2 id="三大家族-offset-scroll-client-的区别" tabindex="-1"><a class="header-anchor" href="#三大家族-offset-scroll-client-的区别"><span>三大家族 offset/scroll/client 的区别</span></a></h2>
<h3 id="区别1-宽高" tabindex="-1"><a class="header-anchor" href="#区别1-宽高"><span>区别1：宽高</span></a></h3>
<ul>
<li>
<p>offsetWidth  = width  + padding + border</p>
</li>
<li>
<p>offsetHeight = height + padding + border</p>
</li>
<li>
<p>scrollWidth   = 内容宽度（不包含border）</p>
</li>
<li>
<p>scrollHeight  = 内容高度（不包含border）</p>
</li>
<li>
<p>clientWidth  = width  + padding</p>
</li>
<li>
<p>clientHeight = height + padding</p>
</li>
</ul>
<h3 id="区别2-上左" tabindex="-1"><a class="header-anchor" href="#区别2-上左"><span>区别2：上左</span></a></h3>
<p>offsetTop/offsetLeft：</p>
<ul>
<li>调用者：任意元素。(盒子为主)</li>
<li>作用：距离父系盒子中带有定位的距离。</li>
</ul>
<p>scrollTop/scrollLeft：</p>
<ul>
<li>调用者：document.body.scrollTop（window调用）(盒子也可以调用，但必须有滚动条)</li>
<li>作用：浏览器无法显示的部分（被卷去的部分）。</li>
</ul>
<p>clientY/clientX：</p>
<ul>
<li>调用者：event</li>
<li>作用：鼠标距离浏览器可视区域的距离（左、上）。</li>
</ul>
<h2 id="函数封装-获取浏览器的宽高-可视区域" tabindex="-1"><a class="header-anchor" href="#函数封装-获取浏览器的宽高-可视区域"><span>函数封装：获取浏览器的宽高（可视区域）</span></a></h2>
<p>函数封装如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//函数封装：获取屏幕可视区域的宽高</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">client</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//ie9及其以上的版本的写法</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"width"</span><span class="token operator">:</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"height"</span><span class="token operator">:</span> window<span class="token punctuation">.</span>innerHeight</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>compatMode <span class="token operator">===</span> <span class="token string">"CSS1Compat"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//标准模式的写法（有DTD时）</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"width"</span><span class="token operator">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"height"</span><span class="token operator">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//没有DTD时的写法</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"width"</span><span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"height"</span><span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例：根据浏览器的可视宽度，给定不同的背景的色。</strong></p>
<blockquote>
<p>PS：这个可以用来做响应式。</p>
</blockquote>
<p>代码如下：（需要用到上面的封装好的方法）</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tools.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">//需求：浏览器每次更改大小，判断是否符合某一标准然后给背景上色。</span></span>
<span class="line">    <span class="token comment">//  // >960红色，大于640小于960蓝色，小于640绿色。</span></span>
<span class="line"></span>
<span class="line">    window<span class="token punctuation">.</span>onresize <span class="token operator">=</span> fn<span class="token punctuation">;</span>  <span class="token comment">//页面大小发生变化时，执行该函数。</span></span>
<span class="line">    <span class="token comment">//页面加载的时候直接执行一次函数，确定浏览器可视区域的宽，给背景上色</span></span>
<span class="line">    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//封装成函数，然后指定的时候去调用和绑定函数名</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width <span class="token operator">></span> <span class="token number">960</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width <span class="token operator">></span> <span class="token number">640</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">"green"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上当代码中，<code v-pre>window.onresize</code>事件指的是：在窗口或框架被调整大小时发生。各个事件的解释如下：</p>
<ul>
<li>
<p>window.onscroll        屏幕滑动</p>
</li>
<li>
<p>window.onresize       浏览器大小变化</p>
</li>
<li>
<p>window.onload	        页面加载完毕</p>
</li>
<li>
<p>div.onmousemove    鼠标在盒子上移动（注意：不是盒子移动）</p>
</li>
</ul>
<h2 id="获取显示器的分辨率" tabindex="-1"><a class="header-anchor" href="#获取显示器的分辨率"><span>获取显示器的分辨率</span></a></h2>
<p>比如，我的电脑的显示器分辨率是：1920*1080。</p>
<p>获取显示器的分辨率：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        document<span class="token punctuation">.</span>title <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token string">"    "</span> <span class="token operator">+</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示效果：</p>
<p><img src="http://img.smyhvae.com/20180203_2155.png" alt=""></p>
<p>上图中，不管我如何改变浏览器的窗口大小，title栏显示的值永远都是我的显示器分辨率：1920*1080。</p>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="http://img.smyhvae.com/20190101.png" alt=""></p>
</div></template>


