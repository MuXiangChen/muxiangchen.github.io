<template><div><h2 id="本文主要内容" tabindex="-1"><a class="header-anchor" href="#本文主要内容"><span>本文主要内容</span></a></h2>
<p>字体标签： <code v-pre>&lt;font&gt;</code>、 <code v-pre>&lt;b&gt;</code>、 <code v-pre>&lt;u&gt;</code> 、<code v-pre>&lt;sup&gt;</code> 、<code v-pre>&lt;sub&gt;</code></p>
<p>超链接 <code v-pre>&lt;a&gt;</code></p>
<h2 id="字体标签" tabindex="-1"><a class="header-anchor" href="#字体标签"><span>字体标签</span></a></h2>
<h3 id="特殊字符-转义字符" tabindex="-1"><a class="header-anchor" href="#特殊字符-转义字符"><span>特殊字符（转义字符）</span></a></h3>
<ul>
<li><code v-pre>&amp;nbsp;</code>：空格	（non-breaking spacing，不断打空格）</li>
<li><code v-pre>&amp;lt;</code>：小于号<code v-pre>&lt;</code>（less than）</li>
<li><code v-pre>&amp;gt;</code>：大于号<code v-pre>&gt;</code>（greater than）</li>
<li><code v-pre>&amp;amp;</code>：符号<code v-pre>&amp;</code></li>
<li><code v-pre>&amp;quot;</code>：双引号</li>
<li><code v-pre>&amp;apos;</code>：单引号</li>
<li><code v-pre>&amp;copy;</code>：版权<code v-pre>©</code></li>
<li><code v-pre>&amp;trade;</code>：商标<code v-pre>™</code></li>
<li><code v-pre>&amp;#32464;</code>：文字<code v-pre>绐</code>。其实，<code v-pre>#32464</code>是汉字<code v-pre>绐</code>的unicode编码。</li>
</ul>
<p>比如说，你想把<code v-pre>&lt;p&gt;</code>作为一个文本在页面上显示，直接写<code v-pre>&lt;p&gt;</code>是肯定不行的，因为这代表的是一个段落标签，所以这里需要用到<strong>转义字符</strong>。应该这么写：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">这是一个HTML语言的<span class="token entity named-entity" title="&lt;">&amp;lt;</span>p<span class="token entity named-entity" title="&gt;">&amp;gt;</span>标签</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>正确的效果如下：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_11.png" alt="Paste_Image.png"></p>
<p>错误的效果如下：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_12.png" alt="Paste_Image.png"></p>
<p>其实我们只要记住前三个符号就行了，其他的在需要的时候查一下就行了。而且，EditPlus软件中是可以直接点击这些符号进行选择的：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_13.png" alt="Paste_Image.png"></p>
<p>来一张表格，方便需要的时候查询：</p>
<table>
<thead>
<tr>
<th style="text-align:left">特殊字符</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">字符的代码</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">空格符</td>
<td style="text-align:left"><code v-pre>&amp;nbsp;</code></td>
</tr>
<tr>
<td style="text-align:left">&lt;</td>
<td style="text-align:left">小于号</td>
<td style="text-align:left"><code v-pre>&amp;lt;</code></td>
</tr>
<tr>
<td style="text-align:left">&gt;</td>
<td style="text-align:left">大于号</td>
<td style="text-align:left"><code v-pre>&amp;gt;</code></td>
</tr>
<tr>
<td style="text-align:left">&amp;</td>
<td style="text-align:left">和号</td>
<td style="text-align:left"><code v-pre>&amp;amp;</code></td>
</tr>
<tr>
<td style="text-align:left">￥</td>
<td style="text-align:left">人民币</td>
<td style="text-align:left"><code v-pre>&amp;yen;</code></td>
</tr>
<tr>
<td style="text-align:left">©</td>
<td style="text-align:left">版权</td>
<td style="text-align:left"><code v-pre>&amp;copy;</code></td>
</tr>
<tr>
<td style="text-align:left">®</td>
<td style="text-align:left">注册商标</td>
<td style="text-align:left"><code v-pre>&amp;reg;</code></td>
</tr>
<tr>
<td style="text-align:left">°</td>
<td style="text-align:left">摄氏度</td>
<td style="text-align:left"><code v-pre>&amp;deg;</code></td>
</tr>
<tr>
<td style="text-align:left">±</td>
<td style="text-align:left">正负号</td>
<td style="text-align:left"><code v-pre>&amp;plusmn;</code></td>
</tr>
<tr>
<td style="text-align:left">×</td>
<td style="text-align:left">乘号</td>
<td style="text-align:left"><code v-pre>&amp;times;</code></td>
</tr>
<tr>
<td style="text-align:left">÷</td>
<td style="text-align:left">除号</td>
<td style="text-align:left"><code v-pre>&amp;divide;</code></td>
</tr>
<tr>
<td style="text-align:left">²</td>
<td style="text-align:left">平方2（上标2）</td>
<td style="text-align:left"><code v-pre>&amp;sup2;</code></td>
</tr>
<tr>
<td style="text-align:left">³</td>
<td style="text-align:left">立方3（上标3）</td>
<td style="text-align:left"><code v-pre>&amp;sup3;</code></td>
</tr>
</tbody>
</table>
<h3 id="下划线、中划线、斜体" tabindex="-1"><a class="header-anchor" href="#下划线、中划线、斜体"><span>下划线、中划线、斜体</span></a></h3>
<ul>
<li>
<p><code v-pre>&lt;u&gt;</code>：下划线标记</p>
</li>
<li>
<p><code v-pre>&lt;s&gt;</code>或<code v-pre>&lt;del&gt;</code>：中划线标记（删除线）</p>
</li>
<li>
<p><code v-pre>&lt;i&gt;</code>或<code v-pre>&lt;em&gt;</code>：斜体标记</p>
</li>
</ul>
<p>效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_15.png" alt="Paste_Image.png"></p>
<p>上面的这几个标签，常用于做一些小装饰、小图标。比如：</p>
<p><img src="http://img.smyhvae.com/20180118_2340.png" alt=""></p>
<p>这张图中，我们通过查看京东网站的代码发现，箭头处的小图标都是用的标签<code v-pre>&lt;i&gt;</code>。</p>
<h3 id="粗体标签-b-或-strong-已废弃" tabindex="-1"><a class="header-anchor" href="#粗体标签-b-或-strong-已废弃"><span>粗体标签<code v-pre>&lt;b&gt;</code>或<code v-pre>&lt;strong&gt;</code>（已废弃）</span></a></h3>
<p>效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_14.png" alt="Paste_Image.png"></p>
<h3 id="字体标签-font-已废弃" tabindex="-1"><a class="header-anchor" href="#字体标签-font-已废弃"><span>字体标签<code v-pre>&lt;font&gt;</code>（已废弃）</span></a></h3>
<p>属性：</p>
<ul>
<li>
<p><code v-pre>color=&quot;红色&quot;</code>或<code v-pre>color=&quot;#ff00cc&quot;</code>或<code v-pre>color=&quot;new rgb(0,0,255)&quot;</code>：设置字体颜色。
设置方式：单词 \  #ff00cc \   rgb(0,0,255)</p>
</li>
<li>
<p><code v-pre>size</code>：设置字体大小。 取值范围只能是：1至7。取值时，如果取值大于7那就按照7来算，如果取值小于1那就按照1来算。如果想要更大的字体，那就只能通过css样式来解决。</p>
</li>
<li>
<p><code v-pre>face=&quot;微软雅黑&quot;</code>：设置字体类型。</p>
</li>
</ul>
<p>举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">face</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>微软雅黑<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#FF0000<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>vae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_10.png" alt="Paste_Image.png"></p>
<h3 id="上标-sup-下标-sub" tabindex="-1"><a class="header-anchor" href="#上标-sup-下标-sub"><span>上标<code v-pre>&lt;sup&gt;</code>   下标<code v-pre>&lt;sub&gt;</code></span></a></h3>
<p>上小标这两个标签容易混淆，怎么记呢？这样记：<code v-pre>b</code>的意思是<code v-pre>bottom：底部</code>
举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">O<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sup</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sup</span><span class="token punctuation">></span></span>    5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_16.png" alt="Paste_Image.png"></p>
<h2 id="三、超链接" tabindex="-1"><a class="header-anchor" href="#三、超链接"><span>三、超链接</span></a></h2>
<p>超链接有三种形式，下面分别讲讲。</p>
<h3 id="_1、外部链接-链接到外部文件" tabindex="-1"><a class="header-anchor" href="#_1、外部链接-链接到外部文件"><span>1、外部链接：链接到外部文件</span></a></h3>
<p>举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>02页面.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击进入另外一个文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>a是英语<code v-pre>anchor</code>“锚”的意思，就好像这个页面往另一个页面扔出了一个锚。是一个文本级的标签。</p>
<p>href（hypertext reference）：超文本地址。读作“喝瑞夫”，不要读作“喝夫”。</p>
<p>效果：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_17.png" alt="Paste_Image.png"></p>
<p>当然，我们也可以直接点进链接，访问一个网址。代码举例如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.baidu.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2、锚链接" tabindex="-1"><a class="header-anchor" href="#_2、锚链接"><span>2、锚链接</span></a></h3>
<p><strong>锚链接</strong>：给超链接起一个名字，作用是<strong>在本页面或者其他页面的的不同位置进行跳转</strong>。比如说，在网页底部有一个向上箭头，点击箭头后回到顶部，这个就可以利用锚链接。</p>
<p>首先我们要创建一个<strong>锚点</strong>，也就是说，使用<code v-pre>name</code>属性或者<code v-pre>id</code>属性给那个特定的位置起个名字。效果如下：</p>
<p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_18.png" alt="Paste_Image.png"></p>
<p>上图中解释：</p>
<p>第11行代码表示，顶部这个锚的名字叫做name1。
然后在底部设置超链接，点击时将回到顶部（此时，网页中的url的末尾也出现了<code v-pre>#name1</code>）。注意<strong>上图中红框部分的<code v-pre>#</code>号不要忘记了</strong>，表示跳到名为name1的特定位置，这是规定。如果少了<code v-pre>#</code>号，点击之后，就会跳到name1这个文件或者name1这个文件夹中去。</p>
<p>如果我们将上图中的第28行代码写成：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a.html#name1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>回到顶部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>那就表示，点击之后，跳转到<code v-pre>a.html</code>页面的<code v-pre>name1锚点</code>中去。</p>
<p>说明：name属性是HTML4.0以前使用的，id属性是HTML4.0后才开始使用。为了向前兼容，因此，name和id这两个属性都要写上，并且值是一样的。</p>
<h3 id="_3、邮件链接" tabindex="-1"><a class="header-anchor" href="#_3、邮件链接"><span>3、邮件链接</span></a></h3>
<p>代码举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mailto:xxx@163.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击进入我的邮箱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果：点击之后，会弹出outlook，作用不大。</p>
<h3 id="超链接的属性" tabindex="-1"><a class="header-anchor" href="#超链接的属性"><span>超链接的属性</span></a></h3>
<ul>
<li><code v-pre>href</code>：目标URL</li>
<li><code v-pre>title</code>：悬停文本。</li>
<li><code v-pre>name</code>：主要用于设置一个锚点的名称。</li>
<li><code v-pre>target</code>：告诉浏览器用什么方式来打开目标页面。<code v-pre>target</code>属性有以下几个值：
<ul>
<li><code v-pre>_self</code>：在同一个网页中显示（默认值）</li>
<li><code v-pre>_blank</code>：<strong>在新的窗口中打开</strong>。</li>
<li><code v-pre>_parent</code>：在父窗口中显示</li>
<li><code v-pre>_top</code>：在顶级窗口中显示</li>
</ul>
</li>
</ul>
<p><code v-pre>title</code>属性举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>09_img.html<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>很好看哦<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>结婚照<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20170630_1415.png" alt=""></p>
<p><code v-pre>target</code>属性举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.html<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>悬停文本<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>链接的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>blank就是“空白”的意思，就表示新建一个空白窗口。为啥有一个_ ，就是规定，无需解释。
也就是说，如果不写<code v-pre>target=”_blank”</code>那么就是在相同的标签页打开，如果写了<code v-pre>target=”_blank”</code>，就是在新的空白标签页中打开。</p>
<h4 id="备注1-分清楚img和a标签的各自的属性" tabindex="-1"><a class="header-anchor" href="#备注1-分清楚img和a标签的各自的属性"><span>备注1：分清楚img和a标签的各自的属性</span></a></h4>
<p>区别如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="备注2-a是一个文本级的标签" tabindex="-1"><a class="header-anchor" href="#备注2-a是一个文本级的标签"><span>备注2：a是一个文本级的标签</span></a></h4>
<p>比如一个段落中的所有文字都能够被点击，那么应该是p包裹a：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>段落段落段落段落段落段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而不是a包裹p：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">		段落段落段落段落段落段落</span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>a的语义要小于p，a就是可以当做文本来处理，所以p里面相当于放的就是纯文字。</p>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="https://img.smyhvae.com/20200102.png" alt=""></p>
</div></template>


