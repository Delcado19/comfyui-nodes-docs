# Documentation
- Class name: RunwayAleph2KeyframeNode
- Category: partner/video/Runway
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Anchor a guidance image to a moment of the input (source) video, so Aleph2 steers the edit at that point of your footage. Connect this to the 'keyframes' input of the Runway Aleph2 Video to Video node; chain several together (up to 5) via the optional 'keyframes' input below.

# Input types
## Required
- image
    - The guidance image to apply at the chosen moment of the input video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- timing
    - How to place this image on the input video's timeline.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- keyframes
    - Optional earlier keyframes to chain with this one.
    - Comfy dtype: RUNWAY_ALEPH2_KEYFRAME
    - Python dtype: object

# Output types
- keyframes
    - The keyframes output is produced by this node.
    - Comfy dtype: RUNWAY_ALEPH2_KEYFRAME
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
