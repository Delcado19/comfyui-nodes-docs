# Documentation
- Class name: SelfAttentionGuidance
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SelfAttentionGuidance class aims to enhance attention mechanisms in models by providing self-attention-based guidance. It modifies the model's attention process to incorporate additional context, potentially improving the model's ability to focus on relevant parts of the input data.

# Input types
## Required
- model
    - The model parameter is essential for the SelfAttentionGuidance node, as it represents the machine learning model that the node will modify and guide. The node's functionality is directly related to the model's architecture and capabilities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scale
    - The scale parameter adjusts the influence of self-attention guidance on the model output. It is a key component that allows fine-tuning the point's impact on the model's attention process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur_sigma
    - The blur_sigma parameter defines the degree of blurring applied in the model's post-configuration function. It is important as it can affect the visual quality and detail preservation of the model output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The modified_model output is the result of applying the SelfAttentionGuidance patch to the input model. It represents the model with enhanced attention mechanisms, ready for further use or evaluation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class SelfAttentionGuidance:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'scale': ('FLOAT', {'default': 0.5, 'min': -2.0, 'max': 5.0, 'step': 0.1}), 'blur_sigma': ('FLOAT', {'default': 2.0, 'min': 0.0, 'max': 10.0, 'step': 0.1})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = '_for_testing'

    def patch(self, model, scale, blur_sigma):
        m = model.clone()
        attn_scores = None

        def attn_and_record(q, k, v, extra_options):
            nonlocal attn_scores
            heads = extra_options['n_heads']
            cond_or_uncond = extra_options['cond_or_uncond']
            b = q.shape[0] // len(cond_or_uncond)
            if 1 in cond_or_uncond:
                uncond_index = cond_or_uncond.index(1)
                (out, sim) = attention_basic_with_sim(q, k, v, heads=heads)
                n_slices = heads * b
                attn_scores = sim[n_slices * uncond_index:n_slices * (uncond_index + 1)]
                return out
            else:
                return optimized_attention(q, k, v, heads=heads)

        def post_cfg_function(args):
            nonlocal attn_scores
            uncond_attn = attn_scores
            sag_scale = scale
            sag_sigma = blur_sigma
            sag_threshold = 1.0
            model = args['model']
            uncond_pred = args['uncond_denoised']
            uncond = args['uncond']
            cfg_result = args['denoised']
            sigma = args['sigma']
            model_options = args['model_options']
            x = args['input']
            if min(cfg_result.shape[2:]) <= 4:
                return cfg_result
            degraded = create_blur_map(uncond_pred, uncond_attn, sag_sigma, sag_threshold)
            degraded_noised = degraded + x - uncond_pred
            (sag,) = comfy.samplers.calc_cond_batch(model, [uncond], degraded_noised, sigma, model_options)
            return cfg_result + (degraded - sag) * sag_scale
        m.set_model_sampler_post_cfg_function(post_cfg_function, disable_cfg1_optimization=True)
        m.set_model_attn1_replace(attn_and_record, 'middle', 0, 0)
        return (m,)
```