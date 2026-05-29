# Documentation
- Class name: CR_CycleText
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_CycleText node is designed to cycle through a predefined list of text items at specified time intervals, creating animated text sequences. It operates in a continuous mode, iterating through the text list to produce dynamic text displays. This node is particularly useful for applications requiring text-based animations, such as presentations or interactive displays.

# Input types
## Required
- mode
    - The mode parameter determines the cycling order of text items. It is crucial for determining the sequence and pattern of the text animation.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- text_list
    - The text_list parameter is the list of text items that the node will cycle through. It is required as it defines the content of the animation.
    - Comfy dtype: TEXT_LIST
    - Python dtype: List[str]
## Optional
- frame_interval
    - The frame_interval parameter specifies the time interval between each text change in the animation. It affects the speed of the text cycling.
    - Comfy dtype: INT
    - Python dtype: int
- loops
    - The loops parameter determines the number of times the text list will be cycled through. It controls the duration of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The current_frame parameter represents the current position in the text animation. It is used to track the progress of the animation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- STRING
    - The STRING output provides the current text item from the list being cycled through.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The show_help output provides a link to documentation for further help or detailed information about the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
