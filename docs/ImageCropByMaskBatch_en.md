# Documentation
- Class name: ImageCropByMaskBatch
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Crops the input images based on the provided masks.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- padding
    - The padding input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- preserve_size
    - The preserve_size input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bg_color
    - Color as RGB values in range 0-255 or 0.0-1.0, or color name or hex code
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
