# Documentation
- Class name: WanVideoImageClipEncode
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- clip_vision
    - The clip_vision input is used by this node during execution.
    - Comfy dtype: CLIP_VISION
    - Python dtype: object
- image
    - Image to encode
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- generation_width
    - Width of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- generation_height
    - Height of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- num_frames
    - Number of frames to encode
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- force_offload
    - The force_offload input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_aug_strength
    - Strength of noise augmentation, helpful for I2V where some noise can add motion and give sharper results
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_strength
    - Additional latent multiplier, helpful for I2V where lower values allow for more motion
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_embed_strength
    - Additional clip embed multiplier
    - Comfy dtype: FLOAT
    - Python dtype: float
- adjust_resolution
    - Performs the same resolution adjustment as in the original code
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
