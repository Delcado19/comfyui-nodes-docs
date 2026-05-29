# Documentation
- Class name: MaskByColor
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Node to create a Mask based on color.

# Input types

## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- color
    - Color picker. Click the color block to select a color. You can use the eyedropper on the color picker panel to pick screen colors. Note: When using the eyedropper, maximize the browser window.
    - Comfy dtype: COLOR
    - Python dtype: str
    - Default: #FFFFFF

- color_in_HEX
    - Input color value. If this field has input, it takes precedence and ignores the color selected by the color picker.
    - Comfy dtype: STRING
    - Python dtype: str
    - Default: ""

- threshold
    - Mask range threshold. The larger the value, the larger the mask range.
    - Comfy dtype: INT
    - Python dtype: int

- fix_gap
    - Fill gaps in the mask. If there are obvious gaps in the mask, increase this value appropriately.
    - Comfy dtype: INT
    - Python dtype: int

- fix_threshold
    - Threshold for filling the mask.
    - Comfy dtype: FLOAT
    - Python dtype: float

- invert_mask
    - Whether to invert the mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Optional

- mask
    - Mask input. This input is optional. If there is a mask, only colors within the mask are included.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- mask
    - Output Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
