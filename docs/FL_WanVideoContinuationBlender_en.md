# Documentation
- Class name: FL_WanVideoContinuationBlender
- Category: 🏵️Fill Nodes/WIP
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Blends videos with a continuation video that has embedded overlaps. Automatically strips overlap frames to prevent duplication. Use this after FL_WanVideoContinue.

# Input types
## Required
- overlap_frames
    - Number of overlap frames used in FL_WanVideoContinue. Must match the value used to create the continuation video.
    - Comfy dtype: INT
    - Python dtype: int
- video_1
    - First video (reference resolution) - the 'input_video_frames' from FL_WanVideoContinue.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- continuation_video
    - The rendered continuation video from FL_WanVideoContinue - has embedded overlaps that will be automatically stripped.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- video_2
    - Second video - the 'end_video_frames' from FL_WanVideoContinue. Will be resized to match video_1.
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
