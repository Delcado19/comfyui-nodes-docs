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
```
class LoadMotionBrushFromOpticalFlow:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('DragNUWA',), 'optical_flow': ('OPTICAL_FLOW',)}}
    RETURN_TYPES = ('MotionBrush',)
    FUNCTION = 'run_inference'
    CATEGORY = 'DragNUWA'

    def run_inference(self, model, optical_flow):
        return (model.load_motionbrush_from_optical_flow(optical_flow),)
```