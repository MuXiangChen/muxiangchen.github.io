<template><div><blockquote>
<p>本文最初发表于<a href="http://www.cnblogs.com/smyhvae/p/8401662.html" target="_blank" rel="noopener noreferrer">博客园</a>，并在<a href="https://github.com/qianguyihao/Web" target="_blank" rel="noopener noreferrer">GitHub</a>上持续更新<strong>前端的系列文章</strong>。欢迎在GitHub上关注我，一起入门和进阶前端。</p>
</blockquote>
<blockquote>
<p>以下是正文。</p>
</blockquote>
<h2 id="bom的介绍" tabindex="-1"><a class="header-anchor" href="#bom的介绍"><span>BOM的介绍</span></a></h2>
<h3 id="javascript的组成" tabindex="-1"><a class="header-anchor" href="#javascript的组成"><span>JavaScript的组成</span></a></h3>
<p>JavaScript基础分为三个部分：</p>
<ul>
<li>
<p>ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。</p>
</li>
<li>
<p><strong>DOM</strong>：文档对象模型，操作<strong>网页上的元素</strong>的API。比如让盒子移动、变色、轮播图等。</p>
</li>
<li>
<p><strong>BOM</strong>：浏览器对象模型，操作<strong>浏览器部分功能</strong>的API。比如让浏览器自动滚动。</p>
</li>
</ul>
<h3 id="什么是bom" tabindex="-1"><a class="header-anchor" href="#什么是bom"><span>什么是BOM</span></a></h3>
<p>BOM：Browser Object Model，浏览器对象模型。</p>
<p><strong>BOM的结构图：</strong></p>
<p><img src="http://img.smyhvae.com/20180201_2052.png" alt=""></p>
<p>从上图也可以看出：</p>
<ul>
<li>
<p><strong>window对象是BOM的顶层(核心)对象</strong>，所有对象都是通过它延伸出来的，也可以称为window的子对象。</p>
</li>
<li>
<p>DOM越是BOM的一部分。</p>
</li>
</ul>
<p><strong>window对象：</strong></p>
<ul>
<li>
<p><strong>window对象是JavaScript中的顶级对象</strong>。</p>
</li>
<li>
<p>全局变量、自定义函数也是window对象的属性和方法。</p>
</li>
<li>
<p>window对象下的属性和方法调用时，可以省略window。</p>
</li>
</ul>
<p>下面讲一下 <strong>BOM 的常见内置方法和内置对象</strong>。</p>
<h2 id="弹出系统对话框" tabindex="-1"><a class="header-anchor" href="#弹出系统对话框"><span>弹出系统对话框</span></a></h2>
<p>比如说，<code v-pre>alert(1)</code>是<code v-pre>window.alert(1)</code>的简写，因为它是window的子方法。</p>
<p>系统对话框有三种：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//不同浏览器中的外观是不一样的</span></span>
<span class="line">	<span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//兼容不好</span></span>
<span class="line">	<span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//不推荐使用</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打开窗口、关闭窗口" tabindex="-1"><a class="header-anchor" href="#打开窗口、关闭窗口"><span>打开窗口、关闭窗口</span></a></h2>
<p>1、打开窗口：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	window.open(url,target,param)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>参数解释：</strong></p>
<ul>
<li>
<p>url：要打开的地址。</p>
</li>
<li>
<p>target：新窗口的位置。可以是：<code v-pre>_blank</code> 、<code v-pre>_self</code>、 <code v-pre>_parent</code> 父框架。</p>
</li>
<li>
<p>param：新窗口的一些设置。</p>
</li>
<li>
<p>返回值：新窗口的句柄。</p>
</li>
</ul>
<p><strong>param</strong>这个参数，可以填各种各样的参数（），比如：</p>
<ul>
<li>
<p>name：新窗口的名称，可以为空</p>
</li>
<li>
<p>features：属性控制字符串，在此控制窗口的各种属性，属性之间以逗号隔开。</p>
</li>
<li>
<p>fullscreen= { yes/no/1/0 } 是否全屏，默认no</p>
</li>
<li>
<p>channelmode= { yes/no/1/0 } 是否显示频道栏，默认no</p>
</li>
<li>
<p>toolbar= { yes/no/1/0 } 是否显示工具条，默认no</p>
</li>
<li>
<p>location= { yes/no/1/0 } 是否显示地址栏，默认no。（有的浏览器不一定支持）</p>
</li>
<li>
<p>directories = { yes/no/1/0 } 是否显示转向按钮，默认no</p>
</li>
<li>
<p>status= { yes/no/1/0 } 是否显示窗口状态条，默认no</p>
</li>
<li>
<p>menubar= { yes/no/1/0 } 是否显示菜单，默认no</p>
</li>
<li>
<p>scrollbars= { yes/no/1/0 } 是否显示滚动条，默认yes</p>
</li>
<li>
<p>resizable= { yes/no/1/0 } 是否窗口可调整大小，默认no</p>
</li>
<li>
<p>width=number 窗口宽度（像素单位）</p>
</li>
<li>
<p>height=number 窗口高度（像素单位）</p>
</li>
<li>
<p>top=number 窗口离屏幕顶部距离（像素单位）</p>
</li>
<li>
<p>left=number 窗口离屏幕左边距离（像素单位）</p>
</li>
</ul>
<p>各个参数之间用逗号隔开就行，但我们最好是把它们统一放到json里。</p>
<p>2、关闭窗口：window.close()</p>
<p>（1）和（2）的代码举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击我打开一个新的页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击我关闭本页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">//新窗口 = window.open(地址,是否开新窗口,新窗口的各种参数);</span></span>
<span class="line">    <span class="token keyword">var</span> a1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">var</span> a2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    a1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//举例1： window.open("http://www.jx.com","_blank");</span></span>
<span class="line">        <span class="token keyword">var</span> json <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"helloworld"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"fullscreen"</span><span class="token operator">:</span> <span class="token string">"no"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"location"</span><span class="token operator">:</span> <span class="token string">"no"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"width"</span><span class="token operator">:</span> <span class="token string">"100px"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"height"</span><span class="token operator">:</span> <span class="token string">"100px"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"top"</span><span class="token operator">:</span> <span class="token string">"100px"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"left"</span><span class="token operator">:</span> <span class="token string">"100px"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"http://www.baidu.com"</span><span class="token punctuation">,</span> <span class="token string">"_blank"</span><span class="token punctuation">,</span> json<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//举例2</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//关闭本页面</span></span>
<span class="line">    a2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、新窗口相关：</p>
<ul>
<li>
<p>新窗口.moveTo(5,5)</p>
</li>
<li>
<p>新窗口.moveBy()</p>
</li>
<li>
<p>新窗口.resizeTo()</p>
</li>
<li>
<p>window.resizeBy()</p>
</li>
</ul>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">        <span class="token keyword">var</span> newWin <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"demo.html"</span><span class="token punctuation">,</span> <span class="token string">"_blank"</span><span class="token punctuation">,</span> json<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        newWin<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location对象" tabindex="-1"><a class="header-anchor" href="#location对象"><span>location对象</span></a></h2>
<p><code v-pre>window.location</code>可以简写成location。location相当于浏览器地址栏，可以将url解析成独立的片段。</p>
<h3 id="location对象的属性" tabindex="-1"><a class="header-anchor" href="#location对象的属性"><span>location对象的属性</span></a></h3>
<ul>
<li>
<p><strong>href</strong>：跳转</p>
</li>
<li>
<p>hash   返回url中#后面的内容，包含#</p>
</li>
<li>
<p>host    主机名，包括端口</p>
</li>
<li>
<p>hostname   主机名</p>
</li>
<li>
<p>pathname     url中的路径部分</p>
</li>
<li>
<p>protocol    协议 一般是http、https</p>
</li>
<li>
<p>search	     查询字符串</p>
</li>
</ul>
<p><strong>location.href属性举例</strong>：</p>
<p>**举例1：**点击盒子时，进行跳转。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>smyhvae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    div<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"http://www.baidu.com"</span><span class="token punctuation">;</span>   <span class="token comment">//点击div时，跳转到指定链接</span></span>
<span class="line"> <span class="token comment">//     window.open("http://www.baidu.com","_blank");  //方式二</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例2：5秒后自动跳转到百度</strong>。</p>
<p>有时候，当我们访问一个不存在的网页时，会提示5秒后自动跳转到指定页面，此时就可以用到location。举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"http://www.baidu.com"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location对象的方法" tabindex="-1"><a class="header-anchor" href="#location对象的方法"><span>location对象的方法</span></a></h3>
<ul>
<li>location.assign()：改变浏览器地址栏的地址，并记录到历史中</li>
</ul>
<p>设置location.href  就会调用assign()。一般使用location.href 进行页面之间的跳转。</p>
<ul>
<li>
<p>location.replace()：替换浏览器地址栏的地址，不会记录到历史中</p>
</li>
<li>
<p>location.reload()：重新加载</p>
</li>
</ul>
<h2 id="navigator对象" tabindex="-1"><a class="header-anchor" href="#navigator对象"><span>navigator对象</span></a></h2>
<p>window.navigator 的一些属性可以获取客户端的一些信息。</p>
<ul>
<li>
<p>userAgent：系统，浏览器)</p>
</li>
<li>
<p>platform：浏览器支持的系统，win/mac/linux</p>
</li>
</ul>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20180201_2140.png" alt=""></p>
</div></template>


