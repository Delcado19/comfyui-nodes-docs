# Documentation
- Class name: WLSH_String_Append
- Category: WLSH Nodes/text
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The WLSH_String_Append node is designed to concatenate strings in a specified manner. It allows adding text before or after an existing string, with an optional separator between the two segments. The node's functionality centers on intelligently placing and separating text to create a seamless and coherent text output based on user requirements.

# Input types
## Required
- addition
    - The "addition" parameter represents the text to be appended to the input string. It is a critical part of the node's operation, as it determines what will be added to the existing text. The multiline property allows for longer text segments to be added, enhancing the node's flexibility in handling various text scenarios.
    - Comfy dtype: STRING
    - Python dtype: str
- placement
    - The "placement" parameter indicates the position of the "addition" text relative to the "input_string". It is essential for controlling the order of text segments in the final output. The node is capable of placing text either before or after the input string, providing users with the flexibility to structure text as needed.
    - Comfy dtype: COMBO['after', 'before']
    - Python dtype: Literal['after', 'before']
- separator
    - The "separator" parameter specifies the type of delimiter between 'input_string' and 'addition'. It plays an important role in defining the readability and structure of the combined text. The choice of separator can significantly affect the final appearance of the text, allowing customization to suit different contexts.
    - Comfy dtype: COMBO['comma', 'space', 'newline', 'none']
    - Python dtype: Literal['comma', 'space', 'newline', 'none']
## Optional
- input_string
    - The "input_string" parameter is the existing text to which the "addition" will be appended. While it is optional, it serves as the foundation for the node's operation. The node's functionality is designed to work with or without an initial string, giving users the option to append text to an existing string or to create a new string from the addition alone.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]

# Output types
- combined
    - The "combined" output parameter represents the final concatenated string produced by the node's operation. It contains the result of appending the "addition" text to the "input_string" using the chosen "separator". This output is important because it is the direct result of the node's primary function, providing users with the coherent text they aim to create.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_String_Append:
    location = ['after', 'before']
    separator = ['comma', 'space', 'newline', 'none']

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'addition': ('STRING', {'multiline': True}), 'placement': (s.location,), 'separator': (s.separator,)}, 'optional': {'input_string': ('STRING', {'multiline': True, 'forceInput': True})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('combined',)
    FUNCTION = 'concat_string'
    CATEGORY = 'WLSH Nodes/text'

    def concat_string(self, placement, separator, addition='', input_string=''):
        sep = {'comma': ', ', 'space': ' ', 'newline': '\n', 'none': ''}
        if input_string is None:
            return (addition,)
        if placement == 'after':
            new_string = input_string + sep[separator] + addition
        else:
            new_string = addition + sep[separator] + input_string
        return (new_string,)
```