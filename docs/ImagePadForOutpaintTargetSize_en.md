# Documentation
- Class name: ImagePadForOutpaintTargetSize
- Category: image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_width
    - The target_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - The target_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- feathering
    - The feathering input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_method
    - The upscale_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
