
# Documentation
- Class name: RandomInt
- Category: Art Venture/Utils
- Output node: False

The RandomInt node generates a random integer within a specified range. It simplifies the complexity of random number generation, providing a simple interface for obtaining integers that can be used in various applications such as random sampling or stochastic processes.

# Input types
## Required
- min
    - Specifies the minimum value of the range for generating random integers. It sets the lower bound for random number generation.
    - Comfy dtype: INT
    - Python dtype: int
- max
    - Defines the maximum value of the random integer generation range. It establishes the upper bound, ensuring the generated number does not exceed this value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The random integer generated within the specified range.
    - Comfy dtype: INT
    - Python dtype: int
- string
    - The string representation of the generated random integer, facilitating use in scenarios requiring text data.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilRandomInt:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "min": ("INT", {"default": 0, "min": 0, "max": 0xFFFFFFFFFFFFFFFF}),
                "max": ("INT", {"default": 100, "min": 0, "max": 0xFFFFFFFFFFFFFFFF}),
            }
        }

    RETURN_TYPES = ("INT", "STRING")
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "random_int"

    @classmethod
    def IS_CHANGED(s, *args, **kwargs):
        return torch.rand(1).item()

    def random_int(self, min: int, max: int):
        num = torch.randint(min, max, (1,)).item()
        return (num, str(num))

```
