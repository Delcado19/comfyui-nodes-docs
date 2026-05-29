# Documentation
- Class name: BiRefNetUltra
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Uses the BiRefNet model for background removal, offering better recognition capability with ultra-high edge detail.
The model part of this node's code comes from vipery's [ComfyUI-BiRefNet](https://github.com/viperyl/ComfyUI-BiRefNet), thanks to the original author.

# Input types
## Required
- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- detail_method
    - Edge processing methods. Options include VITMatte, VITMatte(local), PyMatting, GuidedFilter. If VITMatte has been used and the model downloaded, VITMatte(local) can be used afterwards.
    - Comfy dtype: STRING
    - Python dtype: str
    - Choices: ['VITMatte', 'VITMatte(local)', 'PyMatting', 'GuidedFilter']

- detail_erode
    - Mask edge inward erosion range. Larger values mean a larger inward repair range
    - Comfy dtype: INT
    - Python dtype: int

- detail_dilate
    - Mask edge outward expansion range. Larger values mean a larger outward repair range
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Threshold for black points in the mask. Smaller values result in more black points
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - Threshold for white points in the mask. Larger values result in more white points
    - Comfy dtype: FLOAT
    - Python dtype: float

- process_detail
    - Whether to process mask details. If No is selected, the raw mask will be output directly. Setting this to False skips edge processing to save runtime.
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
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
