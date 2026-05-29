# Documentation
- Class name: ONNXDetectorProvider
- Category: ImpactPack
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ONNXDetectorProvider node is designed to facilitate loading and providing ONNX models for detection tasks. It serves as an interface for integrating ONNX-based detection models into workflows, abstracting the complexity of model loading and setup.

# Input types
## Required
- model_name
    - The model_name parameter is critical for identifying the specific ONNX model to load. It ensures the correct model is used for detection tasks, affecting the node's execution and result accuracy.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- BBOX_DETECTOR
    - The BBOX_DETECTOR output provides a configured ONNXDetector object for performing object detection tasks. This object encapsulates the ONNX model's functionality and is a core component in the detection process.
    - Comfy dtype: ONNXDetector
    - Python dtype: ONNXDetector

# Usage tips
- Infra type: CPU

# Source code
```
class ONNXDetectorProvider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model_name': (folder_paths.get_filename_list('onnx'),)}}
    RETURN_TYPES = ('BBOX_DETECTOR',)
    FUNCTION = 'load_onnx'
    CATEGORY = 'ImpactPack'

    def load_onnx(self, model_name):
        model = folder_paths.get_full_path('onnx', model_name)
        return (core.ONNXDetector(model),)
```