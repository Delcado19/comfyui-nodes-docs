# Documentation
- Class name: CR_TextInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextInputSwitch node is designed to facilitate conditional selection of text input based on a given integer input. It provides a simple mechanism for switching between two text inputs, which is particularly useful in scenarios where different text outputs need to be selected based on input values.

# Input types
## Required
- Input
    - The 'Input' parameter is crucial as it determines which text input will be selected. It operates within an integer range, where an input of 1 corresponds to 'text1' and an input of 2 corresponds to 'text2', thereby controlling the node's output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- text1
    - The 'text1' parameter is an optional string input that represents the text to return when the 'Input' parameter is set to 1. It plays an important role in defining the output for one of the possible input conditions.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The 'text2' parameter is another optional string input that represents the text to return when the 'Input' parameter is set to 2. It complements the 'text1' parameter by providing alternative text output for different input conditions.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The main output of the node is a string that corresponds to either 'text1' or 'text2' depending on the value of the 'Input' parameter. This output is important as it represents the selected text after the conditional switch.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a URL link to the node documentation page, allowing users to easily access more information and guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
