
# Documentation
- Class name: JWFloatAbsolute
- Category: jamesWalker55
- Output node: False

The JWFloatAbsolute node calculates the absolute value of a given floating-point number, effectively removing any negative sign to ensure the result is non-negative.

# Input types
## Required
- value
    - The input floating-point number whose absolute value is to be calculated. This parameter allows the node to process both positive and negative numbers, converting them to their corresponding non-negative values.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The non-negative absolute value of the input floating-point number.
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
