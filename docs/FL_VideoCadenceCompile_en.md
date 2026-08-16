# Documentation
- Class name: FL_VideoCadenceCompile
- Category: 🏵️Fill Nodes/Video
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Takes a cadence list (frame counts) and a directory of video files.
    Crops each video from the middle to match its cadence frame count.
    Concatenates all processed frames into a single image batch.
    Handles errors like count mismatches or dimension inconsistencies.

# Input types
## Required
- cadence_list_str
    - The cadence_list_str input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- video_directory
    - The video_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- use_gpu_acceleration
    - The use_gpu_acceleration input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image_batch
    - The image_batch output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
