
# Documentation
- Class name: JWIntegerAdd
- Category: jamesWalker55
- Output node: False

The JWIntegerAdd node performs addition of two integer values, providing a simple arithmetic operation in the node network.

# Input types
## Required
- a
    - The first integer value to be added. It plays a key role in determining the result of the addition operation.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - The second integer value to be added. It contributes equally to the result of the addition operation along with the first integer.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The result of adding the two input integers. This output represents the sum of the input values.
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
