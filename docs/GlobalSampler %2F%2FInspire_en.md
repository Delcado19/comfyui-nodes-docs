# Documentation
- Class name: GlobalSampler
- Category: InspirePack/Prompt
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The GlobalSampler node abstractly represents a system that uniformly samples elements from a given set, ensuring each element has an equal probability of being selected. It is designed to introduce randomness into the process in a fair and unbiased manner, which is critical for applications requiring random behavior or result diversity.

# Input types
## Required
- sampler_name
    - The sampler_name parameter is critical because it determines the sampling method to be used. It directly affects the node's operation by deciding which sampling algorithm will be used, thereby shaping the diversity and randomness of the results.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- scheduler
    - The scheduler parameter is essential for managing the execution flow of the sampling process. It influences how the node coordinates the timing and frequency of sampling, ensuring randomness is effectively introduced without disrupting the overall process.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- sampled_data
    - The sampled_data output contains the results of the sampling process, representing the selected elements. It is a critical output as it directly reflects the effectiveness of the sampling method and the quality of the randomness achieved.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class GlobalSampler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,)}}
    RETURN_TYPES = ()
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Prompt'
    OUTPUT_NODE = True

    def doit(self, **kwargs):
        return {}
```