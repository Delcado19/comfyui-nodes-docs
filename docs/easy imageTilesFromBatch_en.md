# Documentation
- Class name: easy imageTilesFromBatch
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- tiles
    - The tiles input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- overlap
    - The overlap input is used by this node during execution.
    - Comfy dtype: OVERLAP
    - Python dtype: object
- index
    - The index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- x
    - The x output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
