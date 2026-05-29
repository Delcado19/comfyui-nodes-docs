
# Documentation
- Class name: DF_Divide
- Category: Derfuu_Nodes/Math
- Output node: False

DF_Divide node provides a way to perform simple arithmetic division in a node-based programming environment. It accepts two numeric inputs and outputs their quotient.

# Input types
## Required
- Numerator
    - Specify the dividend in the division operation, the value to be divided.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Denominator
    - Determine the divisor in the division operation, influencing the result by dividing the numerator.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - Express the result of Numerator divided by Denominator as a floating-point number.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DivideNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Numerator": Field.float(),
                "Denominator": Field.float(),
            },
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "divide"
    CATEGORY = TREE_MATH

    def divide(self, Numerator, Denominator):
        total = float(Numerator / Denominator)
        return (total,)

```
