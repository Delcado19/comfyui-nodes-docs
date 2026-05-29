# Documentation
- Class name: CR_RadialGradient
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_RadialGradient node is designed to generate radial gradient images. It provides a seamless way to gradient from a start color to an end color over a specified width and height, while allowing customization of the radial center and gradient distance.

# Input types
## Required
- width
    - The width parameter defines the width of the output image. It is crucial because it determines the horizontal extent of the gradient pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the output image. It is critical because it determines the vertical extent of the gradient pattern.
    - Comfy dtype: INT
    - Python dtype: int
- start_color
    - The start color parameter specifies the initial color of the radial gradient. It plays an important role in determining the overall appearance of the gradient effect.
    - Comfy dtype: COLORS
    - Python dtype: str
- end_color
    - The end color parameter determines the final color of the radial gradient. It is important in setting the destination color in the gradient transition.
    - Comfy dtype: COLORS
    - Python dtype: str
## Optional
- radial_center_x
    - The radial center x parameter adjusts the horizontal position of the radial gradient center. It affects the distribution of colors on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- radial_center_y
    - The radial center y parameter sets the vertical position of the radial gradient center. It affects how the gradient color spreads across the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gradient_distance
    - The gradient distance parameter controls the spread of the gradient, determining the speed of color transition from the start color to the end color.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_color_hex
    - The start color hex parameter allows setting a custom hex color as the start color, providing flexibility for precise color specification.
    - Comfy dtype: STRING
    - Python dtype: str
- end_color_hex
    - The end color hex parameter allows specifying a custom hex color for the end color, providing control over the exact color used at the gradient endpoint.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output provides the generated radial gradient image, which is the main result of the node execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_Help
    - The show_Help output provides a link to the documentation for further guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
