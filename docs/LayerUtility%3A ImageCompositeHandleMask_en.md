# Documentation
- Class name: LayerUtility: ImageCompositeHandleMask
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- background_image
    - The background_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- layer_image
    - The layer_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
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
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotate
    - The rotate input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mirror
    - The mirror input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- anti_aliasing
    - The anti_aliasing input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- handle_detect
    - The handle_detect input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- top_handle
    - The top_handle input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bottom_handle
    - The bottom_handle input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- left_handle
    - The left_handle input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- right_handle
    - The right_handle input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- handle_mask_outradius
    - The handle_mask_outradius input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
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
- layer_bbox_mask
    - The layer_bbox_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- handle_mask
    - The handle_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- handle_crop_box
    - The handle_crop_box output is produced by this node.
    - Comfy dtype: BOX
    - Python dtype: object
- handle_overrange
    - The handle_overrange output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
