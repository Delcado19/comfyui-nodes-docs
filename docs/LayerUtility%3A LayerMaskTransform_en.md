# Documentation
- Class name: LayerMaskTransform
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Similar to LayerImageTransform, this node is used to transform the layer_mask alone, allowing changes in size, rotation, aspect ratio, and mirror flipping.

# Input types

## Required

- mask
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- x
    - X coordinate value.
    - Comfy dtype: INT
    - Python dtype: int

- y
    - Y coordinate value.
    - Comfy dtype: INT
    - Python dtype: int

- mirror
    - Mirrored flip. Provides two flip modes: horizontal flip and vertical flip.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - None
        - horizontal
        - vertical

- scale
    - Layer scale factor; 1.0 represents original size.
    - Comfy dtype: FLOAT
    - Python dtype: float

- aspect_ratio
    - Layer aspect ratio. 1.0 is the original ratio; greater values stretch, smaller values compress.
    - Comfy dtype: FLOAT
    - Python dtype: float

- rotate
    - Layer rotation in degrees.
    - Comfy dtype: FLOAT
    - Python dtype: float

- transform_method
    - Sampling method for layer scaling and rotation, including lanczos, bicubic, hamming, bilinear, box, and nearest. Different methods affect image quality and processing time.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - lanczos
        - bicubic
        - hamming
        - bilinear
        - box
        - nearest

- anti_aliasing
    - Anti‑aliasing, range 0‑16; higher values reduce jagged edges but significantly lower node processing speed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types

- mask
    - The transformed mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
