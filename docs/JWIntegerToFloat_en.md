
# Documentation
- Class name: JWIntegerToFloat
- Category: jamesWalker55
- Output node: False

The JWIntegerToFloat node aims to convert an integer input into its floating-point representation. This conversion allows numerical data to be stored in a format that can accommodate decimals, thus facilitating operations that require fractional values.

# Input types
## Required
- value
    - The integer value to be converted to a floating-point number. This input is crucial for the operation because it determines the exact numerical data that will undergo the conversion process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- float
    - The floating-point representation of the input integer. This output is important because it enables the converted value to be used in scenarios that require floating-point precision.
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
