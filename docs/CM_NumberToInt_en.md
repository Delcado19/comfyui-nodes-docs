# Documentation
- Class name: NumberToInt
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The NumberToInt node is designed to convert a numerical input into an integer form. It plays a critical role in scenarios where floating-point precision is not required and the simplicity and efficiency of integers are preferred.

# Input types
## Required
- a
    - The 'a' parameter is the numerical input that the node will convert to an integer. It is essential to the node's operation, as it determines the starting point of the conversion process.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]

# Output types
- op
    - The 'op' output provides the integer conversion of the input parameter 'a'. It is important because it represents the final converted value that can be used for further processing.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class NumberToInt:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'a': ('NUMBER', {'default': 0.0})}}
    RETURN_TYPES = ('INT',)
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, a: number) -> tuple[int]:
        return (int(a),)
```