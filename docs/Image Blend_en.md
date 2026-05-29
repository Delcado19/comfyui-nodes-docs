# Documentation
- Class name: WAS_Image_Blend
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'image_blend' method of the WAS_Image_Blend node is designed to seamlessly blend two images. It uses the blend_percentage parameter to control the degree of blending, creating a visually harmonious composite image that reflects a balance between the input images.

# Input types
## Required
- image_a
    - The first image to be blended. It plays a crucial role in determining the initial visual context of the blended image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- image_b
    - The second image to be blended with the first. It contributes to the final appearance by overlaying visual elements on top of the base image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- blend_percentage
    - The blend_percentage parameter determines the visibility of image_b in the final blend. It is a floating-point value ranging from 0.0 to 1.0, where 0.0 means only image_a is visible, and 1.0 means only image_b is visible.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output is a blended image that visually combines elements of the two input images according to the specified blend_percentage.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
