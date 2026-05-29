# Documentation
- Class name: Equalize
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

This node class aims to enhance contrast by adjusting the image histogram, which improves visual clarity and detail by spreading out pixel intensity values, making the image more suitable for further analysis or visualization, ensuring results are sharper and more visually appealing.

# Input types
## Required
- IMAGE
    - The IMAGE parameter is essential because it provides the input image to be processed by the node. It directly affects the output, determining the quality and appearance of the enhanced image. Without this input, the node cannot perform its intended function.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- IMAGE
    - The output IMAGE represents a processed version of the input with improved contrast and visual clarity. It is a direct result of the node's functionality and is critical for subsequent image analysis or display.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
