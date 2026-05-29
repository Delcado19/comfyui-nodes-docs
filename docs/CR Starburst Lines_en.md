# Documentation
- Class name: CR_StarburstLines
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_StarburstLines node is designed to generate a visually appealing starburst pattern consisting of lines radiating uniformly from a central point. It allows customization of various parameters such as the number of lines, line length, and color to create a unique and symmetrical design.

# Input types
## Required
- width
    - The width parameter determines the width of the generated image. It is essential for setting the overall size of the starburst pattern and ensuring it fits the desired canvas size.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the image, and together with the width, it determines the full canvas size for the starburst pattern.
    - Comfy dtype: INT
    - Python dtype: int
- num_lines
    - The number of lines determines how many lines will form the starburst, affecting the complexity and visual symmetry of the final pattern.
    - Comfy dtype: INT
    - Python dtype: int
- line_length
    - The line length specifies how far each line extends from the center, contributing to the overall visual impact and radial distribution of the starburst.
    - Comfy dtype: FLOAT
    - Python dtype: float
- line_width
    - The line width parameter controls the thickness of each line in the starburst, affecting the prominence and detail of the pattern's appearance.
    - Comfy dtype: INT
    - Python dtype: int
- line_color
    - The line color defines the color of the lines in the starburst, allowing for creative expression and visual contrast in the design.
    - Comfy dtype: COLORS
    - Python dtype: str
- background_color
    - The background color sets the color of the canvas behind the starburst, providing a backdrop that complements the pattern and enhances its visibility.
    - Comfy dtype: COLORS
    - Python dtype: str
- center_x
    - Center x specifies the x-coordinate of the central point from which the starburst lines emanate, affecting the alignment of the pattern on the canvas.
    - Comfy dtype: INT
    - Python dtype: int
- center_y
    - Center y determines the y-coordinate of the starburst center, affecting the vertical positioning of the pattern.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- rotation
    - Rotation allows adjusting the orientation of the starburst pattern by a specified number of degrees, providing control over the pattern's direction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- line_color_hex
    - Line color hex provides a hex color code for customizing the line color, enabling more precise color selection for the starburst lines.
    - Comfy dtype: STRING
    - Python dtype: str
- bg_color_hex
    - Background color hex provides a hex color code for customizing the background color, allowing personalization of the canvas background.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output contains the rendered starburst pattern as an image file, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a link to documentation for additional information and guidance on using the CR_StarburstLines node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
