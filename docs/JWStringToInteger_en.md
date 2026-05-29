
# Documentation
- Class name: JWStringToInteger
- Category: jamesWalker55
- Output node: False

This node converts the string representation of an integer to its numerical form. It is designed to parse strings containing integer values and convert them into actual integer data types, thereby facilitating numerical operations on values originally in text format.

# Input types
## Required
- text
    - The 'text' parameter accepts a string input representing an integer. This parameter is critical to the node's operation, as it determines the integer value that will be produced after the node executes.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- int
    - The output is the integer representation of the input string. This allows further numerical operations on the previously text-based integer values.
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
