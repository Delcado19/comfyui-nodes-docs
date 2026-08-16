# Documentation
- Class name: NormalizeVideoLatentStart
- Category: model/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Normalizes the initial frames of a video latent to match the mean and standard deviation of subsequent reference frames. Helps reduce differences between the starting frames and the rest of the video.

# Input types
## Required
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- start_frame_count
    - Number of latent frames to normalize, counted from the start
    - Comfy dtype: INT
    - Python dtype: int
- reference_frame_count
    - Number of latent frames after the start frames to use as reference
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
