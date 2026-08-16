# Documentation
- Class name: SplitImageToTileList
- Category: image/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Splits an image into a batched list of tiles with a specified overlap.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tile_width
    - The tile_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
    - The tile_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- overlap
    - The overlap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
