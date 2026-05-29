
# Documentation
- Class name: Evaluate Strings
- Category: Efficiency Nodes/Simple Eval
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Evaluate Strings node dynamically evaluates Python expressions containing string variables. It allows simple arithmetic or functional expressions to be executed by replacing variables in the expression with string values. This node is particularly useful for generating or manipulating string data based on dynamic input.

# Input types
## Required
- python_expression
- Specify the Python expression to evaluate. This expression can include arithmetic operations or functions, where variables will be replaced by corresponding string values provided by other inputs. The choice of expression directly affects the node’s behavior and output, as it determines the operation performed on the input strings.
    - Comfy dtype: STRING
    - Python dtype: str
- print_to_console
- Control whether the evaluation result and variable values are printed to the console. This option is essential when debugging or when visual confirmation of the process is required, as it affects how the result is presented to the user.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
## Optional
- a
- Represents the string value that will replace variable 'a' in the Python expression. Changing this value alters the expression’s result, demonstrating its direct impact on the node’s execution and output.
    - Comfy dtype: STRING
    - Python dtype: str
- b
- Represents the string value that will replace variable 'b' in the Python expression. This input plays a key role during evaluation, influencing the final result through how the expression utilizes this variable.
    - Comfy dtype: STRING
    - Python dtype: str
- c
- Represents the string value that will replace variable 'c' in the Python expression. The value of 'c' significantly affects the evaluation result, highlighting its importance in the node’s overall functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
- The result of the evaluated Python expression, converted to a string. This output reflects the final result processed by the node, providing the string representation of the evaluation.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
    class TSC_EvaluateStrs:
        @classmethod
        def INPUT_TYPES(cls):
            return {"required": {
                "python_expression": ("STRING", {"default": "a + b + c", "multiline": False}),
                "print_to_console": (["False", "True"],)},
                "optional": {
                    "a": ("STRING", {"default": "Hello", "multiline": False}),
                    "b": ("STRING", {"default": " World", "multiline": False}),
                    "c": ("STRING", {"default": "!", "multiline": False}), }
            }

        RETURN_TYPES = ("STRING",)
        OUTPUT_NODE = True
        FUNCTION = "evaluate"
        CATEGORY = "Efficiency Nodes/Simple Eval"

        def evaluate(self, python_expression, print_to_console, a="", b="", c=""):
            variables = {'a': a, 'b': b, 'c': c}  # Define the variables for the expression

            functions = simpleeval.DEFAULT_FUNCTIONS.copy()
            functions.update({"len": len})  # Add the functions for the expression

            result = simpleeval.simple_eval(python_expression, names=variables, functions=functions)
            if print_to_console == "True":
                print(f"\n{error('Evaluate Strings:')}")
                print(f"\033[90ma = {a} \nb = {b} \nc = {c}\033[0m")
                print(f"{python_expression} = \033[92m" + str(result) + "\033[0m")
            return (str(result),)  # Convert result to a string before returning

```
