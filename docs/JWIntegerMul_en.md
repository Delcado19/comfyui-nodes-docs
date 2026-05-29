
# Documentation
- Class name: JWIntegerMul
- Category: jamesWalker55
- Output node: False

The JWIntegerMul node provides a simple integer multiplication function. It receives two integers as input and returns their product. This node is primarily used for basic arithmetic operations involving integers.

# Input types
## Required
- a
    - The first integer operand in the multiplication operation. It plays a key role in determining the final product value.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - The second integer operand in the multiplication operation. It has a significant impact on the final product result.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The result of multiplying the two input integers, returned as an integer.
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
