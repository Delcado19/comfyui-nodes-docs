# Documentation
- Class name: LTXVSetAudioVideoMaskByTime
- Category: utility
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Sets the audio and video mask by time.

# Input types
## Required
- av_latent
    - The av_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- audio_vae
    - The audio_vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- start_time
    - The start_time input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_time
    - The end_time input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- video_fps
    - The video_fps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_video
    - The mask_video input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask_audio
    - The mask_audio input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask_init_value_video
    - The mask_init_value_video input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_init_value_audio
    - The mask_init_value_audio input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- slope_len
    - The slope_len input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- spatial_mask
    - Spatial mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- av_latent
    - The av_latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- video_latent_blend_coefficients
    - The video_latent_blend_coefficients output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- video_pixel_blend_coefficients
    - The video_pixel_blend_coefficients output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
