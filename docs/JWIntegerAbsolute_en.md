
# Documentation
- Class name: JWIntegerAbsolute
- Category: jamesWalker55
- Output node: False

The JWIntegerAbsolute node computes the absolute value of an integer. It converts negative numbers to their positive counterparts while positive numbers remain unchanged. This operation ensures the output is always non-negative.

# Input types
## Required
- value
    - Specifies the integer for which the absolute value is computed. This input determines the magnitude of the output while ensuring it is non-negative.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The non-negative absolute value of the input integer.
    - Comfy dtype: INT
    - Python dtype: int


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
