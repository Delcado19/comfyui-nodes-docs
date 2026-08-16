# Documentation
- Class name: RollFrames
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

Rolls the clip in a loop by an integer amount (cyclic shift). Also returns the same offset so you can undo it later.

# Input types
## Required
- images
    - Your clip (frames×H×W×C).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- offset
    - How far to rotate the clip. Positive = forward in time; negative = backward.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- offset_out
    - The offset_out output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Artificial-Sweetener/WhiteRabbit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
