
# Documentation
- Class name: SaltConditioningSetMaskAndCombine
- Category: SALT/Scheduling/Conditioning
- Output node: False
- Repo Ref: https://github.com/SALTx2/ComfyUI-SALT

The SaltConditioningSetMaskAndCombine node is used for advanced conditional control in audio-visual scheduling tasks. It combines and applies masks to multiple conditional schedules, allowing precise control over the conditioning process. It can adjust mask intensity and set conditioning regions based on mask boundaries. This node is essential for tasks requiring detailed and dynamic conditioning adjustments in multimedia content generation.

# Input types
## Required
- positive_schedule_a
    - Represents the first set of positive conditional schedules to combine and apply masks to.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative_schedule_a
    - Represents the first set of negative conditional schedules to combine and apply masks to.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- positive_schedule_b
    - Represents the second set of positive conditional schedules to combine and apply masks to.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative_schedule_b
    - Represents the second set of negative conditional schedules to combine and apply masks to.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- mask_a
    - The mask applied to the first set of conditional schedules.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_b
    - The mask applied to the second set of conditional schedules.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- mask_strengths_a
    - A list of intensities for each mask applied to the first set of conditional schedules, allowing variable influence.
    - Comfy dtype: LIST
    - Python dtype: list
- mask_strengths_b
    - A list of intensities for each mask applied to the second set of conditional schedules, allowing variable influence.
    - Comfy dtype: LIST
    - Python dtype: list
- set_cond_area
    - Determines whether the conditioning region is set to default or adjusted to mask boundaries, affecting how the mask is applied.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- conditioning
    - Comfy dtype: CONDITIONING
    - Outputs the masked and combined conditional schedules for subsequent audio-visual generation processes.
    - Python dtype: unknown


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/SALTx2/ComfyUI-SALT)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
