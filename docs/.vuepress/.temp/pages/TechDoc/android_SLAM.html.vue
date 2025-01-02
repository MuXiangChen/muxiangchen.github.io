<template><div><h1 id="安卓slam应用" tabindex="-1"><a class="header-anchor" href="#安卓slam应用"><span>安卓slam应用</span></a></h1>
<h2 id="依赖库" tabindex="-1"><a class="header-anchor" href="#依赖库"><span>依赖库</span></a></h2>
<h3 id="添加realsense库" tabindex="-1"><a class="header-anchor" href="#添加realsense库"><span>添加realsense库</span></a></h3>
<p>在app中的<code v-pre>build.gradle</code>中添加</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">//The lines below add librealsense to the application's dependencies</span>
<span class="line">configurations {</span>
<span class="line">    downloadHeader</span>
<span class="line">    downloadSo</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">dependencies {</span>
<span class="line">    def version = '2.+'</span>
<span class="line">    downloadSo 'com.intel.realsense:librealsense:' + version + '@aar'</span>
<span class="line">    implementation 'com.intel.realsense:librealsense:' + version + '@aar'</span>
<span class="line">    downloadHeader 'com.intel.realsense:librealsense:' + version + '@zip'</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">task extractHeaders(type: Sync) {</span>
<span class="line">    dependsOn configurations.downloadHeader</span>
<span class="line">    from { configurations.downloadHeader.collect { zipTree(it) } }</span>
<span class="line">    into "$projectDir/src/main/cpp/include"</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">task extractSo(type: Sync) {</span>
<span class="line">    dependsOn configurations.downloadSo</span>
<span class="line">    from { configurations.downloadSo.collect { zipTree(it) } }</span>
<span class="line">    include("jni/**")</span>
<span class="line">    into "$buildDir/"</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">preBuild.dependsOn(extractHeaders)</span>
<span class="line">preBuild.dependsOn(extractSo)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>settings.gradle</code>中添加</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">repositories {</span>
<span class="line">        maven{</span>
<span class="line">            url "https://egiintel.jfrog.io/artifactory/librealsense"</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>CMakeLists.txt</code>中添加</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"># 添加realsense库</span>
<span class="line">include_directories("${CMAKE_CURRENT_SOURCE_DIR}/include")</span>
<span class="line">add_library(realsense2 SHARED IMPORTED)</span>
<span class="line">set_target_properties(realsense2 PROPERTIES IMPORTED_LOCATION ${CMAKE_CURRENT_SOURCE_DIR}/../../../build/jni/${ANDROID_ABI}/librealsense2.so)</span>
<span class="line"></span>
<span class="line"># 引用realsense2库</span>
<span class="line">target_link_libraries(androidslam realsense2)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同步gradle并测试，在native-lib.cpp中引入realsense并输出版本号，运行工程查看是否报错</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#include "librealsense2/rs.hpp"</span>
<span class="line"></span>
<span class="line">extern "C"</span>
<span class="line">JNIEXPORT jstring JNICALL</span>
<span class="line">Java_com_example_kotlinndk_Activity_realsenseVersion(JNIEnv *env, jobject thiz) {</span>
<span class="line">    return (*env).NewStringUTF(RS2_API_VERSION_STR);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一些周边问题：安卓12需要设置android：export=false，开发的时候把maxsdk设置为29即可</p>
<h3 id="添加opencv库" tabindex="-1"><a class="header-anchor" href="#添加opencv库"><span>添加opencv库</span></a></h3>
<p><a href="https://github.com/VlSomers/native-opencv-android-template" target="_blank" rel="noopener noreferrer">参考链接</a></p>
<h3 id="添加open3d库" tabindex="-1"><a class="header-anchor" href="#添加open3d库"><span>添加open3d库</span></a></h3>
<p>把生成好的库全部放入app-libs文件夹中</p>
<p>app的<code v-pre>build.gradle</code>中添加依赖</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">    implementation fileTree(dir: 'libs', include: ['*.jar'])</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>添加cmake路径变量</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"> externalNativeBuild {</span>
<span class="line">            cmake {</span>
<span class="line">                arguments "-DOPEN3D_PATH=C:\\Users\\mo\\Desktop\\AndroidSLAM\\app\\libs"</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app的<code v-pre>build.gradle</code>中添加路径</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"># copy shared libraries to the libs folder</span>
<span class="line"># you'll need to add them to the source set so Gradle copies them:</span>
<span class="line"># (see https://developer.android.com/studio/projects/gradle-external-native-builds#jniLibs)</span>
<span class="line"></span>
<span class="line">android {</span>
<span class="line">    ...</span>
<span class="line">    sourceSets {</span>
<span class="line">     main {</span>
<span class="line">       jniLibs.srcDirs = ['libs']</span>
<span class="line">     }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>CMakeLists.txt</code>中添加</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">if(NOT OPEN3D_PATH)</span>
<span class="line">    message(FATAL_ERROR "Open3D path not specified")</span>
<span class="line">endif()</span>
<span class="line">set(open3d-abi-path ${OPEN3D_PATH}/open3d-${ANDROID_ABI})</span>
<span class="line"># find lib/cmake/Open3D/Open3DConfig.cmake</span>
<span class="line">find_package(Open3D 0.7.0 REQUIRED PATHS ${open3d-abi-path} NO_DEFAULT_PATH NO_CMAKE_FIND_ROOT_PATH)</span>
<span class="line"># Open3D_LIBRARIES only contains "Open3D" when built as a shared lib</span>
<span class="line"># so we don't have to add 3rd party libs to the interface</span>
<span class="line">find_library(open3d-lib Open3D PATHS ${Open3D_LIBRARY_DIRS} NO_DEFAULT_PATH NO_CMAKE_FIND_ROOT_PATH)</span>
<span class="line">if(NOT open3d-lib)</span>
<span class="line">    message(FATAL_ERROR "Open3D library not found")</span>
<span class="line">endif()</span>
<span class="line">file(COPY ${open3d-lib} DESTINATION ${CMAKE_SOURCE_DIR}/libs/${ANDROID_ABI})</span>
<span class="line"># Open3D gives us non-existing directories</span>
<span class="line"># CMake doesn't allow adding those as interface include directories</span>
<span class="line">foreach(dir ${Open3D_INCLUDE_DIRS})</span>
<span class="line">    if(NOT EXISTS ${dir})</span>
<span class="line">        list(REMOVE_ITEM Open3D_INCLUDE_DIRS ${dir})</span>
<span class="line">    endif()</span>
<span class="line">endforeach()</span>
<span class="line"></span>
<span class="line">add_library(Open3D SHARED IMPORTED)</span>
<span class="line">set_target_properties(Open3D PROPERTIES</span>
<span class="line">        IMPORTED_LOCATION ${open3d-lib})</span>
<span class="line"># You can't directly add interface properties to imported libraries on CMake &lt; 3.11</span>
<span class="line"># Android Studio 3.4.1 ships with CMake 3.10.2</span>
<span class="line"># this is a workaround</span>
<span class="line"># (see https://gitlab.kitware.com/cmake/cmake/issues/15689)</span>
<span class="line">set_property(TARGET Open3D APPEND PROPERTY INTERFACE_INCLUDE_DIRECTORIES ${Open3D_INCLUDE_DIRS})</span>
<span class="line">target_include_directories(Open3D INTERFACE ${Open3D_INCLUDE_DIRS})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在native-lib中测试</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#include "Open3D/Open3D.h"</span>
<span class="line">{</span>
<span class="line">    return (*env).NewStringUTF(OPEN3D_VERSION);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加astra库-奥比中光astra-s" tabindex="-1"><a class="header-anchor" href="#添加astra库-奥比中光astra-s"><span>添加astra库（奥比中光astra s）</span></a></h3>
<p>复制arm64库到libs</p>
<p>app的<code v-pre>build.gradle</code>中添加路径</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">    implementation fileTree(dir: 'libs', include: ['*.aar'])</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="添加orbec库-奥比中光astra" tabindex="-1"><a class="header-anchor" href="#添加orbec库-奥比中光astra"><span>添加orbec库（奥比中光astra +）</span></a></h3>
<h2 id="获取深度相机的视频流" tabindex="-1"><a class="header-anchor" href="#获取深度相机的视频流"><span>获取深度相机的视频流</span></a></h2>
<h3 id="设备检测以及设备辨识id" tabindex="-1"><a class="header-anchor" href="#设备检测以及设备辨识id"><span>设备检测以及设备辨识ID</span></a></h3>
<p>设备通过usbmanager查询到的信息</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">device.getInterface(0).name.toString()</span>
<span class="line"></span>
<span class="line">- "ORBBEC Close Depth Sensor"  奥比中光Astra S  </span>
<span class="line">- Realsense D455</span>
<span class="line">- Realsense L515</span>
<span class="line">- **奥比中光Astra+**</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="realsense摄像头" tabindex="-1"><a class="header-anchor" href="#realsense摄像头"><span>realsense摄像头</span></a></h3>
<p>sdk读取摄像头</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"></span>
<span class="line">pipline-waitfornextframe()</span>
<span class="line">- depth</span>
<span class="line">- rgb</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="奥比中光摄像头" tabindex="-1"><a class="header-anchor" href="#奥比中光摄像头"><span>奥比中光摄像头</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="uvc串流" tabindex="-1"><a class="header-anchor" href="#uvc串流"><span>UVC串流</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">opencv - 读取摄像头流-zed 2i</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="点云加载和渲染" tabindex="-1"><a class="header-anchor" href="#点云加载和渲染"><span>点云加载和渲染</span></a></h2>
<h3 id="rgbd渲染点云" tabindex="-1"><a class="header-anchor" href="#rgbd渲染点云"><span>rgbd渲染点云</span></a></h3>
<p>realsense demo</p>
<p>threejs android作为参考，需要根据threejs重构</p>
<h2 id="icp-registration" tabindex="-1"><a class="header-anchor" href="#icp-registration"><span>ICP registration</span></a></h2>
<p>open3d docs</p>
<h3 id="odometry-imu" tabindex="-1"><a class="header-anchor" href="#odometry-imu"><span>odometry IMU</span></a></h3>
<h3 id="odometry-无imu" tabindex="-1"><a class="header-anchor" href="#odometry-无imu"><span>odometry 无IMU</span></a></h3>
</div></template>


