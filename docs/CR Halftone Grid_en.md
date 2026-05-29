# Documentation
- Class name: CR_HalftoneGrid
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_HalftoneGrid is a node for creating halftone grid patterns with customizable parameters. It allows users to set the grid's width, height, dot style, frequency, and position, providing a versatile way to generate visually appealing patterns for graphic design purposes. The node's functionality centers on producing halftone effects, an image rendering method that uses dots of varying sizes and spacing to simulate different grayscale shades.

# Input types
## Required
- width
    - Width determines the horizontal extent of the halftone grid. This is a critical parameter as it directly affects the overall size and proportion of the generated pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical size of the grid, which is essential for controlling the vertical dimensions of the pattern and ensuring it fits the desired layout.
    - Comfy dtype: INT
    - Python dtype: int
- dot_style
    - Dot style defines the visual appearance of the dots within the grid, allowing customization of the pattern's aesthetic properties.
    - Comfy dtype: STYLES
    - Python dtype: str
- reverse_dot_style
    - Invert dot style provides an option to invert the dot pattern, creating a mirrored effect that can enhance the visual interest of the grid.
    - Comfy dtype: COMBO['No', 'Yes']
    - Python dtype: str
- dot_frequency
    - Dot frequency controls the number of dots within the grid, affecting the granularity and level of detail in the halftone pattern.
    - Comfy dtype: INT
    - Python dtype: int
- background_color
    - Background color sets the background color of the grid, which can be customized or set to a default color to complement the pattern.
    - Comfy dtype: COLORS
    - Python dtype: str
- x_pos
    - X position determines the horizontal positioning of the dot pattern within the grid, allowing precise control over pattern alignment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_pos
    - Y position sets the vertical positioning of the dot pattern, which is important for aligning the pattern within the vertical space of the grid.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- bg_color_hex
    - Background color hex allows the use of a custom hex color for the grid's background, providing additional flexibility in color selection.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - IMAGE output provides the generated halftone grid pattern as an image, available for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL link to the documentation page for further help and guidance on using the CR_HalftoneGrid node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
