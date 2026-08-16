# Documentation
- Class name: ImageDeduplication
- Category: image/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Remove duplicate or very similar images from a list.

# Input types
## Required
- images
    - List of images to process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- similarity_threshold
    - Similarity threshold (0-1). Higher means more similar. Images above this threshold are considered duplicates.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - Processed images
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
