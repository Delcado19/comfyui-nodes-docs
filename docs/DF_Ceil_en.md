
# Documentation
- Class name: DF_Ceil
- Category: Derfuu_Nodes/Functions/Converters
- Output node: False

DF_Ceil node implements the mathematical ceiling function. It rounds a given floating-point number up to the nearest integer.

# Input types
## Required
- Value
    - Specify the floating-point number to be rounded up. This input is essential for determining the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- int
    - Represents the integer result after rounding the input floating-point number up.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CeilNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Value": Field.float(),
            }
        }

    RETURN_TYPES = ("INT",)
    FUNCTION = "get_value"
    CATEGORY = TREE_CONVERTERS

    def get_value(self, Value):
        total = int(math.ceil(Value))
        return (total,)

```
