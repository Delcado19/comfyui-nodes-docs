# Documentation
- Class name: LayerUtility: ImageBlendAdvance V3
- Category: 😺dzNodes/LayerUtility
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
- x_percent
    - The x_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_percent
    - The y_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mirror
    - The mirror input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotate
    - The rotate input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- transform_method
    - The transform_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- anti_aliasing
    - The anti_aliasing input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
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
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
