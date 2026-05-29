# Documentation
- Class name: CR_CombineSchedules
- Category: Animation/Schedule
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_CombineSchedules node is designed to merge multiple animation schedules into a single, coherent timeline. It achieves this by integrating the provided schedules, ensuring smooth transitions between different animation phases without conflicts. This node plays a key role in simplifying animation workflows, especially for complex animations that require synchronizing multiple timelines.

# Input types
## Optional
- schedule_1
    - The first animation schedule to combine. This is a critical input as it sets the initial structure for the merged timeline. The node intelligently integrates this schedule while ensuring compatibility with subsequent inputs.
    - Comfy dtype: SCHEDULE
    - Python dtype: List[str]
- schedule_2
    - The second animation schedule to merge. This input allows further customization and expansion of the combined schedule, adding more layers of animation control.
    - Comfy dtype: SCHEDULE
    - Python dtype: List[str]
- schedule_3
    - A third optional animation schedule that can be included in the combination process. It provides additional flexibility for the overall animation sequence.
    - Comfy dtype: SCHEDULE
    - Python dtype: List[str]
- schedule_4
    - A fourth optional animation schedule that can be integrated into the final combined timeline. It offers one last layer of customization before the timeline merge.
    - Comfy dtype: SCHEDULE
    - Python dtype: List[str]

# Output types
- SCHEDULE
    - The combined timeline resulting from the merge process. It represents a unified sequence of animation instructions ready for application.
    - Comfy dtype: SCHEDULE
    - Python dtype: List[str]
- show_text
    - A text representation of the combined timeline, suitable for debugging and visualization purposes. It provides a human-readable format of the merged animation instructions.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
