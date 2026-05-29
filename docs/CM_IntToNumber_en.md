# Documentation
- Class name: IntToNumber
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

This node converts integer input into a numeric format suitable for further processing, emphasizing the importance of data type conversion in computational workflows.

# Input types
## Required
- a
    - Parameter 'a' is a critical input, providing the integer value for the node. Correct input is essential for the node to perform the conversion accurately and influence the final result.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The node's output is the numeric representation of the input integer, which is essential for subsequent operations requiring numerical data.
    - Comfy dtype: NUMBER
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class IntToNumber:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'a': ('INT', {'default': 0})}}
    RETURN_TYPES = ('NUMBER',)
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, a: int) -> tuple[number]:
        return (a,)
```