# Documentation
- Class name: CR_ColorBars
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ColorBars node is designed to generate a visualization of color bars with customizable parameters. It allows users to specify the orientation, frequency, and colors of the bars, providing a versatile tool for creating patterns or testing display devices. This node contributes to the overall workflow by offering a simple method to produce and manipulate color bar patterns.

# Input types
## Required
- mode
    - The Mode parameter determines the type of color bars to generate. It is essential for setting the initial style of the pattern and influences the overall appearance of the output.
    - Comfy dtype: COMBO['2-color']
    - Python dtype: str
- width
    - The Width parameter sets the width of the color bar pattern. It is an important aspect of the node's functionality as it directly affects the dimensions of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The Height parameter defines the height of the color bar pattern. Similar to Width, it is a key factor in determining the size and proportions of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- color_1
    - The Color1 parameter specifies the first color used in the color bars. It plays a significant role in the visual outcome of the pattern, allowing creative control over the color scheme.
    - Comfy dtype: COLORS
    - Python dtype: str
- color_2
    - The Color2 parameter sets the second color of the color bars. It works in conjunction with Color1 to create contrast that enhances the visual impact of the pattern.
    - Comfy dtype: COLORS
    - Python dtype: str
- orientation
    - The Direction parameter determines the orientation in which the color bars are arranged. It is a fundamental setting that dictates the layout of the pattern.
    - Comfy dtype: COMBO['vertical', 'horizontal', 'diagonal', 'alt_diagonal']
    - Python dtype: str
- bar_frequency
    - The Bar Frequency parameter controls the frequency of the color bars. It is an important factor in determining the density and spacing of the bars within the pattern.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- offset
    - The Offset parameter adjusts the starting position of the color bars, allowing fine-tuning of the pattern's alignment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color1_hex
    - The Color1 Hex parameter allows users to input a custom hex color value for the first color, providing greater flexibility and precision in color selection.
    - Comfy dtype: STRING
    - Python dtype: str
- color2_hex
    - The Color2 Hex parameter enables users to specify a custom hex color value for the second color, enhancing the node's ability to produce a wide range of color combinations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The Image output provides the color bar pattern generated as an image. It is the primary result of the node's execution and is essential to the node's purpose.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a link to the documentation for further assistance and guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
