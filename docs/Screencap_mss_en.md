# Documentation
- Class name: Screencap_mss
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Captures an area specified by screen coordinates.  
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
- num_frames
    - The num_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- delay
    - The delay input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

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
