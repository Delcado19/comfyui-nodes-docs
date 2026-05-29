
# Documentation
- Class name: DF_String_Concatenate
- Category: Derfuu_Nodes/Functions/String Operations
- Output node: False

The DF_String_Concatenate node is designed to concatenate two strings, optionally adding a separator. It creates a new string by appending one string to the end of another, inserting a specified separator in between. This node facilitates string manipulation and formatting tasks.

# Input types
## Required
- Prepend
    - This parameter is the string to be placed at the beginning of the newly concatenated string. It serves as the base string to which other strings are appended, playing a key role in the concatenation process.
    - Comfy dtype: STRING
    - Python dtype: str
- Append
    - This parameter is the string to be appended to the end of the 'Prepend' string. It is essential for adding additional content to the base string, contributing to the formation of the final concatenated result.
    - Comfy dtype: STRING
    - Python dtype: str
- Delimiter
    - This is an optional string used to separate the 'Prepend' and 'Append' strings in the concatenated result. It defines the character or sequence of characters to be inserted between the two strings, affecting the overall format and readability of the output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- TEXT
    - The resulting concatenated string. It represents the combined output of the 'Prepend' and 'Append' strings, possibly separated by the 'Delimiter', demonstrating the node's ability to effectively merge strings.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class StringConcat:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Prepend": Field.string(),
                "Append": Field.string(),
                "Delimiter": Field.string(default=", ")
            }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("TEXT",)
    FUNCTION = "concatenate"
    CATEGORY = TREE_STRINGS

    def concatenate(self, Prepend, Append, Delimiter):
        out = f"{Prepend}{Delimiter}{Append}"
        return (out,)

```
