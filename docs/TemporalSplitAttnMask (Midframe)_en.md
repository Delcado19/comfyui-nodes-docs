# Documentation
- Class name: TemporalSplitAttnMask (Midframe)
- Category: RES4LYF/masks
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

TemporalSplitAttnMask (Midframe) is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- self_attn_midframe
    - The self_attn_midframe input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cross_attn_midframe
    - The cross_attn_midframe input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- self_attn_invert
    - The self_attn_invert input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- cross_attn_invert
    - The cross_attn_invert input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- frames
    - The frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- temporal_mask
    - The temporal_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
