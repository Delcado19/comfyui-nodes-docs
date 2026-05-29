# Documentation
- Class name: DynamicThresholdingComfyNode
- Category: advanced/mcmonkey
- Output node: False
- Repo Ref: https://github.com/mcmonkeyprojects/sd-dynamic-thresholding

This node dynamically adjusts the model's thresholding process to achieve the desired level of mimicry and control the generated output. It refines the model's response by interpreting scale and variability measures, optimizing the generation process according to specified parameters.

# Input types
## Required
- model
    - Model parameters are essential, defining the foundation of node operations. They serve as the basis for applying the dynamic thresholding process, and their characteristics directly influence the output results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- mimic_scale
    - The mimic_scale parameter is critical for controlling the degree of mimicry in the output. It adjusts the intensity of the thresholding process, thereby affecting the final quality and similarity of the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold_percentile
    - The threshold_percentile parameter plays an important role in determining the variability of the generated content. It sets a threshold based on percentile values, used to control dynamic scaling of features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mimic_mode
    - The mimic_mode parameter specifies the scaling mode during the thresholding process. It plays a key role in defining how the model adapts to input and adjusts its output accordingly.
    - Comfy dtype: ENUM
    - Python dtype: str
- cfg_mode
    - The cfg_mode parameter specifies the configuration mode for dynamic thresholds. It is critical in guiding how the node interprets and applies scaling factors for feature adjustments.
    - Comfy dtype: ENUM
    - Python dtype: str

# Output types
- model
    - The output model is the result of the dynamic thresholding process. It has been optimized and adjusted based on input parameters, providing optimized and controlled output that meets the desired mimicry and quality standards.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class DynamicThresholdingComfyNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'mimic_scale': ('FLOAT', {'default': 7.0, 'min': 0.0, 'max': 100.0, 'step': 0.5}), 'threshold_percentile': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'mimic_mode': (DynThresh.Modes,), 'mimic_scale_min': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 100.0, 'step': 0.5}), 'cfg_mode': (DynThresh.Modes,), 'cfg_scale_min': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 100.0, 'step': 0.5}), 'sched_val': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01}), 'separate_feature_channels': (['enable', 'disable'],), 'scaling_startpoint': (DynThresh.Startpoints,), 'variability_measure': (DynThresh.Variabilities,), 'interpolate_phi': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'advanced/mcmonkey'

    def patch(self, model, mimic_scale, threshold_percentile, mimic_mode, mimic_scale_min, cfg_mode, cfg_scale_min, sched_val, separate_feature_channels, scaling_startpoint, variability_measure, interpolate_phi):
        dynamic_thresh = DynThresh(mimic_scale, threshold_percentile, mimic_mode, mimic_scale_min, cfg_mode, cfg_scale_min, sched_val, 0, 999, separate_feature_channels == 'enable', scaling_startpoint, variability_measure, interpolate_phi)

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