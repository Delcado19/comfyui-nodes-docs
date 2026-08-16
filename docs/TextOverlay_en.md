# Documentation
- Class name: TextOverlay
- Category: text
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Draw text overlay on an image or batch of images.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - Font size as a percentage of the image height.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color
    - Color of the text.
    - Comfy dtype: COLOR
    - Python dtype: object
- position
    - The position input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- align
    - The align input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- outline
    - Draw a black outline around the text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
