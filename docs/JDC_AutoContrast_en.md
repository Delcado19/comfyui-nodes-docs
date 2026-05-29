# Documentation
- Class name: AutoContrast
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

This node enhances image contrast by stretching the intensity value range of the image to span a desired range, improving the visual appeal and clarity of the image without altering its basic characteristics.

# Input types
## Required
- IMAGE
    - Input image, whose contrast will be adjusted by the node, as the basis for the enhancement process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- cutoff
    - This parameter controls the degree of contrast enhancement applied to the image; higher values lead to more noticeable contrast changes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_value
    - This parameter sets the minimum value in the image that is not affected by the contrast adjustment, preserving details in the shadows.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output is a contrast-enhanced image, suitable for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
