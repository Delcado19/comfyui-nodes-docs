# Documentation
- Class name: RescaleClassifierFreeGuidance
- Category: custom_node_experiments
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI_experiments

The 'patch' method of the RescaleClassifierFreeGuidance node is designed to modify a given model by introducing a rescaling operation. It adjusts the model's internal configuration, applying a dynamic scaling factor to the classifier's guidance signal, thereby allowing finer control over the model's behavior. This approach is especially suitable for fine‑tuning the model's output to meet specific requirements or constraints.

# Input types
## Required
- model
    - The `model` parameter is critical to the node because it represents the machine‑learning model that the `patch` method will modify. It is the primary input, determining the node's operation and the subsequent behavior of the model after the patching process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- multiplier
    - The `multiplier` parameter plays a key role in controlling the degree of rescaling applied to the model's guidance signal. It is a floating‑point number that balances the original configuration with the rescaled configuration, directly affecting the model's output after patching.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The `modified_model` output is the result of applying the `patch` method to the input model. It is a modified version of the original model with its guidance signal scaling factor adjusted, which may produce different results based on the specified multiplier.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class RescaleClassifierFreeGuidance:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'multiplier': ('FLOAT', {'default': 0.7, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'custom_node_experiments'

    def patch(self, model, multiplier):

        def rescale_cfg(args):
            cond = args['cond']
            uncond = args['uncond']
            cond_scale = args['cond_scale']
            x_cfg = uncond + cond_scale * (cond - uncond)
            ro_pos = torch.std(cond, dim=(1, 2, 3), keepdim=True)
            ro_cfg = torch.std(x_cfg, dim=(1, 2, 3), keepdim=True)
            x_rescaled = x_cfg * (ro_pos / ro_cfg)
            x_final = multiplier * x_rescaled + (1.0 - multiplier) * x_cfg
            return x_final
        m = model.clone()
        m.set_model_sampler_cfg_function(rescale_cfg)
        return (m,)
```