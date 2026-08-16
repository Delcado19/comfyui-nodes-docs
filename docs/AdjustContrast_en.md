# Documentation
- Class name: AdjustContrast
- Category: image/adjustments
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Adjust the contrast of an image.

# Input types
## Required
- images
    - Image to process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- factor
    - Contrast factor. 1.0 = no change, <1.0 = less contrast, >1.0 = more contrast.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - Processed images
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
