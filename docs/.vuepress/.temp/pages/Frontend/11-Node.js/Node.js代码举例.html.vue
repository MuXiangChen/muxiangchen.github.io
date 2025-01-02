<template><div><h2 id="在-node-js-上建一个-http-服务器" tabindex="-1"><a class="header-anchor" href="#在-node-js-上建一个-http-服务器"><span>在 Node.js 上建一个 http 服务器</span></a></h2>
<p>（1）新建一个文件 <code v-pre>server01.js</code>，然后在里面输入如下代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//引入 node.js里面的一个http包。因为引入之后，我们不会去修改它，所以用常量来表示</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建一台服务器</span></span>
<span class="line"><span class="token keyword">var</span> server <span class="token operator">=</span>  http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//当有人来访问这台服务器时，就会执行 function 回调函数</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'有人来访问我了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//要让服务器设置为监听状态，端口设置为8080</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意看注释。</p>
<p>我们把上面这个 js 文件跑起来，然后在浏览器端输入<code v-pre>http://localhost:8080/</code>，每请求一次，服务器的控制台就会打印 <code v-pre>有人来访问我了</code>。</p>
<p>（2）write()函数和 end()函数：</p>
<p>将上面的代码修改如下：</p>
<p>server02.js：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建一台服务器</span></span>
<span class="line"><span class="token keyword">var</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">//当有人来访问这个服务器时，就会执行function 这个回调函数</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'有人来访问我了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'smyhvae'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//向浏览器输出内容</span></span>
<span class="line">    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//结束了，浏览器你走吧。</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>function 回调函数里可以设置两个参数：request 和 response。<code v-pre>response.write()</code>表示向浏览器输出一些内容。</p>
<p>将上面的 js 代码跑起来，产生的问题是，无论我们在浏览器端输入<code v-pre>http://localhost:8080/1.html</code>，还是输入<code v-pre>http://localhost:8080/2.jpg</code>，浏览器上显示的都是<code v-pre>smyhvae</code>。</p>
</div></template>


