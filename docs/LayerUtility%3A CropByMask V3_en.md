# Documentation
- Class name: LayerUtility: CropByMask V3
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
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect
    - The detect input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- top_reserve
    - The top_reserve input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bottom_reserve
    - The bottom_reserve input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- left_reserve
    - The left_reserve input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- right_reserve
    - The right_reserve input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- round_to_multiple
    - The round_to_multiple input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- crop_box
    - The crop_box input is used by this node during execution.
    - Comfy dtype: BOX
    - Python dtype: object

# Output types
- croped_image
    - The croped_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- croped_mask
    - The croped_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_box
    - The crop_box output is produced by this node.
    - Comfy dtype: BOX
    - Python dtype: object
- box_preview
    - The box_preview output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
