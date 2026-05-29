# Documentation
- Class name: ExtendCanvas
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Extend canvas.

# Input types
## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- invert_mask
    - Invert mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- top
    - Extend top.
    - Comfy dtype: INT
    - Python dtype: int

- bottom
    - Extend bottom.
    - Comfy dtype: INT
    - Python dtype: int

- left
    - Extend left.
    - Comfy dtype: INT
    - Python dtype: int

- right
    - Extend right.
    - Comfy dtype: INT
    - Python dtype: int

- color
    - Color.
    - Comfy dtype: COLOR
    - Python dtype: str


# Output types

- image
    - Generated image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Generated mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
