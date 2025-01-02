<template><div><h3 id="动态添加对象的属性" tabindex="-1"><a class="header-anchor" href="#动态添加对象的属性"><span>动态添加对象的属性</span></a></h3>
<ul>
<li>Vue中，动态新增对象的属性时，不能直接添加。正确的做法是：Vue.set(obj,key,value)。参考链接：<a href="https://blog.csdn.net/tian361zyc/article/details/72909187" target="_blank" rel="noopener noreferrer">#</a></li>
</ul>
<h3 id="判断一个checkbox是否被选中" tabindex="-1"><a class="header-anchor" href="#判断一个checkbox是否被选中"><span>判断一个checkbox是否被选中</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- v-model里的内容是变量，变量里的值可能是 true 后者 false --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isSelected<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 选中时，值为 true。未选中时，值为 false --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{isSelected}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 选中时，显示文字。未选中时，隐藏文字 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isSelected<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>haha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个checkbox的全选和反选" tabindex="-1"><a class="header-anchor" href="#多个checkbox的全选和反选"><span>多个checkbox的全选和反选</span></a></h3>
<p>现在有多个checkbox的item在一个数组中，另外还有一个“全选”的checkbox按钮。</p>
<p><strong>点击全选按钮，让子item全部选中</strong>：</p>
<p>采用 watch 监听全选按钮，然后改变子item。</p>
<p><strong>当子item全部被选中时，触发全选按钮</strong>：</p>
<p>采用 computed 计算子item 的状态，存放到变量 allChecked 中，然后用 watch 监听 allChecked 的值。</p>
<p>参考链接：</p>
<ul>
<li><a href="https://segmentfault.com/q/1010000014514160/a-1020000014514452" target="_blank" rel="noopener noreferrer">问Vue.js 如何在 data 里含数组的情况下，监听数组内指定属性的变化？</a></li>
</ul>
</div></template>


