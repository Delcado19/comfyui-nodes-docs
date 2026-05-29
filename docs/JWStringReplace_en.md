
# Documentation
- Class name: JWStringReplace
- Category: jamesWalker55
- Output node: False

JWStringReplace node performs a string replacement operation, replacing all occurrences of a specified substring in the source string with another substring. This node is intended to modify text data by substituting specific text patterns with alternative text, facilitating text preprocessing or data normalization tasks.

# Input types
## Required
- source
    - The original string to be processed. It serves as the base text for the operation.
    - Comfy dtype: STRING
    - Python dtype: str
- to_replace
    - The substring that needs to be replaced in the source string. It identifies the specific pattern or text to be replaced.
    - Comfy dtype: STRING
    - Python dtype: str
- replace_with
    - The substring used to replace occurrences of the 'to_replace' substring in the source string. It specifies the new text to insert.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The modified string after all occurrences of the 'to_replace' substring have been replaced with the 'replace_with' substring.
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
