
# Documentation
- Class name: RandomFloat
- Category: Art Venture/Utils
- Output node: False

The RandomFloat node is used to generate a random floating-point number within a specified range. It simplifies the complex process of random number generation using PyTorch, providing a simple interface to obtain a random floating-point number, which can be used in various application scenarios requiring random behavior.

# Input types
## Required
- min
    - Specifies the minimum value of the range for generating random floating-point numbers. It sets the lower bound for random numbers, ensuring that the output is not less than this value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max
    - Defines the maximum value of the range for generating random floating-point numbers. It acts as an upper bound, ensuring that the generated number does not exceed this value.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The generated random floating-point number.
    - Comfy dtype: FLOAT
    - Python dtype: float
- string
    - The string representation of the generated random floating-point number.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilRandomFloat:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "min": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 0xFFFFFFFFFFFFFFFF}),
                "max": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 0xFFFFFFFFFFFFFFFF}),
            }
        }

    RETURN_TYPES = ("FLOAT", "STRING")
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "random_float"

    @classmethod
    def IS_CHANGED(s, *args, **kwargs):
        return torch.rand(1).item()

    def random_float(self, min: float, max: float):
        num = torch.rand(1).item() * (max - min) + min
        return (num, str(num))

```
