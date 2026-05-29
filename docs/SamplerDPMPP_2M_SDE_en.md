# Documentation
- Class name: SamplerDPMPP_2M_SDE
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SamplerDPMPP_2M_SDE class aims to provide a sampling method that generates data points from a probability distribution. It uses an SDE (stochastic differential equation) approach to create a Markov chain that converges to the desired distribution. This node is especially suitable for applications requiring high-quality samples where computational efficiency is critical.

# Input types
## Required
- solver_type
    - solver_type parameter determines the numerical method used for the underlying SDE. It is critical for the accuracy and stability of the sampling process. Available options are 'midpoint' and 'heun', each offering different trade-offs between speed and precision.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- eta
    - eta parameter controls the learning rate in the SDE sampling process. It significantly affects convergence speed and the quality of generated samples. Selecting an appropriate eta value is crucial to balance exploration and exploitation in the sampling space.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - s_noise parameter represents the noise level in the sampling process. It is an important factor in determining the variability of generated samples. Adjusting s_noise can help achieve the desired level of diversity in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_device
    - noise_device parameter specifies the computational device used to generate noise during sampling. It can be set to 'gpu' or 'cpu', depending on available hardware and desired performance characteristics.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- sampler
    - The output of the SamplerDPMPP_2M_SDE node is a sampler object that encapsulates a configured sampling method. This object can be used to generate samples from a specified distribution according to the parameters provided during node configuration.
    - Comfy dtype: SAMPLER
    - Python dtype: KSAMPLER

# Usage tips
- Infra type: GPU

# Source code
```
class SamplerDPMPP_2M_SDE:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'solver_type': (['midpoint', 'heun'],), 'eta': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 's_noise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 'noise_device': (['gpu', 'cpu'],)}}
    RETURN_TYPES = ('SAMPLER',)
    CATEGORY = 'sampling/custom_sampling/samplers'
    FUNCTION = 'get_sampler'

    def get_sampler(self, solver_type, eta, s_noise, noise_device):
        if noise_device == 'cpu':
            sampler_name = 'dpmpp_2m_sde'
        else:
            sampler_name = 'dpmpp_2m_sde_gpu'
        sampler = comfy.samplers.ksampler(sampler_name, {'eta': eta, 's_noise': s_noise, 'solver_type': solver_type})
        return (sampler,)
```