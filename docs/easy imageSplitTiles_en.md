# Documentation
- Class name: easy imageSplitTiles
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- overlap_ratio
    - The overlap_ratio input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- overlap_offset
    - The overlap_offset input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- tiles_rows
    - The tiles_rows input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- tiles_cols
    - The tiles_cols input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- norm
    - The norm input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- tiles
    - The tiles output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- overlap
    - The overlap output is produced by this node.
    - Comfy dtype: OVERLAP
    - Python dtype: object
- total
    - The total output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
