
# Documentation
- Class name: ImageFilterBlur
- Category: image/filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageFilterBlur node applies a simple blur effect to an image using specified horizontal and vertical dimensions. This node is designed to soften images by averaging pixels within a defined kernel size to reduce detail and noise. This blurring can be used for various purposes, such as reducing image noise, creating soft effects, or preparing for further image processing.

# Input types
## Required
- images
    - The input image to be blurred. This parameter is essential for defining the source image on which the blur effect will be applied. It directly affects the result and effect of the blur operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size_x
    - Specifies the horizontal size of the blur kernel. This size determines the degree of blur in the horizontal direction. Larger values produce a stronger horizontal blur effect.
    - Comfy dtype: INT
    - Python dtype: int
- size_y
    - Specifies the vertical size of the blur kernel. This size determines the degree of blur in the vertical direction. Larger values produce a stronger vertical blur effect.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image after applying the blur effect. This shows the result of blurring the input image. The output image will retain the original image dimensions, but details will be softened according to the specified blur parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
