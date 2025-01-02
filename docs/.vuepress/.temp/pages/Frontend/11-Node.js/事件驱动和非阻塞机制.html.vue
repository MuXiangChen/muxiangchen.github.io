<template><div><h2 id="异步编程" tabindex="-1"><a class="header-anchor" href="#异步编程"><span>异步编程</span></a></h2>
<h3 id="异步操作" tabindex="-1"><a class="header-anchor" href="#异步操作"><span>异步操作</span></a></h3>
<ul>
<li>
<p>Node 采用 Chrome V8 引擎处理 JavaScript 脚本。V8 最大特点就是<strong>单线程运行</strong>，一次只能运行一个任务。</p>
</li>
<li>
<p>Node 大量采用异步操作（asynchronous operation），即任务不是马上执行，而是插在任务队列的尾部，等到前面的任务运行完后再执行。</p>
</li>
<li>
<p>提高代码的响应能力。</p>
</li>
</ul>
<p>异步IO也叫非阻塞IO。例如读文件，传统的语言，基本都是读取完毕才能进行下一步操作。非阻塞就是Node的callback，不会影响下一步操作，等到文件读取完毕，回调函数自动被执行，而不是在等待。</p>
<h3 id="异步操作回调" tabindex="-1"><a class="header-anchor" href="#异步操作回调"><span>异步操作回调</span></a></h3>
<p>由于系统永远不知道用户什么时候会输入内容，所以代码不能永远停在一个地方。</p>
<p>Node 中的操作方式就是以异步回调的方式解决无状态的问题。</p>
<h3 id="回调函数的设计-错误优先" tabindex="-1"><a class="header-anchor" href="#回调函数的设计-错误优先"><span>回调函数的设计：错误优先</span></a></h3>
<p>异步操作中，无法通过 try catch 捕获异常。</p>
<p>这是因为回调函数主要用于异步操作，当回调函数运行时，前期的操作早结束了，错误的执行栈早就不存在了，传统的错误捕捉机制try…catch对于异步操作行不通，所以只能把错误交给回调函数处理。</p>
<p><strong>统一约定：</strong></p>
<p>回调函数的第一个参数默认接收错误信息，第二个参数才是真正的回调数据（便于外界获取调用的错误情况）：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">foo1('赵小黑', 19, function(error, data) {</span>
<span class="line">  if(error)  throw error;</span>
<span class="line">  console.log(data);</span>
<span class="line">});</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步回调的问题" tabindex="-1"><a class="header-anchor" href="#异步回调的问题"><span>异步回调的问题</span></a></h3>
<p>相比较于传统的代码：</p>
<ul>
<li>
<p>异步事件驱动的代码</p>
</li>
<li>
<p>不容易阅读</p>
</li>
<li>
<p>不容易调试</p>
</li>
<li>
<p>不容易维护</p>
</li>
</ul>
<p>另外还有个问题是<strong>回调地狱：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">do1</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">do2</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">do3</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">do4</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">do5</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">do6</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程"><span>进程和线程</span></a></h2>
<h3 id="进程-进行中的程序" tabindex="-1"><a class="header-anchor" href="#进程-进行中的程序"><span>进程（进行中的程序）</span></a></h3>
<ul>
<li>
<p>每一个 <strong>正在运行</strong> 的应用程序都称之为进程。</p>
</li>
<li>
<p>每一个应用程序运行都至少有一个进程。</p>
</li>
<li>
<p>进程是用来给应用程序提供一个运行的环境。</p>
</li>
<li>
<p>进程是操作系统为应用程序分配资源的一个单位。</p>
</li>
</ul>
<h3 id="线程" tabindex="-1"><a class="header-anchor" href="#线程"><span>线程</span></a></h3>
<ul>
<li>
<p>用来执行应用程序中的代码</p>
</li>
<li>
<p>在一个进程内部，可以有很多的线程</p>
</li>
<li>
<p>在一个线程内部，同时只可以干一件事</p>
</li>
<li>
<p>传统的开发方式大部分都是 I/O 阻塞的，所以需要多线程来更好的利用硬件资源。</p>
</li>
</ul>
<p>线程并不是越多越好。</p>
<h3 id="多线程的弊端" tabindex="-1"><a class="header-anchor" href="#多线程的弊端"><span>多线程的弊端</span></a></h3>
<p>缺点一：</p>
<pre><code>- 创建线程耗费。
- 线程数量有限。
- CPU 在不同线程之间转换，有个上下文转换，这个转换非常耗时。
</code></pre>
<p>所谓的多线程其实都是假的，对于单核CPU而言，它们无非是在抢占 CPU 资源。线程和线程之间需要<strong>切换和调度</strong>，这是很耗费资源的。</p>
<p>缺点二：</p>
<ul>
<li>线程之间共享某些数据，同步某个状态都很麻烦。</li>
</ul>
<p>就算 CPU 是多核的，现在的问题是，线程与线程之间如果要共享数据，该怎么办？比如 A 线程要访问 B 线程的变量。</p>
<h2 id="事件驱动和非阻塞机制" tabindex="-1"><a class="header-anchor" href="#事件驱动和非阻塞机制"><span>事件驱动和非阻塞机制</span></a></h2>
<p>参考链接：<a href="https://www.kancloud.cn/revin/nodejs/176211" target="_blank" rel="noopener noreferrer">https://www.kancloud.cn/revin/nodejs/176211</a></p>
<p>总结：</p>
<ul>
<li>
<p>Node 中将所有的阻塞操作交给了内部线程池实现。</p>
</li>
<li>
<p>Node 主线程本身，主要就是不断的<strong>往返调度</strong>。</p>
</li>
</ul>
<h3 id="平台实现差异" tabindex="-1"><a class="header-anchor" href="#平台实现差异"><span>平台实现差异</span></a></h3>
<p>由于 Windows 和 *nix 平台（其他平台）的差异，Node 提供了 libuv 作为抽象封装层，保证上层的 Node 与下层的自定义线程池及 IOCP 之间各自独立。</p>
<p>如下图所示：</p>
<p><img src="http://img.smyhvae.com/20180301_2252.png" alt=""></p>
</div></template>


