# Documentation
- Class name: InstantObjectMotionBrush
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

InstantObjectMotionBrush is designed to generate motion effects for objects in images or videos. This node identifies the trajectory of objects and applies motion brush effects based on specified parameters to enhance the visual representation of motion in creative or realistic ways.

# Input types
## Required
- model_length
    - Model length determines the duration of the motion effect, affecting the smoothness and detail of the motion trajectory.
    - Comfy dtype: INT
    - Python dtype: int
- brush_mask
    - Brush masks are essential for defining the regions of interest in the image where motion effects will be applied, ensuring precise control over the application of motion effects.
    - Comfy dtype: MASK
    - Python dtype: numpy.ndarray
- action
    - Motion parameters determine the type of motion to be simulated, such as zoom in, zoom out, move left, move right, up, or down, which directly affects the motion trajectory and the visual result of the motion effect.
    - Comfy dtype: COMBO
    - Python dtype: str
- speed
    - Speed adjusts the rate at which the motion effect is executed, affecting the intensity and realism of the motion.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- motion_brush
    - The output motion brush represents the calculated motion trajectory and displacement information, which is crucial for rendering the final motion effect.
    - Comfy dtype: MOTIONBRUSH
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class InstantObjectMotionBrush:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model_length': ('INT', {'default': 14}), 'brush_mask': ('MASK',), 'action': (['left', 'right', 'up', 'down', 'zoomin', 'zoomout'], {'default': 'left'}), 'speed': ('FLOAT', {'default': 5})}}
    RETURN_TYPES = ('MotionBrush',)
    FUNCTION = 'run_inference'
    CATEGORY = 'DragNUWA'

    def run_inference(self, model_length, brush_mask, action, speed):
        model_width = brush_mask.shape[2]
        model_height = brush_mask.shape[1]
        from torchvision.ops import masks_to_boxes
        boxes = masks_to_boxes(brush_mask)
        box = boxes[0].int().tolist()
        print(f'model_width{model_width}model_height{model_height}box{box}')
        xcount = 10
        ycount = 10
        if box[2] - box[0] < xcount:
            xcount = box[2] - box[0]
        if box[3] - box[1] < ycount:
            ycount = box[3] - box[1]
        xratio = (box[2] - box[0]) / xcount
        yratio = (box[3] - box[1]) / ycount
        tracking_points = []
        if action == 'zoomin':
            for j in range(ycount - 1):
                for k in range(xcount - 1):
                    if not bool(brush_mask[0][box[1] + int(j * yratio)][box[0] + int(k * xratio)]):
                        continue
                    item = []
                    for i in range(model_length - 1):
                        width = box[2] - box[0]
                        height = box[3] - box[1]
                        xi = box[0] + int(k * xratio) + i * speed / (width / 2) * (k * xratio - width / 2)
                        yi = box[1] + int(j * yratio) + i * speed / (height / 2) * (j * yratio - height / 2)
                        if xi > model_width - 1:
                            xi = model_width - 1
                        if yi > model_height - 1:
                            yi = model_height - 1
                        if xi < 0:
                            xi = 0
                        if yi < 0:
                            yi = 0
                        item.append([xi, yi])
                    tracking_points.append(item)
        elif action == 'zoomout':
            for j in range(ycount - 1):
                for k in range(xcount - 1):
                    if not bool(brush_mask[0][box[1] + int(j * yratio)][box[0] + int(k * xratio)]):
                        continue
                    item = []
                    for i in range(model_length - 1):
                        width = box[2] - box[0]
                        height = box[3] - box[1]
                        xi = box[0] + int(k * xratio) + i * -speed / (width / 2) * (k * xratio - width / 2)
                        yi = box[1] + int(j * yratio) + i * -speed / (height / 2) * (j * yratio - height / 2)
                        if xi > model_width - 1:
                            xi = model_width - 1
                        if yi > model_height - 1:
                            yi = model_height - 1
                        if xi < 0:
                            xi = 0
                        if yi < 0:
                            yi = 0
                        item.append([xi, yi])
                    tracking_points.append(item)
        elif action == 'left':
            for j in range(ycount - 1):
                for k in range(xcount - 1):
                    if not bool(brush_mask[0][box[1] + int(j * yratio)][box[0] + int(k * xratio)]):
                        continue
                    item = []
                    for i in range(model_length - 1):
                        width = box[2] - box[0]
                        height = box[3] - box[1]
                        xi = box[0] + int(k * xratio) + i * -speed
                        yi = box[1] + int(j * yratio)
                        if xi > model_width - 1:
                            xi = model_width - 1
                        if yi > model_height - 1:
                            yi = model_height - 1
                        if xi < 0:
                            xi = 0
                        if yi < 0:
                            yi = 0
                        item.append([xi, yi])
                    tracking_points.append(item)
        elif action == 'right':
            for j in range(ycount - 1):
                for k in range(xcount - 1):
                    if not bool(brush_mask[0][box[1] + int(j * yratio)][box[0] + int(k * xratio)]):
                        continue
                    item = []
                    for i in range(model_length - 1):
                        width = box[2] - box[0]
                        height = box[3] - box[1]
                        xi = box[0] + int(k * xratio) + i * speed
                        yi = box[1] + int(j * yratio)
                        if xi > model_width - 1:
                            xi = model_width - 1
                        if yi > model_height - 1:
                            yi = model_height - 1
                        if xi < 0:
                            xi = 0
                        if yi < 0:
                            yi = 0
                        item.append([xi, yi])
                    tracking_points.append(item)
        elif action == 'up':
            for j in range(ycount - 1):
                for k in range(xcount - 1):
                    if not bool(brush_mask[0][box[1] + int(j * yratio)][box[0] + int(k * xratio)]):
                        continue
                    item = []
                    for i in range(model_length - 1):
                        width = box[2] - box[0]
                        height = box[3] - box[1]
                        xi = box[0] + int(k * xratio)
                        yi = box[1] + int(j * yratio) + i * -speed
                        if xi > model_width - 1:
                            xi = model_width - 1
                        if yi > model_height - 1:
                            yi = model_height - 1
                        if xi < 0:
                            xi = 0
                        if yi < 0:
                            yi = 0
                        item.append([xi, yi])
                    tracking_points.append(item)
        elif action == 'down':
            for j in range(ycount - 1):
                for k in range(xcount - 1):
                    if not bool(brush_mask[0][box[1] + int(j * yratio)][box[0] + int(k * xratio)]):
                        continue
                    item = []
                    for i in range(model_length - 1):
                        width = box[2] - box[0]
                        height = box[3] - box[1]
                        xi = box[0] + int(k * xratio)
                        yi = box[1] + int(j * yratio) + i * speed
                        if xi > model_width - 1:
                            xi = model_width - 1
                        if yi > model_height - 1:
                            yi = model_height - 1
                        if xi < 0:
                            xi = 0
                        if yi < 0:
                            yi = 0
                        item.append([xi, yi])
                    tracking_points.append(item)
        motion_brush = load_motionbrush_from_tracking_points_without_model(model_length, model_width, model_height, tracking_points)
        return (motion_brush,)
```