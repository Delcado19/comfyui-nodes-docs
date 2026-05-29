# Documentation
- Class name: CR_OverlayTransparentImage
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_OverlayTransparentImage node is designed to blend a transparent overlay image with a background image. It adjusts the overlay's transparency, position, rotation, and scaling to achieve the desired visual effect, offering a wide range of creative possibilities in image processing.

# Input types
## Required
- back_image
    - The background image on which the overlay image will be placed. It serves as the canvas for the composite image creation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- overlay_image
    - The image that will be overlaid with transparency onto the background. It is the primary visual element that will be manipulated in the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- transparency
    - The transparency level applied to the overlay image, where 0.0 means fully opaque and 1.0 means fully transparent.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- offset_x
    - The horizontal offset applied to the overlay image from its center position, allowing precise placement.
    - Comfy dtype: INT
    - Python dtype: int
- offset_y
    - The vertical offset applied to the overlay image from its center position, allowing precise placement.
    - Comfy dtype: INT
    - Python dtype: int
- rotation_angle
    - The angle by which the overlay image will be rotated, in degrees, providing a way to orient the image as needed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- overlay_scale_factor
    - The factor by which the overlay image will be scaled; values greater than 1.0 enlarge the image, while values less than 1.0 shrink the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - The final composite image with the overlay applied to the background, reflecting all modifications made through the node parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
