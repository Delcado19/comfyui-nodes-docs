# Documentation
- Class name: FacialFeatureSegment
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Use Mediapipe model to detect facial features, segment left and right eyebrows, eyes, lips, and teeth.

# Input types

## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- left_eye
    - Whether to include left eye.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- left_eyebrow
    - Whether to include left eyebrow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- right_eye
    - Whether to include right eye.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- right_eyebrow
    - Whether to include right eyebrow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- lips
    - Whether to include lips.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- tooth
    - Whether to include teeth.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
