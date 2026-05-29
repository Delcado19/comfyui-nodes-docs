# Sigma Schedule Interpolated Mean 🎭🅐🅓
## Documentation
- Class name: ADE_SigmaScheduleWeightedAverageInterp
- Category: Animate Diff 🎭🅐🅓/sample settings/sigma schedule
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to create a new sigma schedule by interpolating between two given sigma schedules based on a specified weight range and interpolation method. It effectively blends the characteristics of the two input schedules into a new one, enabling dynamic adjustment during the diffusion process.

## Input types
### Required
- schedule_A
    - The first sigma schedule to interpolate.
    - Comfy dtype: SIGMA_SCHEDULE
    - Python dtype: SigmaSchedule
- schedule_B
    - The second sigma schedule to interpolate.
    - Comfy dtype: SIGMA_SCHEDULE
    - Python dtype: SigmaSchedule
- weight_A_Start
    - The starting weight of the first sigma schedule in the interpolation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_A_End
    - The ending weight of the first sigma schedule in the interpolation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation
    - The interpolation method used to blend the sigma schedules.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: InterpolationMethod

## Output types
- sigma_schedule
    - Comfy dtype: SIGMA_SCHEDULE
    - The resulting sigma schedule after interpolation.
    - Python dtype: SigmaSchedule

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
