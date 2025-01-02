<template><div><h2 id="解构赋值的概念" tabindex="-1"><a class="header-anchor" href="#解构赋值的概念"><span>解构赋值的概念</span></a></h2>
<p><strong>解构赋值</strong>：ES6 允许我们，按照一一对应的方式，从数组或者对象中<strong>提取值</strong>，再将提取出来的值赋值给变量。</p>
<p>解构：分解数据结构；赋值：给变量赋值。</p>
<p>解构赋值在实际开发中可以大量减少我们的代码量，并且让程序结构更清晰。</p>
<h2 id="数组的解构赋值" tabindex="-1"><a class="header-anchor" href="#数组的解构赋值"><span>数组的解构赋值</span></a></h2>
<p>数组的结构赋值：将数组中的值按照<strong>位置</strong>提取出来，然后赋值给变量。</p>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3>
<p>在 ES6 之前，当我们在为一组变量赋值时，一般是这样写：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者是这样写：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在有了 ES6 之后，我们可以通过数组解构的方式进行赋值：（根据<strong>位置</strong>进行一一对应）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>二者的效果是一样的，但明显后者的代码更简洁优雅。</p>
<h3 id="未匹配到的情况" tabindex="-1"><a class="header-anchor" href="#未匹配到的情况"><span>未匹配到的情况</span></a></h3>
<p>数据的结构赋值，是根据位置进行一一对应来赋值的。可如果左边的数量大于右边的数量时（也就是变量的数量大于值的数量时），多余的变量要怎么处理呢？</p>
<p>答案是：如果变量在一一对应时，没有找到对应的值，那么，<strong>多余的变量会被赋值为 undefined</strong>。</p>
<h3 id="解构时-左边允许有默认值" tabindex="-1"><a class="header-anchor" href="#解构时-左边允许有默认值"><span>解构时，左边允许有默认值</span></a></h3>
<p>在解构赋值时，是允许使用默认值的。举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//一个变量时</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>foo <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果：true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//两个变量时</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'千古壹号'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//a 赋值为：千古壹号。b没有赋值</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">','</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果：千古壹号,undefined</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//两个变量时</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'千古壹号'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//a 赋值为：千古壹号。b 采用默认值 qianguyihao</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">','</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果：千古壹号,qianguyihao</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将右边的-undefined和null赋值给变量" tabindex="-1"><a class="header-anchor" href="#将右边的-undefined和null赋值给变量"><span>将右边的 <code v-pre>undefined</code>和<code v-pre>null</code>赋值给变量</span></a></h3>
<p>如果我们在赋值时，采用的是 <code v-pre>undefined</code>或者<code v-pre>null</code>，那会有什么区别呢？</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'千古壹号'</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//b 虽然被赋值为 undefined，但是 b 会采用默认值</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">','</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果：千古壹号,qianguyihao</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'千古壹号'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//b 被赋值为 null</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">','</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果：千古壹号,null</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码分析：</p>
<ul>
<li>
<p>undefined：相当于什么都没有，此时 b 采用默认值。</p>
</li>
<li>
<p>null：相当于有值，但值为 null。</p>
</li>
</ul>
<h2 id="对象的解构赋值" tabindex="-1"><a class="header-anchor" href="#对象的解构赋值"><span>对象的解构赋值</span></a></h2>
<p>对象的结构赋值：将对象中的值按照<strong>属性匹配的方式</strong>提取出来，然后赋值给变量。</p>
<h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h3>
<p>在 ES6 之前，我们从接口拿到 json 数据后，一般这么赋值：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> json<span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> age <span class="token operator">=</span> json<span class="token punctuation">.</span>age<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> sex <span class="token operator">=</span> json<span class="token punctuation">.</span>sex<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这种写法，过于麻烦了。</p>
<p>现在，有了 ES6 之后，我们可以使用对象解构的方式进行赋值。举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'男'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span> <span class="token comment">// 对象的结构赋值</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：qianguyihao</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：28</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：男</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码可以看出，对象的解构与数组的结构，有一个重要的区别：<strong>数组</strong>的元素是按次序排列的，变量的取值由它的<strong>位置</strong>决定；而<strong>对象的属性没有次序</strong>，是<strong>根据键来取值</strong>的。</p>
<h3 id="未匹配到的情况-1" tabindex="-1"><a class="header-anchor" href="#未匹配到的情况-1"><span>未匹配到的情况</span></a></h3>
<p>对象的结构赋值，是根据属性名进行一一对应来赋值的。可如果左边的数量大于右边的数量时（也就是变量的数量大于值的数量时），多余的变量要怎么处理呢？</p>
<p>答案是：如果变量在一一对应时，没有找到对应的值，那么，<strong>多余的变量会被赋值为 undefined</strong>。</p>
<h3 id="给左边的变量自定义命名" tabindex="-1"><a class="header-anchor" href="#给左边的变量自定义命名"><span>给左边的变量自定义命名</span></a></h3>
<p>对象的结构赋值里，左边的变量名一定要跟右边的属性名保持一致么？答案是不一定。我们可以单独给左边的变量自定义命名。</p>
<p>举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> myName<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> myAge <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span> <span class="token comment">// 对象的结构赋值</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：qianguyihao</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myAge<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：28</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印报错：Uncaught ReferenceError: name is not defined</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印报错：Uncaught ReferenceError: age is not defined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方的第 2 行代码中：（请牢记）</p>
<ul>
<li>
<p>等号左边的属性名 name、age 是对应等号右边的属性名。</p>
</li>
<li>
<p>等号左边的 myName、myAge 是左边自定义的变量名。</p>
</li>
</ul>
<p>或者，我们也可以理解为：将右边 name 的值赋值给左边的 myName 变量，将右边 age 的值赋值给左边的 myAge 变量。现在，你应该一目了然了吧？</p>
<h3 id="圆括号的使用" tabindex="-1"><a class="header-anchor" href="#圆括号的使用"><span>圆括号的使用</span></a></h3>
<p>如果变量 foo 在解构之前就已经定义了，此时你再去解构，就会出现问题。下面是错误的代码，编译会报错：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">	<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token string">'haha'</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'smyhvae'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要解决报错，只要在解构的语句外边，加一个圆括号即可：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token string">'haha'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'smyhvae'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果：smyhvae</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串解构" tabindex="-1"><a class="header-anchor" href="#字符串解构"><span>字符串解构</span></a></h2>
<p>字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果：string</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">h</span>
<span class="line">e</span>
<span class="line">l</span>
<span class="line">string</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="https://img.smyhvae.com/20200102.png" alt=""></p>
</div></template>


