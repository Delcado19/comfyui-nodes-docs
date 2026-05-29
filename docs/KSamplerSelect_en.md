# Documentation
- Class name: KSamplerSelect
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The KSamplerSelect node is designed to provide a selection mechanism for different sampling methods in the diffusion process. It abstracts the complexity of selecting and initializing various samplers, allowing users to focus on the high-level task of sampling without delving into the specific details of each sampler's initialization process.

# Input types
## Required
- sampler_name
    - The `sampler_name` parameter is crucial for determining which sampling method will be used. It guides the node to select the appropriate sampler based on the provided name, which is essential for the execution and outcome of the sampling process.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- SAMPLER
    - The `SAMPLER` output represents the selected sampling method. It encapsulates the functionality of the chosen sampler, which is significant for conducting the sampling process and achieving the desired results.
    - Comfy dtype: sampler
    - Python dtype: comfy.samplers.KSampler

# Usage tips
- Infra type: CPU

# Source code
```
class KSamplerSelect:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'sampler_name': (comfy.samplers.SAMPLER_NAMES,)}}
    RETURN_TYPES = ('SAMPLER',)
    CATEGORY = 'sampling/custom_sampling/samplers'
    FUNCTION = 'get_sampler'

    def get_sampler(self, sampler_name):
        sampler = comfy.samplers.sampler_object(sampler_name)
        return (sampler,)
```