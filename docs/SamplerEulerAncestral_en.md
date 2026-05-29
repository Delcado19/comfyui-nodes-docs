# Documentation
- Class name: SamplerEulerAncestral
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SamplerEulerAncestral node is designed to generate an ancestral sampler using the Euler method. It contributes to the sampling process by providing a customized approach that leverages the characteristics of the Euler method to generate samples that conform to a specific noise schedule.

# Input types
## Required
- eta
    - The eta parameter is crucial for controlling the noise level during the sampling process. It directly affects the quality and convergence of the generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - The s_noise parameter is important for defining the initial noise level in the sampling process. It sets the starting point for noise reduction, impacting overall sample generation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sampler
    - The output sampler is a key component in the sampling process, encapsulating the logic for generating samples based on the provided noise schedule and parameters.
    - Comfy dtype: SAMPLER
    - Python dtype: comfy.samplers.KSampler

# Usage tips
- Infra type: CPU

# Source code
```
class SamplerEulerAncestral:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'eta': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 's_noise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False})}}
    RETURN_TYPES = ('SAMPLER',)
    CATEGORY = 'sampling/custom_sampling/samplers'
    FUNCTION = 'get_sampler'

    def get_sampler(self, eta, s_noise):
        sampler = comfy.samplers.ksampler('euler_ancestral', {'eta': eta, 's_noise': s_noise})
        return (sampler,)
```