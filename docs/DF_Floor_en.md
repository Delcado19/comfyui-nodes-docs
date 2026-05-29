
# Documentation
- Class name: DF_Floor
- Category: Derfuu_Nodes/Functions/Converters
- Output node: False

The DF_Floor node is designed to round down an input floating-point number to the nearest smaller integer. This operation is commonly known as "flooring" a number.

# Input types
## Required
- Value
    - The "Value" parameter represents the floating-point number to be rounded down. It is critical for determining the node's output, as it directly affects the floor operation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- int
    - The output is the nearest smaller integer value obtained after applying the floor operation to the input floating-point number.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FloorNode:
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
        total = int(math.floor(Value))
        return (total,)

```
