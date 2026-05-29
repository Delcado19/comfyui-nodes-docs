# Documentation
- Class name: ConcatStringSingle
- Category: FizzNodes 📅🅕🅝/HelperNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

This node is designed to merge two strings into a single string. It serves as a fundamental tool in text operations, allowing users to seamlessly combine text data.

# Input types
## Required
- string_a
    - The first string to be concatenated. It plays a critical role in determining the final output, as it forms the initial part of the combined string.
    - Comfy dtype: STRING
    - Python dtype: str
- string_b
    - The second string to be concatenated. It is important because it provides the portion of the string that follows the first string in the final output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- concatenated_string
    - The output is the combined string produced by concatenating 'string_a' and 'string_b'. It represents the merged text data.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class ConcatStringSingle:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'string_a': ('STRING', {'forceInput': True, 'default': '', 'multiline': True}), 'string_b': ('STRING', {'forceInput': True, 'default': '', 'multiline': True})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'concat'
    CATEGORY = 'FizzNodes 📅🅕🅝/HelperNodes'

    def concat(self, string_a, string_b):
        c = string_a + string_b
        return (c,)
```