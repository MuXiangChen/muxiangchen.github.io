<template><div><h2 id="鼠标的拖拽事件" tabindex="-1"><a class="header-anchor" href="#鼠标的拖拽事件"><span>鼠标的拖拽事件</span></a></h2>
<p>拖拽的流程：</p>
<p>（1）<code v-pre>onmousedown</code>：当鼠标在被拖拽元素上按下时，开始拖拽；</p>
<p>（2）<code v-pre>onmousemove</code>：当鼠标移动时被拖拽元素跟随鼠标移动；</p>
<p>（3）<code v-pre>onmouseup</code>：当鼠标松开时，被拖拽元素固定在当前位置。</p>
<h2 id="鼠标的滚轮事件" tabindex="-1"><a class="header-anchor" href="#鼠标的滚轮事件"><span>鼠标的滚轮事件</span></a></h2>
<p><code v-pre>onmousewheel</code>：鼠标滚轮滚动的事件，会在滚轮滚动时触发。但是火狐不支持该属性。</p>
<p><code v-pre>DOMMouseScroll</code>：在火狐中需要使用 DOMMouseScroll 来绑定滚动事件。注意该事件需要通过addEventListener()函数来绑定。</p>
<h2 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件"><span>键盘事件</span></a></h2>
<h3 id="事件名" tabindex="-1"><a class="header-anchor" href="#事件名"><span>事件名</span></a></h3>
<p><code v-pre>onkeydown</code>：按键被按下。</p>
<p><code v-pre>onkeyup</code>：按键被松开。</p>
<p><strong>注意</strong>：</p>
<ul>
<li>
<p>如果一直按着某一个按键不松手，那么，<code v-pre>onkeydown</code>事件会一直触发。此时，松开键盘，<code v-pre>onkeyup</code>事件会执行一次。</p>
</li>
<li>
<p>当<code v-pre>onkeydown</code>连续触发时，第一次和第二次之间会间隔稍微长一点，后续的间隔会非常快。这种设计是为了防止误操作的发生。</p>
</li>
</ul>
<p>键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document。代码举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            document<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'qianguyihao 键盘按下了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            document<span class="token punctuation">.</span><span class="token function-variable function">onkeyup</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'qianguyihao 键盘松开了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断哪个键盘被按下" tabindex="-1"><a class="header-anchor" href="#判断哪个键盘被按下"><span>判断哪个键盘被按下</span></a></h3>
<p>可以通过<code v-pre>event</code>事件对象的<code v-pre>keyCode</code>来获取按键的编码。</p>
<p>此外，<code v-pre>event</code>事件对象里面还提供了以下几个属性：</p>
<ul>
<li>
<p>altKey</p>
</li>
<li>
<p>ctrlKey</p>
</li>
<li>
<p>shiftKey</p>
</li>
</ul>
<p>上面这三个属性，可以用来判断<code v-pre>alt</code>、<code v-pre>ctrl</code>、和<code v-pre>shift</code>是否被按下。如果按下则返回true，否则返回false。代码举例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            document<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'qianguyihao：键盘按下了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 判断y和ctrl是否同时被按下</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>ctrlKey <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">89</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'ctrl和y都被按下了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例</strong>：input 文本框中，禁止输入数字。代码实现：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token comment">//获取input</span></span>
<span class="line">            <span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            input<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//console.log('qianguyihao:' + event.keyCode);</span></span>
<span class="line">                <span class="token comment">//数字 48 - 57</span></span>
<span class="line">                <span class="token comment">//使文本框中不能输入数字</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>keyCode <span class="token operator">>=</span> <span class="token number">48</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>keyCode <span class="token operator">&lt;=</span> <span class="token number">57</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//在文本框中输入内容，属于onkeydown的默认行为</span></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 如果在onkeydown中取消了默认行为，则输入的内容，不会出现在文本框中</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="举例-通过键盘的方向键-移动盒子" tabindex="-1"><a class="header-anchor" href="#举例-通过键盘的方向键-移动盒子"><span>举例：通过键盘的方向键，移动盒子</span></a></h2>
<p>代码实现：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">#box1</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token comment">// 使div可以根据不同的方向键向不同的方向移动</span></span>
<span class="line">            <span class="token comment">/*</span>
<span class="line">             * 按左键，div向左移</span>
<span class="line">             * 按右键，div向右移</span>
<span class="line">             * ...</span>
<span class="line">             */</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//为document绑定一个按键按下的事件</span></span>
<span class="line">            document<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//定义一个变量，来表示移动的速度</span></span>
<span class="line">                <span class="token keyword">var</span> speed <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//当用户按了ctrl以后，速度加快</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>ctrlKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'smyhvae ctrl'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    speed <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">/*</span>
<span class="line">                 * 37 左</span>
<span class="line">                 * 38 上</span>
<span class="line">                 * 39 右</span>
<span class="line">                 * 40 下</span>
<span class="line">                 */</span></span>
<span class="line">                <span class="token keyword">switch</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>keyCode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">case</span> <span class="token number">37</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">//alert("向左"); left值减小</span></span>
<span class="line">                        box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> box1<span class="token punctuation">.</span>offsetLeft <span class="token operator">-</span> speed <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span> <span class="token comment">// 在初始值的基础之上，减去 speed 大小</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> <span class="token number">39</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">//alert("向右");</span></span>
<span class="line">                        box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> box1<span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> speed <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> <span class="token number">38</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">//alert("向上");</span></span>
<span class="line">                        box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> box1<span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> speed <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> <span class="token number">40</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">//alert("向下");</span></span>
<span class="line">                        box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> box1<span class="token punctuation">.</span>offsetTop <span class="token operator">+</span> speed <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码，待改进的地方：</p>
<p>（1）移动盒子时，如果要加速，需要先按<code v-pre>方向键</code>，再按<code v-pre>Ctrl键</code>。</p>
<p>（2）首次移动盒子时，动作较慢。后续如果学习了定时器相关的内容，可以再改进。</p>
<h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<font color=#0000ff><strong>更多技能</strong></font>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="http://img.smyhvae.com/20190101.png" alt=""></p>
</div></template>


