
# Documentation
- Class name: concat
- Category: klinter
- Output node: False

The concat node concatenates strings, optionally including an extra string, following guidelines. It abstracts string concatenation, ensuring operations adhere to formatting rules like adding spaces between concatenated strings for readability.

# Input types
## Required
- string_a
    - The primary string to concatenate. It serves as the base string to which other strings are appended.
    - Comfy dtype: STRING
    - Python dtype: str
- string_b
    - The second string concatenated to the primary string to enhance base content.
    - Comfy dtype: STRING
    - Python dtype: str
- string_c
    - An optional third string that can be concatenated to the primary and second strings, providing additional flexibility.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The result of concatenating up to three strings, with optional spaces between non-empty strings to ensure proper formatting.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class concat:
    """Class for concatenating strings with optional additional string, following klinter guidelines."""

    @classmethod
    def INPUT_TYPES(cls):
        """Defines the input types for the concatenation operation."""
        return {
            "required": {
                "string_a": ("STRING", {"forceInput": True, "default": "", "multiline": True}),
                "string_b": ("STRING", {"forceInput": True, "default": "", "multiline": True}),
                # Assuming string_c remains optional as indicated
                "string_c": ("STRING", {"default": "", "multiline": True}),
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "concat"
    CATEGORY = "klinter"

    def concat(self, string_a, string_b, string_c=""):
        """Concatenates up to three strings, adding a space between non-empty strings."""
        # Ensure each non-empty string ends with a space for proper concatenation
        string_a_with_space = f"{string_a} " if string_a else ""
        string_b_with_space = f"{string_b} " if string_b else ""
        string_c_with_space = f"{string_c} " if string_c else ""

        # Concatenate the strings and remove any trailing space
        concatenated_string = (string_a_with_space + string_b_with_space + string_c_with_space).rstrip()

        return (concatenated_string,)

```
