<template><div><h2 id="sql-的一些简单语法规则" tabindex="-1"><a class="header-anchor" href="#sql-的一些简单语法规则"><span>SQL 的一些简单语法规则</span></a></h2>
<h3 id="结束符" tabindex="-1"><a class="header-anchor" href="#结束符"><span>结束符</span></a></h3>
<p>SQL 指令需要语句结束符，默认是英文分号<code v-pre>;</code>。</p>
<p>当然，还有另外两个结束符：</p>
<ul>
<li>
<p><code v-pre>\g</code> 与英文分号<code v-pre>;</code>等效。</p>
</li>
<li>
<p><code v-pre>\G</code>：将查到的结构旋转90度变成纵向。</p>
</li>
</ul>
<h3 id="反引号" tabindex="-1"><a class="header-anchor" href="#反引号"><span>反引号``</span></a></h3>
<p>SQL语句中如果用到了关键字或者保留字，需要使用反引号``（Tab键上面的符号）来包裹，让系统忽略。</p>
<h2 id="mysql-数据库的操作分类" tabindex="-1"><a class="header-anchor" href="#mysql-数据库的操作分类"><span>MySQL 数据库的操作分类</span></a></h2>
<p>根据数据库的对象层级，可以将<strong>SQL的基础操作分为四类</strong>：</p>
<ul>
<li>
<p>数据库（DB）操作。</p>
</li>
<li>
<p>数据表（Table）操作。</p>
</li>
<li>
<p>数据字段（Field）操作。</p>
</li>
<li>
<p>数据操作。</p>
</li>
</ul>
<p>下面来详细讲一讲。</p>
<h2 id="一、数据库-db-的基本操作" tabindex="-1"><a class="header-anchor" href="#一、数据库-db-的基本操作"><span>一、数据库（DB）的基本操作</span></a></h2>
<p>在终端的任何位置，输入如下命令，即可进入 mysql 命令的执行窗口：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line">mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1、创建数据库" tabindex="-1"><a class="header-anchor" href="#_1、创建数据库"><span>1、创建数据库</span></a></h3>
<p><strong>语法格式</strong>：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">create database 数据库名称 [数据库选项];</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>数据库名称的命名规范</strong>：</p>
<ul>
<li>由数字、字母和下划线组成。</li>
<li>不区分大小写。</li>
<li>不能以数字开头。</li>
<li>建议使用下划线法创建复杂的数据库名字。比如 <code v-pre>db_qianguyihao</code>。</li>
</ul>
<p><strong>举例</strong>：</p>
<p>创建一个名为 db_qianguyihao1 的数据库：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">create database db_qianguyihao1;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>创建一个指定字符集的数据库：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">create database db_qianguyihao2 charset utf8MB4;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>创建一个指定校对集的数据库：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">create database db_qianguyihao3 charset utf8MB4 collate utf8mb4_general_ci</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2、查看数据库" tabindex="-1"><a class="header-anchor" href="#_2、查看数据库"><span>2、查看数据库</span></a></h3>
<p>查看有哪些数据库：(显示所有的数据库列表)</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">show databases;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>查看 <code v-pre>db_qianguyihao1</code> 这个数据库的具体创建指令是怎样的：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">show create database db_qianguyihao1;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>备注：由于系统会加工，所以看到的结果不一定是真实的创建指令。</p>
<h3 id="_3、使用指定的数据库" tabindex="-1"><a class="header-anchor" href="#_3、使用指定的数据库"><span>3、使用指定的数据库</span></a></h3>
<p>使用指定的数据库：（也可以理解成：进入指定的数据库）</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line"># 语法格式</span>
<span class="line">use database_xxx;</span>
<span class="line"></span>
<span class="line"># 举例</span>
<span class="line">use db_qianguyihao;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设当前服务器连接中有很多个数据库（db_qianguyihao1、db_qianguyihao2），此时，我输入 <code v-pre>use db_qianguyihao2</code>则代表我想使用 <code v-pre>db_qianguyihao2</code> 这个数据库。</p>
<h3 id="_4、修改数据库的参数" tabindex="-1"><a class="header-anchor" href="#_4、修改数据库的参数"><span>4、修改数据库的参数</span></a></h3>
<p>我们一般很少修改数据库的名称，一般是去修改数据库的一些选项，比如：</p>
<ul>
<li>
<p>修改字符集</p>
</li>
<li>
<p>修改校对集</p>
</li>
</ul>
<p><strong>语法格式</strong>：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">alter database 数据库名称 [库选项]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例1、修改数据库的字符集为gbk：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">alter database db_qianguyihao1 charset gbk;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例2、修改数据库的校对集：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">database</span> db_qianguyihao2 <span class="token keyword">charset</span> gbk <span class="token keyword">collate</span> gbk_chinese_ci<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>备注：因为校对集是和字符集有关的，所以上方指令是在修改字符集的同时，修改校对集。</p>
<h3 id="_5、删除指定的数据库" tabindex="-1"><a class="header-anchor" href="#_5、删除指定的数据库"><span>5、删除指定的数据库</span></a></h3>
<p><strong>语法格式</strong>：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">drop database 数据库名称;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>备注：删除数据库时，会清空当前数据库里的所有数据表，所以删除数据库的操作一定要谨慎。</p>
<h2 id="二、数据表-table-的基本操作" tabindex="-1"><a class="header-anchor" href="#二、数据表-table-的基本操作"><span>二、数据表（Table）的基本操作</span></a></h2>
<p>注意，我们最好先通过 <code v-pre>use xxx_database</code> 命令进入指定的数据库（DB），然后在当前数据库下，进行数据表（Table）的操作。</p>
<h3 id="_1、创建数据表" tabindex="-1"><a class="header-anchor" href="#_1、创建数据表"><span>1、创建数据表</span></a></h3>
<p><strong>语法格式</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token punctuation">[</span>数据库名<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>表名<span class="token punctuation">]</span> <span class="token punctuation">(</span></span>
<span class="line">	字段名<span class="token number">1</span> 字段类型<span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    字段名<span class="token number">2</span> 字段类型</span>
<span class="line"><span class="token punctuation">)</span> 表选项<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例</strong>：</p>
<p>1、在当前数据库中创建数据表 <code v-pre>table_qiangu1</code>，并新增<strong>主键</strong> id 字段：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> table_qiangu1 <span class="token punctuation">(</span></span>
<span class="line">  id <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在当前数据库中创建数据表 <code v-pre>t_student1</code>，并新增 name、age这连个字段：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> t_student1<span class="token punctuation">(</span></span>
<span class="line">    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    age <span class="token keyword">int</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、在指定的数据库 <code v-pre>db_2</code> 中创建数据表 <code v-pre>t_student2</code>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> db_2<span class="token punctuation">.</span>t_student2<span class="token punctuation">(</span></span>
<span class="line">    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    age <span class="token keyword">int</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、在当前数据库中创建数据表 <code v-pre>t_student3</code>（含表选项）：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> t_student3<span class="token punctuation">(</span></span>
<span class="line">    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    age <span class="token keyword">int</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token keyword">engine</span> <span class="token keyword">Innodb</span> <span class="token keyword">charset</span> utf8MB4<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例4中的代码涉及到存储引擎，这里解释一下：</p>
<p><strong>存储引擎</strong>是指数据存储和管理的方式，MySQL中提供了多种存储引擎，一般使用默认存储引擎 InnoDB。</p>
<ul>
<li>
<p>InnoDB：默认存储引擎；支持事务处理和外键；数据统一管理。</p>
</li>
<li>
<p>MyIsam：不支持事务和外键；数据、表结构、索引独立管理；MySQL5.6以后不再维护。</p>
</li>
</ul>
<p>6、扩展：如果想创建一个与已有表一样的数据表，MySQL提供了一种便捷的复制模式</p>
<h3 id="_2、复制数据表" tabindex="-1"><a class="header-anchor" href="#_2、复制数据表"><span>2、复制数据表</span></a></h3>
<p>如果想创建一个与已有表一样的数据表，MySQL提供了一种便捷的<strong>复制</strong>模式。</p>
<p><strong>语法格式</strong>：（复制现有的表 <code v-pre>table_xx1</code> 到 <code v-pre>table_xx2</code>）</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> table_xx1 <span class="token operator">like</span> 数据库名<span class="token punctuation">.</span>table_xx2<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意，这种复制模式，<code v-pre>table_xx2</code> 只会复制表 <code v-pre>table_xx1</code> 中的字段，不会复制表<code v-pre>table_xx1</code>中的数据。</p>
<p><strong>举例</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment"># 在当前数据库下，复制现有的表`t_qianguyihao1` 到表 `t_qianguyihao2`</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> t_qianguyihao1 <span class="token operator">like</span> t_qianguyihao2<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复制现有的表`t_qianguyihao1` 到表 `t_qianguyihao2`，是复制到 `db2`这个数据库中</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> t_qianguyihao1 <span class="token operator">like</span> db2<span class="token punctuation">.</span>t_qianguyihao2<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、显示数据表的名称" tabindex="-1"><a class="header-anchor" href="#_3、显示数据表的名称"><span>3、显示数据表的名称</span></a></h3>
<p>在当前数据库下，显示所有的数据表：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在指定的数据库中，显示所有的数据表：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token keyword">from</span> db_qianguyihao1<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>显示数据表的创建指令：(查看 <code v-pre>t_qianguyihao1</code> 这个数据表的具体创建指令是怎样的)</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">show create table t_qianguyihao1; # 备注：由于系统会加工，所以看到的结果不一定是真实的创建指令。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4、查询-查找-数据表的名称" tabindex="-1"><a class="header-anchor" href="#_4、查询-查找-数据表的名称"><span>4、查询（查找）数据表的名称</span></a></h3>
<blockquote>
<p>根据 表名称 查询数据表，也可以理解成：按条件显示部分数据表。</p>
</blockquote>
<p>根据数据表的<strong>表名称</strong>查找数据表时，需要用到关键词<code v-pre>like</code>，而且还要涉及到两个符号：</p>
<ul>
<li>
<p><code v-pre>%</code> 表示匹配任意<strong>多个字符</strong>。</p>
</li>
<li>
<p><code v-pre>_</code> 表示匹配任意<strong>一个字符</strong>（固定位置）。</p>
</li>
</ul>
<p>上面这两个模糊查询的符号，大家要牢记。我们来看看具体的例子。</p>
<p>语法举例：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre><code><span class="line">show tables like '%like_';	# _表示匹配一个字符（固定位置），%表示匹配N个字符</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><code v-pre>%</code> 符号举例</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment"># 查询表名称中，包含 “qiangu” 这个关键字的表（“qiangu”这个关键字的前后可能都有内容）</span></span>
<span class="line"><span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">'%qiangu%'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询表名称以“qiangu”开头的表（这个命令应该很实用）</span></span>
<span class="line"><span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">'qiangu%'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>_</code>符号举例</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment"># 根据 表名称 来查询表，查询条件是：表名称以“qiangu”开头，而且要确保 qiangu 的后面有三个字符（因为我在 qiangu 的后面写了三个下划线）。</span></span>
<span class="line"><span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">'qiangu___'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、desc-查看数据表的表结构" tabindex="-1"><a class="header-anchor" href="#_5、desc-查看数据表的表结构"><span>5、desc：查看数据表的表结构</span></a></h3>
<p>查看数据表的表结构，就是<strong>查看这张表中定义了哪些字段</strong>，以及这些字段是如何定义的。通过这种方式，我们可以清晰地了解数据的存储形式。</p>
<p>项目开发中，领导在检查我们的工作时，首先看的就是我们的表中定义了哪些字段。所以说，这种方式，还是很实用的。</p>
<p><strong>语法格式</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment"># 方式1</span></span>
<span class="line"><span class="token keyword">desc</span> 表名称<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 方式2</span></span>
<span class="line"><span class="token keyword">describe</span> 表名称<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 方式3</span></span>
<span class="line"><span class="token keyword">show</span> <span class="token keyword">columns</span> <span class="token keyword">from</span> 表名称<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的三种方式，效果都一样，三选一即可。</p>
<h3 id="_6、修改数据表的表名称和表选项" tabindex="-1"><a class="header-anchor" href="#_6、修改数据表的表名称和表选项"><span>6、修改数据表的表名称和表选项</span></a></h3>
<p><strong>修改数据表的表名称</strong>：</p>
<p>在当前数据库下，修改数据表的表名称：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">rename</span> <span class="token keyword">table</span> 原表名 <span class="token keyword">to</span> 新表名<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>指定某个数据库，然后修改数据表的表名称：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">rename</span> <span class="token keyword">table</span> 数据库名<span class="token punctuation">.</span>原表名 <span class="token keyword">to</span> 数据库名<span class="token punctuation">.</span>新表名<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>修改数据表的表名称</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> table1 <span class="token keyword">charset</span> gbk<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_7、删除数据表" tabindex="-1"><a class="header-anchor" href="#_7、删除数据表"><span>7、删除数据表</span></a></h3>
<p>语法格式：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">drop</span> <span class="token keyword">table</span> 数据表名称<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、字段-field-的基本操作" tabindex="-1"><a class="header-anchor" href="#三、字段-field-的基本操作"><span>三、字段（Field）的基本操作</span></a></h2>
<p>数据表 table 创建好了之后，我们就可以开始在这张表中新增字段了。</p>
<h3 id="_1、新增字段" tabindex="-1"><a class="header-anchor" href="#_1、新增字段"><span>1、新增字段</span></a></h3>
<p><strong>语法格式</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">add</span> <span class="token punctuation">[</span><span class="token keyword">column</span><span class="token punctuation">]</span> 字段名 字段类型 <span class="token punctuation">[</span>字段属性<span class="token punctuation">]</span> <span class="token punctuation">[</span>字段位置<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意事项：</p>
<ul>
<li>
<p>新增字段时，必须制指定字段类型。</p>
</li>
<li>
<p>[column]、 [字段属性]、[字段位置] 这几个都是选填，其他是必填。</p>
</li>
<li>
<p>追加字段时，这个字段的顺序默认排在最后。</p>
</li>
</ul>
<p><strong>举例</strong>：</p>
<p>新增字段 <code v-pre>name</code>:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> table_qiangu1 <span class="token keyword">add</span> name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>新增字段 <code v-pre>age</code>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> table_qiangu1 <span class="token keyword">add</span> age <span class="token keyword">int</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2、新增字段时-设置字段的位置-顺序" tabindex="-1"><a class="header-anchor" href="#_2、新增字段时-设置字段的位置-顺序"><span>2、新增字段时，设置字段的位置（顺序）</span></a></h3>
<p>在新增字段时，它的顺序是默认放在最后面的，当然，我们也可以人工指定它的顺序。</p>
<p>在修改字段的位置时，我们可以用到下面这两个关键字：</p>
<ul>
<li>
<p><code v-pre>first</code> 放到最前面</p>
</li>
<li>
<p><code v-pre>after</code> 放到某个字段的后面</p>
</li>
</ul>
<p><strong>语法格式</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">add</span> 新字段名 字段类型 字段位置<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>举例1</strong>：</p>
<p>在 <code v-pre>name</code>字段的后面，新增一个 <code v-pre>sex</code> 字段：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> t_qiangu1 <span class="token keyword">add</span> sex <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'性别'</span> <span class="token keyword">after</span> name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意，上方举例中，如果是新建 varchar 类型的字段，一定要指定 varchar 的长度（比如255），否则报错。</p>
<p><strong>举例2</strong>：</p>
<p>新增一个 <code v-pre>id</code> 字段，放到最前面：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> t_qiangu1 <span class="token keyword">add</span> id <span class="token keyword">int</span> <span class="token keyword">first</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3、change-修改现有字段的字段名" tabindex="-1"><a class="header-anchor" href="#_3、change-修改现有字段的字段名"><span>3、change：修改现有字段的字段名</span></a></h3>
<blockquote>
<p>修改现有字段的字段名，是通过 change 关键字，不是通过 modify 关键字（后者会报错，执行失败）。</p>
</blockquote>
<p><strong>语法格式</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment"># 格式1（精简版）</span></span>
<span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 change 原字段名 新字段名 字段类型<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 格式2（完整版）</span></span>
<span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 change 原字段名 新字段名 字段类型 <span class="token punctuation">[</span>字段属性<span class="token punctuation">]</span> <span class="token punctuation">[</span>位置<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li>
<p>修改字段名时，一定要设置新字段的字段类型。</p>
</li>
<li>
<p>虽然 change 关键字也可以修改现有字段的字段属性、字段位置，但我们一般是通过 modify 关键字来做（下面会讲）。</p>
</li>
</ul>
<p><strong>举例</strong>：</p>
<p>修改字段名 <code v-pre>sex</code> 为 <code v-pre>sexy</code>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> t_qiangu2 change sex sexy <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4、modify-修改现有字段的的字段类型、字段位置、字段属性" tabindex="-1"><a class="header-anchor" href="#_4、modify-修改现有字段的的字段类型、字段位置、字段属性"><span>4、modify：修改现有字段的的字段类型、字段位置、字段属性</span></a></h3>
<p><strong>语法格式</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 现有字段的字段名 现有字段的字段类型 <span class="token punctuation">[</span>字段属性<span class="token punctuation">]</span> <span class="token punctuation">[</span>位置<span class="token punctuation">]</span>；</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>举例1</strong>、针对现有的字段 <code v-pre>name</code> 和 <code v-pre>age</code>，更换这两个字段的顺序：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment"># 注意，这里的 age 后面一定要跟上它的字段类型，否则执行失败</span></span>
<span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> t_qiangu1 <span class="token keyword">modify</span> age <span class="token keyword">int</span> <span class="token keyword">after</span> name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改字段的默认值" tabindex="-1"><a class="header-anchor" href="#修改字段的默认值"><span>修改字段的默认值</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment"># 若本身存在默认值，则先删除</span></span>
<span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">alter</span> <span class="token keyword">column</span> 字段名 <span class="token keyword">drop</span> <span class="token keyword">default</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 若本身不存在则可以直接设定</span></span>
<span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">alter</span> <span class="token keyword">column</span> 字段名 <span class="token keyword">set</span> <span class="token keyword">default</span> 默认值<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、删除字段" tabindex="-1"><a class="header-anchor" href="#_5、删除字段"><span>5、删除字段</span></a></h3>
<blockquote>
<p>删除字段的同时，会删除字段对应的数据。删除字段的操作不可逆，请谨慎操作。</p>
</blockquote>
<p>语法格式：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">drop</span> 字段名<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例：（删除 t_qiangu1 表中的 age 这个字段）</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> t_qiangu1 <span class="token keyword">drop</span> age<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="四、数据的基本操作" tabindex="-1"><a class="header-anchor" href="#四、数据的基本操作"><span>四、数据的基本操作</span></a></h2>
<h3 id="_1、新增数据" tabindex="-1"><a class="header-anchor" href="#_1、新增数据"><span>1、新增数据</span></a></h3>
<p><strong>方式1、全字段插入</strong>：</p>
<p>语法格式：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">insert</span> <span class="token keyword">into</span> 表名 <span class="token keyword">values</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span> 值<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 最后一个值<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：</p>
<ul>
<li>值的顺序必须与所有字段的顺序一致。</li>
<li>值的数据类型也必须与字段定义的数据类型一致。</li>
</ul>
<p>举例（给 t_qiangu1 这个表中插入一条完整的数据）：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">insert</span> <span class="token keyword">into</span> t_qiangu1 <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'qianguyihao'</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>方式1、部分字段插入</strong>：</p>
<p>语法格式：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">insert</span> <span class="token keyword">into</span> 表名 <span class="token punctuation">(</span>字段<span class="token number">1</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span> 值<span class="token number">2</span><span class="token punctuation">,</span> 值<span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解释：</p>
<p>-字段的顺序可以随意，但值的顺序必须要与前面的字段顺序<strong>一一对应</strong>，数据类型也要一致。</p>
<p>举例（给 t_qiangu1 这个表中的指定字段插入数据）：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">insert</span> <span class="token keyword">into</span> t_qiangu1 <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'xusong'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2、查询数据" tabindex="-1"><a class="header-anchor" href="#_2、查询数据"><span>2、查询数据</span></a></h3>
<blockquote>
<p>查询数据的操作，占sql日常操作的95%以上。</p>
</blockquote>
<p><strong>语法格式</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">select</span> xxx <span class="token keyword">from</span> 表名<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>举例</strong>：</p>
<p>查询表中的所有数据：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_qiangu1<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>查询表中 name、age 这两个字段的数据：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">select</span> name<span class="token punctuation">,</span> age <span class="token keyword">from</span> t_qiangu2<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>查询表中 id=2 的数据：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_qiangu3 <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3、修改数据" tabindex="-1"><a class="header-anchor" href="#_3、修改数据"><span>3、修改数据</span></a></h3>
<p><strong>语法格式</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">update</span> 表名 <span class="token keyword">set</span> <span class="token punctuation">(</span>字段<span class="token number">1</span> <span class="token operator">=</span> 新值<span class="token number">1</span><span class="token punctuation">,</span> 字段<span class="token number">2</span> <span class="token operator">=</span> 新值<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token keyword">where</span> 条件筛选<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>解释</strong>：</p>
<ul>
<li>
<p>我们通常是结合 where 条件语句来修改数据。</p>
</li>
<li>
<p><strong>修改数据之前，要先保证表里面有数据</strong>。如果这张表是空表，那么，执行这个命令后，等于没执行。</p>
</li>
</ul>
<p><strong>举例</strong>：</p>
<p>将表中，name 这个字段的值全部修改为<code v-pre>千古壹号</code>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">update</span> t_qiangu1 <span class="token keyword">set</span> name <span class="token operator">=</span> <span class="token string">'千古壹号'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>id = 3 的这条记录中，修改 name 和 age 这两个字段的值：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">update</span> t_qiangu1 <span class="token keyword">set</span> name <span class="token operator">=</span> <span class="token string">'许嵩'</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token string">'34'</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4、删除数据" tabindex="-1"><a class="header-anchor" href="#_4、删除数据"><span>4、删除数据</span></a></h3>
<blockquote>
<p>删除字段的操作不可逆，请谨慎操作。</p>
</blockquote>
<p><strong>语法格式</strong>：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> 表名 <span class="token punctuation">[</span><span class="token keyword">where</span> 条件<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>解释</strong>：</p>
<ul>
<li>
<p>执行删除操作之后，匹配到的<strong>整条记录</strong>，都会删除。</p>
</li>
<li>
<p><strong>删除数据之前，要先保证表里面有数据</strong>。如果这张表是空表，那么，执行这个命令后，等于没执行。</p>
</li>
</ul>
<p><strong>举例</strong>：</p>
<p>删除表中<code v-pre>id = 2</code>的记录：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> t_qiangu1 <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


