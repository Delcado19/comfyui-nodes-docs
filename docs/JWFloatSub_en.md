
# Documentation
- Class name: JWFloatSub
- Category: jamesWalker55
- Output node: False

This node is intended to perform a subtraction operation between two floating-point numbers, providing a straightforward method for computing numerical differences in a computation graph.

# Input types
## Required
- a
    - Represents the minuend in a subtraction operation, the number from which another number (the subtrahend) is subtracted.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - Represents the subtrahend in a subtraction operation, the number to be subtracted from another number (the minuend).
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The result of performing a subtraction operation between two floating-point numbers.
    - Comfy dtype: FLOAT
    - Python dtype: tuple[float]


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
