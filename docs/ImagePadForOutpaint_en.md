# Documentation
- Class name: ImagePadForOutpaint
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ImagePadForOutpaint node expands image borders, useful for outpainting tasks. It adds a specified number of pixels to each side and optionally applies feathering to smoothly blend new edges with the original image.

# Input types
## Required
- image
- Image parameter is the input image to be padded. It is crucial because it determines the content to be expanded.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- left
- left parameter specifies the number of pixels to add on the left side. It determines the final width of the expanded image.
    - Comfy dtype: INT
    - Python dtype: int
- top
- top parameter specifies the number of pixels to add on the top side. It controls vertical expansion of the image.
    - Comfy dtype: INT
    - Python dtype: int
- right
- right parameter specifies the number of pixels to add on the right side. It affects the final width of the expanded image.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
- bottom parameter specifies the number of pixels to add on the bottom side. It is essential for controlling horizontal expansion of the image.
    - Comfy dtype: INT
    - Python dtype: int
- feathering
- feathering parameter controls the smoothness of the transition between the original area and the newly added area. Higher values create a more gradual transition.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- new_image
- new_image output is the result of the expansion, showing the original image padded on each side by the specified amounts.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
- mask output is a binary image that separates the original image area from the newly added region, primarily for blending purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
