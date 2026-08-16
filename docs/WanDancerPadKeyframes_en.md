# Documentation
- Class name: WanDancerPadKeyframes
- Category: image/video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

WanDancerPadKeyframes is a ComfyUI node registered by `comfy_extras.nodes_wandancer`. The live metadata did not provide a longer description.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segment_length
    - Length of this segment (usually 149 frames)
    - Comfy dtype: INT
    - Python dtype: int
- segment_index
    - Which segment this is (0 for first, 1 for second, etc.)
    - Comfy dtype: INT
    - Python dtype: int
- audio
    - Audio to calculate total output frames from and extract segment audio.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Output types
- keyframes_sequence
    - Padded keyframe sequence
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- keyframes_mask
    - Mask indicating valid frames
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- audio_segment
    - Audio segment for this video segment
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
