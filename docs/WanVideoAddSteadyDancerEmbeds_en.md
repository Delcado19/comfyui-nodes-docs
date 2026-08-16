# Documentation
- Class name: WanVideoAddSteadyDancerEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- embeds
    - The embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- pose_latents_positive
    - The pose_latents_positive input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- pose_strength_spatial
    - Strength of the pose embedding
    - Comfy dtype: FLOAT
    - Python dtype: float
- pose_strength_temporal
    - Strength of the pose embedding
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Start percentage of the embedding application
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End percentage of the embedding application
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- pose_latents_negative
    - The pose_latents_negative input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- clip_vision_embeds
    - The clip_vision_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_CLIPEMBEDS
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
