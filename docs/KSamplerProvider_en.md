# Documentation
- Class name: KSamplerProvider
- Category: ImpactPack/Sampler
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The KSamplerProvider node is designed to facilitate the creation and configuration of KSampler, a sampling method used in generative models. It encapsulates the process of initializing a sampler with various parameters (such as seed, steps, and configuration), thus allowing high-quality samples to be generated from the model.

# Input types
## Required
- seed
    - The seed parameter is crucial for the reproducibility of the sampling process. It ensures that the same seed always produces the same sample, serving as a key element for controlling the randomness of the sampling.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter defines the number of iterations the sampling process will undergo. More steps can produce higher quality samples, but may also increase computation time.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, representing configuration, is used to adjust the settings of the sampling process. It can affect the quality and characteristics of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the type of sampler to be used in the sampling process. Different samplers can produce different results, so this parameter is crucial for achieving the desired outcome.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling algorithm to be applied during the sampling process. It plays an important role in the efficiency and effectiveness of the sampling.
    - Comfy dtype: STRING
    - Python dtype: str
- denoise
    - The denoise parameter controls the level of noise reduction applied during the sampling process. It is an important factor in achieving a balance between sample quality and noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- basic_pipe
    - The basic_pipe parameter is a complex structure containing the model and additional data required for the sampling process. It is essential for the functionality of the KSamplerProvider node.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, Any, Any, Any, Any]

# Output types
- KSAMPLER
    - The output of the KSamplerProvider node is a KSampler object, used by the model to generate samples. It represents the configured sampler, ready to be used in the sampling process.
    - Comfy dtype: KSAMPLER
    - Python dtype: KSamplerWrapper

# Usage tips
- Infra type: GPU

# Source code
```
class KSamplerProvider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'basic_pipe': ('BASIC_PIPE',)}}
    RETURN_TYPES = ('KSAMPLER',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Sampler'

    def doit(self, seed, steps, cfg, sampler_name, scheduler, denoise, basic_pipe):
        (model, _, _, positive, negative) = basic_pipe
        sampler = KSamplerWrapper(model, seed, steps, cfg, sampler_name, scheduler, positive, negative, denoise)
        return (sampler,)
```