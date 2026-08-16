# Documentation
- Class name: LTXVAudioVideoMask
- Category: KJNodes/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Creates noise masks for video and audio latents based on specified time ranges. New content is generated within these masked regions

# Input types
## Required
- video_fps
    - The video_fps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- video_start_time
    - Start time in seconds for the video mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- video_end_time
    - End time in seconds for the video mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_start_time
    - Start time in seconds for the audio mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_end_time
    - End time in seconds for the audio mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_length
    - 'truncate': cut latent to end_time length. 'pad': extend latent to end_time. 'partial': mask range within existing latent.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- video_latent
    - The video_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- audio_latent
    - The audio_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- existing_mask_mode
    - How to combine with existing noise masks if present. 'add' will take the max of existing and new mask, 'overwrite' will replace with new mask. 'subtract' will set the masked region to 0 instead of 1, effectively unmasking it.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- video_latent
    - The video_latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- audio_latent
    - The audio_latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
