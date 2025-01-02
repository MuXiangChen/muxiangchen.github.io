<template><div><h2 id="常量-字面量-数字和字符串" tabindex="-1"><a class="header-anchor" href="#常量-字面量-数字和字符串"><span>常量（字面量）：数字和字符串</span></a></h2>
<p><strong>常量</strong>也称之为“字面量”，是固定值，不可改变。看见什么，它就是什么。</p>
<p>常量有下面这几种：</p>
<ul>
<li>数字常量（数值常量）</li>
<li>字符串常量</li>
<li>布尔常量</li>
<li>自定义常量</li>
</ul>
<h3 id="数字常量" tabindex="-1"><a class="header-anchor" href="#数字常量"><span>数字常量</span></a></h3>
<p>数字常量非常简单，直接写数字就行，不需要任何其他的符号。既可以是整数，也可以是浮点数。</p>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 不需要加引号</span></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">996</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 996是整数</span></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3.14是浮点数（即带了小数）</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串常量" tabindex="-1"><a class="header-anchor" href="#字符串常量"><span>字符串常量</span></a></h3>
<p>字符串常量就是用单引号或双引号括起来的内容。可以是单词、句子等，一定要加引号。在JS中，只要是单引号或双引号括起来的内容，都是字符串常量。</p>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'996'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"千古壹号，永不止步"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>温馨提示：996 是数字，'996'是字符串。</p>
<h3 id="布尔常量" tabindex="-1"><a class="header-anchor" href="#布尔常量"><span>布尔常量</span></a></h3>
<p>布尔常量就是表达<strong>真</strong>或者<strong>假</strong>，在JS中用 true 和 false 来表达。</p>
<p>布尔字面量举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>'如果为真，就走这里面的代码<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义常量-const" tabindex="-1"><a class="header-anchor" href="#自定义常量-const"><span>自定义常量：const</span></a></h3>
<p>自定义常量是ES6中新增的语法。它的语法格式是这样的：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> 常量名称 <span class="token operator">=</span> 常量取值<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'千古壹号'</span><span class="token punctuation">;</span> <span class="token comment">// 定义常量name，它的取值是 千古壹号</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// name =  '许嵩'; // 既然 name 是常量，所以这一行是错误的写法，因为 name 无法被修改为其他的值</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：千古壹号</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后续我们讲ES6语法的时候，会深入学习 const 用法。</p>
<h3 id="开发技巧-用变量定义常量" tabindex="-1"><a class="header-anchor" href="#开发技巧-用变量定义常量"><span>开发技巧：用变量定义常量</span></a></h3>
<p>我们一般不会直接使用常量，否则会导致代码冗余、不易维护。如果多个地方要用到同一个常量，那就建议事先定义一个变量，用来保存这个常量；然后在需要的地方去引用这个变量就行了。另外，当我们学习了ES6中的 const 之后，还可以使用自定义常量达到目的。</p>
<h2 id="变量的概念" tabindex="-1"><a class="header-anchor" href="#变量的概念"><span>变量的概念</span></a></h2>
<p><strong>变量</strong>表示可以改变的数据，一个变量，就是一个用于存放这个数据的容器。我们通过「变量名」获取数据，甚至修改数据。</p>
<p>变量还可以用来保存常量。</p>
<p><strong>本质</strong>：变量是程序在内存中申请的一块用来存放数据的空间。比如，超市货架的储物格就是变量, 在不同的时间段里，储物格中存储的数据可以不一样。</p>
<p>实际开发中，变量使用得非常频繁，因为这些数据并非固定不变。比如，以下使用场景中的信息都可以用变量存储：</p>
<ul>
<li>商品信息：价格、库存数量、购买的客单价</li>
<li>歌曲信息：时长、播放进度、歌词内容</li>
<li>用户信息：用户名、年龄、性别、地址</li>
<li>时间和日期</li>
<li>App系统设置的配置参数；用户的偏好设置，比如主题、语言等。</li>
<li>微博：用户关注的人、粉丝数量；发布的帖子数量、点赞数。</li>
</ul>
<h2 id="变量的定义和赋值" tabindex="-1"><a class="header-anchor" href="#变量的定义和赋值"><span>变量的定义和赋值</span></a></h2>
<p>定义变量是在告诉浏览器，我们需要一块内存空间，相当于生成超市里的储物格。</p>
<p>给变量赋值就是往相当于往储物格里塞东西，可能今天上午塞的是面包🍞，下午就换成了蛋糕🍰。</p>
<h3 id="变量的定义-声明-es5" tabindex="-1"><a class="header-anchor" href="#变量的定义-声明-es5"><span>变量的定义/声明（ES5）</span></a></h3>
<p>在 ES6 语法之前，统一使用<code v-pre>var</code>关键字来声明一个变量。比如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> name<span class="token punctuation">;</span> <span class="token comment">// 定义一个名为 name 的变量。name是变量名。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>var 是英语“variable”变量的缩写。var的后面要加一个空格，空格后面的紧跟的就是“变量名”。</p>
<p>PS：<strong>在 JavaScript 中，永远都是用 var 来定义变量</strong>（在 ES6 之前），这和 C、Java 等语言不同。</p>
<h3 id="变量的定义-声明-es6" tabindex="-1"><a class="header-anchor" href="#变量的定义-声明-es6"><span>变量的定义/声明（ES6）</span></a></h3>
<p>在 ES6 语法及之后的版本里，可以使用 <code v-pre>const</code>、<code v-pre>let</code>关键字来定义一个变量。比如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name<span class="token punctuation">;</span> <span class="token comment">// 定义一个常量</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> age<span class="token punctuation">;</span> <span class="token comment">// 定义一个变量</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想定义一个常量，就用 const；如果你想定义一个变量，就用 let。</p>
<h3 id="变量的赋值" tabindex="-1"><a class="header-anchor" href="#变量的赋值"><span>变量的赋值</span></a></h3>
<p>使用 <code v-pre>=</code> 这个符号即可给变量赋值。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">name <span class="token operator">=</span> <span class="token string">'千古壹号'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>综合起来，变量的定义、赋值、取值，举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义：声明一个变量</span></span>
<span class="line"><span class="token keyword">var</span> num<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 赋值：往变量中存储数据</span></span>
<span class="line">num <span class="token operator">=</span> <span class="token number">996</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 取值：从变量中获取存储的数据</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义-赋值的合并写法" tabindex="-1"><a class="header-anchor" href="#定义-赋值的合并写法"><span>定义+赋值的合并写法</span></a></h3>
<p>变量的定义和赋值，还可以合并写在一起，是实战中常用的写法。举例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// ES5语法</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span> <span class="token comment">// ES6 语法</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token string">'world'</span><span class="token punctuation">;</span> <span class="token comment">// ES6 语法</span></span>
<span class="line">c <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span> <span class="token comment">// 修改 变量 C 的值</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义一个变量并赋值， 我们称之为<strong>变量的初始化</strong>。如下图所示：</p>
<p><img src="http://img.smyhvae.com/20180116_2020.png" alt=""></p>
<ul>
<li>
<p>定义变量：var 就是一个<strong>关键字</strong>，用来定义变量。所谓关键字，就是有特殊功能的单词。</p>
</li>
<li>
<p>变量名：我们可以给变量起个名字。</p>
</li>
<li>
<p>变量赋值：等号表示<strong>赋值</strong>，将等号右边的值，赋给左边的变量。</p>
</li>
</ul>
<h3 id="变量的初始化【重要】" tabindex="-1"><a class="header-anchor" href="#变量的初始化【重要】"><span>变量的初始化【重要】</span></a></h3>
<p>第一次给变量赋值，称之为“<strong>变量的初始化</strong>”，这个概念非常重要。第二次给这个变量赋值（也就是修改这个变量的值）就不叫初始化了。</p>
<p>一个变量如果没有进行初始化（只声明，不赋值），那么这个变量中存储的值是<code v-pre>undefined</code>，这个知识点必须知道。</p>
<p>变量的初始化，可以有两种形式，如下。</p>
<p>形式1：先定义，在赋值。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> name<span class="token punctuation">;</span></span>
<span class="line">name <span class="token operator">=</span> <span class="token string">'qianguyhihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>形式2：在定义的同时进行初始化。也就是上一小段讲的“合并写法”。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="变量定义和赋值的补充" tabindex="-1"><a class="header-anchor" href="#变量定义和赋值的补充"><span>变量定义和赋值的补充</span></a></h2>
<h3 id="修改变量的值" tabindex="-1"><a class="header-anchor" href="#修改变量的值"><span>修改变量的值</span></a></h3>
<p>一个变量被重新复赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。</p>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：110。因为 110 覆盖了 100</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同时定义多个变量" tabindex="-1"><a class="header-anchor" href="#同时定义多个变量"><span>同时定义多个变量</span></a></h3>
<p>1、同时定义多个变量时，只需要写一个 var， 多个变量名之间用英文逗号隔开。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 同时定义多个变量</span></span>
<span class="line"><span class="token keyword">var</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、定义多个变量的同时，分别进行初始化。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义多个变量的同时，进行初始化</span></span>
<span class="line"><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果多个变量的初始化值都是一样的，则可以这样简写：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">;</span></span>
<span class="line">num1 <span class="token operator">=</span> num2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 重点在这一行</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的写法和下面的写法是有区别的：（注意看打印结果）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num1<span class="token punctuation">,</span> num2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量之间可以相互赋值" tabindex="-1"><a class="header-anchor" href="#变量之间可以相互赋值"><span>变量之间可以相互赋值</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">;</span></span>
<span class="line">num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">num2 <span class="token operator">=</span> num1<span class="token punctuation">;</span> <span class="token comment">// 把 num1 的值拷贝一份，赋值给 num2</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量如果重复定义" tabindex="-1"><a class="header-anchor" href="#变量如果重复定义"><span>变量如果重复定义</span></a></h3>
<p>在ES5中，如果用 var 定义了同名变量，那么，后定义的变量，会覆盖先定义的变量。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'许嵩'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'千古壹号'</span><span class="token punctuation">;</span> <span class="token comment">// 这里会重新定义一个新的变量 name</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 千古壹号</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量声明和赋值的几种情况" tabindex="-1"><a class="header-anchor" href="#变量声明和赋值的几种情况"><span>变量声明和赋值的几种情况</span></a></h3>
<p>变量建议先声明，再使用；否则可能会产生意想不到的结果。具体如下。</p>
<p><strong>写法 1</strong>、先声明，再赋值：（正常）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a<span class="token punctuation">;</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：100</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>写法 2</strong>、只声明，不赋值：（默认值为 undefined）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>写法 3</strong>、不声明，直接赋值：（正常）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：100</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>写法3虽然不报错，但并不推荐这么写。变量 a 会被添加到 windows 对象上。它跟写法1是有区别的，等以后学习了「变量提升」的概念就明白了。相比之下，我们更推荐用写法 1。</p>
<p><strong>写法 4</strong>、不声明，不赋值，直接使用：（会报错）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 会报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>控制台会报错：</p>
<p><img src="http://img.smyhvae.com/20180116_2040.png" alt=""></p>
<p><strong>补充</strong>：写法 1 和写法 2 虽然都正常，但这两种写法是有区别的，举例</p>
<p><strong>举例</strong>：交换两个变量的值</p>
<p>代码实现：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> a2 <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> temp<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">temp <span class="token operator">=</span> a1<span class="token punctuation">;</span></span>
<span class="line">a1 <span class="token operator">=</span> a2<span class="token punctuation">;</span></span>
<span class="line">a2 <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后"><span>最后</span></a></h2>
<p>关于变量的命名规则，将在下一篇文章里讲。</p>
<h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


