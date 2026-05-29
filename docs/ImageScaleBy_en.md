# Documentation
- Class name: ImageScaleBy
- Category: image/upscaling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageScaleBy node aims to improve the resolution of an input image by applying various upsampling methods. It allows users to choose from a range of scaling techniques to achieve the desired result, focusing on improving overall image quality without altering the original content.

# Input types
## Required
- image
    - The image parameter is crucial for the operation of the node, as it is the input to be upsampled. It directly affects the execution process and the quality of the final upsampled image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- upscale_method
    - The upscale_method parameter determines the algorithm used for image upsampling. It is essential for achieving the desired visual effect and performance.
    - Comfy dtype: STRING
    - Python dtype: str
- scale_by
    - The scale_by parameter defines the scaling factor of the image, and is a key determinant of the final image size. It significantly affects the execution and result of the node.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- upscaled_image
    - The upscaled_image output represents the processing result of the node, showing the version of the input image upsampled using the selected method.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
