# Sigma Schedule Weighted Mean 🎭🅐🅓
## Documentation
- Class name: ADE_SigmaScheduleWeightedAverage
- Category: Animate Diff 🎭🅐🅓/sample settings/sigma schedule
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node creates a new sigma plan by computing the weighted average of two provided sigma plans. It allows mixing the characteristics of the two plans into a new plan based on specified weighting factors.

## Input types
### Required
- schedule_A
    - The first sigma plan to mix. It serves as one of the bases for the weighted average calculation.
    - Comfy dtype: SIGMA_SCHEDULE
    - Python dtype: SigmaSchedule
- schedule_B
    - The second sigma plan to mix with the first. It contributes to the weighted average calculation, complementing the first plan.
    - Comfy dtype: SIGMA_SCHEDULE
    - Python dtype: SigmaSchedule
- weight_A
    - The weighting factor for the first sigma plan. It determines the proportion of the first plan's characteristics in the final mixed plan.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- sigma_schedule
    - Comfy dtype: SIGMA_SCHEDULE
    - The resulting sigma plan after mixing the two input plans according to the specified weighting factors.
    - Python dtype: SigmaSchedule

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
