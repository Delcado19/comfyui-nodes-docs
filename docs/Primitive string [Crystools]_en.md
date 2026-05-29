
# Documentation
- Class name: Primitive string [Crystools]
- Category: crystools 🪛/Primitive
- Output node: False

This node aims to process and manipulate raw string data. It provides a concise interface for receiving string input, performing necessary operations, and outputting the modified or unmodified string.

# Input types
## Required
- string
    - The string input to the node. It represents the primary data that the node will process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The output of the node, which is a string that may have been processed or modified by the node.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CText:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "string": STRING,
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.PRIMITIVE.value
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("string",)

    FUNCTION = "execute"

    def execute(self, string=""):
        return (string,)

```
