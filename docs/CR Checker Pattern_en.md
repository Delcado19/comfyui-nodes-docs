# Documentation
- Class name: CR_CheckerPattern
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_CheckerPattern is a node for generating checkerboard patterns with customizable parameters. It allows users to define the pattern mode, output image dimensions, and colors used in the pattern. The node's functionality centers on creating visual grid pattern representations with alternating colors, providing a versatile tool for graphic design and visualization.

# Input types
## Required
- mode
    - The mode parameter determines the pattern layout, which can be 'regular' standard checkerboard or 'stepped' offset pattern. This choice significantly affects the node's visual output, allowing different design options.
    - Comfy dtype: MODE
    - Python dtype: str
- width
    - The width parameter sets the width of the generated image in pixels. It is a key factor in determining the overall size and resolution of the pattern, affecting how the pattern is displayed and used in various applications.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the generated image in pixels. Together with width, it defines the canvas dimensions, which is crucial for the pattern's proportions and aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- color_1
    - Color_1 is used to define the first color of the checkerboard pattern. It plays an important role in the overall appearance of the pattern, allowing creative control over the design's aesthetics.
    - Comfy dtype: COLOR
    - Python dtype: str
- color_2
    - Color_2 is used to define the second color of the checkerboard pattern. It works with Color_1 to create the contrasting color blocks characteristic of the checkerboard design.
    - Comfy dtype: COLOR
    - Python dtype: str
- grid_frequency
    - The grid_frequency parameter indicates the number of squares per row/column in the checkerboard pattern. It is a key determinant of pattern density and individual square size.
    - Comfy dtype: INT
    - Python dtype: int
- step
    - The step parameter is used in 'stepped' mode to control the offset of the squares. It affects the complexity of the pattern and the visual rhythm of the checkerboard.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- color1_hex
    - The color1_hex parameter allows using a custom hex color value for Color_1. This provides additional flexibility for users who need specific color shades not available in predefined color options.
    - Comfy dtype: STRING
    - Python dtype: str
- color2_hex
    - The color2_hex parameter allows using a custom hex color value for Color_2. It gives users the ability to fine-tune the secondary color of the pattern to meet their design requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output provides the generated checkerboard pattern as an image file. This is the primary result of the node's operation and the core purpose of the node in creating visual patterns.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a URL link to the node's documentation page for more guidance and information. This is a useful resource for users seeking detailed information about the node's functionality and usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
