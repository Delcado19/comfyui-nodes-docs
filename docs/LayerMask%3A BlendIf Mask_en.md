# Documentation
- Class name: BlendIfMask
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Photoshop layer style - reproduction of the blend color band with functionality. This node outputs a mask used for layer compositing in the ImageBlend or ImageBlendAdvance nodes. The mask is an optional input; if a mask is provided here, it will affect the output result.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- invert_mask
    - Whether to invert the mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- blend_if
    - Channel selection for the blend color band. Options: gray, red, green, blue.
    - Comfy dtype: ENUM
    - Python dtype: str
    - Optional values: gray, red, green, blue.

- black_point
    - Black point value, range 0-255.
    - Comfy dtype: INT
    - Python dtype: int

- black_range
    - Dark transition range. Larger values produce richer transition layers in the dark mask.
    - Comfy dtype: INT
    - Python dtype: int

- white_point
    - White point value, range 0-255.
    - Comfy dtype: INT
    - Python dtype: int

- white_range
    - Bright transition range. Larger values produce richer transition layers in the bright mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
