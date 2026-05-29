# Documentation
- Class name: CR_ImagePanel
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImagePanel node combines multiple images into a single image panel according to a specified layout direction. It supports adding borders and outlines to images to enhance visual effects, and allows custom colors. It is suitable for creating image grids or organizing multiple preview images into a single image strip, widely used in image display and layout design.

# Input types
## Required
- image_1
    - The first image to combine, which serves as the foundation for building the image panel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- border_thickness
    - The thickness of the border, used to define the width of the image border, enhancing the visual effect of the image edges.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - The color of the border, allowing users to customize the border color to suit different design needs.
    - Comfy dtype: COLOR
    - Python dtype: str
- outline_thickness
    - The thickness of the outline, defining the width of the image outline, used to enhance the visible boundary of the image.
    - Comfy dtype: INT
    - Python dtype: int
- outline_color
    - The color of the outline, users can customize the outline color to match the design theme.
    - Comfy dtype: COLOR
    - Python dtype: str
- layout_direction
    - The layout direction, determining whether images are combined horizontally or vertically, affecting the layout structure of the final image panel.
    - Comfy dtype: COMBO[horizontal, vertical]
    - Python dtype: str
## Optional
- image_2
    - The second optional image, used to display alongside the first image in the image panel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_3
    - The third optional image, used to display alongside the first two images in the image panel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_4
    - The fourth optional image, used to display alongside the first three images in the image panel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- border_color_hex
    - The hexadecimal value of the border color, providing another way to precisely specify the border color.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The combined image panel, containing the final image composed of all input images combined according to the specified layout direction and style.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - A link to help documentation, through which users can obtain more information on how to use this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
