# Documentation
- Class name: WanVideoImageResizeToClosest
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Resizes image to the closest supported resolution based on aspect ratio and max pixels, according to the original code

# Input types
## Required
- image
    - Image to resize
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- generation_width
    - Width of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- generation_height
    - Height of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio_preservation
    - The aspect_ratio_preservation input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
