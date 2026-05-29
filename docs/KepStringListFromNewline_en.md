
# Documentation
- Class name: KepStringListFromNewline
- Category: List Stuff
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The KepStringListFromNewline node converts a multi-line text string into a list of strings, where each element corresponds to a line in the original string. Additionally, it calculates the number of generated strings. This node is particularly useful when processing text data that needs to be split by lines, such as configuration files, log files, or other line-organized text content.

# Input types
## Required
- Text
    - The Text parameter accepts a multi-line string as input. This string is then split into individual strings based on newline characters. This parameter is critical for determining the content and structure of the output list. It allows users to input multi-line text of any length, with each line becoming an independent element in the output list.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- Strings
    - The output Strings is a list of strings, where each element represents a line from the input multi-line string. This list preserves the original text's line order, allowing users to easily access and process individual parts of the text.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- Num Strings
    - Num Strings output represents the number of strings split from the input multi-line string. This value equals the length of the output Strings list, providing useful metadata for subsequent processing.
    - Comfy dtype: INT
    - Python dtype: List[int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class StringListFromNewline:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(self) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {
                "Text": ("STRING", {"multiline": True}),
            },
        }

    RETURN_TYPES = ("STRING", "INT")
    RETURN_NAMES = ("Strings", "Num Strings")
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (True,)
    FUNCTION = "to_string_list"

    CATEGORY = "List Stuff"

    def to_string_list(self, Text: str) -> Tuple[List[str], List[int]]:
        return Text.split("\n"), [len(Text.split("\n"))]

```
