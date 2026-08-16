# Documentation
- Class name: WanVideoMiniMaxRemoverEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- width
    - Width of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- num_frames
    - Number of frames to encode
    - Comfy dtype: INT
    - Python dtype: int
- latents
    - Encoded latents to use as control signals
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask_latents
    - Encoded latents to use as mask
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
