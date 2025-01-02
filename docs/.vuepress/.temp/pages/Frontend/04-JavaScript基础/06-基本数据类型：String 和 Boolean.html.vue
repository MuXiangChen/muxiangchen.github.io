<template><div><h2 id="string-字符串" tabindex="-1"><a class="header-anchor" href="#string-字符串"><span>String 字符串</span></a></h2>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3>
<p>如果在开发中需要使用文本，就可以用 String 字符串类来表示，比如姓名、商品简介等。</p>
<p>其语法为：双引号 <code v-pre>&quot;&quot;</code> 或者单引号 <code v-pre>''</code>。引号中的内容都是文本。</p>
<p>来看个示例。下面的这些，都是字符串：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'abcde'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">'千古壹号'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token string">'123123'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token string">'哈哈哈哈哈'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span> <span class="token comment">//空字符串</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> f <span class="token operator">=</span> haha<span class="token punctuation">;</span> <span class="token comment">// 没使用引号，到这里会直接报错。因为会被认为是js代码，但是之前并没有定义 haha。</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">string</span>
<span class="line">string</span>
<span class="line">string</span>
<span class="line">string</span>
<span class="line">string</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引号的注意事项" tabindex="-1"><a class="header-anchor" href="#引号的注意事项"><span>引号的注意事项</span></a></h3>
<p>1、单引号和双引号不能混用。比如下面这样写是不可以的：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> 'hello"<span class="token punctuation">;</span>  <span class="token comment">// 报错：Uncaught SyntaxError: Invalid or unexpected token</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2、同类引号不能嵌套：双引号里不能再放双引号，单引号里不能再放单引号。</p>
<p>3、单引号里可以嵌套双引号；双引号里可以嵌套单引号。</p>
<h3 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符"><span>转义字符</span></a></h3>
<p>假设现在有这样一个字符串——<code v-pre>千古'壹号&quot;前端开发&quot;</code>。</p>
<p>上面的字符串中，前端开发 这四个字是被双引号包围的， 千古 和 壹号 之间有一个单引号。难点就在于这个单引号。</p>
<p>如果你想在JS中定义上述字符串的话，直接在代码中这样写是不行的，会报错：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'千古'</span>壹号<span class="token string">"前端开发"</span>'<span class="token punctuation">;</span> <span class="token comment">// 会报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>那要怎么办呢？这个时候，转移字符就派上用场了。</p>
<p>在字符串中我们可以使用<code v-pre>\</code>作为转义字符。如果你想表示一些特殊符号，可以使用<code v-pre>\</code>进行转义。</p>
<ul>
<li><code v-pre>\'</code> 表示 <code v-pre>'</code> 单引号</li>
<li><code v-pre>\&quot;</code> 表示 <code v-pre>&quot;</code> 双引号</li>
<li><code v-pre>\\</code> 表示<code v-pre>\</code></li>
<li><code v-pre>\r</code> 表示回车</li>
<li><code v-pre>\n</code> 表示换行。n 的意思是 newline。</li>
<li><code v-pre>\t</code> 表示缩进。t 的意思是 tab，制表符。</li>
<li><code v-pre>\b</code> 表示空格。b 的意思是 blank。</li>
</ul>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'我说:"今天\t天气真不错！"'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'\\\\\\'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str3 <span class="token operator">=</span> <span class="token string">'千古\'壹号"前端开发"'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">我说:"今天	天气真不错！"</span>
<span class="line">\\\</span>
<span class="line">千古'壹号"前端开发"	</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取字符串的长度" tabindex="-1"><a class="header-anchor" href="#获取字符串的长度"><span>获取字符串的长度</span></a></h3>
<p>字符串是由若干个字符组成的，这些字符的数量就是字符串的长度。我们可以通过字符串的 <code v-pre>length</code> 属性可以获取整个字符串的长度。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'千古壹号'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'千古壹号，永不止步！'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> str3 <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str4 <span class="token operator">=</span> <span class="token string">'qianguyihao, keep moving!'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str3<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str4<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见，字符串的 length 属性，在判断字符串的长度时，会认为：</p>
<ul>
<li>
<p>一个中文算一个字符，一个英文算一个字符</p>
</li>
<li>
<p>一个标点符号（包括中文标点、英文标点）算一个字符</p>
</li>
<li>
<p>一个空格算一个字符</p>
</li>
</ul>
<h3 id="字符串拼接" tabindex="-1"><a class="header-anchor" href="#字符串拼接"><span>字符串拼接</span></a></h3>
<p>多个字符串之间可以使用加号 <code v-pre>+</code> 进行拼接。</p>
<p><strong>拼接语法</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">字符串 + 任意数据类型 = 拼接之后的新字符串;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>拼接规则</strong>：拼接前，会把与字符串相加的这个数据类型转成字符串，然后再拼接成一个新的字符串。</p>
<p><strong>代码举例</strong>：（字符串与六大数据类型相加）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'千古壹号'</span> <span class="token operator">+</span> <span class="token string">'永不止步'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'千古壹号'</span> <span class="token operator">+</span> <span class="token number">666</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str3 <span class="token operator">=</span> <span class="token string">'千古壹号'</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str4 <span class="token operator">=</span> <span class="token string">'千古壹号'</span> <span class="token operator">+</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str5 <span class="token operator">=</span> <span class="token string">'千古壹号'</span> <span class="token operator">+</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'千古壹号'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str6 <span class="token operator">=</span> <span class="token string">'千古壹号'</span> <span class="token operator">+</span> obj<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str6<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">千古壹号永不止步</span>
<span class="line"></span>
<span class="line">千古壹号666</span>
<span class="line"></span>
<span class="line">千古壹号true</span>
<span class="line"></span>
<span class="line">千古壹号null</span>
<span class="line"></span>
<span class="line">千古壹号undefined</span>
<span class="line"></span>
<span class="line">千古壹号[object Object]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串的不可变性" tabindex="-1"><a class="header-anchor" href="#字符串的不可变性"><span>字符串的不可变性</span></a></h2>
<p>字符串里面的值不可被改变。虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">str <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如上面的代码，当重新给变量 str 赋值时，常量<code v-pre>hello</code>不会被修改，依然保存在内存中；str 会改为指向<code v-pre>qianguyihao</code>。</p>
<h2 id="模板字符串-模板字面量" tabindex="-1"><a class="header-anchor" href="#模板字符串-模板字面量"><span>模板字符串（模板字面量）</span></a></h2>
<p>ES6 中引入了<strong>模板字符串</strong>，让我们省去了字符串拼接的烦恼。下面一起来看看它的特性。</p>
<h3 id="在模板字符串中插入变量" tabindex="-1"><a class="header-anchor" href="#在模板字符串中插入变量"><span>在模板字符串中插入变量</span></a></h3>
<p>以前，让字符串进行拼接的时候，是这样做的：（传统写法的字符串拼接）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'smyhvae'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token string">'26'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'name:'</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">',age:'</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//传统写法</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法，比较繁琐，而且容易出错。</p>
<p>现在，有了 ES6 语法，字符串拼接可以这样写：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token string">'26'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是'</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">',age:'</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//传统写法</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,age:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ES6 写法。注意语法格式</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>，上方代码中，倒数第二行用的符号是单引号，最后一行用的符号是反引号（在 tab 键的上方）。</p>
<p>参考链接：</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000010222698" target="_blank" rel="noopener noreferrer">ES6 的 rest 参数和扩展运算符</a></li>
</ul>
<h3 id="在模板字符串中插入表达式" tabindex="-1"><a class="header-anchor" href="#在模板字符串中插入表达式"><span>在模板字符串中插入表达式</span></a></h3>
<p>以前，在字符串中插入表达式的写法必须是这样的：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'this is '</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">' and\nnot '</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，通过模板字符串，我们可以使用一种更优雅的方式来表示：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 下面这行代码，故意做了换行。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">this is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a <span class="token operator">+</span> b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and</span>
<span class="line">not </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">2</span> <span class="token operator">*</span> a <span class="token operator">+</span> b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">this is <span class="token number">15</span> and</span>
<span class="line">not <span class="token number">20</span>.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板字符串中可以换行" tabindex="-1"><a class="header-anchor" href="#模板字符串中可以换行"><span>模板字符串中可以换行</span></a></h3>
<p>因为模板字符串支持换行，所以可以让代码写得非常美观。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 模板字符串支持换行</span></span>
<span class="line"><span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div></span>
<span class="line">	&lt;span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>result<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span></span>
<span class="line">	&lt;span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>result<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span></span>
<span class="line">	&lt;span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>result<span class="token punctuation">.</span>sex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span></span>
<span class="line">&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果也会换行</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="http://img.smyhvae.com/20200825_2016.png" alt=""></p>
<h3 id="模板字符串中可以调用函数" tabindex="-1"><a class="header-anchor" href="#模板字符串中可以调用函数"><span>模板字符串中可以调用函数</span></a></h3>
<p>模板字符串中可以调用函数。字符串中调用函数的位置，将会显示函数执行后的返回值。</p>
<p>举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">www.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.com</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：www.qianguyihao.com</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板字符串支持嵌套使用" tabindex="-1"><a class="header-anchor" href="#模板字符串支持嵌套使用"><span>模板字符串支持嵌套使用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> nameList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'千古壹号'</span><span class="token punctuation">,</span> <span class="token string">'许嵩'</span><span class="token punctuation">,</span> <span class="token string">'解忧少帅'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">myTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// join('') 的意思是，把数组里的内容合并成一个字符串</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;ul></span>
<span class="line">	</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>nameList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;li></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">	&lt;/ul></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">myTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="http://img.smyhvae.com/20200607_2118.png" alt=""></p>
<h2 id="布尔值-boolean" tabindex="-1"><a class="header-anchor" href="#布尔值-boolean"><span>布尔值：Boolean</span></a></h2>
<p>布尔型有两个值：true 和 false。主要用来做逻辑判断： true 表示真，false 表示假。布尔值直接使用就可以了，千万不要加引号。</p>
<p>布尔（英语：Boolean）是计算机科学中的逻辑数据类型，以发明布尔代数的英国数学家<strong>乔治·布尔</strong>为名。</p>
<p>代码举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出结果：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">boolean</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>布尔型和数字型相加时， true 按 1 来算 ，false 按 0 来算。</p>
<h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


