
# Documentation
- Class name: JWFloatAdd
- Category: jamesWalker55
- Output node: False

The JWFloatAdd node is used to perform addition of two floating-point numbers, providing a simple and fundamental arithmetic operation for numerical calculations.

# Input types
## Required
- a
    - Represents the first floating-point number to be added. It plays a key role in determining the result of the addition operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - Represents the second floating-point number to be added. It influences the result of the addition operation together with the first number.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The result of adding the two input floating-point numbers. It encapsulates the final output of this arithmetic operation.
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
