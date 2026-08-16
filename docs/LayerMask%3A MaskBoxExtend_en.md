# Documentation
- Class name: LayerMask: MaskBoxExtend
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_box
    - The crop_box input is used by this node during execution.
    - Comfy dtype: BOX
    - Python dtype: object
- top_extend
    - The top_extend input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bottem_extend
    - The bottem_extend input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- left_extend
    - The left_extend input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- right_extend
    - The right_extend input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- x_percent
    - The x_percent output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_percent
    - The y_percent output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- x
    - The x output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- crop_box
    - The crop_box output is produced by this node.
    - Comfy dtype: BOX
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
