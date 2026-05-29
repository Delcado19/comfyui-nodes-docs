
# Documentation
- Class name: JWFloatMul
- Category: jamesWalker55
- Output node: False

The JWFloatMul node performs multiplication between two floating‑point numbers, providing a direct way to scale or combine values in a floating‑point environment. This node is especially useful in scenarios requiring precise numeric computation, such as image processing, financial calculations, or scientific simulations.

# Input types
## Required
- a
- The first floating‑point number for the multiplication operation, serving as one operand.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
- The second floating‑point number for the multiplication operation, serving as the other operand and together determining the final product.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
- The result of multiplying the two input floating‑point numbers, returned as a single floating‑point value.
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
