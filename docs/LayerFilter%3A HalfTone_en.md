# Documentation
- Class name: LayerFilter: HalfTone
- Category: 😺dzNodes/LayerFilter
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- dot_size
    - The dot_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- angle
    - The angle input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shape
    - The shape input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dot_color
    - The dot_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- background_color
    - The background_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- anti_aliasing
    - The anti_aliasing input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask
    - The mask input is used by this node during execution.
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
