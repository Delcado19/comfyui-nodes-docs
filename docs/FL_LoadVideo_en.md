# Documentation
- Class name: FL_LoadVideo
- Category: 🏵️Fill Nodes/Video
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Loads, previews, trims, samples, and resizes a video from ComfyUI input.

# Input types
## Required
- video
    - The video input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- load_settings
    - The load_settings input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- video
    - The video output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object
- fps
    - The fps output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_count
    - The frame_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
