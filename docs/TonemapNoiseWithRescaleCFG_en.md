# Documentation
- Class name: TonemapNoiseWithRescaleCFG
- Category: custom_node_experiments
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI_experiments

The TonemapNoiseWithRescaleCFG node enhances the visual quality of generated images by applying tone mapping techniques combined with denoising strategies. It adjusts image contrast and brightness through complex rescaling operations to optimize appearance and reduce noise.

# Input types
## Required
- model
    - Model parameters are crucial because they represent the generative model the node will operate on. They form the basis for applying tone mapping and rescaling operations to produce high‑quality images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- tonemap_multiplier
    - The tonemap_multiplier parameter controls the intensity of the tone mapping effect applied to the image. It is essential for fine‑tuning visual results to achieve desired contrast and brightness levels.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rescale_multiplier
    - The rescale_multiplier parameter determines the balance between rescaling and the original image values during denoising. It plays a key role in reducing noise while preserving image detail.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is the modified generative model, featuring an enhanced sampler configuration function that incorporates tone mapping and denoising techniques to produce more visually appealing images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class TonemapNoiseWithRescaleCFG:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'tonemap_multiplier': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01}), 'rescale_multiplier': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'custom_node_experiments'

    def patch(self, model, tonemap_multiplier, rescale_multiplier):

        def tonemap_noise_rescale_cfg(args):
            cond = args['cond']
            uncond = args['uncond']
            cond_scale = args['cond_scale']
            noise_pred = cond - uncond
            noise_pred_vector_magnitude = (torch.linalg.vector_norm(noise_pred, dim=1) + 1e-10)[:, None]
            noise_pred /= noise_pred_vector_magnitude
            mean = torch.mean(noise_pred_vector_magnitude, dim=(1, 2, 3), keepdim=True)
            std = torch.std(noise_pred_vector_magnitude, dim=(1, 2, 3), keepdim=True)
            top = (std * 3 + mean) * tonemap_multiplier
            noise_pred_vector_magnitude *= 1.0 / top
            new_magnitude = noise_pred_vector_magnitude / (noise_pred_vector_magnitude + 1.0)
            new_magnitude *= top
            x_cfg = uncond + noise_pred * new_magnitude * cond_scale
            ro_pos = torch.std(cond, dim=(1, 2, 3), keepdim=True)
            ro_cfg = torch.std(x_cfg, dim=(1, 2, 3), keepdim=True)
            x_rescaled = x_cfg * (ro_pos / ro_cfg)
            x_final = rescale_multiplier * x_rescaled + (1.0 - rescale_multiplier) * x_cfg
            return x_final
        m = model.clone()
        m.set_model_sampler_cfg_function(tonemap_noise_rescale_cfg)
        return (m,)
```