# Documentation
- Class name: ClownRegionalConditioning
- Category: RES4LYF/conditioning
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownRegionalConditioning is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- spineless
    - The spineless input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- edge_width
    - The edge_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- cond_regions
    - The cond_regions input is used by this node during execution.
    - Comfy dtype: COND_REGIONS
    - Python dtype: object
- conditioning
    - The conditioning input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- cond_regions
    - The cond_regions output is produced by this node.
    - Comfy dtype: COND_REGIONS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
