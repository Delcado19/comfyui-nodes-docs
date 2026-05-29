# Documentation
- Class name: PersonMaskUltra
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate masks for a person's face, hair, body skin, clothing, or accessories. Compared to the previous A Person Mask Generator node, this node features ultra-high edge detail. The model code for this node comes from [a-person-mask-generator](https://github.com/djbielejeski/a-person-mask-generator), and the edge processing code comes from spacepxl's [ComfyUI-Image-Filters](https://github.com/spacepxl/ComfyUI-Image-Filters). Thanks to the original authors.

# Input types

## Required

- images
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- face
    - Face.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- hair
    - Hair.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- body
    - Body.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- clothes
    - Clothes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- accessories
    - Accessory recognition (e.g., backpacks).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- background
    - Background.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- confidence
    - Recognition threshold; lower values will output a larger mask area.
    - Comfy dtype: FLOAT
    - Python dtype: float

- detail_range
    - Detail range.
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Edge black sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - Edge white sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- process_detail
    - Setting this to False will skip edge processing to save runtime.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - mask
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
