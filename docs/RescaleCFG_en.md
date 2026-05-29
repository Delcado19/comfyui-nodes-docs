# Documentation
- Class name: RescaleCFG
- Category: advanced/model
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The RescaleCFG node modifies the model configuration by applying a scaling factor to its parameters. This adjustment aims to enhance model performance or adapt it to different operating conditions without altering its core architecture.

# Input types
## Required
- model
- The model parameters are essential because they define the base model to be rescaled. They are the primary input to the node operation to achieve the desired scaling effect.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- multiplier
- The multiplier parameter is essential because it determines the degree of scaling applied to the model configuration. It directly influences the final outcome of the rescaling process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- rescaled_model
- The rescaled model output represents the model after the scaling process has been applied. It is the result of the node operation and marks the model's new configuration.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class RescaleCFG:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'multiplier': ('FLOAT', {'default': 0.7, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'advanced/model'

    def patch(self, model, multiplier):

        def rescale_cfg(args):
            cond = args['cond']
            uncond = args['uncond']
            cond_scale = args['cond_scale']
            sigma = args['sigma']
            sigma = sigma.view(sigma.shape[:1] + (1,) * (cond.ndim - 1))
            x_orig = args['input']
            x = x_orig / (sigma * sigma + 1.0)
            cond = (x - (x_orig - cond)) * (sigma ** 2 + 1.0) ** 0.5 / sigma
            uncond = (x - (x_orig - uncond)) * (sigma ** 2 + 1.0) ** 0.5 / sigma
            x_cfg = uncond + cond_scale * (cond - uncond)
            ro_pos = torch.std(cond, dim=(1, 2, 3), keepdim=True)
            ro_cfg = torch.std(x_cfg, dim=(1, 2, 3), keepdim=True)
            x_rescaled = x_cfg * (ro_pos / ro_cfg)
            x_final = multiplier * x_rescaled + (1.0 - multiplier) * x_cfg
            return x_orig - (x - x_final * sigma / (sigma * sigma + 1.0) ** 0.5)
        m = model.clone()
        m.set_model_sampler_cfg_function(rescale_cfg)
        return (m,)
```