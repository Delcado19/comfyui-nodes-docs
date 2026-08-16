# Documentation
- Class name: iToolsCheckerBoard
- Category: iTools
- Output node: False
- Repo Ref: https://github.com/MohammadAboulEla/ComfyUI-iTools

Generates chessboard-like patterns, either in black and white or with random colors

# Input types
## Required
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- rows
    - The rows input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cols
    - The cols input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- pattern
    - The pattern input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- is_colored
    - The is_colored input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/MohammadAboulEla/ComfyUI-iTools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
