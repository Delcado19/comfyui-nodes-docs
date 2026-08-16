# Documentation
- Class name: DrawMaskOnImage
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Applies the provided masks to the input images with Alpha Blending support.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- color
    - Color as RGB/RGBA values in range 0-255 or 0.0-1.0, separated by commas. Ex: 255, 0, 0, 128
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- device
    - Device to use for processing
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
