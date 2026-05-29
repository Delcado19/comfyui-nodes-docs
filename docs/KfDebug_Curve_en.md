# Documentation
- Class name: KfDebug_Curve
- Category: debug
- Output node: True
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node is designed to visualize and analyze the curvature of keyframe paths, clearly representing the smoothness and continuity in animation. It helps understand the trajectory and ensure that motion meets expectations, which is crucial for maintaining the desired aesthetic and fluidity in the final output.

# Input types
## Required
- curve_data
    - This parameter holds numeric data representing the curve being debugged. It is crucial because it forms the basis for visualization and analysis, enabling the node to effectively process and display the characteristics of the curve.
    - Comfy dtype: numpy.ndarray
    - Python dtype: numpy.ndarray

# Output types
- visualized_curve
    - The output is a visual representation of the input curve, essential for quickly identifying any irregularities or areas for improvement. It provides a tangible way to evaluate the curve's performance and make necessary adjustments.
    - Comfy dtype: PIL.Image
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class KfDebug_Curve(KfDebug_Passthrough):
    RETURN_TYPES = ('KEYFRAMED_CURVE',)
```