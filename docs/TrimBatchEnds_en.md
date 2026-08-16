# Documentation
- Class name: TrimBatchEnds
- Category: video utils
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

Quickly remove frames from the start and/or end of a clip. Always keeps at least one frame.

# Input types
## Required
- clip_frames
    - Your clip (frames×H×W×C, 0–1).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- trim_start_frames
    - Frames to remove from the START.
    - Comfy dtype: INT
    - Python dtype: int
- trim_end_frames
    - Frames to remove from the END.
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
