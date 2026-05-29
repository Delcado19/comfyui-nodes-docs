# Documentation
- Class name: GetSigma
- Category: latent/noise
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_Noise.git

This node calculates the sigma value, an indicator of noise or signal-to-noise ratio in the context of a generative model. It processes the model’s output over a specified step range to determine sigma variations, providing insight into model behavior and noise characteristics.

# Input types
## Required
- model
    - Model parameters are crucial because they define the generative model to analyze. They influence the entire process by determining the data source used to compute sigma.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- sampler_name
    - The sampler name determines the method of sampling from the model, which in turn affects sigma calculation by influencing the quality and distribution of the sampled data.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SAMPLERS]
    - Python dtype: str
- scheduler
    - Scheduler parameters are essential because they control the sampling process, including denoising, directly impacting sigma calculation by altering the noise level in the sampled data.
    - Comfy dtype: COMBO[comfy.samplers.KSampler.SCHEDULERS]
    - Python dtype: str
- steps
    - The step parameter defines the iteration range for sigma calculation, affecting the comprehensiveness of noise analysis.
    - Comfy dtype: INT
    - Python dtype: int
- start_at_step
    - This parameter specifies the starting point for sigma calculation, determining the initial state of noise analysis and its evolution within the specified steps.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The ending step parameter sets the endpoint for sigma calculation, affecting the final state of noise analysis and the overall change of sigma within the step range.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sigma
    - The output sigma values represent changes in noise characteristics over the specified step range, providing a performance metric for the model in noise reduction and signal clarity.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: GPU

# Source code
```
class GetSigma:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'steps': ('INT', {'default': 10000, 'min': 0, 'max': 10000}), 'start_at_step': ('INT', {'default': 0, 'min': 0, 'max': 10000}), 'end_at_step': ('INT', {'default': 10000, 'min': 1, 'max': 10000})}}
    RETURN_TYPES = ('FLOAT',)
    FUNCTION = 'calc_sigma'
    CATEGORY = 'latent/noise'

    def calc_sigma(self, model, sampler_name, scheduler, steps, start_at_step, end_at_step):
        device = comfy.model_management.get_torch_device()
        end_at_step = min(steps, end_at_step)
        start_at_step = min(start_at_step, end_at_step)
        real_model = None
        comfy.model_management.load_model_gpu(model)
        real_model = model.model
        sampler = comfy.samplers.KSampler(real_model, steps=steps, device=device, sampler=sampler_name, scheduler=scheduler, denoise=1.0, model_options=model.model_options)
        sigmas = sampler.sigmas
        sigma = sigmas[start_at_step] - sigmas[end_at_step]
        sigma /= model.model.latent_format.scale_factor
        return (sigma.cpu().numpy(),)
```