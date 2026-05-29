
# Documentation
- Class name: String Tokenizer [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The String Tokenizer node splits a given string into parts based on a specified delimiter and selects one part by index. This functionality is essential for parsing and manipulating text data, enabling extraction of specific segments of interest from larger text bodies.

# Input types
## Required
- text
    - The primary text input to be split. This parameter is critical for defining the text to be tokenized.
    - Comfy dtype: STRING
    - Python dtype: str
- separator
    - Defines the character or string used to split the text into parts. It plays a key role in determining how the text is divided.
    - Comfy dtype: STRING
    - Python dtype: str
- selected
    - Determines which part of the split text to return based on the index. This parameter is critical for selecting the specific segment of interest.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- token
    - The selected text part after splitting by the specified delimiter. This output is significant for text processing and manipulation tasks.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamStringTokenizer:
    NODE_NAME = "String Tokenizer"
    ICON = "🪙"
    OUTPUT_NODE = True
    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("token",)
    FUNCTION = "exec"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "text": ("STRING", {"default": "", "multiline": True}),
                "separator": ("STRING", {"default": ","}),
                "selected": ("INT", {"default": 0, "min": 0})
            },
        }

    def exec(self, text: str, separator: str, selected: int):
        if separator is None or separator == "":
            separator = " "
        parts = text.split(sep=separator)
        return (parts[abs(selected) % len(parts)].strip(),)

```
