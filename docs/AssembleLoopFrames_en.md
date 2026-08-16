# Documentation
- Class name: AssembleLoopFrames
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

Builds the final loop: appends only the new in-between seam frames to your original clip—no duplicate of frame 1.

# Input types
## Required
- original_images
    - Your original clip (frames×H×W×C).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- interpolated_frames
    - Frames that bridge last→first. The first and last of this batch are the originals; only the middle ones get added.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

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
