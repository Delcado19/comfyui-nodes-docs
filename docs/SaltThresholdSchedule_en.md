
# Documentation
- Class name: SaltThresholdSchedule
- Category: SALT/Scheduling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltThresholdSchedule node aims to apply fade effects to the schedule list based on specific parameters such as fade type and intensity. This node can dynamically adjust schedule values, creating smooth transitions or highlighting certain parts of the schedule through fade-in, fade-out, or both.

# Input types
## Required
- float_schedule
    - List of schedule values to which the fade effect will be applied. This parameter is crucial for determining the base values on which the fade effect will be applied.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- max_frames
    - Specifies the maximum number of frames for the schedule. This parameter limits the length of the output schedule list.
    - Comfy dtype: INT
    - Python dtype: int
- output_mode
    - Defines the format of the output schedule list, such as 'prompt_schedule', 'float_list', 'int_list', or 'raw'. This parameter determines how the modified schedule values are presented.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- schedule_values
    - A string detailing specific schedule values and their corresponding descriptions or settings. This parameter allows customization of schedule values based on text descriptions.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- value_schedule_list
    - The modified schedule list after applying the specified fade effect, showing dynamic transitions between values.
    - Comfy dtype: *
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
