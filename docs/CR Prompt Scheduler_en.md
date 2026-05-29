# Documentation
- Class name: CR_PromptScheduler
- Category: Comfyroll/Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_PromptScheduler is a node for managing and scheduling prompts based on keyframes or predefined schedules. It allows users to set default prompts, interpolate between prompts, and customize scheduling formats to meet various needs. The node's functionality is centered on providing a seamless way to handle dynamic prompts for animations or other time-based applications.

# Input types
## Required
- mode
    - Mode determines the scheduling method used by the node. It decides whether to apply the default prompt, follow a keyframe list, or implement more complex scheduling.
    - Comfy dtype: COMBO['Default Prompt', 'Keyframe List', 'Schedule']
    - Python dtype: str
- current_frame
    - Current frame is the reference point for the scheduler to determine which prompt to apply. It is critical to the node's execution as it directly influences the selection of prompts based on the provided schedule.
    - Comfy dtype: INT
    - Python dtype: int
- default_prompt
    - Default prompt serves as fallback text when no specific prompt is scheduled for the current frame. It ensures that a prompt is always available even without a defined schedule.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_format
    - Schedule format specifies the structure of the input schedule data. It is important because it informs the node how to interpret and process the schedule information provided by the user.
    - Comfy dtype: COMBO['CR', 'Deforum']
    - Python dtype: str
- interpolate_prompt
    - Interpolation prompts determine whether the node should interpolate between prompts for smoother transitions. This can enhance the fluidity of animations or applications using prompts.
    - Comfy dtype: COMBO['Yes', 'No']
    - Python dtype: str
## Optional
- keyframe_list
    - Keyframe list provides multi-line input for defining keyframes and their associated prompts. Used when the mode is set to 'Keyframe List', it is essential for creating frame-specific prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- prepend_text
    - Prepend text allows users to add custom text before the prompt. This is useful for including additional context or information alongside the main prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- append_text
    - Append text allows adding custom text after the prompt. It provides flexibility to extend the prompt with more details or to end it with a specific conclusion.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- current_prompt
    - Current prompt represents the prompt currently active according to the scheduler's evaluation. It is the output directly used in the application or animation.
    - Comfy dtype: STRING
    - Python dtype: str
- next_prompt
    - Next prompt indicates the prompt that will be active for the next frame. This is useful for previewing or preparing for upcoming changes in the prompt sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - Weight is a float value representing the transition progress between prompts. It is particularly relevant when interpolation prompts is set to 'Yes', indicating the degree of interpolation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - Show help provides a URL link to the documentation or help page associated with the node. It serves as a quick reference for users seeking more information or assistance regarding the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
