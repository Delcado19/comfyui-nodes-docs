# Documentation
- Class name: CR_StyleBars
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_StyleBars is a node that generates bar‑style visual patterns for various graphic applications. It provides a way to create bar styles and direction ranges using parameters such as pattern, width, height, bar style, and frequency for customization. The node’s functionality focuses on producing a stylized image output that can be used for pattern design or as a visual aid in other contexts.

# Input types
## Required
- mode
    - The pattern parameter determines the visual pattern type the node will generate. It can be set to 'color bars', 'sin wave', or 'gradient bars', each producing a distinct visual effect. This parameter is critical because it defines the basic appearance of the output image.
    - Comfy dtype: COMBO['color bars', 'sin wave', 'gradient bars']
    - Python dtype: str
- width
    - The width parameter specifies the width of the generated image in pixels. It is an important aspect of the node’s functionality because it directly affects the size of the output image, influencing its visual presentation.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the generated image in pixels. Like width, it is a key determinant of image size, playing an important role in how the final pattern is displayed.
    - Comfy dtype: INT
    - Python dtype: int
- bar_style
    - The bar style parameter defines the color mapping applied to the bars in the generated image. It affects the visual appeal of the bars, allowing various styles to be represented.
    - Comfy dtype: STYLES
    - Python dtype: str
- orientation
    - The direction parameter determines whether the bars in the generated image are arranged vertically or horizontally. This choice influences the layout and flow of the pattern within the image.
    - Comfy dtype: COMBO['vertical', 'horizontal']
    - Python dtype: str
- bar_frequency
    - The bar frequency parameter controls how frequently bars appear in the generated image. It is an important factor in determining the density and spacing of the bars, contributing to the overall visual texture.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The image output provides a generated pattern as an image. It is the primary result of the node’s operation, essential for the pattern’s subsequent use in graphic design or other applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL link to documentation for further assistance or guidance on effectively using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
