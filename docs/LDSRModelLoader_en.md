# Documentation
- Class name: LDSRModelLoader
- Category: Flowty LDSR
- Output node: False
- Repo Ref: https://github.com/flowtyone/ComfyUI-Flowty-LDSR.git

This node aims to load and prepare an LDSR model for use, abstracting away the complexity of model retrieval and initialization. It ensures the model is ready for upscaling tasks by transferring it to the appropriate device and setting it to evaluation mode.

# Input types
## Required
- model
    - The model parameter is critical as it specifies which LDSR model to load. It influences the entire operation by determining which model's state dictionary and configuration to use for the upscaling process.
    - Comfy dtype: COMBO[filename]
    - Python dtype: str

# Output types
- UPSCALE_MODEL
    - The output provides a fully initialized and prepared LDSR model, which is essential for subsequent image upscaling tasks.
    - Comfy dtype: COMBO[LDSR]
    - Python dtype: LDSR

# Usage tips
- Infra type: CPU

# Source code
```
class LDSRModelLoader:

    @classmethod
    def INPUT_TYPES(s):
        model_list = get_filename_list('upscale_models')
        candidates = [name for name in model_list if 'last.ckpt' in name]
        if len(candidates) > 0:
            default_path = candidates[0]
        else:
            default_path = 'last.ckpt'
        return {'required': {'model': (model_list, {'default': default_path})}}
    RETURN_TYPES = ('UPSCALE_MODEL',)
    FUNCTION = 'load'
    CATEGORY = 'Flowty LDSR'

    def load(self, model):
        model_path = get_full_path('upscale_models', model)
        model = LDSR.load_model_from_path(model_path)
        model['model'].cpu()
        return (model,)
```