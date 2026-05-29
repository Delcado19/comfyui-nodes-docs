
# Documentation
- Class name: JWFloatMax
- Category: jamesWalker55
- Output node: False

JWFloatMax node is used to compute the maximum of two floating-point numbers. It is designed to compare two float values and return the larger one, providing a simple yet essential operation for numeric data processing.

# Input types
## Required
- a
    - The first floating-point number to compare. It plays a crucial role in determining the maximum when compared with the second number.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - The second floating-point number to compare. Together with the first number, it is essential for determining the maximum.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The maximum of the two input floating-point numbers.
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
