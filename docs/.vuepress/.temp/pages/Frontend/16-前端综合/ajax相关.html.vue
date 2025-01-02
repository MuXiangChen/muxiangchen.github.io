<template><div><h3 id="jsonp-ajax" tabindex="-1"><a class="header-anchor" href="#jsonp-ajax"><span>jsonp ajax</span></a></h3>
<p>ajax跨域访问是一个老问题了，解决方法很多，比较常用的是JSONP方法，JSONP方法是一种非官方方法，而且这种方法只支持GET方式，不如POST方式安全。</p>
<p>意思是说，如果后台返回的数据类型是jsonp，那么前端的请求方式只能是get，不能是post。</p>
<p>如果跨域使用POST方式，可以使用创建一个隐藏的iframe来实现，与ajax上传图片原理一样，但这样会比较麻烦。</p>
<p>因此，在<strong>前端使用post方法，数据类型是json</strong>的情况下，如果想跨域的话，可以通过设置Access-Control-Allow-Origin来实现跨域访问比较简单。</p>
<p>解决办法：</p>
<p>在 Response header中加入这三行：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"> response.headers['Access-Control-Allow-Origin'] = '*'</span>
<span class="line">response.headers['Access-Control-Allow-Methods'] = 'POST'</span>
<span class="line">response.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>
<ul>
<li><a href="https://blog.csdn.net/fdipzone/article/details/46390573/" target="_blank" rel="noopener noreferrer">ajax 设置Access-Control-Allow-Origin实现跨域访问</a></li>
</ul>
</div></template>


