<template><div><h2 id="defaultprops-和-prop-types" tabindex="-1"><a class="header-anchor" href="#defaultprops-和-prop-types"><span>defaultProps 和 prop-types</span></a></h2>
<h3 id="使用-defaultprops-设置组件的默认值" tabindex="-1"><a class="header-anchor" href="#使用-defaultprops-设置组件的默认值"><span>使用 defaultProps 设置组件的默认值</span></a></h3>
<p>React 中，使用静态的 <code v-pre>defaultProps</code> 属性，来设置组件的默认属性值。</p>
<p>格式举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token comment">// 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值</span></span>
<span class="line">  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">initcount</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 如果外界没有传递 initcount，那么，自己初始化一个数值（比如0）</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用prop-types进行props数据类型的校验" tabindex="-1"><a class="header-anchor" href="#使用prop-types进行props数据类型的校验"><span>使用prop-types进行props数据类型的校验</span></a></h3>
<p>在组件中，可以通过 <code v-pre>prop-types</code> 把外界传递过来的属性，做类型校验。如果类型不匹配，控制台会弹出告警。</p>
<p>注意：如果要为 传递过来的属性做类型校验，必须安装 React 提供的 第三方包，叫做 <code v-pre>prop-types</code>。</p>
<p>格式举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">initcount</span><span class="token operator">:</span> ReactTypes<span class="token punctuation">.</span>number <span class="token comment">// 使用 prop-types 包，来定义 initcount 为 number 类型</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下方代码中，在引用组件的时候，如果类型不匹配：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用 render 函数渲染 虚拟DOM</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token comment">/* 规定，每个用户在使用 组件的时候，必须传递一个 默认的 数值，作为 组件初始化的 数据 */</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span>Counter initcount<span class="token operator">=</span><span class="token string">"我是string类型"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Counter<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台告警如下：</p>
<p>20190212_2130.png</p>
<h3 id="代码举例" tabindex="-1"><a class="header-anchor" href="#代码举例"><span>代码举例</span></a></h3>
<p>我们把 <code v-pre>defaultProps</code> 和 <code v-pre>prop-types</code> 来举个例子。</p>
<p>（1）index.html:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 容器，通过 React 渲染得到的 虚拟DOM，会呈现到这个位置 --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）main.js:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// JS打包入口文件</span></span>
<span class="line"><span class="token comment">// 1. 导入包</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 导入计数器组件</span></span>
<span class="line"><span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">"./components/Counter.jsx"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用 render 函数渲染 虚拟DOM</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token comment">/* 规定，每个用户在使用 组件的时候，必须传递一个 默认的 数值，作为 组件初始化的 数据 */</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span>Counter initcount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Counter<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）/components/Counter.jsx：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 注意： prop-types 包中职能跟单一，只提供了 一些常见的 数据类型，用于做类型校验</span></span>
<span class="line"><span class="token keyword">import</span> ReactTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 初始化组件，保存的是组件的私有数据</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">count</span><span class="token operator">:</span> props<span class="token punctuation">.</span>initcount <span class="token comment">// 把 父组件传递过来的 initcount 赋值给子组件 state 中的 count值。这样的话，就把 count 值改成了可读可写的 state 属性。因此，以后就能实现“点击 按钮 ，count 值 + 1”的需求了</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值</span></span>
<span class="line">  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">initcount</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 如果外界没有传递 initcount，那么，自己初始化一个 数值，为0</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>h3<span class="token operator">></span>这是 Counter 计数器组件 <span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>p<span class="token operator">></span>当前的计数是：<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 当 return 执行完毕后， 虚拟DOM创建好了，但是，还没有挂载到真正的页面中</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p>
<p>20190212_2100.png</p>
<h2 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定"><span>事件绑定</span></a></h2>
<p>案例：点击按钮后，计数器 +1。</p>
<h3 id="原生js做事件绑定" tabindex="-1"><a class="header-anchor" href="#原生js做事件绑定"><span>原生js做事件绑定</span></a></h3>
<p>代码举例：</p>
<p>（1）index.html:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 容器，通过 React 渲染得到的 虚拟DOM，会呈现到这个位置 --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）main.js:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// JS打包入口文件</span></span>
<span class="line"><span class="token comment">// 1. 导入包</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 导入计数器组件</span></span>
<span class="line"><span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">"./components/Counter.jsx"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用 render 函数渲染 虚拟DOM</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token comment">/* 规定，每个用户在使用 组件的时候，必须传递一个 默认的 数值，作为 组件初始化的 数据 */</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span>Counter initcount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Counter<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）/components/Counter.jsx：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">React</span> from <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 注意： prop-types 包的职能跟单一，只提供了 一些常见的 数据类型，用于做类型校验</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token class-name">ReactTypes</span> from <span class="token string">"prop-types"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">export <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 初始化组件，保存的是组件的私有数据</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      msg<span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span></span>
<span class="line">      count<span class="token operator">:</span> props<span class="token punctuation">.</span>initcount <span class="token comment">// 把 父组件传递过来的 initcount 赋值给子组件 state 中的 count值。这样的话，就把 count 值改成了可读可写的 state 属性。因此，以后就能实现“点击 按钮 ，count 值 + 1”的需求了</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值</span></span>
<span class="line">  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    initcount<span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 如果外界没有传递 initcount，那么，自己初始化一个数值（比如0）</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 这是创建一个 静态的 propTypes 对象，在这个对象中，可以把 外界传递过来的属性，做类型校验</span></span>
<span class="line">  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    initcount<span class="token operator">:</span> <span class="token class-name">ReactTypes</span><span class="token punctuation">.</span>number <span class="token comment">// 使用 prop-types 包，来定义 initcount 为 number 类型</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span></span>
<span class="line">        <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span></span>
<span class="line">          <span class="token generics"><span class="token punctuation">&lt;</span>h3<span class="token punctuation">></span></span>这是 <span class="token class-name">Counter</span> 计数器组件 <span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"+1"</span> id<span class="token operator">=</span><span class="token string">"btn"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token generics"><span class="token punctuation">&lt;</span>p<span class="token punctuation">></span></span>当前的计数是：<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 当 return 执行完毕后， 虚拟DOM创建好了，但是，还没有挂载到真正的页面中</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 当组件挂载到页面上之后，会进入这个生命周期函数，只要进入这个生命周期函数了，必然说明，页面上，已经有可见的DOM元素了</span></span>
<span class="line">  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 在这个函数中，我们可以放心的去 操作 页面上你需要使用的 DOM 元素了。</span></span>
<span class="line">    <span class="token comment">// 也就是说，如果我们想操作DOM元素，最早，只能在 componentDidMount 中进行。</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        count<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-react-提供的方法-做事件绑定" tabindex="-1"><a class="header-anchor" href="#使用-react-提供的方法-做事件绑定"><span>使用 React 提供的方法，做事件绑定</span></a></h3>
<p>代码举例：</p>
<p>（1）index.html和 （2）main.js 的代码不变，和上一小段中的代码一致。</p>
<p>（3）/components/Counter.jsx：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">React</span> from <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 注意： prop-types 包的职能跟单一，只提供了 一些常见的 数据类型，用于做类型校验</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token class-name">ReactTypes</span> from <span class="token string">"prop-types"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">export <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 初始化组件，保存的是组件的私有数据</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      msg<span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span></span>
<span class="line">      count<span class="token operator">:</span> props<span class="token punctuation">.</span>initcount <span class="token comment">// 把 父组件传递过来的 initcount 赋值给子组件 state 中的 count值。这样的话，就把 count 值改成了可读可写的 state 属性。因此，以后就能实现“点击 按钮 ，count 值 + 1”的需求了</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值</span></span>
<span class="line">  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    initcount<span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 如果外界没有传递 initcount，那么，自己初始化一个数值（比如0）</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 这是创建一个 静态的 propTypes 对象，在这个对象中，可以把 外界传递过来的属性，做类型校验</span></span>
<span class="line">  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    initcount<span class="token operator">:</span> <span class="token class-name">ReactTypes</span><span class="token punctuation">.</span>number <span class="token comment">// 使用 prop-types 包，来定义 initcount 为 number 类型</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span></span>
<span class="line">        <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span></span>
<span class="line">          <span class="token generics"><span class="token punctuation">&lt;</span>h3<span class="token punctuation">></span></span>这是 <span class="token class-name">Counter</span> 计数器组件 <span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span></span>
<span class="line">          <span class="token punctuation">{</span><span class="token comment">/* 这里的 this 指向的是 Counter 组件的实例  */</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"+1"</span> id<span class="token operator">=</span><span class="token string">"btn"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>myMethod<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token generics"><span class="token punctuation">&lt;</span>p<span class="token punctuation">></span></span>当前的计数是：<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 当 return 执行完毕后， 虚拟DOM创建好了，但是，还没有挂载到真正的页面中</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 点击事件的方法定义</span></span>
<span class="line">  myMethod <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 修改组件的state里面的值</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      count<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期函数-shouldcomponentupdate" tabindex="-1"><a class="header-anchor" href="#生命周期函数-shouldcomponentupdate"><span>生命周期函数：shouldComponentUpdate()</span></a></h2>
<p>在 shouldComponentUpdate() 函数中，必须要求返回一个<strong>布尔值</strong>。</p>
<p><strong>需要注意的是</strong>：如果返回的值是 false，则不会继续执行后续的生命周期函数，而是直接退回到了 运行中 的状态。因为此时，<strong>后续的 render 函数并没有被调用</strong>，因此页面不会被更新，但是组件的 state 状态，却被修改了。这种情况，我们也可以这样理解：如果返回值为 false，此时只是更新了 state 里面的数值，但是并没有渲染到 DOM节点上。</p>
<p>利用上面这个特性，我们可以来举个例子。</p>
<p><strong>举例</strong>：实现 Counter 计数器只在偶数情况下更新。</p>
<p>实现思路：在 shouldComponentUpdate() 函数中，如果 state 中 的count 的值为奇数，就 return false；否则就 return true。</p>
<p>代码实现：（我们在上面的<code v-pre>Counter.jsx</code>代码基础之上，做添加）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token comment">// 判断组件是否需要更新</span></span>
<span class="line">  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 经过打印测试发现：在 shouldComponentUpdate 中，通过 this.state.count 拿到的值，是上一次的旧数据，并不是当前最新的；</span></span>
<span class="line">    <span class="token comment">// 解决办法：通过 shouldComponentUpdate 函数的第二个参数 nextState，可以拿到 最新的 state 数据。</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">" ---- "</span> <span class="token operator">+</span> nextState<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 需求： 如果 state 中的 count 值是偶数，则 更新页面；如果 count 值 是奇数，则不更新页面。最终实现的的页面效果：2，4，6，8，10，12....</span></span>
<span class="line">    <span class="token comment">// return this.state.count % 2 === 0 ? true : false</span></span>
<span class="line">    <span class="token keyword">return</span> nextState<span class="token punctuation">.</span>count <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这部分的代码，和 render() 方法是并列的。我们需要注意里面的注释，关注 nextState 参数的用法。</p>
<h2 id="在js代码中获取html标签的属性" tabindex="-1"><a class="header-anchor" href="#在js代码中获取html标签的属性"><span>在js代码中获取html标签的属性</span></a></h2>
<p>比如说，如果想获取 html标签的 innerHTML 属性，做法如下：</p>
<p>通过原生 js 获取：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myh3'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以通过 React 提供的 <code v-pre>refs</code> 获取：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>h3<span class="token punctuation">.</span>innerHTML</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>代码举例：</p>
<p>（3）/components/Counter.jsx：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">React</span> from <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 注意： prop-types 包的职能跟单一，只提供了 一些常见的 数据类型，用于做类型校验</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token class-name">ReactTypes</span> from <span class="token string">"prop-types"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">export <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 初始化组件，保存的是组件的私有数据</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      msg<span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span></span>
<span class="line">      count<span class="token operator">:</span> props<span class="token punctuation">.</span>initcount <span class="token comment">// 把 父组件传递过来的 initcount 赋值给子组件 state 中的 count值。这样的话，就把 count 值改成了可读可写的 state 属性。因此，以后就能实现“点击 按钮 ，count 值 + 1”的需求了</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值</span></span>
<span class="line">  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    initcount<span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 如果外界没有传递 initcount，那么，自己初始化一个数值（比如0）</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 这是创建一个 静态的 propTypes 对象，在这个对象中，可以把 外界传递过来的属性，做类型校验</span></span>
<span class="line">  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    initcount<span class="token operator">:</span> <span class="token class-name">ReactTypes</span><span class="token punctuation">.</span>number <span class="token comment">// 使用 prop-types 包，来定义 initcount 为 number 类型</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span></span>
<span class="line">        <span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">></span></span></span>
<span class="line">          <span class="token generics"><span class="token punctuation">&lt;</span>h3<span class="token punctuation">></span></span>这是 <span class="token class-name">Counter</span> 计数器组件 <span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span></span>
<span class="line">          <span class="token punctuation">{</span><span class="token comment">/* 这里的 this 指向的是 Counter 组件的实例  */</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"+1"</span> id<span class="token operator">=</span><span class="token string">"btn"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>myMethod<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>h3 id<span class="token operator">=</span><span class="token string">"myh3"</span> ref<span class="token operator">=</span><span class="token string">"mymyh3"</span><span class="token operator">></span></span>
<span class="line">            当前的计数是：<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 当 return 执行完毕后， 虚拟DOM创建好了，但是，还没有挂载到真正的页面中</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 点击事件的方法定义</span></span>
<span class="line">  myMethod <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 修改组件的state里面的值</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      count<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 判断组件是否需要更新</span></span>
<span class="line">  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 需求： 如果 state 中的 count 值是偶数，则 更新页面；如果 count 值 是奇数，则不更新页面。最终实现的的页面效果：2，4，6，8，10，12....</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 经过打印测试发现：在 shouldComponentUpdate 中，通过 this.state.count 拿到的值，是上一次的旧数据，并不是当前最新的；</span></span>
<span class="line">    <span class="token comment">// 解决办法：通过 shouldComponentUpdate 函数的第二个参数 nextState，可以拿到 最新的 state 数据。</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">" ---- "</span> <span class="token operator">+</span> nextState<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// return this.state.count % 2 === 0 ? true : false</span></span>
<span class="line">    <span class="token comment">// return nextState.count % 2 === 0 ? true : false;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 组件将要更新。此时尚未更新，在进入这个 生命周期函数的时候，内存中的虚拟DOM是旧的，页面上的 DOM 元素 也是旧的</span></span>
<span class="line">  <span class="token function">componentWillUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 经过打印分析发现：此时页面上的 DOM 节点，都是旧的，应该慎重操作，因为你可能操作的是旧DOM</span></span>
<span class="line">    <span class="token comment">// console.log(document.getElementById('myh3').innerHTML)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>mymyh3<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 组件完成了更新。此时，state 中的数据、虚拟DOM、页面上的DOM，都是最新的，此时，你可以放心大胆的去操作页面了</span></span>
<span class="line">  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>mymyh3<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，componentWillUpdate() 和 componentDidUpdate() 方法里的代码，就是我们这一段要举的例子。</p>
<p>需要注意的是，<code v-pre>&lt;h3 id=&quot;myh3&quot; ref=&quot;mymyh3&quot;&gt;</code>这部分代码中，属性名只能小写，不能大写。</p>
<p>工程文件：</p>
<ul>
<li><a href="https://github.com/qianguyihao/web-resource/blob/main/project/2019-02-12-ReactDemo.zip" target="_blank" rel="noopener noreferrer">2019-02-12-ReactDemo.zip</a></li>
</ul>
<h2 id="生命周期函数-componentwillreceiveprops" tabindex="-1"><a class="header-anchor" href="#生命周期函数-componentwillreceiveprops"><span>生命周期函数：componentWillReceiveProps()</span></a></h2>
<p>当子组件第一次被渲染到页面上的时候，不会触发这个 函数。</p>
<p>只有当父组件中，通过 某些 事件，重新修改了 传递给 子组件的 props 数据之后，才会触发 componentWillReceiveProps。</p>
<p>代码举例：</p>
<p>（1）index.html:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 容器，通过 React 渲染得到的 虚拟DOM，会呈现到这个位置 --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）main.js:（引入组件）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// JS打包入口文件</span></span>
<span class="line"><span class="token comment">// 1. 导入包</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> MyParent <span class="token keyword">from</span> <span class="token string">"./components/TestReceiveProps.jsx"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用 render 函数渲染 虚拟DOM</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>MyParent<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>MyParent<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）TestReceiveProps.jsx：（组件的定义）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"这是父组件中的 msg 消息"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>h1<span class="token operator">></span>这是父组件<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>input</span>
<span class="line">          type<span class="token operator">=</span><span class="token string">"button"</span></span>
<span class="line">          value<span class="token operator">=</span><span class="token string">"点击修改父组件的 MSG"</span></span>
<span class="line">          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeMsg<span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token comment">/* 在父组件 Parent 中引用子组件 Son */</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span>Son pmsg<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>msg<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function-variable function">changeMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"修改组件的msg为新的值"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 子组件</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>h3<span class="token operator">></span>这是子组件 <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>pmsg<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 组件将要接收外界传递过来的新的 props 属性值</span></span>
<span class="line">  <span class="token comment">// 当子组件第一次被渲染到页面上的时候，不会触发这个 函数；</span></span>
<span class="line">  <span class="token comment">// 只有当 父组件中，通过 某些 事件，重新修改了 传递给 子组件的 props 数据之后，才会触发 componentWillReceiveProps</span></span>
<span class="line">  <span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span><span class="token parameter">nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// console.log('被触发了！');</span></span>
<span class="line">    <span class="token comment">// 注意： 在 componentWillReceiveProps 被触发的时候，如果我们使用 this.props 来获取属性值，这个属性值，不是最新的，是上一次的旧属性值</span></span>
<span class="line">    <span class="token comment">// 如果想要获取最新的属性值，需要通过 componentWillReceiveProps 的参数列表来获取</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>pmsg <span class="token operator">+</span> <span class="token string">" ---- "</span> <span class="token operator">+</span> nextProps<span class="token punctuation">.</span>pmsg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，我们在组件 Parent 中引入了子组件 Son。重点注意 componentWillReceiveProps()函数 的注释部分。</p>
</div></template>


