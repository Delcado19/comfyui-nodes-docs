# Documentation
- Class name: CR_DebatchFrames
- Category: Comfyroll/Animation/Utils
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_DebatchFrames node is designed to process and split input data into individual frames. It plays a key role in preparing data for further analysis or processing in animation workflows, ensuring each frame can be handled independently.

# Input types
## Required
- frames
    - The 'frames' parameter is critical as it represents the batch of image frames the node will process. It influences the node's execution by determining which input data will be split into individual frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- debatched_frames
    - The 'debatched_frames' output consists of individual frames extracted from the input batch. This output is important as it forms the foundation for subsequent operations in the animation pipeline.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
