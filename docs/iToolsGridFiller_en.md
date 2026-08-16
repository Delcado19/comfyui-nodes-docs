# Documentation
- Class name: iToolsGridFiller
- Category: iTools
- Output node: False
- Repo Ref: https://github.com/MohammadAboulEla/ComfyUI-iTools

Arranging a set of images into specified rows and columns, applying optional spacing and background color

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
- gaps
    - The gaps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- background_color
    - The background_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- fill_direction
    - The fill_direction input is used by this node during execution.
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
[View source repository](https://github.com/MohammadAboulEla/ComfyUI-iTools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
