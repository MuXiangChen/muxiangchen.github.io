import{_ as n,c as a,e,o as p}from"./app-gihhjKhR.js";const t={};function l(o,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h3 id="_001、对象的赋值" tabindex="-1"><a class="header-anchor" href="#_001、对象的赋值"><span>001、对象的赋值</span></a></h3><p>（1）在 store 中定义一个对象：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">pin</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">avatarUrl</span><span class="token operator">:</span> <span class="token constant">DEFAULT_AVATAR</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">definePin</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">isbind</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）从接口拿到数据后，给这个对象赋值：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">pin</span><span class="token operator">:</span> res<span class="token punctuation">.</span>base<span class="token punctuation">.</span>curPin<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">nickName</span><span class="token operator">:</span> res<span class="token punctuation">.</span>base<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">avatarUrl</span><span class="token operator">:</span> res<span class="token punctuation">.</span>base<span class="token punctuation">.</span>headImageUrl <span class="token operator">?</span> res<span class="token punctuation">.</span>base<span class="token punctuation">.</span>headImageUrl <span class="token operator">:</span> <span class="token constant">DEFAULT_AVATAR</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">definePin</span><span class="token operator">:</span> res<span class="token punctuation">.</span>definePin</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(t,[["render",l],["__file","Vue.js在开发中的常见写法积累.html.vue"]]),c=JSON.parse('{"path":"/Frontend/12-Vue%E5%9F%BA%E7%A1%80/Vue.js%E5%9C%A8%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84%E5%B8%B8%E8%A7%81%E5%86%99%E6%B3%95%E7%A7%AF%E7%B4%AF.html","title":"01-数据库的基础知识","lang":"en-US","frontmatter":{"title":"01-数据库的基础知识","publish":false},"headers":[{"level":3,"title":"001、对象的赋值","slug":"_001、对象的赋值","link":"#_001、对象的赋值","children":[]}],"git":{"updatedTime":1735788687000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":1,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/12-Vue基础/Vue.js在开发中的常见写法积累.md"}');export{r as comp,c as data};
