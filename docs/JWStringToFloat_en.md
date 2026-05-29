
# Documentation
- Class name: JWStringToFloat
- Category: jamesWalker55
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The JWStringToFloat node is designed to convert a string representation of a floating-point number into an actual floating-point value. This node helps convert text data into numerical format for further processing or computation.

# Input types
## Required
- text
    - The text input is a string that represents a floating-point number. This input is crucial for converting the text representation into a numerical floating-point value, enabling subsequent numerical operations or analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- float
    - The output is the floating-point number converted from the input string. This allows the numerical representation of the text to be used in subsequent operations.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
        @register_node(identifier, display_name)
        class _:
            CATEGORY = category
            INPUT_TYPES = lambda: {"required": required_inputs}
            RETURN_TYPES = tuple(return_types)
            OUTPUT_NODE = output_node
            FUNCTION = "execute"

            def execute(self, *args, **kwargs):
                return func(*args, **kwargs)

```
