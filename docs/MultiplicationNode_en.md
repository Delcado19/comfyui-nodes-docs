# Documentation
- Class name: MultiplicationNode
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node performs arithmetic operations on the input value, scaling and adjusting it based on the provided multiplier and addend. It emphasizes the ability to transform and process numerical data in a direct manner, offering flexible output type selection.

# Input types
## Required
- numberA
    - The base value used in the multiplication and addition operations. It plays a critical role in determining the final output, as it is the subject of the transformation.
    - Comfy dtype: any_type
    - Python dtype: Union[int, float, torch.Tensor]
- multiply_by
    - The multiplier applied to the base value, significantly affecting the scale of the result. It is crucial in modifying the magnitude of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- add_by
    - The value added to the multiplication result, adjusting the final output. It plays a role in fine-tuning the result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- a
    - The floating-point result of the arithmetic operation, representing the scaled and adjusted version of the input value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - The integer result of the arithmetic operation, providing a discretized version of the transformed input value.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class MultiplicationNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'numberA': (any_type,), 'multiply_by': ('FLOAT', {'default': 1, 'min': -2, 'max': 18446744073709551615, 'step': 0.01, 'display': 'number'}), 'add_by': ('FLOAT', {'default': 0, 'min': -2000, 'max': 18446744073709551615, 'step': 0.01, 'display': 'number'})}}
    RETURN_TYPES = ('FLOAT', 'INT')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False, False)

    def run(self, numberA, multiply_by, add_by):
        b = int(numberA * multiply_by + add_by)
        a = float(numberA * multiply_by + add_by)
        return (a, b)
```