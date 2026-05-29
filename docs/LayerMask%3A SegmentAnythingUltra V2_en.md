# Documentation
- Class name: SegmentAnythingUltraV2
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

V2 upgrade of SegmentAnythingUltra, adding VITMatte edge processing method. (Note: Using this method on images exceeding 2K resolution will consume a large amount of memory)

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- sam_model
    - SAM model.
    - Comfy dtype: list_sam_model()
    - Python dtype: str

- grounding_dino_model
    - GroundingDINO model.
    - Comfy dtype: list_groundingdino_model()
    - Python dtype: str

- threshold
    - Threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- detail_method
    - Edge processing methods. Options include VITMatte, VITMatte(local), PyMatting, GuidedFilter. If VITMatte has been used and the model downloaded, VITMatte(local) can be used afterwards.
    - Comfy dtype: ['VITMatte', 'VITMatte(local)', 'PyMatting', 'GuidedFilter']
    - Python dtype: str

- detail_erode
    - The inward erosion range of the mask edge. The larger the value, the larger the inward repair range.
    - Comfy dtype: INT
    - Python dtype: int

- detail_dilate
    - The outward expansion range of the mask edge. The larger the value, the larger the outward repair range.
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Black points.
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - White points.
    - Comfy dtype: FLOAT
    - Python dtype: float

- process_detail
    - Process details.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- prompt
    - Prompt.
    - Comfy dtype: STRING
    - Python dtype: str

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
