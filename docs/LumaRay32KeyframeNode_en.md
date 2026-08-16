# Documentation
- Class name: LumaRay32KeyframeNode
- Category: partner/video/Luma
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Anchor a guide image to a position on the Ray 3.2 output video timeline. Connect this to the 'keyframes' input of the Luma Ray 3.2 Keyframes to Video node; chain several together via the optional 'keyframes' input below.

# Input types
## Required
- image
    - Guide image to place at the chosen moment of the output video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- position
    - How to place this image on the output video's timeline.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- keyframes
    - Optional earlier keyframes to chain with this one.
    - Comfy dtype: LUMA_RAY32_KEYFRAME
    - Python dtype: object

# Output types
- keyframes
    - The keyframes output is produced by this node.
    - Comfy dtype: LUMA_RAY32_KEYFRAME
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
