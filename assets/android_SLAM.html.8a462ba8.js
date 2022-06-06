import{_ as d,r as a,o as s,c as r,a as e,d as l,e as i,b as t}from"./app.61034baf.js";const c={},v=i(`<h1 id="\u5B89\u5353slam\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5353slam\u5E94\u7528" aria-hidden="true">#</a> \u5B89\u5353slam\u5E94\u7528</h1><h2 id="\u4F9D\u8D56\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u5E93" aria-hidden="true">#</a> \u4F9D\u8D56\u5E93</h2><h3 id="\u6DFB\u52A0realsense\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0realsense\u5E93" aria-hidden="true">#</a> \u6DFB\u52A0realsense\u5E93</h3><p>\u5728app\u4E2D\u7684<code>build.gradle</code>\u4E2D\u6DFB\u52A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//The lines below add librealsense to the application&#39;s dependencies
configurations {
    downloadHeader
    downloadSo
}

dependencies {
    def version = &#39;2.+&#39;
    downloadSo &#39;com.intel.realsense:librealsense:&#39; + version + &#39;@aar&#39;
    implementation &#39;com.intel.realsense:librealsense:&#39; + version + &#39;@aar&#39;
    downloadHeader &#39;com.intel.realsense:librealsense:&#39; + version + &#39;@zip&#39;
}

task extractHeaders(type: Sync) {
    dependsOn configurations.downloadHeader
    from { configurations.downloadHeader.collect { zipTree(it) } }
    into &quot;$projectDir/src/main/cpp/include&quot;
}


task extractSo(type: Sync) {
    dependsOn configurations.downloadSo
    from { configurations.downloadSo.collect { zipTree(it) } }
    include(&quot;jni/**&quot;)
    into &quot;$buildDir/&quot;
}

preBuild.dependsOn(extractHeaders)
preBuild.dependsOn(extractSo)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>settings.gradle</code>\u4E2D\u6DFB\u52A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>repositories {
        maven{
            url &quot;https://egiintel.jfrog.io/artifactory/librealsense&quot;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>CMakeLists.txt</code>\u4E2D\u6DFB\u52A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6DFB\u52A0realsense\u5E93
include_directories(&quot;\${CMAKE_CURRENT_SOURCE_DIR}/include&quot;)
add_library(realsense2 SHARED IMPORTED)
set_target_properties(realsense2 PROPERTIES IMPORTED_LOCATION \${CMAKE_CURRENT_SOURCE_DIR}/../../../build/jni/\${ANDROID_ABI}/librealsense2.so)

# \u5F15\u7528realsense2\u5E93
target_link_libraries(androidslam realsense2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6B65gradle\u5E76\u6D4B\u8BD5\uFF0C\u5728native-lib.cpp\u4E2D\u5F15\u5165realsense\u5E76\u8F93\u51FA\u7248\u672C\u53F7\uFF0C\u8FD0\u884C\u5DE5\u7A0B\u67E5\u770B\u662F\u5426\u62A5\u9519</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#include &quot;librealsense2/rs.hpp&quot;

extern &quot;C&quot;
JNIEXPORT jstring JNICALL
Java_com_example_kotlinndk_Activity_realsenseVersion(JNIEnv *env, jobject thiz) {
    return (*env).NewStringUTF(RS2_API_VERSION_STR);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u4E9B\u5468\u8FB9\u95EE\u9898\uFF1A\u5B89\u535312\u9700\u8981\u8BBE\u7F6Eandroid\uFF1Aexport=false\uFF0C\u5F00\u53D1\u7684\u65F6\u5019\u628Amaxsdk\u8BBE\u7F6E\u4E3A29\u5373\u53EF</p><h3 id="\u6DFB\u52A0opencv\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0opencv\u5E93" aria-hidden="true">#</a> \u6DFB\u52A0opencv\u5E93</h3>`,13),o={href:"https://github.com/VlSomers/native-opencv-android-template",target:"_blank",rel:"noopener noreferrer"},u=t("\u53C2\u8003\u94FE\u63A5"),m=i(`<h3 id="\u6DFB\u52A0open3d\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0open3d\u5E93" aria-hidden="true">#</a> \u6DFB\u52A0open3d\u5E93</h3><p>\u628A\u751F\u6210\u597D\u7684\u5E93\u5168\u90E8\u653E\u5165app-libs\u6587\u4EF6\u5939\u4E2D</p><p>app\u7684<code>build.gradle</code>\u4E2D\u6DFB\u52A0\u4F9D\u8D56</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    implementation fileTree(dir: &#39;libs&#39;, include: [&#39;*.jar&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0cmake\u8DEF\u5F84\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> externalNativeBuild {
            cmake {
                arguments &quot;-DOPEN3D_PATH=C:\\\\Users\\\\mo\\\\Desktop\\\\AndroidSLAM\\\\app\\\\libs&quot;
            }
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app\u7684<code>build.gradle</code>\u4E2D\u6DFB\u52A0\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># copy shared libraries to the libs folder
# you&#39;ll need to add them to the source set so Gradle copies them:
# (see https://developer.android.com/studio/projects/gradle-external-native-builds#jniLibs)

android {
    ...
    sourceSets {
     main {
       jniLibs.srcDirs = [&#39;libs&#39;]
     }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>CMakeLists.txt</code>\u4E2D\u6DFB\u52A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if(NOT OPEN3D_PATH)
    message(FATAL_ERROR &quot;Open3D path not specified&quot;)
endif()
set(open3d-abi-path \${OPEN3D_PATH}/open3d-\${ANDROID_ABI})
# find lib/cmake/Open3D/Open3DConfig.cmake
find_package(Open3D 0.7.0 REQUIRED PATHS \${open3d-abi-path} NO_DEFAULT_PATH NO_CMAKE_FIND_ROOT_PATH)
# Open3D_LIBRARIES only contains &quot;Open3D&quot; when built as a shared lib
# so we don&#39;t have to add 3rd party libs to the interface
find_library(open3d-lib Open3D PATHS \${Open3D_LIBRARY_DIRS} NO_DEFAULT_PATH NO_CMAKE_FIND_ROOT_PATH)
if(NOT open3d-lib)
    message(FATAL_ERROR &quot;Open3D library not found&quot;)
endif()
file(COPY \${open3d-lib} DESTINATION \${CMAKE_SOURCE_DIR}/libs/\${ANDROID_ABI})
# Open3D gives us non-existing directories
# CMake doesn&#39;t allow adding those as interface include directories
foreach(dir \${Open3D_INCLUDE_DIRS})
    if(NOT EXISTS \${dir})
        list(REMOVE_ITEM Open3D_INCLUDE_DIRS \${dir})
    endif()
endforeach()

add_library(Open3D SHARED IMPORTED)
set_target_properties(Open3D PROPERTIES
        IMPORTED_LOCATION \${open3d-lib})
# You can&#39;t directly add interface properties to imported libraries on CMake &lt; 3.11
# Android Studio 3.4.1 ships with CMake 3.10.2
# this is a workaround
# (see https://gitlab.kitware.com/cmake/cmake/issues/15689)
set_property(TARGET Open3D APPEND PROPERTY INTERFACE_INCLUDE_DIRECTORIES \${Open3D_INCLUDE_DIRS})
target_include_directories(Open3D INTERFACE \${Open3D_INCLUDE_DIRS})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728native-lib\u4E2D\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#include &quot;Open3D/Open3D.h&quot;
{
    return (*env).NewStringUTF(OPEN3D_VERSION);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0astra\u5E93-\u5965\u6BD4\u4E2D\u5149astra-s" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0astra\u5E93-\u5965\u6BD4\u4E2D\u5149astra-s" aria-hidden="true">#</a> \u6DFB\u52A0astra\u5E93\uFF08\u5965\u6BD4\u4E2D\u5149astra s\uFF09</h3><p>\u590D\u5236arm64\u5E93\u5230libs</p><p>app\u7684<code>build.gradle</code>\u4E2D\u6DFB\u52A0\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    implementation fileTree(dir: &#39;libs&#39;, include: [&#39;*.aar&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0orbec\u5E93-\u5965\u6BD4\u4E2D\u5149astra" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0orbec\u5E93-\u5965\u6BD4\u4E2D\u5149astra" aria-hidden="true">#</a> \u6DFB\u52A0orbec\u5E93\uFF08\u5965\u6BD4\u4E2D\u5149astra +\uFF09</h3><h2 id="\u83B7\u53D6\u6DF1\u5EA6\u76F8\u673A\u7684\u89C6\u9891\u6D41" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6DF1\u5EA6\u76F8\u673A\u7684\u89C6\u9891\u6D41" aria-hidden="true">#</a> \u83B7\u53D6\u6DF1\u5EA6\u76F8\u673A\u7684\u89C6\u9891\u6D41</h2><h3 id="\u8BBE\u5907\u68C0\u6D4B\u4EE5\u53CA\u8BBE\u5907\u8FA8\u8BC6id" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5907\u68C0\u6D4B\u4EE5\u53CA\u8BBE\u5907\u8FA8\u8BC6id" aria-hidden="true">#</a> \u8BBE\u5907\u68C0\u6D4B\u4EE5\u53CA\u8BBE\u5907\u8FA8\u8BC6ID</h3><p>\u8BBE\u5907\u901A\u8FC7usbmanager\u67E5\u8BE2\u5230\u7684\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>device.getInterface(0).name.toString()

- &quot;ORBBEC Close Depth Sensor&quot;  \u5965\u6BD4\u4E2D\u5149Astra S  
- Realsense D455
- Realsense L515
- **\u5965\u6BD4\u4E2D\u5149Astra+**

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="realsense\u6444\u50CF\u5934" tabindex="-1"><a class="header-anchor" href="#realsense\u6444\u50CF\u5934" aria-hidden="true">#</a> realsense\u6444\u50CF\u5934</h3><p>sdk\u8BFB\u53D6\u6444\u50CF\u5934</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
pipline-waitfornextframe()
- depth
- rgb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5965\u6BD4\u4E2D\u5149\u6444\u50CF\u5934" tabindex="-1"><a class="header-anchor" href="#\u5965\u6BD4\u4E2D\u5149\u6444\u50CF\u5934" aria-hidden="true">#</a> \u5965\u6BD4\u4E2D\u5149\u6444\u50CF\u5934</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="uvc\u4E32\u6D41" tabindex="-1"><a class="header-anchor" href="#uvc\u4E32\u6D41" aria-hidden="true">#</a> UVC\u4E32\u6D41</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>opencv - \u8BFB\u53D6\u6444\u50CF\u5934\u6D41-zed 2i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u70B9\u4E91\u52A0\u8F7D\u548C\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u70B9\u4E91\u52A0\u8F7D\u548C\u6E32\u67D3" aria-hidden="true">#</a> \u70B9\u4E91\u52A0\u8F7D\u548C\u6E32\u67D3</h2><h3 id="rgbd\u6E32\u67D3\u70B9\u4E91" tabindex="-1"><a class="header-anchor" href="#rgbd\u6E32\u67D3\u70B9\u4E91" aria-hidden="true">#</a> rgbd\u6E32\u67D3\u70B9\u4E91</h3><p>realsense demo</p><p>threejs android\u4F5C\u4E3A\u53C2\u8003\uFF0C\u9700\u8981\u6839\u636Ethreejs\u91CD\u6784</p><h2 id="icp-registration" tabindex="-1"><a class="header-anchor" href="#icp-registration" aria-hidden="true">#</a> ICP registration</h2><p>open3d docs</p><h3 id="odometry-imu" tabindex="-1"><a class="header-anchor" href="#odometry-imu" aria-hidden="true">#</a> odometry IMU</h3><h3 id="odometry-\u65E0imu" tabindex="-1"><a class="header-anchor" href="#odometry-\u65E0imu" aria-hidden="true">#</a> odometry \u65E0IMU</h3>`,36);function b(p,h){const n=a("ExternalLinkIcon");return s(),r("div",null,[v,e("p",null,[e("a",o,[u,l(n)])]),m])}var x=d(c,[["render",b],["__file","android_SLAM.html.vue"]]);export{x as default};
