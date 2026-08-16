# Documentation
- Class name: FL_WanVideoBlender
- Category: 🏵️Fill Nodes/WIP
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Blends two input videos with a cross-fade. The resolution of the second clip is resized to match the first.

# Input types
## Required
- overlap_frames
    - Number of frames to blend between the two videos using cross-fade.
    - Comfy dtype: INT
    - Python dtype: int
- video_1
    - First video (reference resolution).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- video_2
    - Second video (will be resized to match video_1).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- blended_video_frames
    - The blended_video_frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
