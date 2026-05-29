# Documentation
- Class name: CR_RandomShapePattern
- Category: Comfyroll/Graphics/Shape
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_RandomShapePattern is a node that generates pattern images composed of randomly placed shapes. It provides a creative method for producing visually diverse and structured patterns, suitable for artistic expression or data visualization purposes. The node leverages randomness to select shapes, colors, and positions, ensuring each output is unique.

# Input types
## Required
- width
    - Width determines the horizontal extent of the output image. This is a critical parameter as it defines the overall scale of the pattern and the size of individual shapes within it.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical dimension of the generated image, affecting the vertical spacing and arrangement of shapes within the pattern.
    - Comfy dtype: INT
    - Python dtype: int
- num_rows
    - Number of rows determines the vertical structure of the pattern grid, influencing the distribution of shapes along the height of the image.
    - Comfy dtype: INT
    - Python dtype: int
- num_cols
    - Number of columns specifies the horizontal structure of the pattern grid, determining the distribution of shapes across the width of the image.
    - Comfy dtype: INT
    - Python dtype: int
- color1
    - Color1 is one of two colors used to randomly fill shapes within the pattern. It contributes to the overall color scheme and visual contrast of the generated image.
    - Comfy dtype: COLORS
    - Python dtype: str
- color2
    - Color2 is the second color option used to fill shapes in the pattern. It is used alongside Color1 to create diverse and visually appealing color combinations.
    - Comfy dtype: COLORS
    - Python dtype: str
## Optional
- color1_hex
    - Color1 Hex allows the use of a custom hex color value for Color1, providing greater flexibility in color selection for shapes.
    - Comfy dtype: STRING
    - Python dtype: str
- color2_hex
    - Color2 Hex provides a method to specify a custom hex color value for Color2, enhancing the node's ability to produce a wide variety of color combinations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - Image output is the primary result of the node, displaying a pattern image composed of randomly placed shapes with varying colors and sizes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL link to the documentation page for additional help and information regarding the node's usage and functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
