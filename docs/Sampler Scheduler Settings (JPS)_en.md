
# Documentation
- Class name: Sampler Scheduler Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False

This node simplifies selection and configuration of samplers and schedulers in generative pipelines, enabling users to specify and retrieve settings for various sampling strategies and their corresponding scheduling algorithms.

# Input types
## Required
- sampler_name
    - Specify the sampler name to use, critical for determining the sampling strategy during generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: comfy.samplers.KSampler.SAMPLERS
- scheduler
    - Determine the scheduling algorithm to apply, directly affecting execution and efficiency of the sampling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: comfy.samplers.KSampler.SCHEDULERS

# Output types
- sampler_name
    - Return the name of the selected sampler.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Return the selected scheduling algorithm.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Sampler_Scheduler_Settings:
    CATEGORY = 'JPS Nodes/Settings'
    RETURN_TYPES = (comfy.samplers.KSampler.SAMPLERS,comfy.samplers.KSampler.SCHEDULERS,)
    RETURN_NAMES = ("sampler_name","scheduler",)
    FUNCTION = "get_samsched"

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"sampler_name": (comfy.samplers.KSampler.SAMPLERS,),"scheduler": (comfy.samplers.KSampler.SCHEDULERS,)}}

    def get_samsched(self, sampler_name, scheduler):
        return (sampler_name, scheduler, )

```
