# Documentation
- Class name: GetColorToneV2
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

V2 upgrade of GetColorTone. You can specify to get the main color or average color of the subject or background.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mode
    - Modes, two options: main color main_color and average color average.
    - Comfy dtype: STRING
    - Python dtype: str
    - Optional values: 'average', 'main'

- color_of
    - Provides three options: entire, background and subject, respectively representing selecting the color of the entire image, background, or subject.
    - Comfy dtype: STRING
    - Python dtype: str
    - Optional values: 'entire', 'subject', 'background'

- remove_bkgd_method
    - Background identification methods: BiRefNet and RMBG V1.4 are available.
    - Comfy dtype: STRING
    - Python dtype: str
    - Optional values: 'BiRefNet', 'RMBG 1.4'

- invert_mask
    - Whether to invert the mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- mask_grow
    - Number of pixels for mask expansion.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- mask
    - Input mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- color_in_hex
    - Described using hexadecimal RGB string format, e.g. '#FA3D86'.
    - Comfy dtype: STRING
    - Python dtype: str

- HSV color in list
    - HSV color value.
    - Comfy dtype: LIST
    - Python dtype: list

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
