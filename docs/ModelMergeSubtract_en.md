# Documentation
- Class name: ModelSubtract
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'merge' method of the ModelSubtract node aims to combine two models by subtracting key patches from one model using a specified multiplier. It performs a complex operation that integrates the characteristics of both models, allowing fine-tuned adjustments to their contributions.

# Input types
## Required
- model1
    - The 'model1' parameter is the main model from which patches will be subtracted. It plays a key role in the merge process as it forms the basic structure of the resulting model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter provides the key patches that will be subtracted from model1. It is crucial for determining the specific differences that will be integrated into the final model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- multiplier
    - The 'multiplier' parameter adjusts the intensity of the patches subtracted from model1. It is important as it allows fine-tuning the influence of model2 on the merged model.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_model
    - The 'merged_model' output represents the result of the model merging process. It encapsulates the combined features of the two input models, providing a new model with adjusted characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class ModelSubtract:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model1': ('MODEL',), 'model2': ('MODEL',), 'multiplier': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'merge'
    CATEGORY = 'advanced/model_merging'

    def merge(self, model1, model2, multiplier):
        m = model1.clone()
        kp = model2.get_key_patches('diffusion_model.')
        for k in kp:
            m.add_patches({k: kp[k]}, -multiplier, multiplier)
        return (m,)
```