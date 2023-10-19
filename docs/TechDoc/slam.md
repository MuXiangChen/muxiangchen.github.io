# Dense3D reconstruction and SLAM

## 引言

slam负责计算外参，使用内参和深度图生成当前帧点云，通过外参和点云得到模型

## Open3d

- cmake版本

3.20+

- python版本问题

3.7 3.8 3.9 3.10

- gcc版本问题

9 10

- build命令

需要realsene支持kinect支持

``` cmake
cmake -DBUILD_SHARED_LIBS=ON -DBUILD_LIBREALSENSE=ON -DBUILD_CUDA_MODULE=ON -DBUILD_GUI=ON -DBUILD_AZURE_KINECT=ON ..
``` 

## 摄像头
### realsense

- Python

- C++

### Azure Kinect

- C++
 
### 奥比中光

- C++

### 自制摄像头

- C++

## SLAM

- C++

## Reconstruction
