# Documentation
- Class name: HuMoEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- num_frames
    - The total frame count to generate.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- audio_scale
    - Strength of the audio conditioning
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_cfg_scale
    - When not 1.0, an extra model pass without audio conditioning is done: slower inference but more motion is allowed
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_start_percent
    - The percent of the video to start applying audio conditioning
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_end_percent
    - The percent of the video to stop applying audio conditioning
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- whisper_model
    - The whisper_model input is used by this node during execution.
    - Comfy dtype: WHISPERMODEL
    - Python dtype: object
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- reference_images
    - reference images for the humo model
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- tiled_vae
    - Use tiled VAE encoding for reduced memory use
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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
