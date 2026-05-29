# Documentation
- Class name: MosaicExpandImage
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MosaicExpandImage node aims to enhance the visual appeal of an image by creating a mosaic effect around the image borders. It intelligently expands the image in a non-uniform, artistic manner, producing results that are visually striking while maintaining the integrity of the original image content.

# Input types
## Required
- image
    - The image parameter is the core input of the node, representing the original image that will be artistically expanded with the mosaic effect. It is crucial for the operation of the node as it determines the base content to be transformed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- left
    - The left parameter specifies the number of mosaic blocks to add on the left side of the image. It plays a key role in determining the width of the left expansion area, contributing to the overall aesthetic of the final mosaic effect.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The top parameter determines the number of mosaic blocks to add on the top of the image. It is important in shaping the height of the top expansion area, affecting the overall mosaic pattern created.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The right parameter sets the number of mosaic blocks to add on the right side of the image. It is essential for controlling the width of the right mosaic border, influencing the final visual effect of the mosaic expansion.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The bottom parameter determines the number of mosaic blocks to include at the bottom of the image. It is a key factor in establishing the height of the bottom mosaic border, which is crucial for the overall mosaic design.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_img
    - The result_img output parameter represents the final image with the mosaic expansion applied. It is the result of the node's processing, showcasing the artistic enhancement achieved through the mosaic effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output parameter provides a binary mask for distinguishing the original image area from the mosaic expansion area. It is very important in applications that require differentiation between the original and expanded regions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
