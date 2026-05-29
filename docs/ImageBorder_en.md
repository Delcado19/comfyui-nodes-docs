# Documentation
- Class name: ImageBorder
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The ImageBorder node is designed to add decorative borders to images, enhancing their visual appeal. It supports various border styles such as checkerboard, blur, or solid colors, allowing customization to suit different design needs.

# Input types
## Required
- image
    - The image parameter is required as it is the base input for applying the border. It directly affects the appearance of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- border_width
    - The border_width parameter defines the thickness of the border to be added around the image, which significantly affects the overall aesthetics of the bordered image.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - The border_color parameter allows users to specify the color of the border, which can be a solid color, checkerboard pattern, or blur effect for a more refined look.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output image includes the original image with the newly applied border, which can be used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
