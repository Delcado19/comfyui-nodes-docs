# Documentation
- Class name: CreateRectMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

CreateRectMask node generates a rectangular mask based on specified parameters. It calculates mask corner coordinates considering measurement mode (percent or pixels), rectangle origin, and provided dimensions. The node is flexible, allowing customization of mask position and size relative to the applied image. It also provides an option to copy image size for dynamic mask creation.

# Input types
## Required
- mode
    - The mode parameter determines the measurement unit for mask dimensions. It can be 'percent' for percentage-based coordinates, or 'pixels' for absolute pixel values.
    - Comfy dtype: str
    - Python dtype: str
- origin
    - The origin parameter determines the reference point for calculating the mask position. It can be one of 'topleft', 'bottomleft', 'topleft', or 'bottomright'.
    - Comfy dtype: str
    - Python dtype: str
- x
    - The x parameter specifies the horizontal position of the mask start point. It is used with the mode and origin to determine the mask position.
    - Comfy dtype: float
    - Python dtype: float
- y
    - The y parameter specifies the vertical position of the mask start point. It works with the x parameter and other settings to establish the mask coordinates.
    - Comfy dtype: float
    - Python dtype: float
- width
    - The width parameter sets the width of the mask. This is a key dimension that, along with height, defines the mask shape and coverage area.
    - Comfy dtype: float
    - Python dtype: float
- height
    - The height parameter sets the vertical extent of the mask. It is crucial in determining the overall size of the mask and the area it covers.
    - Comfy dtype: float
    - Python dtype: float
- image_width
    - The image_width parameter defines the width of the image to which the mask will be applied. If mode is set to 'percent', it is important to ensure correct scaling of mask dimensions.
    - Comfy dtype: int
    - Python dtype: int
- image_height
    - The image_height parameter defines the height of the image. Similar to image_width, it plays a similar role in scaling mask dimensions based on image size.
    - Comfy dtype: int
    - Python dtype: int
## Optional
- copy_image_size
    - The optional copy_image_size parameter allows the mask to adopt the dimensions of the provided image. This is useful for creating masks with dynamic sizes based on the applied image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor

# Output types
- mask
    - The output mask is a binary image representing the rectangular area defined by the input parameters. It is a key component for various image processing tasks such as object segmentation or masking.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
