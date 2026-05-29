
# Documentation
- Class name: ImageContainerInheritanceScale
- Category: image/container
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageContainerInheritanceScale node is designed to resize images based on specified width and height scaling factors. It not only adjusts the dimensions of the input image but also applies additional image processing operations through subsequent nodes, such as color adjustment. This node plays a critical role in image preprocessing and post-processing, enabling flexible image resizing and basic color correction.

# Input types
## Required
- images
    - The input image that needs to be scaled. This parameter is essential as it provides the raw data for the scaling operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- scale_width
    - The scaling factor for the input image width. This directly affects the final image width.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_height
    - The scaling factor for the input image height. This directly affects the final image height.
    - Comfy dtype: FLOAT
    - Python dtype: float
- red
    - The red component applied to the image. This affects the overall color balance of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - The green component applied to the image. This affects the overall color balance of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - The blue component applied to the image. This affects the overall color balance of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The alpha (transparency) value applied to the image. This determines the opacity of the output image.
    - Comfy dtype: FLOAT
    - Python dtype: int
- method
    - The method used for scaling and applying color adjustments. This parameter determines the specific algorithm or technique used.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The node's output is one or a set of images that have been scaled and color-adjusted according to the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
