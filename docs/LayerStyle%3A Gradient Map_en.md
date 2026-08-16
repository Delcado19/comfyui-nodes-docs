# Documentation
- Class name: LayerStyle: Gradient Map
- Category: 😺dzNodes/LayerStyle
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- start_color
    - The start_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- mid_color
    - The mid_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- end_color
    - The end_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- mid_point
    - The mid_point input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- opacity
    - The opacity input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- layer_mask
    - The layer_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- gradient
    - The gradient output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
