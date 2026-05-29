
# Documentation
- Class name: DF_Subtract
- Category: Derfuu_Nodes/Math
- Output node: False

The DF_Subtract node is designed to perform subtraction between two input values and return the difference as output. It abstracts the mathematical subtraction operation, enabling dynamic calculation of differences between values in a data flow.

# Input types
## Required
- Value_A
    - Value_A represents the minuend in the subtraction. It is the initial value from which Value_B is subtracted, playing a critical role in the node's computed result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Value_B
    - Value_B serves as the subtrahend in the subtraction. Its value is subtracted from Value_A, directly influencing the difference output by the node.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The output is the numerical difference obtained by subtracting Value_B from Value_A, representing the result of the subtraction operation.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SubtractNode:
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
    FUNCTION = "sub"
    CATEGORY = TREE_MATH

    def sub(self, Value_A, Value_B):
        total = float(Value_A - Value_B)
        return (total,)

```
