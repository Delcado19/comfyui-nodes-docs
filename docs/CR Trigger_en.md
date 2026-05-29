# Documentation
- Class name: CR_Trigger
- Category: Comfyroll/Utils/Index
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_Trigger node is designed to perform condition checks, determining whether a given index matches a specified trigger value. It plays a critical role in the data flow and execution aspects of the control system, enabling selective processing based on index conditions.

# Input types
## Required
- index
    - The 'index' parameter is crucial for the node's operation, as it represents the current position or identifier in the sequence being evaluated. It is used to establish a condition that, when satisfied, triggers a response from the node.
    - Comfy dtype: INT
    - Python dtype: int
- trigger_value
    - The 'trigger_value' parameter defines the specific value that the index must match for the node to consider the condition satisfied. It is a key decision factor in the node's decision-making process and directly influences its output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- index
    - The 'index' output reflects the current index value evaluated by the node. It is important as it provides a reference to the position in the sequence being checked.
    - Comfy dtype: INT
    - Python dtype: int
- trigger
    - The 'trigger' output is a boolean value indicating whether the index matches the trigger value. It is essential for downstream processes that depend on knowing whether the condition is satisfied.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_help
    - The 'show_help' output provides a URL link to the node documentation, offering users a direct reference to the node's usage guide and additional information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
