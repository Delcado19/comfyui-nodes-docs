# Documentation
- Class name: Compare
- Category: EasyUse/Logic/Math
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The Compare node facilitates logical comparison between two inputs, providing a direct method to determine the relationship between values. It is designed to support various comparison operations, offering a flexible and intuitive way to integrate conditional logic into workflows. By abstracting the comparison process, this node enhances the ability to make decisions based on data properties, contributing to building more dynamic and responsive systems.

# Input types
## Required
- a
    - Parameter 'a' represents the first operand in the comparison operation. It is central to the node's functionality, as it sets the baseline value against which the second operand is compared. The importance of this parameter lies in its role in determining the result of the logical comparison.
    - Comfy dtype: *
    - Python dtype: Any
- b
    - Parameter 'b' is the second operand used for comparison. Its significance comes from its contrast with the first operand, and it is this parameter, combined with the comparison function, that determines the outcome of the comparison.
    - Comfy dtype: *
    - Python dtype: Any
- comparison
    - Parameter 'comparison' is the logical operation that defines how the two operands are compared. It is critical because it determines the nature of the evaluation and directly influences the result of the comparison.
    - Comfy dtype: COMBO[compare_functions]
    - Python dtype: str

# Output types
- boolean
    - Output 'boolean' represents the result of the logical comparison, providing a binary outcome that reflects the relationship between the two input operands.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class Compare:

    @classmethod
    def INPUT_TYPES(s):
        s.compare_functions = list(COMPARE_FUNCTIONS.keys())
        return {'required': {'a': (AlwaysEqualProxy('*'), {'default': 0}), 'b': (AlwaysEqualProxy('*'), {'default': 0}), 'comparison': (s.compare_functions, {'default': 'a == b'})}}
    RETURN_TYPES = ('BOOLEAN',)
    RETURN_NAMES = ('boolean',)
    FUNCTION = 'compare'
    CATEGORY = 'EasyUse/Logic/Math'

    def compare(self, a, b, comparison):
        return (COMPARE_FUNCTIONS[comparison](a, b),)
```