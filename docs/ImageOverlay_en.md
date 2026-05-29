# Documentation
- Class name: ImageOverlay
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The ImageOverlay node class seamlessly integrates a foreground image onto a background image at a specified opacity level, creating a composite image that combines visual elements from both sources.

# Input types
## Required
- background_image
    - The background image serves as the base canvas for the overlay application. It is essential for establishing the context and dimensions of the final composite image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- foreground_image
    - The foreground image is the element to be overlaid onto the background. Its visual characteristics and position are crucial for achieving the desired effect in the composite image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- opacity
    - Opacity determines the degree to which the foreground image blends with the background image. This is a critical parameter that affects the overall appearance and transparency of the composite image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result_img
    - result_img represents the final composite image, where the foreground image has been overlaid onto the background image according to the specified opacity.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
