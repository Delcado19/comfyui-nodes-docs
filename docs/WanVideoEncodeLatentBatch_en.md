# Documentation
- Class name: WanVideoEncodeLatentBatch
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Encodes a batch of images individually to create a latent video batch where each video is a single frame, useful for I2V init purposes, for example as multiple context window inits

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- images
    - The images input is used by this node during execution.
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
