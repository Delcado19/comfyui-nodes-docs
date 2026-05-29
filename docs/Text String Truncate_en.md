# Documentation
- Class name: WAS_Text_String_Truncate
- Category: WAS Suite/Text/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `truncate_string` method of the WAS_Text_String_Truncate node reduces an input string to a specified length, truncating by character or word from the beginning or end of the string. This method manages text length while preserving information integrity, ensuring the truncated text fits required constraints without losing important content.

# Input types
## Required
- text
    - The 'text' parameter is the primary input of the node, representing the string to be truncated. This is a key element, as the node's operation focuses on reducing this text's length while retaining its core information.
    - Comfy dtype: STRING
    - Python dtype: str
- truncate_by
    - The 'truncate_by' parameter determines the unit of truncation, either characters or words. This choice significantly affects how the text is reduced and which portion of the text is preserved.
    - Comfy dtype: COMBO['characters', 'words']
    - Python dtype: str
- truncate_from
    - The 'truncate_from' parameter determines whether truncation should start from the end or the beginning of the text. This decision directly impacts the visibility and context of the remaining text after truncation.
    - Comfy dtype: COMBO['end', 'beginning']
    - Python dtype: str
- truncate_to
    - The 'truncate_to' parameter specifies the maximum length to which the text should be truncated. This is a critical setting, as it defines the final length of the string after the truncation process.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- text_b
    - The 'text_b' parameter is an optional additional string that can be provided for truncation. It provides flexibility in handling multiple strings simultaneously, enhancing the node's utility in text management scenarios.
    - Comfy dtype: STRING
    - Python dtype: str
- text_c
    - The 'text_c' parameter is another optional string for truncation, similar in function to 'text_b'. It extends the node's ability to handle more text data in a single operation.
    - Comfy dtype: STRING
    - Python dtype: str
- text_d
    - The 'text_d' parameter is the last optional string in the node's truncation process. It further extends the node's ability to manage more text simultaneously.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- truncated_text
    - The output parameter 'truncated_text' represents the result of the truncation process. It is a shortened version of the input text that meets the specified constraints, ensuring the output text is concise and relevant.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str
- truncated_text_b
    - The output parameter 'truncated_text_b' corresponds to the truncated version of the optional input 'text_b'. It provides the same functionality as 'truncated_text', but applies to the second optional string.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str
- truncated_text_c
    - The output parameter 'truncated_text_c' is similar to 'truncated_text_b', providing the result for the third optional string 'text_c'. It ensures the node can handle multiple strings in a single call.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str
- truncated_text_d
    - The output parameter 'truncated_text_d' is the final output for the optional string 'text_d'. It completes the node's ability to truncate multiple strings at once, providing a comprehensive text management solution.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_String_Truncate:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'forceInput': True}), 'truncate_by': (['characters', 'words'],), 'truncate_from': (['end', 'beginning'],), 'truncate_to': ('INT', {'default': 10, 'min': -99999999, 'max': 99999999, 'step': 1})}, 'optional': {'text_b': ('STRING', {'forceInput': True}), 'text_c': ('STRING', {'forceInput': True}), 'text_d': ('STRING', {'forceInput': True})}}
    RETURN_TYPES = (TEXT_TYPE, TEXT_TYPE, TEXT_TYPE, TEXT_TYPE)
    FUNCTION = 'truncate_string'
    CATEGORY = 'WAS Suite/Text/Operations'

    def truncate_string(self, text, truncate_by, truncate_from, truncate_to, text_b='', text_c='', text_d=''):
        return (self.truncate(text, truncate_to, truncate_from, truncate_by), self.truncate(text_b, truncate_to, truncate_from, truncate_by), self.truncate(text_c, truncate_to, truncate_from, truncate_by), self.truncate(text_d, truncate_to, truncate_from, truncate_by))

    def truncate(self, string, max_length, mode='end', truncate_by='characters'):
        if mode not in ['beginning', 'end']:
            cstr("Invalid mode. 'mode' must be either 'beginning' or 'end'.").error.print()
            mode = 'end'
        if truncate_by not in ['characters', 'words']:
            cstr("Invalid truncate_by. 'truncate_by' must be either 'characters' or 'words'.").error.print()
        if truncate_by == 'characters':
            if mode == 'beginning':
                return string[:max_length] if max_length >= 0 else string[max_length:]
            else:
                return string[-max_length:] if max_length >= 0 else string[:max_length]
        words = string.split()
        if mode == 'beginning':
            return ' '.join(words[:max_length]) if max_length >= 0 else ' '.join(words[max_length:])
        else:
            return ' '.join(words[-max_length:]) if max_length >= 0 else ' '.join(words[:max_length])
```