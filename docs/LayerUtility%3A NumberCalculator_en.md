# Documentation
- Class name: NumberCalculator
- Category: 😺dzNodes/LayerUtility/Data
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Perform Boolean operations on two values and output the result*. Supported operations include ==, !=, and, or, xor, not, min, max.

* Input only supports Boolean values, integers, and floating-point numbers. Forcibly connecting other data will cause errors. The and operation between numbers outputs the larger number, the or operation outputs the smaller number.

# Input types
## Required

- a
    - Input value a.
    - Comfy dtype: BOOLEAN, INT, FLOAT
    - Python dtype: bool, int, float

- b
    - Input value b.
    - Comfy dtype: BOOLEAN, INT, FLOAT
    - Python dtype: bool, int, float

- operator
    - Operator.
    - Comfy dtype: STRING
    - Python dtype: str
    - Optional values: "==", "!=", "and", "or", "xor", "not(a)", "min", "max"

# Output types

- output
    - Operation result.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
```
class NumberCalculator:
    def __init__(self):
        pass
    @classmethod
    def INPUT_TYPES(self):
        operator_list = ["+", "-", "*", "/", "**", "//", "%" ]
        return {"required": {
                "a": (any, {}),
                "b": (any, {}),
                "operator": (operator_list,),
            },}

    RETURN_TYPES = ("INT", "FLOAT",)
    RETURN_NAMES = ("int", "float",)
    FUNCTION = 'number_calculator_node'
    CATEGORY = '😺dzNodes/LayerUtility/Data'

    def number_calculator_node(self, a, b, operator):
        ret_value = 0
        if operator == "+":
            ret_value = a + b
        if operator == "-":
            ret_value = a - b
        if operator == "*":
            ret_value = a * b
        if operator == "/":
            ret_value = a / b
        if operator == "**":
            ret_value = a ** b
        if operator == "//":
            ret_value = a // b
        if operator == "%":
            ret_value = a % b

        return (int(ret_value), float(ret_value),)
```