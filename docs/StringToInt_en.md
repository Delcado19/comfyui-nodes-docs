
# Documentation
- Class name: StringToInt
- Category: Art Venture/Utils
- Output node: False

StringToInt node provides a simple and direct method to convert a numeric string representation into an integer form. This feature is useful for parsing and utilizing numeric data presented as text.

# Input types
## Required
- string
- The string parameter receives the numeric text to be converted into an integer. This input is essential for the conversion process because it determines the final returned value.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- int
- The output int is the integer representation of the input string. This allows the system to perform numeric operations and processing.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilStringToInt:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {"string": ("STRING", {"default": "0"})},
        }

    RETURN_TYPES = ("INT",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "string_to_int"

    def string_to_int(self, string: str):
        return (int(string),)

```
