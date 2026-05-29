# Documentation
- Class name: GradientImage
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The GradientImage node generates a gradient image from a specified start color to an end color. It integrates seamlessly with image processing libraries to create visually appealing gradient effects for various applications such as backgrounds or design elements.

# Input types
## Required
- width
    - The width parameter determines the width of the generated gradient image. It is a key factor in setting the image dimensions, which in turn affects the overall visual layout and design.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical dimension of the gradient image. It works together with the width to determine the overall image size, which is essential for fitting the image into a specific design space.
    - Comfy dtype: INT
    - Python dtype: int
- start_color_hex
    - The start_color_hex parameter specifies the hex color code at the start of the gradient. It is a fundamental input that determines the starting point of the color transition in the gradient image.
    - Comfy dtype: STRING
    - Python dtype: str
- end_color_hex
    - The end_color_hex parameter defines the hex color code at the end of the gradient. It is crucial for determining the final color in the gradient, thus completing the color transition effect.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output provides the generated gradient image, which can be used for various purposes such as visual presentations or graphic design projects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output includes a mask image that can be used for selective editing or applying specific effects to particular regions of the gradient image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
