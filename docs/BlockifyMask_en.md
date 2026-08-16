# Documentation
- Class name: BlockifyMask
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Creates a block mask by dividing the bounding box of each mask into blocks of the specified size and filling in blocks that contain any part of the original mask.

# Input types
## Required
- masks
    - The masks input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- block_size
    - Size of blocks in pixels (smaller = smaller blocks)
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- device
    - Device to use for processing
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
