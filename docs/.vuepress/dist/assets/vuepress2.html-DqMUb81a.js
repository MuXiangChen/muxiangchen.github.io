import{_ as n,c as a,e,o as p}from"./app-gihhjKhR.js";const l={};function t(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="vue-press-2的坑和记录" tabindex="-1"><a class="header-anchor" href="#vue-press-2的坑和记录"><span>Vue Press 2的坑和记录</span></a></h1><p>使用github action自动化部署（坑太多了实在是）</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># name 可以自定义</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy GitHub Pages</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 触发条件：在 push 到 main/master 分支后，新的 Github 项目 应该都是 main，而之前的项目一般都是 master</span></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> main</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 任务</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 服务器环境：最新版 Ubuntu</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 拉取代码</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 生成静态文件</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>rf node_modules/ <span class="token important">&amp;&amp;</span> npm install <span class="token important">&amp;&amp;</span> npm run docs<span class="token punctuation">:</span>build</span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line">      <span class="token comment"># 部署到 GitHub Pages</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@releases/v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> token <span class="token comment"># 也就是我们刚才生成的 secret</span></span>
<span class="line">          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages <span class="token comment"># 部署到 gh-pages 分支，因为 main 分支存放的一般是源码，而 gh-pages 分支则用来存放生成的静态文件</span></span>
<span class="line">          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> docs/.vuepress/dist <span class="token comment"># vuepress 生成的静态文件存放的地方</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const u=n(l,[["render",t],["__file","vuepress2.html.vue"]]),o=JSON.parse('{"path":"/TechDoc/vuepress2.html","title":"Vue Press 2的坑和记录","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1654452048000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":6,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"TechDoc/vuepress2.md"}');export{u as comp,o as data};
