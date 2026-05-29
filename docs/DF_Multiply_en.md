
# Documentation
- Class name: DF_Multiply
- Category: Derfuu_Nodes/Math
- Output node: False

The DF_Multiply node performs multiplication of two floating-point numbers, providing a straightforward method for calculating the product of two values in mathematical or computational workflows.

# Input types
## Required
- Value_A
    - Value_A represents the first floating-point number to be multiplied. It plays a crucial role in determining the final result of the multiplication operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Value_B
    - Value_B is the second floating-point number involved in the multiplication operation. Its value directly affects the product result and is an essential component of the operation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The output is a floating-point number representing the product of the input values Value_A and Value_B. It encapsulates the result of the multiplication operation.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - floatToInt _O



## Source code
```python
class MultiplyNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Value_A": Field.float(),
                "Value_B": Field.float(),
            },
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "multiply"
    CATEGORY = TREE_MATH

    def multiply(self, Value_A, Value_B):
        total = float(Value_A * Value_B)
        return (total,)

```
