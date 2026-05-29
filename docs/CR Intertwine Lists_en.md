# Documentation
- Class name: CR_IntertwineLists
- Category: Comfyroll/List/Utils
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_IntertwineLists is a utility node that combines two lists into a single list, where each element is the concatenation of the corresponding elements from the input lists. It interweaves multiple data streams into a coherent structure, facilitating complex data operations and analysis.

# Input types
## Required
- list1
- list1 is the first input list to be combined with the second list. It is crucial in the node's operation because it forms half of the final combined list.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- list2
- list2 is the second input list to be interwoven with the first list. Its importance equals that of list1, as it complements list1 to create a new list with combined elements.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Output types
- combined_list
- The combined list is the node's output, containing elements obtained by interweaving the input lists. It is important because it represents a consolidated data structure for further processing.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
- The show_help output provides a URL link to documentation for additional help and guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
