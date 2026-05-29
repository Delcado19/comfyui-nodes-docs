# Documentation
- Class name: CR_ValueScheduler
- Category: Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ValueScheduler is a node used to manage value scheduling in an animation workflow. It allows selecting a default value or applying a scheduled value based on the current frame. The node provides a flexible way to handle different value assignment patterns, ensuring that animation parameters are correctly set according to the specified schedule or default settings.

# Input types
## Required
- mode
    - The mode parameter determines whether the node should use a default value or a scheduled value. It is critical for defining the scheduler's operation mode and influences how values are allocated in the animation.
    - Comfy dtype: COMBO['Default Value', 'Schedule']
    - Python dtype: str
- current_frame
    - The current frame parameter specifies the current frame in the animation timeline. It is crucial for the node to determine the correct value to apply from the schedule or to fall back to the default value when no schedule is available at the current frame.
    - Comfy dtype: INT
    - Python dtype: int
- default_value
    - The default value parameter sets the value that the node will use when the mode is set to "default value" or when there is no available schedule at the current frame. It plays an important role in ensuring that the animation has a consistent starting point or fallback value.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- schedule_alias
    - The schedule alias parameter is used to reference a specific schedule in the animation. When the node is operating in "schedule" mode, it is important because it helps identify which keyframes and parameters should be considered for value allocation.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_format
    - The schedule format parameter defines the format that the node will interpret the schedule as. It is important for ensuring that the node correctly understands and processes the schedule data, which may come in different formats.
    - Comfy dtype: COMBO['CR', 'Deforum']
    - Python dtype: str
- schedule
    - The schedule parameter provides the actual schedule data that will be used to determine the current frame's value. When the node is in "schedule" mode, it is very important because it directly affects the value that is assigned.
    - Comfy dtype: SCHEDULE
    - Python dtype: Schedule

# Output types
- int_out
    - The int_out parameter represents the integer value output by the node, which can be the result of applying either the schedule or the default value. It is important for animation parameters that require integer values.
    - Comfy dtype: INT
    - Python dtype: int
- float_out
    - The float_out parameter represents the floating-point value output by the node, which can also be the result of applying either the schedule or the default value. It is critical for animation parameters that require floating-point precision.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The show_help parameter provides a URL link to the node's documentation, which can be used for further guidance or to understand how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
