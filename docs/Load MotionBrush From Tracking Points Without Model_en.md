# Documentation
- Class name: LoadMotionBrushFromTrackingPointsWithoutModel
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node abstracts the process of generating motion data from tracking points without requiring a pre-stored model, allowing users to create motion brushes based on provided tracking points.

# Input types
## Required
- model_length
    - The model length parameter determines the duration of the motion sequence, which is crucial for the node's operation as it defines the number of frames in the output motion brush.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width parameter specifies the horizontal resolution of the motion brush, which is essential for establishing the spatial context of motion data.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter defines the vertical resolution of the motion brush, playing a key role in the node's functionality by determining the spatial dimensions of the output.
    - Comfy dtype: INT
    - Python dtype: int
- tracking_points
    - The tracking point parameter is required as it provides the raw tracking data used to construct the motion brush, directly affecting the quality and accuracy of the motion.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- MotionBrush
    - The output MotionBrush is a tensor representing motion data over the specified duration and spatial dimensions, encompassing the node's primary functionality.
    - Comfy dtype: TORCH_TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class LoadMotionBrushFromTrackingPointsWithoutModel:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model_length': ('INT', {'default': 14}), 'width': ('INT', {'default': 36}), 'height': ('INT', {'default': 20}), 'tracking_points': ('STRING', {'multiline': True, 'default': '[[[1,1],[2,2]]]'})}}
    RETURN_TYPES = ('MotionBrush',)
    FUNCTION = 'run_inference'
    CATEGORY = 'DragNUWA'

    def run_inference(self, model_length, width, height, tracking_points):
        tracking_points = json.loads(tracking_points)
        motionbrush = load_motionbrush_from_tracking_points_without_model(model_length, width, height, tracking_points)
        return (motionbrush,)
```