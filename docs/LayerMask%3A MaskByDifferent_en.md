# Documentation
- Class name: MaskByDifferent
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Calculate the differences between two images and output as a mask.

# Input types

## Required

- image_1
    - First input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- image_2
    - Second input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- gain
    - Difference gain. Increasing this value will make subtle differences more pronounced.
    - Comfy dtype: FLOAT
    - Python dtype: float

- fix_gap
    - Fix gaps. Higher values will patch larger gaps.
    - Comfy dtype: INT
    - Python dtype: int

- fix_threshold
    - Fix threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- main_subject_detect
    - Setting this to True will enable subject detection, ignoring differences outside the subject.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
