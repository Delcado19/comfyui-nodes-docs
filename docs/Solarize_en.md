# Documentation
- Class name: Solarize
- Category: postprocessing/Color Adjustments
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This node aims to adjust the color of an image by inverting colors above a certain threshold, providing a solarization effect that enhances visibility and contrast.

# Input types
## Required
- image
    - The image parameter is crucial as it is the main input for the solarization process. It determines the source material for color adjustment.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- threshold
    - The threshold parameter acts as a decision boundary for the solarization process, determining which color tones are inverted to enhance image contrast.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- solarized_image
    - The output is the solarized image, which has undergone a color inversion process to enhance its visual appeal and clarity.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
