# Documentation
- Class name: UpscaleModelLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The UpscaleModelLoader node is designed to efficiently manage and load upscaling models from a specified directory. It abstracts the complexity of file handling and model loading, ensuring seamless integration into the system.

# Input types
## Required
- model_name
    - The model_name parameter is essential for identifying the specific upscaling model to load. It directs the node to the correct file path and ensures the appropriate model is used in the application.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- UPSCALE_MODEL
    - The UPSCALE_MODEL output provides the loaded upscaling model for further processing or analysis. It represents the outcome of the node's operation, providing a structured model for downstream components.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class UpscaleModelLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model_name': (folder_paths.get_filename_list('upscale_models'),)}}
    RETURN_TYPES = ('UPSCALE_MODEL',)
    FUNCTION = 'load_model'
    CATEGORY = 'loaders'

    def load_model(self, model_name):
        model_path = folder_paths.get_full_path('upscale_models', model_name)
        sd = comfy.utils.load_torch_file(model_path, safe_load=True)
        if 'module.layers.0.residual_group.blocks.0.norm1.weight' in sd:
            sd = comfy.utils.state_dict_prefix_replace(sd, {'module.': ''})
        out = model_loading.load_state_dict(sd).eval()
        return (out,)
```