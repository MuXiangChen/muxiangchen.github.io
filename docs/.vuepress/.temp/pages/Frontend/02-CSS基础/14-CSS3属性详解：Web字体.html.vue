<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>开发人员可以为自已的网页指定特殊的字体（将指定字体提前下载到站点中），无需考虑用户电脑上是否安装了此特殊字体。从此，把特殊字体处理成图片的方式便成为了过去。</p>
<p>支持程度比较好，甚至 IE 低版本的浏览器也能支持。</p>
<h2 id="字体的常见格式" tabindex="-1"><a class="header-anchor" href="#字体的常见格式"><span>字体的常见格式</span></a></h2>
<blockquote>
<p>不同浏览器所支持的字体格式是不一样的，我们有必要了解一下字体格式的知识。</p>
</blockquote>
<h4 id="turetpe格式-ttf" tabindex="-1"><a class="header-anchor" href="#turetpe格式-ttf"><span>TureTpe格式：(<strong>.ttf</strong>)</span></a></h4>
<p>.ttf 字体是Windows和Mac的最常见的字体，是一种RAW格式。</p>
<p>支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+。</p>
<h4 id="opentype格式-otf" tabindex="-1"><a class="header-anchor" href="#opentype格式-otf"><span>OpenType格式：(<strong>.otf</strong>)</span></a></h4>
<p>.otf 字体被认为是一种原始的字体格式，其内置在TureType的基础上。</p>
<p>支持这种字体的浏览器有Firefox3.5+、Chrome4.0+、Safari3.1+、Opera10.0+、iOS Mobile、Safari4.2+。</p>
<h4 id="web-open-font-format格式-woff" tabindex="-1"><a class="header-anchor" href="#web-open-font-format格式-woff"><span>Web Open Font Format格式：(<strong>.woff</strong>)</span></a></h4>
<p>woff字体是Web字体中最佳格式，他是一个开放的TrueType/OpenType的压缩版本，同时也支持元数据包的分离。</p>
<p>支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+。</p>
<h4 id="embedded-open-type格式-eot" tabindex="-1"><a class="header-anchor" href="#embedded-open-type格式-eot"><span>Embedded Open Type格式：(<strong>.eot</strong>)</span></a></h4>
<p>.eot字体是IE专用字体，可以从TrueType创建此格式字体，支持这种字体的浏览器有IE4+。</p>
<h4 id="svg格式-svg" tabindex="-1"><a class="header-anchor" href="#svg格式-svg"><span>SVG格式：(<strong>.svg</strong>)</span></a></h4>
<p>.svg字体是基于SVG字体渲染的一种格式。</p>
<p>支持这种字体的浏览器有Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+。</p>
<p><strong>总结：</strong></p>
<p>了解了上面的知识后，<strong>我们就需要为不同的浏览器准备不同格式的字体</strong>。通常我们会通过字体生成工具帮我们生成各种格式的字体，因此无需过于在意字体格式之间的区别。</p>
<p>下载字体的网站推荐：</p>
<ul>
<li>
<p><a href="http://www.zhaozi.cn/" target="_blank" rel="noopener noreferrer">http://www.zhaozi.cn/</a></p>
</li>
<li>
<p><a href="http://www.youziku.com/" target="_blank" rel="noopener noreferrer">http://www.youziku.com/</a></p>
</li>
</ul>
<h2 id="webfont-的使用步骤" tabindex="-1"><a class="header-anchor" href="#webfont-的使用步骤"><span>WebFont 的使用步骤</span></a></h2>
<p>打开网站<a href="http://iconfont.cn/webfont#!/webfont/index" target="_blank" rel="noopener noreferrer">http://iconfont.cn/webfont#!/webfont/index</a>，如下：</p>
<p><img src="http://img.smyhvae.com/20180220_1328.png" alt=""></p>
<p>上图中，比如我想要「思源黑体-粗」这个字体，那我就点击红框中的「本地下载」。</p>
<p>下载完成后是一个压缩包，压缩包链接：http://download.csdn.net/download/smyhvae/10253561</p>
<p>解压后如下：</p>
<p><img src="http://img.smyhvae.com/20180220_1336.png" alt=""></p>
<p>上图中， 我们把箭头处的html文件打开，里面告诉了我们 webfont 的<strong>使用步骤</strong>：</p>
<p><img src="http://img.smyhvae.com/20180220_1338.png" alt=""></p>
<p>（1）第一步：使用font-face声明字体</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'webfont'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.eot'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* IE9*/</span></span>
<span class="line">    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.eot?#iefix'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'embedded-opentype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* IE6-IE8 */</span></span>
<span class="line">    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.woff'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox */</span></span>
<span class="line">    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.ttf'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox、opera、Safari, Android, iOS 4.2+*/</span></span>
<span class="line">    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.svg#webfont'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* iOS 4.1- */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）第二步：定义使用webfont的样式</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.web-font</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">"webfont"</span> <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span>16px<span class="token punctuation">;</span><span class="token property">font-style</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-text-stroke-width</span><span class="token punctuation">:</span> 0.2px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）第三步：为文字加上对应的样式</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>web-font<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这一分钟，你和我在一起，因为你，我会记得那一分钟。从现在开始，我们就是一分钟的朋友。这是事实，你改变不了，因为已经完成了。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>举例：</strong></p>
<p>我们按照上图中的步骤来，引入这个字体。完整版代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line">        <span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">/*  如果要在网页中使用web字体（用户电脑上没有这种字体）*/</span></span>
<span class="line">        <span class="token comment">/* 第一步：声明字体*/</span></span>
<span class="line">        <span class="token comment">/* 告诉浏览器 去哪找这个字体*/</span></span>
<span class="line">        <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'my-web-font'</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/webfont.eot'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* IE9*/</span></span>
<span class="line">            <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/webfont.eot?#iefix'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'embedded-opentype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* IE6-IE8 */</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/webfont.woff'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox */</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/webfont.ttf'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox、opera、Safari, Android, iOS 4.2+*/</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/webfont.svg#webfont'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* iOS 4.1- */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">/* 第二步：定义一个类名，谁加这类名，就会使用 webfont 字体*/</span></span>
<span class="line">        <span class="token selector">.webfont</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'my-web-font'</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 第三步：引用 webfont 字体 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>webfont<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>生命壹号，永不止步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：</p>
<p>（1）<code v-pre>my-web-font</code>这个名字是随便起的，只要保证第一步和第二步中的名字一样就行。</p>
<p>（2）因为我把字体文件单独放在了font文件夹中，所以在src中引用字体资源时，写的路径是 <code v-pre>font/...</code></p>
<p>工程文件：<a href="https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-20-WebFont%E4%B8%BE%E4%BE%8B.zip" target="_blank" rel="noopener noreferrer">2018-02-20-WebFont举例.zip</a></p>
<h2 id="字体图标-阿里的-iconfont-网站举例" tabindex="-1"><a class="header-anchor" href="#字体图标-阿里的-iconfont-网站举例"><span>字体图标（阿里的 iconfont 网站举例）</span></a></h2>
<p>我们其实可以把图片制作成字体。常见的做法是：把网页中一些小的图标，借助工具生成一个字体包，然后就可以像使用文字一样使用图标了。这样做的优点是：</p>
<ul>
<li>
<p>将所有图标打包成字体库，减少请求；</p>
</li>
<li>
<p>具有矢量性，可保证清晰度；</p>
</li>
<li>
<p>使用灵活，便于维护。</p>
</li>
</ul>
<p>也就是说，我们可以把这些图标当作字体来看待，凡是字体拥有的属性（字体大小、颜色等），均适用于图标。</p>
<p><strong>使用步骤如下：</strong>（和上一段的使用步骤是一样的）</p>
<p>打开网站<a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">http://iconfont.cn/</a>，找到想要的图标，加入购物车。然后下载下来：</p>
<p><img src="http://img.smyhvae.com/20180220_1750.png" alt=""></p>
<p>压缩包下载之后，解压，打开里面的demo.html，里面告诉了我们怎样引用这些图标。</p>
<p><img src="http://img.smyhvae.com/20180220_1755.png" alt=""></p>
<p><strong>举例1</strong>：（图标字体引用）</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token comment">/*申明字体*/</span></span>
<span class="line">        <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'iconfont'</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.eot'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* IE9*/</span></span>
<span class="line">            <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.eot?#iefix'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'embedded-opentype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* IE6-IE8 */</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.woff'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox */</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.ttf'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox、opera、Safari, Android, iOS 4.2+*/</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.svg#iconfont'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* iOS 4.1- */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">.iconfont</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">font-family</span><span class="token punctuation">:</span> iconfont<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">line-height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">margin</span><span class="token punctuation">:</span>100px auto<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">p span</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 【重要】编码代表图标 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconfont<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token entity" title="&#xe628;">&amp;#xe628;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>扫码付款<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20180220_1800.png" alt=""></p>
<p><strong>举例2</strong>：（伪元素的方式使用图标字体）</p>
<p>如果想要在文字的前面加图标字体，我们更习惯采用<strong>伪元素</strong>的方式进行添加。</p>
<p>代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token comment">/*申明字体*/</span></span>
<span class="line">        <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'iconfont'</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.eot'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* IE9*/</span></span>
<span class="line">            <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.eot?#iefix'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'embedded-opentype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* IE6-IE8 */</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.woff'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox */</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.ttf'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox、opera、Safari, Android, iOS 4.2+*/</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'font/iconfont.svg#iconfont'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* iOS 4.1- */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">line-height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">margin</span><span class="token punctuation">:</span>100px auto<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">.icon::before</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">/*&amp;#xe628;*/</span></span>
<span class="line">            <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">"\e628"</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">/*position: absolute;*/</span></span>
<span class="line">            <span class="token comment">/*left:10px;*/</span></span>
<span class="line">            <span class="token comment">/*top:0px;*/</span></span>
<span class="line">            <span class="token property">font-family</span><span class="token punctuation">:</span> iconfont<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">span</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>扫码付款<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>我是span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>divvvvvvvvvvv<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20180220_1815.png" alt=""></p>
<p>~工程文件~：</p>
<ul>
<li>
<p>2018-02-20-图标字体demo.zip</p>
</li>
<li>
<p>下载链接暂无。</p>
</li>
</ul>
<h2 id="其他相相关网站介绍" tabindex="-1"><a class="header-anchor" href="#其他相相关网站介绍"><span>其他相相关网站介绍</span></a></h2>
<ul>
<li>Font Awesome 使用介绍：<a href="http://fontawesome.dashgame.com/" target="_blank" rel="noopener noreferrer">http://fontawesome.dashgame.com/</a></li>
</ul>
<p>定制自已的字体图标库：</p>
<ul>
<li>
<p><a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">http://iconfont.cn/</a></p>
</li>
<li>
<p><a href="https://icomoon.io/" target="_blank" rel="noopener noreferrer">https://icomoon.io/</a></p>
</li>
</ul>
<p>SVG素材：</p>
<ul>
<li><a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">https://www.iconfont.cn/</a></li>
</ul>
<h2 id="_360浏览器网站案例" tabindex="-1"><a class="header-anchor" href="#_360浏览器网站案例"><span>360浏览器网站案例</span></a></h2>
<p>暂略。</p>
<p>这里涉及到：jQuery fullPage   全屏滚动插件。</p>
<ul>
<li>
<p>中文网址:http://www.dowebok.com</p>
</li>
<li>
<p>相关说明:http://www.dowebok.com/77.html</p>
</li>
</ul>
<h2 id="使用-bootstrap-网站的图标字体" tabindex="-1"><a class="header-anchor" href="#使用-bootstrap-网站的图标字体"><span>使用 Bootstrap 网站的图标字体</span></a></h2>
<p>打开如下网站：<a href="http://www.bootcss.com/p/font-awesome/" target="_blank" rel="noopener noreferrer">http://www.bootcss.com/p/font-awesome/</a>。</p>
<p><img src="http://img.smyhvae.com/20180223_2100.png" alt=""></p>
<p>如上图所示，下载字体后，进行解压：</p>
<p><img src="http://img.smyhvae.com/20180223_2105.png" alt=""></p>
<p>使用步骤如下：</p>
<p>（1）如图只是想要字体的话，可以把<code v-pre>css</code>和<code v-pre>font</code>这两个文件夹拷贝到项目里。</p>
<p>（2）在html文档中的 <code v-pre>&lt;head&gt;</code> 标签里，引入 font-awesome.min.css 文件：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>css/font-awesome.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（3）想在哪个标签里用这个图标，直接在这个标签里加className就行（className都在<a href="http://www.bootcss.com/p/font-awesome/" target="_blank" rel="noopener noreferrer">网站</a>上列出来了）。</p>
<p>完整版代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>css/font-awesome.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon-play<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>播放<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="http://img.smyhvae.com/20190101.png" alt=""></p>
</div></template>


