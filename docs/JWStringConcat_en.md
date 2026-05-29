
# Documentation
- Class name: JWStringConcat
- Category: jamesWalker55
- Output node: False

The JWStringConcat node concatenates two strings, providing a simple yet essential function for string operations in data flow.

# Input types
## Required
- a
    - The first string to concatenate. It serves as the starting part of the final concatenated string.
    - Comfy dtype: STRING
    - Python dtype: str
- b
    - The second string to concatenate. It is appended after the first string to form the complete concatenated result.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The result of concatenating the two input strings, forming a single combined string.
    - Comfy dtype: STRING
    - Python dtype: str


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
