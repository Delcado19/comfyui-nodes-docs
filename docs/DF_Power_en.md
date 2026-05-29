
# Documentation
- Class name: DF_Power
- Category: Derfuu_Nodes/Math
- Output node: False

DF_Power node performs exponentiation, raising the base value to the specified exponent. It abstracts the mathematical operation of exponentiation, enabling dynamic calculation of power values in workflows.

# Input types
## Required
- Value
    - The base value for exponentiation. It determines the number to be raised to the exponent.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Exponent
    - The exponent value in exponentiation. It specifies the power to which the base value is raised.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The result of raising the base value to the exponent, computed as a floating-point number.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class PowNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Value": Field.float(),
                "Exponent": Field.float(),
            },
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "pow"
    CATEGORY = TREE_MATH

    def pow(self, Value, Exponent):
        total = math.pow(Value, Exponent)
        return (total,)

```
