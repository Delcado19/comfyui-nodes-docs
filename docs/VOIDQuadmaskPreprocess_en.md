# Documentation
- Class name: VOIDQuadmaskPreprocess
- Category: image/mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

VOID Quadmask Preprocessor is a ComfyUI node registered by `comfy_extras.nodes_void`. The live metadata did not provide a longer description.

# Input types
## Required
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- dilate_width
    - Dilation radius for the primary mask region (0 = no dilation)
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- quadmask
    - The quadmask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
