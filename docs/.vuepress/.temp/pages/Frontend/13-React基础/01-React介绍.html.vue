<template><div><h2 id="虚拟dom和diff算法" tabindex="-1"><a class="header-anchor" href="#虚拟dom和diff算法"><span>虚拟DOM和diff算法</span></a></h2>
<blockquote>
<p>在学习 React 之前，我们需要先了解两个概念：虚拟DOM、diff算法。</p>
</blockquote>
<h3 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom"><span>虚拟DOM</span></a></h3>
<p><strong>问题描述</strong>：</p>
<p>假设我们的数据发生一点点的变化，也会被强制重建整颗DOM树，这么做，会涉及到很多元素的重绘和重排，导致性能浪费严重。</p>
<p><strong>解决上述问题的思路</strong>：</p>
<p>实现按需更新页面上的元素即可。也就是说，把 需要修改的元素，所对应的 DOM 元素重新构建；其他没有变化的数据，所对应的 DOM 节点不需要被强制更新。</p>
<p><strong>具体实现方案</strong>：（如何按需更新页面上的元素）</p>
<p>只需要拿到 页面更新前的 内存中的DOM树，同时再拿到 页面更新前的 新渲染出来的 内存DOM树；然后，对比这两颗新旧DOM树，找到那些需要被重新创建和修改的元素即可。这样就能实现 DOM 的<strong>按需更新</strong>。</p>
<p><strong>如何拿到这两棵DOM树</strong>：（即：如何从浏览器的内存住哪个获取到 浏览器私有的那两颗DOM树？）</p>
<p>如果要拿到浏览器私有的DOM树，那我们必须调用浏览器提供的相关JS的API才行。但是问题来了，浏览器并没有提供这样的API。既然如此，那我们可以自己<strong>模拟</strong>这两颗 新旧DOM树。</p>
<p><strong>如何自己模拟这两颗 新旧DOM树</strong>：（即：如何自己模拟一个DOM节点？）</p>
<p>这里涉及到手动模拟DOM树的原理：使用 JS 创建一个对象，用和这个对象来模拟每一个DOM节点；然后在每个DOM节点中，又提供了类似于 children 这样的属性来描述当前DOM的子节点。这样的话，当DOM节点形成了嵌套关系，就模拟出了一颗 DOM 树。</p>
<p><strong>总结</strong>：</p>
<ul>
<li>
<p>虚拟DOM的<strong>本质</strong>：使用 JS 对象模拟DOM树。</p>
</li>
<li>
<p>虚拟DOM的<strong>目的</strong>：为了实现 DOM 节点的高效更新。</p>
</li>
</ul>
<p>React内部已经帮我们实现了虚拟DOM，初学者掌握如何调用即可。</p>
<h3 id="diff算法" tabindex="-1"><a class="header-anchor" href="#diff算法"><span>diff算法</span></a></h3>
<p>怎么实现 两颗新旧DOM树的对比 呢？这里就涉及到了 diff算法。常见的 diff算法如下：</p>
<ul>
<li>
<p>tree diff：新旧DOM树，逐层对比的方式，就叫做 tree diff。每当我们从前到后，把所有层的节点对比完后，必然能够找到那些 需要被更新的元素。</p>
</li>
<li>
<p>component diff：在对比每一层的时候，组件之间的对比，叫做 component diff。当对比组件的时候，如果两个组件的类型相同，则暂时认为这个组件不需要被更新，如果组件的类型不同，则立即将旧组件移除，新建一个组件，替换到被移除的位置。</p>
</li>
<li>
<p>element diff：在组件中，每个元素之间也要进行对比，那么，元素级别的对比，叫做 element diff。</p>
</li>
<li>
<p>key：key这个属性，可以把 页面上的 DOM节点 和 虚拟DOM中的对象，做一层关联关系。</p>
</li>
</ul>
<h2 id="react-介绍" tabindex="-1"><a class="header-anchor" href="#react-介绍"><span>React 介绍</span></a></h2>
<h3 id="react-是什么" tabindex="-1"><a class="header-anchor" href="#react-是什么"><span>React 是什么</span></a></h3>
<ul>
<li>
<p>Facebook 开源的一个JS库。</p>
</li>
<li>
<p>一个用于动态构建用户界面的JS库。</p>
</li>
</ul>
<h3 id="react-的特点" tabindex="-1"><a class="header-anchor" href="#react-的特点"><span>React 的特点</span></a></h3>
<ul>
<li>
<p>Declarative（声明式编码）</p>
</li>
<li>
<p>Component-Based（组件化编码）</p>
</li>
<li>
<p>Learn Once, Write Anywhere（支持客户端、服务器端渲染）</p>
</li>
<li>
<p>高效的DOM Diff算法，最小化页面重绘</p>
</li>
<li>
<p>单向数据流</p>
</li>
</ul>
<h3 id="react高效的原因" tabindex="-1"><a class="header-anchor" href="#react高效的原因"><span>React高效的原因</span></a></h3>
<ul>
<li>
<p>虚拟(virtual)DOM，不总是直接操作DOM</p>
</li>
<li>
<p>高效的DOM Diff算法，最小化页面重绘（即“局部渲染”）。</p>
</li>
</ul>
<p>虚拟DOM指的是：在真实DOM的上一层<strong>映射</strong>一层虚拟DOM。我们操作的是映射关系，而不是真实的DOM。假设页面的样式做了修改（比如新增了一个标签），此时修改的是虚拟DOM的样式，真实的DOM并未发生变化。那什么时候，真实的DOM会发生变化呢？ 当我把所有的内容操作完之后，转化为真实的DOM，此时要打包统一的渲染页面，于是真实的DOM发生变化，然后渲染一次。 这样做的话，可以减少页面的渲染次数。</p>
<h3 id="相关网址" tabindex="-1"><a class="header-anchor" href="#相关网址"><span>相关网址</span></a></h3>
<ul>
<li>
<p>官网：<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">https://reactjs.org/</a></p>
</li>
<li>
<p>GitHub 地址：<a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">https://github.com/facebook/react</a>  截至2019-02-08，React项目已经有 121k 的star。</p>
</li>
</ul>
<p>官网截图：</p>
<p>20190208_1057.png</p>
<p>上方截图中，有一个特性是“Learn Once, Write Anywhere”。这里的 “Anywhere” 其实指的是两个地方：一个是浏览器端，一个是服务器端。后者指的是，<strong>React支持在服务器端渲染页面</strong>。</p>
<h3 id="生态介绍" tabindex="-1"><a class="header-anchor" href="#生态介绍"><span>生态介绍</span></a></h3>
<ul>
<li>
<p>Vue生态：Vue + Vue-Router + Vuex + Axios + Babel + Webpack</p>
</li>
<li>
<p>React生态：React + React-Router + Redux + Axios + Babel + Webpack</p>
</li>
</ul>
<h2 id="react-模块化、组件化" tabindex="-1"><a class="header-anchor" href="#react-模块化、组件化"><span>React 模块化、组件化</span></a></h2>
<h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块"><span>模块</span></a></h3>
<ul>
<li>
<p>理解：向外提供特定功能的js程序, 一般就是一个js文件</p>
</li>
<li>
<p>理由：js代码更多更复杂</p>
</li>
<li>
<p>作用：简化js的编写，阅读，提高运行效率</p>
</li>
</ul>
<h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h3>
<ul>
<li>
<p>理解：用来实现特定功能效果的代码集合(html/css/js)</p>
</li>
<li>
<p>理由：一个界面的功能更复杂</p>
</li>
<li>
<p>作用：复用，简化项目编码，提高运行效率</p>
</li>
</ul>
<h3 id="模块化与组件化" tabindex="-1"><a class="header-anchor" href="#模块化与组件化"><span>模块化与组件化</span></a></h3>
<ul>
<li>
<p>模块化：当应用的js都以模块来编写的, 这个应用就是一个模块化的应用</p>
</li>
<li>
<p>组件化：当应用是以多组件的方式实现功能, 这上应用就是一个组件化的应用</p>
</li>
</ul>
<h3 id="面相对象与面向过程的区别" tabindex="-1"><a class="header-anchor" href="#面相对象与面向过程的区别"><span>面相对象与面向过程的区别</span></a></h3>
<p>面向对象编程：</p>
<ul>
<li>
<p>重点是对象</p>
</li>
<li>
<p>更加关心的是干活的人</p>
</li>
</ul>
<p>面向过程编程：</p>
<ul>
<li>
<p>更加关心的是干活的过程</p>
</li>
<li>
<p>谁去干活儿不关心</p>
</li>
</ul>
<h2 id="react-环境搭建-写第一个hello-world" tabindex="-1"><a class="header-anchor" href="#react-环境搭建-写第一个hello-world"><span>React 环境搭建：写第一个Hello World</span></a></h2>
<h3 id="react-js-和-react-dom-js" tabindex="-1"><a class="header-anchor" href="#react-js-和-react-dom-js"><span>react.js 和 react-dom.js</span></a></h3>
<p>为了通过 React 写一个Hello World程序，我们需要先安装几个包：</p>
<ul>
<li>
<p>react.js: React的核心库。这个包，是专门用来创建React组件、组件生命周期等。</p>
</li>
<li>
<p>react-dom.js: 操作DOM的扩展库。这个包，主要封装了和 DOM 操作相关的包（比如，把组件渲染到页面上）。</p>
</li>
<li>
<p>babel.min.js: 将 JSX语法 解析为 纯JS语法代码。</p>
</li>
</ul>
<h3 id="方式一-本地引入相关的js库" tabindex="-1"><a class="header-anchor" href="#方式一-本地引入相关的js库"><span>方式一：本地引入相关的js库</span></a></h3>
<p>入门的时候，我们建议采取方式一。</p>
<p>如果是本地引入的话，可以这样写：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token comment">&lt;!-- 引入React相关的js库 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./libs/react.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./libs/react-dom.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./libs/babel.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是通过CDN的方式引入的话，可以使用网站 <a href="https://www.bootcdn.cn/" target="_blank" rel="noopener noreferrer">https://www.bootcdn.cn/</a> 提供的CDN链接。</p>
<p><strong>完整代码举例</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 引入React相关的js库 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./libs/react.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./libs/react-dom.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./libs/babel.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">&lt;!-- 注意，这一行的 type 是写 "text/babel"，而不是 "text/javascript" --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/babel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line">      <span class="token comment">//页面中的真实容器元素</span></span>
<span class="line">      <span class="token keyword">var</span> containDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myContainer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">//1、创建虚拟DOM对象</span></span>
<span class="line">      <span class="token keyword">var</span> vDom <span class="token operator">=</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello<span class="token punctuation">,</span> React<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// 不是字符串, 不能加引号</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">//2、渲染虚拟DOM对象（将虚拟DOM对象渲染到页面元素中）</span></span>
<span class="line">      ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>vDom<span class="token punctuation">,</span> containDiv<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 参数1：虚拟DOM对象；参数2：页面中的容器</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码运行后，页面上的DOM结构如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello, React!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码解释</strong>：</p>
<p>render的中文含义是“渲染”。render 方法的语法如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>要渲染的虚拟<span class="token constant">DOM</span>对象<span class="token punctuation">,</span> 容器 container：要渲染到页面上的哪个位置<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>工程文件：</p>
<ul>
<li><a href="https://github.com/qianguyihao/web-resource/blob/main/project/2019-02-08-ReactDemo.zip" target="_blank" rel="noopener noreferrer">2019-02-08-ReactDemo.zip</a></li>
</ul>
<h3 id="方式二-npm-install" tabindex="-1"><a class="header-anchor" href="#方式二-npm-install"><span>方式二：npm install</span></a></h3>
<p>实际开发中，我们一般都是通过 npm install 的方式来安装 react 相关的包。</p>
<p>首先，新建一个空的文件夹<code v-pre>2019-02-08-ReactDemo</code>，作为项目的根目录。然后在根目录下执行如下命令，进行<strong>项目初始化</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">  npm init --yes</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上方命令执行完成后，会生成<code v-pre>package.json</code>文件。</p>
<p>然后继续执行如下命令，安装 react.js 和 react-dom.js 这两个包：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">  npm i react react-dom</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>完整代码举例：</p>
<p>index.html:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>main.js:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// JS打包入口文件</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在 react 中，如要要创建 DOM 元素，只能使用 React 提供的 JS API 来创建，不能【直接】像 Vue 中那样，手写 HTML 元素</span></span>
<span class="line"><span class="token comment">// React.createElement() 方法，用于创建 虚拟DOM 对象，它接收 3个及以上的参数</span></span>
<span class="line"><span class="token comment">//     参数1： 是个字符串类型的参数，表示要创建的元素类型</span></span>
<span class="line"><span class="token comment">//     参数2： 是一个属性对象，表示 创建的这个元素上，有哪些属性</span></span>
<span class="line"><span class="token comment">//     参数3： 从第三个参数的位置开始，后面可以放好多的虚拟DOM对象，这写参数，表示当前元素的子节点</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// &lt;div title="this is a div" id="mydiv">这是一个div&lt;/div></span></span>
<span class="line"><span class="token keyword">var</span> myDiv <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'this is a div'</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'mydiv'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'这是一个div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ReactDOM.render('要渲染的虚拟DOM元素', '要渲染到页面上的哪个位置');</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>myDiv<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，createElement()方法介绍如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>需要创建的元素类型<span class="token punctuation">,</span> 有哪些属性<span class="token punctuation">,</span> 子节点<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>工程文件：</p>
<ul>
<li><a href="https://github.com/qianguyihao/web-resource/blob/main/project/2019-02-09-ReactDemo.zip" target="_blank" rel="noopener noreferrer">2019-02-09-ReactDemo.zip</a></li>
</ul>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<font color=#0000ff><strong>更多技能</strong></font>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="http://img.smyhvae.com/20160401_01.jpg" alt=""></p>
</div></template>


