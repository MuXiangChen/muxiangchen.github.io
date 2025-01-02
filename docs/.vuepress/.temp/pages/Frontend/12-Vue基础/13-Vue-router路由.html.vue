<template><div><h2 id="什么是路由" tabindex="-1"><a class="header-anchor" href="#什么是路由"><span>什么是路由</span></a></h2>
<h3 id="后端路由" tabindex="-1"><a class="header-anchor" href="#后端路由"><span>后端路由</span></a></h3>
<p>对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上对应的资源。</p>
<p>当前端输入url请求资源时，服务器会监听到是什么url地址，那后端会返回什么样的资源呢？后端这个处理的过程就是通过<strong>路由</strong>来<strong>分发</strong>的。</p>
<p><strong>总结</strong>：后端路由，就是把所有url地址都对应到服务器的资源，这个<strong>对应关系</strong>就是路由。</p>
<h3 id="前端路由" tabindex="-1"><a class="header-anchor" href="#前端路由"><span>前端路由</span></a></h3>
<p>对于单页面应用程序来说，主要通过URL中的<code v-pre>hash</code>（url地址中的#号）来实现不同页面之间的切换。</p>
<p>同时，hash有一个特点：HTTP请求中不会包含hash相关的内容。所以，单页面程序中的页面跳转主要用hash实现。</p>
<p><strong>总结</strong>：在<strong>单页应用</strong>程序中，这种通过<code v-pre>hash</code>改变来<strong>切换页面</strong>的方式，称作前端路由（区别于后端路由）。</p>
<h2 id="安装vue-router的两种方式" tabindex="-1"><a class="header-anchor" href="#安装vue-router的两种方式"><span>安装Vue-router的两种方式</span></a></h2>
<ul>
<li>官方文档：<a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">https://router.vuejs.org/zh/</a></li>
</ul>
<p><strong>方式一</strong>：直接下载文件</p>
<p>下载网址：<a href="https://unpkg.com/vue-router/dist/vue-router.js" target="_blank" rel="noopener noreferrer">https://unpkg.com/vue-router/dist/vue-router.js</a></p>
<p>下载之后，放进项目工程，然后我们在引入<code v-pre>vue.js</code>之后，再引入<code v-pre>vue-router.js</code>即可：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vue2.5.16.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vue-router3.0.1.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们就可以在 window全局对象中使用 VueRouter这个对象。具体解释可以看接下来的代码中的注释。</p>
<p>注意，只要我们导入了<code v-pre>vue-router.js</code>这个包，在浏览器中打开网页时，url后面就会显示<code v-pre>#</code>这个符号。</p>
</div></template>


