# Documentation
- Class name: PrepareLoopFrames
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

Prepares the wrap seam: builds a tiny 2-frame batch [last, first] for your interpolator and also passes the original clip through unchanged.

# Input types
## Required
- images
    - Your clip as an IMAGE batch (frames×H×W×C, values 0–1). Outputs: [last, first] for the seam, plus the original clip.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- interp_batch
    - The interp_batch output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- original_images
    - The original_images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Artificial-Sweetener/WhiteRabbit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
