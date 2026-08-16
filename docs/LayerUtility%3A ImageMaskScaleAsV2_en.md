# Documentation
- Class name: LayerUtility: ImageMaskScaleAsV2
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- scale_as
    - The scale_as input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- fit
    - The fit input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- background_color
    - The background_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
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
- original_size
    - The original_size output is produced by this node.
    - Comfy dtype: BOX
    - Python dtype: object
- widht
    - The widht output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
