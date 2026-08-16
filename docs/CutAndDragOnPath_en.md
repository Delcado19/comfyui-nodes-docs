# Documentation
- Class name: CutAndDragOnPath
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Cuts the masked area from the image, and drags it along the path. If inpaint is enabled, and no bg_image is provided, the cut area is filled using cv2 TELEA algorithm.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- coordinates
    - The coordinates input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- frame_width
    - The frame_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The frame_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- inpaint
    - The inpaint input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- bg_image
    - The bg_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
