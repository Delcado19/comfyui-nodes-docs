# Documentation
- Class name: ColorCorrectShadowAndHighlight
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Adjust the colors of the shadows and highlights in the image.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- shadow_brightness
    - Brightness adjustment value for shadows.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Options: {"default": 1, "min": 0.0, "max": 3, "step": 0.01}

- shadow_saturation
    - Saturation adjustment value for shadows.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Options: {"default": 1, "min": 0.0, "max": 3, "step": 0.01}

- shadow_hue
    - Hue adjustment value for shadows.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 0, "min": -255, "max": 255, "step": 1}

- shadow_level_offset
    - Offset for shadow selection, larger values include more areas near bright regions into the shadows.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 0, "min": -99, "max": 99, "step": 1}

- shadow_range
    - Range of shadows.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Options: {"default": 0.25, "min": 0.01, "max": 0.99, "step": 0.01}

- highlight_brightness
    - Brightness adjustment value for highlights.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Options: {"default": 1, "min": 0.0, "max": 3, "step": 0.01}

- highlight_saturation
    - Saturation adjustment value for highlights.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Options: {"default": 1, "min": 0.0, "max": 3, "step": 0.01}

- highlight_hue
    - Hue adjustment value for highlights.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 0, "min": -255, "max": 255, "step": 1}

- highlight_level_offset
    - Offset for highlight selection, larger values include more areas near shadows into the highlights.
    - Comfy dtype: INT
    - Python dtype: int
    - Options: {"default": 0, "min": -99, "max": 99, "step": 1}

- highlight_range
    - Range of highlights.
    - Comfy dtype: FLOAT
    - Python dtype: float
    - Options: {"default": 0.25, "min": 0.01, "max": 0.99, "step": 0.01}

## Optional

- mask
    - Input mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
