# Documentation
- Class name: WanVideoEncode
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- enable_vae_tiling
    - Drastically reduces memory use but may introduce seams
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tile_x
    - Tile size in pixels, smaller values use less VRAM, may introduce more seams
    - Comfy dtype: INT
    - Python dtype: int
- tile_y
    - Tile size in pixels, smaller values use less VRAM, may introduce more seams
    - Comfy dtype: INT
    - Python dtype: int
- tile_stride_x
    - Tile stride in pixels, smaller values use less VRAM, may introduce more seams
    - Comfy dtype: INT
    - Python dtype: int
- tile_stride_y
    - Tile stride in pixels, smaller values use less VRAM, may introduce more seams
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- noise_aug_strength
    - Strength of noise augmentation, helpful for leapfusion I2V where some noise can add motion and give sharper results
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_strength
    - Additional latent multiplier, helpful for leapfusion I2V where lower values allow for more motion
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- samples
    - The samples output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
