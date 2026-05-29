# Documentation
- Class name: JoinStrings
- Category: KJNodes/constants
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The JoinStrings node is designed to merge two input strings into a single string. It does this by inserting a specified separator between the two strings, effectively merging them into a coherent sequence of characters. This node plays a key role in string manipulation tasks that require merging multiple strings into one, such as data formatting or preparing for further processing.

# Input types
## Required
- string1
    - The first string to be joined. It serves as the initial part of the final concatenated string and is critical to determining the outcome of the concatenation process.
    - Comfy dtype: STRING
    - Python dtype: str
- string2
    - The second string to be joined. It follows the first string and the separator in the final concatenated string and contributes to the overall structure of the output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- delimiter
    - The character or sequence of characters to be inserted between the two input strings. The separator plays an important role in defining how the final string is read and can be adjusted according to the specific requirements of the task at hand.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- joined_string
    - The output of the JoinStrings node is the concatenated string, which is the result of joining the two input strings with the specified separator. This output is important because it represents the final product of the node's operation and is ready for subsequent tasks or processes.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class JoinStrings:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'string1': ('STRING', {'default': '', 'forceInput': True}), 'string2': ('STRING', {'default': '', 'forceInput': True}), 'delimiter': ('STRING', {'default': ' ', 'multiline': False})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'joinstring'
    CATEGORY = 'KJNodes/constants'

    def joinstring(self, string1, string2, delimiter):
        joined_string = string1 + delimiter + string2
        return (joined_string,)
```