# Documentation
- Class name: WanVideoAddS2VEmbeds
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
- frame_window_size
    - Number of frames in a single window
    - Comfy dtype: INT
    - Python dtype: int
- audio_scale
    - Scale factor for audio embeddings
    - Comfy dtype: FLOAT
    - Python dtype: float
- pose_start_percent
    - Start percentage for pose embeddings
    - Comfy dtype: FLOAT
    - Python dtype: float
- pose_end_percent
    - End percentage for pose embeddings
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- audio_encoder_output
    - The audio_encoder_output input is used by this node during execution.
    - Comfy dtype: AUDIO_ENCODER_OUTPUT
    - Python dtype: object
- ref_latent
    - The ref_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- pose_latent
    - The pose_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- enable_framepack
    - Enable Framepack sampling loop, not compatible with context windows
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- audio_frame_count
    - The audio_frame_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
