import{_ as e,c as a,e as i,o as s}from"./app-gihhjKhR.js";const p={};function t(n,l){return s(),a("div",null,l[0]||(l[0]=[i('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>CSS中，有很多<strong>非布局样式</strong>，这些样式（属性）和与布局无关，包括：</p><ul><li>字体、字重、颜色、大小、行高</li><li>背景、边框</li><li>滚动、换行</li><li>装饰性属性（粗体、斜体、下划线）等。</li></ul><p>这篇文章，我们来对上面的部分样式做一个回顾。</p><h2 id="边框" tabindex="-1"><a class="header-anchor" href="#边框"><span>边框</span></a></h2><p>如何用边框画一个三角形？详见《02-CSS基础/06-CSS盒模型详解》中的最后一段。</p><h2 id="文字换行" tabindex="-1"><a class="header-anchor" href="#文字换行"><span>文字换行</span></a></h2><ul><li><p>ovferflow-wrap：通用的属性。用来说明当一个不能被分开的字符串（单词）太长而不能填充其包裹盒时，为防止其溢出，浏览器是否允许这样的单词<strong>中断换行</strong>。</p></li><li><p>word-break：指定了怎样在单词内断行。这里涉及到CJK（中文/日文/韩文）的文字换行。</p></li><li><p>white-space：空白处是否换行。</p></li></ul><p>上面这三个 css 属性进行组合，可以设置各种不同的属性。</p><p>当然，如果想让一段很长的文本不换行，可以直接设置<code>white-space: nowrap</code> 这一个属性即可。如果想换行，可以试试<code>white-space: pre-wrap</code>。</p><h2 id="css-hack" tabindex="-1"><a class="header-anchor" href="#css-hack"><span>CSS Hack</span></a></h2><ul><li><p>CSS Hack 的方式：不合法但可以生效的写法。</p></li><li><p>可以用来解决一些浏览器的兼容性问题。</p></li><li><p>缺点：难理解、难维护、易失效（比如浏览器升级后，hack可能会失效）。</p></li><li><p>替代方案：特性检测。</p></li><li><p>替代方案：针对性加 class</p></li></ul><h2 id="css-效果" tabindex="-1"><a class="header-anchor" href="#css-效果"><span>CSS 效果</span></a></h2><p>我们可以利用 CSS 实现各种效果，常见的效果属性有：</p><ul><li><p>box-shadow：盒子的阴影</p></li><li><p>text-shadow：文本的阴影</p></li><li><p>border-radius</p></li><li><p>background</p></li><li><p>clip-path</p></li></ul>',15)]))}const r=e(p,[["render",t],["__file","01-CSS中的非布局样式.html.vue"]]),h=JSON.parse('{"path":"/Frontend/03-CSS%E8%BF%9B%E9%98%B6/01-CSS%E4%B8%AD%E7%9A%84%E9%9D%9E%E5%B8%83%E5%B1%80%E6%A0%B7%E5%BC%8F.html","title":"01-CSS中的非布局样式","lang":"en-US","frontmatter":{"title":"01-CSS中的非布局样式","publish":true},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"边框","slug":"边框","link":"#边框","children":[]},{"level":2,"title":"文字换行","slug":"文字换行","link":"#文字换行","children":[]},{"level":2,"title":"CSS Hack","slug":"css-hack","link":"#css-hack","children":[]},{"level":2,"title":"CSS 效果","slug":"css-效果","link":"#css-效果","children":[]}],"git":{"updatedTime":1735788687000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":1,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/03-CSS进阶/01-CSS中的非布局样式.md"}');export{r as comp,h as data};
