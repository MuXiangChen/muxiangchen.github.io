<template><div><h2 id="模块化开发的引入" tabindex="-1"><a class="header-anchor" href="#模块化开发的引入"><span>模块化开发的引入</span></a></h2>
<h3 id="js开发的弊端" tabindex="-1"><a class="header-anchor" href="#js开发的弊端"><span>JS开发的弊端</span></a></h3>
<p>JS 在使用时存在两大问题，而 Node.js 可以很好地避免这两个问题：</p>
<ul>
<li>
<p>文件依赖。比如 a 文件依赖 b 文件，b 文件依赖 c 文件。而 Node.js 中的文件依赖，不需要人工维护和人为分析。</p>
</li>
<li>
<p>命名冲突。js 的各个文件是相互开放的，容易导致命名冲突。而 Node.js 是属于半封闭的状态，可以指定哪些内容是开放的，哪些内容是封闭的。</p>
</li>
</ul>
<p>Node.js 在解决这两个问题时，用到的就是模块化开发。</p>
<h3 id="软件开发中的模块化开发" tabindex="-1"><a class="header-anchor" href="#软件开发中的模块化开发"><span>软件开发中的模块化开发</span></a></h3>
<p>一个功能就是一个模块，多个模块可以组成完整的应用，抽离一个模块不会影响其他功能的运行。</p>
<p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20200409_1934.png" alt=""></p>
<h3 id="node-js-中的模块化开发" tabindex="-1"><a class="header-anchor" href="#node-js-中的模块化开发"><span>Node.js 中的模块化开发</span></a></h3>
<p>Node.js 规定，一个 JS 文件就是一个模块，模块内部定义的变量和函数默认情况下在外部无法访问。</p>
<p>模块内部可以使用 <code v-pre>exports</code> 对象进行成员导出， 使用 <code v-pre>require</code> 方法导入其他模块。效果如下：</p>
<p><img src="http://img.smyhvae.com/20200409_1932.png" alt=""></p>
<h2 id="es6模块化的基本语法" tabindex="-1"><a class="header-anchor" href="#es6模块化的基本语法"><span>ES6模块化的基本语法</span></a></h2>
<h3 id="es6模块化的说明" tabindex="-1"><a class="header-anchor" href="#es6模块化的说明"><span>ES6模块化的说明</span></a></h3>
<p><strong>依赖模块需要编译打包处理</strong>。原因如下：</p>
<ul>
<li>
<p>（1）有些浏览器不支持 ES6 的语法，写完 ES6 的代码后，需要通过<code v-pre>Babel</code>将 ES6 转化为 ES5。</p>
</li>
<li>
<p>（2）生成了ES5之后，里面仍然有<code v-pre>require</code>语法，而浏览器并不认识<code v-pre>require</code>这个关键字。此时，可以用 <code v-pre>Browserify</code>编译打包 js，进行再次转换。</p>
</li>
</ul>
<p>推荐学习链接：</p>
<ul>
<li><a href="http://es6.ruanyifeng.com/#docs/module" target="_blank" rel="noopener noreferrer">http://es6.ruanyifeng.com/#docs/module</a></li>
</ul>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法：</span></a></h3>
<p><strong>导出模块</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	export</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>引入模块</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	import xxx from '路径'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="es6模块化的使用举例-自定义模块" tabindex="-1"><a class="header-anchor" href="#es6模块化的使用举例-自定义模块"><span>ES6模块化的使用举例（自定义模块）</span></a></h2>
<h3 id="_1、初始化项目" tabindex="-1"><a class="header-anchor" href="#_1、初始化项目"><span>1、初始化项目</span></a></h3>
<p>（1）在工程文件中新建如下目录：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">js</span>
<span class="line">    | src</span>
<span class="line">    	| module1.js</span>
<span class="line">    	| module2.js</span>
<span class="line">    	| module3.js</span>
<span class="line">    	| main.js</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">index.html</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）在工程的根目录下，新建文件<code v-pre>package.json</code>，内容如下：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"es6-babel-browserify"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、环境配置-安装babel-和-browserify等" tabindex="-1"><a class="header-anchor" href="#_2、环境配置-安装babel-和-browserify等"><span>2、环境配置：安装babel 和 browserify等</span></a></h3>
<p>（1）安装babel 和 browserify：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">	<span class="token function">npm</span> <span class="token function">install</span> babel-cli <span class="token parameter variable">-g</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">npm</span> <span class="token function">install</span> babel-preset-es2015 --save-dev</span>
<span class="line"></span>
<span class="line">	<span class="token function">npm</span> <span class="token function">install</span> browserify <span class="token parameter variable">-g</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 babel 的详细解释，可以参考本人的另外一篇文章：<a href="https://github.com/smyhvae/Web/blob/master/10-ES6/03-ES6%E7%9A%84%E4%BB%8B%E7%BB%8D%E5%92%8C%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.md" target="_blank" rel="noopener noreferrer">ES6的介绍和环境配置</a></p>
<p>（2）新建.babelrc：</p>
<p>在根目录下新建文件<code v-pre>.babelrc</code>，输入如下内容：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{</span>
<span class="line">    "presets":[</span>
<span class="line">        "es2015"</span>
<span class="line">    ],</span>
<span class="line">    "plugins":[]</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、编写代码" tabindex="-1"><a class="header-anchor" href="#_3、编写代码"><span>3、编写代码</span></a></h3>
<p>（1）module1.js：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//暴露模块：采用分别暴露的方式</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是 module1 中的 foo1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是 module2 中的 foo2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）module2.js：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//暴露模块：采用统一暴露的方式</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是 module2 中的 fn1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是 module2 中的 fn2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//统一暴露</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> fn1<span class="token punctuation">,</span> fn2 <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）module3.js：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//暴露模块：采用默认暴露的方式。</span></span>
<span class="line"><span class="token comment">//默认暴露的方式可以暴露任意数据类型，暴露的是什么数据，接收到的就是什么数据</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//语法格式：export default value;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是 module3 中 default 方式暴露的函数'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们采取了一种新的暴露方式（默认暴露），在暴露时，加上了<code v-pre>default</code>这个关键字。代码里暴露了一个箭头函数，稍后，我们注意在main.js里是怎么引入module3.js的。</p>
<p>注意，我们只能写一次 default，也就是说，只能进行一次默认暴露。</p>
<p>（4）module4.js：（default方式暴露多个属性）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//暴露模块：采用默认暴露的方式。</span></span>
<span class="line"><span class="token comment">//默认暴露的方式可以暴露任意数据类型，暴露的是什么数据，接收到的就是什么数据</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//语法格式：export default value;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'我是 module4 中 default 方式暴露的属性 name'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是 module4 中 default 方式暴露的函数 foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们依旧采取了默认暴露的方式，只能写一次 default。代码里暴露了一个对象（对象里存放了一个属性、一个方法）。稍后，我们注意在main.js里是怎么引入module4.js的。</p>
<p>如果我想暴露多个属性、多个对象怎呢？很简单，把你想要暴露的所有内容，都放在default里，包成一个对象。你看module4.js就是如此， 同时暴露了多个属性&amp;方法。</p>
<p>（5）main.js：</p>
<p>这个是主模块。现在，我们来看一下，它如何引入上面的四个模块。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token comment">//主模块。引入其他的模块</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> foo1<span class="token punctuation">,</span> foo2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./module1'</span><span class="token punctuation">;</span> <span class="token comment">//采用解构赋值的形式进行导入。注意，括号里的对象名，要和 module1 中的对象名一致。</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> fn1<span class="token punctuation">,</span> fn2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./module2'</span><span class="token punctuation">;</span>   <span class="token comment">//采用解构赋值的形式进行导入。注意，括号里的对象名，要和 module2 中的对象名一致。</span></span>
<span class="line"><span class="token keyword">import</span> myModule3 <span class="token keyword">from</span> <span class="token string">'./module3'</span><span class="token punctuation">;</span>   <span class="token comment">//module3 模块是采用 default 方式进行暴露的，myModule3 这个名字是我随便起的</span></span>
<span class="line"><span class="token keyword">import</span> myModule4 <span class="token keyword">from</span> <span class="token string">'./module4'</span><span class="token punctuation">;</span>   <span class="token comment">//module4 模块是采用 default 方式进行暴露的，myModule4 这个名字是我随便起的</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//调用module1、module2中的内容</span></span>
<span class="line"><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//调用module3中的内容</span></span>
<span class="line"><span class="token function">myModule3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//调用module4中的内容</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myModule4<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//module4中的属性</span></span>
<span class="line">myModule4<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//module4中的方法</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看出：（具体请看注释，非常重要）</p>
<ul>
<li>
<p>module1和module2是采用<strong>常规暴露</strong>的形式，在引入它们时，模块名要一致。而且，要求用<strong>对象解构赋值</strong>的形式，而不是用 <code v-pre>import myModule from ...</code>这种形式（否则会报错 undefined）。</p>
</li>
<li>
<p>module2和module3是采用<strong>默认暴露</strong>的形式，在引入它们时，模块名随便起。</p>
</li>
</ul>
<p>（6）index.html：</p>
<p>在这里引入main.js即可。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dist/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、编译转换" tabindex="-1"><a class="header-anchor" href="#_4、编译转换"><span>4、编译转换</span></a></h3>
<p>如果我们不进行转换，而是直接在 index.html 中加载 js/src/main.js，是会报错的：</p>
<p>接下来，我们就进行转换。</p>
<p>（1）利用  babel 将 ES6 转换为 ES5：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">babel src -d build      //build目录会自动生成</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上方命令的意思是，将<code v-pre>src</code>目录下的所有ES6文件转化为ES5文件，并放在<code v-pre>build</code>目录下（<code v-pre>build</code>目录会被自动创建）。</p>
<p>转化成ES5之后，我们发现，如果直接在 index.html 中加载<code v-pre>build</code>目录下的ES5文件，也是会报错的，因为浏览器不认识<code v-pre>main.js</code>里的<code v-pre>require</code>关键字：</p>
<p><img src="http://img.smyhvae.com/20180414_1410.png" alt=""></p>
<p>于是，我们还要进行一次转换。</p>
<p>（2）利用<code v-pre>Browserify</code>编译打包 <code v-pre>build</code>目录下的 ES5 文件：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">browserify build/main.js <span class="token parameter variable">-o</span> dist/main.js     //dist目录需要手动创建</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>dist/main.js就是我们需要引入到 index.html 里的文件。</p>
<p>以后，我们每次修改完ES6的代码，就要执行上面的两个命令，重新生成新的js文件。</p>
<p>运行效果：</p>
<p><img src="http://img.smyhvae.com/20180414_1615.png" alt=""></p>
<p>工程文件：<a href="https://github.com/qianguyihao/web-resource/blob/main/project/2018-04-13-ES6Demo.rar" target="_blank" rel="noopener noreferrer">2018-04-13-ES6Demo.rar</a></p>
<h2 id="es6模块化的使用举例-引入第三方模块" tabindex="-1"><a class="header-anchor" href="#es6模块化的使用举例-引入第三方模块"><span>ES6模块化的使用举例（引入第三方模块）</span></a></h2>
<p>下载 jQuery 包：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">npm install jquery@1      //下载jQuery 1.X 的版本里最新的</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在main.js 中引入上面的 jQuery：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import $ from 'jQuery';</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后我们就可以通过<code v-pre>$</code>这个符号去写jQuery的代码了。</p>
</div></template>


