# Documentation
- Class name: EmptyImage
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The EmptyImage node is designed to generate blank images with specified dimensions and colors. It serves as a foundational component in image processing workflows, providing a blank canvas for subsequent operations. This node is essential in scenarios requiring a starting image, such as creating placeholders or initializing image data structures.

# Input types
## Required
- width
    - The 'width' parameter determines the width of the generated image in pixels. It is a critical factor in defining the spatial dimensions of the image, directly impacting the overall structure of the image and its potential applications in downstream tasks.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter specifies the vertical extent of the image in pixels. Together with the width, it determines the resolution of the image, which is crucial for ensuring compatibility with various display devices and processing requirements.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- batch_size
    - The 'batch_size' parameter indicates the number of images generated in a single operation. It is particularly useful for processing multiple images simultaneously, improving efficiency in batch processing scenarios.
    - Comfy dtype: INT
    - Python dtype: int
- color
    - The 'color' parameter allows specifying the color of the image. It accepts an integer representing a color in RGB format, enabling the creation of images with a desired uniform background color.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The 'image' output is the primary result of the EmptyImage node. It represents the generated blank image with defined dimensions and color. This output is significant as it lays the foundation for further image manipulation and analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
