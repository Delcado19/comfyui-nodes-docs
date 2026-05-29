# Documentation
- Class name: WAS_Image_Gradient_Map
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Gradient_Map node applies a gradient map to the input image, enabling visually striking and diverse color effects. It leverages the PIL library for image processing and numpy for array operations, providing high flexibility and control. The core function takes an input image and a gradient image, optionally flips them, then produces a result where the gradient is mapped according to the input image's luminance. This is particularly useful for generating smooth color transitions or creating textures that respond to underlying image content.

# Input types
## Required
- image
    - The input image whose colors will be replaced by the gradient. This parameter is critical as it defines the base image that undergoes the gradient mapping process. The node applies the gradient in a way that reflects the luminance values of this input image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- gradient_image
    - The gradient image used to map onto the input image. This image determines the color transitions applied to the input. It should be carefully selected to ensure the desired visual effect is achieved.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- flip_left_right
    - A boolean flag that, when set to true, flips the input and gradient images left-right before processing. This can be used to create a mirrored effect in the final output.
    - Comfy dtype: COMBO['false', 'true']
    - Python dtype: bool

# Output types
- output_image
    - The resulting image after the gradient mapping process. This image shows the input image's luminance values converted into the gradient colors provided by the gradient image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
