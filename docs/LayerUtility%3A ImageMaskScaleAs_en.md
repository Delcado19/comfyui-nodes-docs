# Documentation
- Class name: ImageMaskScaleAs
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Scale the image or mask to the size of the reference image (or mask).

# Input types

## Required

- scale_as
    - Reference size. Can be an image or a mask.
    - Comfy dtype: ANY
    - Python dtype: torch.Tensor

- fit
    - Aspect ratio mode. When the original image and the target size have different aspect ratios, there are three modes to choose from: letterbox mode preserves the full canvas, filling blank areas with black; crop mode preserves the full short side, cropping the excess on the long side; fill mode does not maintain the aspect ratio, filling the width and height independently.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - letterbox
        - crop
        - fill

- method
    - Sampling method for scaling, including lanczos, bicubic, hamming, bilinear, box, and nearest.
    - Comfy dtype: STRING_ONEOF
    - Python dtype: str
    - Options:
        - lanczos
        - bicubic
        - hamming
        - bilinear
        - box
        - nearest

## Optional

- image
    - Image to be scaled. This option is optional; if no input is provided, a solid black image will be output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Mask to be scaled. This option is optional; if no input is provided, a solid black mask will be output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Scaled image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Scaled mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- original_size
    - Original size.
    - Comfy dtype: BOX
    - Python dtype: List[int]

- width
    - Target width.
    - Comfy dtype: INT
    - Python dtype: int

- height
    - Target height.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
