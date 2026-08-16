# Documentation
- Class name: TripoSplatPreprocessImage
- Category: model/conditioning/triposplat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Crop center each image to a square canvas on a black background and add padding.

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
- erode_radius
    - Erode the alpha matte by this pixel radius before cropping (avoids border bleed).
    - Comfy dtype: INT
    - Python dtype: int
- size
    - Square image size. The model is trained at 1024; other sizes run but are off-distribution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
