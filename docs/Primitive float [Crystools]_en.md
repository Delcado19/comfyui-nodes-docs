
# Documentation
- Class name: Primitive float [Crystools]
- Category: crystools 🪛/Primitive
- Output node: False

This node provides a simple interface for handling floating-point numbers, allowing users to input and receive floating-point numbers. It is designed to facilitate operations requiring floating-point precision within the Crystools ecosystem.

# Input types
## Required
- float
    - Represents the floating-point number to be processed. This is critical for operations requiring decimal precision.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The processed floating-point number, returned directly consistent with the input.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CFloat:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "float": FLOAT,
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.PRIMITIVE.value
    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("float",)

    FUNCTION = "execute"

    def execute(self, float=True):
        return (float,)

```
