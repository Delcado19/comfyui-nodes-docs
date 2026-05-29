
# Documentation
- Class name: Int
- Category: Logic
- Output node: False

The Int node is designed to handle integer values, allowing these values to be operated on or evaluated within logical or computational environments.

# Input types
## Required
- value
    - Defines the integer value to be processed or operated on by the node. It serves as the primary input for the node to perform operations or evaluations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- INT
    - Outputs the processed or evaluated integer value, reflecting the result of any operations performed by the node.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Int:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {"value": ("INT", {"default": 0})},
        }

    RETURN_TYPES = ("INT",)

    RETURN_NAMES = ("INT",)

    FUNCTION = "execute"

    CATEGORY = "Logic"

    def execute(self, value):
        return (value,)

```
