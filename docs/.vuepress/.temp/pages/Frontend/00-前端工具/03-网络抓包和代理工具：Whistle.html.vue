<template><div><h2 id="whistle-官网" tabindex="-1"><a class="header-anchor" href="#whistle-官网"><span>Whistle 官网</span></a></h2>
<ul>
<li>
<p>Whistle 官网：<a href="https://wproxy.org/whistle/" target="_blank" rel="noopener noreferrer">https://wproxy.org/whistle/</a></p>
</li>
<li>
<p>Whistle 的 GitHub：<a href="https://github.com/avwo/whistle" target="_blank" rel="noopener noreferrer">https://github.com/avwo/whistle</a></p>
</li>
</ul>
<h2 id="whistle-安装启动" tabindex="-1"><a class="header-anchor" href="#whistle-安装启动"><span>Whistle 安装启动</span></a></h2>
<h3 id="_1、whistle-安装" tabindex="-1"><a class="header-anchor" href="#_1、whistle-安装"><span>1、Whistle 安装</span></a></h3>
<p>（1）通过 npm 安装 Whistle</p>
<h3 id="_2、启动-whistle" tabindex="-1"><a class="header-anchor" href="#_2、启动-whistle"><span>2、启动 whistle</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">w2 start</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后在浏览器输入<code v-pre>http://127.0.0.1:8899/</code> 即可打开代理配置的页面。</p>
<h3 id="_3、配置代理" tabindex="-1"><a class="header-anchor" href="#_3、配置代理"><span>3、配置代理</span></a></h3>
<p><strong>chrome浏览器配置代理</strong>：</p>
<p>可参考官方文档。</p>
<p><strong>Firefox浏览器配置代理</strong>：</p>
<p><img src="https://img.smyhvae.com/20200420_1357.png" alt=""></p>
<h3 id="_4、安装证书并添加信任" tabindex="-1"><a class="header-anchor" href="#_4、安装证书并添加信任"><span>4、安装证书并添加信任：</span></a></h3>
<p><img src="https://img.smyhvae.com/20200420_0922.png" alt=""></p>
<p>证书下载后，双击安装，安装目录选择“登录”这个tab。安装完成后，记得执行 <code v-pre>w2 restart</code>重启 whistle。</p>
<h3 id="手机设置代理" tabindex="-1"><a class="header-anchor" href="#手机设置代理"><span>手机设置代理</span></a></h3>
<p>连接好指定的wifi后，点击那个wifi里的设置，将「代理」那一项，设置为手动，然后输入ip（电脑上的ip）、端口号（8899）。然后就可以通过电脑上的whistle工具，查看手机的网页请求。</p>
<p>注意，要保证手机和电脑在同一个网络下。</p>
<p>另外，还需要在手机的浏览器，地址栏输入<code v-pre>rootca.pro</code>，给手机安装证书。</p>
<h2 id="捕获和拦截https请求" tabindex="-1"><a class="header-anchor" href="#捕获和拦截https请求"><span>捕获和拦截https请求</span></a></h2>
<p>whistle安装证书后，可以拦截 https 请求。但是，我现在又不想拦截https请求了，该怎么卸载证书呢？</p>
<p>我发现，证书无法卸载，正确的操作是：</p>
<p><img src="http://img.smyhvae.com/20180426_1621.png" alt=""></p>
<p>上图中，把红框部分，去掉勾选，就不捕获https了。谢谢azh童鞋。</p>
<p>参考链接：</p>
<ul>
<li>
<p><a href="https://www.zhihu.com/question/21474174" target="_blank" rel="noopener noreferrer">Android 手机如何设置http代理？</a></p>
</li>
<li>
<p><a href="http://zhuscat.com/2017/09/20/https-proxy-on-ios/" target="_blank" rel="noopener noreferrer">使用 Whistle 对 iOS HTTPS 进行抓包</a></p>
</li>
</ul>
<h2 id="移动端调试神器-eruda" tabindex="-1"><a class="header-anchor" href="#移动端调试神器-eruda"><span>移动端调试神器:eruda</span></a></h2>
<blockquote>
<p>手机连接代理时，如何看console.log的日志信息?</p>
</blockquote>
<blockquote>
<p>现在，代码里有console.log，如果是在电脑浏览器上看，可以直接在控制台查看console.log的内容。但是，如果手机连接代理，在手机上打开网页的话，要怎么查看console.log的内容呢？具体做法如下：</p>
</blockquote>
<p>（1）在 whistle中，新建一个名叫<code v-pre>Eruda H5</code>的代理，代理中的内容是：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">http://xxx.com htmlAppend://{eruda.html}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>(2)新建一个values，里面的内容是：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//cdn.bootcss.com/eruda/1.4.3/eruda.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    eruda<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就OK了。</p>
<h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


