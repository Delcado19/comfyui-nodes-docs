# Documentation
- Class name: CreateVideo
- Category: video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Create a video from images.

# Input types
## Required
- images
    - The images to create a video from.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- audio
    - The audio to add to the video.
    - Comfy dtype: AUDIO
    - Python dtype: object
- bit_depth
    - Bit depth of the created video. 10-bit keeps smoother gradients with less banding, but some players and downstream nodes may not support it.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
