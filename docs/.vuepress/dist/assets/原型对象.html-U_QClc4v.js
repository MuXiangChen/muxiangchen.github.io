import{_ as e,c as t,e as o,a as s,f as a,b as l,d as c,r as i,o as u}from"./app-gihhjKhR.js";const r={};function d(k,n){const p=i("font");return u(),t("div",null,[n[7]||(n[7]=o(`<h1 id="原型对象" tabindex="-1"><a class="header-anchor" href="#原型对象"><span>原型对象</span></a></h1><blockquote><p>在看本文之前，我们可以先复习上一篇文章：《03-JavaScript基础/12-对象的创建&amp;构造函数.md》</p></blockquote><h2 id="原型对象-1" tabindex="-1"><a class="header-anchor" href="#原型对象-1"><span>原型对象</span></a></h2><h3 id="原型的引入" tabindex="-1"><a class="header-anchor" href="#原型的引入"><span>原型的引入</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">//向对象中添加一个方法</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//创建一个Person的实例</span></span>
<span class="line">        <span class="token keyword">var</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;孙悟空&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> per2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;猪八戒&quot;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        per<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        per2<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>per<span class="token punctuation">.</span>sayName <span class="token operator">==</span> per2<span class="token punctuation">.</span>sayName<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//打印结果为false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>分析如下</strong>：</p><p>上方代码中，我们的sayName方法是写在构造函数 Person 内部的，然后在两个实例中进行了调用。造成的结果是，<strong>构造函数每执行一次，就会给每个实例创建一个新的 sayName 方法</strong>。也就是说，每个实例的sayName都是唯一的。因此，最后一行代码的打印结果为false。</p><p>按照上面这种写法，假设创建10000个对象实例，就会创建10000个 sayName 方法。这种写法肯定是不合适的。我们为何不让所有的对象共享同一个方法呢？</p><p>还有一种方式是，将sayName方法在全局作用域中定义：（不建议。原因看注释）</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">//向对象中添加一个方法</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>sayName <span class="token operator">=</span> fun<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//将sayName方法在全局作用域中定义</span></span>
<span class="line">        <span class="token comment">/*</span>
<span class="line">         * 将函数定义在全局作用域，污染了全局作用域的命名空间</span>
<span class="line">         *  而且定义在全局作用域中也很不安全</span>
<span class="line">         */</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello大家好，我是:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较好的方式是，在原型中添加sayName方法：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello大家好，我是:&quot;</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这也就引入了我们本文要讲的「原型」。</p><h3 id="原型prototype的概念" tabindex="-1"><a class="header-anchor" href="#原型prototype的概念"><span>原型prototype的概念</span></a></h3><p><strong>认识1</strong>：</p><p>我们所创建的每一个函数，解析器都会向函数中添加一个属性 prototype。这个属性对应着一个对象，这个对象就是我们所谓的原型对象。</p><p>如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数的形式调用时，它所创建的实例对象中都会有一个隐含的属性，指向该构造函数的原型，我们可以通过__proto__来访问该属性。</p><p>代码举例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">	<span class="token comment">// 定义构造函数</span></span>
<span class="line">	<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">var</span> per1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">var</span> per2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：[object object]</span></span>
<span class="line"></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>per1<span class="token punctuation">.</span>__proto__ <span class="token operator">==</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的最后一行：打印结果表明，<code>实例.__proto__</code> 和 <code>构造函数.prototype</code>都指的是原型对象。</p><p><strong>认识2</strong>：</p><p>原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。</p><p>以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，这样就不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了。</p><p><strong>认识3</strong>：</p><p>使用 <code>in</code> 检查对象中是否含有某个属性时，如果对象中没有但是<strong>原型中</strong>有，也会返回true。</p><p>可以使用对象的<code>hasOwnProperty()</code>来检查<strong>对象自身中</strong>是否含有该属性。</p><h3 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链"><span>原型链</span></a></h3><p>原型对象也是对象，所以它也有原型，当我们使用或访问一个对象的属性或方法时：</p><ul><li><p>它会先在对象自身中寻找，如果有则直接使用；</p></li><li><p>如果没有则会去原型对象中寻找，如果找到则直接使用；</p></li><li><p>如果没有则去原型的原型中寻找，直到找到Object对象的原型。</p></li><li><p>Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回 null</p></li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>第一次接触「原型」和「原型链」的时候，会比较难理解。多接触几次，再回过头来看，就慢慢熟悉了。</p><h2 id="对象的-tostring-方法" tabindex="-1"><a class="header-anchor" href="#对象的-tostring-方法"><span>对象的 toString() 方法</span></a></h2><p>我们先来看下面这段代码：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">	<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">var</span> per1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;vae&quot;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;per1 = &quot;</span> <span class="token operator">+</span> per1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;per1 = &quot;</span> <span class="token operator">+</span> per1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">per1 = [object Object]</span>
<span class="line">per1 = [object Object]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们尝试打印实例 per1 的内部信息，但是发现，无论是打印 <code>per1</code> 还是打印 <code>per1.toString()</code>，结果都是<code>object</code>，这是为啥呢？分析如下：</p><ul><li><p>当我们直接在页面中打印一个对象时，其实是输出了对象的toString()方法的返回值。</p></li><li><p>如果我们希望在打印对象时，不输出[object Object]，可以手动为对象添加一个toString()方法。意思是，重写 toString() 方法。</p></li></ul><p>重写 toString() 方法，具体做法如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">	<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//方式一：重写 Person 原型的toString方法。针对 Person 的所有实例生效</span></span>
<span class="line">	<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">		  <span class="token string">&quot;Person[name=&quot;</span> <span class="token operator">+</span></span>
<span class="line">		  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span></span>
<span class="line">		  <span class="token string">&quot;,age=&quot;</span> <span class="token operator">+</span></span>
<span class="line">		  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span></span>
<span class="line">		  <span class="token string">&quot;,gender=&quot;</span> <span class="token operator">+</span></span>
<span class="line">		  <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">+</span></span>
<span class="line">		  <span class="token string">&quot;]&quot;</span></span>
<span class="line">		<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 方式二：仅重写实例 per1 的 toString方法。但是这种写法，只对 per1 生效， 对 per2 无效</span></span>
<span class="line">	<span class="token comment">/*</span>
<span class="line">	per1.toString = function() {</span>
<span class="line">		return (</span>
<span class="line">		  &quot;Person[name=&quot; +</span>
<span class="line">		  this.name +</span>
<span class="line">		  &quot;,age=&quot; +</span>
<span class="line">		  this.age +</span>
<span class="line">		  &quot;,gender=&quot; +</span>
<span class="line">		  this.gender +</span>
<span class="line">		  &quot;]&quot;</span>
<span class="line">		);</span>
<span class="line">	};</span>
<span class="line">	*/</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">var</span> per1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;smyh&quot;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">var</span> per2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;vae&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;per1 = &quot;</span> <span class="token operator">+</span> per1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;per2 = &quot;</span> <span class="token operator">+</span> per2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">per1 <span class="token operator">=</span> Person<span class="token punctuation">[</span>name<span class="token operator">=</span>smyh<span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">26</span><span class="token punctuation">,</span>gender<span class="token operator">=</span>男<span class="token punctuation">]</span></span>
<span class="line">per2 <span class="token operator">=</span> Person<span class="token punctuation">[</span>name<span class="token operator">=</span>vae<span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">,</span>gender<span class="token operator">=</span>男<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>代码分析：</p><p>上面的代码中，仔细看注释。我们重写了 Person 原型的 toString()，这样的话，可以保证对 Person 的所有实例生效。</p><p>从这个例子，我们可以看出 <code>prototype</code> 的作用。</p><h2 id="js的垃圾回收-gc-机制" tabindex="-1"><a class="header-anchor" href="#js的垃圾回收-gc-机制"><span>JS的垃圾回收（GC）机制</span></a></h2><p>程序运行过程中会产生垃圾，这些垃圾积攒过多以后，会导致程序运行的速度过慢。所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生垃圾。</p><p>当一个对象没有任何的变量或属性对它进行引用时，此时我们将永远无法操作该对象，此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，所以这种垃圾必须进行清理。</p><p>上面这句话，也可以这样理解：如果堆内存中的对象，没有任何变量指向它时，这个堆内存里的对象就会成为垃圾。</p><p>JS拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁。我们不需要也不能进行垃圾回收的操作。我们仅仅需要做的是：如果你不再使用该对象，那么，将改对象的引用设置为 null 即可。</p><h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>`,51)),s("p",null,[n[1]||(n[1]=a("想学习")),l(p,{color:"#0000ff"},{default:c(()=>n[0]||(n[0]=[s("strong",null,"更多技能",-1)])),_:1}),n[2]||(n[2]=a("？不妨关注我的微信公众号：")),n[3]||(n[3]=s("strong",null,"千古壹号",-1)),n[4]||(n[4]=a("（id：")),n[5]||(n[5]=s("code",null,"qianguyihao",-1)),n[6]||(n[6]=a("）。"))]),n[8]||(n[8]=s("p",null,"扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：",-1)),n[9]||(n[9]=s("p",null,[s("img",{src:"http://img.smyhvae.com/2016040102.jpg",alt:""})],-1))])}const m=e(r,[["render",d],["__file","原型对象.html.vue"]]),b=JSON.parse('{"path":"/Frontend/04-JavaScript%E5%9F%BA%E7%A1%80/%E5%8E%9F%E5%9E%8B%E5%AF%B9%E8%B1%A1.html","title":"原型对象","lang":"en-US","frontmatter":{"publish":false},"headers":[{"level":2,"title":"原型对象","slug":"原型对象-1","link":"#原型对象-1","children":[{"level":3,"title":"原型的引入","slug":"原型的引入","link":"#原型的引入","children":[]},{"level":3,"title":"原型prototype的概念","slug":"原型prototype的概念","link":"#原型prototype的概念","children":[]},{"level":3,"title":"原型链","slug":"原型链","link":"#原型链","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"对象的 toString() 方法","slug":"对象的-tostring-方法","link":"#对象的-tostring-方法","children":[]},{"level":2,"title":"JS的垃圾回收（GC）机制","slug":"js的垃圾回收-gc-机制","link":"#js的垃圾回收-gc-机制","children":[]},{"level":2,"title":"我的公众号","slug":"我的公众号","link":"#我的公众号","children":[]}],"git":{"updatedTime":1735791502000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":2,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/04-JavaScript基础/原型对象.md"}');export{m as comp,b as data};
