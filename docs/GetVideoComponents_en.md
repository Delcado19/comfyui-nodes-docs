# Documentation
- Class name: GetVideoComponents
- Category: video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Extracts all components from a video: frames, audio, framerate, and bit depth.

# Input types
## Required
- video
    - The video to extract components from.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- fps
    - The fps output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bit_depth
    - The bit_depth output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
