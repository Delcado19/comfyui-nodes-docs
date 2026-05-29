# Documentation
- Class name: CR_DrawShape
- Category: Comfyroll/Graphics/Shape
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_DrawShape is a versatile node designed to generate multiple geometric shapes and allow custom attributes. It emphasizes flexibility in shape creation, enabling users to define size, color, and orientation. The node also modifies the background and applies transformations such as rotation and scaling for customized visual output.

# Input types
## Required
- width
    - Width determines the horizontal range of the shape canvas, affecting the overall scale of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical size of the canvas, together with width defining the canvas dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- shape
    - Shape defines the geometric figure to draw, offering several standard shapes to choose from.
    - Comfy dtype: STRING
    - Python dtype: str
- shape_color
    - Shape color determines the hue of the shape itself, providing visual distinction and aesthetic appeal.
    - Comfy dtype: STRING
    - Python dtype: str
- back_color
    - Background color sets the canvas tone, providing contrast or complementary background for the shape.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- x_offset
    - X offset adjusts the horizontal position of the shape, allowing precise placement on the canvas.
    - Comfy dtype: INT
    - Python dtype: int
- y_offset
    - Y offset modifies the vertical position, giving control over the shape's location on the canvas.
    - Comfy dtype: INT
    - Python dtype: int
- zoom
    - Scale controls the shape's scaling factor, affecting its size on the canvas without changing canvas dimensions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation
    - Rotation applies a degree of rotation to the shape, enhancing its visual dynamics.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - IMAGE output provides the rendered shape as an image for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL to the node documentation for additional guidance and information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
