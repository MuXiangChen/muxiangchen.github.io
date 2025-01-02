<template><div><h2 id="mvvm模式" tabindex="-1"><a class="header-anchor" href="#mvvm模式"><span>MVVM模式</span></a></h2>
<p><img src="http://img.smyhvae.com/20180420_2150.png" alt=""></p>
<ul>
<li>
<p>Model：负责数据存储</p>
</li>
<li>
<p>View：负责页面展示</p>
</li>
<li>
<p>View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示</p>
</li>
</ul>
<h2 id="关于框架" tabindex="-1"><a class="header-anchor" href="#关于框架"><span>关于框架</span></a></h2>
<h3 id="为什么要学习流行框架" tabindex="-1"><a class="header-anchor" href="#为什么要学习流行框架"><span>为什么要学习流行框架</span></a></h3>
<p><strong>1、企业为了提高开发效率</strong>：在企业中，时间就是效率，效率就是金钱；企业中，使用框架，能够提高开发的效率。</p>
<p><strong>提高开发效率的发展历程</strong>：</p>
<p>原生JS -&gt; Jquery之类的类库 -&gt; 前端模板引擎 -&gt; Angular.js / Vue.js（能够帮助我们减少不必要的DOM操作；提高渲染效率；双向数据绑定的概念）</p>
<p>2、在Vue中，一个核心的概念就是：数据驱动，避免手动操作DOM元素。这样的话，可以让前端程序员可以更多的时间去关注数据的业务逻辑，而不是关心 DOM 是如何渲染的了。</p>
<h3 id="框架和库的区别" tabindex="-1"><a class="header-anchor" href="#框架和库的区别"><span>框架和库的区别</span></a></h3>
<p><strong>框架</strong>：</p>
<p>框架是一套完整的解决方案。</p>
<p>对项目的<strong>侵入性</strong>较大，项目如果需要更换框架，则需要重新架构整个项目。但是优点也很明显：功能完善、提供了一整套的解决方案。</p>
<p><strong>库（插件）</strong>：</p>
<p>只是提供某一个小功能。</p>
<p>对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求。</p>
<p>举例：</p>
<ul>
<li>
<p>从Jquery 切换到 Zepto</p>
</li>
<li>
<p>从 EJS 切换到 art-template</p>
</li>
</ul>
<h2 id="前端的各种框架" tabindex="-1"><a class="header-anchor" href="#前端的各种框架"><span>前端的各种框架</span></a></h2>
<h3 id="vue-和-react-的相同点" tabindex="-1"><a class="header-anchor" href="#vue-和-react-的相同点"><span>Vue 和 React 的相同点</span></a></h3>
<ul>
<li>
<p>利用虚拟DOM实现快速渲染</p>
</li>
<li>
<p>轻量级</p>
</li>
<li>
<p>响应式组件</p>
</li>
<li>
<p>支持服务器端渲染</p>
</li>
<li>
<p>易于集成路由工具、打包工具以及状态管理工具</p>
</li>
</ul>
<p>PS：Vue 在国内很受欢迎；React 在国内和国外都很受欢迎，适合做大型网站。</p>
<h3 id="什么是虚拟-dom" tabindex="-1"><a class="header-anchor" href="#什么是虚拟-dom"><span>什么是虚拟 DOM</span></a></h3>
<p>传统的web开发，是利用 jQuery操作DOM，这是非常耗资源的。</p>
<p>我们可以在 JS 的内存里构建类似于DOM的对象，去拼装数据，拼装完整后，把数据整体解析，一次性插入到html里去。这就形成了虚拟 DOM。</p>
<p>Vue1.0没有虚拟DOM，Vue2.0改成了基于虚拟DOM。</p>
<h3 id="前端框架回顾" tabindex="-1"><a class="header-anchor" href="#前端框架回顾"><span>前端框架回顾</span></a></h3>
<p><img src="http://img.smyhvae.com/20180302_1645.png" alt=""></p>
<p><img src="http://img.smyhvae.com/20180302_1651.png" alt=""></p>
<p><img src="http://img.smyhvae.com/20180302_1652.png" alt=""></p>
<p>Vue框架中，没有控制器。</p>
<h2 id="vue-框架" tabindex="-1"><a class="header-anchor" href="#vue-框架"><span>Vue 框架</span></a></h2>
<h3 id="发展历史" tabindex="-1"><a class="header-anchor" href="#发展历史"><span>发展历史</span></a></h3>
<ul>
<li>
<p>2013年底作为尤雨溪个人实验项目开始开发</p>
</li>
<li>
<p>2014年2月公开发布。</p>
</li>
<li>
<p>2014年11月发布0.11版本</p>
</li>
<li>
<p>2016年10月发布2.0版本。</p>
</li>
</ul>
<h3 id="相关网址" tabindex="-1"><a class="header-anchor" href="#相关网址"><span>相关网址</span></a></h3>
<ul>
<li>
<p><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">中文官网</a></p>
</li>
<li>
<p><a href="https://forum.vuejs.org/" target="_blank" rel="noopener noreferrer">vuejs官方论坛</a></p>
</li>
<li>
<p>GitHub地址：<a href="https://github.com/vuejs/vue" target="_blank" rel="noopener noreferrer">https://github.com/vuejs/vue</a></p>
</li>
<li>
<p>Vue1.0 在线文档：<a href="http://v1-cn.vuejs.org/guide/" target="_blank" rel="noopener noreferrer">http://v1-cn.vuejs.org/guide/</a></p>
</li>
<li>
<p>Vue2.x 在线文档：<a href="https://cn.vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/v2/guide/</a></p>
</li>
<li>
<p>Vue1下载地址：<a href="http://v1-cn.vuejs.org/js/vue.js" target="_blank" rel="noopener noreferrer">http://v1-cn.vuejs.org/js/vue.js</a></p>
</li>
<li>
<p>Vue2下载地址：<a href="https://cdn.jsdelivr.net/npm/vue/" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/vue/</a></p>
</li>
</ul>
<p><img src="http://img.smyhvae.com/20180302_1658.png" alt=""></p>
<p>上方截图的时间：2018-03-02。</p>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3>
<p>Vue 本身并不是一个框架，Vue结合周边生态构成一个灵活的、渐进式的框架。</p>
<p>Vue 以及大型 Vue 项目所需的周边技术，构成了生态。</p>
<p>渐进式框架图：</p>
<p><img src="http://img.smyhvae.com/20180302_1701.png" alt=""></p>
<h3 id="vue框架的特点" tabindex="-1"><a class="header-anchor" href="#vue框架的特点"><span>Vue框架的特点</span></a></h3>
<ul>
<li>
<p>模板渲染：基于 html 的模板语法，学习成本低。</p>
</li>
<li>
<p>响应式的更新机制：数据改变之后，视图会自动刷新。【重要】</p>
</li>
<li>
<p>渐进式框架</p>
</li>
<li>
<p>组件化/模块化</p>
</li>
<li>
<p>轻量：开启 gzip压缩后，可以达到 20kb 大小。（React 达到 35kb，AngularJS 达到60kb）。</p>
</li>
</ul>
<h2 id="vue-的环境搭建" tabindex="-1"><a class="header-anchor" href="#vue-的环境搭建"><span>Vue 的环境搭建</span></a></h2>
<blockquote>
<p>我们首先要安装好 NVM、Node.js环境，然后再来做下面的操作。</p>
</blockquote>
<h3 id="常见的插件" tabindex="-1"><a class="header-anchor" href="#常见的插件"><span>常见的插件</span></a></h3>
<ul>
<li>
<p>Webpack：代码模块化构建打包工具。</p>
</li>
<li>
<p>Gulp：基于流的自动化构建工具。</p>
</li>
<li>
<p>Babel：使用最新的 规范来编写 js。</p>
</li>
<li>
<p>Vue：构建数据驱动的Web界面的渐进式框架</p>
</li>
<li>
<p>Express：基于 Node.js 平台，快速、开放、极简的 Web 开发框架。</p>
</li>
</ul>
<p>以上这些包，都可以通过 NPM 这个包管理工具来安装。</p>
<h3 id="引用-vue-js-文件" tabindex="-1"><a class="header-anchor" href="#引用-vue-js-文件"><span>引用 Vue.js 文件</span></a></h3>
<p>1、<strong>方式一</strong>：（CDN的方式进行引用）</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、方式二：（下载 vue.js 文件）</p>
<p>去网站 <a href="https://cdn.jsdelivr.net/npm/vue/" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/vue/</a> 下载 vue.js 文件，直接放到工程文件里，然后引用。</p>
<p>3、方式三：（NPM的方式安装vue）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 最新稳定版</span></span>
<span class="line">$ <span class="token function">npm</span> <span class="token function">install</span> vue</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果网络不稳定，可以采用下面的方式安装：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">$ cnpm i vue --save</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后在代码中通过下面这种方式进行引用：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="利用-vue-cli-新建一个空的项目" tabindex="-1"><a class="header-anchor" href="#利用-vue-cli-新建一个空的项目"><span>利用 vue-cli 新建一个空的项目</span></a></h2>
<p>Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。</p>
<h3 id="官方代码参考" tabindex="-1"><a class="header-anchor" href="#官方代码参考"><span>官方代码参考</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">  npm install -g @vue/cli</span>
<span class="line"></span>
<span class="line">  vue create my-app</span>
<span class="line"></span>
<span class="line">  cd my-app</span>
<span class="line"></span>
<span class="line">  npm run serve</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们根据上方的参考代码，来看看“利用 vue-cli 新建一个空的项目”的步骤。</p>
<h3 id="安装-vue-cli-命令行工具" tabindex="-1"><a class="header-anchor" href="#安装-vue-cli-命令行工具"><span>安装 vue-cli（命令行工具）</span></a></h3>
<p>安装命令如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 全局安装 vue-cli</span></span>
<span class="line">$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化一个-simple-项目" tabindex="-1"><a class="header-anchor" href="#初始化一个-simple-项目"><span>初始化一个 simple 项目</span></a></h3>
<p>（1）首先执行：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">  vue create my-app</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输入上方命令后，会弹出一个选项：</p>
<p><img src="http://img.smyhvae.com/20190624_163626.png" alt=""></p>
<p>如果是初学者，直接选<code v-pre>default</code>就行。之后会自动生成一个空的初始化项目，包含了项目目录、以及项目依赖的脚本。</p>
<p>这个空项目的工程文件如下：（请务必仔细研究这个项目的写法和目录结构）</p>
<ul>
<li><a href="https://github.com/qianguyihao/web-resource/blob/main/project/2019-06-21-vue-my-app.zip" target="_blank" rel="noopener noreferrer">2019-06-21-vue-my-app.zip</a></li>
</ul>
<p>我们可以看到这个项目的结构：</p>
<p><img src="http://img.smyhvae.com/20190624_160726.png" alt=""></p>
<ul>
<li>
<p>src：项目源码</p>
</li>
<li>
<p>.babelrc：ES6编译插件的配置</p>
</li>
<li>
<p>index.html：单页面的入口</p>
</li>
</ul>
<p>上方截图中，<code v-pre>npm install </code>指的是下载各种依赖包，<code v-pre>npm run dev</code>指的是打开发包，<code v-pre>npm run build</code>指的是打生产包。</p>
<p>（2）本地运行项目：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">  cd my-app</span>
<span class="line"></span>
<span class="line">  npm run serve</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器输入<code v-pre>http://localhost:8080/</code>，就可以让这个空的项目在本地跑起来：</p>
<p><img src="http://img.smyhvae.com/20190624_160229.png" alt=""></p>
<p>备注：我们在 GitHub上下载的任何Vue有关的项目，第一步都是要首先执行 npm install，安装依赖的 mode_modules，然后再运行。我们发给同事的工程文件，建议不要包含 <code v-pre>node_modules</code>。</p>
<h3 id="构建一个-非-simple-项目" tabindex="-1"><a class="header-anchor" href="#构建一个-非-simple-项目"><span>构建一个 非 simple 项目</span></a></h3>
<p>构建一个空的项目，首先执行：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">$ vue create vuedemo2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20190624_163726.png" alt=""></p>
<p>上图中，选择 <code v-pre>Manually select features</code>，然后根据提示依次输入：</p>
<p><img src="http://img.smyhvae.com/20190624_164305.png" alt=""></p>
<ul>
<li>
<p>project name：<strong>要求小写</strong>。</p>
</li>
<li>
<p>description：默认即可。</p>
</li>
<li>
<p>vue-router：需要。</p>
</li>
<li>
<p>ESlint：语法检查，初学者可以暂时不需要。</p>
</li>
<li>
<p>单元测试：暂时也不需要。</p>
</li>
<li>
<p>e2e test：不需要。</p>
</li>
</ul>
<p>选择 eslint 的配置：</p>
<p><img src="http://img.smyhvae.com/20190624_165001.png" alt=""></p>
<p>然后让这个空的项目就可以在浏览器上跑起来。</p>
<h2 id="vue-项目结构分析" tabindex="-1"><a class="header-anchor" href="#vue-项目结构分析"><span>vue 项目结构分析</span></a></h2>
<p><img src="http://img.smyhvae.com/20180501_2100.png" alt=""></p>
<ul>
<li>
<p>buid：打包配置的文件夹</p>
</li>
<li>
<p>config：webpack对应的配置</p>
</li>
<li>
<p>src：开发项目的源码</p>
<ul>
<li>App.vue：入口组件。<code v-pre>.vue</code>文件都是组件。</li>
<li>main.js：项目入口文件。</li>
</ul>
</li>
<li>
<p>static：存放静态资源</p>
</li>
<li>
<p><code v-pre>.babelrc</code>：解析ES6的配置文件</p>
</li>
<li>
<p><code v-pre>.editorcofnig</code>：编辑器的配置</p>
</li>
<li>
<p><code v-pre>.postcssrc.js</code>：html添加前缀的配置</p>
</li>
<li>
<p><code v-pre>index.html</code>：单页面的入口。通过 webpack打包后，会把 src 源码进行编译，插入到这个 html 里面来。</p>
</li>
<li>
<p><code v-pre>package.json</code>：项目的基础配置，包含版本号、脚本命令、项目依赖库、开发依赖库、引擎等。</p>
</li>
</ul>
<h3 id="图片的base64编码" tabindex="-1"><a class="header-anchor" href="#图片的base64编码"><span>图片的base64编码</span></a></h3>
<p>默认是10k以下，建议都通过 base64编码。在配置文件<code v-pre>webpack.base.conf.js</code>中进行修改：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">      {</span>
<span class="line">        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,</span>
<span class="line">        loader: 'url-loader',</span>
<span class="line">        options: {</span>
<span class="line">          limit: 10000,</span>
<span class="line">          name: utils.assetsPath('img/[name].[hash:7].[ext]')</span>
<span class="line">        }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="我的公众号" tabindex="-1"><a class="header-anchor" href="#我的公众号"><span>我的公众号</span></a></h2>
<p>想学习<font color=#0000ff><strong>更多技能</strong></font>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code v-pre>qianguyihao</code>）。</p>
<p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p>
<p><img src="http://img.smyhvae.com/20160401_01.jpg" alt=""></p>
</div></template>


