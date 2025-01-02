<template><div><h2 id="隐藏盒子的几种方式" tabindex="-1"><a class="header-anchor" href="#隐藏盒子的几种方式"><span>隐藏盒子的几种方式</span></a></h2>
<p>隐藏盒子，有以下几种方式：</p>
<p>（1）方式一：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">overflow：hidden;   //隐藏盒子超出的部分</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（2）<strong>方式二</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">display: none;	  隐藏盒子，而且不占位置(用的最多)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>比如，点击<code v-pre>X</code>，关闭京东首页上方的广告栏。</p>
<p>（3）方式三：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">visibility: hidden;   //隐藏盒子，占位置。</span>
<span class="line">visibility: visible;   //让盒子重新显示</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）方式四：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">opacity: 0;       //设置盒子的透明度（不建议，因为内容也会半透明），占位置</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（4）方式五：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Position/top/left/...-999px   //把盒子移得远远的，占位置。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（5）方式六：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">margin-left: 1000px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="设置盒子的半透明" tabindex="-1"><a class="header-anchor" href="#设置盒子的半透明"><span>设置盒子的半透明</span></a></h3>
<p>方式一：<code v-pre>opacity: 0.4</code>。优点是方便。缺点是：里面的内容也会半透明。</p>
<p>方式二：css3的技术来解决半透明。如下：</p>
<ul>
<li>
<p>background: rgba(0,0,0,0.3);</p>
</li>
<li>
<p>background: rgba(0,0,0,.3);</p>
</li>
</ul>
<p>备注：<code v-pre>a</code>指的是alpha透明度。</p>
<h3 id="给标签的形状设置为圆角矩形" tabindex="-1"><a class="header-anchor" href="#给标签的形状设置为圆角矩形"><span>给标签的形状设置为圆角矩形</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">border-radius: 50%;</span>
<span class="line">border-radius: 10px 0 0 10px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行高的问题-儿子把父亲撑开" tabindex="-1"><a class="header-anchor" href="#行高的问题-儿子把父亲撑开"><span>行高的问题：儿子把父亲撑开</span></a></h3>
<p>比如对于下面这样的标签：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	&lt;div></span>
<span class="line">		&lt;a href="">&lt;/a></span>
<span class="line">	&lt;/div></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前置条件：如果我们给父亲div的行高设为31px，然后给儿子a的行高也设置为31</p>
<p>结果：当我们给儿子a设置了字体属性之后，会发现，父亲被撑高为32px了。因为font字体自身会比较大，多撑出了一个像素。</p>
<p>解决办法：<strong>行内元素尽量不要设置font属性</strong>。对于行内元素而言，如果它和父亲都设置了行高，就不要去给自己设置font属性了。要么就，不要同时设置行高。</p>
<h3 id="背景图不能撑开盒子" tabindex="-1"><a class="header-anchor" href="#背景图不能撑开盒子"><span>背景图不能撑开盒子</span></a></h3>
<p>高和行高都可以城开盒子，但背景图不能撑开盒子。</p>
<h2 id="js" tabindex="-1"><a class="header-anchor" href="#js"><span>JS</span></a></h2>
<h3 id="超链接-a-的href跳转" tabindex="-1"><a class="header-anchor" href="#超链接-a-的href跳转"><span>超链接<code v-pre>&lt;a&gt;</code>的href跳转</span></a></h3>
<p>一个空白的超链接如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;a href="">&lt;/a></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>当点击超链接时，由于 href 的属性值的不同，可以产生很多种情况：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">	<span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">""</span>                    //刷新页面</span>
<span class="line"></span>
<span class="line">	<span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">"#"</span>                   //跳转到当前页面的顶部（不会刷新）</span>
<span class="line"></span>
<span class="line">	<span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">"javascript:void(0)"</span>  // 什么都不做</span>
<span class="line"></span>
<span class="line">	<span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">"javascript:;"</span>        // 什么都不做</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


