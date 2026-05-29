# Documentation
- Class name: SamplerDPMPP_3M_SDE
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SamplerDPMPP_3M_SDE node aims to generate high-quality samples from a trained model using a specific sampling method (called DPM++ with a 3-Mixture SDE scheduler). It is suitable for scenarios requiring efficient and high-fidelity sampling, providing a balance between speed and sample quality.

# Input types
## Required
- eta
    - The parameter 'eta' controls the exploration rate during the sampling process. It is a key factor in determining the diversity of generated samples. Adjusting 'eta' can lead to more or fewer variations in the output, thereby affecting the overall creativity and uniqueness of the results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
    - The parameter 's_noise' defines the initial noise level applied during the sampling process. It plays an important role in the initial state of the sampling algorithm, affecting the starting point of generated samples. This parameter is crucial for setting the correct noise conditions to achieve the desired sample quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- noise_device
    - The parameter 'noise_device' specifies the computing device used to generate noise, which can be either GPU or CPU. This choice can affect the performance and efficiency of the sampling process, especially in scenarios requiring high computational power for faster processing.
    - Comfy dtype: COMBO['gpu', 'cpu']
    - Python dtype: str

# Output types
- sampler
    - The output 'sampler' is an instance of the sampling method tailored to the specific needs of the DPM++ 3-Mixture SDE scheduler. It encapsulates the functionality required to execute the sampling process, providing a structured approach to generating high-quality samples from the model.
    - Comfy dtype: SAMPLER
    - Python dtype: KSAMPLER

# Usage tips
- Infra type: GPU

# Source code
```
class SamplerDPMPP_3M_SDE:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'eta': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 's_noise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 'noise_device': (['gpu', 'cpu'],)}}
    RETURN_TYPES = ('SAMPLER',)
    CATEGORY = 'sampling/custom_sampling/samplers'
    FUNCTION = 'get_sampler'

    def get_sampler(self, eta, s_noise, noise_device):
        if noise_device == 'cpu':
            sampler_name = 'dpmpp_3m_sde'
        else:
            sampler_name = 'dpmpp_3m_sde_gpu'
        sampler = comfy.samplers.ksampler(sampler_name, {'eta': eta, 's_noise': s_noise})
        return (sampler,)
```