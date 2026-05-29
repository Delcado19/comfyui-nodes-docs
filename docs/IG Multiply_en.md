
# Documentation
- Class name: IG Multiply
- Category: 🐓 IG Nodes/Math
- Output node: False

The IG Multiply node performs multiplication of two floating‑point values, providing a simple and direct way to compute the product of two numbers in a visual programming environment.

# Input types
## Required
- Value_A
- Specify the first floating‑point value to multiply. Its range is virtually unlimited, allowing a wide variety of numeric inputs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Value_B
- Specify the second floating‑point value to multiply. Like Value_A, it supports a broad range of numeric inputs, enabling diverse multiplication scenarios.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
- Output the result of multiplying Value_A and Value_B as a floating‑point number.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IG_MultiplyNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Value_A": ("FLOAT", {"default": 1, "min": -sys.float_info.max, "max": sys.float_info.max, "step": FLOAT_STEP}),
                "Value_B": ("FLOAT", {"default": 1, "min": -sys.float_info.max, "max": sys.float_info.max, "step": FLOAT_STEP}),
            },
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "main"
    CATEGORY = TREE_MATH

    def main(self, Value_A, Value_B):
        total = float(Value_A * Value_B)
        return (total,)

```
