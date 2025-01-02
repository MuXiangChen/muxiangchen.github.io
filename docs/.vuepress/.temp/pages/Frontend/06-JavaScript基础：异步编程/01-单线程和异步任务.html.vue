<template><div><h2 id="单线程" tabindex="-1"><a class="header-anchor" href="#单线程"><span>单线程</span></a></h2>
<h3 id="js-是单线程的" tabindex="-1"><a class="header-anchor" href="#js-是单线程的"><span>JS 是单线程的</span></a></h3>
<p>JavaScript 语言的执行是<strong>单线程</strong>的。即同一时间，只能处理一个任务。</p>
<p>具体来说，所谓单线程，是指 JS 引擎中负责解释和执行 JavaScript 代码的线程只有一个，即同一时间，只能处理一个任务。这个任务执行完后才能执行下一个。所有的任务都<strong>需要排队</strong>。</p>
<p><strong>JS 为何要被设计为单线程呢</strong>？原因如下：</p>
<ul>
<li>
<p>首先是历史原因，在最初设计 JS 这门语言时，多进程、多线程的架构并不流行，硬件支持并不好。</p>
</li>
<li>
<p>其次是因为多线程的复杂性，多线程操作需要加锁，编码的复杂性会增高。</p>
</li>
<li>
<p>而且，如果多个线程同时操作同一个 DOM，在多线程不加锁的情况下，会产生冲突，最终会导致 DOM 渲染的结果不符预期。</p>
</li>
</ul>
<p>所以，为了避免这些复杂问题的出现，JS 被设计成了单线程语言。</p>
<h3 id="浏览器是多进程、多线程的" tabindex="-1"><a class="header-anchor" href="#浏览器是多进程、多线程的"><span>浏览器是多进程、多线程的</span></a></h3>
<p>JS代码在执行时有它的运行环境（也称之为“容器”），这个运行环境可以是浏览器，也可以是 Node.js 环境。</p>
<p>浏览器是多进程的，<strong>每打开一个新的 tab 标签页就会开启一个新的进程</strong>。每个进程之间是独立的，这是为了防止一个页面卡死而造成所有页面都无法响应，甚至整个浏览器强制退出。</p>
<p><strong>每个进程中有很多个线程</strong>，其中有一个专门执行JS代码的线程，所以我们常说JS是单线程的，这没有说错。从JS语言的角度看，我们把这个线程称为“<strong>主线程</strong>”。</p>
<p>如果JS正在执行某个耗时的任务，则当前的线程会被阻塞，那应该怎么办呢？</p>
<p>实际上，<strong>耗时的任务并不是在主线程中执行的</strong>。因为浏览器的当前进程中有很多个线程，我们可以把耗时任务交给浏览器的其它线程来协助处理，然后在特定的时机通知主线程，该任务则会进入主线程同步完成。</p>
<p>比如，现在有一个三秒延迟的定时器任务。计时工作是交给浏览器的其他线程完成的，等三秒时间到了之后，通知JS主线程，该任务进入主线程进行同步执行。</p>
<h2 id="同步任务和异步任务" tabindex="-1"><a class="header-anchor" href="#同步任务和异步任务"><span>同步任务和异步任务</span></a></h2>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3>
<p>当前正在执行的任务，如果没有执行完成，它可能会<strong>阻塞</strong>其他正在排队的任务。为了解决这个问题，JS 在设计之初，将任务分成了两类：同步任务、异步任务。</p>
<ul>
<li>
<p>同步任务：在<strong>主线程</strong>上排队执行的任务。只有当前任务执行完毕，才能执行下一个任务。当前任务在没有得到结果之前，不会继续后续操作。</p>
</li>
<li>
<p>异步任务：不进入主线程、而是进入<strong>任务队列</strong>（Event Queue）的任务，该任务无论有没有得到结果，都不会阻塞后续任务的执行。只有&quot;任务队列&quot;通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。</p>
</li>
</ul>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'同步任务1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'同步任务2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果是：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">同步任务1</span>
<span class="line">同步任务2</span>
<span class="line">异步任务</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：第一行代码是同步任务，会<strong>立即执行</strong>；定时器里的回调函数是异步任务，需要等 1 秒后才会执行。假如定时器里的代码是同步任务，那需要等待1秒后，才能执行最后一行代码<code v-pre>console.log('同步任务2')</code>，也就是造成了主线程里的同步任务阻塞，这不是我们希望看到的。</p>
<p>比如说，网络图片的请求，就是一个异步任务。前端如果同时请求多张网络网络图片，谁先请求完成就让谁先显示出来。假如网络图片的请求做成同步任务，那就会出大问题，所有图片都得排队加载，如果第一张图片未加载完成，就得卡在那里，造成阻塞，导致其他图片都加载不出来。页面看上去也会很卡顿，这肯定是不能接受的。</p>
<h3 id="前端使用异步编程的场景" tabindex="-1"><a class="header-anchor" href="#前端使用异步编程的场景"><span>前端使用异步编程的场景</span></a></h3>
<p>什么时候需要<strong>等待</strong>，就什么时候用异步。常见的异步场景如下：</p>
<ul>
<li>1、事件监听（比如说，按钮绑定点击事件之后，用户爱点不点。我们不可能卡在按钮那里，什么都不做。所以，应该用异步）</li>
<li>2、回调函数：
<ul>
<li>2.1、定时器：setTimeout（定时炸弹）、setInterval（循环执行）</li>
<li>2.2、ajax请求。</li>
<li>2.3、Node.js：FS文件读写、数据库操作。</li>
</ul>
</li>
<li>3、ES6 中的 Promise、Generator、async/await</li>
</ul>
<p>现在的大部分软件项目，都是前后端分离的。后端生成接口，前端请求接口。前端发送 ajax 请求，向后端请求数据，然后<strong>等待一段时间</strong>后，才能拿到数据。这个请求过程就是异步任务。</p>
<h3 id="接口调用的方式" tabindex="-1"><a class="header-anchor" href="#接口调用的方式"><span>接口调用的方式</span></a></h3>
<p>js 中常见的接口调用方式，有以下几种：</p>
<ul>
<li>原生 ajax、基于 jQuery 的 ajax</li>
<li>Promise</li>
<li>Fetch</li>
<li>axios</li>
</ul>
<p>后续文章，我们会重点讲一下接口调用里的 Ajax，然后在 ES6 语法中学习 <strong>Promise</strong>。在这之前，我们需要先了解同步任务、异步任务的事件循环机制。</p>
<h3 id="多次异步调用的顺序" tabindex="-1"><a class="header-anchor" href="#多次异步调用的顺序"><span>多次异步调用的顺序</span></a></h3>
<ul>
<li>
<p>多次异步调用的结果，顺序可能不同步。</p>
</li>
<li>
<p>异步调用的结果如果<strong>存在依赖</strong>，则需要通过回调函数进行嵌套。</p>
</li>
</ul>
<h2 id="定时器-代码示例" tabindex="-1"><a class="header-anchor" href="#定时器-代码示例"><span>定时器：代码示例</span></a></h2>
<p>掌握了上面的事件循环原理之后，我们来看几个例子。</p>
<h3 id="举例-1" tabindex="-1"><a class="header-anchor" href="#举例-1"><span>举例 1</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">1</span>
<span class="line">3</span>
<span class="line">4</span>
<span class="line">2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：先等同步任务执行完成后，再执行异步任务。</p>
<h3 id="举例-2-重要" tabindex="-1"><a class="header-anchor" href="#举例-2-重要"><span>举例 2（重要）</span></a></h3>
<p>如果我把上面的等待时间，从 1 秒改成 0 秒，你看看打印结果会是什么。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">1</span>
<span class="line">3</span>
<span class="line">4</span>
<span class="line">2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，打印结果没有任何变化，这个题目在面试中经常出现，考的就是 <code v-pre>setTimeout(()=&gt; {}, 0)</code>会在什么时候执行。这就需要我们了解同步任务、异步任务的执行顺序，即前面讲到的<strong>事件循环机制</strong>。</p>
<p>解释：先等同步任务执行完成后，再执行异步任务。</p>
<p>同理，我们再来看看下面这段伪代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 伪代码</span></span>
<span class="line"><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//表示很耗时的同步任务</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，异步任务不是 2 秒之后执行，而是等耗时的同步任务执行完毕之后，才执行。那这个异步任务，是在 5 秒后执行？还是在 7 秒后执行？这个作业，留给读者你来思考~</p>
<h3 id="举例-3-较真系列" tabindex="-1"><a class="header-anchor" href="#举例-3-较真系列"><span>举例 3（较真系列）</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，等到 1 秒之后，真的会执行异步任务吗？其实不是。</p>
<p>在浏览器中， setTimeout()/ setInterval() 的每调用一次定时器的最小时间间隔是<strong>4毫秒</strong>，这通常是由于函数嵌套导致（嵌套层级达到一定深度），或者是由于已经执行的 setInterval 的回调函数阻塞导致的。</p>
<p>上面的案例中，异步任务需要等待 1004 毫秒之后，才会从 Event Table 进入到 Event Queue。这在面试中也经常被问到。</p>
<h2 id="异步任务举例" tabindex="-1"><a class="header-anchor" href="#异步任务举例"><span>异步任务举例</span></a></h2>
<h3 id="例-1-加载图片" tabindex="-1"><a class="header-anchor" href="#例-1-加载图片"><span>例 1：加载图片</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 加载图片的异步任务</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">loadImage</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> success<span class="token punctuation">,</span> fail</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span>src <span class="token operator">=</span> file<span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 图片加载成功</span></span>
<span class="line">        <span class="token function">success</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 图片加载失败</span></span>
<span class="line">        <span class="token function">fail</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'img load fail'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">loadImage</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">'images/qia nguyihao.png'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'图片加载成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">'solid 2px red'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'图片加载失败'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例-2-定时器计时-移动-dom-元素" tabindex="-1"><a class="header-anchor" href="#例-2-定时器计时-移动-dom-元素"><span>例 2：定时器计时，移动 DOM 元素</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 函数封装：定义一个定时器，每间隔 delay 毫秒之后，执行 callback 函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">myInterval</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">100</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> timeId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">callback</span><span class="token punctuation">(</span>timeId<span class="token punctuation">)</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">myInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">timeId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 每间隔 500毫秒之后，向右移动 .box 元素</span></span>
<span class="line">    <span class="token keyword">const</span> myBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>myBox<span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    myBox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">20</span> <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">></span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">clearInterval</span><span class="token punctuation">(</span>timeId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 每间隔 10 毫秒之后，将 .box 元素的宽度逐渐缩小，直到消失</span></span>
<span class="line">        <span class="token function">myInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">timeId2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>myBox<span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            myBox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> width <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>timeId2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>
<ul>
<li><a href="https://github.com/PleaseStartYourPerformance/javaScript/issues/34" target="_blank" rel="noopener noreferrer">JS-同步任务，异步任务，微任务，和宏任务</a></li>
<li><a href="https://juejin.cn/post/6875605533127081992" target="_blank" rel="noopener noreferrer">JS 同步异步宏任务微任务</a>、<a href="https://zhuanlan.zhihu.com/p/364475433" target="_blank" rel="noopener noreferrer">JavaScript 中事件循环的理解</a>、<a href="https://github.com/reng99/blogs/issues/34" target="_blank" rel="noopener noreferrer">javascript 事件循环机制</a></li>
<li><a href="https://mp.weixin.qq.com/s/NqzWkeOhqAU85XPkJu_wCA" target="_blank" rel="noopener noreferrer">如何实现比 setTimeout 快 80 倍的定时器？</a></li>
</ul>
</div></template>


