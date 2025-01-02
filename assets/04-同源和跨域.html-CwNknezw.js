import{_ as s,c as a,e as t,o as p}from"./app-gihhjKhR.js";const e={};function l(c,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h2 id="同源和跨域" tabindex="-1"><a class="header-anchor" href="#同源和跨域"><span>同源和跨域</span></a></h2><h2 id="同源" tabindex="-1"><a class="header-anchor" href="#同源"><span>同源</span></a></h2><p>同源策略是浏览器的一种安全策略，所谓同源是指，域名，协议，端口完全相同。</p><h2 id="跨域问题的解决方案" tabindex="-1"><a class="header-anchor" href="#跨域问题的解决方案"><span>跨域问题的解决方案</span></a></h2><p>从我自己的网站访问别人网站的内容，就叫跨域。</p><p><img src="http://img.smyhvae.com/20180228_2231.png" alt=""></p><p>出于安全性考虑，浏览器不允许ajax跨域获取数据。</p><ul><li><p>iframe：处于安全性考虑，浏览器的开发厂商已经禁止了这种方式。</p></li><li><p>JSONP：script 标签的 src 属性传递数据。</p></li></ul><h2 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp"><span>JSONP</span></a></h2><p>JSONP(JSON with Padding)：带补丁的 json，本质是利用了 <code>&lt;script src=&quot;&quot;&gt;&lt;/script&gt;</code>标签具有可跨域的特性，由服务端返回一个预先定义好的JS函数的调用，并且将服务器数据以该函数参数的形式传递过来。此方法需要前后端配合完成。</p><p>我们知道， html标签的 src 属性是支持跨域的：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://img.smyhvae.com/2016040101.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>jsonp 就是利用这个特性实现的跨域，但用的是 script 标签。如下：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- jsonp 就是 利用 src，实现的跨域 用的是 script标签 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>http://192.168.141.137/2018-02-28/myData.php<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方那一行的代码，意思是：刷新A服务器上的index页面后，会去请求 B 服务器上的 <code>myData.php</code> 这个页面。而且请求的方式是 get 请求。</p><p>但是 B 服务器上的页面不是你想请求就可以请求的，大家一起配合才可以。</p><p><strong>具体实现步骤：</strong></p><p>需要首先声明的是，jsonp 只能通过 GET 方式进行请求。</p><p>（1）A客户端的代码：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 定义 eatFood()方法</span></span>
<span class="line">	<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我被调用了哦&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 使用 script标签 发送了 get请求 去到了一个 php页面 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>http://192.168.141.137/01.php?callback1=fn<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来分析上方代码中的最后一行的那个url：A 客户端请求的是 B服务器上的 <code>01.php</code>页面。url里有个<code>callback1=fn</code>，意思是：callback1是A和B 之间的约定，约定后，将执行方法 fn。</p><p>其实，fn方法已经在最后一行代码中执行了。只不过，fn方法里的data数据，是从 B 服务器中获取的。</p><p>（2）B服务器端的代码：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line">    <span class="token variable">$mycallBack</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;callback1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;lisi&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;zhaoliu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token variable">$mycallBack</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;(&quot;</span><span class="token operator">.</span><span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;)&quot;</span><span class="token punctuation">;</span>    <span class="token comment">//字符串拼接</span></span>
<span class="line"><span class="token delimiter important">?&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：</p><p>第一行的<code>callback1</code> 是A和B之间的约定，二者必须一致。</p><p>echo语句中输出的内容，即要返回给A客户端的内容，此内容会保存在 A 客户端的fn方法的data里。 data[0]指的是 zhangsan。</p><p><code>json_encode</code>指的是，将php对象转化为 json。</p><p>刷新A页面，输出结果为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">	mycallBack([&quot;zhangsan&quot;,&quot;lisi&quot;,&quot;zhaoliu&quot;])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="jquery-中的-jsonp" tabindex="-1"><a class="header-anchor" href="#jquery-中的-jsonp"><span>jQuery 中的 JSONP</span></a></h2><p>我们知道，jQuery 中发送 Ajax 请求，格式是：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">		<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">			$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot;./data.php?callback1=fn&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">&quot;jsonp&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token comment">//jsonp:&quot;callback1&quot;,   //传递给B服务器的回调函数的名字（默认为 callback）</span></span>
<span class="line">				<span class="token comment">//jsonCallBack:&quot;fn&quot;    //自定义的函数名称。默认为 jQuery 自动生成的随机函数名</span></span>
<span class="line">				<span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">					<span class="token function">alert</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">					<span class="token comment">//$(&quot;#showInfo&quot;).html(data);</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token function-variable function">error</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">				<span class="token punctuation">}</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那如果数据是 JSONP，上方代码则改为：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">		<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">			$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot;./data.php?fn&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">					<span class="token function">alert</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">					<span class="token comment">//$(&quot;#showInfo&quot;).html(data);</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token function-variable function">error</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">				<span class="token punctuation">}</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><p>参考链接：https://www.cnblogs.com/2050/p/3191744.html</p>`,37)]))}const i=s(e,[["render",l],["__file","04-同源和跨域.html.vue"]]),u=JSON.parse('{"path":"/Frontend/06-JavaScript%E5%9F%BA%E7%A1%80%EF%BC%9A%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B/04-%E5%90%8C%E6%BA%90%E5%92%8C%E8%B7%A8%E5%9F%9F.html","title":"04-同源和跨域","lang":"en-US","frontmatter":{"title":"04-同源和跨域","publish":true},"headers":[{"level":2,"title":"同源和跨域","slug":"同源和跨域","link":"#同源和跨域","children":[]},{"level":2,"title":"同源","slug":"同源","link":"#同源","children":[]},{"level":2,"title":"跨域问题的解决方案","slug":"跨域问题的解决方案","link":"#跨域问题的解决方案","children":[]},{"level":2,"title":"JSONP","slug":"jsonp","link":"#jsonp","children":[]},{"level":2,"title":"jQuery 中的 JSONP","slug":"jquery-中的-jsonp","link":"#jquery-中的-jsonp","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"updatedTime":1735788687000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":1,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/06-JavaScript基础：异步编程/04-同源和跨域.md"}');export{i as comp,u as data};
