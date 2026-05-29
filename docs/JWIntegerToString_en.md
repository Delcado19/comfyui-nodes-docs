
# Documentation
- Class name: JWIntegerToString
- Category: jamesWalker55
- Output node: False

The JWIntegerToString node converts an integer to a string and formats it according to a specified pattern. This node allows customization of the integer representation, facilitating integration of numeric data into text-based formats.

# Input types
## Required
- value
    - The integer value to convert to a string. This parameter determines the numeric content of the final string.
    - Comfy dtype: INT
    - Python dtype: int
- format_string
    - The format string that defines how the integer value is represented as a string. This parameter allows flexible customization of the output format, including padding, alignment, and numeric base.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The string representation of the integer after conversion according to the specified format string.
    - Comfy dtype: STRING
    - Python dtype: str


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
