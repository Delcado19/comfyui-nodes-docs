
# Documentation
- Class name: JWFloatToString
- Category: jamesWalker55
- Output node: False

The JWFloatToString node is designed to convert a floating-point number to its string representation, facilitating integration of numerical data with text-based processing or output.

# Input types
## Required
- value
    - The floating-point number that needs to be converted to a string. This parameter is critical for determining the specific value to be converted.
    - Comfy dtype: FLOAT
    - Python dtype: float
- format_string
    - A format string that specifies how the floating-point number should be formatted when converted to a string. This allows customization of the output string, including precision, padding, and other formatting options.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The string representation of the input floating-point number, formatted according to the provided format string.
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
