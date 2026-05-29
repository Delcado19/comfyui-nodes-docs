# Documentation
- Class name: CompositeMotionBrush
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node integrates multiple motion layers into a single composite layer, applying a hybrid algorithm based on predefined patterns to prioritize certain motion vectors, thereby enhancing overall motion representation.

# Input types
## Required
- model
    - Model parameters define the structural foundation of motion layers, determining the dimensionality and length of input motion data, which is critical for node operation.
    - Comfy dtype: DragNUWA
    - Python dtype: DragNUWA
- motion_brush_layer0
    - This parameter represents the base motion layer, serving as the initial input for the node’s mixing process and significantly influencing the final composite motion output.
    - Comfy dtype: MotionBrush
    - Python dtype: MotionBrush
- motion_brush_layer1
    - The secondary motion layer provides additional motion vectors for consideration during mixing, influencing the final composite motion by introducing new motion elements.
    - Comfy dtype: MotionBrush
    - Python dtype: MotionBrush
- mode
    - This parameter determines the mixing strategy the node uses to integrate motion layers, defaulting to 'override', which dictates how motion vectors are prioritized in the final output.
    - Comfy dtype: CompositeMotionBrushMode
    - Python dtype: CompositeMotionBrushMode

# Output types
- results
    - The output represents the composite motion layer, resulting from mixing input motion layers according to the specified pattern, providing an enhanced motion representation.
    - Comfy dtype: MotionBrush
    - Python dtype: MotionBrush

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
