# Documentation
- Class name: CR_CentralSchedule
- Category: Animation/Schedule
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

This node integrates multiple types of inputs, including text, prompts, and models, to create and manage complex animation schedules, generating a coherent and dynamic timeline for animation execution.

# Input types
## Required
- schedule_1
    - Main scheduling text, outlining the sequence of animation actions. It is the core of node operation as it provides the foundation for schedule construction.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_type1
    - Specifies the type of schedule, influencing how the node interprets and processes the input text, affecting the overall structure and execution of the animation schedule.
    - Comfy dtype: COMBO
    - Python dtype: str
- schedule_format
    - Determines the presentation format of the final schedule, affecting the readability and usability of the animation schedule for further processing or review.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- schedule_alias1
    - Alias for the first schedule, can be used for reference or labeling purposes, improving the readability and organization of the animation schedule.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_2
    - Additional schedule text that supplements the main schedule, allowing more complex animation sequences and action layering.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_type2
    - Defines the type for the second schedule, guiding the node to process and integrate it with the main schedule, forming a comprehensive animation plan.
    - Comfy dtype: COMBO
    - Python dtype: str
- schedule_alias2
    - Alias for the second schedule, helps identify and manage multiple schedules within the animation timeline.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_3
    - Third schedule text, further extending the animation sequence, enabling the node to handle complex animations with multiple layers and intricate timing.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_type3
    - Indicates the type of the third schedule, helping the node organize and execute additional animation layers within the overall schedule.
    - Comfy dtype: COMBO
    - Python dtype: str
- schedule_alias3
    - Alias for the third schedule, providing clarity and ease of management for complex animation sequences involving multiple schedules.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- SCHEDULE
    - Compiled and formatted animation schedule, encapsulating the sequence of actions and timing in a structured format for execution in the animation system.
    - Comfy dtype: SCHEDULE
    - Python dtype: Tuple[str, List[Tuple[str, str]]]
- show_text
    - Human-readable representation of the animation schedule, providing a clear overview of the sequence and details for review and reference.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
