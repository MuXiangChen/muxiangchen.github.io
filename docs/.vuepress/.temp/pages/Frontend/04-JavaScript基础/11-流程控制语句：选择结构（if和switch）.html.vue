<template><div><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h2>
<p>用<code v-pre>{}</code>包围起来的代码，就是代码块。</p>
<p>在 ES5 语法中，代码块，只具有<strong>分组</strong>的作用，没有其他的用途。代码块中的内容，在外部是完全可见的。举例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'qianguyihao'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'千古壹号'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a = '</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：（可以看出，虽然变量 a 是定义在代码块中的，但是在外部依然可以访问）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">千古壹号</span>
<span class="line">a = 2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程控制语句" tabindex="-1"><a class="header-anchor" href="#流程控制语句"><span>流程控制语句</span></a></h2>
<p>在一个程序执行的过程中，各条语句的执行顺序对程序的结果是有直接影响的。所以，我们必须清楚每条语句的执行流程。而且，很多时候我们要通过控制语句的执行顺序来实现我们想要的业务逻辑和功能。</p>
<h3 id="流程控制语句分类" tabindex="-1"><a class="header-anchor" href="#流程控制语句分类"><span>流程控制语句分类</span></a></h3>
<ul>
<li>
<p>顺序结构</p>
</li>
<li>
<p>选择结构：if 语句、switch 语句</p>
</li>
<li>
<p>循环结构：while 语句、for 语句</p>
</li>
</ul>
<h2 id="顺序结构" tabindex="-1"><a class="header-anchor" href="#顺序结构"><span>顺序结构</span></a></h2>
<p>按照代码的先后顺序，依次执行。结构图如下：</p>
<p><img src="http://img.smyhvae.com/20181227_1200.png" alt=""></p>
<h2 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句"><span>if 语句</span></a></h2>
<p>if 语句有以下三种形式。</p>
<h3 id="if-语句的三种形式" tabindex="-1"><a class="header-anchor" href="#if-语句的三种形式"><span>if 语句的三种形式</span></a></h3>
<p>形式1：（条件成立才执行。如果条件不成立，那就什么都不做）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 条件为真时，做的事情</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于非布尔类型的数据，会先转换成布尔类型再判断。下同。</p>
<p>形式 2：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 条件为真时，做的事情</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 条件为假时，做的事情</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>形式3：（多分支的 if 语句）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 条件1为真时，做的事情</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 条件1不满足，条件2满足时，做的事情</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 条件1、2不满足，条件3满足时，做的事情</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 条件1、2、3都不满足时，做的事情</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上所有的语句体中，只执行其中一个。</p>
<h3 id="做个题目" tabindex="-1"><a class="header-anchor" href="#做个题目"><span>做个题目</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">根据BMI（身体质量指数）显示一个人的体型。</span>
<span class="line">BMI指数，就是体重、身高的一个计算公式。公式是：</span>
<span class="line">BMI =体重÷身高的平方</span>
<span class="line"></span>
<span class="line">比如，老师的体重是81.6公斤，身高是1.71米。</span>
<span class="line">那么老师的BMI就是  81.6 ÷ 1.712     等于 27.906022365856163</span>
<span class="line"></span>
<span class="line">过轻：低于18.5</span>
<span class="line">正常：18.5-24.99999999</span>
<span class="line">过重：25-27.9999999</span>
<span class="line">肥胖：28-32</span>
<span class="line">非常肥胖, 高于32</span>
<span class="line"></span>
<span class="line">用JavaScript开发一个程序，让用户先输入自己的体重，然后输入自己的身高（弹出两次prompt框）。</span>
<span class="line">计算它的BMI，根据上表，弹出用户的身体情况。比如“过轻” 、 “正常” 、“过重” 、 “肥胖” 、“非常肥胖”。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>答案</strong>：</p>
<p>写法 1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//第一步，输入身高和体重</span></span>
<span class="line"><span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入身高，单位是米'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> weight <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入体重，单位是公斤'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//第二步，计算BMI指数</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">BMI</span> <span class="token operator">=</span> weight <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//第三步，if语句来判断</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">BMI</span> <span class="token operator">&lt;</span> <span class="token number">18.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'偏瘦'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">BMI</span> <span class="token operator">&lt;</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'正常'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">BMI</span> <span class="token operator">&lt;</span> <span class="token number">28</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'过重'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">BMI</span> <span class="token operator">&lt;=</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'肥胖'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'非常肥胖'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写法 2：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//第一步，输入身高和体重</span></span>
<span class="line"><span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入身高，单位是米'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> weight <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入体重，单位是公斤'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//第二步，计算BMI指数</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">BMI</span> <span class="token operator">=</span> weight <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//第三步，if语句来判断</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">BMI</span> <span class="token operator">></span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'非常肥胖'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">BMI</span> <span class="token operator">>=</span> <span class="token number">28</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'肥胖'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">BMI</span> <span class="token operator">>=</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'过重'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">BMI</span> <span class="token operator">>=</span> <span class="token number">18.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'正常'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'偏瘦'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-语句的嵌套" tabindex="-1"><a class="header-anchor" href="#if-语句的嵌套"><span>if 语句的嵌套</span></a></h3>
<p>我们通过下面这个例子来引出 if 语句的嵌套。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">一个加油站为了鼓励车主多加油，所以加的多有优惠。</span>
<span class="line">92号汽油，每升6元；如果大于等于20升，那么每升5.9；</span>
<span class="line">97号汽油，每升7元；如果大于等于30升，那么每升6.95</span>
<span class="line">编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20180117_2232.png" alt=""></p>
<p>代码实现如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//第一步，输入</span></span>
<span class="line"><span class="token keyword">const</span> bianhao <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'您想加什么油？填写92或者97'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> sheng <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'您想加多少升？'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//第二步，判断</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>bianhao <span class="token operator">==</span> <span class="token number">92</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//编号是92的时候做的事情</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>sheng <span class="token operator">>=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> price <span class="token operator">=</span> sheng <span class="token operator">*</span> <span class="token number">5.9</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> price <span class="token operator">=</span> sheng <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>bianhao <span class="token operator">==</span> <span class="token number">97</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//编号是97的时候做的事情</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>sheng <span class="token operator">>=</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> price <span class="token operator">=</span> sheng <span class="token operator">*</span> <span class="token number">6.95</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> price <span class="token operator">=</span> sheng <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'不好意思，没有这个编号的汽油！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'价格是'</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch-语句-条件分支语句" tabindex="-1"><a class="header-anchor" href="#switch-语句-条件分支语句"><span>switch 语句（条件分支语句）</span></a></h2>
<p>switch 语句也叫条件分支语句。</p>
<h3 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式"><span>语法格式</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">switch</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">case</span> 值<span class="token number">1</span>：</span>
<span class="line">		语句体<span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">case</span> 值<span class="token number">2</span>：</span>
<span class="line">		语句体<span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token operator">...</span></span>
<span class="line">	<span class="token operator">...</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">default</span>：</span>
<span class="line">		语句体 n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释</strong>：switch 可以理解为“开关、转换” 。case 可以理解为“案例、选项”。</p>
<h3 id="switch-语句的执行流程" tabindex="-1"><a class="header-anchor" href="#switch-语句的执行流程"><span>switch 语句的执行流程</span></a></h3>
<p>流程图如下：</p>
<p><img src="http://img.smyhvae.com/20190815_1501.png" alt=""></p>
<p>执行流程如下：</p>
<p>（1）首先，计算出表达式的值，和各个 case 依次比较，一旦有对应的值，就会执行相应的语句，在执行的过程中，遇到 break 就会结束。</p>
<p>（2）然后，如果所有的 case 都和表达式的值不匹配，就会执行 default 语句体部分。</p>
<h3 id="switch-语句的结束条件【非常重要】" tabindex="-1"><a class="header-anchor" href="#switch-语句的结束条件【非常重要】"><span>switch 语句的结束条件【非常重要】</span></a></h3>
<ul>
<li>情况 a：遇到 break 就结束（而不是遇到 default 就结束）。因为 break 在此处的作用是，立即结束并退出整个 switch 语句。</li>
<li>情况 b：执行到程序的末尾就结束。</li>
</ul>
<p>我们稍后讲 case穿透的时候，你就会明白其中的奥妙了。</p>
<h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点"><span>注意点</span></a></h3>
<p>1、switch 后面的括号里可以是变量、常量、表达式， 通常是一个<strong>变量</strong>（一般做法是：先把表达式存放到变量中）。</p>
<p>case 后面的值可以是变量、常量、表达式。</p>
<p>2、<strong>case的判断逻辑是<code v-pre>===</code>，不是<code v-pre>==</code></strong>。因此，字符串<code v-pre>'6'</code>和 数字 <code v-pre>6</code> 是不一样的。</p>
<p>举例 1：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">'notice'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'notice'</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'提示'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'warning'</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'警告'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'error'</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'错误'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'默认文案'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 2：（case 后面的是表达式）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">28</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'未成年人'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> age <span class="token operator">>=</span> <span class="token number">18</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&lt;=</span> <span class="token number">65</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'还能干活儿'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> age <span class="token operator">></span> <span class="token number">65</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'该退休了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'默认文案'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码解释：由于 switch 里的值是 true，所以，在众多的 case 语句中，会去匹配第一个符合 <code v-pre>case true</code>的语句，然后命中这条语句。</p>
<p>3、default不一定要写在最后面。 switch 中的 default 无论放到什么位置，都会等到所有case 都不匹配再执行。default 也可以省略。</p>
<h3 id="case-穿透" tabindex="-1"><a class="header-anchor" href="#case-穿透"><span>case 穿透</span></a></h3>
<p>switch 语句中的<code v-pre>break</code>可以省略，但一般不建议（对于新手而言）。否则结果可能不是你想要的，会出现一个现象：<strong>case 穿透</strong>。</p>
<p>当然，如果你能利用好 case 穿透，会让代码写得十分优雅。</p>
<p><strong>举例 1</strong>：（case 穿透的情况）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//switch判断语句</span></span>
<span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'星期一'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'星期二'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'星期三'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'星期四'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//break;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'星期五'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//break;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'星期六'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'星期日'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你输入的数据有误'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的运行结果，可能会令你感到意外：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">星期四</span>
<span class="line">星期五</span>
<span class="line">星期六</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的解释：因为在 case 4 和 case 5 中都没有 break，那语句走到 case 6 的 break 才会停止。</p>
<p><strong>举例 2</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//switch判断语句</span></span>
<span class="line"><span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是defaul语句'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// break;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'第二个呵呵:'</span> <span class="token operator">+</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//break;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'第三个呵呵:'</span> <span class="token operator">+</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'第四个呵呵:'</span> <span class="token operator">+</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的运行结果，你也许会意外：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">我是defaul语句</span>
<span class="line">第二个呵呵:5</span>
<span class="line">第三个呵呵:5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码的解释：代码走到 default 时，因为没有遇到 break，所以会继续往下走，直到遇见 break 或者走到程序的末尾。 从这个例子可以看出：switch 语句的结束与 default 的顺序无关。</p>
<h2 id="switch-语句的实战举例-替换-if-语句" tabindex="-1"><a class="header-anchor" href="#switch-语句的实战举例-替换-if-语句"><span>switch 语句的实战举例：替换 if 语句</span></a></h2>
<p>我们实战开发中，经常需要根据接口的返回码 retCode ，来让前端做不同的展示。</p>
<p>这种场景是业务开发中经常出现的，请一定要掌握。然而，很多人估计会这么写：</p>
<h3 id="写法-1-不推荐。这种写法太挫了" tabindex="-1"><a class="header-anchor" href="#写法-1-不推荐。这种写法太挫了"><span>写法 1（不推荐。这种写法太挫了）</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> retCode <span class="token operator">=</span> <span class="token number">1003</span><span class="token punctuation">;</span> <span class="token comment">// 返回码 retCode 的值可能有很多种情况</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'接口联调成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">101</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'活动不存在'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">103</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'活动未开始'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">104</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'活动已结束'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">1001</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'参数错误'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">1002</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'接口频率限制'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">1003</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'未登录'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">1004</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 其他异常返回码</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'系统君失联了，请稍候再试'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你是按照上面的 <code v-pre>if else</code>的方式来写各种条件判断，说明你的代码水平太初级了，会被人喷的，千万不要这么写。这种写法，容易导致<strong>嵌套太深，可读性很差</strong>。</p>
<p>那要怎么改进呢？继续往下看。</p>
<h3 id="写法-2-推荐。通过-return-的方式-将上面的写法进行改进" tabindex="-1"><a class="header-anchor" href="#写法-2-推荐。通过-return-的方式-将上面的写法进行改进"><span>写法 2（推荐。通过 return 的方式，将上面的写法进行改进）</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> retCode <span class="token operator">=</span> <span class="token number">1003</span><span class="token punctuation">;</span> <span class="token comment">// 返回码 retCode 的值可能有很多种情况</span></span>
<span class="line"><span class="token function">handleRetCode</span><span class="token punctuation">(</span>retCode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方法：根据接口不同的返回码，处理前端不同的显示状态</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">handleRetCode</span><span class="token punctuation">(</span><span class="token parameter">retCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'接口联调成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">101</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'活动不存在'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">103</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'活动未开始'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">104</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'活动已结束'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">1001</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'参数错误'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">1002</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'接口频率限制'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">1003</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'未登录'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>retCode <span class="token operator">==</span> <span class="token number">1004</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 其他异常返回码</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'系统君失联了，请稍候再试'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的写法 2，是比较推荐的写法：直接通过 return 的方式，让 function 里的代码不再继续往下走，这就达到目的了。对了，因为要用到 return ，所以整段代码是封装到一个 function 里的。</p>
<p>如果你以后看到有前端小白采用的是<strong>写法 1</strong>，请一定要把<strong>写法 2</strong>传授给他：不需要那么多的 if else，直接用 return 返回就行了。</p>
<h3 id="写法-3-推荐。将-if-else-改为-switch" tabindex="-1"><a class="header-anchor" href="#写法-3-推荐。将-if-else-改为-switch"><span>写法 3（推荐。将 if else 改为 switch）</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> retCode <span class="token operator">=</span> <span class="token number">1003</span><span class="token punctuation">;</span> <span class="token comment">// 返回码 retCode 的值可能有很多种情况</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>retCode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'接口联调成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">101</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'活动不存在'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">103</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'活动未开始'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">104</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'活动已结束'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1001</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'参数错误'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1002</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'接口频率限制'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1003</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'未登录'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1004</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 其他异常返回码</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'系统君失联了，请稍候再试'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实战开发中，方式 3 是非常推荐的写法，甚至比方式 2 还要好。我们尽量不要写太多的 if 语句，避免代码嵌套过深。</p>
<h3 id="switch-语句的优雅写法-适时地去掉-break" tabindex="-1"><a class="header-anchor" href="#switch-语句的优雅写法-适时地去掉-break"><span>switch 语句的优雅写法：适时地去掉 break</span></a></h3>
<p>我们先来看看下面这段代码：（不推荐）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> day <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'work'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'work'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'work'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'work'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'work'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'relax'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'relax'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码，咋一看，好像没啥毛病。但你有没有发现，重复代码太多了？</p>
<p>实战开发中，凡是有重复的地方，我们都必须要想办法简化。写代码就是在不断重构的过程。</p>
<p>上面的代码，可以改进如下：（推荐，非常优雅）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> day <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'work'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 在这里放一个 break</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'relax'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 在这里放一个 break</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你没看错，就是上面的这种写法，能达到同样的效果，非常优雅。</p>
<p>小白可能认为这样的写法可读性不强，所以说他是小白。我可以明确告诉你，改进后的这种写法，才是最优雅的、最简洁、可读性最好的。</p>
<h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充"><span>补充</span></a></h2>
<h3 id="if-和-switch如何选择" tabindex="-1"><a class="header-anchor" href="#if-和-switch如何选择"><span>if 和 switch如何选择</span></a></h3>
<p>如果是对区间进行判断，则建议用 if。如果是对几个固定的值进行判断，那么，数量少的话用 if，数量多的话用switch。</p>
<h3 id="用-return-代替-if-else" tabindex="-1"><a class="header-anchor" href="#用-return-代替-if-else"><span>用 return 代替 if else</span></a></h3>
<p>业务场景举例：</p>
<p>我们在实战业务中涉及到调接口时，一般会这样做：</p>
<ul>
<li>
<p>接口返回码为 0 时，前端 resolve。</p>
</li>
<li>
<p>接口返回未登录时，前端跳转到登录页面。</p>
</li>
<li>
<p>接口返回其他情况，或者无返回时，前端 reject。</p>
</li>
</ul>
<p>写法 1、if else 的写法：（不推荐）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">+</span>res<span class="token punctuation">.</span>retCode <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">+</span>res<span class="token punctuation">.</span>retCode <span class="token operator">==</span> <span class="token number">8888</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">goLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写法 2、 return 的写法：（推荐）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res <span class="token operator">||</span> <span class="token operator">+</span>res<span class="token punctuation">.</span>retCode <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">+</span>res<span class="token punctuation">.</span>retCode <span class="token operator">===</span> <span class="token number">8888</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 未登录</span></span>
<span class="line">        <span class="token function">goLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：如果你没学过 Promise，这个例子可以先不看。等以后学了 Promise 再回来看就很容易明白了。</p>
<h2 id="赞赏作者" tabindex="-1"><a class="header-anchor" href="#赞赏作者"><span>赞赏作者</span></a></h2>
<p>创作不易，你的赞赏和认可，是我更新的最大动力：</p>
<p><img src="https://img.smyhvae.com/20220401_1800.jpg" alt=""></p>
</div></template>


