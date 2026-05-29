# Documentation
- Class name: CfgScheduleHookProvider
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

CfgScheduleHookProvider node manages and provides configuration schedules for the iteration process. It abstracts handling different scheduling strategies by offering a simple interface to retrieve hooks based on a given iteration and target configuration.

# Input types
## Required
- schedule_for_iteration
    - schedule_for_iteration parameter determines which schedule the iteration process will use. It is critical because it determines how the configuration adjusts over time, affecting the final outcome.
    - Comfy dtype: STRING
    - Python dtype: str
- target_cfg
    - target_cfg parameter sets the desired configuration value that the process aims to achieve. It is important because it directly influences the final configuration applied during iteration.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- hook
    - hook output provides a configured hook object that can be used to manage scheduling during iteration. It encapsulates the logic required to adjust configuration over time.
    - Comfy dtype: PK_HOOK
    - Python dtype: PixelKSampleHook

# Usage tips
- Infra type: CPU

# Source code
```
class CfgScheduleHookProvider:
    schedules = ['simple']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'schedule_for_iteration': (s.schedules,), 'target_cfg': ('FLOAT', {'default': 3.0, 'min': 0.0, 'max': 100.0})}}
    RETURN_TYPES = ('PK_HOOK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Upscale'

    def doit(self, schedule_for_iteration, target_cfg):
        hook = None
        if schedule_for_iteration == 'simple':
            hook = hooks.SimpleCfgScheduleHook(target_cfg)
        return (hook,)
```