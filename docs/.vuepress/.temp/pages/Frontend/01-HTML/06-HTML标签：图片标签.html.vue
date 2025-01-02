<template><div><h2 id="img标签介绍" tabindex="-1"><a class="header-anchor" href="#img标签介绍"><span>img标签介绍</span></a></h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3>
<p>img: 英文全称 image（图像），代表的是一张图片。</p>
<p>如果要想在网页中显示图像，就可以使用img 标签，它是一个单标签。语法如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片的URL<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="能插入的图片类型" tabindex="-1"><a class="header-anchor" href="#能插入的图片类型"><span>能插入的图片类型</span></a></h3>
<ul>
<li>
<p>能够插入的图片类型是：jpg(jpeg)、gif、png、bmp等。</p>
</li>
<li>
<p>不能往网页中插入的图片格式是：psd、ai等。</p>
</li>
</ul>
<p>HTML页面不是直接插入图片，而是插入图片的引用地址，所以要先把图片上传到服务器上。</p>
<h2 id="img标签的src属性" tabindex="-1"><a class="header-anchor" href="#img标签的src属性"><span>img标签的<code v-pre>src</code>属性</span></a></h2>
<p>这里涉及到图片的一个属性：</p>
<ul>
<li><code v-pre>src</code>属性：指图片的路径。英文名称 source。</li>
</ul>
<p>在写<strong>图片的路径</strong>时，有两种写法：相对路径、绝对路径</p>
<h3 id="写法一-图片的相对路径" tabindex="-1"><a class="header-anchor" href="#写法一-图片的相对路径"><span>写法一：图片的相对路径</span></a></h3>
<p>相对当前页面所在的路径。两个标记 <code v-pre>.</code> 和 <code v-pre>..</code> 分表代表当前目录和上一层目录。</p>
<p>举例1：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 当前目录中的图片 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./2.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 上一级目录中的图片 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../2.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相对路径不会出现这种情况：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">aaa/../bbb/1.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>../</code>要么不写，要么就写在开头。</p>
<p>举例2：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>images/1.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上方代码的意思是说，当前html页面有一个并列的文件夹<code v-pre>images</code>，在文件夹<code v-pre>images</code>中存放了一张图片<code v-pre>1.jpg</code>
效果：</p>
<p><img src="http://img.smyhvae.com/20151001_19.jpg" alt="Paste_Image.png"></p>
<p>相对路径的面试题。现有如下文件层级图：</p>
<p><img src="http://img.smyhvae.com/20170630_1133.png" alt=""></p>
<p>问题：如果想在index.html中插入1.png，那么对应的img语句是？</p>
<p>分析：</p>
<p>现在document是最大的文件夹，里面有两个文件夹work和photo。work中又有一个文件夹叫做myweb。myweb文件夹里面有index.html。  所以index.html在myweb文件夹里面，上一级就是work文件夹，上两级就是document文件夹。通过document文件夹当做一个中转站，进入photo文件夹，看到了1.png。</p>
<p>答案：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../../photo/1.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="写法二-图片的绝对路径" tabindex="-1"><a class="header-anchor" href="#写法二-图片的绝对路径"><span>写法二：图片的绝对路径</span></a></h3>
<p>绝对路径包括以下两种：</p>
<p>（1）以盘符开始的绝对路径。举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C:\Users\qianguyihao\Desktop\html\images\1.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（2）网络路径。举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://img.smyhvae.com/20200122_200901.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>大家打开上面的img中的链接，可能有彩蛋哦。</p>
<h3 id="相对路径和绝对路径的总结" tabindex="-1"><a class="header-anchor" href="#相对路径和绝对路径的总结"><span>相对路径和绝对路径的总结</span></a></h3>
<p>相对路径的好处：站点不管拷贝到哪里，文件和图片的相对路径关系都是不变的。相对路径使用有一个前提，就是网页文件和你的图片，必须在一个服务器上。</p>
<p><strong>总结一下</strong>：</p>
<p>无论是在 a 标签还是 img 标签上，如果要用路径。只有两种路径能用，就是相对路径和绝对路径：</p>
<ul>
<li>
<p>相对路径从自己出发，找到别人。</p>
</li>
<li>
<p>绝对路径，就是<code v-pre>http://</code>或者<code v-pre>https://</code>开头的路径。</p>
</li>
</ul>
<h2 id="img标签的其他属性" tabindex="-1"><a class="header-anchor" href="#img标签的其他属性"><span>img标签的其他属性</span></a></h2>
<h3 id="width、height-属性" tabindex="-1"><a class="header-anchor" href="#width、height-属性"><span>width、height 属性</span></a></h3>
<ul>
<li>
<p><code v-pre>width</code>：图像的宽度。</p>
</li>
<li>
<p><code v-pre>height</code>：图像的高度。</p>
</li>
</ul>
<p>width和height，在 HTML5 中的单位是 CSS 像素，在 HTML 4 中既可以是像素，也可以是百分比。可以只指定 width 和 height 中的一个值，浏览器会根据原始图像进行缩放。</p>
<p><strong>重要提示</strong>：如果要想保证图片等比例缩放，请只设置width和height中其中一个。</p>
<h3 id="alt-属性" tabindex="-1"><a class="header-anchor" href="#alt-属性"><span>Alt 属性</span></a></h3>
<ul>
<li><code v-pre>alt</code>：当图片不可用（无法显示）的时候，代替图片显示的内容。alt是英语 alternate “替代”的意思，代表替换资源。</li>
</ul>
<p><code v-pre>Alt</code>属性效果演示：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_21.png" alt="Paste_Image.png"></p>
<p>如上图所示：当图片 src 不可用的时候，显示文字。这样做，至少能让用户知道，这个图片大概是什么内容。</p>
<h3 id="title-属性" tabindex="-1"><a class="header-anchor" href="#title-属性"><span>title 属性</span></a></h3>
<ul>
<li><code v-pre>title</code>：<strong>提示性文本</strong>。鼠标悬停时出现的文本。</li>
</ul>
<p>title 属性不该被用作一幅图片在 alt 之外的补充说明信息。如果一幅图片需要小标题，使用 figure 或 figcaption 元素。</p>
<p>title 元素的值一般作为提示条(tooltip)呈现给用户，在光标于图片上停下后显示出来。尽管这确实能给用户提供更多的信息，您不该假定用户真的能看到：用户可能只有键盘或触摸屏。如果要把特别重要的信息提供给用户，可以选择上面提供的一种方法将其内联显示，而不是使用 title。</p>
<p>举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>images/1.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`188<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>这是美女<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_20.png" alt="Paste_Image.png"></p>
<h3 id="align-属性" tabindex="-1"><a class="header-anchor" href="#align-属性"><span>align 属性</span></a></h3>
<ul>
<li>图片的<code v-pre>align</code>属性：<strong>图片和周围文字的相对位置</strong>。属性取值可以是：bottom（默认）、center、top、left、right。</li>
</ul>
<p>如果想实现图文混排的效果，请使用align属性，取值为left或right。</p>
<p>我们来分别看一下这<code v-pre>align</code>属性的这几个属性值的区别。</p>
<p>1、<code v-pre>align=&quot;&quot;</code>，图片和文字底端对齐。即默认情况下的显示效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_19.png" alt=""></p>
<p>2、<code v-pre>align=&quot;center&quot;</code>：图片和文字水平方向上居中对齐。显示效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_21.png" alt=""></p>
<p>3、<code v-pre>align=&quot;top&quot;</code>：图片与文字顶端对齐。显示效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_22.png" alt=""></p>
<p>4、<code v-pre>align=&quot;left&quot;</code>：图片在文字的左边。显示效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_23.png" alt=""></p>
<p>5、<code v-pre>align=&quot;right&quot;</code>：图片在文字的右边。显示效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_24.png" alt=""></p>
<h3 id="其他已废弃的属性" tabindex="-1"><a class="header-anchor" href="#其他已废弃的属性"><span>其他已废弃的属性</span></a></h3>
<ul>
<li><code v-pre>Align</code>（已废弃）：指图片的水平对齐方式，属性值可以是：top、middle、bottom、left、center、right。该属性已废弃，替换为 <code v-pre>vertical-align</code>这个CSS属性。</li>
<li><code v-pre>border</code>（已废弃）：给图片加边框，单位是像素，边框的颜色默认黑色。该属性已废弃，替换为 <code v-pre>border</code>这个CSS属性。</li>
<li><code v-pre>Hspace</code>（已废弃）：指图片左右的边距。</li>
<li><code v-pre>Vspace</code>（已废弃）：指图片上下的边距。</li>
</ul>
<p>最后，送上妹子的近照一张。楼主已经仁至义尽了：http://img.smyhvae.com/2015-10-01-cnblogs_html_20150219214912_11994.jpg</p>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="https://img.smyhvae.com/20200102.png" alt=""></p>
</div></template>


