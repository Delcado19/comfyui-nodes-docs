# Documentation
- Class name: LumaReferenceNode
- Category: partner/image/Luma
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Holds an image and weight for use with Luma Generate Image node.

# Input types
## Required
- image
    - Image to use as reference.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- weight
    - Weight of image reference.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- luma_ref
    - The luma_ref input is used by this node during execution.
    - Comfy dtype: LUMA_REF
    - Python dtype: object

# Output types
- luma_ref
    - The luma_ref output is produced by this node.
    - Comfy dtype: LUMA_REF
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
