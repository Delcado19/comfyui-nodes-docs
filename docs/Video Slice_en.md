# Documentation
- Class name: Video Slice
- Category: video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Trim Video is a ComfyUI node registered by `comfy_extras.nodes_video`. The live metadata did not provide a longer description.

# Input types
## Required
- video
    - The video input is used by this node during execution.
    - Comfy dtype: VIDEO
    - Python dtype: object
- start_time
    - Start time in seconds
    - Comfy dtype: FLOAT
    - Python dtype: float
- duration
    - Duration in seconds, or 0 for unlimited duration
    - Comfy dtype: FLOAT
    - Python dtype: float
- strict_duration
    - If True, when the specified duration is not possible, an error will be raised.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
