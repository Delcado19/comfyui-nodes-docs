# Documentation
- Class name: AutoBrightness
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Automatically adjusts images that are too dark or too bright to a moderate brightness level. Supports mask input. When a mask is provided, only the content within the mask area is used as the data source for automatic brightness adjustment. The output remains the entire adjusted image.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- strength
    - The strength of automatic brightness adjustment. Higher values shift the result closer to the midpoint, creating a greater difference from the original image.
    - Comfy dtype: INT
    - Python dtype: int

- saturation
    - Color saturation. Changes in brightness typically cause shifts in color saturation, which can be compensated for here.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- mask
    - Mask. Only the content within the mask area is used for automatic brightness adjustment.
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
