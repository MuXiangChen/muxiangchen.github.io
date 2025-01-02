<template><div><h2 id="对象简介" tabindex="-1"><a class="header-anchor" href="#对象简介"><span>对象简介</span></a></h2>
<h3 id="对象的概念" tabindex="-1"><a class="header-anchor" href="#对象的概念"><span>对象的概念</span></a></h3>
<p>在 JavaScript 中，对象是一组<strong>无序</strong>的相关属性和方法的集合。</p>
<p><strong>对象的作用是：封装信息</strong>。比如 Student 类里可以封装学生的姓名、年龄、成绩等。</p>
<p>对象具有<strong>特征</strong>（属性）和<strong>行为</strong>（方法）。</p>
<h3 id="对象包括哪些数据类型" tabindex="-1"><a class="header-anchor" href="#对象包括哪些数据类型"><span>对象包括哪些数据类型</span></a></h3>
<p>我们知道，JS 中的数据类型，包括以下几种：</p>
<ul>
<li>
<p><strong>基本数据类型（值类型）</strong>：String 字符串、Number 数值、BigInt 大型数值、Boolean 布尔值、Null 空值、Undefined 未定义、Symbol。</p>
</li>
<li>
<p><strong>引用数据类型（引用类型）</strong>：Object 对象。</p>
</li>
</ul>
<p>只要不是那七种基本数据类型，就全都是对象。对象属于一种复合的数据类型，在对象中可以保存多个不同数据类型的属性。</p>
<h3 id="对象的分类" tabindex="-1"><a class="header-anchor" href="#对象的分类"><span>对象的分类</span></a></h3>
<p>1、内置对象：</p>
<ul>
<li>
<p>由 ES 标准中定义的对象，在任何的 ES 的实现中都可以使用。</p>
</li>
<li>
<p>比如：Object、Math、Date、String、Array、Number、Boolean、Function 等。</p>
</li>
</ul>
<p>2、宿主对象：</p>
<ul>
<li>
<p>由 JS 的运行环境提供的对象，目前来讲主要指由浏览器提供的对象。</p>
</li>
<li>
<p>比如 BOM、DOM，比如<code v-pre>console</code>、<code v-pre>document</code>。</p>
</li>
</ul>
<p>3、自定义对象：</p>
<ul>
<li>由开发人员自己创建的对象。</li>
</ul>
<p>通过 new 关键字创建出来的对象实例，都是属于对象类型。</p>
<h2 id="自定义对象" tabindex="-1"><a class="header-anchor" href="#自定义对象"><span>自定义对象</span></a></h2>
<h3 id="为什么需要自定义对象" tabindex="-1"><a class="header-anchor" href="#为什么需要自定义对象"><span>为什么需要自定义对象</span></a></h3>
<p>保存一个值时，可以使用<strong>变量</strong>，保存多个值（一组值）时，可以使用<strong>数组</strong>。</p>
<p>比如，如果要保存一个人的信息，通过数组的方式可以这样保存：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'王二'</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">,</span> <span class="token string">'180'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面这种表达方式比较乱。而如果用 JS 中的<strong>自定义对象</strong>来表达，<strong>结构会更清晰</strong>。如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">favor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'阅读'</span><span class="token punctuation">,</span> <span class="token string">'羽毛球'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">sayHi</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'qianguyihao'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见，自定义对象里面的属性均是<strong>键值对（key: value）</strong>，表示属性和值的映射关系：</p>
<ul>
<li>
<p>键/属性：属性名。</p>
</li>
<li>
<p>值：属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型，函数类型等）。</p>
</li>
</ul>
<h3 id="自定义对象的语法" tabindex="-1"><a class="header-anchor" href="#自定义对象的语法"><span>自定义对象的语法</span></a></h3>
<p>语法如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> value<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> value<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> value<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>key 和 value 之间用冒号分隔，每组 key:vaue 之间用逗号分隔，最后一对 key:value 的末尾可以写逗号，也可以不写逗号。</p>
<p>问：对象的属性名是否需要加引号？</p>
<p>答：如果属性名不符合 JS 标识符的命名规范，则需要用引号包裹。比如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'my-name'</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>补充：其实，JS 的内置对象、宿主对象，底层也是通过自定义对象的形式（也就是键值对的形式）进行封装的。</p>
<h2 id="对象的属性值补充" tabindex="-1"><a class="header-anchor" href="#对象的属性值补充"><span>对象的属性值补充</span></a></h2>
<h3 id="什么叫对象的方法【重要】" tabindex="-1"><a class="header-anchor" href="#什么叫对象的方法【重要】"><span>什么叫对象的方法【重要】</span></a></h3>
<p>对象的属性值可以是任意的数据类型，也可以是个<strong>函数</strong>（也称之为方法）。换而言之，<strong>如果对象的属性值是函数，则这个函数可被称之为对象的“方法”</strong>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'qianguyihao'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 没加括号，就是获取方法</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>sayName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'-----------'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 加了括号，就是调用方法。即：执行函数内容，并执行函数体的内容</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="https://img.smyhvae.com/20221014_1130.png" alt=""></p>
<h3 id="对象中的属性值-也可以是一个对象" tabindex="-1"><a class="header-anchor" href="#对象中的属性值-也可以是一个对象"><span>对象中的属性值，也可以是一个对象</span></a></h3>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//创建对象 obj1</span></span>
<span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj1<span class="token punctuation">.</span>test <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//创建对象 obj2</span></span>
<span class="line"><span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//将整个 obj2 对象，设置为 obj1 的属性</span></span>
<span class="line">obj1<span class="token punctuation">.</span>test <span class="token operator">=</span> obj2<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>test<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果为：qianguyihao</p>
<h2 id="传值和传址的区别" tabindex="-1"><a class="header-anchor" href="#传值和传址的区别"><span>传值和传址的区别</span></a></h2>
<h3 id="对象保存在哪里" tabindex="-1"><a class="header-anchor" href="#对象保存在哪里"><span>对象保存在哪里</span></a></h3>
<p>1、基本数据类型的值直接保存在<strong>栈内存</strong>中，变量与变量之间是独立的，值与值之间是独立的，修改一个变量不会影响其他的变量。</p>
<p>2、对象是保存到<strong>堆内存</strong>中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间。变量保存的是对象的内存地址（对象的引用）。换而言之，对象的值是保存在<strong>堆内存</strong>中的，而对象的引用（即变量）是保存在<strong>栈内存</strong>中的。</p>
<p><strong>如果两个变量保存的是同一个对象引用，当一个通过一个变量修改属性时，另一个也会受到影响</strong>。这句话很重要，我们来看看下面的例子。</p>
<h3 id="传值" tabindex="-1"><a class="header-anchor" href="#传值"><span>传值</span></a></h3>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 将 a 赋值给 b</span></span>
<span class="line"></span>
<span class="line">b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 修改 b 的值</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，当我修改 b 的值之后，a 的值并不会发生改变。这个大家都知道。我们继续往下看。</p>
<h3 id="传址-一个经典的例子" tabindex="-1"><a class="header-anchor" href="#传址-一个经典的例子"><span>传址（一个经典的例子）</span></a></h3>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'孙悟空'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> obj2 <span class="token operator">=</span> obj1<span class="token punctuation">;</span> <span class="token comment">// 将 obj1 的地址赋值给 obj2。从此， obj1 和 obj2 指向了同一个堆内存空间</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//修改obj2的name属性</span></span>
<span class="line">obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'猪八戒'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，当我修改 obj2 的 name 属性后，会发现，obj1 的 name 属性也会被修改。因为 obj1 和 obj2 指向的是堆内存中的同一个地址。</p>
<p>这个例子要尤其注意，实战开发中，很容易忽略。</p>
<p>对于引用类型的数据，赋值相当于地址拷贝，a、b 指向了同一个堆内存地址。所以改了 b，a 也会变；本质上 a、b 就是一个东西。</p>
<p>如果你打算把引用类型 A 的值赋值给 B，让 A 和 B 相互不受影响的话，可以通过 Object.assign() 来复制对象。效果如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 复制对象：把 obj1 赋值给 obj3。两者之间互不影响</span></span>
<span class="line"><span class="token keyword">var</span> obj3 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


