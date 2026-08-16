# Documentation
- Class name: WanVideoSamplerv2
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object
- image_embeds
    - The image_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- force_offload
    - Moves the model to the offload device after sampling
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: WANVIDEOSCHEDULER
    - Python dtype: object
## Optional
- text_embeds
    - The text_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object
- samples
    - init Latents to use for video2video process
    - Comfy dtype: LATENT
    - Python dtype: dict
- add_noise_to_samples
    - Add noise to the samples before sampling, needed for video2video sampling when starting from clean video
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- extra_args
    - The extra_args input is used by this node during execution.
    - Comfy dtype: WANVIDSAMPLEREXTRAARGS
    - Python dtype: object

# Output types
- samples
    - The samples output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised_samples
    - The denoised_samples output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
