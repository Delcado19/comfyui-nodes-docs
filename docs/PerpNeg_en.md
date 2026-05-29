# Documentation
- Class name: PerpNeg
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PerpNeg node aims to manipulate the model's sampling process by introducing negative conditioning aspects. It achieves this by altering the model's denoising steps, incorporating a negative scale factor, which helps guide the generation process towards more diverse results.

# Input types
## Required
- model
    - The model parameter is crucial for the PerpNeg node, as it represents the machine learning model to be modified. The node's functionality directly relates to the capability of the provided model, affecting how negative conditioning is applied during sampling.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- empty_conditioning
    - The empty condition serves as a placeholder for the input conditions that the model will use. It plays a key role in the node's operation, as it determines how the negative scale is applied during sampling, affecting the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
## Optional
- neg_scale
    - The neg_scale parameter is used to control the strength of the negative conditioning effect. It is particularly important because it directly influences the node's ability to diversify sampling results, providing a balance between positive and negative influences.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model of the PerpNeg node is a modified version of the input model, now incorporating negative conditioning aspects. This modified model can then be used for sampling, potentially leading to more diverse and creative results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class PerpNeg:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'empty_conditioning': ('CONDITIONING',), 'neg_scale': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = '_for_testing'

    def patch(self, model, empty_conditioning, neg_scale):
        m = model.clone()
        nocond = comfy.sampler_helpers.convert_cond(empty_conditioning)

        def cfg_function(args):
            model = args['model']
            noise_pred_pos = args['cond_denoised']
            noise_pred_neg = args['uncond_denoised']
            cond_scale = args['cond_scale']
            x = args['input']
            sigma = args['sigma']
            model_options = args['model_options']
            nocond_processed = comfy.samplers.encode_model_conds(model.extra_conds, nocond, x, x.device, 'negative')
            (noise_pred_nocond,) = comfy.samplers.calc_cond_batch(model, [nocond_processed], x, sigma, model_options)
            cfg_result = x - perp_neg(x, noise_pred_pos, noise_pred_neg, noise_pred_nocond, neg_scale, cond_scale)
            return cfg_result
        m.set_model_sampler_cfg_function(cfg_function)
        return (m,)
```