# Documentation
- Class name: LayerColor: ColorofShadowHighlightV2
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- shadow_brightness
    - The shadow_brightness input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shadow_saturation
    - The shadow_saturation input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shadow_hue
    - The shadow_hue input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shadow_level_offset
    - The shadow_level_offset input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shadow_range
    - The shadow_range input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highlight_brightness
    - The highlight_brightness input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highlight_saturation
    - The highlight_saturation input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highlight_hue
    - The highlight_hue input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- highlight_level_offset
    - The highlight_level_offset input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- highlight_range
    - The highlight_range input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
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
