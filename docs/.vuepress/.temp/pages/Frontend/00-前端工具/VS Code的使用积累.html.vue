<template><div><h1 id="vs-code的使用积累" tabindex="-1"><a class="header-anchor" href="#vs-code的使用积累"><span>VS Code的使用积累</span></a></h1>
<h2 id="常见配置" tabindex="-1"><a class="header-anchor" href="#常见配置"><span>常见配置</span></a></h2>
<p><strong>自动保存</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"> "files.autoSave": "onFocusChange"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参考链接：<a href="https://blog.csdn.net/WestLonly/article/details/78048049" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/WestLonly/article/details/78048049</a></p>
<p><strong>在新的窗口中打开文件</strong>：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"workbench.editor.enablePreview"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="常见操作" tabindex="-1"><a class="header-anchor" href="#常见操作"><span>常见操作</span></a></h2>
<h3 id="如何查看代码结构" tabindex="-1"><a class="header-anchor" href="#如何查看代码结构"><span>如何查看代码结构</span></a></h3>
<ul>
<li>
<p>方法一：「Cmd + Shift + O」</p>
</li>
<li>
<p>方法二：安装插件<code v-pre>Code Outline</code></p>
</li>
</ul>
<p>参考链接：<a href="https://www.zhihu.com/question/264045094" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/264045094</a></p>
<h3 id="在本地开启服务器" tabindex="-1"><a class="header-anchor" href="#在本地开启服务器"><span>在本地开启服务器</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> live-server</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动</span></span>
<span class="line">live-server</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：<a href="http://www.cnblogs.com/1zhk/p/5699379.html" target="_blank" rel="noopener noreferrer">Visual Studio Code + live-server编辑和浏览HTML网页</a></p>
<h2 id="常用插件" tabindex="-1"><a class="header-anchor" href="#常用插件"><span>常用插件</span></a></h2>
<p>方式一：打开VS Code，左侧有五个按钮，点击最下方的按钮，然后就可以开始安装相应的插件了。</p>
<p>方式二：在vscode中输入快捷键「ctrl+shift+P」，弹出指令窗口，输入<code v-pre>extension:install</code>，回车，左侧即打开扩展安装的界面。</p>
<h3 id="sftp-文件传输" tabindex="-1"><a class="header-anchor" href="#sftp-文件传输"><span>sftp：文件传输</span></a></h3>
<p>输入快捷键「ctrl+shift+P」，弹出指令窗口，输入<code v-pre>sftp:config</code>，回车，当前工作工程的<code v-pre>.vscode</code>文件夹下就会自动生成一个<code v-pre>sftp.json</code>文件，我们需要在这个文件里配置的是：</p>
<ul>
<li>
<p><code v-pre>host</code>：服务器的IP地址</p>
</li>
<li>
<p><code v-pre>username</code>：工作站自己的用户名</p>
</li>
<li>
<p><code v-pre>privateKeyPath</code>：存放在本地的已配置好的用于登录工作站的密钥文件（也可以是ppk文件）</p>
</li>
<li>
<p><code v-pre>remotePath</code>：工作站上与本地工程同步的文件夹路径，需要和本地工程文件根目录同名，且在使用sftp上传文件之前，要手动在工作站上mkdir生成这个根目录</p>
</li>
<li>
<p><code v-pre>ignore</code>：指定在使用sftp: sync to remote的时候忽略的文件及文件夹，注意每一行后面有逗号，最后一行没有逗号</p>
</li>
</ul>
<p>举例如下：(注意，其中的注释不能保留)</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>     <span class="token comment">//服务器ip</span></span>
<span class="line">    <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>     <span class="token comment">//端口，sftp模式是22</span></span>
<span class="line">    <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">//用户名</span></span>
<span class="line">    <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">//密码</span></span>
<span class="line">    <span class="token property">"protocol"</span><span class="token operator">:</span> <span class="token string">"sftp"</span><span class="token punctuation">,</span> <span class="token comment">//模式</span></span>
<span class="line">    <span class="token property">"agent"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"privateKeyPath"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"passphrase"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"passive"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"interactiveAuth"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"remotePath"</span><span class="token operator">:</span> <span class="token string">"/root/node/build/"</span><span class="token punctuation">,</span>  <span class="token comment">//服务器上的文件地址</span></span>
<span class="line">    <span class="token property">"context"</span><span class="token operator">:</span> <span class="token string">"./server/build"</span><span class="token punctuation">,</span>        <span class="token comment">//本地的文件地址</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">"uploadOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">//监听保存并上传</span></span>
<span class="line">    <span class="token property">"syncMode"</span><span class="token operator">:</span> <span class="token string">"update"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"watcher"</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">//监听外部文件</span></span>
<span class="line">        <span class="token property">"files"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>     <span class="token comment">//外部文件的绝对路径</span></span>
<span class="line">        <span class="token property">"autoUpload"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"autoDelete"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"ignore"</span><span class="token operator">:</span> <span class="token punctuation">[</span>             <span class="token comment">//忽略项</span></span>
<span class="line">        <span class="token string">"**/.vscode/**"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"**/.git/**"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"**/.DS_Store"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sass-formatter" tabindex="-1"><a class="header-anchor" href="#sass-formatter"><span>Sass Formatter</span></a></h3>
<p>Sass 文件格式化。</p>
<h3 id="code-outline-显示代码结构" tabindex="-1"><a class="header-anchor" href="#code-outline-显示代码结构"><span>Code Outline：显示代码结构</span></a></h3>
<p>安装好插件「Code Outline」后，可以在左侧的资源管理器中，显示当前文件的代码结构：</p>
<p><img src="http://img.smyhvae.com/20180420_0925.png" alt=""></p>
<p>参考链接：</p>
<ul>
<li>
<p><a href="https://www.zhihu.com/question/50273450" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/50273450</a></p>
</li>
<li>
<p><a href="http://itopic.org/vscode.html" target="_blank" rel="noopener noreferrer">http://itopic.org/vscode.html</a></p>
</li>
<li>
<p><a href="https://github.com/varHarrie/varharrie.github.io/issues/10" target="_blank" rel="noopener noreferrer">https://github.com/varHarrie/varharrie.github.io/issues/10</a></p>
</li>
</ul>
<h3 id="vscode-fileheader-添加顶部注释模板-签名" tabindex="-1"><a class="header-anchor" href="#vscode-fileheader-添加顶部注释模板-签名"><span>vscode-fileheader：添加顶部注释模板(签名)</span></a></h3>
<p>（1）安装插件vscode -fileheader，并重启。</p>
<p>（2）在首选项-》设置-》中搜索fileheader，找到头部模板修改。</p>
<p>默认的快捷键是：「Ctrl + option + I」。</p>
<p>参考链接：</p>
<ul>
<li><a href="https://www.zhihu.com/question/62385647" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/62385647</a></li>
</ul>
<h3 id="express" tabindex="-1"><a class="header-anchor" href="#express"><span>Express</span></a></h3>
<p>在本地开启Node服务器：</p>
<p><img src="http://img.smyhvae.com/20180611_2230.png" alt=""></p>
<p>然后在浏览器的地址栏输入<code v-pre>http://localhost/</code> + 文件的相对路径，就可以通过服务器的形式打开这个文件。</p>
<h3 id="copy-relative-path" tabindex="-1"><a class="header-anchor" href="#copy-relative-path"><span>Copy Relative Path</span></a></h3>
<blockquote>
<p>这个插件很有用，使用频率很高。</p>
</blockquote>
<p>复制文件的相对路径：（相对于根路径而言）</p>
<p><img src="http://img.smyhvae.com/20180611_2235.png" alt=""></p>
<h3 id="open-in-browser" tabindex="-1"><a class="header-anchor" href="#open-in-browser"><span>open in browser</span></a></h3>
<p>在浏览器中打开。</p>
<h3 id="auto-rename-tag" tabindex="-1"><a class="header-anchor" href="#auto-rename-tag"><span>Auto Rename Tag</span></a></h3>
<p>适用于 JSX、Vue、HTML。在修改标签名时，能在你修改开始（结束）标签的时候修改对应的结束（开始）标签，帮你减少 50% 的击键。</p>
<p>###Project Manager</p>
<p>项目管理，让我们方便的在命令面板中切换项目文件夹，当然，你也可以直接打开包含多个项目的父级文件夹，但这样可能会让 VSCode 变慢。</p>
<h3 id="highlight-icemode-选中相同的代码时-让高亮显示更加明显【荐】" tabindex="-1"><a class="header-anchor" href="#highlight-icemode-选中相同的代码时-让高亮显示更加明显【荐】"><span>highlight-icemode：选中相同的代码时，让高亮显示更加明显【荐】</span></a></h3>
<p>VSCode自带的高亮显示，实在是不够显眼。用插件支持一下吧。</p>
<p>所用了这个插件之后，VS Code自带的高亮就可以关掉了：</p>
<p>在用户设置里添加<code v-pre>&quot;editor.selectionHighlight&quot;: false</code>即可。</p>
<p>参考链接：<a href="https://blog.csdn.net/palmer_kai/article/details/79548164" target="_blank" rel="noopener noreferrer">vscode 选中后相同内容高亮插件推荐</a></p>
<h3 id="highlight-words-全局高亮-跨文件多色彩" tabindex="-1"><a class="header-anchor" href="#highlight-words-全局高亮-跨文件多色彩"><span>highlight-words：全局高亮（跨文件多色彩）</span></a></h3>
<p>参考链接：<a href="https://zhuanlan.zhihu.com/p/31163793" target="_blank" rel="noopener noreferrer">Visual Studio Code全局高亮着色插件(跨文件多色彩)经验纪要</a></p>
<h3 id="color-exchange-颜色格式转换【荐】" tabindex="-1"><a class="header-anchor" href="#color-exchange-颜色格式转换【荐】"><span>color-exchange：颜色格式转换【荐】</span></a></h3>
<p>安装完插件后，在css中输入颜色，然后按<code v-pre>cmd + .</code>，就能进行颜色的格式转换。</p>
<p>20181013_1450.png</p>
<p>我在写这一段时，安装的人还不多，赶紧上车。</p>
<h2 id="vue-相关的插件" tabindex="-1"><a class="header-anchor" href="#vue-相关的插件"><span>Vue 相关的插件</span></a></h2>
<h3 id="vetur-vue-文件的基本语法高亮" tabindex="-1"><a class="header-anchor" href="#vetur-vue-文件的基本语法高亮"><span>vetur：vue 文件的基本语法高亮</span></a></h3>
<p>安装完 vetur 后还需要加上这样一段配置下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">"emmet.syntaxProfiles": {</span>
<span class="line">  "vue-html": "html",</span>
<span class="line">  "vue": "html"</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>
<ul>
<li>
<p><a href="https://www.clarencep.com/2017/03/18/edit-vue-file-via-vscode/" target="_blank" rel="noopener noreferrer">https://www.clarencep.com/2017/03/18/edit-vue-file-via-vscode/</a></p>
</li>
<li>
<p><a href="https://github.com/varHarrie/varharrie.github.io/issues/10" target="_blank" rel="noopener noreferrer">https://github.com/varHarrie/varharrie.github.io/issues/10</a></p>
</li>
</ul>
<h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h3>
<ul>
<li>
<p><a href="https://www.jianshu.com/p/0724921285d4" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/0724921285d4</a></p>
</li>
<li>
<p><a href="https://www.cnblogs.com/AmosLee94/p/8338013.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/AmosLee94/p/8338013.html</a></p>
</li>
</ul>
<h2 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键"><span>常用快捷键</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">Win快捷键</th>
<th style="text-align:left">Mac快捷键</th>
<th style="text-align:left">作用</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Shift + Alt + F</td>
<td style="text-align:left">Shift + option + F</td>
<td style="text-align:left">代码格式化</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Ctrl + Shift + N</td>
<td style="text-align:left"></td>
<td style="text-align:left">在当前行上面增加一行并跳至该行</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><strong>Ctrl + Shift + D</strong></td>
<td style="text-align:left"></td>
<td style="text-align:left">复制当前行到下一行</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h3 id="如何同时打开多个窗口" tabindex="-1"><a class="header-anchor" href="#如何同时打开多个窗口"><span>如何同时打开多个窗口</span></a></h3>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2>
<p>问题1</p>
<p>解决；You can kill the Microsoft.VSCode.Cpp.IntelliSense.Msvc process to save the file successfully. 也就是 IntelliSense 这个进程。</p>
<h2 id="参考链接-1" tabindex="-1"><a class="header-anchor" href="#参考链接-1"><span>参考链接</span></a></h2>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/30976584" target="_blank" rel="noopener noreferrer">能让你开发效率翻倍的 VSCode 插件配置（上）</a></li>
</ul>
<h3 id="某网友的vs-code-插件截图" tabindex="-1"><a class="header-anchor" href="#某网友的vs-code-插件截图"><span>某网友的VS Code 插件截图</span></a></h3>
<p><img src="http://img.smyhvae.com/20180611_2255.png" alt=""></p>
</div></template>


