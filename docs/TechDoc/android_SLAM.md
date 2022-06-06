# 安卓slam应用

## 依赖库

### 添加realsense库

在app中的`build.gradle`中添加
```
//The lines below add librealsense to the application's dependencies
configurations {
    downloadHeader
    downloadSo
}

dependencies {
    def version = '2.+'
    downloadSo 'com.intel.realsense:librealsense:' + version + '@aar'
    implementation 'com.intel.realsense:librealsense:' + version + '@aar'
    downloadHeader 'com.intel.realsense:librealsense:' + version + '@zip'
}

task extractHeaders(type: Sync) {
    dependsOn configurations.downloadHeader
    from { configurations.downloadHeader.collect { zipTree(it) } }
    into "$projectDir/src/main/cpp/include"
}


task extractSo(type: Sync) {
    dependsOn configurations.downloadSo
    from { configurations.downloadSo.collect { zipTree(it) } }
    include("jni/**")
    into "$buildDir/"
}

preBuild.dependsOn(extractHeaders)
preBuild.dependsOn(extractSo)
```

在`settings.gradle`中添加

```
repositories {
        maven{
            url "https://egiintel.jfrog.io/artifactory/librealsense"
        }
    }
```

在`CMakeLists.txt`中添加

```
# 添加realsense库
include_directories("${CMAKE_CURRENT_SOURCE_DIR}/include")
add_library(realsense2 SHARED IMPORTED)
set_target_properties(realsense2 PROPERTIES IMPORTED_LOCATION ${CMAKE_CURRENT_SOURCE_DIR}/../../../build/jni/${ANDROID_ABI}/librealsense2.so)

# 引用realsense2库
target_link_libraries(androidslam realsense2)
```

同步gradle并测试，在native-lib.cpp中引入realsense并输出版本号，运行工程查看是否报错

```
#include "librealsense2/rs.hpp"

extern "C"
JNIEXPORT jstring JNICALL
Java_com_example_kotlinndk_Activity_realsenseVersion(JNIEnv *env, jobject thiz) {
    return (*env).NewStringUTF(RS2_API_VERSION_STR);
}

```

一些周边问题：安卓12需要设置android：export=false，开发的时候把maxsdk设置为29即可

### 添加opencv库

[参考链接](https://github.com/VlSomers/native-opencv-android-template)

### 添加open3d库

把生成好的库全部放入app-libs文件夹中

app的`build.gradle`中添加依赖

```
    implementation fileTree(dir: 'libs', include: ['*.jar'])
```
添加cmake路径变量
```
 externalNativeBuild {
            cmake {
                arguments "-DOPEN3D_PATH=C:\\Users\\mo\\Desktop\\AndroidSLAM\\app\\libs"
            }
        }

```
app的`build.gradle`中添加路径
```
# copy shared libraries to the libs folder
# you'll need to add them to the source set so Gradle copies them:
# (see https://developer.android.com/studio/projects/gradle-external-native-builds#jniLibs)

android {
    ...
    sourceSets {
     main {
       jniLibs.srcDirs = ['libs']
     }
    }
}
```

在`CMakeLists.txt`中添加

```
if(NOT OPEN3D_PATH)
    message(FATAL_ERROR "Open3D path not specified")
endif()
set(open3d-abi-path ${OPEN3D_PATH}/open3d-${ANDROID_ABI})
# find lib/cmake/Open3D/Open3DConfig.cmake
find_package(Open3D 0.7.0 REQUIRED PATHS ${open3d-abi-path} NO_DEFAULT_PATH NO_CMAKE_FIND_ROOT_PATH)
# Open3D_LIBRARIES only contains "Open3D" when built as a shared lib
# so we don't have to add 3rd party libs to the interface
find_library(open3d-lib Open3D PATHS ${Open3D_LIBRARY_DIRS} NO_DEFAULT_PATH NO_CMAKE_FIND_ROOT_PATH)
if(NOT open3d-lib)
    message(FATAL_ERROR "Open3D library not found")
endif()
file(COPY ${open3d-lib} DESTINATION ${CMAKE_SOURCE_DIR}/libs/${ANDROID_ABI})
# Open3D gives us non-existing directories
# CMake doesn't allow adding those as interface include directories
foreach(dir ${Open3D_INCLUDE_DIRS})
    if(NOT EXISTS ${dir})
        list(REMOVE_ITEM Open3D_INCLUDE_DIRS ${dir})
    endif()
endforeach()

add_library(Open3D SHARED IMPORTED)
set_target_properties(Open3D PROPERTIES
        IMPORTED_LOCATION ${open3d-lib})
# You can't directly add interface properties to imported libraries on CMake < 3.11
# Android Studio 3.4.1 ships with CMake 3.10.2
# this is a workaround
# (see https://gitlab.kitware.com/cmake/cmake/issues/15689)
set_property(TARGET Open3D APPEND PROPERTY INTERFACE_INCLUDE_DIRECTORIES ${Open3D_INCLUDE_DIRS})
target_include_directories(Open3D INTERFACE ${Open3D_INCLUDE_DIRS})
```

在native-lib中测试

```
#include "Open3D/Open3D.h"
{
    return (*env).NewStringUTF(OPEN3D_VERSION);
}

```


### 添加astra库（奥比中光astra s）

复制arm64库到libs

app的`build.gradle`中添加路径

```
    implementation fileTree(dir: 'libs', include: ['*.aar'])
```

### 添加orbec库（奥比中光astra +）





## 获取深度相机的视频流

### 设备检测以及设备辨识ID

设备通过usbmanager查询到的信息

```
device.getInterface(0).name.toString()

- "ORBBEC Close Depth Sensor"  奥比中光Astra S  
- Realsense D455
- Realsense L515
- **奥比中光Astra+**

```





### realsense摄像头
sdk读取摄像头
```

pipline-waitfornextframe()
- depth
- rgb

```

### 奥比中光摄像头

```

```

### UVC串流

```
opencv - 读取摄像头流-zed 2i
```



## 点云加载和渲染

### rgbd渲染点云

realsense demo

threejs android作为参考，需要根据threejs重构

## ICP registration 

open3d docs

### odometry IMU


### odometry 无IMU
