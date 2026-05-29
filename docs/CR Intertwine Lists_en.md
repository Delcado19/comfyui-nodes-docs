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
```
class CR_IntertwineLists:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'list1': ('STRING', {'multiline': True, 'default': '', 'forceInput': True}), 'list2': ('STRING', {'multiline': True, 'default': '', 'forceInput': True})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('STRING', 'show_help')
    OUTPUT_IS_LIST = (True, False)
    FUNCTION = 'make_list'
    CATEGORY = icons.get('Comfyroll/List/Utils')

    def make_list(self, list1, list2):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-intertwine-lists'
        min_length = min(len(list1), len(list2))
        combined_list = []
        combined_element = str(list1) + ', ' + str(list2)
        combined_list.append(combined_element)
        return (combined_list, show_help)
```