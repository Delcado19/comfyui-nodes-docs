# Documentation
- Class name: PCApplySettings
- Category: promptcontrol
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

The 'apply' method of the PCApplySettings node is designed to modify and enhance the functionality of a prompt schedule by applying a set of settings. It plays a key role in customizing the behavior of prompts within the system, enabling tailored responses and interactions based on user-defined parameters.

# Input types
## Required
- prompt_schedule
    - The parameter 'prompt_schedule' is critical for defining the structure and timing of prompts. It determines how and when prompts are delivered within the system, significantly impacting the overall user experience and interaction flow.
    - Comfy dtype: PromptSchedule
    - Python dtype: PromptSchedule
- settings
    - The parameter 'settings' is essential for customizing the behavior of the prompt schedule. It allows users to adjust various aspects such as filters, start times, and default values to meet specific needs or preferences.
    - Comfy dtype: SCHEDULE_SETTINGS
    - Python dtype: Dict[str, Any]

# Output types
- modified_prompt_schedule
    - The output 'modified_prompt_schedule' reflects the updated prompt schedule after applying the settings. It represents the new configuration that will guide subsequent prompt delivery and interactions within the system.
    - Comfy dtype: PromptSchedule
    - Python dtype: PromptSchedule

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/asagi4/comfyui-prompt-control)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
