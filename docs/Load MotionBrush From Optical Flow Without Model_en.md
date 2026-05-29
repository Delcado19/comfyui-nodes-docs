# Documentation
- Class name: LoadMotionBrushFromOpticalFlowWithoutModel
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node helps interpret optical flow data to generate motion brush effects, which is crucial for visual simulation and effect generation, and does not rely on pre-trained models.

# Input types
## Required
- optical_flow
    - Optical flow data is crucial because it provides the basic information needed to infer motion patterns and create motion brush effects.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: numpy.ndarray

# Output types
- MotionBrush
    - The output represents a synthetic motion brush, containing motion patterns inferred from optical flow data.
    - Comfy dtype: MOTION_BRUSH
    - Python dtype: tuple

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
