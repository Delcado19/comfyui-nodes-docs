# Documentation
- Class name: WAS_Image_Transpose
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Transpose node is designed to perform image manipulation tasks, specifically transforming images through rotation and resizing. It allows overlaying one image onto another, with configurable output width and height, overlay position, and rotation degree. Additionally, it provides a feathering function to soften the edges of the overlay for more natural blending. This node is essential for creating composite images with precise control over element positioning and appearance.

# Input types
## Required
- image
    - The base image onto which the overlay will be applied. It serves as the canvas for composite image creation. The choice of this image significantly affects the final appearance of the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_overlay
    - The image to be overlaid on the base image. It is manipulated according to the specified parameters to blend seamlessly with the base image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- width
    - The desired width of the output image. It determines the scaling of both the base and overlay images to fit the specified dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The desired height of the output image. Together with the width, it determines the final composite image size.
    - Comfy dtype: INT
    - Python dtype: int
- X
    - The X coordinate of the position where the overlay image is placed on the base image.
    - Comfy dtype: INT
    - Python dtype: int
- Y
    - The Y coordinate of the position where the overlay image is placed on the base image.
    - Comfy dtype: INT
    - Python dtype: int
- rotation
    - The degree of rotation to apply to the overlay image before placing it on the base image.
    - Comfy dtype: INT
    - Python dtype: int
- feathering
    - The amount of feathering applied to the edges of the overlay image for smoother blending with the base image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - The final composite image resulting from the transformation of the base and overlay images according to the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
