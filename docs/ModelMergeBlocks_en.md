# Documentation
- Class name: ModelMergeBlocks
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'merge' function of the ModelMergeBlocks node aims to fuse two different models into a unified structure. It achieves this by cloning the first model and then applying key patches from the second model according to a specified ratio. This process allows the creation of a hybrid model that combines the strengths of both original models, enhancing its overall predictive capabilities.

# Input types
## Required
- model1
    - The 'model1' parameter is the first model to be cloned and serve as the foundation for the merge process. It is a critical component because it determines the initial structure of the resulting hybrid model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter represents the second model from which key patches are extracted and applied to the cloned model. These patches are essential for incorporating the second model's characteristics into the merged model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- input
    - The 'input' parameter is a float value used as the default ratio in the merge process. It determines the influence of the second model's patches on the final model and can be adjusted to fine-tune the merge result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- middle
    - The 'middle' parameter is another float value that can be used to specify a different ratio for certain patches during the merge process. It provides additional control over how the models are merged.
    - Comfy dtype: FLOAT
    - Python dtype: float
- out
    - The 'out' parameter is a float value used to define the output ratio of the merge process. It is used to balance the contributions of the original models to the final hybrid model.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_model
    - The output 'merged_model' is the result of the merge process, combining the characteristics of the input models into a single, cohesive structure. It represents the culmination of the node's functionality, providing a new model with an enhanced set of capabilities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class ModelMergeBlocks:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model1': ('MODEL',), 'model2': ('MODEL',), 'input': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'middle': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'out': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'merge'
    CATEGORY = 'advanced/model_merging'

    def merge(self, model1, model2, **kwargs):
        m = model1.clone()
        kp = model2.get_key_patches('diffusion_model.')
        default_ratio = next(iter(kwargs.values()))
        for k in kp:
            ratio = default_ratio
            k_unet = k[len('diffusion_model.'):]
            last_arg_size = 0
            for arg in kwargs:
                if k_unet.startswith(arg) and last_arg_size < len(arg):
                    ratio = kwargs[arg]
                    last_arg_size = len(arg)
            m.add_patches({k: kp[k]}, 1.0 - ratio, ratio)
        return (m,)
```