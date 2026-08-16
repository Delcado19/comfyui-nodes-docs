# Documentation
- Class name: ShuffleImageTextDataset
- Category: image/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Randomly shuffle the order of pairs of image-text in a list.

# Input types
## Required
- images
    - List of images to shuffle.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- texts
    - List of texts to shuffle.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - Random seed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - Shuffled images
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- texts
    - Shuffled texts
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
