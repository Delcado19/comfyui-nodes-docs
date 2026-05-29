# Documentation
- Class name: IntToBool
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The IntToBool node is designed to convert integer values to a boolean representation. It serves as a basic utility to abstract the concept of truth from numerical data in cases where the presence or absence of a value is critical. This node plays a key role in data type conversion, ensuring that numerical inputs are properly interpreted in a boolean context.

# Input types
## Required
- a
    - Parameter 'a' is the input integer that the node will process. It is crucial for the operation of the node because it determines the boolean output based on whether the value is non-zero. This parameter directly affects the execution of the node and the resulting boolean value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- op
    - The 'op' output is a boolean value that represents the truth value of the input integer. It is important because it provides a clear and direct interpretation of the numerical input in a boolean context, which is often necessary for further processing or decision making in a system.
    - Comfy dtype: BOOL
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class IntToBool:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'a': ('INT', {'default': 0})}}
    RETURN_TYPES = ('BOOL',)
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, a: int) -> tuple[bool]:
        return (a != 0,)
```