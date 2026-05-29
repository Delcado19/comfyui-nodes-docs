# Documentation
- Class name: EvalFloats
- Category: Mikey/Math
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The EvalFloats node is designed to evaluate mathematical expressions provided as strings, using two floating-point numbers as variables in the formula. It serves as a versatile tool for performing dynamically defined calculations, offering flexibility in mathematical operations without hardcoding expressions.

# Input types
## Required
- a
    - Parameter 'a' is a floating-point number representing a variable in the mathematical formula. It is essential for defining the initial state of the calculation and directly influences the result of the evaluated expression.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - Parameter 'b' is another floating-point number used alongside 'a' in the mathematical expression. It plays a significant role in the calculation, as it helps derive the final result from the formula.
    - Comfy dtype: FLOAT
    - Python dtype: float
- formula
    - Parameter 'formula' is a string containing the mathematical expression to be evaluated. It is critical because it determines the operations performed on input variables 'a' and 'b', defining the nature of the calculation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result_float
    - Output 'result_float' provides the floating-point result of the evaluated mathematical expression. It is important as it represents the direct outcome of the calculation based on the input variables and formula.
    - Comfy dtype: FLOAT
    - Python dtype: float
- result_int
    - Output 'result_int' is the integer representation of the evaluated result. It is useful when an integer value from the calculation is needed, providing a discrete version of the computed result.
    - Comfy dtype: INT
    - Python dtype: int
- result_str
    - Output 'result_str' is the string representation of the evaluated result. It is particularly suitable for displaying results in a human-readable format or for use in further string-based processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class EvalFloats:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'a': ('FLOAT', {'default': 0.0}), 'b': ('FLOAT', {'default': 0.0}), 'formula': ('STRING', {'multiline': False, 'default': 'a + b'})}}
    RETURN_TYPES = ('FLOAT',)
    RETURN_NAMES = ('result_float', 'result_int', 'result_str')
    FUNCTION = 'process'
    CATEGORY = 'Mikey/Math'

    def process(self, a, b, formula):
        formula = formula.replace('a', str(a))
        formula = formula.replace('b', str(b))
        result = eval(formula)
        return (result, int(result), str(result))
```