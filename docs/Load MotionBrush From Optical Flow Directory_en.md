# Documentation
- Class name: LoadMotionBrushFromOpticalFlowDirectory
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node extracts and processes motion data from optical flow files in a specified directory, generating motion brushes for further analysis and application.

# Input types
## Required
- model
    - Model parameters are critical as they define the specific algorithm or framework used to process optical flow data, affecting the accuracy and efficiency of motion brush generation.
    - Comfy dtype: DragNUWA
    - Python dtype: DragNUWA
- optical_flow_directory
    - This parameter specifies the directory containing optical flow files, essential for the node to locate and process the required motion data.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- MotionBrush
    - The output represents processed motion data in the form of motion brushes, usable in various applications such as animation, video editing, and effects generation.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
