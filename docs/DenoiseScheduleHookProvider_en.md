# Documentation
- Class name: DenoiseScheduleHookProvider
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DenoiseScheduleHookProvider node manages and applies denoise schedules to image processing tasks. It provides a simple schedule that adjusts denoise levels during upscaling to improve image quality.

# Input types
## Required
- schedule_for_iteration
    - The schedule_for_iteration parameter determines which denoise schedule to apply during upscaling. Selecting the correct strategy is crucial for enhancing image quality.
    - Comfy dtype: STRING
    - Python dtype: str
- target_denoise
    - The target_denoise parameter sets the desired denoise level to achieve. It is a key factor in the final quality of the upscaled image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- hook
    - The hook output provides a configured denoise schedule hook for controlling denoise levels during the upscaling process.
    - Comfy dtype: PK_HOOK
    - Python dtype: PixelKSampleHook

# Usage tips
- Infra type: CPU

# Source code
```
class DenoiseScheduleHookProvider:
    schedules = ['simple']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'schedule_for_iteration': (s.schedules,), 'target_denoise': ('FLOAT', {'default': 0.2, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('PK_HOOK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Upscale'

    def doit(self, schedule_for_iteration, target_denoise):
        hook = None
        if schedule_for_iteration == 'simple':
            hook = hooks.SimpleDenoiseScheduleHook(target_denoise)
        return (hook,)
```