# Documentation
- Class name: imagePixelPerfect
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class aims to optimize image resolution by calculating the ideal number of pixels that maintain the image's aspect ratio within a specified size. It emphasizes preserving the visual integrity of the image during resizing.

# Input types
## Required
- image
    - The image parameter is critical because it is the source of the node's operation. It influences the entire process by determining the initial dimensions and quality that the node will process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- resize_mode
    - The resize mode parameter affects how the image is adjusted, either maximizing or minimizing the aspect ratio to fit given constraints. This is important for achieving the desired visual outcome after resizing.
    - Comfy dtype: COMBO[ResizeMode.RESIZE.value, ResizeMode.INNER_FIT.value, ResizeMode.OUTER_FIT.value]
    - Python dtype: Union[str, ResizeMode]

# Output types
- resolution
    - The resolution output provides the calculated ideal number of pixels, which is the result of the node's processing. It is important because it determines the final size of the scaled image.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
