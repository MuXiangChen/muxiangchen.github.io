<template><div><h2 id="图片格式和应用场景" tabindex="-1"><a class="header-anchor" href="#图片格式和应用场景"><span>图片格式和应用场景</span></a></h2>
<h3 id="jpeg-格式" tabindex="-1"><a class="header-anchor" href="#jpeg-格式"><span>JPEG 格式</span></a></h3>
<p>JPEG（Joint Photographic Experts Group）是一种针对彩色照片而广泛使用的有损压缩图形格式，属于位图。</p>
<p>常用文件扩展名为<code v-pre>.jpg</code>，也有 <code v-pre>.jpeg</code>和<code v-pre>.jpe</code>。JPEG 在互联网上常被应用于存储和传输照片。</p>
<ul>
<li>
<p>适合：颜色丰富的照片、彩色图大焦点图、通栏 banner 图；结构不规则的图形。</p>
</li>
<li>
<p>不适合：线条图形和文字、图标图形，因为它的压缩算法不太这些类型的图形；并且不支持透明度。</p>
</li>
</ul>
<h3 id="png-格式" tabindex="-1"><a class="header-anchor" href="#png-格式"><span>PNG 格式</span></a></h3>
<p>PNG（Portable Network Graphics）是一种无损压缩的位图图形格式，支持索引、灰度、RGB 三种颜色方案以及 Alpha 通道等特性。</p>
<p>PNG 最初是作为替代 GIF 来设计的，能够显示 256 色，文件比 JPEG 或者 GIF 大，但是 PNG 非常好的保留了图像质量。支持 Alpha 通道的半透明和透明特性。最高支持 24 位彩色图像（PNG-24）和 8 位灰度图像（PNG-8）。</p>
<ul>
<li>
<p>适合：纯色、<strong>透明</strong>、线条绘图，图标；边缘清晰、有大块相同颜色区域；需要带<strong>半透明</strong>的图片。</p>
</li>
<li>
<p>适合：由于是无损存储，所以不太适合体积太大的彩色图像</p>
</li>
</ul>
<p>比如说，如果你需要带透明背景的图片，此时就可以用 png 格式的图。</p>
<h3 id="gif-格式" tabindex="-1"><a class="header-anchor" href="#gif-格式"><span>GIF 格式</span></a></h3>
<p>GIF（Graphics Interchange Format）是一种位图图形格式，以 8 位色（即 256 种颜色）重现真彩色的图像，采用 LZW 压缩算法进行编码。</p>
<p>支持 256 色；仅支持完全透明和完全不透明；如果需要带动画效果的图片，GIF 是比较通用的选择。</p>
<ul>
<li>
<p>适合：动画，图标。</p>
</li>
<li>
<p>不适合：每个像素只有 8 比特，不适合存储彩色图片。</p>
</li>
</ul>
<h3 id="webp-格式" tabindex="-1"><a class="header-anchor" href="#webp-格式"><span>Webp 格式</span></a></h3>
<p>Webp 是一种现代图像格式，可为图像提供无损压缩和有损压缩，这使得它非常灵活。由 Google 在购买 On2 Technologies 后发展出来，以 BSD 授权条款发布。</p>
<p>Webp的优秀算法能同时保证图像质量和较小体积；可以插入多帧，实现动画效果；可以设置透明度；采用 8 位压缩算法。</p>
<p>无损的 Webp 比 PNG 小 26%，有损的 Webp 比 JPEG 小 25-34％，比 GIF 有更好的动画。</p>
<ul>
<li>适合：适用于图形和半透明图像。</li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<ul>
<li>
<p>banner图、大图，可以用 jpg、webp格式。</p>
</li>
<li>
<p>图标、带透明背景的图，可以用 png 格式。</p>
</li>
<li>
<p>带动画效果的图，可以用 gif 格式。</p>
</li>
</ul>
<h2 id="图片优化的常见方法" tabindex="-1"><a class="header-anchor" href="#图片优化的常见方法"><span>图片优化的常见方法</span></a></h2>
<h3 id="_1、用工具压缩图片" tabindex="-1"><a class="header-anchor" href="#_1、用工具压缩图片"><span>1、用工具压缩图片</span></a></h3>
<p><strong>压缩 PNG 图片</strong>：</p>
<ul>
<li>
<p>工具：<a href="https://www.npmjs.com/package/node-pngquant-native" target="_blank" rel="noopener noreferrer">node-pngquant-native</a></p>
</li>
<li>
<p>介绍：跨平台、压缩比特别高，压缩png24非常好。</p>
</li>
</ul>
<p>安装方法：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">npm install node-pngquant-native</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>压缩 JPEG 图片</strong>：</p>
<ul>
<li>
<p>工具：<a href="https://www.npmjs.com/package/jpegtran" target="_blank" rel="noopener noreferrer">jpegtran</a></p>
</li>
<li>
<p>官网：<a href="https://www.npmjs.com/package/jpegtran" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/jpegtran</a></p>
</li>
<li>
<p>介绍：跨平台，但压缩的比率只有80-90%。</p>
</li>
</ul>
<p>安装方法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> –g jpegtran</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用方法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jpegtran <span class="token parameter variable">-copy</span> none <span class="token parameter variable">-optimize</span> <span class="token parameter variable">-outfile</span> output_file.jpg input_file.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>压缩 GIF 图</strong>：</p>
<ul>
<li>
<p>工具：Gifsicle</p>
</li>
<li>
<p>官网（含安装方法）：<a href="https://www.lcdf.org/gifsicle/" target="_blank" rel="noopener noreferrer">https://www.lcdf.org/gifsicle/</a></p>
</li>
<li>
<p>介绍：Gifsicle 通过改变每帧比例，减小 gif文件大小，同时可以使用透明来达到更小的文件大小，是目前公认的最好的解决方案。</p>
</li>
</ul>
<p>使用方法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 压缩命令。注意，这里是将压缩级别设置为3。如果将压缩级别设置为1或者2，则基本不压缩。</span></span>
<span class="line">gifsicle <span class="token parameter variable">--optimize</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">-o</span> out_file.gif in_file.gif</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 裁掉透明部分</span></span>
<span class="line">gifsicle <span class="token parameter variable">--optimize</span><span class="token operator">=</span><span class="token number">3</span> --crop-transparency <span class="token parameter variable">-o</span> out_file.gif in_file.gif</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、将图片尺寸跟随网络环境进行变化" tabindex="-1"><a class="header-anchor" href="#_2、将图片尺寸跟随网络环境进行变化"><span>2、将图片尺寸跟随网络环境进行变化</span></a></h3>
<p><strong>具体方案</strong>：不同网络环境（Wifi/4G/3G）下，加载不同尺寸和像素的图片，通过在图片 URL 中添加参数来改变。</p>
<p>图片 url 举例1：（图片的原始url链接）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">https://img12.360buyimg.com/img/s3866x3866_jfs/t1/149913/14/18648/719436/5fd8b9b5Eb697b825/7c23f3028aff8e2b.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>图片 url 举例2：（通过图片的url参数，将这张图的尺寸设置为200px）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">https://img12.360buyimg.com/img/s200x200_jfs/t1/149913/14/18648/719436/5fd8b9b5Eb697b825/7c23f3028aff8e2b.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3、响应式图片" tabindex="-1"><a class="header-anchor" href="#_3、响应式图片"><span>3、响应式图片</span></a></h3>
<p><strong>方法1</strong>：通过 JavaScript 绑定事件，检测窗口大小，以此设置图片大小。</p>
<p><strong>方法2</strong>：CSS媒体查询。</p>
<p>代码举例：（在 640px的窗口大小里，设置图片的尺寸为640px）</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>640px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">my_image</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span>640px<span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法3</strong>：img标签的 <code v-pre>srcset</code> 属性。这个是 H5的新特性。</p>
<p>代码举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-320w.jpg, img-640w.jpg 2x, img-960w.jpg 3x<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“img-960w.jpg”</span></span>
<span class="line"><span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“img”</span><span class="token punctuation">></span></span> （x 描述符：表示图像的设备像素）</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、逐步加载图像-lazyload、lqip、lqip" tabindex="-1"><a class="header-anchor" href="#_4、逐步加载图像-lazyload、lqip、lqip"><span>4、逐步加载图像：lazyload、LQIP、LQIP</span></a></h3>
<p><strong>方法1</strong>、使用统一占位符。俗称图片的<code v-pre>懒加载（lazyload）</code>。</p>
<p><strong>方法2</strong>、使用 <strong>LQIP</strong> 的图片加载方式。也就是说，在大图没有完全加载出来的情况下，先这张图对应的的低质量图片进行占位。</p>
<p>LQIP（Low Quality Image Placeholders）：低质量图像占位符。这种技术背后的想法是，在网络环境较差的情况下，你可以尽快向用户展示完全可用的网页，为他们提供更好的体验。即使在更好的网络连接上，这仍然为用户提供了更快的可用页面，并且改善了体验。</p>
<ul>
<li>
<p>安装 LQIP 工具：<code v-pre>npm install lqip</code></p>
</li>
<li>
<p>GitHub源码：https://github.com/zouhir/lqip-loader</p>
</li>
</ul>
<p>代码举例：（将目标图片转换为 LQIP 形式的图）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> lqip <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'lqip'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//文件路径</span></span>
<span class="line"><span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token string">'./in.png'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//将输入的图片转为base64</span></span>
<span class="line">lqip<span class="token punctuation">.</span><span class="token function">base64</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 色值</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">lqip<span class="token punctuation">.</span><span class="token function">palette</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//这里输出的是base64的图片地址</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，我们还可以使用 <strong>SQIP</strong> 的图片加载方式。</p>
<p>SQIP（SVG Quality Image Placeholders）： SVG 格式的图像占位符。</p>
<ul>
<li>
<p>安装  SQIP 工具：<code v-pre>npm install sqip</code></p>
</li>
<li>
<p>GitHub 源码：<a href="https://github.com/axe312ger/sqip" target="_blank" rel="noopener noreferrer">https://github.com/axe312ger/sqip</a></p>
</li>
</ul>
<p>代码举例：（将目标图片转换为 SQIP 形式的图）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sqip <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'sqip'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span>  <span class="token function">sqip</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'./input_file.png'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">numberOfPrimitives</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token comment">//可根据不同应用场景设置大小</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>final_svg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、雪碧图-image-spriting" tabindex="-1"><a class="header-anchor" href="#_5、雪碧图-image-spriting"><span>5、雪碧图（Image spriting）</span></a></h3>
<p>雪碧图是比较常见的图片优化方式，也就是把多张小图合并成一张大图。这样的话，就只需做一次网络请求，减少图片的 http 请求次数。</p>
<p>读者们可以自行查阅。</p>
<h3 id="_6、有些场景下-并不需要图片文件" tabindex="-1"><a class="header-anchor" href="#_6、有些场景下-并不需要图片文件"><span>6、有些场景下，并不需要图片文件</span></a></h3>
<p>有些场景下，并不需要图片，我们可以用其他的方式来代替图片。</p>
<p>举例：</p>
<ul>
<li>
<p>Web Font 代替图片</p>
</li>
<li>
<p>使用 Data URI 代替图片。base64就是属于 Data URI的方式。</p>
</li>
</ul>
<h3 id="_7、在服务器端进行图片自动优化" tabindex="-1"><a class="header-anchor" href="#_7、在服务器端进行图片自动优化"><span>7、在服务器端进行图片自动优化</span></a></h3>
<p>图片服务器自动化优化是可以在图片 URL 链接上增加不同特殊参数，服务器自动化生成。通过这些参数，可以设置图片的不同格式、大小、质量。</p>
<p><strong>常见处理方式</strong>：</p>
<ul>
<li>
<p>图片裁剪：按长边、短边、填充、拉伸等缩放。</p>
</li>
<li>
<p>图片格式转换：支持 JPG，GIF，PNG，WebP 等，支持不同的图片压缩率。</p>
</li>
<li>
<p>图片处理：添加图片水印、高斯模糊、重心处理、裁剪边框等。</p>
</li>
<li>
<p>AI 能力：鉴黄、涉政、智能抠图、智能排版、智能配色、智能合成等 AI 功能。</p>
</li>
</ul>
<p><strong>图片举例</strong>：</p>
<p>比如JD公司的图片链接，就会在服务器端做优化处理。通过修改图片链接中的参数，就能自动达到相应的优化效果。</p>
<p>原始图片链接：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">https://img12.360buyimg.com/img/s3866x3866_jfs/t1/149913/14/18648/719436/5fd8b9b5Eb697b825/7c23f3028aff8e2b.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将图片压缩为 200*150：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">https://img12.360buyimg.com/img/s200x200_jfs/t1/149913/14/18648/719436/5fd8b9b5Eb697b825/7c23f3028aff8e2b.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将图片转换为 webp 格式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">https://img12.360buyimg.com/img/s200x200_jfs/t1/149913/14/18648/719436/5fd8b9b5Eb697b825/7c23f3028aff8e2b.webp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将图片质量压缩至10%：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">https://img12.360buyimg.com/img/s3866x3866_jfs/t1/149913/14/18648/719436/5fd8b9b5Eb697b825/7c23f3028aff8e2b.jpg.q10</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="html优化" tabindex="-1"><a class="header-anchor" href="#html优化"><span>HTML优化</span></a></h2>
<h3 id="_1、精简-html-代码" tabindex="-1"><a class="header-anchor" href="#_1、精简-html-代码"><span>1、精简 HTML 代码</span></a></h3>
<ul>
<li>
<p>减少 HTML 的嵌套。</p>
</li>
<li>
<p>减少 DOM 节点数。</p>
</li>
<li>
<p>减少无语义代码（比如: <div class=“clear”></div> 消除浮动，其实可以用css来处理）。</p>
</li>
<li>
<p>删除 http 或者 https：如果URL的协议头和当前页面的协议头一致的，或者此 URL 在多个协议头都是可用的，则可以考虑删除协议头。</p>
</li>
<li>
<p>删除多余的空格、换行符、缩进和不必要的注释。</p>
</li>
<li>
<p>省略冗余标签和属性。</p>
</li>
<li>
<p>使用相对路径的 URL。</p>
</li>
</ul>
<h3 id="_2、文件放在合适位置" tabindex="-1"><a class="header-anchor" href="#_2、文件放在合适位置"><span>2、文件放在合适位置</span></a></h3>
<ul>
<li>CSS 样式文件链接尽量放在页面头部。</li>
</ul>
<p>CSS 加载不会阻塞 DOM tree 解析，但是会阻塞 DOM Tree 渲染，也会阻塞后面 JS 执行。</p>
<p>任何 body 元素之前，可以确保在文档部分中解析了所有 CSS 样式（内联和外联），从而减少了浏览器必须重排文档的次数。</p>
<p>如果放置页面底部，就要等待最后一个 CSS 文件下载完成，此时会出现&quot;白屏&quot;，影响用户体验。</p>
<ul>
<li>JS 引用放在 HTML 底部</li>
</ul>
<p>防止 JS 在加载、解析、执行时，阻塞了页面后续元素的正常渲染。</p>
<h3 id="_4、增强用户体验" tabindex="-1"><a class="header-anchor" href="#_4、增强用户体验"><span>4、增强用户体验</span></a></h3>
<ul>
<li>设置 favicon.ico</li>
</ul>
<p>网站如果不设置 favicon.ico，控制台会报错。另外页面加载过程中如果没有图标，则会出现 loading 过程，也不利于记忆网站品牌，建议统一添加。</p>
<ul>
<li>增加首屏必要的 CSS 和 JS</li>
</ul>
<p>页面如果需要等待所的依赖的 JS 和 CSS 加载完成才显示，则在渲染过程中页面会一直显示空白，影响用户体验，建议在首屏增加必要的 CSS 和 JS，比如页面框架背景图片或者loading 图标，内联在 HTML 页面中。这样做，首屏能快速显示出来，缓解用户焦虑。现在很多网页在初始化的时候，流行做<strong>骨架屏</strong>，小伙伴们也可以研究下。</p>
<h2 id="css优化" tabindex="-1"><a class="header-anchor" href="#css优化"><span>CSS优化</span></a></h2>
<h3 id="_1、提升-css-渲染性能" tabindex="-1"><a class="header-anchor" href="#_1、提升-css-渲染性能"><span>1、提升 CSS 渲染性能</span></a></h3>
<ul>
<li>
<p>谨慎使用 expensive 属性，这类属性比较耗浏览器的性能。比如：<code v-pre>nth-child</code> 伪类；<code v-pre>position: fixed</code> 定位。</p>
</li>
<li>
<p>尽量减少样式的层级数。</p>
</li>
</ul>
<p>比如：<code v-pre>div ul li span i {color: blue;}</code>这样的层级就太深了。建议给 i 标签设置 class属性，然后通过class直接设置样式属性，可以提升浏览器的查询效率。</p>
<ul>
<li>
<p>尽量避免使用占用过多 CPU 和内存的属性。比如：<code v-pre>text-indnt:-99999px</code>。</p>
</li>
<li>
<p>尽量少使用耗电量大的属性。比如：CSS3 3D transforms、CSS3 transitions、Opacity 这样的属性会消耗GPU。</p>
</li>
</ul>
<h3 id="_2、合适使用-css-选择器" tabindex="-1"><a class="header-anchor" href="#_2、合适使用-css-选择器"><span>2、合适使用 CSS 选择器</span></a></h3>
<ul>
<li>尽量避免使用 CSS 表达式。</li>
</ul>
<p>比如 <code v-pre>background-color: expression( (new Date()).getHours()%2 ? &quot;#FFF&quot; : &quot;#000&quot; );</code>这个属性的意思是，每间隔两小时，改变白景色。</p>
<ul>
<li>尽量避免使用通配选择器。</li>
</ul>
<p>比如 <code v-pre>body &gt; a {font-weight:blod;}</code>这样的属性，可能会把 body 里所有的标签遍历一遍，才找到 a 标签，比较耗时。</p>
<ul>
<li>尽量避免类正则的属性选择器：<code v-pre>*=， |=， ^=， $=</code></li>
</ul>
<h3 id="_3、提升-css-文件加载性能" tabindex="-1"><a class="header-anchor" href="#_3、提升-css-文件加载性能"><span>3、提升 CSS 文件加载性能</span></a></h3>
<ul>
<li>使用外链的 CSS。</li>
</ul>
<p>我们知道，内联的 css 是在html 内部写的。相比之下，外链的 CSS文件是放在CDN上的，可以缓存，既能减少 html 页面的体积大小，也能利用缓存减少资源的请求。</p>
<ul>
<li>尽量避免使用 @import 方法</li>
</ul>
<p>整个CSS加载完成后，浏览器会把 import 中所有依赖的文件全部加载完成后，浏览器才会接着往下渲染。这个过程会阻塞CSS文件的加载过程。</p>
<h3 id="_4、精简-css-代码" tabindex="-1"><a class="header-anchor" href="#_4、精简-css-代码"><span>4、精简 CSS 代码</span></a></h3>
<ul>
<li>
<p>使用缩写语句</p>
</li>
<li>
<p>删除不必要的零。比如 0.2 可以写成 .2</p>
</li>
<li>
<p>删除不必要的单位，比如 0px 可以写成 0</p>
</li>
<li>
<p>删除过多的空格；注释言简意赅</p>
</li>
<li>
<p>尽量减少样式表的大小</p>
</li>
</ul>
<p>当然，很多地方可以在编译时，通过压缩工具来处理；但是我们在写代码时，也应该有良好的编码习惯。</p>
<h3 id="_5、合理使用-web-fonts" tabindex="-1"><a class="header-anchor" href="#_5、合理使用-web-fonts"><span>5、合理使用 Web Fonts</span></a></h3>
<ul>
<li>
<p>将字体文件部署在 CDN 上。</p>
</li>
<li>
<p>或者将字体以 base64 形式保存在 CSS 中并通过 localStorage 进行缓存</p>
</li>
<li>
<p>Google 字体库因为某些不可抗拒原因，应该使用国内托管服务</p>
</li>
</ul>
<h3 id="_6、css-动画优化" tabindex="-1"><a class="header-anchor" href="#_6、css-动画优化"><span>6、CSS 动画优化</span></a></h3>
<ul>
<li>
<p>尽量避免同时出现过多动画。</p>
</li>
<li>
<p>延迟动画初始化：让其他的重要的CSS样式优先渲染。</p>
</li>
<li>
<p>结合 SVG。</p>
</li>
</ul>
<h2 id="javascript-总体优化" tabindex="-1"><a class="header-anchor" href="#javascript-总体优化"><span>JavaScript 总体优化</span></a></h2>
<h3 id="提升-javascript-文件加载性能" tabindex="-1"><a class="header-anchor" href="#提升-javascript-文件加载性能"><span>提升 JavaScript 文件加载性能</span></a></h3>
<p>加载元素的顺序 CSS 文件放在 <code v-pre>&lt;head&gt;</code> 里， JavaScript 文件放在 <code v-pre>&lt;body&gt;</code> 里。</p>
<h3 id="javascript-变量和函数优化" tabindex="-1"><a class="header-anchor" href="#javascript-变量和函数优化"><span>JavaScript 变量和函数优化</span></a></h3>
<ul>
<li>
<p>尽量使用 id 选择器</p>
</li>
<li>
<p>尽量避免使用 eval</p>
</li>
<li>
<p>JavaScript 函数尽可能保持简洁</p>
</li>
<li>
<p>使用事件节流函数</p>
</li>
<li>
<p>使用事件委托</p>
</li>
</ul>
<h3 id="javascript-动画优化" tabindex="-1"><a class="header-anchor" href="#javascript-动画优化"><span>JavaScript 动画优化</span></a></h3>
<ul>
<li>
<p>避免添加大量 JavaScript 动画</p>
</li>
<li>
<p>尽量使用 CSS3 动画</p>
</li>
<li>
<p>尽量使用 Canvas 动画</p>
</li>
<li>
<p>合理使用 requestAnimationFrame 动画代替 setTimeout、setInterval</p>
</li>
<li>
<p>requestAnimationFrame可以在正确的时间进行渲染，setTimeout（callback）和setInterval（callback）无法保证 callback 回调函数的执行时机。</p>
</li>
</ul>
<h3 id="合理使用缓存" tabindex="-1"><a class="header-anchor" href="#合理使用缓存"><span>合理使用缓存</span></a></h3>
<ul>
<li>
<p>合理缓存 DOM 对象</p>
</li>
<li>
<p>缓存列表长度</p>
</li>
<li>
<p>使用可缓存的 Ajax</p>
</li>
</ul>
<h2 id="javascript-缓存优化" tabindex="-1"><a class="header-anchor" href="#javascript-缓存优化"><span>JavaScript 缓存优化</span></a></h2>
<h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>Cookie</span></a></h3>
<p>通常由浏览器存储，然后将 Cookie 与每个后续请求一起发送到同一服务器。收到HTTP 请求时，服务器可以发送带有 Cookie 的 header 头。可以给 Cookie 设置有效时间。</p>
<p>应用：</p>
<ul>
<li>
<p>会话管理：登录名，购物车商品，游戏得分或服务器应要记录的其他任何内容</p>
</li>
<li>
<p>个性化：用户首选项，主题或其他设置</p>
</li>
<li>
<p>跟踪：记录和分析用户行为，比如visitkey</p>
</li>
</ul>
<h3 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage"><span>sessionStorage</span></a></h3>
<p>创建一个本地存储的键/值对。</p>
<p>应用：</p>
<ul>
<li>
<p>缓存。</p>
</li>
<li>
<p>页面应用页面之间传值。</p>
</li>
</ul>
<h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage"><span>LocalStorage</span></a></h3>
<p>本地存储。</p>
<p>应用于：</p>
<ul>
<li>
<p>缓存静态文件内容 JavaScript /CSS（比如百度M站首页）</p>
</li>
<li>
<p>缓存不常变更的 API 接口数据</p>
</li>
<li>
<p>储存地理位置信息</p>
</li>
<li>
<p>浏览在页面的具体位置</p>
</li>
</ul>
<h3 id="indexeddb" tabindex="-1"><a class="header-anchor" href="#indexeddb"><span>IndexedDB</span></a></h3>
<p>索引数据库。</p>
<p>应用：</p>
<ul>
<li>
<p>客户端存储大量结构化数据</p>
</li>
<li>
<p>没有网络连接的情况下使用（比如 Google Doc、石墨文档）</p>
</li>
<li>
<p>将冗余、很少修改、但经常访问的数据，以避免随时从服务器获取数据</p>
</li>
</ul>
<h2 id="javascript-模块化加载方案和选型" tabindex="-1"><a class="header-anchor" href="#javascript-模块化加载方案和选型"><span>JavaScript 模块化加载方案和选型</span></a></h2>
<ul>
<li>CommonJS</li>
</ul>
<p>旨在 Web 浏览器之外为 JavaScript 建立模块生态系统。Node.js 模块化方案受 CommonJS。</p>
<ul>
<li>AMD (Asynchronous Module Definition)（异步模块定义）规范。</li>
</ul>
<p>RequireJS 模块化加载器：基于 AMD API 实现。</p>
<ul>
<li>CMD（ Common Module Definition）（通用模块定义）规范。</li>
</ul>
<p>SeaJS 模块化加载器：遵循 CMD API 编写。</p>
<ul>
<li>ES6 import。</li>
</ul>
<h2 id="减少回流和重绘重要举措" tabindex="-1"><a class="header-anchor" href="#减少回流和重绘重要举措"><span>减少回流和重绘重要举措</span></a></h2>
<h3 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS</span></a></h3>
<ul>
<li>
<p>避免过多样式嵌套</p>
</li>
<li>
<p>避免使用 CSS 表达式</p>
</li>
<li>
<p>使用绝对定位，可以让动画元素脱离文档流</p>
</li>
<li>
<p>避免使用 table 布局</p>
</li>
<li>
<p>尽量不使用 float 布局</p>
</li>
<li>
<p>图片最好设置好 width 和 height</p>
</li>
<li>
<p>尽量简化浏览器不必要的任务，减少页面重新布局</p>
</li>
<li>
<p>使用 Viewport 设置屏幕缩放级别</p>
</li>
<li>
<p>避免频繁设置样式，最好把新 style 属性设置完成后，进行一次性更改</p>
</li>
<li>
<p>避免使用引起回流/重绘的属性，最好把相应变量缓存起来</p>
</li>
</ul>
<h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>JavaScript</span></a></h3>
<ul>
<li>
<p>最小化回流和重排：为了减少回流发生次数，避免频繁或操作 DOM，可以合并多次对 DOM 修改，然后一次性批量处理。</p>
</li>
<li>
<p>控制绘制过程和绘制区域：绘制过程开销比较大的属性设置应该尽量避免减少使用；同时，减少绘制区域范围。</p>
</li>
</ul>
<h2 id="dom-编程优化的方式方法" tabindex="-1"><a class="header-anchor" href="#dom-编程优化的方式方法"><span>DOM 编程优化的⽅式方法</span></a></h2>
<h3 id="控制-dom-大小" tabindex="-1"><a class="header-anchor" href="#控制-dom-大小"><span>控制 DOM 大小</span></a></h3>
<p>众所周知，页面交互卡顿和流畅度很大一部分原因就是页面有大量 DOM 元素。想象一下，从一个上万节点的 DOM 树上，使用 querySelectorAll 或 getElementByTagName 方法查找某一个节点，是非常耗时的。另外元素绑定事件，事件冒泡和事件捕获的执行也会相对耗时。</p>
<p>通常控制 DOM 大小的技巧包括：</p>
<ul>
<li>
<p>合理的业务逻辑</p>
</li>
<li>
<p>延迟加载即将呈现的内容</p>
</li>
</ul>
<h3 id="简化-dom-操作" tabindex="-1"><a class="header-anchor" href="#简化-dom-操作"><span>简化 DOM 操作</span></a></h3>
<p>对DOM节点的操作统一处理后，再统一插入到 DOM Tree中。</p>
<p>可以使用 fragment，尽量不在页面 DOM Tree 里直接操作。</p>
<p>现在流行的框架 Angular、React、Vue 都在使用虚拟 DOM 技术，通过 diff 算法简化和减少 DOM 操作。</p>
<h2 id="静态文件压缩工具介绍" tabindex="-1"><a class="header-anchor" href="#静态文件压缩工具介绍"><span>静态文件压缩工具介绍</span></a></h2>
<p>HTML 压缩工具：</p>
<ul>
<li>html-minifier：https://www.npmjs.com/package/html-minifier</li>
</ul>
<p>CSS 压缩工具：</p>
<ul>
<li>clean-css：https://www.npmjs.com/package/clean-css</li>
</ul>
<p>JavaScript 压缩工具：</p>
<ul>
<li>
<p>uglify-js：https://www.npmjs.com/package/uglify-js</p>
</li>
<li>
<p>使用方法：uglifyjs in.js -o out.js</p>
</li>
</ul>
<h2 id="静态文文件打包方方案" tabindex="-1"><a class="header-anchor" href="#静态文文件打包方方案"><span>静态⽂文件打包⽅方案</span></a></h2>
<ul>
<li>
<p>公共组件拆分</p>
</li>
<li>
<p>压缩： JavaScript /CSS/图片</p>
</li>
<li>
<p>合并： JavaScript /CSS 文件合并，CSS Sprite</p>
</li>
<li>
<p>Combo： JavaScript /CSS 文件</p>
</li>
</ul>
<h2 id="静态文文件版本号更新策略" tabindex="-1"><a class="header-anchor" href="#静态文文件版本号更新策略"><span>静态⽂文件版本号更新策略</span></a></h2>
<p>缓存更新：CDN 或 ng 后台刷新文件路径，更新文件header头。</p>
<p>文件 name.v1-v100.js：</p>
<ul>
<li>
<p>大功能迭代每次新增一个大版本，比如由 v1 到 v2</p>
</li>
<li>
<p>小功能迭代新增加 0.0.1 或者 0.1.0，比如从 v1.0.0 至 v1.0.1</p>
</li>
<li>
<p>年末 ng 统一配置所有版本 302 至最新版</p>
</li>
</ul>
<p>时间戳.文件 name.js：以每次上线时间点做差异。</p>
<p>hash.文件。以文件内容 hash 值做 key。</p>
<h2 id="前端构建工具介绍和选型建议" tabindex="-1"><a class="header-anchor" href="#前端构建工具介绍和选型建议"><span>前端构建工具介绍和选型建议</span></a></h2>
<h3 id="常用构建工具" tabindex="-1"><a class="header-anchor" href="#常用构建工具"><span>常用构建工具</span></a></h3>
<ul>
<li>
<p>Gulp：通过流（Stream）来简化多个任务间的配置和输出，配置代码相对较少。</p>
</li>
<li>
<p>Webpack：预编译，中间文件在内存中处理，支持多种模块化，配置相对很简单。</p>
</li>
<li>
<p>FIS</p>
</li>
</ul>
<h3 id="webpack-打包优化" tabindex="-1"><a class="header-anchor" href="#webpack-打包优化"><span>webpack 打包优化</span></a></h3>
<ul>
<li>
<p>定位体积大的模块</p>
</li>
<li>
<p>删除没有使用的依赖</p>
</li>
<li>
<p>生产模式进行公共依赖包抽离</p>
</li>
<li>
<p>开发模式进行 DLL &amp; DllReference 方式优化</p>
</li>
</ul>
</div></template>


