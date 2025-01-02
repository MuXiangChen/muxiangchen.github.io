<template><div><h2 id="amd的基本语法" tabindex="-1"><a class="header-anchor" href="#amd的基本语法"><span>AMD的基本语法</span></a></h2>
<h3 id="amd的概念" tabindex="-1"><a class="header-anchor" href="#amd的概念"><span>AMD的概念</span></a></h3>
<p><strong>AMD</strong>（Asynchronous Module Definition）：异步模块定义。AMD专门用于浏览器端，模块的加载是异步的。</p>
<p><a href="https://github.com/amdjs/amdjs-api" target="_blank" rel="noopener noreferrer"><strong>AMD规范</strong></a>：是 <strong><a href="http://requirejs.org/" target="_blank" rel="noopener noreferrer">RequireJS</a></strong> 在推广过程中对模块化定义的规范化产出。</p>
<p>RequireJS：一个基于AMD规范实现的模块化开发解决方案。</p>
<h3 id="暴露模块的方式" tabindex="-1"><a class="header-anchor" href="#暴露模块的方式"><span>暴露模块的方式</span></a></h3>
<p><strong>定义没有依赖的模块</strong>：（参数只有一个 function）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> 模块</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义有依赖的模块</strong>：（参数有两个：模块名、function）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//定义有依赖的模块：第一个参数为数组</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'module1'</span><span class="token punctuation">,</span> <span class="token string">'module2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m1<span class="token punctuation">,</span> m2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> 模块</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：</p>
<ul>
<li>
<p>第一个参数必须是数组，里面存放的是，需要依赖的其他的模块。</p>
</li>
<li>
<p>第二个参数是function，里面带了形参 m1 和 m2，分别代表了 module1 和 module2。这个形参的作用是，前面依赖的模块一旦声明了，就可以一一对应地注入到 function中去，从而在 function 内部使用依赖的模块。这种方式称之为<strong>显式声明依赖注入</strong>。</p>
</li>
</ul>
<h3 id="引入模块的方式" tabindex="-1"><a class="header-anchor" href="#引入模块的方式"><span>引入模块的方式</span></a></h3>
<p>在主模块中引入其他的模块：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//在主模块中引入其他的模块</span></span>
<span class="line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'module1'</span><span class="token punctuation">,</span> <span class="token string">'module2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m1<span class="token punctuation">,</span> m2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    使用m1 <span class="token operator">/</span> m2</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="requirejs-是amd的实现" tabindex="-1"><a class="header-anchor" href="#requirejs-是amd的实现"><span>RequireJS：是AMD的实现</span></a></h3>
<ul>
<li>
<p><a href="http://www.requirejs.org/" target="_blank" rel="noopener noreferrer">http://www.requirejs.org/</a></p>
</li>
<li>
<p><a href="http://www.ruanyifeng.com/blog/2012/11/require_js.html" target="_blank" rel="noopener noreferrer">http://www.ruanyifeng.com/blog/2012/11/require_js.html</a></p>
</li>
</ul>
<h2 id="requirejs的使用举例-自定义模块" tabindex="-1"><a class="header-anchor" href="#requirejs的使用举例-自定义模块"><span>RequireJS的使用举例（自定义模块）</span></a></h2>
<h3 id="_1、创建项目结构" tabindex="-1"><a class="header-anchor" href="#_1、创建项目结构"><span>1、创建项目结构</span></a></h3>
<p>在工程文件中新建如下目录：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">js</span>
<span class="line">  | libs</span>
<span class="line"></span>
<span class="line">  | modules</span>
<span class="line">    	| alerter.js</span>
<span class="line">    	| dataService.js</span>
<span class="line">  | main.js</span>
<span class="line"></span>
<span class="line">index.html</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有的代码写完之后，项目结构如下：</p>
<p><img src="http://img.smyhvae.com/20180411_1331.png" alt=""></p>
<h3 id="_2、下载require-js-并导入" tabindex="-1"><a class="header-anchor" href="#_2、下载require-js-并导入"><span>2、下载require.js，并导入</span></a></h3>
<ul>
<li>
<p>官网: <a href="http://requirejs.org/docs/download.html" target="_blank" rel="noopener noreferrer">http://requirejs.org/docs/download.html</a></p>
</li>
<li>
<p>GitHub：<a href="https://github.com/requirejs/requirejs" target="_blank" rel="noopener noreferrer">https://github.com/requirejs/requirejs</a></p>
</li>
</ul>
<p>在官网下载<code v-pre>require.js</code>文件：</p>
<p><img src="http://img.smyhvae.com/20180411_1127.png" alt=""></p>
<p>然后将<code v-pre>require.js</code>文件拷贝到项目的<code v-pre>js/libs/</code>目录中。</p>
<p>这样的话，就导入成功了。</p>
<h3 id="_3、自定义模块" tabindex="-1"><a class="header-anchor" href="#_3、自定义模块"><span>3、自定义模块</span></a></h3>
<p>（1）dataService.js：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//定义没有依赖的模块</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'我是 dataService.js中的内容'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//暴露模块</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> getName <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这模块没有依赖。</p>
<p>（2）alerter.js：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//定义有依赖的模块</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'myDataService'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dataService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">'我是 aleter.js中的内容'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">showMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataService<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//调用了 myDataService 模块中的内容</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//暴露模块</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> showMsg <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个模块，依赖了<code v-pre>myDataService</code>这个模块，模块名是我自己起的。稍后，我们会在main.js中做映射，将<code v-pre>myDataService</code>这个名字和<code v-pre>dataService.js</code>文件关联起来。</p>
<p>（3）main.js：</p>
<blockquote>
<p>这个是主模块。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">requirejs<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//baseUrl: 'js/',     //基本路径</span></span>
<span class="line">    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">{</span>    <span class="token comment">//配置路径</span></span>
<span class="line">        <span class="token literal-property property">myDataService</span><span class="token operator">:</span> <span class="token string">'./modules/dataService'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">myAlerter</span><span class="token operator">:</span> <span class="token string">'./modules/alerter'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">requirejs</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'myAlerter'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">alerter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    alerter<span class="token punctuation">.</span><span class="token function">showMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个模块，依赖了<code v-pre>myAlerter</code>这个模块，模块名是我自己起的。并且，我们在文件的上方做了映射，将<code v-pre>myAlerter</code>这个名字和<code v-pre>alerter.js</code>文件关联了起来。</p>
<p>我们来讲一下最上方的几行代码（即<code v-pre>requirejs.config</code>里的内容）的意思：</p>
<ul>
<li>
<p>我们可以看到，文件（3）依赖了文件（2），文件（2）依赖了文件（1）。</p>
</li>
<li>
<p><code v-pre>paths</code>里做的就是映射：将键<code v-pre>myDataService</code>和文件<code v-pre>dataService.js</code>进行关联，将键<code v-pre>myAlerter</code>和文件<code v-pre>alerter.js</code>进行关联。</p>
</li>
</ul>
<p>另外，再讲一下注释里的<code v-pre>baseUrl</code>的用法：如果没有这个注释，那么<code v-pre>paths</code>里的路径，是从<strong>当前这个文件</strong>（main.js）的角度出发的；如果加了一行<code v-pre>baseUrl</code>，表明它是 paths 里所有路径的最开头的部分，<code v-pre>baseUrl</code>的路径是从<strong>项目的根目录</strong>的角度出发的。</p>
<p>（4）index.html：</p>
<p>这个是入口文件。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 先通过 src 引入 require.js 文件，然后通过 data-main 引入主模块（main.js） --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">data-main</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js/main.js<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js/libs/require.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，上面的代码中，我们直接通过<code v-pre>src</code>属性引入<code v-pre>requre.js </code>文件，一旦这个文件发挥作用了，会去找<code v-pre>data-main</code>属性里的指向，它正好指向的是主模块。</p>
<p>有了上面这种引入的方式，我们就不用再老土地引入多个<code v-pre>&lt;script&gt;</code>标签了。</p>
<p>运行 index.html，打印结果如下：</p>
<p><img src="http://img.smyhvae.com/20180411_1740.png" alt=""></p>
<p>项目源码：<a href="https://download.csdn.net/download/smyhvae/10341963" target="_blank" rel="noopener noreferrer">2018-04-11-RequireJSDemo</a></p>
</div></template>


