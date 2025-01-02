<template><div><h1 id="dense3d-reconstruction-and-slam" tabindex="-1"><a class="header-anchor" href="#dense3d-reconstruction-and-slam"><span>Dense3D reconstruction and SLAM</span></a></h1>
<h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h2>
<p>slam负责计算外参，使用内参和深度图生成当前帧点云，通过外参和点云得到模型</p>
<h2 id="open3d" tabindex="-1"><a class="header-anchor" href="#open3d"><span>Open3d</span></a></h2>
<ul>
<li>cmake版本</li>
</ul>
<p>3.20+</p>
<ul>
<li>python版本问题</li>
</ul>
<p>3.7 3.8 3.9 3.10</p>
<ul>
<li>gcc版本问题</li>
</ul>
<p>9 10</p>
<ul>
<li>build命令</li>
</ul>
<p>需要realsene支持kinect支持</p>
<div class="language-cmake line-numbers-mode" data-highlighter="prismjs" data-ext="cmake" data-title="cmake"><pre v-pre><code><span class="line">cmake -DBUILD_SHARED_LIBS=<span class="token boolean">ON</span> -DBUILD_LIBREALSENSE=<span class="token boolean">ON</span> -DBUILD_CUDA_MODULE=<span class="token boolean">ON</span> -DBUILD_GUI=<span class="token boolean">ON</span> -DBUILD_AZURE_KINECT=<span class="token boolean">ON</span> ..</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="摄像头" tabindex="-1"><a class="header-anchor" href="#摄像头"><span>摄像头</span></a></h2>
<h3 id="realsense" tabindex="-1"><a class="header-anchor" href="#realsense"><span>realsense</span></a></h3>
<ul>
<li>
<p>Python</p>
</li>
<li>
<p>C++</p>
</li>
</ul>
<h3 id="azure-kinect" tabindex="-1"><a class="header-anchor" href="#azure-kinect"><span>Azure Kinect</span></a></h3>
<ul>
<li>C++</li>
</ul>
<h3 id="奥比中光" tabindex="-1"><a class="header-anchor" href="#奥比中光"><span>奥比中光</span></a></h3>
<ul>
<li>C++</li>
</ul>
<h3 id="自制摄像头" tabindex="-1"><a class="header-anchor" href="#自制摄像头"><span>自制摄像头</span></a></h3>
<ul>
<li>C++</li>
</ul>
<h2 id="slam" tabindex="-1"><a class="header-anchor" href="#slam"><span>SLAM</span></a></h2>
<ul>
<li>C++</li>
</ul>
<h2 id="reconstruction" tabindex="-1"><a class="header-anchor" href="#reconstruction"><span>Reconstruction</span></a></h2>
</div></template>


