<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>面试问题：</p>
<ul>
<li>
<p>说一下对变量提升的理解</p>
</li>
<li>
<p>说明this的几种不同的使用场景</p>
</li>
<li>
<p>创建10个<code v-pre>&lt;a&gt;</code>标签，点击的时候弹出来对应的序号</p>
</li>
<li>
<p>如何理解作用域</p>
</li>
<li>
<p>实际开发中闭包的应用</p>
</li>
</ul>
<p>涉及到的知识点：</p>
<ul>
<li>
<p>执行上下文</p>
</li>
<li>
<p>this</p>
</li>
<li>
<p>作用域</p>
</li>
<li>
<p>作用域链</p>
</li>
<li>
<p>闭包</p>
</li>
</ul>
<h2 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文"><span>执行上下文</span></a></h2>
<p>执行上下文主要有两种情况：</p>
<ul>
<li>
<p>全局代码： 一段<code v-pre>&lt;script&gt;</code>标签里，有一个全局的执行上下文。所做的事情是：变量定义、函数声明</p>
</li>
<li>
<p>函数代码：每个函数里有一个上下文。所做的事情是：变量定义、函数声明、this、arguments</p>
</li>
</ul>
<p>PS：注意“函数声明”和“函数表达式”的区别。</p>
<h3 id="全局执行上下文" tabindex="-1"><a class="header-anchor" href="#全局执行上下文"><span>全局执行上下文</span></a></h3>
<p>在执行全局代码前将window确定为全局执行上下文。</p>
<p>（1）对全局数据进行预处理：（并没有赋值）</p>
<ul>
<li>
<p>var定义的全局变量==&gt;undefined, 添加为window的属性</p>
</li>
<li>
<p>function声明的全局函数==&gt;赋值(fun), 添加为window的方法</p>
</li>
<li>
<p>this==&gt;赋值(window)</p>
</li>
</ul>
<p>（2）开始执行全局代码</p>
<p><img src="http://img.smyhvae.com/20180311_1100.png" alt=""></p>
<h3 id="函数执行上下文" tabindex="-1"><a class="header-anchor" href="#函数执行上下文"><span>函数执行上下文</span></a></h3>
<p>在调用函数, 准备执行函数体之前, 创建对应的函数执行上下文对象(虚拟的, 存在于栈中)。</p>
<p>（1）对局部数据进行预处理：</p>
<ul>
<li>
<p>形参变量==&gt;赋值(实参)==&gt;添加为执行上下文的属性</p>
</li>
<li>
<p>arguments==&gt;赋值(实参列表), 添加为执行上下文的属性</p>
</li>
<li>
<p>var定义的局部变量==&gt;undefined, 添加为执行上下文的属性</p>
</li>
<li>
<p>function声明的函数 ==&gt;赋值(fun), 添加为执行上下文的方法</p>
</li>
<li>
<p>this==&gt;赋值(调用函数的对象)</p>
</li>
</ul>
<p>（2）开始执行函数体代码</p>
<h3 id="执行上下文栈" tabindex="-1"><a class="header-anchor" href="#执行上下文栈"><span>执行上下文栈</span></a></h3>
<ul>
<li>
<p>1.在全局代码执行前, JS引擎就会创建一个栈来存储管理所有的执行上下文对象</p>
</li>
<li>
<p>2.在全局执行上下文(window)确定后, 将其添加到栈中(压栈)</p>
</li>
<li>
<p>3.在函数执行上下文创建后, 将其添加到栈中(压栈)</p>
</li>
<li>
<p>4.在当前函数执行完后,将栈顶的对象移除(出栈)</p>
</li>
<li>
<p>5.当所有的代码执行完后, 栈中只剩下window</p>
</li>
</ul>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this"><span>this</span></a></h2>
<p>this指的是，<strong>调用函数的那个对象</strong>。this永远指向函数运行时所在的对象。</p>
<p>解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this。</p>
<p>根据函数的调用方式的不同，this会指向不同的对象：【重要】</p>
<ul>
<li>
<p>1.以函数的形式调用时，this永远都是window。比如<code v-pre>fun();</code>相当于<code v-pre>window.fun();</code></p>
</li>
<li>
<p>2.以方法的形式调用时，this是调用方法的那个对象</p>
</li>
<li>
<p>3.以构造函数的形式调用时，this是新创建的那个对象</p>
</li>
<li>
<p>4.使用call和apply调用时，this是指定的那个对象</p>
</li>
</ul>
<p>需要特别提醒的是：this的指向在函数定义时无法确认，只有函数执行时才能确定。</p>
<p><img src="http://img.smyhvae.com/20180311_1117.png" alt=""></p>
<p>this的几种场景：</p>
<ul>
<li>1、作为构造函数执行</li>
</ul>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//this = {};</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//return this;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2、作为对象的属性执行</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'A'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">printName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    obj<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3、作为普通函数执行</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//this === window</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>4、call apply bind</li>
</ul>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域"><span>作用域</span></a></h2>
<p>作用域指一个变量的<strong>作用范围</strong>。它是静态的(相对于上下文对象), 在编写代码时就确定了。</p>
<p>作用：隔离变量，不同作用域下同名变量不会有冲突。</p>
<p>作用域的分类：</p>
<ul>
<li>
<p>全局作用域</p>
</li>
<li>
<p>函数作用域</p>
</li>
<li>
<p>没有块级作用域(ES6有了)</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'smyhvae'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，并不会报错，因为：虽然 name 是在块里面定义的，但是 name 是全局变量。</p>
<h3 id="全局作用域" tabindex="-1"><a class="header-anchor" href="#全局作用域"><span>全局作用域</span></a></h3>
<p>直接编写在script标签中的JS代码，都在全局作用域。</p>
<p>在全局作用域中：</p>
<ul>
<li>
<p>在全局作用域中有一个全局对象window，它代表的是一个浏览器的窗口，它由浏览器创建我们可以直接使用。</p>
</li>
<li>
<p>创建的变量都会作为window对象的属性保存。</p>
</li>
<li>
<p>创建的函数都会作为window对象的方法保存。</p>
</li>
</ul>
<p>全局作用域中的变量都是全局变量，在页面的任意的部分都可以访问到。</p>
<p><strong>变量的声明提前：</strong>（变量提升）</p>
<p>使用var关键字声明的变量（ 比如 <code v-pre>var a = 1</code>），<strong>会在所有的代码执行之前被声明</strong>（但是不会赋值），但是如果声明变量时不是用var关键字（比如直接写<code v-pre>a = 1</code>），则变量不会被声明提前。</p>
<p>举例1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：undefined</p>
<p>举例2：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>   <span class="token comment">//此时a相当于window.a</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>程序会报错：</p>
<p><img src="http://img.smyhvae.com/20180314_2136.png" alt=""></p>
<p><strong>函数的声明提前：</strong></p>
<ul>
<li>使用<code v-pre>函数声明</code>的形式创建的函数<code v-pre>function foo(){}</code>，<strong>会被声明提前</strong>。</li>
</ul>
<p>也就是说，它会在所有的代码执行之前就被创建，所以我们可以在函数声明之前，调用函数。</p>
<ul>
<li>使用<code v-pre>函数表达式</code>创建的函数<code v-pre>var foo = function(){}</code>，<strong>不会被声明提前</strong>，所以不能在声明前调用。</li>
</ul>
<p>很好理解，因为此时foo被声明了，且为undefined，并没有给其赋值<code v-pre>function(){}</code>。</p>
<p>所以说，下面的例子，会报错：</p>
<p><img src="http://img.smyhvae.com/20180314_2145.png" alt=""></p>
<h3 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域"><span>函数作用域</span></a></h3>
<p><strong>调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁。</strong></p>
<p>每调用一次函数就会创建一个新的函数作用域，他们之间是互相独立的。</p>
<p>在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量。</p>
<p>在函数中要访问全局变量可以使用window对象。（比如说，全局作用域和函数作用域都定义了变量a，如果想访问全局变量，可以使用<code v-pre>window.a</code>）</p>
<p><strong>提醒1：</strong></p>
<p>在函数作用域也有声明提前的特性：</p>
<ul>
<li>
<p>使用var关键字声明的变量，是在函数作用域内有效，而且会在函数中所有的代码执行之前被声明</p>
</li>
<li>
<p>函数声明也会在函数中所有的代码执行之前执行</p>
</li>
</ul>
<p>因此，在函数中，没有var声明的变量都会成为<strong>全局变量</strong>，而且并不会提前声明。</p>
<p>举例1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">        <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>     <span class="token comment">// 此处的a相当于window.a</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//打印结果是2</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，foo()的打印结果是<code v-pre>1</code>。如果去掉第一行代码，打印结果是<code v-pre>Uncaught ReferenceError: a is not defined</code></p>
<p>**提醒2：**定义形参就相当于在函数作用域中声明了变量。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"></span>
<span class="line">        function fun6(e) {</span>
<span class="line">            console.log(e);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        fun6();  //打印结果为 undefined</span>
<span class="line">        fun6(123);//打印结果为123</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用域与执行上下文的区别" tabindex="-1"><a class="header-anchor" href="#作用域与执行上下文的区别"><span>作用域与执行上下文的区别</span></a></h3>
<p>区别1：</p>
<ul>
<li>
<p>全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了。而不是在函数调用时</p>
</li>
<li>
<p>全局执行上下文环境是在全局作用域确定之后, js代码马上执行之前创建</p>
</li>
<li>
<p>函数执行上下文是在调用函数时, 函数体代码执行之前创建</p>
</li>
</ul>
<p>区别2：</p>
<ul>
<li>
<p>作用域是静态的, 只要函数定义好了就一直存在, 且不会再变化</p>
</li>
<li>
<p>执行上下文是动态的, 调用函数时创建, 函数调用结束时就会自动释放</p>
</li>
</ul>
<p>联系：</p>
<ul>
<li>
<p>执行上下文(对象)是从属于所在的作用域</p>
</li>
<li>
<p>全局上下文环境==&gt;全局作用域</p>
</li>
<li>
<p>函数上下文环境==&gt;对应的函数使用域</p>
</li>
</ul>
<h3 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链"><span>作用域链</span></a></h3>
<p>当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用（<strong>就近原则</strong>）。如果没有则向上一级作用域中寻找，直到找到全局作用域；如果全局作用域中依然没有找到，则会报错ReferenceError。</p>
<p>外部函数定义的变量可以被内部函数所使用，反之则不行。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token comment">//只要是函数就可以创造作用域</span></span>
<span class="line">        <span class="token comment">//函数中又可以再创建函数</span></span>
<span class="line">        <span class="token comment">//函数内部的作用域可以访问函数外部的作用域</span></span>
<span class="line">        <span class="token comment">//如果有多个函数嵌套，那么就会构成一个链式访问结构，这就是作用域链</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//f1--->全局</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//f2--->f1--->全局</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//f3---->f2--->f1--->全局</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//f4--->f2--->f1---->全局</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">f4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//f5--->f1---->全局</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">f5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理解：</p>
<ul>
<li>
<p>多个上下级关系的作用域形成的链, 它的方向是从下向上的(从内到外)</p>
</li>
<li>
<p>查找变量时就是沿着作用域链来查找的</p>
</li>
</ul>
<p>查找一个变量的查找规则：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>在当前作用域下的执行上下文中查找对应的属性, 如果有直接返回, 否则进入2</p>
</li>
<li>
<p>在上一级作用域的执行上下文中查找对应的属性, 如果有直接返回, 否则进入3</p>
</li>
<li>
<p>再次执行2的相同操作, 直到全局作用域, 如果还找不到就抛出找不到的异常</p>
</li>
</ul>
</div></template>


