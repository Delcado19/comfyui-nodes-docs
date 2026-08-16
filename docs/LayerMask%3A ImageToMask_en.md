# Documentation
- Class name: LayerMask: ImageToMask
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- channel
    - The channel input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- black_point
    - The black_point input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- white_point
    - The white_point input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- gray_point
    - The gray_point input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- invert_output_mask
    - The invert_output_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
