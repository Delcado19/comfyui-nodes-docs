# Documentation
- Class name: LayerMask: SegformerUltraV3
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
- segformer_model
    - The segformer_model input is used by this node during execution.
    - Comfy dtype: LS_SEGFORMER_MODEL
    - Python dtype: object
- segformer_setting
    - The segformer_setting input is used by this node during execution.
    - Comfy dtype: LS_SEGFORMER_SETTING
    - Python dtype: object
- detail_method
    - The detail_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detail_erode
    - The detail_erode input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- detail_dilate
    - The detail_dilate input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- black_point
    - The black_point input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- white_point
    - The white_point input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- process_detail
    - The process_detail input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- max_megapixels
    - The max_megapixels input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

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
