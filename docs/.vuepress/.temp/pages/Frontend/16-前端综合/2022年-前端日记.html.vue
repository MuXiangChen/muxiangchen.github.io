<template><div><h1 id="_2022年-前端日记" tabindex="-1"><a class="header-anchor" href="#_2022年-前端日记"><span>2022年-前端日记</span></a></h1>
<h3 id="_2022-03-30" tabindex="-1"><a class="header-anchor" href="#_2022-03-30"><span>2022-03-30</span></a></h3>
<p>有些 Mac 设备里，Safari 浏览器的默认字体竟然是宋体，这太奇怪了。建议在页面的 body 标签设置<strong>字体族</strong>的优先级，还是很有必要的：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">'Segoe UI'</span><span class="token punctuation">,</span> <span class="token string">'PingFang SC'</span><span class="token punctuation">,</span> <span class="token string">'Hiragino Sans GB'</span><span class="token punctuation">,</span> <span class="token string">'Microsoft YaHei'</span><span class="token punctuation">,</span> <span class="token string">'Helvetica Neue'</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">,</span> <span class="token string">'Apple Color Emoji'</span><span class="token punctuation">,</span> <span class="token string">'Segoe UI Emoji'</span><span class="token punctuation">,</span> <span class="token string">'Segoe UI Symbol'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参考链接：</p>
<ul>
<li><a href="https://github.com/chokcoco/icss/issues/69" target="_blank" rel="noopener noreferrer">Web 字体 font-family 再探秘 · Issue #69 · chokcoco/iCSS</a></li>
</ul>
<h3 id="_2022-04-27" tabindex="-1"><a class="header-anchor" href="#_2022-04-27"><span>2022-04-27</span></a></h3>
<p>在 flex 布局的容器里，如果发现某个子元素的尺寸与预期不符，说明这个子元素可能是被挤掉了。</p>
<p>解决办法是给这个子元素设置如下属性，则表示它不会被挤压：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">flex-shrink: 0;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2022-09-26-从-html-富文本中提取纯文本-通过正则表达式" tabindex="-1"><a class="header-anchor" href="#_2022-09-26-从-html-富文本中提取纯文本-通过正则表达式"><span>2022-09-26-从 html 富文本中提取纯文本（通过正则表达式）</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 写法1</span></span>
<span class="line"><span class="token keyword">const</span> text <span class="token operator">=</span> html_str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;[^&lt;>]+></span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 写法2</span></span>
<span class="line"><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">'&lt;[^&lt;>]+>'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> text <span class="token operator">=</span> html_str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>
<ul>
<li><a href="https://juejin.cn/post/7020985945218351135" target="_blank" rel="noopener noreferrer">js 提取 html 字符串的文本方法总结（去 html 标签） - 掘金</a></li>
</ul>
<h3 id="_2022-11-16-修改页面内引入的-iframe-页面内部元素的样式" tabindex="-1"><a class="header-anchor" href="#_2022-11-16-修改页面内引入的-iframe-页面内部元素的样式"><span>2022-11-16-修改页面内引入的 iframe 页面内部元素的样式</span></a></h3>
<p>参考代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'ifm'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document</span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'ifm'</span><span class="token punctuation">)</span> <span class="token comment">//获取到iframe</span></span>
<span class="line">        <span class="token punctuation">.</span>contentWindow <span class="token comment">//获取到iframe的window</span></span>
<span class="line">        <span class="token punctuation">.</span>document <span class="token comment">//获取到iframe的document</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'ifmh1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">'orange'</span><span class="token punctuation">;</span> <span class="token comment">//正常获取元素 //修改样式</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code v-pre>iframe.contentDocument</code> 是 <code v-pre>iframe.contentWindow.document</code> 的简写。</p>
<p>参考链接：</p>
<ul>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/31296331" target="_blank" rel="noopener noreferrer">修改页面内引入的iframe页面内部元素的样式</a></p>
</li>
<li>
<p><a href="https://juejin.cn/post/7127916577684471845" target="_blank" rel="noopener noreferrer">终于搞懂了 Iframe （跨窗口通信）</a></p>
</li>
</ul>
<h3 id="_2022-11-17-vs-code报错semi-colon-expectedcss-css-semicolonexpected-的解决方法" tabindex="-1"><a class="header-anchor" href="#_2022-11-17-vs-code报错semi-colon-expectedcss-css-semicolonexpected-的解决方法"><span>2022-11-17-VS Code报错semi-colon expectedcss(css-semicolonexpected)的解决方法</span></a></h3>
<p>这可能是VS Code 的一个bug。</p>
<p>出现这个问题, 可能并不是该条CSS语句出现问题, 而是它之前的CSS。所以请检查它之前的CSS有没有不完整或不正确的。</p>
<p>参考链接：<a href="https://blog.class4ever.com/2943.html" target="_blank" rel="noopener noreferrer">VS Code报错semi-colon expectedcss(css-semicolonexpected)的解决方法 - 话语的服侍</a></p>
</div></template>


