<template><div><h2 id="全局对象" tabindex="-1"><a class="header-anchor" href="#全局对象"><span>全局对象</span></a></h2>
<h3 id="global" tabindex="-1"><a class="header-anchor" href="#global"><span>global</span></a></h3>
<p>类似于客户端 JavaScript 运行环境中的 window。</p>
<h2 id="process" tabindex="-1"><a class="header-anchor" href="#process"><span>process</span></a></h2>
<p>用于获取当前的 Node 进程信息，一般用于获取环境变量之类的信息。</p>
<h3 id="console" tabindex="-1"><a class="header-anchor" href="#console"><span>console</span></a></h3>
<p>Node 中内置的 console 模块，提供操作控制台的输入输出功能，常见使用方式与客户端类似。</p>
<h2 id="全局函数" tabindex="-1"><a class="header-anchor" href="#全局函数"><span>全局函数</span></a></h2>
<ul>
<li>
<p>setInterval(callback, millisecond)</p>
</li>
<li>
<p>clearInterval(timer)</p>
</li>
<li>
<p>setTimeout(callback, millisecond)</p>
</li>
<li>
<p>clearTimeout(timer)</p>
</li>
<li>
<p>Buffer：Class</p>
<ul>
<li>用于操作二进制数据</li>
<li>以后介绍</li>
</ul>
</li>
</ul>
<h2 id="node-调试" tabindex="-1"><a class="header-anchor" href="#node-调试"><span>Node 调试</span></a></h2>
<h3 id="最简单的调试" tabindex="-1"><a class="header-anchor" href="#最简单的调试"><span>最简单的调试</span></a></h3>
<p>最方便也是最简单的调试：console.log()</p>
<h3 id="node-原生的调试" tabindex="-1"><a class="header-anchor" href="#node-原生的调试"><span>Node 原生的调试</span></a></h3>
<p>网址：<a href="https://nodejs.org/api/debugger.html" target="_blank" rel="noopener noreferrer">https://nodejs.org/api/debugger.html</a></p>
<h3 id="第三方模块提供的调试工具" tabindex="-1"><a class="header-anchor" href="#第三方模块提供的调试工具"><span>第三方模块提供的调试工具</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">$ npm install node-inspector –g   //方式一</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">$ npm install devtool -g          //方式二</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开发工具的调试" tabindex="-1"><a class="header-anchor" href="#开发工具的调试"><span>开发工具的调试</span></a></h3>
<ul>
<li>
<p>Visual Studio Code</p>
</li>
<li>
<p>WebStorm</p>
</li>
</ul>
<h2 id="模块化结构" tabindex="-1"><a class="header-anchor" href="#模块化结构"><span>模块化结构</span></a></h2>
<p>Node 实现 CommonJS 规范，所以可以使用模块化的方式组织代码结构。</p>
<ul>
<li>
<p>Node 采用的模块化结构是按照 CommonJS 规范。</p>
</li>
<li>
<p>模块与文件是一一对应关系，即加载一个模块，实际上就是加载对应的一个模块文件。</p>
</li>
</ul>
<h3 id="commonjs-规范" tabindex="-1"><a class="header-anchor" href="#commonjs-规范"><span>CommonJS 规范</span></a></h3>
<p>CommonJS 就是一套约定标准，不是技术。用于约定我们的代码应该是怎样的一种结构。</p>
<p>参考链接：</p>
<ul>
<li><a href="http://wiki.commonjs.org/wiki/CommonJS" target="_blank" rel="noopener noreferrer">http://wiki.commonjs.org/wiki/CommonJS</a></li>
</ul>
<h3 id="常用内置模块" tabindex="-1"><a class="header-anchor" href="#常用内置模块"><span>常用内置模块</span></a></h3>
<ul>
<li>
<p><code v-pre>path</code>：处理文件路径。</p>
</li>
<li>
<p><code v-pre>fs</code>：操作（CRUD）文件系统。</p>
</li>
<li>
<p><code v-pre>child_process</code>：新建子进程。</p>
</li>
<li>
<p><code v-pre>util</code>：提供一系列实用小工具。</p>
</li>
<li>
<p><code v-pre>http</code>：提供 HTTP 服务器功能。</p>
</li>
<li>
<p><code v-pre>url</code>：用于解析 URL。</p>
</li>
<li>
<p><code v-pre>querystring</code>：解析 URL 中的查询字符串。</p>
</li>
<li>
<p><code v-pre>crypto</code>：提供加密和解密功能。</p>
</li>
</ul>
<p>总结：更多内容可以参考 api文档：<a href="https://nodejs.org/api/" target="_blank" rel="noopener noreferrer">https://nodejs.org/api/</a></p>
<h2 id="文件系统操作" tabindex="-1"><a class="header-anchor" href="#文件系统操作"><span>文件系统操作</span></a></h2>
<h3 id="相关模块" tabindex="-1"><a class="header-anchor" href="#相关模块"><span>相关模块</span></a></h3>
<ul>
<li>
<p>fs：基础的文件操作 API</p>
</li>
<li>
<p>path：提供和路径相关的操作 API</p>
</li>
<li>
<p>readline：用于读取大文本文件，一行一行读</p>
</li>
<li>
<p>fs-extra（第三方）：<a href="https://www.npmjs.com/package/fs-extra" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/fs-extra</a></p>
</li>
</ul>
</div></template>


