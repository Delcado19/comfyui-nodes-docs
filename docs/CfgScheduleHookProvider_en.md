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
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
