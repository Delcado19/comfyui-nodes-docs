# Documentation
- Class name: WanVideoControlEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- start_percent
    - Start percent of the control signal
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End percent of the control signal
    - Comfy dtype: FLOAT
    - Python dtype: float
- latents
    - Encoded latents to use as control signals
    - Comfy dtype: LATENT
    - Python dtype: dict
## Optional
- fun_ref_image
    - Reference latent for the Fun 1.1 -model
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
