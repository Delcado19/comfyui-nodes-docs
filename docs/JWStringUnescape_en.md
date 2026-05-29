
# Documentation
- Class name: JWStringUnescape
- Category: jamesWalker55
- Output node: False

The JWStringUnescape node is designed to process string inputs containing escape characters. It converts escape sequences such as '\n' into their actual character representations (e.g., newline). This functionality is essential for accurately processing and displaying strings that contain escape sequences.

# Input types
## Required
- text
    - The text parameter is the input string that may contain escape sequences. The node processes the input by converting these sequences into their corresponding characters, thereby improving the readability and usability of the string.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The output is a string in which all escape sequences have been converted into their actual character representations, making it more readable and easier to use.
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
