# Documentation
- Class name: CR_TextListToString
- Category: Comfyroll/List/Utils
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextListToString node is designed to concatenate a list of strings into a single string, with each string separated by a newline. It is used to simplify the process of converting multiple text entries into a coherent and unified format that is easy to manage and display.

# Input types
## Required
- text_list
    - Parameter 'text_list' is a list of strings, which the node concatenates into a single string. It plays a key role in determining the final output because it directly affects the content and structure of the resulting string.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Output types
- STRING
    - The 'STRING' output is the concatenated string formed by joining all elements of the input text list with newlines. It represents the main result of the node operation.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a URL link to the documentation of the node's functionality for further help or information. It is a useful resource for users seeking additional guidance.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_TextListToString:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text_list': ('STRING', {'forceInput': True})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('STRING', 'show_help')
    INPUT_IS_LIST = True
    FUNCTION = 'joinlist'
    CATEGORY = icons.get('Comfyroll/List/Utils')

    def joinlist(self, text_list):
        string_out = '\n'.join(text_list)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-text-list-to-string'
        return (string_out, show_help)
```