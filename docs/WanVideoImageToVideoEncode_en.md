# Documentation
- Class name: WanVideoImageToVideoEncode
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- width
    - Width of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- num_frames
    - Number of frames to encode
    - Comfy dtype: INT
    - Python dtype: int
- noise_aug_strength
    - Strength of noise augmentation, helpful for I2V where some noise can add motion and give sharper results
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_latent_strength
    - Additional latent multiplier, helpful for I2V where lower values allow for more motion
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_latent_strength
    - Additional latent multiplier, helpful for I2V where lower values allow for more motion
    - Comfy dtype: FLOAT
    - Python dtype: float
- force_offload
    - The force_offload input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- clip_embeds
    - Clip vision encoded image
    - Comfy dtype: WANVIDIMAGE_CLIPEMBEDS
    - Python dtype: object
- start_image
    - Image to encode
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- end_image
    - end frame
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- control_embeds
    - Control signal for the Fun -model
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- fun_or_fl2v_model
    - Enable when using official FLF2V or Fun model
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- temporal_mask
    - mask
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- extra_latents
    - Extra latents to add to the input front, used for Skyreels A2 reference images
    - Comfy dtype: LATENT
    - Python dtype: dict
- tiled_vae
    - Use tiled VAE encoding for reduced memory use
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- add_cond_latents
    - Additional cond latents WIP
    - Comfy dtype: ADD_COND_LATENTS
    - Python dtype: object
- augment_empty_frames
    - EXPERIMENTAL: Augment empty frames with the difference to the start image to force more motion
    - Comfy dtype: FLOAT
    - Python dtype: float
- empty_frame_pad_image
    - Use this image to pad empty frames instead of gray, used with SVI-shot and SVI 2.0 LoRAs
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

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
