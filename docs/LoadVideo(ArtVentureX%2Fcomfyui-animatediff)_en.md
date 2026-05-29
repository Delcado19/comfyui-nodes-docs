# Documentation
- Class name: LoadVideo
- Category: Animate Diff/Utils
- Output node: False
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

This node is designed to extract frames from a video file, allowing selection of a specific frame range based on a start point and a limit. It enables these frames to be used for further processing in various applications, such as animation or difference analysis.

# Input types
## Required
- video
    - The video parameter is crucial because it defines the source from which frames will be extracted. It influences the node's operation by determining the content and frame sequence to be processed.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- frame_start
    - The frame_start parameter indicates the initial frame number from which extraction should begin. It influences the node's execution by setting the starting point for frame selection.
    - Comfy dtype: INT
    - Python dtype: int
- frame_limit
    - The frame_limit parameter defines the maximum number of frames to extract after frame_start. It directly affects the number of frames processed by the node.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- frames
    - The frames output is a sequence of extracted video frames, converted into tensor format, essential for further analysis or manipulation in downstream processes.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor
- frame_count
    - The frame_count output provides the total number of frames extracted, giving a reference for the amount of data processed by the node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ArtVentureX/comfyui-animatediff)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
