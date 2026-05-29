
# Documentation
- Class name: ttN text3BOX_3WAYconcat
- Category: ttN/text
- Output node: False

This node aims to join three input strings in multiple ways using a specified delimiter. It creates multiple concatenated string results from the provided inputs, offering flexibility for text manipulation.

# Input types
## Required
- text1
    - The first text string to join. It plays a crucial role in the concatenation process, and its content affects the final result.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The second text string to join. Its inclusion allows diverse concatenation combinations with other input texts.
    - Comfy dtype: STRING
    - Python dtype: str
- text3
    - The third text string to join. It increases the diversity of possible concatenated results, enriching text manipulation capabilities.
    - Comfy dtype: STRING
    - Python dtype: str
- delimiter
    - The string used to separate texts during concatenation. It defines boundaries between texts and affects the format of the final concatenated string.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text1
    - The original first input text, returned unchanged.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The original second input text, returned unchanged.
    - Comfy dtype: STRING
    - Python dtype: str
- text3
    - The original third input text, returned unchanged.
    - Comfy dtype: STRING
    - Python dtype: str
- 1 & 2
    - The concatenation of the first and second input texts, separated by the specified delimiter.
    - Comfy dtype: STRING
    - Python dtype: str
- 1 & 3
    - The concatenation of the first and third input texts, separated by the specified delimiter.
    - Comfy dtype: STRING
    - Python dtype: str
- 2 & 3
    - The concatenation of the second and third input texts, separated by the specified delimiter.
    - Comfy dtype: STRING
    - Python dtype: str
- concat
    - All three input texts concatenated in order, separated by the specified delimiter.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ttN_text3BOX_3WAYconcat:
    version = '1.0.0'
    def __init__(self):
        pass
    """
    Concatenate 3 strings, in various ways.
    """
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "text1": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "text2": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "text3": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "delimiter": ("STRING", {"default":",","multiline": False}),
                    },
                "hidden": {"ttNnodeVersion": ttN_text3BOX_3WAYconcat.version},
        }

    RETURN_TYPES = ("STRING", "STRING", "STRING", "STRING", "STRING", "STRING", "STRING",)
    RETURN_NAMES = ("text1", "text2", "text3", "1 & 2", "1 & 3", "2 & 3", "concat",)
    FUNCTION = "conmeow"

    CATEGORY = "ttN/text"

    def conmeow(self, text1='', text2='', text3='', delimiter=''):
        text1 = '' if text1 == 'undefined' else text1
        text2 = '' if text2 == 'undefined' else text2
        text3 = '' if text3 == 'undefined' else text3

        if delimiter == '\\n':
            delimiter = '\n'

        t_1n2 = delimiter.join([text1, text2])
        t_1n3 = delimiter.join([text1, text3])
        t_2n3 = delimiter.join([text2, text3])
        concat = delimiter.join([text1, text2, text3])
       
        return text1, text2, text3, t_1n2, t_1n3, t_2n3, concat

```
