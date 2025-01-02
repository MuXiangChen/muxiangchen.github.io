<template><div><h2 id="常见概念" tabindex="-1"><a class="header-anchor" href="#常见概念"><span>常见概念</span></a></h2>
<ul>
<li>
<p>构造函数</p>
</li>
<li>
<p>构造函数-扩展</p>
</li>
<li>
<p>原型规则和示例</p>
</li>
<li>
<p>原型链</p>
</li>
<li>
<p>instanceof</p>
</li>
</ul>
<h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h2>
<p>任何一个函数都可以被 new，new 了之后，就成了构造方法。</p>
<p>如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//retrun this;   //默认有这一行。new一个构造函数，返回一个对象</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> fn1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">'smyhvae'</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> fn2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">'vae'</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//new 多个实例对象</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与普通函数相比，构造函数有以下明显特点：</p>
<ul>
<li>
<p>用 new 关键字调用。</p>
</li>
<li>
<p>不需要用 return 显式返回值的，默认会返回 this，也就是新的实例对象。</p>
</li>
<li>
<p>建议函数名的首字母大写，与普通函数区分开。</p>
</li>
</ul>
<p>参考链接：</p>
<ul>
<li><a href="http://www.cnblogs.com/SheilaSun/p/4398881.html" target="_blank" rel="noopener noreferrer">JavaScript 中的普通函数与构造函数</a></li>
</ul>
<p>当 new 之后，this 会先变成一个空对象，然后通过<code v-pre>this.name = name</code>来赋值。</p>
<h3 id="构造函数的扩展" tabindex="-1"><a class="header-anchor" href="#构造函数的扩展"><span>构造函数的扩展</span></a></h3>
<p><img src="http://img.smyhvae.com/20180306_1633.png" alt=""></p>
<p>上图中发现，数组、对象、函数也有构造函数，它们的构造函数是 Array、Object、function。实际开发中，都推荐前面的书写方式。</p>
<h2 id="原型规则" tabindex="-1"><a class="header-anchor" href="#原型规则"><span>原型规则</span></a></h2>
<p>原型规则是学习原型链的基础。原型规则有五条，下面来讲解。</p>
<h3 id="规则-1" tabindex="-1"><a class="header-anchor" href="#规则-1"><span>规则 1</span></a></h3>
<p>所有的引用类型（数组、对象、函数），都具有对象特性，都可以<strong>自由扩展属性</strong>。null 除外。</p>
<p>举例：</p>
<p><img src="http://img.smyhvae.com/20180306_1651.png" alt=""></p>
<h3 id="规则-2" tabindex="-1"><a class="header-anchor" href="#规则-2"><span>规则 2</span></a></h3>
<p>所有的<strong>引用类型</strong>（数组、对象、函数），都有一个<code v-pre>_proto_</code>属性，属性值是一个<strong>普通的对象</strong>。<code v-pre>_proto_</code>的含义是隐式原型。</p>
<p><img src="http://img.smyhvae.com/20180306_1656.png" alt=""></p>
<p>其实，规则 2 是规则 1 的特例，只不过，js 语法帮我们自动加了 规则 2。</p>
<h3 id="规则三" tabindex="-1"><a class="header-anchor" href="#规则三"><span>规则三</span></a></h3>
<p>所有的<strong>函数</strong>（不包括数组、对象），都有一个<code v-pre>prototype</code>属性，属性值是一个<strong>普通的对象</strong>。<code v-pre>prototype</code>的含义是<strong>显式原型</strong>。（实例没有这个属性）</p>
<p><img src="http://img.smyhvae.com/20180306_1659.png" alt=""></p>
<h3 id="规则四" tabindex="-1"><a class="header-anchor" href="#规则四"><span>规则四</span></a></h3>
<p>所有的<strong>引用类型</strong>（数组、对象、函数），<code v-pre>_proto_</code>属性指向它的<strong>构造函数</strong>的<code v-pre>prototype</code>值。</p>
<p><img src="http://img.smyhvae.com/20180306_1701.png" alt=""></p>
<p>总结：以上四条，要先理解清楚，然后再来看下面的第五条。</p>
<h3 id="规则五" tabindex="-1"><a class="header-anchor" href="#规则五"><span>规则五</span></a></h3>
<p>当试图获取一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的<code v-pre>_proto_</code>中寻找（即它的构造函数的<code v-pre>prototype</code>）。</p>
<p><code v-pre>举例代码1</code>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//创建方法</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">alertName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 既然 Foo.prototype 是普通的对象，那也允许给它添加额外的属性 alertName</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">'smyhvae'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">fn<span class="token punctuation">.</span><span class="token function-variable function">printName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 测试</span></span>
<span class="line">fn<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果：smyhvae</span></span>
<span class="line">fn<span class="token punctuation">.</span><span class="token function">alertName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果：smyhvae</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，虽然 alertName 不是 fn 自身的属性，但是会从它的构造函数的<code v-pre>prototype</code>里面找。</p>
<p>**扩展：**遍历循环对象自身的属性</p>
<p>我们知道，<code v-pre>for in</code>循环可以遍历对象。针对上面的那个 fn 对象，它自身有两个属性：<code v-pre>name</code>、<code v-pre>printName</code>，另外从原型中找到了第三个属性<code v-pre>alertName</code>。现在，如果我们对 fn 进行遍历，能遍历到两个属性还是三个属性呢？</p>
<p>答案：两个。因为，<strong>高级浏览器中已经在 <code v-pre>for in</code>循环中屏蔽了来自原型的属性。但是，为了保证代码的健壮性，我们最好自己加上判断</strong>，手动将第三个属性屏蔽掉：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> item <span class="token keyword">in</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>fn<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链"><span>原型链</span></a></h2>
<p>还是拿上面的<code v-pre>举例代码1</code>举例，如果此时在最后面加一行代码：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	fn.toString();   //去 fn._proto_._proto_ 中查找 toString()方法</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面的代码中，fn 直接调用了 toString()方法，这是因为它通过<strong>原型链</strong>，去<code v-pre>_proto_</code>的<code v-pre>_proto_</code>里找到了<code v-pre>Object</code>，而<code v-pre>Object</code>是由<code v-pre>toString()</code>方法的。</p>
<h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof"><span>instanceof</span></a></h3>
<p>格式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">对象 <span class="token keyword">instanceof</span> 构造函数<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>instanceof</code>的作用：用于判断<strong>引用类型</strong>属于哪个<strong>构造函数</strong>。</p>
<p>例 1：判断一个变量是否为数组： <code v-pre>变量 instanceof Array</code></p>
<p>例 2：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//p--->Person.prototype--->Object.prototype--->null</span></span>
<span class="line"><span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//构造函数的**原型**是否在 p 对象的原型链上！</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例 3：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">fn <span class="token keyword">instanceof</span> <span class="token class-name">Foo</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面这句话，判断逻辑是：<strong>fn 的<code v-pre>_proto_</code>一层一层往上找，看能否对应到 Foo.prototype</strong>。</p>
<p>原型链如下：（重要）</p>
<p><img src="http://img.smyhvae.com/20180306_1853.png" alt=""></p>
<p>注意，Object 这个构造方法的显式原型是 null，这是一个特例。</p>
<p>issues 101 补充：通过原型链查找时，如果你找的是一个属性的话，则返回 undefined，如果你找的是一个方法，则报错。</p>
<h2 id="常见题目" tabindex="-1"><a class="header-anchor" href="#常见题目"><span>常见题目</span></a></h2>
<ul>
<li>
<p>如何准确判断一个变量是数组类型</p>
</li>
<li>
<p>写一个原型链继承的例子</p>
</li>
<li>
<p>描述 new 一个对象的过程</p>
</li>
<li>
<p>zepto(或其他框架)源码中如何使用原型链</p>
</li>
</ul>
<p>下面分别讲解。</p>
<h3 id="题目一-如何准确判断一个变量是数组类型" tabindex="-1"><a class="header-anchor" href="#题目一-如何准确判断一个变量是数组类型"><span>题目一：如何准确判断一个变量是数组类型</span></a></h3>
<p>答案：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1 <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印结果：true。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印结果：object。提示：typeof 方法无法判断是否为数组</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码表明，只能通过 instanceof 来判断是否为数组。而 typeof 的打印结果是 object。</p>
<h3 id="题目二-写一个原型链继承的例子" tabindex="-1"><a class="header-anchor" href="#题目二-写一个原型链继承的例子"><span>题目二：写一个原型链继承的例子</span></a></h3>
<p>来看个基础的代码：</p>
<p><img src="http://img.smyhvae.com/20180306_1931.png" alt=""></p>
<p>上面这个例子是基础，但是，在回答面试官的问题时，不要写上面的例子。要写成下面这个例子：（更贴近实战）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">DomElement</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">DomElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">html</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> ele <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        ele<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> val<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> ele<span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">DomElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">on</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> ele <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">;</span></span>
<span class="line">    ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> div1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DomElement</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">div1<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">'&lt;p>这是一段文字&lt;/p >'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">div1<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="题目三-描述-new-一个对象的过程" tabindex="-1"><a class="header-anchor" href="#题目三-描述-new-一个对象的过程"><span>题目三：描述 new 一个对象的过程</span></a></h3>
<p>（1）创建一个新对象</p>
<p>（2）this 指向这个新对象</p>
<p>（3）执行代码（对 this 赋值）</p>
<p>（4）返回 this</p>
<p>参考链接：</p>
<ul>
<li><a href="https://my.oschina.net/u/2600761/blog/1524617" target="_blank" rel="noopener noreferrer">原型、原型链、继承模式</a></li>
</ul>
</div></template>


