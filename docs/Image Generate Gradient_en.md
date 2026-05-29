# Documentation
- Class name: WAS_Image_Generate_Gradient
- Category: WAS Suite/Image/Generate
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Generate_Gradient node generates seamless gradient textures from a set of given color stops. It intelligently handles transitions between colors to ensure smooth gradients that can be tiled without visible seams. This is particularly useful for generating background textures for applications like games or 3D modeling that require seamless patterns.

# Input types
## Required
- gradient_stops
    - The gradient_stops parameter defines the color stops used to create the gradient. Each stop is specified as a percentage of the gradient length, followed by an RGB color value, separated by a colon. This parameter is critical for determining the colors and distribution of the gradient.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- width
    - The width parameter sets the width of the generated gradient image. It is an important parameter as it determines the horizontal resolution of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the generated gradient image. It is an important parameter as it determines the vertical resolution of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- direction
    - The direction parameter specifies the direction of the gradient. It can be 'horizontal' or 'vertical', affecting the layout of the color gradient in the output image.
    - Comfy dtype: COMBO['horizontal', 'vertical']
    - Python dtype: str
- tolerance
    - The tolerance parameter adjusts the blending at the edges of the gradient. Higher tolerance values can produce smoother transitions between colors but may result in a less distinct gradient.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output of the WAS_Image_Generate_Gradient node is a seamless gradient image that can be used as a texture. It is important as it provides the final visual result of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
