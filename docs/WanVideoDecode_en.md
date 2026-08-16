# Documentation
- Class name: WanVideoDecode
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
- samples
    - The samples input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- enable_vae_tiling
    - Drastically reduces memory use but will introduce seams at tile stride boundaries. The location and number of seams is dictated by the tile stride size. The visibility of seams can be controlled by increasing the tile size. Seams become less obvious at 1.5x stride and are barely noticeable at 2x stride size. Which is to say if you use a stride width of 160, the seams are barely noticeable with a tile width of 320.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tile_x
    - Tile width in pixels. Smaller values use less VRAM but will make seams more obvious.
    - Comfy dtype: INT
    - Python dtype: int
- tile_y
    - Tile height in pixels. Smaller values use less VRAM but will make seams more obvious.
    - Comfy dtype: INT
    - Python dtype: int
- tile_stride_x
    - Tile stride width in pixels. Smaller values use less VRAM but will introduce more seams.
    - Comfy dtype: INT
    - Python dtype: int
- tile_stride_y
    - Tile stride height in pixels. Smaller values use less VRAM but will introduce more seams.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- normalization
    - The normalization input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
