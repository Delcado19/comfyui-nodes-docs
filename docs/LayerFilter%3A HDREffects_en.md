# Documentation
- Class name: LS_HDREffects
- Category: 😺dzNodes/LayerFilter
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

HDR Effect

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- hdr_intensity
    - HDR intensity.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Optional values: 0.0-5.0

- shadow_intensity
    - Shadow intensity.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Optional values: 0.0-1.0

- highlight_intensity
    - Highlight intensity.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Optional values: 0.0-1.0

- gamma_intensity
    - Gamma intensity.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Optional values: 0.0-1.0

- contrast
    - Contrast.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Optional values: 0.0-1.0

- enhance_color
    - Enhanced color.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Optional values: 0.0-1.0


# Output types

- image
    - Processed image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
