
# Documentation
- Class name: JWStringMultiline
- Category: jamesWalker55
- Output node: False

This node is designed to process and return multi-line strings, preserving newlines and formatting in the text. It simplifies the complexity of managing multi-line strings, making it easier to handle text spanning multiple lines.

# Input types
## Required
- text
    - The text input parameter allows users to input multi-line strings. This parameter is essential for preserving the formatting and newlines of the input text, ensuring the output accurately reflects the structure of the original text.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The output is a multi-line string that preserves the formatting and newlines of the input text, suitable for applications that require maintaining the original text structure.
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
