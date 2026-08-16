# Documentation
- Class name: DecodeAndSaveVideo
- Category: KJNodes/image
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Decodes video frames and audio from latent representations, combines them, and saves as a video file, without keeping intermediate images in memory.

# Input types
## Required
- video_latent
    - The latent representation of the video frames.
    - Comfy dtype: LATENT
    - Python dtype: dict
- fps
    - Frame rate for the output video.
    - Comfy dtype: FLOAT
    - Python dtype: float
- filename_prefix
    - The prefix for the file to save. This may include formatting information such as %date:yyyy-MM-dd% or %Empty Latent Image.width% to include values from nodes.
    - Comfy dtype: STRING
    - Python dtype: str
- format
    - The format to save the video as.
    - Comfy dtype: COMBO
    - Python dtype: object
- codec
    - The codec to use for the video.
    - Comfy dtype: COMBO
    - Python dtype: object
- video_vae
    - The VAE model to use for encoding.
    - Comfy dtype: VAE
    - Python dtype: object
- tiling
    - The tiling input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- audio_latent
    - The latent representation of the audio frames.
    - Comfy dtype: LATENT
    - Python dtype: dict
- audio_vae
    - The VAE model to use for decoding audio.
    - Comfy dtype: VAE
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
