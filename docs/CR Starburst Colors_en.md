# Documentation
- Class name: CR_StarburstColors
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_StarburstColors node is designed to generate visually appealing starburst patterns with customizable color and geometry properties. It provides a creative way to create complex designs that can be used in various graphics applications.

# Input types
## Required
- width
    - The width parameter determines the width of the generated image, which is crucial for setting the overall size of the starburst pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical extent of the image, working together with the width to establish the canvas size for the starburst pattern.
    - Comfy dtype: INT
    - Python dtype: int
- num_triangles
    - The number of triangles determines the complexity and detail of the starburst pattern, affecting the overall visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- color_1
    - The first color parameter allows users to select the primary color of the starburst, which significantly influences the final aesthetics of the pattern.
    - Comfy dtype: COLORS
    - Python dtype: str
- color_2
    - The second color parameter is used to define a secondary color in the starburst, providing a contrasting element in the design.
    - Comfy dtype: COLORS
    - Python dtype: str
- center_x
    - center_x determines the x-coordinate of the starburst center, which is crucial for positioning the pattern within the image.
    - Comfy dtype: INT
    - Python dtype: int
- center_y
    - center_y sets the y-coordinate of the starburst center, ensuring the pattern is vertically aligned on the canvas.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_factor
    - The bounding box factor determines the scaling of the starburst pattern, affecting the size of the triangles within the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- rotation
    - Rotation adds a rotational effect to the starburst pattern, allowing dynamic variations in the design.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color1_hex
    - color1_hex is an optional parameter that allows inputting a custom hexadecimal color for the first color of the starburst, providing advanced color customization.
    - Comfy dtype: STRING
    - Python dtype: str
- color2_hex
    - color2_hex is an optional parameter for specifying a custom hexadecimal color for the second color of the starburst, enhancing design flexibility.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output provides the rendered starburst pattern as an image, which can be further processed or displayed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a URL link to documentation for further guidance on how to use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
