# Documentation
- Class name: WanVideoRealisDanceLatents
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- ref_latent
    - Reference image to encode
    - Comfy dtype: LATENT
    - Python dtype: dict
- pose_cond_start_percent
    - Start percent of the SMPL model
    - Comfy dtype: FLOAT
    - Python dtype: float
- pose_cond_end_percent
    - End percent of the SMPL model
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- smpl_latent
    - SMPL pose image to encode
    - Comfy dtype: LATENT
    - Python dtype: dict
- hamer_latent
    - Hamer hand pose image to encode
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- add_cond_latents
    - The add_cond_latents output is produced by this node.
    - Comfy dtype: ADD_COND_LATENTS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
