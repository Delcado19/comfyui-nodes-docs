# Documentation
- Class name: SamplerLCMAlternative
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/jojkaart/ComfyUI-sampler-lcm-alternative

The SamplerLCMAlternative node aims to provide a custom sampling method for generative models. It utilizes advanced techniques to enhance the sampling process, ensuring more refined output with potentially higher quality. This node is particularly useful when traditional sampling methods may be insufficient, offering users a tailored approach to sampling.

# Input types
## Required
- euler_steps
    - The euler_steps parameter is crucial for determining the number of steps used in the Euler method for numerical integration, which can significantly affect the accuracy and stability of the sampling process. It allows users to fine-tune the sampling method to achieve a desired balance between performance and precision.
    - Comfy dtype: INT
    - Python dtype: int
- ancestral
    - The ancestral parameter controls the level of ancestral sampling, which influences the diversity of generated samples. It allows a trade-off between exploration and exploitation during the sampling process, enabling users to control the degree to which the model explores new possibilities versus sticking to known solutions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mult
    - The noise_mult parameter adjusts the magnitude of noise added to the sampling process, which can affect the variability and randomness of generated samples. This parameter is crucial for users who wish to introduce controlled levels of noise in sampling, potentially enhancing the creativity or diversity of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sampler
    - The output sampler is a custom sampling object that encapsulates the specified parameters and sampling logic. It serves as a tool for users to generate new samples from the generative model, providing a customized approach that aligns with their specific needs and preferences.
    - Comfy dtype: SAMPLER
    - Python dtype: comfy.samplers.KSAMPLER

# Usage tips
- Infra type: CPU

# Source code
```
class SamplerLCMAlternative:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'euler_steps': ('INT', {'default': 0, 'min': -10000, 'max': 10000}), 'ancestral': ('FLOAT', {'default': 0, 'min': 0, 'max': 1.0, 'step': 0.01, 'round': False}), 'noise_mult': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 2.0, 'step': 0.001, 'round': False})}}
    RETURN_TYPES = ('SAMPLER',)
    CATEGORY = 'sampling/custom_sampling/samplers'
    FUNCTION = 'get_sampler'

    def get_sampler(self, euler_steps, ancestral, noise_mult):
        sampler = comfy.samplers.KSAMPLER(sample_lcm_alt, extra_options={'euler_steps': euler_steps, 'noise_mult': noise_mult, 'ancestral': ancestral})
        return (sampler,)
```