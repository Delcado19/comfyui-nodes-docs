# Documentation
- Class name: LayerStyle: DropShadow V3
- Category: 😺dzNodes/LayerStyle
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- layer_image
    - The layer_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- blend_mode
    - The blend_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- opacity
    - The opacity input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- distance_x
    - The distance_x input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- distance_y
    - The distance_y input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- grow
    - The grow input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- blur
    - The blur input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shadow_color
    - The shadow_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- background_image
    - The background_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- layer_mask
    - The layer_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
