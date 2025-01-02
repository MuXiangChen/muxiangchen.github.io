import{_ as s,c as a,e,o as l}from"./app-gihhjKhR.js";const p={};function t(i,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>MySQL 中的字段，主要有四种数据类型：</p><ul><li><p>整型（整数）</p></li><li><p>小数</p></li><li><p>字符串类型</p></li><li><p>时间日期类型</p></li></ul><p>下面来详细讲一讲。</p><h2 id="整数类型" tabindex="-1"><a class="header-anchor" href="#整数类型"><span>整数类型</span></a></h2><h3 id="整数类型的分类" tabindex="-1"><a class="header-anchor" href="#整数类型的分类"><span>整数类型的分类</span></a></h3><p>MySQL中，整型有五种：</p><ul><li><p>迷你整型：tinyint，使用<strong>1个字节</strong>存储整数，最多存储256个整数（-128~127）。</p></li><li><p>短整型：smallint，使用<strong>2个字节</strong>存储整数。</p></li><li><p>中整型：mediumint，使用<strong>3个字节</strong>存储整数。</p></li><li><p>标准整型：int，使用<strong>4个字节</strong>存储整数。</p></li><li><p>大整型：bigint，使用<strong>8个字节</strong>存储。</p></li></ul><p><strong>强调</strong>：</p><p>（1）如果你不知道用哪一种，或者懒得计算，那就用标准整型 <code>int</code>吧，这个用的最多。</p><p>（2）整型在 MySQL 中默认是有符号的，即有正负；无符号需要使用 <code>unsigned</code> 修饰整型，代表正整数。</p><p><strong>举例</strong>：</p><p>在指定的表中新增 age 字段，要求 age 是正整数：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> table_qiangu1 <span class="token keyword">add</span> age <span class="token keyword">int</span> <span class="token keyword">unsigned</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="设计思路" tabindex="-1"><a class="header-anchor" href="#设计思路"><span>设计思路</span></a></h3><p>如果需要新建整型的字段，设计思路如下：</p><p>（1）确定需要存储的数据是整数。</p><p>（2）预估整数的范围，选择合适的整数类型。</p><p>（3）确定这个整数是否需要包含负数。</p><h3 id="整数类型的取值范围" tabindex="-1"><a class="header-anchor" href="#整数类型的取值范围"><span>整数类型的取值范围</span></a></h3><p>todo。参考链接：<a href="https://blog.csdn.net/slyjit/article/details/54290486" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/slyjit/article/details/54290486</a></p><h3 id="整数类型的显示宽度、零填充" tabindex="-1"><a class="header-anchor" href="#整数类型的显示宽度、零填充"><span>整数类型的显示宽度、零填充</span></a></h3><blockquote><p>我们在很多设计表中，可能会看到比如 <code>int(11)</code>这种数据类型，这里面的 <code>11</code>代表的就是<code>显示宽度</code>。</p></blockquote><p>所谓的<strong>显示宽度</strong>，其实就是显示的时候，看到的最少数字个数。</p><p>比如 int(2) ，表示不管你的数值是多少，最少可以看到两个数字。假如你存的数值是9，没有满两位，就会在前面补零，显示为<code>09</code>；假如你的数值是120，超过了显示宽度，则直接显示原始值，不会做<strong>零填充</strong>。</p><p><strong>显示宽度的注意事项</strong>：</p><ul><li><p>显示宽度只适用于 MySQL 的整数类型。</p></li><li><p>显示宽度只是指明 MySQL 整数类型最少显示的数字个数（可以通过desc查看表字段显示）。</p></li><li><p><strong>显示宽度只是在显示的时候改变数值的样式，不会对原本的值进行更改</strong>。</p></li><li><p>显示宽度和数值类型的取值范围无关。例如int(10) 他的取值范围依然是(-2 147 483 648，2 147 483 647)。</p></li></ul><p><strong>零填充的注意事项</strong>：</p><ul><li><p>要想让显示宽度自动进行<strong>零填充</strong>，必须要配合 <code>ZEROFILL</code>这个关键字一起使用。</p></li><li><p><strong>零填充只能针对正整数</strong>，也就是说，<code>ZEROFILL</code> 要求整型为无符号型。</p></li></ul><p><strong>举例</strong>：</p><p>1、新建一张表，然后在这张表中新增 num1 字段，要求 num1 显示3位，不够3位的自动进行零填充：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 新建一张表</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> table_qiangu1 <span class="token punctuation">(</span></span>
<span class="line">  id <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示宽度有效（正确写法）</span></span>
<span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> table_qiangu1 <span class="token keyword">add</span> num1 <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> zerofill<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 对比：普通写法，显示宽度无效</span></span>
<span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> table_qiangu1 <span class="token keyword">add</span> num2 <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 对比：普通写法</span></span>
<span class="line"><span class="token keyword">alter</span> <span class="token keyword">table</span> table_qiangu1 <span class="token keyword">add</span> num3 <span class="token keyword">int</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述命令中，如果把 <code>zerofill</code> 这个关键字去掉，是达不到显示宽度的效果的。执行完上述命令后，我们执行 <code>desc table_qiangu1</code> 命令，对比一下 num1、num2、num3 的字段结构就知道了：</p><p><img src="https://img.smyhvae.com/20200423_1050.png" alt=""></p><p>上方截图可以看到，只有 num1 才有显示宽度，它可以进行零填充，num2、num3不行。我们往表中插入整数 <code>6</code>，然后看看显示结果，就一目了然：</p><p><img src="https://img.smyhvae.com/20200423_1055.png" alt=""></p><p>参考链接：<a href="https://juejin.im/post/5b24a2c251882574d73c6f82" target="_blank" rel="noopener noreferrer">MySql数据库 数值类型的显示宽度</a></p><h2 id="小数" tabindex="-1"><a class="header-anchor" href="#小数"><span>小数</span></a></h2><p>MySQL 中的小数分为两大类：</p><p>浮点型的数据分为两种：</p><ul><li><p>单精度：float，使用4个字节存储，精度范围为6-7位有效数字。</p></li><li><p>双精度：double，使用8个字节存储，精度范围为14-15位有效数字。</p></li></ul><p>注意：</p><ul><li><p>浮点数超过精度范围会自动进行四舍五入。</p></li><li><p>精度可以指定整数和小数部分。比如</p></li></ul>`,43)]))}const c=s(p,[["render",t],["__file","04-MySQL字段的数据类型.html.vue"]]),r=JSON.parse('{"path":"/Frontend/10-MySQL%E6%95%B0%E6%8D%AE%E5%BA%93/04-MySQL%E5%AD%97%E6%AE%B5%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","title":"04-MySQL字段的数据类型","lang":"en-US","frontmatter":{"title":"04-MySQL字段的数据类型","publish":true},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"整数类型","slug":"整数类型","link":"#整数类型","children":[{"level":3,"title":"整数类型的分类","slug":"整数类型的分类","link":"#整数类型的分类","children":[]},{"level":3,"title":"设计思路","slug":"设计思路","link":"#设计思路","children":[]},{"level":3,"title":"整数类型的取值范围","slug":"整数类型的取值范围","link":"#整数类型的取值范围","children":[]},{"level":3,"title":"整数类型的显示宽度、零填充","slug":"整数类型的显示宽度、零填充","link":"#整数类型的显示宽度、零填充","children":[]}]},{"level":2,"title":"小数","slug":"小数","link":"#小数","children":[]}],"git":{"updatedTime":1735788687000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":1,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/10-MySQL数据库/04-MySQL字段的数据类型.md"}');export{c as comp,r as data};
