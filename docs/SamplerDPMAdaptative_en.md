# Documentation
- Class name: SamplerDPMAdaptative
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SamplerDPMAdaptative node aims to generate high‑quality samples through an adaptive sampling process. It leverages the k‑diffusion library, providing a flexible and efficient sampling mechanism that can be fine‑tuned for different use cases.

# Input types
## Required
- order
- The "order" parameter is crucial for determining the order of the numerical method used in sampling. It directly affects the accuracy and stability of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- rtol
- The "rtol" parameter sets the relative tolerance of the sampling algorithm, which is essential for controlling precision.
    - Comfy dtype: FLOAT
    - Python dtype: float
- atol
- The "atol" parameter defines the absolute tolerance level of the sampling process, ensuring generated samples meet a quality standard.
    - Comfy dtype: FLOAT
    - Python dtype: float
- h_init
- The "h_init" parameter initializes the step size of the sampling algorithm, playing a key role in efficiency and performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pcoeff
- The "pcoeff" parameter influences the prediction component of the adaptive sampling process, affecting overall sample quality and convergence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- icoeff
- The "icoeff" parameter controls the integration component in adaptive sampling, which is vital for maintaining result integrity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dcoeff
- The "dcoeff" parameter adjusts the damping factor in the adaptive sampling process, ensuring stability and smoothness of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- accept_safety
- The "accept_safety" parameter defines the safety threshold for accepting new samples during adaptive sampling, important for result reliability.
    - Comfy dtype: FLOAT
    - Python dtype: float
- eta
- The "eta" parameter is a key factor in the adaptive sampling process, influencing decisions about accepting new samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- s_noise
- The "s_noise" parameter sets the noise level introduced during sampling, which can affect diversity and randomness of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SAMPLER
- The output SAMPLER is a configured sampling algorithm instance, ready to generate samples using the provided parameters.
    - Comfy dtype: SAMPLER
    - Python dtype: KSAMPLER

# Usage tips
- Infra type: GPU

# Source code
```
class SamplerDPMAdaptative:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'order': ('INT', {'default': 3, 'min': 2, 'max': 3}), 'rtol': ('FLOAT', {'default': 0.05, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 'atol': ('FLOAT', {'default': 0.0078, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 'h_init': ('FLOAT', {'default': 0.05, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 'pcoeff': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 'icoeff': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 'dcoeff': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 'accept_safety': ('FLOAT', {'default': 0.81, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 'eta': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False}), 's_noise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01, 'round': False})}}
    RETURN_TYPES = ('SAMPLER',)
    CATEGORY = 'sampling/custom_sampling/samplers'
    FUNCTION = 'get_sampler'

    def get_sampler(self, order, rtol, atol, h_init, pcoeff, icoeff, dcoeff, accept_safety, eta, s_noise):
        sampler = comfy.samplers.ksampler('dpm_adaptive', {'order': order, 'rtol': rtol, 'atol': atol, 'h_init': h_init, 'pcoeff': pcoeff, 'icoeff': icoeff, 'dcoeff': dcoeff, 'accept_safety': accept_safety, 'eta': eta, 's_noise': s_noise})
        return (sampler,)
```