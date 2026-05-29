# Documentation
- Class name: CompositeMotionBrushWithoutModel
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node integrates two layers of motion information to produce a composite motion brush effect. It prioritizes certain layers' motion data fusion principles based on the defined operation mode. The node's purpose is to enhance motion representation through reasonable combination of input layers, creating coherent and visually appealing effects.

# Input types
## Required
- motion_brush_layer0
    - First layer motion information, serving as the base layer for the composite effect. It is crucial in establishing the initial representation of motion that will be further refined by combining with the second layer.
    - Comfy dtype: MotionBrush
    - Python dtype: numpy.ndarray
- motion_brush_layer1
    - Second layer motion information, providing additional motion cues to blend with the base layer. Its importance lies in its ability to introduce new motion elements and adjust the overall composite effect.
    - Comfy dtype: MotionBrush
    - Python dtype: numpy.ndarray
- mode
    - The mode parameter determines how the two layers of motion information are combined. It is critical in controlling the final output, as it decides which motion elements take precedence and how they interact in the composite.
    - Comfy dtype: CompositeMotionBrushMode
    - Python dtype: CompositeMotionBrushMode

# Output types
- results
    - The output represents the final composite motion brush, which is a blend of the two input layers according to the specified mode. It encapsulates the integrated motion data, ready for further processing or visualization.
    - Comfy dtype: MotionBrush
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
