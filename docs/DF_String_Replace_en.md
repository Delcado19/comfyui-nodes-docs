
# Documentation
- Class name: DF_String_Replace
- Category: Derfuu_Nodes/Functions/String Operations
- Output node: False

The DF_String_Replace node is designed to modify strings by replacing a specified pattern with a new substring. It supports strict replacement and regex-based modification, allowing flexible string manipulation.

# Input types
## Required
- Text
    - Input text to process. This parameter is the target of the replacement operation.
    - Comfy dtype: STRING
    - Python dtype: str
- Pattern
    - Pattern to search for in the input text. Can be a literal string in "Strict" mode or a regex pattern in "RegEx" mode.
    - Comfy dtype: STRING
    - Python dtype: str
- Replace_With
    - Substring used to replace the pattern found in the input text.
    - Comfy dtype: STRING
    - Python dtype: str
- Mode
    - Determines the method of pattern matching: "Strict" for exact matching, "RegEx" for regex matching.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- TEXT
    - Modified text after the pattern has been replaced.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class StringReplace:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Text": Field.string(),
                "Pattern": Field.string(),
                "Replace_With": Field.string(),
                "Mode": Field.combo(["Strict", "RegEx"]),
            }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("TEXT",)
    FUNCTION = "replace"
    CATEGORY = TREE_STRINGS

    def replace(self, Text, Pattern, Replace_With, Mode):
        out = Text
        match Mode:
            case "Strict":
                out = Text.replace(Pattern, Replace_With)
            case "RegEx":
                out = re.sub(Pattern, Replace_With, Text)
        return (out,)

```
