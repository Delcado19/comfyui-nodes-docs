# Documentation
- Class name: PerturbedAttentionGuidance
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PerturbedAttentionGuidance class introduces a method to modify the model's attention mechanism by injecting perturbations, aiming to enhance the model's robustness and adaptability to various conditions.

# Input types
## Required
- model
    - Model parameters are necessary because they define the base architecture for applying perturbations, directly affecting the results of the attention guidance process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scale
    - The scale parameter adjusts the strength of the perturbation, significantly affecting how the model's attention is altered, which in turn affects the quality of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is a modified version of the input model, now enhanced with perturbed attention guidance, which can lead to improved performance in various tasks.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class PerturbedAttentionGuidance:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'scale': ('FLOAT', {'default': 3.0, 'min': 0.0, 'max': 100.0, 'step': 0.1, 'round': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = '_for_testing'

    def patch(self, model, scale):
        unet_block = 'middle'
        unet_block_id = 0
        m = model.clone()

        def perturbed_attention(q, k, v, extra_options, mask=None):
            return v

        def post_cfg_function(args):
            model = args['model']
            cond_pred = args['cond_denoised']
            cond = args['cond']
            cfg_result = args['denoised']
            sigma = args['sigma']
            model_options = args['model_options'].copy()
            x = args['input']
            if scale == 0:
                return cfg_result
            model_options = comfy.model_patcher.set_model_options_patch_replace(model_options, perturbed_attention, 'attn1', unet_block, unet_block_id)
            (pag,) = comfy.samplers.calc_cond_batch(model, [cond], x, sigma, model_options)
            return cfg_result + (cond_pred - pag) * scale
        m.set_model_sampler_post_cfg_function(post_cfg_function)
        return (m,)
```