# Documentation
- Class name: CR_Repeater
- Category: Comfyroll/List/Utils
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_Repeater is a utility node that repeats items in a list a specified number of times. It receives a list of items and an integer representing the repeat count, then outputs a new list where each item is repeated according to the given count. This node is ideal for scenarios that require processing the same data multiple times without altering the original list.

# Input types
## Required
- input_data
- The `input_data` parameter represents the list of items to repeat. It is the core part of the node operation because it determines the content of the new list to be generated. Its impact is direct, as it decides what will be repeated, thereby affecting the final output list.
    - Comfy dtype: any_type
    - Python dtype: List[Any]
- repeats
- The `repeats` parameter specifies how many times each item in the `input_data` list should be repeated. It is a key element because it directly influences the length of the output list. The `repeats` value must be a positive integer to ensure the repeat process is meaningful and the output list is formed correctly.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- list
- The `list` output parameter is the result of the repeat process, containing each item from `input_data` repeated `repeats` times. It is important because it represents the transformed version of the original list, which is the primary purpose of the node.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
- The `show_help` output provides a URL link to documentation or a help page associated with the CR_Repeater node. It serves as a quick reference for users seeking more information or assistance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
