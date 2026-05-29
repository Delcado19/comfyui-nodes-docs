
# Documentation
- Class name: Primitive boolean [Crystools]
- Category: crystools 🪛/Primitive
- Output node: False

This node represents a primitive boolean data type in the Crystools framework, allowing operations and processing on boolean values.

# Input types
## Required
- boolean
    - The boolean input parameter allows the user to provide a boolean value, which is critical to the node's operation as it determines the boolean value to be processed or operated on.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- boolean
    - The output is a boolean value, reflecting the input boolean value after processing or operation by the node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CBoolean:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "boolean": BOOLEAN,
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.PRIMITIVE.value
    RETURN_TYPES = ("BOOLEAN",)
    RETURN_NAMES = ("boolean",)

    FUNCTION = "execute"

    def execute(self, boolean=True):
        return (boolean,)

```
