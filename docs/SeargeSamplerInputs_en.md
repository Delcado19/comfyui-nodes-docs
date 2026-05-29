# Documentation
- Class name: SeargeSamplerInputs
- Category: Searge/_deprecated_/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class encapsulates the process of retrieving and configuring samplers and schedulers, which are essential components of the sampling process. It provides a structured way to select and use different sampling strategies and scheduling methods to control the generation of outputs. The node ensures that the appropriate algorithm is used based on the user's choice, thereby facilitating the generation of high-quality results.

# Input types
## Required
- sampler_name
    - The sampler_name parameter is crucial for determining the type of sampling algorithm to use. It determines the method of generating outputs, which can significantly affect the quality and diversity of results. By selecting a specific sampler, the user guides the node's execution and shapes the overall outcome of the sampling process.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- scheduler
    - The scheduler parameter plays a key role in managing the flow and pace of the sampling process. It regulates the rate at which samples are produced, ensuring that the generation process is optimized for both speed and efficiency. The choice of scheduler directly impacts the performance and resource utilization of the sampling operation.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- sampler_name
    - The sampler_name output represents the selected sampling algorithm determined based on the input. This choice is critical to the sampling process, as it determines the method of generating outputs, influencing the overall quality and characteristics of the results.
    - Comfy dtype: str
    - Python dtype: str
- scheduler
    - The scheduler output represents the selected scheduling method, which will manage the rate and pace of the sampling operation. This choice is critical for balancing the trade-off between computational efficiency and output quality, ensuring the sampling process is both effective and resource-conscious.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeSamplerInputs:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'sampler_name': (comfy.samplers.KSampler.SAMPLERS, {'default': 'ddim'}), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS, {'default': 'ddim_uniform'})}}
    RETURN_TYPES = ('SAMPLER_NAME', 'SCHEDULER_NAME')
    RETURN_NAMES = ('sampler_name', 'scheduler')
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Inputs'

    def get_value(self, sampler_name, scheduler):
        return (sampler_name, scheduler)
```