# Documentation
- Class name: CoreMLDetailerHookProvider
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The CoreMLDetailerHookProvider node aims to facilitate the integration of CoreML models within the ImpactPack/Detailer category. It provides a method to generate a hook that can be used to customize the behavior of models in image processing tasks. This node is particularly useful for adjusting image resolution and aspect ratio to meet CoreML model requirements.

# Input types
## Required
- mode
    - The mode parameter specifies the resolution and aspect ratio for image processing. It is critical because it determines how the CoreML model will process input images. The node uses this information to resize images to fit model requirements.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- DETAILER_HOOK
    - The output of this node is a CoreMLHook object, a specialized hook designed to work with CoreML models. It includes methods for preprocessing and postprocessing samples to ensure compatibility with the model's expected input and output formats.
    - Comfy dtype: CoreMLHook
    - Python dtype: CoreMLHook

# Usage tips
- Infra type: CPU

# Source code
```
class CoreMLDetailerHookProvider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mode': (['512x512', '768x768', '512x768', '768x512'],)}}
    RETURN_TYPES = ('DETAILER_HOOK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detailer'

    def doit(self, mode):
        hook = hooks.CoreMLHook(mode)
        return (hook,)
```