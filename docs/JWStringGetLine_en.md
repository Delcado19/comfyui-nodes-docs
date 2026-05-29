
# Documentation
- Class name: JWStringGetLine
- Category: jamesWalker55
- Output node: False

This node extracts a specific line from a given string based on the provided line index. It facilitates text processing by allowing users to retrieve individual lines from larger text blocks.

# Input types
## Required
- source
    - The source string from which lines are extracted. It serves as the text input for line retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
- line_index
    - The index of the line to retrieve from the source string. This determines which line of the text is extracted.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
    - The line extracted from the source string at the specified index.
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
