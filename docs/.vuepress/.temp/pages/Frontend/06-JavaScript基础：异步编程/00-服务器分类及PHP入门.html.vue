<template><div><h2 id="c-s架构和b-s架构" tabindex="-1"><a class="header-anchor" href="#c-s架构和b-s架构"><span>C/S架构和B/S架构</span></a></h2>
<h3 id="c-s架构" tabindex="-1"><a class="header-anchor" href="#c-s架构"><span>C/S架构</span></a></h3>
<p>是Client/Server这两个单词的首字母，指的是客户端，服务器。</p>
<p>优点:</p>
<ul>
<li>
<p>性能较高：可以将一部分的计算工作放在客户端上,这样服务器只需要处理数据即可。</p>
</li>
<li>
<p>界面酷炫:客户端可以使用更多系统提供的效果,做出更为炫目的效果。</p>
</li>
</ul>
<p>缺点:</p>
<ul>
<li>
<p>更新软件：如果有新的功能，就要推出新的版本。</p>
</li>
<li>
<p>不同设备访问：如果使用其他的电脑，没有安装客户端的话就无法登陆软件。</p>
</li>
</ul>
<h3 id="b-s架构" tabindex="-1"><a class="header-anchor" href="#b-s架构"><span>B/S架构</span></a></h3>
<p>是Browser/Server的这两个单词的首字母。指的是浏览器、服务器，是WEB兴起之后的一种架构。</p>
<p>现在所有的网站都是B/S架构，较为常见的例子有百度、知乎、网易云音乐Web等等，只需要通过浏览器即可使用.</p>
<p>优点：</p>
<ul>
<li>
<p>更新简洁：如果需要更新内容了,对开发人员而言需要更改服务器的内容，对用户而言只需要刷新浏览器即可。</p>
</li>
<li>
<p>多设备同步：所有数据都在网上,只要能够使用浏览器即可登录使用。</p>
</li>
</ul>
<p>缺点:</p>
<ul>
<li>
<p>性能较低：相比于客户端应用性能较低,但是随着硬件性能的提升,这个差距在缩小。</p>
</li>
<li>
<p>浏览器兼容：处理低版本的浏览器显示问题一直是前端开发人员头痛的问题之一。移动设备兼容性较好，ie6已经越来越少人用了。</p>
</li>
</ul>
<h2 id="服务器分类" tabindex="-1"><a class="header-anchor" href="#服务器分类"><span>服务器分类</span></a></h2>
<p>项目开发时，有三套环境：</p>
<ul>
<li>
<p>Development 开发环境</p>
</li>
<li>
<p>Test 测试环境</p>
</li>
<li>
<p>Production 生产环境</p>
</li>
</ul>
<p>程序员平时干活儿用开发环境；开发完成后，部署到测试环境；测试完成后，产品上线，部署到生产环境。</p>
<p>三套环境意味着三个服务器。</p>
<h3 id="服务器类型" tabindex="-1"><a class="header-anchor" href="#服务器类型"><span>服务器类型</span></a></h3>
<p>按类型分：</p>
<ul>
<li>
<p>文件服务器</p>
</li>
<li>
<p>数据库服务器</p>
</li>
<li>
<p>邮件服务器</p>
</li>
<li>
<p>Web 服务器等</p>
</li>
</ul>
<p>按软件分：</p>
<ul>
<li>
<p>Apache 服务器</p>
</li>
<li>
<p>Nginx 服务器</p>
</li>
<li>
<p>IIS 服务器</p>
</li>
<li>
<p>Tomcat 服务器</p>
</li>
<li>
<p>Node 服务器等</p>
</li>
</ul>
<p>按操作系统分：</p>
<ul>
<li>
<p>Linux服务器</p>
</li>
<li>
<p>Windows服务器等</p>
</li>
</ul>
<h3 id="服务器软件" tabindex="-1"><a class="header-anchor" href="#服务器软件"><span>服务器软件</span></a></h3>
<p>提供了某种服务的计算器，我们称之为服务器。那么这些赋予计算器各种服务功能的软件主要有哪一些呢？</p>
<p>常见的服务器软件有：</p>
<ul>
<li>
<p>文件服务器：Server-U、FileZilla、VsFTP等；</p>
</li>
<li>
<p>数据库服务器：Oracle、MySQL、PostgreSQL、MSSQL等；</p>
</li>
<li>
<p>邮件服务器：Postfix、Sendmail等；</p>
</li>
<li>
<p>HTTP 服务器：Apache（免费、开源）、Nginx、IIS（微软的.net服务器）、Tomcat（java编程的服务器）、NodeJS 等。</p>
</li>
</ul>
<h2 id="使用-wampserver-搭建-http服务" tabindex="-1"><a class="header-anchor" href="#使用-wampserver-搭建-http服务"><span>使用 WampServer 搭建 HTTP服务</span></a></h2>
<h3 id="集成环境的分类" tabindex="-1"><a class="header-anchor" href="#集成环境的分类"><span>集成环境的分类</span></a></h3>
<ul>
<li>
<p>AMP：Apache + Mysql + PHP。</p>
</li>
<li>
<p>WAMP：windows + Apache + Mysql + PHP。</p>
</li>
<li>
<p>XAMPP：WAMP 是针对windows的，而 XAMPP 可以安装在Linux、Windows、MacOS、Solaris这些操作系统上面。</p>
</li>
</ul>
<p>在windows平台下，如果想要一步到位安装好这些软件，可是使用软件 <strong>WampServer</strong>。</p>
<h3 id="wampserver-的安装" tabindex="-1"><a class="header-anchor" href="#wampserver-的安装"><span>WampServer 的安装</span></a></h3>
<p>去 WampServer 的<a href="http://www.wampserver.com/en/" target="_blank" rel="noopener noreferrer">官网</a>下载软件。</p>
<p><img src="http://img.smyhvae.com/20180227_1936.png" alt=""></p>
<p>安装完成后进行安装。</p>
<h3 id="测试访问" tabindex="-1"><a class="header-anchor" href="#测试访问"><span>测试访问</span></a></h3>
<p>打开浏览器输入 <code v-pre>127.0.0.1</code> 查看显示的内容，如果是第一次安装，默认显示的应该是如下图片：</p>
<p><img src="http://img.smyhvae.com/20180227_2203.png" alt=""></p>
<p>127.0.0.1 是回送地址，指本地机，一般用来测试使用，如果想要让其他电脑也能够访问，需要进行如下配置：</p>
<p>（1）关闭防火墙：</p>
<p><img src="http://img.smyhvae.com/20180227_2207.gif" alt=""></p>
<p>（2）修改httpd.conf文件：</p>
<p>因为 Apache 的配置默认不允许外部访问，我们需要修改配置。</p>
<p>打开文件<code v-pre>c:\wamp\bin\apache\Apache2.2.21\conf\httpd.conf</code>，通过搜索功能找到<code v-pre>onlineoffline tag - don't remove</code>这句话，在第234行的 <code v-pre>Allow from 127.0.0.1</code>的下面，加一行：<code v-pre>Allow from all</code>。</p>
<p>然后将第192行的<code v-pre>Deny from all</code>改为<code v-pre>Allow from all</code>。</p>
<p>保存，然后重启 wamp 即可。</p>
<h3 id="配置网站根目录" tabindex="-1"><a class="header-anchor" href="#配置网站根目录"><span>配置网站根目录</span></a></h3>
<p>网站的根目录默认是在<code v-pre>D:\wamp\www</code>。如果想修改这个根目录，可以这样改：</p>
<p>打开 Apache的配置文件 <code v-pre>D:\wamp\bin\apache\Apache2.2.21\conf\http.conf</code>，如果是初次安装，找到178行的<code v-pre>DocumentRoot &quot;d:/wamp/www/&quot;</code>，以及205行的<code v-pre>&lt;Directory &quot;d:/wamp/www/&quot;&gt;</code>，改这两个位置的路径即可。我们可以通过搜索关键字<code v-pre>documentRoot</code>来定位。</p>
<h2 id="静态网站和动态网站" tabindex="-1"><a class="header-anchor" href="#静态网站和动态网站"><span>静态网站和动态网站</span></a></h2>
<p>静态网站：</p>
<ul>
<li>
<p>访问的是实实在在保存在服务器上的文件。静态资源包括：html页面、css文件、js文件、图片等。</p>
</li>
<li>
<p>当内容、图片、界面需要更新时，直接修改.html文件。</p>
</li>
</ul>
<p>动态网站：</p>
<ul>
<li>
<p>当用户访问网站时，根据<code v-pre>某些逻辑</code>,动态生成对应的<code v-pre>HTML、CSS、JS</code>代码给用户（这也就是web服务器开发的本质）。</p>
</li>
<li>
<p>通过某种手段，当有新的消息时，<strong>自动</strong>的完成网站的更新。</p>
</li>
</ul>
<p>总结：</p>
<p>由于静态网站在维护的局限性，所以产生了动态网站。</p>
<p>实现动态网站的技术：php/jsp/.net/python等。</p>
<p>动态网站的原理：浏览器请求动态网站的页面（比如*.php），php拼接数据并动态生成html页面，然后将新生成的页面返回给浏览器</p>
<p>php 之所以被称为最好的语言，是因为：基本上，我们能够想到的功能，它都帮助我们封装成了方法。十分方便。</p>
<h2 id="php的常见语法" tabindex="-1"><a class="header-anchor" href="#php的常见语法"><span>PHP的常见语法</span></a></h2>
<p><strong>PHP代码执行方式</strong>：</p>
<ul>
<li>
<p>在服务器端执行，然后返回给用户结果。如果直接使用浏览器打开，就会解析为文本。</p>
</li>
<li>
<p>意思是说，需要浏览器通过 http请求，才能够执行php页面。</p>
</li>
</ul>
<p>这里只列举常用的PHP语法，更为详细的语法教程可以查阅 <a href="http://www.w3school.com.cn/php/index.asp" target="_blank" rel="noopener noreferrer">api 文档</a>。</p>
<h3 id="第一段-php-代码" tabindex="-1"><a class="header-anchor" href="#第一段-php-代码"><span>第一段 php 代码</span></a></h3>
<p>将 WampServer 跑起来，在D:\wamp\www下新建一个<code v-pre>1.php</code>文件，代码如下：</p>
<p>1.php：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;?php</span>
<span class="line">	echo "hello smyhvae";</span>
<span class="line">?></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器中输入<code v-pre>http://127.0.0.1/2018-02-28/1.php</code>，效果如下：</p>
<p><img src="http://img.smyhvae.com/20180228_0910.png" alt=""></p>
<p><strong>代码的编写位置</strong>：</p>
<p>上方代码中，注意php语言的格式，第一行和第三行的格式中，没有空格。代码的编写位置在<code v-pre>&lt;?php 代码写在这里?&gt;</code>。</p>
<h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h3>
<p>php 注释的写法跟 js 一致。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;?php</span>
<span class="line">	//这是单行注释</span>
<span class="line">	/*</span>
<span class="line">		这是多行注释</span>
<span class="line">	*/</span>
<span class="line">?></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h3>
<ul>
<li>
<p>变量以<code v-pre>$</code>符号开头，其后是变量的名称。大小写敏感。</p>
</li>
<li>
<p>变量名称必须以字母或下划线开头。</p>
</li>
</ul>
<p>举例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	$a1;</span>
<span class="line">	$_abc;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h3>
<p>PHP支持的数据类型包括：</p>
<ul>
<li>
<p>字符串</p>
</li>
<li>
<p>整数</p>
</li>
<li>
<p>浮点数</p>
</li>
<li>
<p>布尔</p>
</li>
<li>
<p>数组</p>
</li>
<li>
<p>对象</p>
</li>
<li>
<p>NULLL</p>
</li>
</ul>
<p>定义字符串时需要注意：</p>
<ul>
<li>
<p>单引号`` ：内部的内容只是作为字符串。</p>
</li>
<li>
<p>双引号&quot;&quot; ：如果内部是PHP的变量,那么会将该变量的值解析。如果内部是html代码，也会解析成html。</p>
</li>
</ul>
<p>说白了，单引号里的内容，一定是字符串。双引号里的内容，可能会进行解析。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	echo "&lt;input type=`button` value=`smyhvae`>";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面这个语句，就被会解析成按钮。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	// 字符串</span>
<span class="line">	$str = '123';</span>
<span class="line"></span>
<span class="line">	// 字符串拼接</span>
<span class="line">	$str2 = '123'.'哈哈哈';</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	// 整数</span>
<span class="line">	$numA = 1; //正数</span>
<span class="line">	$numB = -2;//负数</span>
<span class="line"></span>
<span class="line">	// 浮点数</span>
<span class="line">	$x = 1.1;</span>
<span class="line"></span>
<span class="line">	// 布尔</span>
<span class="line">	$a = true;</span>
<span class="line">	$b = false;</span>
<span class="line"></span>
<span class="line">	// 普通数组：数组中可以放 数字、字符串、布尔值等，不限制类型。</span>
<span class="line">	$arr1 = array('123', 123);</span>
<span class="line">	echo $arr1[0];</span>
<span class="line"></span>
<span class="line">	// 关系型数组：类似于json格式</span>
<span class="line">	$arr2 = $array(`name`=>`smyhvae`, `age`=>`26`);</span>
<span class="line">	echo $arr2[`name`];  //获取时，通过  key 来获取</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中注意，php 中字符串拼接的方式是 <code v-pre>.</code>。要注意哦。</p>
<h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h3>
<p>PHP 中的运算符跟 JavaScript 中的基本一致，用法也基本一致。</p>
<ul>
<li>
<p>算数运算符：<code v-pre>+</code>、<code v-pre>-</code>、<code v-pre>/</code>、<code v-pre>*</code>、<code v-pre>%</code></p>
</li>
<li>
<p>赋值运算符：<code v-pre>x = y</code>、<code v-pre>x += y</code>,<code v-pre>x -= y</code>等。</p>
</li>
</ul>
<p>举例：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line">	<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">echo</span> <span class="token punctuation">(</span><span class="token variable">$x</span> <span class="token operator">+</span> <span class="token variable">$y</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 16</span></span>
<span class="line">	<span class="token keyword">echo</span> <span class="token punctuation">(</span><span class="token variable">$x</span> <span class="token operator">-</span> <span class="token variable">$y</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 4</span></span>
<span class="line">	<span class="token keyword">echo</span> <span class="token punctuation">(</span><span class="token variable">$x</span> <span class="token operator">*</span> <span class="token variable">$y</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 60</span></span>
<span class="line">	<span class="token keyword">echo</span> <span class="token punctuation">(</span><span class="token variable">$x</span> <span class="token operator">/</span> <span class="token variable">$y</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1.6666666666667</span></span>
<span class="line">	<span class="token keyword">echo</span> <span class="token punctuation">(</span><span class="token variable">$x</span> <span class="token operator">%</span> <span class="token variable">$y</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 4</span></span>
<span class="line"><span class="token delimiter important">?></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的定义" tabindex="-1"><a class="header-anchor" href="#函数的定义"><span>函数的定义</span></a></h3>
<p>语法格式：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"></span>
<span class="line">	<span class="token keyword">function</span> <span class="token function-definition function">functionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	  <span class="token comment">//这里写代码</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）有参数、无返回值的函数：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token keyword">function</span> <span class="token function-definition function">sayName</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	    <span class="token keyword">echo</span> <span class="token variable">$name</span><span class="token operator">.</span><span class="token string single-quoted-string">'你好哦'</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">// 调用</span></span>
<span class="line">	<span class="token function">sayName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'smyhvae'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）有参数、参数有默认值的函数：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token keyword">function</span> <span class="token function-definition function">sayFood</span><span class="token punctuation">(</span><span class="token variable">$food</span><span class="token operator">=</span><span class="token string single-quoted-string">'西兰花'</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	    <span class="token keyword">echo</span> <span class="token variable">$food</span><span class="token operator">.</span><span class="token string single-quoted-string">'好吃'</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">// 调用</span></span>
<span class="line">	<span class="token function">sayFood</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'西葫芦'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 如果传入参数,就使用传入的参数</span></span>
<span class="line">	<span class="token function">sayFood</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 如果不传入参数,直接使用默认值</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）有参数、有返回值的函数：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token keyword">function</span> <span class="token function-definition function">sum</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span><span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token variable">$a</span><span class="token operator">+</span><span class="token variable">$b</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 返回值为1+2 = 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类和对象" tabindex="-1"><a class="header-anchor" href="#类和对象"><span>类和对象</span></a></h3>
<p>PHP中允许使用对象这种<strong>自定义</strong>的数据类型。必须先声明，实例化之后才能够使用。</p>
<p>定义最基础的类：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Fox</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	        <span class="token keyword">public</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'itcast'</span><span class="token punctuation">;</span></span>
<span class="line">	        <span class="token keyword">public</span> <span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token variable">$fox</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token variable">$fox</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">// 对象属性取值</span></span>
<span class="line">	<span class="token variable">$name</span> <span class="token operator">=</span> <span class="token variable">$fox</span><span class="token operator">-></span><span class="token property">name</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">// 对象属性赋值</span></span>
<span class="line">	<span class="token variable">$fox</span><span class="token operator">-></span><span class="token property">name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'小狐狸'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带构造函数的类：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token keyword">class</span> <span class="token class-name-definition class-name">fox</span><span class="token punctuation">{</span></span>
<span class="line">	    <span class="token comment">// 私有属性,外部无法访问</span></span>
<span class="line">	    <span class="token keyword">var</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'小狐狸'</span><span class="token punctuation">;</span></span>
<span class="line">	    <span class="token comment">// 定义方法 用来获取属性</span></span>
<span class="line">	    <span class="token keyword">function</span> <span class="token function-definition function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">name</span><span class="token punctuation">;</span></span>
<span class="line">	    <span class="token punctuation">}</span></span>
<span class="line">	    <span class="token comment">// 构造函数,可以传入参数</span></span>
<span class="line">	    <span class="token keyword">function</span> <span class="token function-definition function">fox</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	    <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$name</span></span>
<span class="line">	    <span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 定义了构造函数 需要使用构造函数初始化对象</span></span>
<span class="line">    <span class="token variable">$fox</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fox</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'小狐狸'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 调用对象方法,获取对象名</span></span>
<span class="line">    <span class="token variable">$foxName</span> <span class="token operator">=</span> <span class="token variable">$fox</span><span class="token operator">-></span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内容输出" tabindex="-1"><a class="header-anchor" href="#内容输出"><span>内容输出</span></a></h3>
<ul>
<li>
<p><code v-pre>echo</code>：输出字符串。</p>
</li>
<li>
<p><code v-pre>print_r()</code>：输出复杂数据类型。比如数组、对象。</p>
</li>
<li>
<p><code v-pre>var_dump()</code>：输出详细信息。</p>
</li>
</ul>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token variable">$arr</span> <span class="token operator">=</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string single-quoted-string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">echo</span><span class="token string single-quoted-string">'123'</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//结果：123</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//结果：Array ( [0] => 1 [1] => 2 [2] => 123 )</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">/* 结果：</span>
<span class="line">	array</span>
<span class="line">	  0 => int 1</span>
<span class="line">	  1 => int 2</span>
<span class="line">	  2 => string '123' (length=3)</span>
<span class="line">	*/</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句"><span>循环语句</span></a></h3>
<p>这里只列举了<code v-pre>foreach</code>、<code v-pre>for</code>循环。</p>
<p>for 循环：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$x</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$x</span><span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span> <span class="token variable">$x</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	  <span class="token keyword">echo</span> <span class="token string double-quoted-string">"数字是：<span class="token interpolation"><span class="token variable">$x</span></span> &lt;br>"</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>foreach 循环：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token variable">$colors</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"red"</span><span class="token punctuation">,</span><span class="token string double-quoted-string">"green"</span><span class="token punctuation">,</span><span class="token string double-quoted-string">"blue"</span><span class="token punctuation">,</span><span class="token string double-quoted-string">"yellow"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$colors</span> <span class="token keyword">as</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	  <span class="token keyword">echo</span> <span class="token string double-quoted-string">"<span class="token interpolation"><span class="token variable">$value</span></span> &lt;br>"</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，参数一：循环的对象。参数二：将对象的值挨个取出，直到最后。</p>
<p>如果循环的是对象，输出的是对象的属性的值。</p>
<p>输出结果：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">	red</span>
<span class="line">	green</span>
<span class="line">	blue</span>
<span class="line">	yellow</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php中的header-函数" tabindex="-1"><a class="header-anchor" href="#php中的header-函数"><span>php中的header()函数</span></a></h2>
<p>浏览器访问http服务器，接收到响应时，会根据响应<strong>报文头</strong>的内容进行一些具体的操作。在php中，我们可以根据 <strong>header</strong> 来设置这些内容。</p>
<p><strong>header()函数的作用</strong>：用来向客户端(浏览器)发送报头。直接写在php代码的第一行就行。</p>
<p>下面列举几个常见的 header函数。</p>
<p>（1）设置编码格式：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'content-type:text/html; charset= utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>例如：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line">	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'content-type:text/html; charset= utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">echo</span> <span class="token string double-quoted-string">"我的第一段 PHP 脚本"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token delimiter important">?></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）设置页面跳转：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'location:http://www.baidu.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>设置页面刷新的间隔：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'refresh:3; url=http://www.xiaomi.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="php中的-get-请求和-post-请求" tabindex="-1"><a class="header-anchor" href="#php中的-get-请求和-post-请求"><span>php中的 get 请求和 post 请求</span></a></h2>
<h3 id="get-请求" tabindex="-1"><a class="header-anchor" href="#get-请求"><span>get 请求</span></a></h3>
<p>可以通过<code v-pre>$_GET</code>对象来获取。</p>
<p><strong>举例</strong>：下面是一个简单的表单代码，通过 get 请求将数据提交到01.php。</p>
<p>（1）index.html:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- 通过 get 请求，将表单提交到 php 页面中 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>01.php<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>姓名：</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>邮箱：</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userEmail<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）01.php：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line">	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'content-type:text/html; charset= utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token string double-quoted-string">"&lt;h1>php 的get 请求演示&lt;/h1>"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token string single-quoted-string">'用户名：'</span><span class="token operator">.</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'userName'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token string single-quoted-string">'&lt;br/>'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token string single-quoted-string">'邮箱：'</span><span class="token operator">.</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'userEmail'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token delimiter important">?></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码可以看出，<code v-pre>$_GET</code>是关系型数组，可以通过 **$_GET[<code v-pre>key</code>]**获取值。这里的 key 是 form 标签中表单元素的 name 属性的值。</p>
<p>效果：</p>
<p><img src="http://img.smyhvae.com/20180228_1140.gif" alt=""></p>
<h3 id="post-请求" tabindex="-1"><a class="header-anchor" href="#post-请求"><span>post 请求</span></a></h3>
<p>可以通过<code v-pre>$_POST</code>对象来获取。</p>
<p><strong>举例</strong>：下面是一个简单的表单代码，通过 post 请求将数据提交到02.php。</p>
<p>（1）index.html：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- 通过 post 请求，将表单提交到 php 页面中 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>02.php<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>姓名：</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>userName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>邮箱：</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>userEmail<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）02.php：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line">	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'content-type:text/html; charset= utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token string double-quoted-string">"&lt;h1>php 的 post 请求演示&lt;/h1>"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token string single-quoted-string">'用户名：'</span><span class="token operator">.</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'userName'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token string single-quoted-string">'&lt;br/>'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token string single-quoted-string">'邮箱：'</span><span class="token operator">.</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'userEmail'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token delimiter important">?></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码可以看出，<code v-pre>$_POST</code>是关系型数组，可以通过 **$_POST[<code v-pre>key</code>]**获取值。这里的 key 是 form 标签中表单元素的 name 属性的值。</p>
<p>效果演示：</p>
<p><img src="http://img.smyhvae.com/20180228_1145.gif" alt=""></p>
<p>实际开发中，可能不会单独写一个php文件，常见的做法是：在 html 文件中嵌入 php 的代码。</p>
<p>比如说，原本 html 中有个 li 标签是存放用户名的：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>smyhvae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>嵌入 php后，用户名就变成了动态获取的：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line">		<span class="token keyword">echo</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string backtick-quoted-string">`userName`</span><span class="token punctuation">]</span></span>
<span class="line">		<span class="token delimiter important">?></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-中文件相关的操作" tabindex="-1"><a class="header-anchor" href="#php-中文件相关的操作"><span>php 中文件相关的操作</span></a></h2>
<h3 id="文件上传-files" tabindex="-1"><a class="header-anchor" href="#文件上传-files"><span>文件上传 <code v-pre>$_FILES</code></span></a></h3>
<p>上传文件时，需要在html代码中进行如下设置：</p>
<p>（1）在html表单中，设置<code v-pre>enctype=&quot;multipart/form-data&quot;</code>。该值是必须的。</p>
<p>（2）只能用 post 方式获取。</p>
<p>代码如下：</p>
<p>（1）index.html:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>03-fileUpdate.php<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multipart/form-data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>照片:</span>
<span class="line">	      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>picture<span class="token punctuation">"</span></span> <span class="token attr-name">multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span></span>
<span class="line">	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）在 php 文件中打印 file 的具体内容：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line">  <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 让服务器休息一会</span></span>
<span class="line">  <span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//打印 file 的具体内容</span></span>
<span class="line"><span class="token delimiter important">?></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>演示效果：</p>
<p><img src="http://img.smyhvae.com/20180228_php_post_file.gif" alt=""></p>
<p>上方现象可以看出：</p>
<ul>
<li>
<p>点击提交后，服务器没有立即出现反应,而是休息了一会<code v-pre>sleep(5)</code>。</p>
</li>
<li>
<p>在<code v-pre>wamp/tmp</code>目录下面出现了一个<code v-pre>.tmp</code>文件。</p>
</li>
<li>
<p>.tmp文件一会就被自动删除了。</p>
</li>
<li>
<p>服务器返回的内容中有文件的名字<code v-pre>[name] =&gt; computer.png</code>，以及上传文件保存的位置<code v-pre>D:\wamp\tmp\php3D70.tmp</code>。服务器返回的内容如下：</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">	Array <span class="token punctuation">(</span> <span class="token punctuation">[</span>upFile<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span> Array <span class="token punctuation">(</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span> yangyang.jpg <span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span> image/jpeg <span class="token punctuation">[</span>tmp_name<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span> D:<span class="token punctuation">\</span>wamp<span class="token punctuation">\</span>tmp<span class="token punctuation">\</span>phpCC56.tmp <span class="token punctuation">[</span>error<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token number">18145</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="文件保存" tabindex="-1"><a class="header-anchor" href="#文件保存"><span>文件保存</span></a></h3>
<p>我们尝试一下，把上面的例子中的<code v-pre>临时目录</code>下面的文件保存起来。这里需要用到 php 里的 <code v-pre>move_uploaded_file()</code>函数。<a href="http://www.w3school.com.cn/php/func_filesystem_move_uploaded_file.asp" target="_blank" rel="noopener noreferrer">#</a></p>
<p>格式如下：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token function">move_uploaded_file</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'photo'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'tmp_name'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'./images/test.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参数解释：参数一：移动的文件。参数二：目标路径。</p>
<p>（1）index.html：（这部分的代码保持不变）</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	<span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string double-quoted-string">"03.fileUpdate.php"</span> method<span class="token operator">=</span><span class="token string double-quoted-string">"post"</span> enctype<span class="token operator">=</span><span class="token string double-quoted-string">"multipart/form-data"</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string double-quoted-string">""</span><span class="token operator">></span>照片<span class="token punctuation">:</span></span>
<span class="line">          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">"file"</span> name <span class="token operator">=</span> <span class="token string double-quoted-string">"picture"</span> multiple<span class="token operator">=</span><span class="token string double-quoted-string">""</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">"submit"</span> name<span class="token operator">=</span><span class="token string double-quoted-string">""</span><span class="token operator">></span></span>
<span class="line">  	<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）PHP代码：</p>
<p>暂略。</p>
<h3 id="wampserver-中修改上传文件的大小" tabindex="-1"><a class="header-anchor" href="#wampserver-中修改上传文件的大小"><span>WampServer 中修改上传文件的大小</span></a></h3>
<p>（1）打开 WampServer的文件<code v-pre>php.ini</code>：</p>
<p><img src="http://img.smyhvae.com/20180228_1454.png" alt=""></p>
<p>（2）修改<code v-pre>php.ini</code>中的如下内容：</p>
<p>设置文件最大上传限制：（值的大小可以根据需求修改）</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	file_uploads <span class="token operator">=</span> On<span class="token punctuation">;</span>         是否允许上传文件 On<span class="token operator">/</span>Off 默认是On</span>
<span class="line">	upload_max_filesize <span class="token operator">=</span> <span class="token number">32</span>M<span class="token punctuation">;</span> 设置 上传文件的最大限制</span>
<span class="line">	post_max_size <span class="token operator">=</span> <span class="token number">32</span>M<span class="token punctuation">;</span>       设置 通过Post提交的最多数据</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>考虑网络传输快慢：这里修改一些参数：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line">	max_execution_time <span class="token operator">=</span> <span class="token number">30000</span>      <span class="token punctuation">;</span> 脚本最长的执行时间 单位为秒</span>
<span class="line">	max_input_time <span class="token operator">=</span> <span class="token number">600</span>            <span class="token punctuation">;</span> 接收提交的数据的时间限制 单位为秒</span>
<span class="line">	memory_limit <span class="token operator">=</span> <span class="token number">1024</span>M            <span class="token punctuation">;</span> 最大的内存消耗</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-协议" tabindex="-1"><a class="header-anchor" href="#http-协议"><span>HTTP 协议</span></a></h2>
<h3 id="请求" tabindex="-1"><a class="header-anchor" href="#请求"><span>请求</span></a></h3>
<p>客户端发出的请求，主要由三个组成部分：请求行、请求头、请求主体。如下图所示：</p>
<p><img src="https://img.smyhvae.com/20180228_1505.jpg" alt=""></p>
<p><strong>1、请求行：</strong></p>
<ul>
<li>
<p>请求方法：GET or POST</p>
</li>
<li>
<p>请求URL</p>
</li>
<li>
<p>HTTP协议版本</p>
</li>
</ul>
<p><strong>2、请求头：</strong></p>
<p>常见的请求头如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">User-Agent：浏览器的具体类型　　如：User-Agent：Mozilla/5.0 <span class="token punctuation">(</span>Windows NT <span class="token number">6.1</span><span class="token punctuation">;</span> rv:17.0<span class="token punctuation">)</span> Gecko/20100101 Firefox/17.0</span>
<span class="line"></span>
<span class="line">Accept：浏览器支持哪些数据类型　　如：Accept: text/html,application/xhtml+xml,application/xml<span class="token punctuation">;</span><span class="token assign-left variable">q</span><span class="token operator">=</span><span class="token number">0.9</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Accept-Charset：浏览器采用的是哪种编码　　如：Accept-Charset: ISO-8859-1</span>
<span class="line"></span>
<span class="line">Accept-Encoding：浏览器支持解码的数据压缩格式　　如：Accept-Encoding: gzip, deflate</span>
<span class="line"></span>
<span class="line">Accept-Language：浏览器的语言环境　　如：Accept-Language zh-cn,zh<span class="token punctuation">;</span><span class="token assign-left variable">q</span><span class="token operator">=</span><span class="token number">0.8</span>,en-us<span class="token punctuation">;</span><span class="token assign-left variable">q</span><span class="token operator">=</span><span class="token number">0.5</span>,en<span class="token punctuation">;</span><span class="token assign-left variable">q</span><span class="token operator">=</span><span class="token number">0.3</span></span>
<span class="line"></span>
<span class="line">Host：请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。Host:www.baidu.com</span>
<span class="line"></span>
<span class="line">Connection：表示是否需要持久连接。</span>
<span class="line">属性值可以是Keep-Alive/close，HTTP1.1默认是持久连接，它可以利用持久连接的优点，当页面包含多个元素时（例如Applet，图片），显著地减少下载所需要的时间。</span>
<span class="line">要实现这一点，Servlet需要在应答中发送一个Content-Length头，最简单的实现方法是：先把内容写入ByteArrayOutputStream，然后在正式写出内容之前计算它的大小。如：Connection: Keep-Alive</span>
<span class="line"></span>
<span class="line">Content-Length：表示请求消息正文的长度。对于POST请求来说Content-Length必须出现。</span>
<span class="line"></span>
<span class="line">Content-Type：WEB服务器告诉浏览器自己响应的对象的类型和字符集。例如：Content-Type: text/html<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span><span class="token string">'gb2312'</span></span>
<span class="line"></span>
<span class="line">Content-Encoding：WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。例如：Content-Encoding：gzip</span>
<span class="line"></span>
<span class="line">Content-Language：WEB服务器告诉浏览器自己响应的对象的语言。</span>
<span class="line"></span>
<span class="line">Cookie：最常用的请求头，浏览器每次都会将cookie发送到服务器上，允许服务器在客户端存储少量数据。</span>
<span class="line"></span>
<span class="line">Referer：包含一个URL，用户从该URL代表的页面出发访问当前请求的页面。服务器能知道你是从哪个页面过来的。Referer: http://www.baidu.com/</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、请求体：</strong></p>
<p>指的是提交给服务器的数据。</p>
<p>需要注意的是，如果是往服务器提交数据，需要在请求头中设置<code v-pre>Content-Type: application/x-www-form-urlencoded</code>(在ajax中需要手动设置)。</p>
<h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应"><span>响应</span></a></h3>
<p>响应报文是服务器返回给客户端的。组成部分有响应行、响应头、响应主体。</p>
<p><img src="http://img.smyhvae.com/20180228_1510.jpg" alt=""></p>
<p><strong>1、状态行：</strong></p>
<p>HTTP响应行：主要是设置响应状态等信息。</p>
<p><strong>2、响应头：</strong></p>
<p>Cookie、缓存等信息就是在响应头的属性中设置的。</p>
<p>常见的响应头如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">Cache-Control</span>
<span class="line"></span>
<span class="line">响应输出到客户端后，服务端通过该报文头属告诉客户端如何控制响应内容的缓存。</span>
<span class="line"></span>
<span class="line">下面，的设置让客户端对响应内容缓存3600秒，也即在3600秒内，如果客户再次访问该资源，直接从客户端的缓存中返回内容给客户，不要再从服务端获取（当然，这个功能是靠客户端实现的，服务端只是通过这个属性提示客户端“应该这么做”，做不做，还是决定于客户端，如果是自己宣称支持HTTP的客户端，则就应该这样实现）。</span>
<span class="line"></span>
<span class="line">Cache-Control: max-age<span class="token operator">=</span><span class="token number">3600</span></span>
<span class="line"></span>
<span class="line">ETag</span>
<span class="line"></span>
<span class="line">一个代表响应服务端资源（如页面）版本的报文头属性，如果某个服务端资源发生变化了，这个ETag就会相应发生变化。它是Cache-Control的有益补充，可以让客户端“更智能”地处理什么时候要从服务端取资源，什么时候可以直接从缓存中返回响应。</span>
<span class="line"></span>
<span class="line">ETag: <span class="token string">"737060cd8c284d8af7ad3082f209582d"</span></span>
<span class="line"></span>
<span class="line">Location</span>
<span class="line"></span>
<span class="line">我们在Asp.net中让页面Redirect到一个某个A页面中，其实是让客户端再发一个请求到A页面，这个需要Redirect到的A页面的URL，其实就是通过响应报文头的Location属性告知客户端的，如下的报文头属性，将使客户端redirect到iteye的首页中：</span>
<span class="line"></span>
<span class="line">Location: http://www.google.com.hk</span>
<span class="line"></span>
<span class="line">Set-Cookie</span>
<span class="line"></span>
<span class="line">服务端可以设置客户端的Cookie，其原理就是通过这个响应报文头属性实现的。</span>
<span class="line"></span>
<span class="line">Set-Cookie: <span class="token assign-left variable">UserID</span><span class="token operator">=</span>JohnDoe<span class="token punctuation">;</span> Max-Age<span class="token operator">=</span><span class="token number">3600</span><span class="token punctuation">;</span> <span class="token assign-left variable">Version</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、HTTP响应体：</strong></p>
<p>如果请求的是HTML页面，那么返回的就是HTML代码。如果是JS就是JS代码。</p>
<h3 id="抓包工具" tabindex="-1"><a class="header-anchor" href="#抓包工具"><span>抓包工具</span></a></h3>
<p>常见的抓包工具有：whistle、Fiddler、Charles。</p>
</div></template>


