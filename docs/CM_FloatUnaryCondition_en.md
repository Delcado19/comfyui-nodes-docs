# Documentation
- Class name: FloatUnaryCondition
- Category: math/float
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

This node aims to evaluate a single-operand mathematical condition on a floating-point number. It provides a method to perform conditional checks, such as checking whether a number is positive, negative, or zero, without directly implementing the logic in code.

# Input types
## Required
- op
    - The operation parameter defines the single-operand condition to be applied to the input floating-point number. It is crucial because it determines the type of check that will be performed on the input value.
    - Comfy dtype: str
    - Python dtype: str
- a
    - The 'a' parameter represents the floating-point number on which the single-operand condition will be evaluated. It is crucial because the entire operation revolves around this value.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- result
    - The result of the operation is a boolean value indicating whether the single-operand condition applied to the input floating-point number is true or false.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class FloatUnaryCondition:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'op': (list(FLOAT_UNARY_CONDITIONS.keys()),), 'a': DEFAULT_FLOAT}}
    RETURN_TYPES = ('BOOL',)
    FUNCTION = 'op'
    CATEGORY = 'math/float'

    def op(self, op: str, a: float) -> tuple[bool]:
        return (FLOAT_UNARY_CONDITIONS[op](a),)
```