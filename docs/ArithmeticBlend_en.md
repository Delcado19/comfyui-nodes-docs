# Documentation
- Class name: ArithmeticBlend
- Category: postprocessing/Blends
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This node achieves compositing of two images through arithmetic operations, creating visual effects via the selected blend_mode to fuse image1 and image2.

# Input types
## Required
- image1
    - The first image to be blended is crucial for the arithmetic operation and affects the final output result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The second image participating in the blending process interacts with image1 and determines the characteristics of the resulting blended image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blend_mode
    - The mode of arithmetic operation determines how image1 and image2 are combined, significantly affecting the final visual result.
    - Comfy dtype: COMBO['add', 'subtract', 'difference']
    - Python dtype: str

# Output types
- blended_image
    - The generated image after the arithmetic blending process contains the visual effects of the selected blend mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
