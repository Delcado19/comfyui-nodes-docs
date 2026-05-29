# Documentation
- Class name: MaskBoxDetect
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Detect the region where the mask is located and output its position and size.

# Input types

## Required

- mask
    - Mask image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- detect
    - Detection method: min_bounding_rect is the minimum bounding rectangle of the large shape, max_inscribed_rect is the maximum inscribed rectangle of the large shape, mask_area is the valid pixel area of the mask.
    - Optional values: ['min_bounding_rect', 'max_inscribed_rect', 'mask_area']
    - Comfy dtype: STRING
    - Python dtype: str

- x_adjust
    - Horizontal offset correction after detection.
    - Comfy dtype: INT
    - Python dtype: int

- y_adjust
    - Vertical offset correction after detection.
    - Comfy dtype: INT
    - Python dtype: int

- scale_adjust
    - Scale offset correction after detection.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types

- box_preview
    - Detection result preview. Red indicates the detected result, green indicates the output result after correction.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- x_percent
    - X-axis percentage position.
    - Comfy dtype: FLOAT
    - Python dtype: float

- y_percent
    - Y-axis percentage position.
    - Comfy dtype: FLOAT
    - Python dtype: float

- width
    - Box width.
    - Comfy dtype: INT
    - Python dtype: int

- height
    - Box height.
    - Comfy dtype: INT
    - Python dtype: int

- x
    - Top-left corner x-coordinate output.
    - Comfy dtype: INT
    - Python dtype: int

- y
    - Top-left corner y-coordinate output.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
