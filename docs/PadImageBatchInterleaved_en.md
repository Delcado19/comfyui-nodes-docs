# Documentation
- Class name: PadImageBatchInterleaved
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Inserts empty frames between the images in a batch.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- empty_frames_per_image
    - The empty_frames_per_image input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- pad_frame_value
    - The pad_frame_value input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- add_after_last
    - The add_after_last input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
