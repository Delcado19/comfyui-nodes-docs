# Documentation
- Class name: WanDancerPadKeyframesList
- Category: image/video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

WanDancerPadKeyframesList is a ComfyUI node registered by `comfy_extras.nodes_wandancer`. The live metadata did not provide a longer description.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segment_length
    - Length of each segment (usually 149 frames)
    - Comfy dtype: INT
    - Python dtype: int
- num_segments
    - How many padded segments to emit as lists.
    - Comfy dtype: INT
    - Python dtype: int
- audio
    - Audio to slice for each emitted segment.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Output types
- keyframes_sequence
    - Padded keyframe sequences
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- keyframes_mask
    - Masks indicating valid frames
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- audio_segment
    - Audio segment for each video segment
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
