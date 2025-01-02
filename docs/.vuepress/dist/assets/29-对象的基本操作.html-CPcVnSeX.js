import{_ as s,c as a,e,o as p}from"./app-gihhjKhR.js";const t={};function l(i,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h2 id="对象的基本操作" tabindex="-1"><a class="header-anchor" href="#对象的基本操作"><span>对象的基本操作</span></a></h2><h3 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象"><span>创建对象</span></a></h3><p>使用 new 关键字调用的函数，是构造函数 constructor。<strong>构造函数是专门用来创建对象的函数</strong>。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>记住，使用<code>typeof</code>检查一个对象时，会返回<code>object</code>。</p><p>关于创建对象的更多方式，可以看上一篇文章《对象的创建&amp;构造函数》。</p><h3 id="向对象中添加属性" tabindex="-1"><a class="header-anchor" href="#向对象中添加属性"><span>向对象中添加属性</span></a></h3><p>在对象中保存的值称为属性。</p><p>向对象添加属性的语法：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">对象<span class="token punctuation">.</span>属性名 <span class="token operator">=</span> 属性值<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>举例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//向obj中添加一个name属性</span></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//向obj中添加一个gender属性</span></span>
<span class="line">obj<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//向obj中添加一个age属性</span></span>
<span class="line">obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 obj 以字符串的形式打印出来</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">	{</span>
<span class="line">		&quot;name&quot;:&quot;孙悟空&quot;,</span>
<span class="line">		&quot;gender&quot;:&quot;男&quot;,</span>
<span class="line">		&quot;age&quot;:18</span>
<span class="line">	}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们也可以看出一个规律：如果对象里本身没有某个属性，则用点语法赋值时，这个属性会被创建出来。</p><h3 id="获取对象中的属性" tabindex="-1"><a class="header-anchor" href="#获取对象中的属性"><span>获取对象中的属性</span></a></h3><p><strong>方式 1</strong>：</p><p>语法：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">对象<span class="token punctuation">.</span>属性名<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果获取对象中没有的属性，不会报错而是返回<code>undefined</code>。</p><p>举例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//向obj中添加一个name属性</span></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//向obj中添加一个gender属性</span></span>
<span class="line">obj<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//向obj中添加一个age属性</span></span>
<span class="line">obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取对象中的属性，并打印出来</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：男</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：undefined</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式 2</strong>：可以使用<code>[]</code>这种形式去操作属性</p><p>如果属性名的命名规范没有遵循标识符的命名规范，就不能采用<code>.</code>的方式来操作对象的属性，则必须用方括号的形式来访问。比如说，<code>123</code>这种属性名，如果我们直接写成<code>obj.123 = 789</code>来操作属性，是会报错的。那怎么办呢？办法如下：</p><p>语法格式如下：（读取时，也是采用这种方式）</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 注意，括号里的属性名，必须要加引号</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取属性</span></span>
<span class="line">对象<span class="token punctuation">[</span><span class="token string">&#39;属性名&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 设置属性值</span></span>
<span class="line">对象<span class="token punctuation">[</span><span class="token string">&#39;属性名&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> 属性值<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这种语法格式，举例如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">obj<span class="token punctuation">[</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">789</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>当然，如果属性名遵循了标识符的命名规范，也可以使用方括号操作属性。</p><p><strong>重要</strong>：使用<code>[]</code>这种形式去操作属性会更灵活，因为我们可以在<code>[]</code>中传递一个<strong>变量</strong>。也就是说，如果属性名以变量的形式存储，请记得也必须使用方括号的形式操作属性。这在日常开发中，使用得非常多。比如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;千古壹号&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> myKey <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 错误的访问方式</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>myKey<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span></span>
<span class="line"><span class="token comment">// 正确的访问方式</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>myKey<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 千古壹号</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改对象的属性值" tabindex="-1"><a class="header-anchor" href="#修改对象的属性值"><span>修改对象的属性值</span></a></h3><p>语法：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">对象<span class="token punctuation">.</span>属性名 <span class="token operator">=</span> 新值<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>举例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;qiangu yihao&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除对象的属性" tabindex="-1"><a class="header-anchor" href="#删除对象的属性"><span>删除对象的属性</span></a></h3><p>语法：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">delete</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="in-运算符" tabindex="-1"><a class="header-anchor" href="#in-运算符"><span>in 运算符</span></a></h3><p>通过该运算符可以检查一个对象中是否含有指定的属性。如果有则返回 true，没有则返回 false。</p><p>语法：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string">&#39;属性名&#39;</span> <span class="token keyword">in</span> 对象<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>举例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//检查对象 obj 中是否含有name属性</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们平时使用的对象不一定是自己创建的，可能是从接口获取的，这个时候，in 运算符可以派上用场。</p><p>当然，还有一种写法可以达到上述目的：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果对象 obj 中有name属性，我就继续做某某事情。</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-of-遍历数组" tabindex="-1"><a class="header-anchor" href="#for-of-遍历数组"><span>for of：遍历数组</span></a></h2><p>ES6 中，如果我们要遍历一个数组，可以这样做：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">2</span>
<span class="line">6</span>
<span class="line">8</span>
<span class="line">5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for ... of 的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用 for…of 遍历数组。</p><p>注意，上面的数组中，<code>for ... of</code>获取的是数组里的值；如果采用<code>for ... in</code>遍历数组，则获取的是 index 索引值。</p><h3 id="map-对象的遍历" tabindex="-1"><a class="header-anchor" href="#map-对象的遍历"><span>Map 对象的遍历</span></a></h3><p><code>for ... of</code>既可以遍历数组，也可以遍历 Map 对象。</p><h2 id="for-in-遍历对象的属性" tabindex="-1"><a class="header-anchor" href="#for-in-遍历对象的属性"><span>for in：遍历对象的属性</span></a></h2><blockquote><p><code>for ... in</code>主要用于遍历对象，不建议用来遍历数组。</p></blockquote><p>语法：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> 变量 <span class="token keyword">in</span> 对象<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：对象中有几个属性，循环体就会执行几次。每次执行时，会将对象中的<strong>每个属性的 属性名 赋值给变量</strong>。</p><p>语法举例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里的 key 是：对象属性的键（也就是属性名）</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里的 obj[key] 是：对象属性的值（也就是属性值）</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;qianguyihao&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;shenzhen&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token function-variable function">sayHi</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 遍历对象中的属性</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;属性名:&#39;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;属性值:&#39;</span> <span class="token operator">+</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注意，因为这里的属性名 key 是变量，所以，如果想获取属性值，不能写成 obj.key，而是要写成 obj[key]</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">属性名:name</span>
<span class="line">属性值:qianguyihao</span>
<span class="line"></span>
<span class="line">属性名:age</span>
<span class="line">属性值:26</span>
<span class="line"></span>
<span class="line">属性名:gender</span>
<span class="line">属性值:男</span>
<span class="line"></span>
<span class="line">属性名:address</span>
<span class="line">属性值:shenzhen</span>
<span class="line"></span>
<span class="line">属性名:sayHi</span>
<span class="line">属性值:function() {</span>
<span class="line">                    console.log(this.name);</span>
<span class="line">                }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-in-遍历数组-不建议" tabindex="-1"><a class="header-anchor" href="#for-in-遍历数组-不建议"><span>for in 遍历数组（不建议）</span></a></h3><p>另外，for in 当然也可以用来遍历数组（只是不建议），此时的 key 是数组的索引。举例如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;属性名：&#39;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;属性值：&#39;</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">属性名：0</span>
<span class="line">属性值：hello1</span>
<span class="line"></span>
<span class="line">属性名：1</span>
<span class="line">属性值：hello2</span>
<span class="line"></span>
<span class="line">属性名：2</span>
<span class="line">属性值：hello3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2><p>创作不易，你的赞赏和认可，是我更新的最大动力：</p><p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>`,77)]))}const o=s(t,[["render",l],["__file","29-对象的基本操作.html.vue"]]),u=JSON.parse('{"path":"/Frontend/04-JavaScript%E5%9F%BA%E7%A1%80/29-%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.html","title":"29-对象的基本操作","lang":"en-US","frontmatter":{"title":"29-对象的基本操作"},"headers":[{"level":2,"title":"对象的基本操作","slug":"对象的基本操作","link":"#对象的基本操作","children":[{"level":3,"title":"创建对象","slug":"创建对象","link":"#创建对象","children":[]},{"level":3,"title":"向对象中添加属性","slug":"向对象中添加属性","link":"#向对象中添加属性","children":[]},{"level":3,"title":"获取对象中的属性","slug":"获取对象中的属性","link":"#获取对象中的属性","children":[]},{"level":3,"title":"修改对象的属性值","slug":"修改对象的属性值","link":"#修改对象的属性值","children":[]},{"level":3,"title":"删除对象的属性","slug":"删除对象的属性","link":"#删除对象的属性","children":[]},{"level":3,"title":"in 运算符","slug":"in-运算符","link":"#in-运算符","children":[]}]},{"level":2,"title":"for of：遍历数组","slug":"for-of-遍历数组","link":"#for-of-遍历数组","children":[{"level":3,"title":"Map 对象的遍历","slug":"map-对象的遍历","link":"#map-对象的遍历","children":[]}]},{"level":2,"title":"for in：遍历对象的属性","slug":"for-in-遍历对象的属性","link":"#for-in-遍历对象的属性","children":[{"level":3,"title":"for in 遍历数组（不建议）","slug":"for-in-遍历数组-不建议","link":"#for-in-遍历数组-不建议","children":[]}]},{"level":2,"title":"赞赏作者","slug":"赞赏作者","link":"#赞赏作者","children":[]}],"git":{"updatedTime":1735788687000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":1,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/04-JavaScript基础/29-对象的基本操作.md"}');export{o as comp,u as data};
