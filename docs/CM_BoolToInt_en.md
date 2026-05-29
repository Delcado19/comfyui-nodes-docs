# Documentation
- Class name: BoolToInt
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The BoolToInt node is designed to convert a boolean value to its integer equivalent. It plays a key role in scenarios requiring a numerical representation of boolean states, such as mathematical operations or data processing workflows.

# Input types
## Required
- a
    - The 'a' parameter is the boolean input the node expects. It is critical to the conversion process, as the node's purpose is to convert this boolean value into an integer. The boolean nature of the input directly affects the output integer value, with 'True' mapping to 1 and 'False' mapping to 0.
    - Comfy dtype: BOOL
    - Python dtype: bool

# Output types
- op
    - The 'op' output provides the integer conversion of the input boolean value. It is important because it represents the direct result of the node's operation, encapsulating the essence of the boolean-to-integer conversion process.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class BoolToInt:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'a': ('BOOL', {'default': False})}}
    RETURN_TYPES = ('INT',)
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, a: bool) -> tuple[int]:
        return (int(a),)
```