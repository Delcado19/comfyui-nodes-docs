# Documentation
- Class name: UnrollFrames
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

Undo a previous roll after interpolation by accounting for the inserted frames (rotate by base_offset × (m+1)).

# Input types
## Required
- images
    - Clip after interpolation (frames′×H×W×C).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- base_offset
    - Use the exact offset_out that came from RollFrames.
    - Comfy dtype: INT
    - Python dtype: int
- m
    - How many in-betweens per gap were added (the interpolation multiple).
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Artificial-Sweetener/WhiteRabbit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
