# Documentation
- Class name: MaskFix+
- Category: essentials/mask
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Essential nodes that are weirdly missing from ComfyUI core. With few exceptions they are new features and not commodities.

# Input types
## Required
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- erode_dilate
    - The erode_dilate input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- fill_holes
    - The fill_holes input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- remove_isolated_pixels
    - The remove_isolated_pixels input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- smooth
    - The smooth input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- blur
    - The blur input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/cubiq/ComfyUI_essentials)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
