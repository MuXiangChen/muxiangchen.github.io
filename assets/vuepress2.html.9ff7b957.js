import{_ as n,o as s,c as a,e}from"./app.61034baf.js";const t={},p=e(`<h1 id="vue-press-2\u7684\u5751\u548C\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#vue-press-2\u7684\u5751\u548C\u8BB0\u5F55" aria-hidden="true">#</a> Vue Press 2\u7684\u5751\u548C\u8BB0\u5F55</h1><p>\u4F7F\u7528github action\u81EA\u52A8\u5316\u90E8\u7F72\uFF08\u5751\u592A\u591A\u4E86\u5B9E\u5728\u662F\uFF09</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># name \u53EF\u4EE5\u81EA\u5B9A\u4E49</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy GitHub Pages

<span class="token comment"># \u89E6\u53D1\u6761\u4EF6\uFF1A\u5728 push \u5230 main/master \u5206\u652F\u540E\uFF0C\u65B0\u7684 Github \u9879\u76EE \u5E94\u8BE5\u90FD\u662F main\uFF0C\u800C\u4E4B\u524D\u7684\u9879\u76EE\u4E00\u822C\u90FD\u662F master</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token comment"># \u4EFB\u52A1</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token comment"># \u670D\u52A1\u5668\u73AF\u5883\uFF1A\u6700\u65B0\u7248 Ubuntu</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># \u62C9\u53D6\u4EE3\u7801</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

      <span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>rf node_modules/ <span class="token important">&amp;&amp;</span> npm install <span class="token important">&amp;&amp;</span> npm run docs<span class="token punctuation">:</span>build
 
 
      <span class="token comment"># \u90E8\u7F72\u5230 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@releases/v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> token <span class="token comment"># \u4E5F\u5C31\u662F\u6211\u4EEC\u521A\u624D\u751F\u6210\u7684 secret</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages <span class="token comment"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F\uFF0C\u56E0\u4E3A main \u5206\u652F\u5B58\u653E\u7684\u4E00\u822C\u662F\u6E90\u7801\uFF0C\u800C gh-pages \u5206\u652F\u5219\u7528\u6765\u5B58\u653E\u751F\u6210\u7684\u9759\u6001\u6587\u4EF6</span>
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> docs/.vuepress/dist <span class="token comment"># vuepress \u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\u5B58\u653E\u7684\u5730\u65B9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[p];function i(c,u){return s(),a("div",null,l)}var d=n(t,[["render",i],["__file","vuepress2.html.vue"]]);export{d as default};
