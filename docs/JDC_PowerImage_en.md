# Documentation
- Class name: PowerImage
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

This node enhances images by adjusting brightness and contrast according to specified power factors and modes, allowing manipulation of visual elements to meet specific aesthetic or analytical requirements.

# Input types
## Required
- IMAGE
    - The source image to be processed by the node, serving as the base input for all enhancement operations.
    - Comfy dtype: PIL.Image
    - Python dtype: PIL.Image
- power_of
    - Controls the degree of enhancement applied to the image; higher values result in more pronounced effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - Determines the type of enhancement to apply, such as brightening, darkening, or emphasizing both aspects of the image simultaneously.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- IMAGE
    - The processed image with enhancements applied, ready for further use or analysis.
    - Comfy dtype: PIL.Image
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
