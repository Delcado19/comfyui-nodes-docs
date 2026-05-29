# Documentation
- Class name: imageSizeByLongerSide
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class categorizes images based on the longer dimension, providing a simplified approach to image analysis and processing by focusing on the longer side of the image.

# Input types
## Required
- image
    - The image parameter is critical as it is the primary input for node operations. It influences the entire processing pipeline by determining the basis for the node's output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Output types
- resolution
    - The resolution output provides the length of the longer side of the image, which is essential for subsequent image processing tasks and analysis.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
