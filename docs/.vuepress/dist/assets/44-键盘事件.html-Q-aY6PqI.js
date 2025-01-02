import{_ as t,c as e,e as l,a as s,f as a,b as c,d as o,r as i,o as u}from"./app-gihhjKhR.js";const k={};function d(r,n){const p=i("font");return u(),e("div",null,[n[7]||(n[7]=l(`<h2 id="鼠标的拖拽事件" tabindex="-1"><a class="header-anchor" href="#鼠标的拖拽事件"><span>鼠标的拖拽事件</span></a></h2><p>拖拽的流程：</p><p>（1）<code>onmousedown</code>：当鼠标在被拖拽元素上按下时，开始拖拽；</p><p>（2）<code>onmousemove</code>：当鼠标移动时被拖拽元素跟随鼠标移动；</p><p>（3）<code>onmouseup</code>：当鼠标松开时，被拖拽元素固定在当前位置。</p><h2 id="鼠标的滚轮事件" tabindex="-1"><a class="header-anchor" href="#鼠标的滚轮事件"><span>鼠标的滚轮事件</span></a></h2><p><code>onmousewheel</code>：鼠标滚轮滚动的事件，会在滚轮滚动时触发。但是火狐不支持该属性。</p><p><code>DOMMouseScroll</code>：在火狐中需要使用 DOMMouseScroll 来绑定滚动事件。注意该事件需要通过addEventListener()函数来绑定。</p><h2 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件"><span>键盘事件</span></a></h2><h3 id="事件名" tabindex="-1"><a class="header-anchor" href="#事件名"><span>事件名</span></a></h3><p><code>onkeydown</code>：按键被按下。</p><p><code>onkeyup</code>：按键被松开。</p><p><strong>注意</strong>：</p><ul><li><p>如果一直按着某一个按键不松手，那么，<code>onkeydown</code>事件会一直触发。此时，松开键盘，<code>onkeyup</code>事件会执行一次。</p></li><li><p>当<code>onkeydown</code>连续触发时，第一次和第二次之间会间隔稍微长一点，后续的间隔会非常快。这种设计是为了防止误操作的发生。</p></li></ul><p>键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document。代码举例：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            document<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;qianguyihao 键盘按下了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            document<span class="token punctuation">.</span><span class="token function-variable function">onkeyup</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;qianguyihao 键盘松开了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断哪个键盘被按下" tabindex="-1"><a class="header-anchor" href="#判断哪个键盘被按下"><span>判断哪个键盘被按下</span></a></h3><p>可以通过<code>event</code>事件对象的<code>keyCode</code>来获取按键的编码。</p><p>此外，<code>event</code>事件对象里面还提供了以下几个属性：</p><ul><li><p>altKey</p></li><li><p>ctrlKey</p></li><li><p>shiftKey</p></li></ul><p>上面这三个属性，可以用来判断<code>alt</code>、<code>ctrl</code>、和<code>shift</code>是否被按下。如果按下则返回true，否则返回false。代码举例：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            document<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;qianguyihao：键盘按下了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 判断y和ctrl是否同时被按下</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>ctrlKey <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">89</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ctrl和y都被按下了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例</strong>：input 文本框中，禁止输入数字。代码实现：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token comment">//获取input</span></span>
<span class="line">            <span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            input<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//console.log(&#39;qianguyihao:&#39; + event.keyCode);</span></span>
<span class="line">                <span class="token comment">//数字 48 - 57</span></span>
<span class="line">                <span class="token comment">//使文本框中不能输入数字</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>keyCode <span class="token operator">&gt;=</span> <span class="token number">48</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>keyCode <span class="token operator">&lt;=</span> <span class="token number">57</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//在文本框中输入内容，属于onkeydown的默认行为</span></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 如果在onkeydown中取消了默认行为，则输入的内容，不会出现在文本框中</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="举例-通过键盘的方向键-移动盒子" tabindex="-1"><a class="header-anchor" href="#举例-通过键盘的方向键-移动盒子"><span>举例：通过键盘的方向键，移动盒子</span></a></h2><p>代码实现：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">#box1</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
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
<span class="line">                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;smyhvae ctrl&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<span class="line">                        <span class="token comment">//alert(&quot;向左&quot;); left值减小</span></span>
<span class="line">                        box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> box1<span class="token punctuation">.</span>offsetLeft <span class="token operator">-</span> speed <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 在初始值的基础之上，减去 speed 大小</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> <span class="token number">39</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">//alert(&quot;向右&quot;);</span></span>
<span class="line">                        box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> box1<span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> speed <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> <span class="token number">38</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">//alert(&quot;向上&quot;);</span></span>
<span class="line">                        box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> box1<span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> speed <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> <span class="token number">40</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">//alert(&quot;向下&quot;);</span></span>
<span class="line">                        box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> box1<span class="token punctuation">.</span>offsetTop <span class="token operator">+</span> speed <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码，待改进的地方：</p><p>（1）移动盒子时，如果要加速，需要先按<code>方向键</code>，再按<code>Ctrl键</code>。</p><p>（2）首次移动盒子时，动作较慢。后续如果学习了定时器相关的内容，可以再改进。</p><h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>`,31)),s("p",null,[n[1]||(n[1]=a("想学习")),c(p,{color:"#0000ff"},{default:o(()=>n[0]||(n[0]=[s("strong",null,"更多技能",-1)])),_:1}),n[2]||(n[2]=a("？不妨关注我的微信公众号：")),n[3]||(n[3]=s("strong",null,"千古壹号",-1)),n[4]||(n[4]=a("（id：")),n[5]||(n[5]=s("code",null,"qianguyihao",-1)),n[6]||(n[6]=a("）。"))]),n[8]||(n[8]=s("p",null,"扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：",-1)),n[9]||(n[9]=s("p",null,[s("img",{src:"http://img.smyhvae.com/20190101.png",alt:""})],-1))])}const m=t(k,[["render",d],["__file","44-键盘事件.html.vue"]]),b=JSON.parse('{"path":"/Frontend/04-JavaScript%E5%9F%BA%E7%A1%80/44-%E9%94%AE%E7%9B%98%E4%BA%8B%E4%BB%B6.html","title":"44-键盘事件","lang":"en-US","frontmatter":{"title":"44-键盘事件"},"headers":[{"level":2,"title":"鼠标的拖拽事件","slug":"鼠标的拖拽事件","link":"#鼠标的拖拽事件","children":[]},{"level":2,"title":"鼠标的滚轮事件","slug":"鼠标的滚轮事件","link":"#鼠标的滚轮事件","children":[]},{"level":2,"title":"键盘事件","slug":"键盘事件","link":"#键盘事件","children":[{"level":3,"title":"事件名","slug":"事件名","link":"#事件名","children":[]},{"level":3,"title":"判断哪个键盘被按下","slug":"判断哪个键盘被按下","link":"#判断哪个键盘被按下","children":[]}]},{"level":2,"title":"举例：通过键盘的方向键，移动盒子","slug":"举例-通过键盘的方向键-移动盒子","link":"#举例-通过键盘的方向键-移动盒子","children":[]},{"level":2,"title":"我的公众号","slug":"我的公众号","link":"#我的公众号","children":[]}],"git":{"updatedTime":1735788687000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":1,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/04-JavaScript基础/44-键盘事件.md"}');export{m as comp,b as data};
