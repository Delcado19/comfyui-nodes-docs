# Documentation
- Class name: LoadMotionBrushFromOpticalFlow
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node can generate motion brushes from optical flow data, enabling users to leverage motion information for video processing or animation and other applications.

# Input types
## Required
- model
    - Model parameters are critical for motion brush generation, defining the foundational architecture and parameters of the generation process.
    - Comfy dtype: DragNUWA
    - Python dtype: torch.nn.Module
- optical_flow
    - Optical flow input is essential for the node, as it provides the motion information required to create motion brushes.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: torch.Tensor

# Output types
- MotionBrush
    - The output represents the generated motion brush, encapsulating motion information in a structured format.
    - Comfy dtype: MOTION_BRUSH
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
