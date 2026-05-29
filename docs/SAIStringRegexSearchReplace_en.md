
# Documentation
- Class name: SAIStringRegexSearchReplace
- Category: SALT/String/Process/Regex
- Output node: False

This node provides the functionality to search and replace text in a given input string based on a specified regular expression pattern. It enables dynamic modification of text content by identifying patterns and substituting them with the desired replacement string.

# Input types
## Required
- text_input
    - The input text on which the search and replace operations will be performed. It serves as the main content for the regular expression operation.
    - Comfy dtype: STRING
    - Python dtype: str
- regex_pattern
    - The regular expression pattern used to identify text segments in the input text that need to be replaced.
    - Comfy dtype: STRING
    - Python dtype: str
- replacement_text
    - The text used to replace segments in the input text identified by the regular expression pattern.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- replaced_text
    - The resulting text after performing the search and replace operations on the input text.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SAIStringRegexSearchReplace:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "text_input": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "Text for replacement..."}),
                "regex_pattern": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "\\b\\w{5}\\b"}),
                "replacement_text": ("STRING", {"multiline": True, "dynamicPrompts": False, "placeholder": "Replacement text..."}),
            },
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("replaced_text",)

    FUNCTION = "replace_matches"
    CATEGORY = "SALT/String/Process/Regex"

    def replace_matches(self, text_input, regex_pattern, replacement_text):
        replaced_text = re.sub(regex_pattern, replacement_text, text_input)
        return (replaced_text,)

```
