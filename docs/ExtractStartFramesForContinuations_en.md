# Documentation
- Class name: ExtractStartFramesForContinuations
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Extracts the first N frames from a video sequence for continuations.

# Input types
## Required
- input_video_frames
    - Input video frames to extract the start frames from.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- num_frames
    - Number of frames to get from the start of the video.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- start_frames
    - The start_frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
