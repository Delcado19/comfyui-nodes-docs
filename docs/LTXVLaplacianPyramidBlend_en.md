# Documentation
- Class name: LTXVLaplacianPyramidBlend
- Category: Lightricks/utility
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Blend two images seamlessly using Laplacian pyramid blending.

# Input types
## Required
- image_a
    - First source image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_b
    - Second source image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Blend mask (white = image_a, black = image_b).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- trim_to_shortest
    - Trim image_a, image_b, and mask to the shortest sequence length before blending.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask_low_res_dilation
    - Downscale the mask to long side 64, dilate it spatially, then resize it back before blending.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
