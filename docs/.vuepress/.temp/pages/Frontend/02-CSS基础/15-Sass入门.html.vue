<template><div><h2 id="sass简介" tabindex="-1"><a class="header-anchor" href="#sass简介"><span>Sass简介</span></a></h2>
<p>大家都知道，js 中可以自定义变量，css 仅仅是一个标记语言，不是编程语言，因此不可以自定义变量、不可以引用等等。</p>
<p>面对这些问题，我们现在来引入 Sass，简单的说，他是 css 的升级版，可以自定义变量，可以有 if 语句，还可以嵌套等等，很神奇吧！那下面我们就来介绍返个神奇的 Sass。</p>
<p>Sass比Less的功能更强大，也更复杂。</p>
<h3 id="sass-的定义" tabindex="-1"><a class="header-anchor" href="#sass-的定义"><span>Sass 的定义</span></a></h3>
<p>Sass：英文是 Syntactically Awesome Stylesheets Sass。最早由 Hampton Catlin 开发和设计。 一种帮助你简化 CSS 工作流程的方式，帮助你更容易维护和开发 CSS 内容。</p>
<p>官网是：<a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">https://sass-lang.com/</a></p>
<p>Sass 是这个世界上最成熟、稳定和强大的专业级 CSS 扩展语言。</p>
<p>Sass专注的是怎样创建优雅的样式表，而不是内容。</p>
<h3 id="sass、compass与css" tabindex="-1"><a class="header-anchor" href="#sass、compass与css"><span>Sass、Compass与CSS</span></a></h3>
<p><strong>关系：</strong></p>
<ul>
<li>Less/Sass是语法、Compass是框架、CSS是目标。</li>
</ul>
<p><strong>Sass&amp;Compass的好处</strong>：</p>
<ul>
<li>
<p>写出更优秀的CSS。</p>
</li>
<li>
<p>解决CSS编写过程中的痛点问题，比如精灵图合图、属性的浏览器前缀处理等。</p>
</li>
<li>
<p>有效组织样式、图片、字体等项目元素。</p>
</li>
</ul>
<p><strong>受众群体：</strong></p>
<ul>
<li>
<p>重构的同学，写很多CSS，不知如何自动化。</p>
</li>
<li>
<p>希望在项目周期内更好地组织项目内容。</p>
</li>
</ul>
<h2 id="sass的安装" tabindex="-1"><a class="header-anchor" href="#sass的安装"><span>Sass的安装</span></a></h2>
<p>sass引擎是用Ruby语言开发的（但是两者的语法没有关系），因此在安装 Sass 前，需要先安装Ruby（mac下自带Ruby无需再安装Ruby）。</p>
<p>下面来讲一下 Windows 下的安装Sass的步骤。</p>
<h3 id="第一步-安装ruby-windows环境" tabindex="-1"><a class="header-anchor" href="#第一步-安装ruby-windows环境"><span>第一步：安装Ruby（windows环境）</span></a></h3>
<p>下载地址：<a href="http://rubyinstaller.org/downloads/" target="_blank" rel="noopener noreferrer">http://rubyinstaller.org/downloads/</a></p>
<p>貌似网络很慢，不一定能下载成功~</p>
<p>安装时，记得勾选“环境变量”：</p>
<p><img src="http://img.smyhvae.com/20180407_2022.png" alt=""></p>
<p>安装完ruby之后，在命令行中输入<code v-pre>ruby -v</code>，查看ruby的的版本：</p>
<p><img src="http://img.smyhvae.com/20180407_2039.png" alt=""></p>
<h3 id="关于mac下的ruby" tabindex="-1"><a class="header-anchor" href="#关于mac下的ruby"><span>关于Mac下的Ruby</span></a></h3>
<p>刚刚说了，Mac下自带Ruby，但是版本肯定很老：</p>
<p><img src="http://img.smyhvae.com/20180407_2145.png" alt=""></p>
<p>有的时候，我们可能需要使用特定版本的ruby，或者在不同的ruby版本之间进行切换，所以，大家可以尝试安装<code v-pre>rvm</code>，它是ruby的版本管理工具。官网是：<a href="https://rvm.io" target="_blank" rel="noopener noreferrer">https://rvm.io</a></p>
<h3 id="第二步-安装-sass" tabindex="-1"><a class="header-anchor" href="#第二步-安装-sass"><span>第二步：安装 Sass</span></a></h3>
<p>安装完ruby之后，在开始菜单中，找到刚才我们安装的ruby，打开Start Command Prompt with Ruby。输入<code v-pre>gem install sass</code>安装Sass。</p>
<p>PS：Ruby 是使用 gem 来管理它的各种包（比如Sass）。我们安装好ruby之后，gem会自动安装上；类似于，我们安装完node之后，npm也自动安装好了。</p>
<p>但是，由于访问网络受限，我们可以先切换到淘宝的镜像，再安装Sass。步骤如下：</p>
<p>（1）移除默认的镜像，添加淘宝的镜像：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	gem sources --remove https://rubygems.org/</span>
<span class="line"></span>
<span class="line">	gem sources -a https://ruby.taobao.org/  //注意：如果你系统不支持https，请将淘宝源更换成：gem sources -a http://gems.ruby-china.org</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：我测试了一下，Win 7 不支持https，Mac支持https。</p>
<p>（2）查看当前使用的是哪个镜像：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	gem sources -l</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20180407_2050.png" alt=""></p>
<p>（3）安装sass：</p>
<p>紧接着，输入如下命令安装Sass：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	gem install sass        // 如果mac下输入这个命令时没有权限，则需要在前面加上 sudo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>系统会自动安装上最新版本的Sass。</p>
<p>查看sass版本的命令为:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	sass -v</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>升级sass版本的命令为：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	gem update sass</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>你也可以运行帮助命令行来查看你需要的命令：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	sass -h</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20180407_2100.png" alt=""></p>
<p>参考链接：<a href="https://www.w3cplus.com/sassguide/install.html" target="_blank" rel="noopener noreferrer">https://www.w3cplus.com/sassguide/install.html</a></p>
<h2 id="compass-简介和安装" tabindex="-1"><a class="header-anchor" href="#compass-简介和安装"><span>Compass 简介和安装</span></a></h2>
<p>安装完sass之后，我们在main.scss中写一些代码，然后输入如下命令，就可以将<code v-pre>scss文件</code>转化为<code v-pre>css文件</code>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	sass main.scss main.css</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然而，真正的项目开发中，我们不一定是直接使用 sass 命令，而是使用 Compass。</p>
<h3 id="compass-简介" tabindex="-1"><a class="header-anchor" href="#compass-简介"><span>Compass 简介</span></a></h3>
<p>官网是：<a href="http://compass-style.org/" target="_blank" rel="noopener noreferrer">http://compass-style.org/</a>。</p>
<p>Compass 是开源的CSS书写框架。</p>
<h3 id="compass-安装" tabindex="-1"><a class="header-anchor" href="#compass-安装"><span>Compass 安装</span></a></h3>
<p>输入如下命令安装 Compass：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	gem isntall compass</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输入如下命令查看版本：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	compass -v</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="http://img.smyhvae.com/20180407_2208.png" alt=""></p>
<p>compass可以直接用来搭建前端项目的样式部分，但并不是常用的方法。</p>
<h3 id="compass的简单使用" tabindex="-1"><a class="header-anchor" href="#compass的简单使用"><span>Compass的简单使用</span></a></h3>
<p>通过 Compass 创建工程目录：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">cd workspace</span>
<span class="line"></span>
<span class="line">compass create CompassDemo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件结构如下：</p>
<ul>
<li>
<p>/sass</p>
<ul>
<li>ie.scss</li>
<li>print.scss</li>
<li>screen.scss</li>
</ul>
</li>
<li>
<p>/stylesheets</p>
<ul>
<li>ie.css</li>
<li>print.css</li>
<li>screen.css</li>
</ul>
</li>
<li>
<p>config.rb</p>
</li>
</ul>
<p>为了能够让文件实时编译，我们可以通过 copass watch 监听sass文件的变化：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	cd CompassDemo</span>
<span class="line"></span>
<span class="line">	compass watch</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当.scss文件改动时，会自动生成对应的.css文件。</p>
<h2 id="sass的语法" tabindex="-1"><a class="header-anchor" href="#sass的语法"><span>Sass的语法</span></a></h2>
<h3 id="两种后缀名-两种语法" tabindex="-1"><a class="header-anchor" href="#两种后缀名-两种语法"><span>两种后缀名（两种语法）</span></a></h3>
<p>sass 有两种后缀名文件：</p>
<p>（1）<code v-pre>.sass</code>：对空格敏感。不使用大括号和分号，所以每个属性之间是通过换行来分隔。</p>
<p>比如：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">h1</span>
<span class="line">	color: #000</span>
<span class="line">	background: #fff</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种语法是类ruby的语法，和CSS的语法相比，相差较大。所以，在3.0版本中就引入了<code v-pre>.scss</code>的语法。</p>
<p>（2）<code v-pre>.scss</code>：是css语法的超集，可以使用大括号和分号。</p>
<p>比如：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">h1 {</span>
<span class="line">	color: #000;</span>
<span class="line">	background: #fff;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：一个项目中可以混合使用两种语法，但是一个文件中不能同时使用两种语法。</p>
<p><strong>两种格式之间的转换：</strong></p>
<p>我们在工程目录下新建<code v-pre>main.scss</code>，输入如下代码：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">*{</span>
<span class="line">    margin: 0;</span>
<span class="line">    padding: 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后输入如下命令，就可以将上面的<code v-pre>main.scss</code>转化为<code v-pre>main.sass</code>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">	sass-convert main.scss main.sass</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>打开生成的<code v-pre>main.sass</code>，内容如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">*</span>
<span class="line">  margin: 0</span>
<span class="line">  padding: 0</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量语法" tabindex="-1"><a class="header-anchor" href="#变量语法"><span>变量语法</span></a></h3>
<p>Sass 是通过<code v-pre>$</code>符号来声明变量。</p>
<p>（1）我们新建一个文件<code v-pre>_variables.scss</code>，这个文件专门用来存放变量，然后在其他的文件中引入<code v-pre>_variables.scss</code>即可。</p>
<p>因为这个文件只需要存储变量，并不需要它编译出对应的 css 文件，所以我们给文件名的前面加了<strong>下划线</strong>，意思是声明为<strong>局部文件</strong>。</p>
<p>我们在这个文件中，声明两个字体变量：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">$<span class="token property">font1</span><span class="token punctuation">:</span> Braggadocio<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">$<span class="token property">font2</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）新建文件main.scss，在里面引入步骤（1）中的变量文件：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">@import "variables";    // 引入变量文件</span>
<span class="line"></span>
<span class="line">.div1{</span>
<span class="line">    font-family: $font1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.div2{</span>
<span class="line">    font-family: $font2;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于 Sass 的既定规则：</p>
<ul>
<li>
<p>没有文件后缀名时，Sass 会自动添加 .scss 或者 .sass 的后缀（具体要看已经存在哪个后缀的文件）。</p>
</li>
<li>
<p>同一目录下，局部文件和非局部文件不能重名。</p>
</li>
</ul>
<p>对应生成的main.css文件如下：</p>
<p>main.css</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* line 9, ../sass/main.scss */</span></span>
<span class="line"><span class="token selector">.div1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> Braggadocio<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* line 13, ../sass/main.scss */</span></span>
<span class="line"><span class="token selector">.div2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注释语法" tabindex="-1"><a class="header-anchor" href="#注释语法"><span>注释语法</span></a></h3>
<p>单行注释：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">//我是单行注释</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>块级注释：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">/*</span>
<span class="line">	我是块级注释</span>
<span class="line">	哈哈</span>
<span class="line">*/</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二者的区别是：单行注释不会出现在自动生成的css文件中。</p>
</div></template>


