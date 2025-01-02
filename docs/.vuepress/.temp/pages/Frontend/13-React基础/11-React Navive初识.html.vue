<template><div><h2 id="搭建开发环境" tabindex="-1"><a class="header-anchor" href="#搭建开发环境"><span>搭建开发环境</span></a></h2>
<p>官方文档：<a href="https://reactnative.cn/docs/getting-started.html" target="_blank" rel="noopener noreferrer">https://reactnative.cn/docs/getting-started.html</a></p>
<h3 id="安装node、homebrew、watchman" tabindex="-1"><a class="header-anchor" href="#安装node、homebrew、watchman"><span>安装Node、homebrew、Watchman</span></a></h3>
<p>安装 homebrew：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装 watchman：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">brew install watchman</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Watchman则是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。</p>
<h3 id="安装-react-native-的命令行工具-react-native-cli" tabindex="-1"><a class="header-anchor" href="#安装-react-native-的命令行工具-react-native-cli"><span>安装 React Native 的命令行工具（react-native-cli）</span></a></h3>
<p>安装 react-native-cli：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">npm install -g react-native-cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>React Native 的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。</p>
<h3 id="创建新项目" tabindex="-1"><a class="header-anchor" href="#创建新项目"><span>创建新项目</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">react-native init MyApp --version 0.44.3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="编译并运行-react-native-应用" tabindex="-1"><a class="header-anchor" href="#编译并运行-react-native-应用"><span>编译并运行 React Native 应用</span></a></h3>
<p>在 ios 模拟器上运行：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">react-native run-ios</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="调试" tabindex="-1"><a class="header-anchor" href="#调试"><span>调试</span></a></h2>
<p>官网文档：<a href="https://reactnative.cn/docs/debugging.html" target="_blank" rel="noopener noreferrer">https://reactnative.cn/docs/debugging.html</a></p>
<h3 id="访问-app-内的开发菜单" tabindex="-1"><a class="header-anchor" href="#访问-app-内的开发菜单"><span>访问 App 内的开发菜单</span></a></h3>
<p>如果是在 iOS 模拟器中运行，还可以按下<code v-pre>Command + D</code>快捷键，Android 模拟器对应的则是Command⌘ + M（windows 上可能是 F1 或者 F2），或是直接在命令行中运行adb shell input keyevent 82来发送菜单键命令。</p>
</div></template>


