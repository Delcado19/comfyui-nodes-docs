# Documentation
- Class name: CR_SetSwitchFromString
- Category: Comfyroll/Utils/Conditional
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SetSwitchFromString node is designed to evaluate a given text input against a set of predefined string options, determining an integer switch based on the match. It serves as a key decision component in the workflow, allowing conditional branching or triggering specific actions based on the input string.

# Input types
## Required
- text
    - The 'text' parameter is the input text that the node compares against, essential for the provided switch options. It plays a key role in determining the node's output, as the matching process is central to the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- switch_1
    - The 'switch_1' parameter represents one of the switch options that the node can match against the input text. It is part of the decision process, influencing the outcome based on the input.
    - Comfy dtype: STRING
    - Python dtype: str
- switch_2
    - The 'switch_2' parameter is another potential switch option that the node evaluates. It is crucial for expanding the range of conditions the node can respond to.
    - Comfy dtype: STRING
    - Python dtype: str
- switch_3
    - The 'switch_3' parameter serves as an additional switch option for the node to determine its output. It enhances the node's versatility in handling various input scenarios.
    - Comfy dtype: STRING
    - Python dtype: str
- switch_4
    - The 'switch_4' parameter is the last switch option considered by the node. It completes the set of options for the node to perform its comparison and decision task.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- switch
    - The 'switch' output represents the integer value determined by the node after comparing the input text with the provided switch options. It signifies the result of the node's decision process.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The 'show_help' output provides a URL link to the node's documentation page, offering free guidance and information to users seeking to understand the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
