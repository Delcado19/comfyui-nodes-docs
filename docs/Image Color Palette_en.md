# Documentation
- Class name: WAS_Image_Color_Palette
- Category: WAS Suite/Image/Analyze
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Color_Palette node is designed to analyze and process image data to generate a color palette. It accepts an image as input and returns a transformed image along with a list of color palettes extracted from the original image. This node is particularly suitable for application scenarios that require extracting and representing color data from images, such as design, image editing, or any process that requires image color data.

# Input types
## Required
- image
    - The input image from which to generate the color palette. This image will be processed by the node to extract color information and create a visual representation of the palette.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
## Optional
- colors
    - The number of colors to include in the generated palette. It provides a way to control the granularity of the color scheme derived from the image.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The display mode of the color palette. It determines how the palette is visually presented, offering options such as chart or back-to-back arrangement.
    - Comfy dtype: COMBO['Chart', 'back_to_back']
    - Python dtype: str

# Output types
- image
    - The transformed image, in which the color palette is visually embedded or changed according to the input image and provided parameters.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- color_palettes
    - A list of color palettes extracted from the input image. Each entry in the list represents a color, expressed as a hexadecimal string code.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
