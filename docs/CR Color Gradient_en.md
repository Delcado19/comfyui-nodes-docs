# Documentation
- Class name: CR_ColorGradient
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ColorGradient node is designed to generate a smooth color gradient between two specified colors, spanning the canvas either horizontally or vertically. It allows customization of the gradient's transition and distance, providing users with a versatile tool for creating visually appealing gradients for various applications.

# Input types
## Required
- width
    - The width parameter determines the width of the gradient canvas. It is a key factor in setting the output image size, influencing the overall scale of the gradient pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical size of the canvas, defining the canvas size together with the width, and directly impacts the display of the gradient.
    - Comfy dtype: INT
    - Python dtype: int
- start_color
    - The start color parameter specifies the initial color of the gradient. It is a fundamental input that sets the tone for the beginning of the color transition.
    - Comfy dtype: COLORS
    - Python dtype: str
- end_color
    - The end color parameter determines the final color of the gradient. It works together with the start color to create a seamless transition between the two colors.
    - Comfy dtype: COLORS
    - Python dtype: str
- orientation
    - The direction parameter determines whether the gradient is rendered horizontally or vertically. This choice significantly changes the orientation of the color transition across the canvas.
    - Comfy dtype: COMBO['vertical', 'horizontal']
    - Python dtype: str
## Optional
- linear_transition
    - The linear transition parameter controls the midpoint of the gradient transition, allowing fine-tuning of the gradient's spread across the canvas.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gradient_distance
    - The gradient distance parameter adjusts the length over which the gradient transition occurs, affecting the smoothness and range of the color blend.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_color_hex
    - The start color hex parameter allows the use of a custom hexadecimal color value as the start color of the gradient, providing greater flexibility in color selection.
    - Comfy dtype: STRING
    - Python dtype: str
- end_color_hex
    - The end color hex parameter allows specifying a custom hexadecimal color value for the end color of the gradient, enhancing the user's ability to define the color range.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The image output provides the generated color gradient as an image, which can be used for further processing or display purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The help output provides a link to documentation for further guidance on how to use the node and understand its functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
