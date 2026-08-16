# Documentation
- Class name: WanVideoContextOptions
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Context options for WanVideo, allows splitting the video into context windows and attemps blending them for longer generations than the model and memory otherwise would allow.

# Input types
## Required
- context_schedule
    - The context_schedule input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- context_frames
    - Number of pixel frames in the context, NOTE: the latent space has 4 frames in 1
    - Comfy dtype: INT
    - Python dtype: int
- context_stride
    - Context stride as pixel frames, NOTE: the latent space has 4 frames in 1
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
    - Context overlap as pixel frames, NOTE: the latent space has 4 frames in 1
    - Comfy dtype: INT
    - Python dtype: int
- freenoise
    - Shuffle the noise
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- verbose
    - Print debug output
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- fuse_method
    - Window weight function: linear=ramps at edges only, pyramid=triangular weights peaking in middle
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- reference_latent
    - Image to be used as init for I2V models for windows where first frame is not the actual first frame. Mostly useful with MAGREF model
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- context_options
    - The context_options output is produced by this node.
    - Comfy dtype: WANVIDCONTEXT
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
