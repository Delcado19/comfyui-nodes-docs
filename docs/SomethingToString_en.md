
# Documentation
- Class name: SomethingToString
- Category: KJNodes/text
- Output node: False

The SomethingToString node provides a flexible way to convert various input types to string format and optionally add a prefix or suffix to customize the output.

# Input types
## Required
- input
- The primary input for conversion to string. This parameter is the core of the node operation because it determines the base content to be converted to string format.
    - Comfy dtype: *
    - Python dtype: Union[int, float, bool]

## Optional
- prefix
- Optional prefix to prepend to the stringified input. This allows adding extra context or formatting at the beginning of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- suffix
- Optional suffix to append to the stringified input. This enables further customization or formatting at the end of the output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
- The result of the conversion process, potentially containing any specified prefix or suffix, formatted as a string.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SomethingToString:
    @classmethod
    
    def INPUT_TYPES(s):
     return {
        "required": {
        "input": (any, {}),
    },
    "optional": {
        "prefix": ("STRING", {"default": ""}),
        "suffix": ("STRING", {"default": ""}),
    }
    }
    RETURN_TYPES = ("STRING",)
    FUNCTION = "stringify"
    CATEGORY = "KJNodes/text"
    DESCRIPTION = """
Converts any type to a string.
"""

    def stringify(self, input, prefix="", suffix=""):
        if isinstance(input, (int, float, bool)):   
            stringified = str(input)
            if prefix:  # Check if prefix is not empty
                stringified = prefix + stringified  # Add the prefix
            if suffix:  # Check if suffix is not empty
                stringified = stringified + suffix  # Add the suffix
        else:
            return
        return (stringified,)

```
