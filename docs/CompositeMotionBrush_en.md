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
```
class CompositeMotionBrush:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('DragNUWA',), 'motion_brush_layer0': ('MotionBrush',), 'motion_brush_layer1': ('MotionBrush',), 'mode': (CompositeMotionBrushMode, {'default': 'override'})}}
    RETURN_TYPES = ('MotionBrush',)
    FUNCTION = 'run_inference'
    CATEGORY = 'DragNUWA'

    def run_inference(self, model, motion_brush_layer0, motion_brush_layer1, mode):
        results = motion_brush_layer0
        for i in range(model.model_length):
            for x in range(0, model.width):
                masked = False
                for y in range(0, model.height):
                    premasked = masked
                    masked = False
                    if abs(float(motion_brush_layer1[i][y][x][0])) > 0.0001 or abs(float(motion_brush_layer1[i][y][x][1])) > 0.0001:
                        masked = True
                    elif premasked and y + 1 < model.height:
                        y1max = model.height
                        if y + 50 < y1max:
                            y1max = y + 50
                        for y1 in range(y + 1, y1max):
                            if abs(float(motion_brush_layer1[i][y1][x][0])) > 0.0001 or abs(float(motion_brush_layer1[i][y1][x][1])) > 0.0001:
                                masked = True
                    if masked:
                        results[i][y][x][0] = motion_brush_layer1[i][y][x][0]
                        results[i][y][x][1] = motion_brush_layer1[i][y][x][1]
                    else:
                        results[i][y][x][0] = motion_brush_layer0[i][y][x][0]
                        results[i][y][x][1] = motion_brush_layer0[i][y][x][1]
        return (results,)
```