# Documentation
- Class name: DenoiseSchedulerDetailerHookProvider
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DenoiseSchedulerDetailerHookProvider node is designed to manage the denoising schedule for the refinement process. It provides a mechanism to adjust the denoising level applied at different stages of the process, ensuring a smooth transition from noisy to detailed states.

# Input types
## Required
- schedule_for_cycle
    - The schedule_for_cycle parameter determines the denoising schedule to follow during the refinement cycle. It is critical as it dictates the order of denoising steps, thereby affecting the quality of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- target_denoise
    - The target_denoise parameter specifies the desired denoising level. It is important as it directly impacts the clarity and detail of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- DETAILER_HOOK
    - The output of DenoiseSchedulerDetailerHookProvider is a refinement hook encapsulating the denoising schedule. It is important as it directly influences the behavior of the detailer during the denoising process.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: DetailerHook

# Usage tips
- Infra type: CPU

# Source code
```
class DenoiseSchedulerDetailerHookProvider:
    schedules = ['simple']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'schedule_for_cycle': (s.schedules,), 'target_denoise': ('FLOAT', {'default': 0.3, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('DETAILER_HOOK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detailer'

    def doit(self, schedule_for_cycle, target_denoise):
        hook = hooks.SimpleDetailerDenoiseSchedulerHook(target_denoise)
        return (hook,)
```