# Documentation
- Class name: WebcamCaptureCV2
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Captures a frame from a webcam using CV2.  
Can be used for realtime diffusion with autoqueue.

# Input types
## Required
- x
    - The x input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cam_index
    - The cam_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- release
    - The release input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
