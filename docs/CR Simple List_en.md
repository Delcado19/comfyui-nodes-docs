# Documentation
- Class name: CR_SimpleList
- Category: Comfyroll/List
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SimpleList node is designed to process and manipulate string lists. Its primary function is to perform a cross join operation on the provided list values, effectively combining elements in various ways. The node aims to simplify the list operation process, providing users with a straightforward interface for interacting with list data.

# Input types
## Required
- list_values
    - The list_values parameter is critical as it is the input list processed by the node. It should be a string containing multiple lines, where each line represents a separate element in the list. The node utilizes this parameter to perform its cross join functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- LIST
    - The LIST output parameter represents the list processed by the node's cross_join function. It is the processed string list that has had leading and trailing whitespace removed and any empty lines filtered out.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
    - The show_help output provides a URL link to documentation for further assistance. It is a string containing a web address where users can find more information on how to use the CR_SimpleList node and its features.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimpleList:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'list_values': ('STRING', {'multiline': True, 'default': 'text'})}}
    RETURN_TYPES = (any_type, 'STRING')
    RETURN_NAMES = ('LIST', 'show_help')
    OUTPUT_IS_LIST = (True, False)
    FUNCTION = 'cross_join'
    CATEGORY = icons.get('Comfyroll/List')

    def cross_join(self, list_values):
        lines = list_values.split('\n')
        list_out = [i.strip() for i in lines if i.strip()]
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-simple-list'
        return (list_out, show_help)
```