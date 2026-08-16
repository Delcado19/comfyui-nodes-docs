# Documentation
- Class name: WanVideoPhantomEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- num_frames
    - Number of frames to encode
    - Comfy dtype: INT
    - Python dtype: int
- phantom_latent_1
    - reference latents for the phantom model
    - Comfy dtype: LATENT
    - Python dtype: dict
- phantom_cfg_scale
    - CFG scale for the extra phantom cond pass
    - Comfy dtype: FLOAT
    - Python dtype: float
- phantom_start_percent
    - Start percent of the phantom model
    - Comfy dtype: FLOAT
    - Python dtype: float
- phantom_end_percent
    - End percent of the phantom model
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- phantom_latent_2
    - reference latents for the phantom model
    - Comfy dtype: LATENT
    - Python dtype: dict
- phantom_latent_3
    - reference latents for the phantom model
    - Comfy dtype: LATENT
    - Python dtype: dict
- phantom_latent_4
    - reference latents for the phantom model
    - Comfy dtype: LATENT
    - Python dtype: dict
- vace_embeds
    - VACE embeds
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object

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
