# Documentation
- Class name: MaskEdge
- Category: RES4LYF/masks
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

MaskEdge is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- dilation
    - The dilation input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- internal
    - The internal input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- external
    - The external input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- edge_mask
    - The edge_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
