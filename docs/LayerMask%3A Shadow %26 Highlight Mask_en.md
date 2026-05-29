# Documentation
- Class name: ShadowAndHighlightMask
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate masks for the dark and bright areas of the image.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- shadow_level_offset
    - Offset for shadow selection, larger values include more areas near bright regions into the shadows.
    - Comfy dtype: INT
    - Python dtype: int

- shadow_range
    - Transition range for dark areas.
    - Comfy dtype: FLOAT
    - Python dtype: float

- highlight_level_offset
    - Offset for bright area values; smaller values include more areas close to the shadows in the bright region.
    - Comfy dtype: INT
    - Python dtype: int

- highlight_range
    - Transition range for bright areas.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Optional

- mask
    - Optional input. If provided, only colors within the mask range will be adjusted.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- shadow_mask
    - Shadow mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- highlight_mask
    - Highlight mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
