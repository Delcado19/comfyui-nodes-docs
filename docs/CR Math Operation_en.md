# Documentation
- Class name: CR_MathOperation
- Category: Comfyroll/Utils/Other
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_MathOperation node aims to perform various mathematical operations on a given input value. It abstracts the complexity of mathematical functions, enabling users to easily apply operations such as sine, cosine, and logarithm. The node emphasizes simplicity and ease of use, ensuring mathematical transformations are accessible without needing to understand the underlying algorithm details.

# Input types
## Required
- a
    - The parameter 'a' represents the input value on which the mathematical operation will be performed. It is central to the node's functionality as it directly affects the result of the operation. The choice of this value can significantly influence the outcome, making it a key component of the node's execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- operation
    - The parameter 'operation' indicates the mathematical function to be applied to the input value. It is crucial because it determines the type of transformation that will occur. Selecting an operation is key to achieving the expected result of the node's execution.
    - Comfy dtype: COMBO['sin', 'cos', 'tan', 'sqrt', 'exp', 'log', 'neg', 'abs']
    - Python dtype: str
- decimal_places
    - The parameter 'decimal_places' specifies the number of decimal places to which the result will be rounded. It plays a key role in determining the precision of the output, allowing users to control the level of detail in the final result.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- a
    - The output 'a' provides the result of the mathematical operation after being rounded to the specified number of decimal places. It is important because it represents the final result of the node's processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The output 'show_help' provides a URL link to the node's documentation page, offering users additional information and guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_MathOperation:

    @classmethod
    def INPUT_TYPES(cls):
        operations = ['sin', 'cos', 'tan', 'sqrt', 'exp', 'log', 'neg', 'abs']
        return {'required': {'a': ('FLOAT', {'default': 1.0}), 'operation': (operations,), 'decimal_places': ('INT', {'default': 2, 'min': 0, 'max': 10})}}
    RETURN_TYPES = ('FLOAT', 'STRING')
    RETURN_NAMES = ('a', 'show_help')
    FUNCTION = 'do_math'
    CATEGORY = icons.get('Comfyroll/Utils/Other')

    def do_math(self, a, operation, decimal_places):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-math-operation'
        if operation == 'sin':
            result = math.sin(a)
        elif operation == 'cos':
            result = math.cos(a)
        elif operation == 'tan':
            result = math.cos(a)
        elif operation == 'sqrt':
            result = math.sqrt(a)
        elif operation == 'exp':
            result = math.exp(a)
        elif operation == 'log':
            result = math.log(a)
        elif operation == 'neg':
            result = -a
        elif operation == 'abs':
            result = abs(a)
        else:
            raise ValueError('CR Math Operation: Unsupported operation.')
        result = round(result, decimal_places)
        return (result, show_help)
```