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
```
class CompositeMotionBrushWithoutModel:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'motion_brush_layer0': ('MotionBrush',), 'motion_brush_layer1': ('MotionBrush',), 'mode': (CompositeMotionBrushMode, {'default': 'override'})}}
    RETURN_TYPES = ('MotionBrush',)
    FUNCTION = 'run_inference'
    CATEGORY = 'DragNUWA'

    def run_inference(self, motion_brush_layer0, motion_brush_layer1, mode):
        model_length = motion_brush_layer0.shape[0]
        height = motion_brush_layer0.shape[1]
        width = motion_brush_layer0.shape[2]
        results = motion_brush_layer0
        for i in range(model_length):
            xmasked = False
            for x in range(0, width):
                xpremasked = xmasked
                xmasked = False
                masked = False
                for y in range(0, height):
                    premasked = masked
                    masked = False
                    if abs(float(motion_brush_layer1[i][y][x][0])) > 0.0001 or abs(float(motion_brush_layer1[i][y][x][1])) > 0.0001:
                        masked = True
                        xmasked = True
                    elif premasked and y + 1 < height:
                        y1max = height
                        if y + 50 < y1max:
                            y1max = y + 50
                        for y1 in range(y + 1, y1max):
                            if abs(float(motion_brush_layer1[i][y1][x][0])) > 0.0001 or abs(float(motion_brush_layer1[i][y1][x][1])) > 0.0001:
                                masked = True
                                xmasked = True
                    if masked:
                        results[i][y][x][0] = motion_brush_layer1[i][y][x][0]
                        results[i][y][x][1] = motion_brush_layer1[i][y][x][1]
                    else:
                        if xpremasked and x + 1 < width:
                            x1max = width
                            if x + 50 < x1max:
                                x1max = x + 50
                            for x1 in range(x + 1, x1max):
                                if abs(float(motion_brush_layer1[i][y][x1][0])) > 0.0001 or abs(float(motion_brush_layer1[i][y][x1][1])) > 0.0001:
                                    masked = True
                                    xmasked = True
                        if masked:
                            results[i][y][x][0] = motion_brush_layer1[i][y][x][0]
                            results[i][y][x][1] = motion_brush_layer1[i][y][x][1]
                        else:
                            results[i][y][x][0] = motion_brush_layer0[i][y][x][0]
                            results[i][y][x][1] = motion_brush_layer0[i][y][x][1]
        return (results,)
```