# Documentation
- Class name: ModelSamplingStableCascade
- Category: advanced/model
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ModelSamplingStableCascade node aims to enhance the sampling process of generative models by integrating the stable cascade method. It allows users to customize the sampling process via the 'patch' method, modifying model behavior to adapt to advanced sampling techniques. This node is crucial for users who wish to implement complex sampling strategies that may improve the quality and diversity of generated outputs.

# Input types
## Required
- model
    - The 'model' parameter is crucial because it represents the generative model that will be modified by the node. It is the foundation for applying advanced sampling techniques and directly affects the execution of the node and the quality of generated outputs.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- shift
    - The 'shift' parameter plays a key role in controlling the sampling variance in the cascade model. It adjusts the sampling distribution to achieve different levels of detail or diversity in the generated images, thereby significantly affecting the node's results.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The 'modified_model' output represents the generative model that has been enhanced with the stable cascade sampling technique. It is important because it contains the node's modifications and is used for further processing or directly generating high-quality images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class ModelSamplingStableCascade:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'shift': ('FLOAT', {'default': 2.0, 'min': 0.0, 'max': 100.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'advanced/model'

    def patch(self, model, shift):
        m = model.clone()
        sampling_base = comfy.model_sampling.StableCascadeSampling
        sampling_type = comfy.model_sampling.EPS

        class ModelSamplingAdvanced(sampling_base, sampling_type):
            pass
        model_sampling = ModelSamplingAdvanced(model.model.model_config)
        model_sampling.set_parameters(shift)
        m.add_object_patch('model_sampling', model_sampling)
        return (m,)
```