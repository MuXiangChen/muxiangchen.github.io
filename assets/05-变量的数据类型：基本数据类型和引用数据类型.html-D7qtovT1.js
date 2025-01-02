import{_ as s,c as a,e,o as p}from"./app-gihhjKhR.js";const l={};function t(i,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h2 id="数据分类" tabindex="-1"><a class="header-anchor" href="#数据分类"><span>数据分类</span></a></h2><p>数据分为：静态数据、动态数据。</p><h3 id="静态数据" tabindex="-1"><a class="header-anchor" href="#静态数据"><span>静态数据</span></a></h3><p>静态数据是指一些永久性的数据。一般是以文件的形式存储在硬盘上，比如文档、照片、视频等文件。</p><p>电脑关闭后，静态数据仍然还在。只要不主动删掉数据或者硬盘没损坏，这些数据就一直都在。</p><h3 id="动态数据" tabindex="-1"><a class="header-anchor" href="#动态数据"><span>动态数据</span></a></h3><p>动态数据是在程序运行过程中，动态产生的临时数据，这些数据可能随时发生变化。一般存储在内存中。</p><p>电脑关闭后，这些数据会被清除。</p><p>为何不把应用程序的动态数据加载到硬盘中执行呢？这主要是因为，内存的访问速度比硬盘快无数倍。</p><h2 id="变量的数据类型" tabindex="-1"><a class="header-anchor" href="#变量的数据类型"><span>变量的数据类型</span></a></h2><h3 id="为什么需要数据类型" tabindex="-1"><a class="header-anchor" href="#为什么需要数据类型"><span>为什么需要数据类型</span></a></h3><p>在计算机中，不同的数据所需占用的存储空间不同，为了充分利用存储空间，于是定义了不同的数据类型。而且，不同的数据类型，寓意也不同。</p><p>我们都知道，无论这个变量是字符串类型，还是数字类型，我们都可以直接用 <code>var</code> 去定义它。比如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;hello word&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么可以这样做呢？这是因为：JavaScript 是一种「弱类型语言」，或者说是一种「动态语言」，这意味着不需要事先声明变量的具体数据类型，在程序运行过程中，类型会自动被确定。</p><p><strong>JS 的变量数据类型，是在程序运行的过程中，根据等号右边的值来确定的</strong>。而且，变量的数据类型是可以变化的。一个变量可以在上一秒是字符串类型，下一秒是数字类型。比如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;qianguyihao&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">name <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// 强制将变量 name 修改为 数字类型</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-中一共有八种数据类型" tabindex="-1"><a class="header-anchor" href="#js-中一共有八种数据类型"><span>JS 中一共有八种数据类型</span></a></h3><ul><li><p><strong>基本数据类型（值类型）</strong>：String 字符串、Boolean 布尔值、Number 数值、Undefined 未定义、Null 空对象、BigInt 大型数值、Symbol。</p></li><li><p><strong>引用数据类型（引用类型）</strong>：Object 对象。</p></li></ul><p>注意：内置对象 Function、Array、Date、RegExp、Error 等都是属于 Object 类型。也就是说，除了那七种基本数据类型之外，其他的，都称之为 Object 类型。</p><p>BigInt 和 Symbol 是ES6中新增的类型，我们留到以后再讲。</p><blockquote><p>面试问：引用数据类型有几种？</p></blockquote><blockquote><p>面试答：只有一种，即 Object 类型。</p></blockquote><p><strong>数据类型之间最大的区别</strong>：</p><ul><li><p>基本数据类型：参数赋值的时候，传数值。</p></li><li><p>引用数据类型：参数赋值的时候，传地址。</p></li></ul><h2 id="一个经典的例子" tabindex="-1"><a class="header-anchor" href="#一个经典的例子"><span>一个经典的例子</span></a></h2><p><strong>基本数据类型举例</strong>：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">a<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：24</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：23</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中：a 和 b 都是基本数据类型，让 b 等于 a，然后<strong>改变 a 的值之后，发现 b 的值并没有被改变</strong>。</p><p>但是在引用数据类型中，就不同了，我们来看一看。</p><p><strong>引用数据类型举例</strong>：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;smyh&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 让 obj2 等于 obj1</span></span>
<span class="line"><span class="token keyword">var</span> obj2 <span class="token operator">=</span> obj1<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 修改 obj1 的 name 属性</span></span>
<span class="line">obj1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;vae&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：vae</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：vae</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中：obj1 和 obj2 都是引用数据类型，让 obj2 等于 obj1，然后<strong>修改 obj1.name 的值之后，发现 obj2.name 的值也发生了改变</strong>。</p><p>从上面的例子中，可以反映出，基本数据类型和引用数据类型是有区别的。</p><p>那到底有什么区别呢？我们进一步往下看。</p><h2 id="栈内存和堆内存" tabindex="-1"><a class="header-anchor" href="#栈内存和堆内存"><span>栈内存和堆内存</span></a></h2><p>我们首先记住一句话：JS 中，所有的<strong>变量</strong>都是保存在<strong>栈内存</strong>中的。</p><p>然后来看看下面的区别。</p><p><strong>基本数据类型</strong>：</p><p>基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。</p><p><strong>引用数据类型</strong>：</p><p>对象是保存到<strong>堆内存</strong>中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而<strong>变量保存了对象的内存地址</strong>（对象的引用），保存在栈内存当中。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。</p><h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2><p>创作不易，你的赞赏和认可，是我更新的最大动力：</p><p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>`,45)]))}const c=s(l,[["render",t],["__file","05-变量的数据类型：基本数据类型和引用数据类型.html.vue"]]),r=JSON.parse('{"path":"/Frontend/04-JavaScript%E5%9F%BA%E7%A1%80/05-%E5%8F%98%E9%87%8F%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","title":"05-变量的数据类型：基本数据类型和引用数据类型","lang":"en-US","frontmatter":{"title":"05-变量的数据类型：基本数据类型和引用数据类型"},"headers":[{"level":2,"title":"数据分类","slug":"数据分类","link":"#数据分类","children":[{"level":3,"title":"静态数据","slug":"静态数据","link":"#静态数据","children":[]},{"level":3,"title":"动态数据","slug":"动态数据","link":"#动态数据","children":[]}]},{"level":2,"title":"变量的数据类型","slug":"变量的数据类型","link":"#变量的数据类型","children":[{"level":3,"title":"为什么需要数据类型","slug":"为什么需要数据类型","link":"#为什么需要数据类型","children":[]},{"level":3,"title":"JS 中一共有八种数据类型","slug":"js-中一共有八种数据类型","link":"#js-中一共有八种数据类型","children":[]}]},{"level":2,"title":"一个经典的例子","slug":"一个经典的例子","link":"#一个经典的例子","children":[]},{"level":2,"title":"栈内存和堆内存","slug":"栈内存和堆内存","link":"#栈内存和堆内存","children":[]},{"level":2,"title":"赞赏作者","slug":"赞赏作者","link":"#赞赏作者","children":[]}],"git":{"updatedTime":1735788687000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":1,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/04-JavaScript基础/05-变量的数据类型：基本数据类型和引用数据类型.md"}');export{c as comp,r as data};
