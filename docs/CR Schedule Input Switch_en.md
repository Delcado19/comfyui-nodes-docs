# Documentation
- Class name: Comfyroll_ScheduleInputSwitch
- Category: Comfyroll/Animation/Schedule
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The Comfyroll_ScheduleInputSwitch node is designed to select between two different schedules based on an input value. It enables conditional execution in workflows, allowing users to direct the flow of operations according to the provided input. This node plays a key role in orchestrating complex animations by determining which schedule to follow.

# Input types
## Required
- Input
    - The 'Input' parameter is critical for determining which schedule will be executed. It decides the flow of the animation based on its value, which can be 1 or 2. This parameter is essential to the node's decision-making process and directly affects the outcome of the operation.
    - Comfy dtype: INT
    - Python dtype: int
- schedule1
    - The 'schedule1' parameter represents the first schedule the node can choose. It is a key component of the node's decision process, providing an alternative path for the animation sequence when the input value is 1.
    - Comfy dtype: SCHEDULE
    - Python dtype: Schedule
- schedule2
    - The 'schedule2' parameter is the second schedule option available to the node. It becomes relevant when the input value is not 1 and directs subsequent steps of the animation according to this schedule.
    - Comfy dtype: SCHEDULE
    - Python dtype: Schedule

# Output types
- SCHEDULE
    - The 'SCHEDULE' output is the selected schedule based on the input provided to the node. It is the core result of the node's operation, guiding subsequent steps in the animation workflow.
    - Comfy dtype: SCHEDULE
    - Python dtype: Schedule
- show_help
    - The 'show_help' output provides a URL to a wiki page offering additional guidance and information about the node's functionality. It serves as a resource for users seeking how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
