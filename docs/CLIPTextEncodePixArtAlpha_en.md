# Documentation
- Class name: CLIPTextEncodePixArtAlpha
- Category: model/conditioning/pixart
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Encodes text and sets the resolution conditioning for PixArt Alpha. Does not apply to PixArt Sigma.

# Input types
## Required
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
