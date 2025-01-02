<template><div><h2 id="开始写第一行-javascript-hello-world" tabindex="-1"><a class="header-anchor" href="#开始写第一行-javascript-hello-world"><span>开始写第一行 JavaScript：hello world</span></a></h2>
<p>JS 代码的书写位置在哪里呢？这个问题，也可以理解成：引入 JS 代码，有哪几种方式？有三种方式：（和 CSS 的引入方式类似）</p>
<ol>
<li>
<p><strong>行内式</strong>：写在HTML标签内部。</p>
</li>
<li>
<p><strong>内嵌式</strong>（内联式）：写在 script 标签中。</p>
</li>
<li>
<p><strong>外链式</strong>：引入外部 JS 文件。</p>
</li>
</ol>
<h3 id="方式-1-行内式" tabindex="-1"><a class="header-anchor" href="#方式-1-行内式"><span>方式 1：行内式</span></a></h3>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"点我点我"</span> onclick<span class="token operator">=</span><span class="token string">"alert('千古壹号 Hello 方式1')"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>完整的可执行代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点我点我<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'千古壹号 Hello 方式1'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p>
<ul>
<li>
<p>可以将单行或少量 JS 代码写在 HTML 标签的事件属性中（以 on 开头的属性），比如放在上面的 <code v-pre>onclick</code>点击事件中。</p>
</li>
<li>
<p>这种书写方式，不推荐使用，原因是：可读性差，尤其是需要编写大量 JS 代码时，很难维护；引号多层嵌套时，也容易出错。</p>
</li>
<li>
<p>关于代码中的「引号」，在 HTML 标签中，我们推荐使用双引号，JS 中推荐使用单引号。</p>
</li>
</ul>
<h3 id="方式-2、内嵌式-内联式" tabindex="-1"><a class="header-anchor" href="#方式-2、内嵌式-内联式"><span>方式 2、内嵌式（内联式）</span></a></h3>
<p>我们可以在 HTML 页面的 <code v-pre>&lt;body&gt;</code> 标签里放入<code v-pre>&lt;script type=”text/javascript”&gt;&lt;/script&gt;</code>标签对，并在<code v-pre>&lt;script&gt;</code>里书写 JavaScript 代码：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">      <span class="token comment">// 在这里写 js 代码</span></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'千古壹号 hello 方式2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'qianguyihao hello 方式2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p>
<ul>
<li>
<p>tyue属性中的text 表示纯文本，因为 JavaScript 代码本身就是纯文本。当然，type属性可以省略，因为 JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言。</p>
</li>
<li>
<p>可以将多行 JS 代码写到 <code v-pre>&lt;script&gt;</code> 标签中。</p>
</li>
<li>
<p>内嵌式 JS 是学习时常用的书写方式。</p>
</li>
</ul>
<h3 id="方式-3、外链式-引入独立的js文件" tabindex="-1"><a class="header-anchor" href="#方式-3、外链式-引入独立的js文件"><span>方式 3、外链式（引入独立的JS文件）</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 外链式：引入外部的 js 文件：这个 utils.js 文件与当前的 html 文件，处于同一级目录 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utils.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p>
<ul>
<li>上面这段代码，依然是放到 body 标签里，可以和内嵌的 JS 代码并列。</li>
<li>上方代码的 script 标签已经引入了外部 JS 文件，所以这个标签里面，不可以再写 JS 代码。</li>
<li>方式2和方式3不能混用。</li>
</ul>
<p><strong>总结</strong>：</p>
<p>我们在实战开发中，基本都是采用方式 3，因为将 html 文件和 js 文件分开的方式，有利于代码的结构化和复用，符合高内聚、低耦合的思想。很少会有人把一大堆 JS 代码塞到 单个 html 文件里。</p>
<h2 id="拓展知识" tabindex="-1"><a class="header-anchor" href="#拓展知识"><span>拓展知识</span></a></h2>
<h3 id="window-onload-先加载-最后执行" tabindex="-1"><a class="header-anchor" href="#window-onload-先加载-最后执行"><span>window.onload：先加载，最后执行</span></a></h3>
<p>上面的三种方式，有个共同的地方是：JS 代码都是写在 body 标签中的，准确来说，是在页面标签元素（比如 <code v-pre>title</code> 标签）的后面，在 <code v-pre>&lt;/body&gt;</code>结束标签的前面。</p>
<p>为什么一般是按这样的顺序来写呢？这是因为：浏览器默认遵循<strong>HTML文档</strong>的加载顺序，即按照<strong>从上至下</strong>的加载顺序解析网页（这句话很重要）。所以，通常情况下，我们会把JS代码写在 body 内部的末尾。</p>
<p>然而，当你需要通过 JS 来操作界面上的标签元素时，假如将 JS 代码或者<code v-pre>&lt;script&gt;</code>标签写到<code v-pre>&lt;head&gt;</code>标签中，或者写在HTML标签元素的前面，那么这样的 JS 是无效的，因为标签元素在此时都还没来得及加载，自然无法操作这个元素。</p>
<p><strong>重点来了：<strong>当你</strong>需要通过 JS 来操作界面上的标签元素</strong>时，如果实在想把 JS 写到<code v-pre>&lt;head&gt;</code>标签中，那么就必须用 window.onload 将 JS 代码进行包裹。代码格式如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  window.onload = function(){</span>
<span class="line">    // 这里可以写操作界面元素的JS代码，等页面加载完毕后再执行。这里面的JS代码，会延迟执行。</span>
<span class="line">    ...</span>
<span class="line">  }</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>window.onload</strong> 的含义是：等界面上所有内容都加载完毕后（不仅要等文本加载完毕，而且要等图片也要加载完毕），再执行window.onload 内部的代码。做到了<strong>先加载，最后执行</strong>，也就是：<strong>延迟执行</strong>，等页面加载完毕后再执行。</p>
<p>我们可以根据具体需要来决定，将 window.onload 写在 <code v-pre>&lt;head&gt;</code>标签中，或者写在<code v-pre>&lt;script&gt;</code>标签中。</p>
<h3 id="noscript-标签-浏览器不支持js脚本时的降级方案" tabindex="-1"><a class="header-anchor" href="#noscript-标签-浏览器不支持js脚本时的降级方案"><span><code v-pre>&lt;noscript&gt;</code> 标签：浏览器不支持JS脚本时的降级方案</span></a></h3>
<p><code v-pre>&lt;noscript&gt;</code> 标签是一种HTML标签，用于提供在浏览器禁用JavaScript或无法执行JavaScript脚本时的替代内容。它允开发者在需要时向用户显示备用内容。这有助于提高网站的可访问性和用户体验。</p>
<p>如果有些浏览器不支持 JS 脚本，或者用户禁用了浏览器的JS脚本（如下图），那么，该如何给用户提供一个友好的提示呢？我们可以通过 <code v-pre>&lt;noscript&gt;</code> 标签作为<strong>降级</strong>的处理方案。</p>
<p><img src="https://img.smyhvae.com/202310051617910.png" alt=""></p>
<p><code v-pre>&lt;noscript&gt;</code> 标签的基础语法：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 降级方案：这里放置备用内容，当浏览器禁用 JS 或者浏览器不支持 JS 时将显示 --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>请启用JavaScript以获得最佳网站体验。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<ul>
<li><code v-pre>&lt;noscript&gt;</code> 标签内部可以包含任何HTML内容，通常包括用于向用户传达信息或提供备用功能的文本、图像、链接等。</li>
<li><code v-pre>&lt;noscript&gt;</code> 标签的内容仅在浏览器不支持或禁用 JS 的情况下才会显示。换而言之，如果用户的浏览器支持JS脚本，则<code v-pre>&lt;noscript&gt;</code> 标签里的内容将无法显示，会被忽略；如果用户的浏览器不支持JS脚本（或者关闭了JS脚本），则会显示<code v-pre>&lt;noscript&gt;</code> 标签的内容。</li>
</ul>
<h2 id="javascript-一些简单的语法规则" tabindex="-1"><a class="header-anchor" href="#javascript-一些简单的语法规则"><span>JavaScript 一些简单的语法规则</span></a></h2>
<p>学习编程语言，是有规律可循的，程序会有相同的部分，这些部分就是一种规定，不能更改，我们称之为：语法。我们先来了解一个简单的语法规则。</p>
<p>1、JS 对换行、缩进、空格不敏感。每一条语句以分号结尾。</p>
<p>也就是说：</p>
<p>代码一：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'今天蓝天白云'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'我很高兴'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于代码二：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'今天蓝天白云'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'我很高兴'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、每一条语句末尾建议加上<strong>分号</strong>。</p>
<p>当存在换行符（line break）时，大多数情况下可以省略分号，JavaScript 会将换行符理解成“隐式”的分号，进而自动添加分号。</p>
<p>也就是说，分号不是必须加的，如果不写分号，浏览器会在换行符的位置自动添加分号，但是会消耗一些系统资源和性能，甚至有可能<strong>添加错误</strong>，导致一些奇怪的bug。</p>
<p>3、所有的符号都是英文的，比如括号、引号、分号。</p>
<p>如果你用的是搜狗拼音，<strong>建议不要用 shift 切换中英文</strong>（可以在搜狗软件里进行设置），不然很容易输入中文的分号；建议用 ctrl+space 切换中英文输入法。</p>
<p>4、JS 严格区分大小写。HTML和CSS不区分大小写，但是 JS 严格区分大小写。</p>
<h2 id="前端代码的注释" tabindex="-1"><a class="header-anchor" href="#前端代码的注释"><span>前端代码的注释</span></a></h2>
<p>注释：即解释、注解。注释有利于提高代码的可读性，且有利于程序员之间的沟通和工作交接。</p>
<p>注释可以用来解释某一段代码的功能和作用；通过注释，还可以补充代码中未体现出来的部分。代码只是开发工作的结果，注释可以阐述开发工作的过程、思路、注意事项，以及踩过的坑。</p>
<p>注释可以是任何文字，可以写中文。</p>
<p><strong>我们不要把 HTML、CSS、JavaScript 三者的注释格式搞混淆了</strong>。</p>
<h3 id="html-的注释" tabindex="-1"><a class="header-anchor" href="#html-的注释"><span>HTML 的注释</span></a></h3>
<p>格式：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 我是 HTML 注释  --></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--头部开始--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!--头部结束--></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!--内容开始--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!--内容结束--></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!--底部开始--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!--底部结束--></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-的注释" tabindex="-1"><a class="header-anchor" href="#css-的注释"><span>CSS 的注释</span></a></h3>
<p>举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token comment">/* 我是 CSS 注释 */</span></span>
<span class="line">  <span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：CSS 只有<code v-pre>/* */</code>这种注释，没有<code v-pre>//</code>这种注释。而且注释要写在<code v-pre>&lt;style&gt;</code>标签里面才算生效。</p>
<h3 id="javascript-的注释" tabindex="-1"><a class="header-anchor" href="#javascript-的注释"><span>JavaScript 的注释</span></a></h3>
<p>单行注释：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 我是注释</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>多行注释：（写法1）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">/*</span>
<span class="line"> 多行注释1</span>
<span class="line"> 多行注释2</span>
<span class="line">*/</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多行注释：（写法2）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 多行注释1</span>
<span class="line"> * 多行注释2</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>补充：VS Code 中，单行注释的快捷键是「Ctrl + /」，多行注释的默认快捷键是「Alt + Shift + A」。</p>
<p>当然，如果你觉得多行注释的默认快捷键不方便，我们还可以修改默认快捷键。操作如下：</p>
<p>VS Code --&gt; 首选项 --&gt; 键盘快捷方式 --&gt; 查找“注释”这两个字 --&gt; 将原来的快捷键修改为其他的快捷键，比如「Ctrl + Shift + /」。</p>
<h3 id="注释的高级用法-文档注释-jsdoc" tabindex="-1"><a class="header-anchor" href="#注释的高级用法-文档注释-jsdoc"><span>注释的高级用法：文档注释（JSDoc）</span></a></h3>
<p><strong>JSDoc</strong> 是 JavaScript 中用于<strong>文档注释</strong>的一种标准化格式。写完 JSDoc 的注释之后，再通过相关工具，开发者便可以为函数、方法、类和变量等添加注释，以便<strong>生成可读性强的API文档</strong>。</p>
<p>以下是一个基本的 JSDoc 注释示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 这是一个示例函数，用于求两个数字的和。</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num1</span> - 第一个数字</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num2</span> - 第二个数字</span>
<span class="line"> * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> - 两个数字的和</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.smyhvae.com/202310052143987.png" alt=""></p>
<p>如上图所示，鼠标悬停在函数调用的地方就能看到关于这个函数的文档说明，而不需要定位函数的源码处，很神奇吧？</p>
<p>JSDoc经常应用于工具函数，我们甚至可以借助 JSDoc的相关工具，生成函数的一系列的API文档，部署到到网站上，方便其他开发者查阅，非常方便。这种协作方式在日常开发中极为常见。具体如何实战，各位读者可自行查阅 JSDoc 这个关键词。</p>
<p>另外需要说明的是，VS Code默认集成了文档注释的显示功能，可以在<strong>单独的 JS 文件</strong>中显示文档注释的效果，但是无法在 HTML 文件中显示效果：</p>
<p><img src="https://img.smyhvae.com/202310052153628.png" alt=""></p>
<h3 id="对注释的认知" tabindex="-1"><a class="header-anchor" href="#对注释的认知"><span>对注释的认知</span></a></h3>
<p>很多人认为：代码注释是多余的。他们的理由是：如果注释太多，说明代码写得不清晰；而且，代码更新的同时，如果注释没更新，那段注释就成了磁盘上的垃圾，误导他人。</p>
<p>还有人认为：注释应该尽可能详细，就像写小作文一样。</p>
<p>上面这样的理由，都不具有说服力。我告诉你为什么要写注释：</p>
<ol>
<li>注释有利于提高代码的可读性，且有利于程序员之间的沟通和工作交接。</li>
<li>所有注释都是必要的吗？当然不是。注释不应该用来解释某些代码正在做什么。如果代码无法清楚到去解释自己时，那么代码需要变得更简单。有一些例外，比如正则表达式和复杂算法通常会从解释他们正在做什么事情的注释中获益很多。</li>
<li>注释用于解释为什么某些代码存在时很有用。大多数注释都是针对代码本身无法包含的信息，例如决策背后的推理、业务流程、业务逻辑、注意事项、踩坑经验总结、参考链接。</li>
<li>注释的本质是文档，需要持续更新维护，新陈代谢。文档也会过期，但不能因噎废食。即便文档过期，至少它记载了曾经的开发记录。</li>
</ol>
<p>关注注释，还有一个悖论：“我最喜欢的事情是别人写注释，我最不喜欢的事情是自己写注释”。无论如何，建议各位开发者多写注释、多写技术文档，越详细越好、越系统越好，这样才能提高协作效率，促进良性循环。</p>
<p>推荐阅读：</p>
<ul>
<li>代码审查 review 指南：<a href="https://lib.jimmysong.io/eng-practices/review/" target="_blank" rel="noopener noreferrer">https://lib.jimmysong.io/eng-practices/review/</a></li>
</ul>
<h2 id="javascript-输出语句" tabindex="-1"><a class="header-anchor" href="#javascript-输出语句"><span>JavaScript 输出语句</span></a></h2>
<p>在下面的这几个输出语句中， 按照使用频率来排序的话，console.log()用得最多，其次是 alert()语句；其他语句用得较少，了解即可。</p>
<h3 id="弹窗-alert-语句" tabindex="-1"><a class="header-anchor" href="#弹窗-alert-语句"><span>弹窗：alert()语句</span></a></h3>
<p>我们要学习的第一个语句，就是 alert 语句。</p>
<p>代码举例如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'千古壹号'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>alert</strong>（中文翻译为“警报、警告”）的用途：<strong>弹出“警告框”</strong>。它会在弹窗中显示一条信息，并等待用户按下 “OK”。</p>
<p><img src="http://img.smyhvae.com/20180116_1735.gif" alt=""></p>
<p>这个弹窗，在 IE 浏览器中长这样：</p>
<p><img src="http://img.smyhvae.com/20180116_1906.png" alt=""></p>
<p>上面的代码中，如果写了两个 alert()语句，则网页的效果是：弹出第一个警告框，点击确定后，继续弹出第二个警告框。</p>
<p>补充：该方法只能传入一个参数。</p>
<h3 id="控制台输出-console-log-打印日志" tabindex="-1"><a class="header-anchor" href="#控制台输出-console-log-打印日志"><span>控制台输出：console.log() 打印日志</span></a></h3>
<p><code v-pre>console.log()</code>用于在浏览器的控制台中输出信息，里面可以传入一个或多个参数，常用于代码调试和测试。console 表示“控制台”，log 表示“输出”。括号里可以写字符串、数字、变量、表达式等。</p>
<p>语法格式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'传入一个参数：'</span> <span class="token operator">+</span>arg1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 传入多个参数时，可以用逗号隔开</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'传入多个参数：'</span><span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> arg3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台是程序员调试程序的地方。我们可以使用 console 语句打印日志，在控制台的 console 面板查看打印的内容，测试程序是否运行正常。</p>
<p>在 Chrome 浏览器中，按 F12 即可打开控制台，选择「console」栏，即可看到打印的内容。</p>
<p><img src="http://img.smyhvae.com/20180116_2008.gif" alt=""></p>
<p>console 语句可以设置不同的打印等级：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'千古壹号1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 普通打印</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'千古壹号2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 警告打印</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'千古壹号3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 错误打印</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="https://img.smyhvae.com/20211031_1552.png" alt=""></p>
<p>上图中，不同的打印等级，区别不大，只是颜色背景上的区别，方便肉眼区分、过滤信息。</p>
<p>普通人是不会在意控制台的，但是有些网站另藏玄机。比如百度首页的控制台，悄悄地放了一段招聘信息的彩蛋，挺有意思：</p>
<p><img src="http://img.smyhvae.com/20180116_2010.png" alt=""></p>
<p>做前端开发时需要经常使用控制台做调试，我们甚至可以直接在控制台输入 JS 语句，然后打印执行结果，你可以自行试一试。</p>
<p><strong>总结</strong>：alert() 主要用来显示消息给用户，console.log() 用来给程序员做调试用。</p>
<h3 id="弹窗-confirm-语句-含确认-取消" tabindex="-1"><a class="header-anchor" href="#弹窗-confirm-语句-含确认-取消"><span>弹窗：confirm()语句（含确认/取消）</span></a></h3>
<p>代码举例如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">var result = confirm('你听说过千古壹号吗？');</span>
<span class="line">console.log(result);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>代码运行后，页面上会显示一个弹窗。弹窗上有“确认”和“取消”两个按钮，点击“确定”返回 <code v-pre>true</code>，点击“取消”返回 <code v-pre>false</code>。</p>
<p><img src="http://img.smyhvae.com/20211031-1537.gif" alt="20211031-1537"></p>
<h3 id="弹出输入框-prompt-语句" tabindex="-1"><a class="header-anchor" href="#弹出输入框-prompt-语句"><span>弹出输入框：prompt()语句</span></a></h3>
<p><code v-pre>prompt()</code>就是专门弹出能够让用户输入内容的对话框。用得少，测试的时候偶尔会用。</p>
<p>JS 代码如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请随便输入点什么东西吧'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，用户输入的内容，将被传递到变量 a 里面，并在控制台打印出来。</p>
<p><img src="http://img.smyhvae.com/20180116_2230.gif" alt=""></p>
<p><strong>alert()和 prompt()的区别：</strong></p>
<ul>
<li>alert() 语句中可以输出数字和字符串，如果要输出字符串，则必须用引号括起来；prompt()语句中，用户不管输入什么内容，都是字符串。</li>
<li>prompt() 会返回用户输入的内容。我们可以用一个变量，来接收用户输入的内容。</li>
</ul>
<h3 id="网页内容区域输出-document-write-语句" tabindex="-1"><a class="header-anchor" href="#网页内容区域输出-document-write-语句"><span>网页内容区域输出：document.write()语句</span></a></h3>
<p>该方法的作用是向网页中写入文本内容，可以是 HTML 代码。传入的参数可以是一个或者多个字符串。</p>
<p>代码举例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">document.write('千古前端图文教程');</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>页面效果：</p>
<p><img src="http://img.smyhvae.com/20211031_1543.png" alt="20211031_1543"></p>
<h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


