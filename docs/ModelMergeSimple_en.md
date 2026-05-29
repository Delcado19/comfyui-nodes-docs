# Documentation
- Class name: ModelMergeSimple
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ModelMergeSimple node is designed to seamlessly integrate two different models into a single, unified unit. It achieves this by merging key patches from one model with another, allowing a balanced combination based on a specified ratio. This node is especially suitable for advanced applications where models need to be fused to enhance performance or functionality.

# Input types
## Required
- model1
    - The 'model1' parameter represents the primary model that will be merged with another model. It is a key element in the merging process as it forms the basis of the final combined model. The execution and results of the node are greatly influenced by the characteristics and structure of 'model1'.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter is the secondary model that provides patches to be merged with 'model1'. Its role is important as it provides differentiating elements that will be integrated into the final model, thus affecting overall functionality and performance.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ratio
    - The 'ratio' parameter determines the influence of 'model2' on the merged model. It is a floating-point value ranging from 0.0 to 1.0, where 1.0 indicates full influence of 'model2'. This parameter is crucial for controlling the balance between the two models during the merging process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_model
    - The 'merged_model' output represents the result of merging 'model1' and 'model2' based on the specified 'ratio'. It encapsulates the combined functionality and characteristics of both models, providing a unified model for further use or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class ModelMergeSimple:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model1': ('MODEL',), 'model2': ('MODEL',), 'ratio': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'merge'
    CATEGORY = 'advanced/model_merging'

    def merge(self, model1, model2, ratio):
        m = model1.clone()
        kp = model2.get_key_patches('diffusion_model.')
        for k in kp:
            m.add_patches({k: kp[k]}, 1.0 - ratio, ratio)
        return (m,)
```