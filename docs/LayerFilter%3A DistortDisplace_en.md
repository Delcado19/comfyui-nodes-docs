# Documentation
- Class name: LayerFilter: DistortDisplace
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
- material_image
    - The material_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- distort_strength
    - The distort_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smoothness
    - The smoothness input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- anti_aliasing
    - The anti_aliasing input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shadow_blend_mode
    - The shadow_blend_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- shadow_strength
    - The shadow_strength input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- highlight_blend_mode
    - The highlight_blend_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- highlight_strength
    - The highlight_strength input is used by this node during execution.
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
- displaced_material
    - The displaced_material output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
