# Documentation
- Class name: SeargeUpscaleModelLoader
- Category: Searge/_deprecated_/Files
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeUpscaleModelLoader node simplifies the loading of upscaler models in image enhancement tasks. It abstracts the complexity of model loading, enabling seamless integration of upsampling functionality into larger workflows. This node is essential for applications that require high‑quality image scaling without delving into model internals.

# Input types
## Required
- upscaler_name
- The parameter 'upscaler_name' is crucial for identifying the specific upscaler model to load. It plays a central role in the node’s operation, determining which model will be used for image upsampling and directly affecting the output quality and characteristics.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- UPSCALE_MODEL
- The 'UPSCALE_MODEL' output represents the loaded upscaler model and is a fundamental component for subsequent image processing tasks. It encapsulates the model’s architecture and learned parameters, ready to be applied to image upsampling according to workflow requirements.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeUpscaleModelLoader:

    def __init__(self):
        self.upscale_model_loader = comfy_extras.nodes_upscale_model.UpscaleModelLoader()

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'upscaler_name': ('UPSCALER_NAME',)}}
    RETURN_TYPES = ('UPSCALE_MODEL',)
    FUNCTION = 'load_upscaler'
    CATEGORY = 'Searge/_deprecated_/Files'

    def load_upscaler(self, upscaler_name):
        return self.upscale_model_loader.load_model(upscaler_name)
```