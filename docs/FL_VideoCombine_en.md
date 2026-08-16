# Documentation
- Class name: FL_VideoCombine
- Category: 🏵️Fill Nodes/Video
- Output node: True
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Combines an image batch and optional audio into an MP4 video.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- render_settings
    - The render_settings input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- filepath
    - The filepath output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
