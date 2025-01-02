<template><div><h1 id="atom在前端的使用" tabindex="-1"><a class="header-anchor" href="#atom在前端的使用"><span>Atom在前端的使用</span></a></h1>
<h2 id="常用插件" tabindex="-1"><a class="header-anchor" href="#常用插件"><span>常用插件</span></a></h2>
<ul>
<li><code v-pre>Emmet</code>：快速生成HTML片段，比如输入ul&gt;li*3可以快速生成：</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://atom.io/packages/emmet" target="_blank" rel="noopener noreferrer">详细地址</a>，<a href="https://docs.emmet.io/cheat-sheet/" target="_blank" rel="noopener noreferrer">Emmet教程</a></p>
<ul>
<li>
<p><code v-pre>Snippets</code>：快速生成 js 代码片段（用来处理代码片段的模板输出），<a href="https://atom.io/packages/snippets" target="_blank" rel="noopener noreferrer">详细地址</a></p>
</li>
<li>
<p><code v-pre>Tree View</code>：文件浏览器，<a href="https://atom.io/packages/tree-view" target="_blank" rel="noopener noreferrer">详细地址</a></p>
</li>
<li>
<p><code v-pre>file icons</code>：文件识别图标，使用这个插件会让你的编辑器显示对应的图标，<a href="https://atom.io/packages/file-icons" target="_blank" rel="noopener noreferrer">详细地址</a></p>
</li>
<li>
<p><code v-pre>language-javascript-jsx</code>：jsx语法高亮 ，<a href="https://atom.io/packages/language-javascript-jsx" target="_blank" rel="noopener noreferrer">详细地址</a></p>
</li>
<li>
<p><code v-pre>language-vue</code>：vue语法高亮，<a href="https://atom.io/packages/language-vue" target="_blank" rel="noopener noreferrer">详细地址</a></p>
</li>
<li>
<p><code v-pre>linter-eslint</code>：eslint插件，<a href="https://atom.io/packages/linter-eslint" target="_blank" rel="noopener noreferrer">详细地址</a></p>
</li>
<li>
<p><code v-pre>vue-snippets</code>：vue代码片段，<a href="https://atom.io/packages/vue-snippets" target="_blank" rel="noopener noreferrer">详细地址</a></p>
</li>
<li>
<p><code v-pre>pigments</code>：颜色显示器，<a href="https://atom.io/packages/pigments" target="_blank" rel="noopener noreferrer">详细地址</a></p>
</li>
<li>
<p><code v-pre>linter-eslint</code>：语法检查</p>
</li>
<li>
<p><code v-pre>Atom-Beautify</code>：代码格式化</p>
</li>
</ul>
<p>参考链接：<a href="https://github.com/cucygh/JDFinance/blob/master/issue.md" target="_blank" rel="noopener noreferrer">https://github.com/cucygh/JDFinance/blob/master/issue.md</a></p>
<h2 id="插件无法安装的问题" tabindex="-1"><a class="header-anchor" href="#插件无法安装的问题"><span>插件无法安装的问题</span></a></h2>
<h3 id="方法一-设置代理" tabindex="-1"><a class="header-anchor" href="#方法一-设置代理"><span>方法一：设置代理</span></a></h3>
<p><code v-pre>C:\Users\smyhvae\.atom\.apm</code>目录下的.apmrc配置文件（没有就新建一个）,然后添加代理信息：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">strict-ssl=false</span>
<span class="line">https-proxy=http://127.0.0.1:1080/</span>
<span class="line">http-proxy =http://127.0.0.1:1080/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 http://127.0.0.1:1080，是我自己的 Shadowsocks 代理，你需要设置成自己的可用代理。
然后再执行：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">apm install --check</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>应该可以测试成功，祝好运~~</p>
<p>参考链接：</p>
<ul>
<li>
<p><a href="https://atom-china.org/t/atom/984" target="_blank" rel="noopener noreferrer">https://atom-china.org/t/atom/984</a></p>
</li>
<li>
<p><a href="https://zhenyong.github.io/2016/08/03/starting-atom/" target="_blank" rel="noopener noreferrer">https://zhenyong.github.io/2016/08/03/starting-atom/</a></p>
</li>
</ul>
<h2 id="markdown相关" tabindex="-1"><a class="header-anchor" href="#markdown相关"><span>Markdown相关</span></a></h2>
<h3 id="在编辑器中预览" tabindex="-1"><a class="header-anchor" href="#在编辑器中预览"><span>在编辑器中预览</span></a></h3>
<p>2018-06-JD日记.md</p>
<p>Packages -&gt; Markdown Preview -&gt; Toggle Preview</p>
<p>快捷键：Shift + Ctrl + M</p>
<h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接：</span></a></h3>
<ul>
<li><a href="http://www.cnblogs.com/fanzhidongyzby/p/6637084.html" target="_blank" rel="noopener noreferrer">使用Atom打造无懈可击的Markdown编辑器</a></li>
</ul>
<h2 id="相关设置" tabindex="-1"><a class="header-anchor" href="#相关设置"><span>相关设置</span></a></h2>
<h3 id="显示缩进线" tabindex="-1"><a class="header-anchor" href="#显示缩进线"><span>显示缩进线</span></a></h3>
<p>settings --&gt;Editor --&gt; Show Indent Guide</p>
</div></template>


