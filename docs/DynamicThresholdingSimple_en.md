# Documentation
- Class name: DynamicThresholdingSimpleComfyNode
- Category: advanced/mcmonkey
- Output node: False
- Repo Ref: https://github.com/mcmonkeyprojects/sd-dynamic-thresholding

This node dynamically adjusts the model's threshold settings based on the specified percentile and scaling factor, enabling the model output to conform to the desired characteristics.

# Input types
## Required
- model
    - The model parameter is critical because it defines the underlying architecture and parameters of the neural network whose output will undergo dynamic thresholding.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- mimic_scale
    - This parameter adjusts the degree to which the model output is modified to match the target characteristics, significantly impacting the overall effectiveness of the node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold_percentile
    - The threshold percentile determines the relative threshold used to adjust the model output, which is essential for achieving the desired output distribution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is a modified version of the input model, now featuring threshold parameters adjusted according to the specified target characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class DynamicThresholdingSimpleComfyNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'mimic_scale': ('FLOAT', {'default': 7.0, 'min': 0.0, 'max': 100.0, 'step': 0.5}), 'threshold_percentile': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'advanced/mcmonkey'

    def patch(self, model, mimic_scale, threshold_percentile):
        dynamic_thresh = DynThresh(mimic_scale, threshold_percentile, 'CONSTANT', 0, 'CONSTANT', 0, 0, 0, 999, False, 'MEAN', 'AD', 1)

        def sampler_dyn_thresh(args):
            input = args['input']
            cond = input - args['cond']
            uncond = input - args['uncond']
            cond_scale = args['cond_scale']
            time_step = model.model.model_sampling.timestep(args['sigma'])
            time_step = time_step[0].item()
            dynamic_thresh.step = 999 - time_step
            return input - dynamic_thresh.dynthresh(cond, uncond, cond_scale, None)
        m = model.clone()
        m.set_model_sampler_cfg_function(sampler_dyn_thresh)
        return (m,)
```