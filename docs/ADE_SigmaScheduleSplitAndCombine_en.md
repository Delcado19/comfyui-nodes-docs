# Sigma Schedule Split Combine 🎭🅐🅓
## Documentation
- Class name: ADE_SigmaScheduleSplitAndCombine
- Category: Animate Diff 🎭🅐🅓/sample settings/sigma schedule
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to operate sigma schedules by splitting and combining them based on specified weights and interpolation methods. It allows the creation of a new sigma schedule that mixes two input schedules, enabling a custom progression of sigma values over time.

## Input types
### Required
- schedule_Start
    - The starting sigma schedule used for the split and combine process, determining the initial portion of the new sigma schedule.
    - Comfy dtype: SIGMA_SCHEDULE
    - Python dtype: SigmaSchedule
- schedule_End
    - The ending sigma schedule used for the split and combine process, influencing the latter portion of the new sigma schedule.
    - Comfy dtype: SIGMA_SCHEDULE
    - Python dtype: SigmaSchedule
- idx_split_percent
    - The percentage of the initial sigma schedule to split, deciding the transition point between the two schedules.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- sigma_schedule
    - Comfy dtype: SIGMA_SCHEDULE
    - The resulting sigma schedule, which is a blend of the starting and ending input schedules modified according to the specified split percentage.
    - Python dtype: SigmaSchedule

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
