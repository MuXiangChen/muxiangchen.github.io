<template><div><h2 id="path-路径模块" tabindex="-1"><a class="header-anchor" href="#path-路径模块"><span>path 路径模块</span></a></h2>
<p>Node.js 通过<code v-pre>path</code>这个内置模块，提供了一些路径操作的API，具体可以参考官方的api文档。这里列举一些常用的API。</p>
<h3 id="path-extname-获取文件-路径的扩展名" tabindex="-1"><a class="header-anchor" href="#path-extname-获取文件-路径的扩展名"><span>path.extname() 获取文件/路径的扩展名</span></a></h3>
<p>语法格式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>myPath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>代码解释：</p>
<ul>
<li>
<p>获取 <code v-pre>myPath</code> 这个文件或者路径的扩展名。</p>
</li>
<li>
<p><code v-pre>myPath</code> 这个参数要求是字符串。如果 <code v-pre>myPath</code> 不是字符串，则抛出 TypeError。</p>
</li>
</ul>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">'hello.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 '.txt'</span></span>
<span class="line"></span>
<span class="line">path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">'www.qianguyihao.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 '.com'</span></span>
<span class="line"></span>
<span class="line">path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">'index.coffee.md'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回 '.md'</span></span>
<span class="line"></span>
<span class="line">path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">'index.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回 '.'</span></span>
<span class="line"></span>
<span class="line">path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">'index'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回 ''</span></span>
<span class="line"></span>
<span class="line">path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">'.index'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回 ''</span></span>
<span class="line"></span>
<span class="line">path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">'.index.md'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回 '.md'</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="path-resolve-生成完成的绝对路径" tabindex="-1"><a class="header-anchor" href="#path-resolve-生成完成的绝对路径"><span>path.resolve() 生成完成的绝对路径</span></a></h3>
<p>语法格式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>myPaths<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：</p>
<ul>
<li>
<p>将路径或路径片段的序列解析为绝对路径。</p>
</li>
<li>
<p>返回的路径是<strong>从右往左</strong>处理，后面的每个 myPath 被依次解析，直到构造出一个完整的绝对路径。</p>
</li>
</ul>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/foo1/foo2'</span><span class="token punctuation">,</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span> <span class="token string">'foo3'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result1 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token operator">...</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：/foo1/foo2/qianguyihao/foo3</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/foo1/foo2'</span><span class="token punctuation">,</span> <span class="token string">'/qianguyihao'</span><span class="token punctuation">,</span> <span class="token string">'foo3'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token operator">...</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：/qianguyihao/foo3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="几个常见路径" tabindex="-1"><a class="header-anchor" href="#几个常见路径"><span>几个常见路径</span></a></h3>
<ul>
<li>
<p><code v-pre>__dirname</code>：这是一个常量，表示：当前执行文件所在<strong>完整目录</strong>。</p>
</li>
<li>
<p><code v-pre>__filename</code>：这是一个常量。表示：当前执行文件的<strong>完整目录 + 文件名</strong>。</p>
</li>
<li>
<p><code v-pre>process.cwd</code>：获取当前执行 Node命令 时的目录名。</p>
</li>
</ul>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token function">node</span> app.js</span>
<span class="line"></span>
<span class="line">/Users/smyhvae/qianguyihao</span>
<span class="line">/Users/smyhvae/qianguyihao/app.js</span>
<span class="line">/Users/smyhvae/qianguyihao</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="path-join-将多个路径进行拼接" tabindex="-1"><a class="header-anchor" href="#path-join-将多个路径进行拼接"><span>path.join() 将多个路径进行拼接</span></a></h3>
<p>如果是我们手动拼接路径，容易出错。这个时候，可以利用 path.join() 方法将路径进行拼接。</p>
<p>语法格式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>paths<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result1 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./app.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回：/Users/smyhvae/qianguyihao/app.js</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/foo1'</span><span class="token punctuation">,</span> <span class="token string">'foo2'</span><span class="token punctuation">,</span> <span class="token string">'./foo3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回：/foo1/foo2/foo3</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result3 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/foo1'</span><span class="token punctuation">,</span> <span class="token string">'foo2'</span><span class="token punctuation">,</span> <span class="token string">'/foo3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回：/foo1/foo2/foo3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="os-系统模块" tabindex="-1"><a class="header-anchor" href="#os-系统模块"><span>OS 系统模块</span></a></h2>
<ul>
<li>os.networkInterfaces() 查看网络地址</li>
</ul>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="https://img.smyhvae.com/20200102.png" alt=""></p>
</div></template>


