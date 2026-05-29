
# Documentation
- Class name: JWIntegerMax
- Category: jamesWalker55
- Output node: False

The JWIntegerMax node is used to calculate the maximum value between two integers. It abstracts the process of comparing two integer values and returning the larger value, simplifying the operation of finding the maximum value among two numbers.

# Input types
## Required
- a
    - The first integer value to compare. It plays a key role in comparison with the second integer to determine the maximum.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - The second integer value to compare with the first integer. This value is crucial in the comparison process to identify the maximum of the two integers.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - The output is the maximum value obtained by comparing the two input integers. It represents the larger of the two numbers provided as input.
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
