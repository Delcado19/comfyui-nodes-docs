
# Documentation
- Class name: DF_Square_root
- Category: Derfuu_Nodes/Math
- Output node: False

SquareRootNode provides a mathematical operation function for calculating the square root of a given value, returning both positive and negative square root values.

# Input types
## Required
- Value
    - The input value for which the square root is calculated. This value determines the magnitude of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The positive and negative square roots of the input value.
    - Comfy dtype: FLOAT
    - Python dtype: tuple[float, float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SquareRootNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Value": Field.float(),
            },
        }

    RETURN_TYPES = ("FLOAT", "FLOAT",)
    FUNCTION = "sqrt"
    CATEGORY = TREE_MATH

    def sqrt(self, Value):
        total = math.sqrt(Value)
        return (total, -total,)

```
