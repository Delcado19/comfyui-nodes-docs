# Documentation
- Class name: WAS_String_To_Text
- Category: WAS Suite/Text/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `string_to_text` aims to convert a given string into a text format that can be further processed or analyzed. It plays a key role in text manipulation, ensuring that the input string is correctly formatted for subsequent tasks, such as text analysis or machine learning models that require text data.

# Input types
## Required
- string
    - The parameter 'string' is required because it represents the raw text input that the node will process. Its proper formatting and content significantly affect the node's ability to convert it into a usable text format.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The output 'text' is the result of the node operation, providing the text format converted from the input string. It is important because it is the primary output used in downstream text-related processes.
    - Comfy dtype: TEXT
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_String_To_Text:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'string': ('STRING', {})}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'string_to_text'
    CATEGORY = 'WAS Suite/Text/Operations'

    def string_to_text(self, string):
        return (string,)
```