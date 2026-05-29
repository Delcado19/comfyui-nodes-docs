
# Documentation
- Class name: JWFloatMin
- Category: jamesWalker55
- Output node: False

The JWFloatMin node computes the minimum of two floating-point numbers, providing a simple and fundamental mathematical operation for numerical data processing.

# Input types
## Required
- a
    - The first floating-point number to compare. It plays a key role in determining the minimum when compared with the second number.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - The second floating-point number to compare. Together with the first number, it is essential for determining the minimum.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The minimum value between the two input floating-point numbers.
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
