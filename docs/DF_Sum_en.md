
# Documentation
- Class name: DF_Sum
- Category: Derfuu_Nodes/Math
- Output node: False

The DF_Sum node is designed to perform arithmetic addition, accepting two floating-point inputs and returning their sum as a floating-point output. This node simplifies the process of adding numbers in mathematical or computational environments, facilitating operations that require summation.

# Input types
## Required
- Value_A
    - Represents one of the two values to be added. Its role is critical as it directly affects the result of the summation calculation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Value_B
    - Serves as the second value to be added to the first value. Its importance lies in its contribution to the total sum, influencing the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The result of adding the two input values together. It represents the computed total, embodying the primary function of the node.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SumNode:
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
    FUNCTION = "sum"
    CATEGORY = TREE_MATH

    def sum(self, Value_A, Value_B):
        total = float(Value_A + Value_B)
        return (total,)

```
