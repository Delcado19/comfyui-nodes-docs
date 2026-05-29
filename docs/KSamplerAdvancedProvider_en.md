# Documentation
- Class name: KSamplerAdvancedProvider
- Category: ImpactPack/Sampler
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The KSamplerAdvancedProvider node is designed to generate advanced sampling techniques for generative models. It utilizes the KSamplerAdvancedWrapper to provide complex sampling processes that can be fine-tuned through various parameters such as configuration settings, sampler name, and scheduler. This node is critical for achieving high-quality results in image synthesis tasks, as it allows for precise control over the sampling process.

# Input types
## Required
- cfg
    - The 'cfg' parameter is essential for configuring the sampling process. It influences the overall behavior of the sampler by determining key aspects such as the scale of sampling steps. This parameter is crucial for achieving the desired results in image synthesis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The 'sampler_name' parameter specifies the type of sampler to be used during the sampling process. It is a key determinant in shaping the characteristics of generated samples and therefore plays a significant role in the execution of the node.
    - Comfy dtype: SAMPLER
    - Python dtype: str
- scheduler
    - The 'scheduler' parameter defines the scheduling strategy for sampling steps. It is essential for controlling the sampling progress, thereby influencing the final output of the sampling process.
    - Comfy dtype: SCHEDULER
    - Python dtype: str
- basic_pipe
    - The 'basic_pipe' parameter encapsulates the foundational components required for the sampling process, including the model, configuration, and conditions. It is indispensable for the operation of the node, as it provides the necessary context for advanced sampling techniques.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: tuple
## Optional
- sigma_factor
    - The 'sigma_factor' parameter adjusts the noise level during the sampling process, allowing control over the amount of noise introduced at each step. This fine-tuning capability is important for achieving a balance between detail and noise in generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_opt
    - The optional 'sampler_opt' parameter provides additional options to further customize the sampling process. It allows for advanced control and can significantly influence the outcome of sampling, offering users a higher degree of flexibility.
    - Comfy dtype: SAMPLER
    - Python dtype: dict

# Output types
- KSAMPLER_ADVANCED
    - The output of the KSamplerAdvancedProvider node is an advanced sampler object that encapsulates the complex sampling process. It is significant as it represents the culmination of the node's functionality, providing users with a powerful tool for generating high-quality images through nuanced sampling techniques.
    - Comfy dtype: KSAMPLER_ADVANCED
    - Python dtype: KSamplerAdvancedWrapper

# Usage tips
- Infra type: GPU

# Source code
```
class KSamplerAdvancedProvider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'sigma_factor': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'basic_pipe': ('BASIC_PIPE',)}, 'optional': {'sampler_opt': ('SAMPLER',)}}
    RETURN_TYPES = ('KSAMPLER_ADVANCED',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Sampler'

    def doit(self, cfg, sampler_name, scheduler, basic_pipe, sigma_factor=1.0, sampler_opt=None):
        (model, _, _, positive, negative) = basic_pipe
        sampler = KSamplerAdvancedWrapper(model, cfg, sampler_name, scheduler, positive, negative, sampler_opt=sampler_opt, sigma_factor=sigma_factor)
        return (sampler,)
```