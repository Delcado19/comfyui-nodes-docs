# Documentation
- Class name: IntToFloat
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The IntToFloat node converts integer values to their floating-point equivalents. It plays a critical role in numerical operations by ensuring data type consistency when accurate results are required, thereby guaranteeing computational precision.

# Input types
## Required
- a
    - Parameter 'a' represents the integer value to be converted to a float. It is essential to the node's operation as it determines the starting point of the conversion process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - Output 'result' is the floating-point representation of the input integer. It is important because it provides the converted value that can be used in subsequent numerical calculations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class IntToFloat:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'a': ('INT', {'default': 0})}}
    RETURN_TYPES = ('FLOAT',)
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, a: int) -> tuple[float]:
        return (float(a),)
```