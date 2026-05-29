# Documentation
- Class name: LoadMotionBrushFromTrackingPoints
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node facilitates the creation of motion brushes by interpreting tracking points, generating a vector field that represents motion in the sequence.

# Input types
## Required
- tracking_points
    - Tracking points are required because they provide source data for motion detection and brush creation, determining the node's output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- MotionBrush
    - The output represents a detailed motion vector field, essential for visualizing and applying motion effects.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
