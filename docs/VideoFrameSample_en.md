# Documentation
- Class name: VideoFrameSample
- Category: video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Sample a fixed number of frames from a video using various strategies.

# Input types
## Required
- video
    - Input video.
    - Comfy dtype: VIDEO
    - Python dtype: object
- num_frames
    - Number of frames to sample.
    - Comfy dtype: INT
    - Python dtype: int
- strategy
    - uniform: evenly spaced, head: first N, tail: last N, random: random sorted.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Random seed (only used with 'random' strategy).
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- video
    - Sampled video.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
