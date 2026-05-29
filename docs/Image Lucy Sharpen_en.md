# Documentation
- Class name: WAS_Lucy_Sharpen
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Lucy_Sharpen node aims to enhance image clarity and detail by applying a sharpening filter. It uses an iterative process to refine the image, making edges and details clearer without introducing significant artifacts. This node is particularly useful for improving visual quality of images that may be blurry or soft, helping to produce sharper, more well-defined output.

# Input types
## Required
- images
    - ‘images’ parameter is crucial for node operation as it specifies input images to be sharpened. Sharpening effect quality is directly affected by initial state of these images, making this parameter essential for achieving desired results.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- iterations
    - ‘iterations’ parameter determines number of times sharpening process is applied to each image channel. More iterations can produce more pronounced effect but increase computational load. This optional parameter allows users to control sharpening strength.
    - Comfy dtype: INT
    - Python dtype: int
- kernel_size
    - ‘kernel_size’ parameter defines size of convolution kernel used in sharpening process. Larger kernel size can capture more context but may introduce more blur. This optional parameter affects balance between sharpness and smoothness in output images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sharpened_images
    - ‘sharpened_images’ output parameter contains resulting images after applying sharpening process. Compared to input images, these images are expected to have better clarity and detail, with enhanced edges and textures.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
