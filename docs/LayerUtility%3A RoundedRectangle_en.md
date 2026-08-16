# Documentation
- Class name: LayerUtility: RoundedRectangle
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- rounded_rect_radius
    - The rounded_rect_radius input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- anti_aliasing
    - The anti_aliasing input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The top input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bottom
    - The bottom input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- left
    - The left input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- right
    - The right input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- detect
    - The detect input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- obj_ext_top
    - The obj_ext_top input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- obj_ext_bottom
    - The obj_ext_bottom input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- obj_ext_left
    - The obj_ext_left input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- obj_ext_right
    - The obj_ext_right input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- object_mask
    - The object_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_box
    - The crop_box input is used by this node during execution.
    - Comfy dtype: BOX
    - Python dtype: object

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
