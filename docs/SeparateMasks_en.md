# Documentation
- Class name: SeparateMasks
- Category: KJNodes/masking
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Separates a mask into multiple masks based on the size of the connected components.

# Input types
## Required
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- size_threshold_width
    - The size_threshold_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- size_threshold_height
    - The size_threshold_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_poly_points
    - The max_poly_points input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
