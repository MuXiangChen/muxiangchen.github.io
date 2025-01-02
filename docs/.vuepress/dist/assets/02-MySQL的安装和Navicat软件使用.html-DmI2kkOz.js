import{_ as s,c as e,e as n,o as l}from"./app-gihhjKhR.js";const i={};function t(p,a){return l(),e("div",null,a[0]||(a[0]=[n(`<h2 id="mysql-安装" tabindex="-1"><a class="header-anchor" href="#mysql-安装"><span>MySQL 安装</span></a></h2><h3 id="mysql-mac版" tabindex="-1"><a class="header-anchor" href="#mysql-mac版"><span>MySQL（Mac版）</span></a></h3><h3 id="步骤1、下载安装包并安装" tabindex="-1"><a class="header-anchor" href="#步骤1、下载安装包并安装"><span>步骤1、下载安装包并安装：</span></a></h3><p>MySQL 下载地址：https://dev.mysql.com/downloads/mysql/</p><p><img src="http://img.smyhvae.com/20200415_1707.png" alt=""></p><p><img src="http://img.smyhvae.com/20200415_1708.png" alt=""></p><h4 id="步骤2、配置环境变量" tabindex="-1"><a class="header-anchor" href="#步骤2、配置环境变量"><span>步骤2、配置环境变量</span></a></h4><p>打开 <code>~/.bash_profile</code> 文件，在文件的末尾，添加如下内容，即可配置环境变量：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># mysql</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>:/usr/local/mysql/bin</span>
<span class="line"><span class="token comment">#快速启动、结束MySQL服务, 可以使用alias命令</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">mysqlstart</span><span class="token operator">=</span><span class="token string">&#39;sudo /usr/local/mysql/support-files/mysql.server start&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">mysqlstop</span><span class="token operator">=</span><span class="token string">&#39;sudo /usr/local/mysql/support-files/mysql.server stop&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好环境变量后，在终端输入 <code>source ~/.bash_profile</code> 命令，让配置生效。</p><p>在终端的任何位置，输入如下命令，即可进入 mysql 命令的执行窗口：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>参考链接：</p><ul><li><a href="https://juejin.im/post/5cc2a52ce51d456e7079f27f" target="_blank" rel="noopener noreferrer">MySQL安装（Mac版）</a></li></ul><h3 id="步骤3、继续配置环境变量" tabindex="-1"><a class="header-anchor" href="#步骤3、继续配置环境变量"><span>步骤3、继续配置环境变量</span></a></h3><p>在 <code>~/.bash_profile</code> 中配置好环境变量后，发现每次重启终端后，配置都会失效，需要重新执行 <code>source ~/.bash_profile</code> 命令。</p><p>原因是，zsh加载的是 <code>~/.zshrc</code>文件，而 <code>.zshrc</code> 文件中并没有定义任务环境变量。</p><p>解决办法：打开 <code>~/.zshrc</code> 文件，在文件的末尾，添加如下内容即可：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">source</span> ~/.bash_profile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>参考链接：<a href="https://blog.csdn.net/science_Lee/article/details/79214127" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/science_Lee/article/details/79214127</a></p><h2 id="navicat-premium-软件初体验" tabindex="-1"><a class="header-anchor" href="#navicat-premium-软件初体验"><span>Navicat Premium 软件初体验</span></a></h2><p>Navicat Premium 软件是一种数据库管理的GUI软件，采用可视化的方式来查看和操作数据库，非常方便。支持的数据库有： MySQL、MongoDB、SQL Server、SQLite、Oracle 及 PostgreSQL等。</p><p>安装好 Navicat Premium 软件之后，我们来看看这个软件是怎么用的。</p><h3 id="新建表和数据" tabindex="-1"><a class="header-anchor" href="#新建表和数据"><span>新建表和数据</span></a></h3><p>1、新建连接：</p><p>打开 Navicat Premium 软件，选择菜单栏「文件-新建连接-mysql」，然后选择如下配置，即可在本地新建一个数据库连接：</p><p><img src="http://img.smyhvae.com/20200416_1157.png" alt=""></p><p>2、选中连接后，右键新建数据库：</p><p><img src="http://img.smyhvae.com/20200416_1159.png" alt=""></p><p><img src="http://img.smyhvae.com/20200416_1127.png" alt=""></p><p>3、选中数据库之后，新建表 <code>qiangu_student_table</code>：</p><p><img src="http://img.smyhvae.com/20200416_1138.png" alt=""></p><p>4、在表中添加字段：</p><p><img src="http://img.smyhvae.com/20200416_1202.png" alt=""></p><p>5、字段建好后，开始在表中插入数据：</p><p><img src="http://img.smyhvae.com/20200416_1259.png" alt=""></p><h3 id="导入外部-sql-文件" tabindex="-1"><a class="header-anchor" href="#导入外部-sql-文件"><span>导入外部 sql 文件</span></a></h3><p>在 Navicat中，选中当前 database 之后，右键选择“运行sql文件”，即可导入外部sql文件。</p>`,38)]))}const r=s(i,[["render",t],["__file","02-MySQL的安装和Navicat软件使用.html.vue"]]),o=JSON.parse('{"path":"/Frontend/10-MySQL%E6%95%B0%E6%8D%AE%E5%BA%93/02-MySQL%E7%9A%84%E5%AE%89%E8%A3%85%E5%92%8CNavicat%E8%BD%AF%E4%BB%B6%E4%BD%BF%E7%94%A8.html","title":"02-MySQL的安装和Navicat软件使用","lang":"en-US","frontmatter":{"title":"02-MySQL的安装和Navicat软件使用","publish":true},"headers":[{"level":2,"title":"MySQL 安装","slug":"mysql-安装","link":"#mysql-安装","children":[{"level":3,"title":"MySQL（Mac版）","slug":"mysql-mac版","link":"#mysql-mac版","children":[]},{"level":3,"title":"步骤1、下载安装包并安装：","slug":"步骤1、下载安装包并安装","link":"#步骤1、下载安装包并安装","children":[]},{"level":3,"title":"步骤3、继续配置环境变量","slug":"步骤3、继续配置环境变量","link":"#步骤3、继续配置环境变量","children":[]}]},{"level":2,"title":"Navicat Premium 软件初体验","slug":"navicat-premium-软件初体验","link":"#navicat-premium-软件初体验","children":[{"level":3,"title":"新建表和数据","slug":"新建表和数据","link":"#新建表和数据","children":[]},{"level":3,"title":"导入外部 sql 文件","slug":"导入外部-sql-文件","link":"#导入外部-sql-文件","children":[]}]}],"git":{"updatedTime":1735788687000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":1,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/10-MySQL数据库/02-MySQL的安装和Navicat软件使用.md"}');export{r as comp,o as data};
