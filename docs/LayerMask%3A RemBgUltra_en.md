# Documentation
- Class name: RemBgUltra
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Remove background. Compared to similar background removal nodes, this node delivers ultra-high edge detail. It combines the Alpha Matte node from spacepxl's [ComfyUI-Image-Filters](https://github.com/spacepxl/ComfyUI-Image-Filters) with the functionality of ZHO-ZHO-ZHO's [ComfyUI-BRIA_AI-RMBG](https://github.com/ZHO-ZHO-ZHO/ComfyUI-BRIA_AI-RMBG). Thanks to the original authors.

*Download the [BRIA Background Removal v1.4](https://huggingface.co/briaai/RMBG-1.4) model file (model.pth) to the ComfyUI/models/rmbg/RMBG-1.4 folder. This model is developed by BRIA AI and is available as an open-source model for non-commercial use.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- detail_range
    - Edge detail range.
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
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
