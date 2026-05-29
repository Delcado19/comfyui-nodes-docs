
# Documentation
- Class name: Evaluate Floats
- Category: Efficiency Nodes/Simple Eval
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Evaluate Floats node is used to evaluate mathematical expressions involving floating-point numbers and convert the results into multiple formats (integer, float, and string) for further use. It supports dynamic input via variables and optionally prints the evaluation result to the console for debugging or informational purposes.

# Input types
## Required
- python_expression
    - The mathematical expression to evaluate, allowing dynamic calculations involving floating-point numbers. It plays a key role in determining the node's output by specifying the operation to perform.
    - Comfy dtype: STRING
    - Python dtype: str
- print_to_console
    - A flag indicating whether the evaluation result should be printed to the console, aiding debugging or providing immediate visual feedback of the operation's result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- a
    - Optional variable 'a', usable in python_expression for dynamic evaluation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - Optional variable 'b', usable in python_expression for dynamic evaluation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- c
    - Optional variable 'c', usable in python_expression for dynamic evaluation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- int
    - Integer representation of the evaluated expression result.
    - Comfy dtype: INT
    - Python dtype: int
- float
    - Float representation of the evaluated expression result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- string
    - String representation of the evaluated expression result.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
    class TSC_EvaluateFloats:
        @classmethod
        def INPUT_TYPES(cls):
            return {"required": {
                "python_expression": ("STRING", {"default": "((a + b) - c) / 2", "multiline": False}),
                "print_to_console": (["False", "True"],), },
                "optional": {
                    "a": ("FLOAT", {"default": 0, "min": -sys.float_info.max, "max": sys.float_info.max, "step": 1}),
                    "b": ("FLOAT", {"default": 0, "min": -sys.float_info.max, "max": sys.float_info.max, "step": 1}),
                    "c": ("FLOAT", {"default": 0, "min": -sys.float_info.max, "max": sys.float_info.max, "step": 1}), },
            }

        RETURN_TYPES = ("INT", "FLOAT", "STRING",)
        OUTPUT_NODE = True
        FUNCTION = "evaluate"
        CATEGORY = "Efficiency Nodes/Simple Eval"

        def evaluate(self, python_expression, print_to_console, a=0, b=0, c=0):
            # simple_eval doesn't require the result to be converted to a string
            result = simpleeval.simple_eval(python_expression, names={'a': a, 'b': b, 'c': c})
            int_result = int(result)
            float_result = float(result)
            string_result = str(result)
            if print_to_console == "True":
                print(f"\n{error('Evaluate Floats:')}")
                print(f"\033[90m{{a = {a} , b = {b} , c = {c}}} \033[0m")
                print(f"{python_expression} = \033[92m INT: " + str(int_result) + " , FLOAT: " + str(
                    float_result) + ", STRING: " + string_result + "\033[0m")
            return (int_result, float_result, string_result,)

```
