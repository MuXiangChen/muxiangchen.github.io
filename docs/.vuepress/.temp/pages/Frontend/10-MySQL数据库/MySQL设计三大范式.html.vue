<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>范式即规范。MySQL 范式的作用是：</p>
<ul>
<li>
<p>让我们建的表更佳简洁和高效。</p>
</li>
<li>
<p>让功能独立化，避免耦合。</p>
</li>
</ul>
<h2 id="mysql-设计三大范式" tabindex="-1"><a class="header-anchor" href="#mysql-设计三大范式"><span>MySQL 设计三大范式</span></a></h2>
<h3 id="第一范式-1nf-原子性" tabindex="-1"><a class="header-anchor" href="#第一范式-1nf-原子性"><span>第一范式（1NF）：原子性</span></a></h3>
<p>表的每一列具有原子性，不可再分。</p>
<h3 id="第二范式-唯一性" tabindex="-1"><a class="header-anchor" href="#第二范式-唯一性"><span>第二范式：唯一性</span></a></h3>
<p>第二范式是建立在第一范式基础上的；外要求所有非主键字段必须完全依赖主键，而不是部分依赖。</p>
<h3 id="第三范式" tabindex="-1"><a class="header-anchor" href="#第三范式"><span>第三范式</span></a></h3>
<p>第三范式是建立在第二范式基础上的；且要求没有传递依赖。</p>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>
<ul>
<li><a href="https://www.jianshu.com/p/3e97c2a1687b" target="_blank" rel="noopener noreferrer">MySql--数据库设计三范式</a></li>
</ul>
</div></template>


