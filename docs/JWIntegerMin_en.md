
# Documentation
- Class name: JWIntegerMin
- Category: jamesWalker55
- Output node: False

The JWIntegerMin node computes the minimum of two integer values. It abstracts the process of comparing two integers and returning the smaller one, simplifying operations that need to determine the minimum value.

# Input types
## Required
- a
    - The first integer value to compare. It plays a key role in determining the minimum when compared with the second integer.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - The second integer value to compare. It is essential for determining the minimum between the two integers during the comparison process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The output is the minimum value obtained by comparing the two input integers.
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
