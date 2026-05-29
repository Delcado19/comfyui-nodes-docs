# Documentation
- Class name: ImageBlendAdvance
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Used for compositing layers, allowing layers of different sizes to be composited onto a background image with position and transform settings. Provides multiple blend modes and opacity control.

The node offers layer transformation methods and anti‑aliasing options, helping improve compositing quality.

The node provides a mask output for use in subsequent workflows.


# Input types
## Required

- background_image
    - Background image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- layer_image
    - Layer image used for compositing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- invert_mask
    - Whether to invert the mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- blend_mode
    - Layer blending mode.
    - Comfy dtype: ENUM
    - Python dtype: str

- opacity
    - Opacity.
    - Comfy dtype: INT
    - Python dtype: int

- x_percent
    - Horizontal position of the layer on the background, expressed as a percentage; left edge is 0, right edge is 100. Values below 0 or above 100 place part of the layer outside the frame.
    - Comfy dtype: FLOAT
    - Python dtype: float

- y_percent
    - Vertical position of the layer on the background, expressed as a percentage; top edge is 0, bottom edge is 100. 50 centers vertically, 20 is higher, 80 is lower.
    - Comfy dtype: FLOAT
    - Python dtype: float

- mirror
    - Mirrored flip. Provides two flip modes: horizontal flip and vertical flip.
    - Comfy dtype: ENUM
    - Python dtype: str

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
    - Comfy dtype: ENUM
    - Python dtype: str

- anti_aliasing
    - Anti‑aliasing, range 0‑16; higher values reduce jagged edges but significantly lower node processing speed.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- layer_mask
    - Mask of the layer image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


# Output types

- image
    - Composited image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
