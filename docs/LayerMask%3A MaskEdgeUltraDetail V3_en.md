# Documentation
- Class name: LayerMask: MaskEdgeUltraDetail V3
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
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mask_grow
    - The mask_grow input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- fix_gap
    - The fix_gap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- fix_threshold
    - The fix_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_edge_erode
    - The mask_edge_erode input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mask_edge_dilate
    - The mask_edge_dilate input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- transparent_trimap_erode
    - The transparent_trimap_erode input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- transparent_trimap_dilate
    - The transparent_trimap_dilate input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- trimap_blur
    - The trimap_blur input is used by this node during execution.
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
- spread_mask_grow
    - The spread_mask_grow input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_megapixels
    - The max_megapixels input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- transparent_trimap
    - The transparent_trimap input is used by this node during execution.
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
