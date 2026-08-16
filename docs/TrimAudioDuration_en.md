# Documentation
- Class name: TrimAudioDuration
- Category: audio
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Trim audio tensor into chosen time range.

# Input types
## Required
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- start_index
    - Start time in seconds, can be negative to count from the end (supports sub-seconds).
    - Comfy dtype: FLOAT
    - Python dtype: float
- duration
    - Duration in seconds
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- AUDIO
    - The AUDIO output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
