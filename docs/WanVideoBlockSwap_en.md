# Documentation
- Class name: WanVideoBlockSwap
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Settings for block swapping, reduces VRAM use by swapping blocks to CPU memory

# Input types
## Required
- blocks_to_swap
    - Number of transformer blocks to swap, the 14B model has 40, while the 1.3B and 5B models have 30 blocks. LongCat-video has 48
    - Comfy dtype: INT
    - Python dtype: int
- offload_img_emb
    - Offload img_emb to offload_device
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- offload_txt_emb
    - Offload time_emb to offload_device
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- use_non_blocking
    - Use non-blocking memory transfer for offloading, reserves more RAM but is faster
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- vace_blocks_to_swap
    - Number of VACE blocks to swap, the VACE model has 15 blocks
    - Comfy dtype: INT
    - Python dtype: int
- prefetch_blocks
    - Number of blocks to prefetch ahead, can speed up processing but increases memory usage. 1 is usually enough to offset speed loss from block swapping, use the debug option to confirm it for your system
    - Comfy dtype: INT
    - Python dtype: int
- block_swap_debug
    - Enable debug logging for block swapping
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- block_swap_args
    - The block_swap_args output is produced by this node.
    - Comfy dtype: BLOCKSWAPARGS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
