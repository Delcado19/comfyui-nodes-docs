# Documentation
- Class name: imageSizeBySide
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The node classifies images based on the specified side length standard and provides a simplified resolution value according to the user's preference for the longer or shorter side of the image.

# Input types
## Required
- image
    - The image parameter is necessary because it is the main input for the node operation. It affects the entire process by determining the dimensions that will be evaluated and compared to the specified side.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- side
    - The side parameter determines the criterion for resolution evaluation, either focusing on the longest side or the shortest side of the image. It significantly affects the outcome of the node's functionality.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- resolution
    - The resolution output provides a single integer value representing the image dimension selected based on the side parameter. It is the core result of the node operation, summarizing the image size according to the user's preference.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
