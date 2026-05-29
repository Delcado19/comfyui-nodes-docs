
# Documentation
- Class name: ttN text7BOX_concat
- Category: ttN/text
- Output node: False

This node aims to concatenate up to seven text inputs into a single string, using a specified delimiter to separate each text input. This functionality enables flexible text manipulation and aggregation, suitable for scenarios that require combining multiple text fragments in a structured manner.

# Input types
## Required
- text1
    - The first text input to be concatenated. It serves as the foundation in the concatenation process, acting as the starting point of the combined output.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The second text input to be concatenated. It follows the first input, joining the sequence of merged text.
    - Comfy dtype: STRING
    - Python dtype: str
- text3
    - The third text input to be concatenated. It continues the merged text sequence, adding more content after the second input.
    - Comfy dtype: STRING
    - Python dtype: str
- text4
    - The fourth text input to be concatenated. It extends the text sequence, adding additional content to the combined output.
    - Comfy dtype: STRING
    - Python dtype: str
- text5
    - The fifth text input to be concatenated. It further extends the text sequence, enriching the combined output with more content.
    - Comfy dtype: STRING
    - Python dtype: str
- text6
    - The sixth text input to be concatenated. It adds depth to the text sequence, contributing additional content to the combined output.
    - Comfy dtype: STRING
    - Python dtype: str
- text7
    - The seventh and final text input to be concatenated. It completes the text sequence, finalizing the content of the combined output.
    - Comfy dtype: STRING
    - Python dtype: str
- delimiter
    - Specifies the character or sequence of characters used to separate each text input in the concatenated output. This parameter allows customization of the output format.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text1
    - Comfy dtype: STRING
    - Unknown
    - Python dtype: unknown
- text2
    - Comfy dtype: STRING
    - Unknown
    - Python dtype: unknown
- text3
    - Comfy dtype: STRING
    - Unknown
    - Python dtype: unknown
- text4
    - Comfy dtype: STRING
    - Unknown
    - Python dtype: unknown
- text5
    - Comfy dtype: STRING
    - Unknown
    - Python dtype: unknown
- text6
    - Comfy dtype: STRING
    - Unknown
    - Python dtype: unknown
- text7
    - Comfy dtype: STRING
    - Unknown
    - Python dtype: unknown
- concat
    - Comfy dtype: STRING
    - The final concatenated string, composed of up to seven text inputs, separated by the specified delimiter. This output represents the end result of the concatenation process.
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ttN_text7BOX_concat:
    version = '1.0.0'
    def __init__(self):
        pass
    """
    Concatenate many strings
    """
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "text1": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "text2": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "text3": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "text4": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "text5": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "text6": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "text7": ("STRING", {"multiline": True, "default": '', "dynamicPrompts": True}),
                    "delimiter": ("STRING", {"default":",","multiline": False}),
                    },
                "hidden": {"ttNnodeVersion": ttN_text7BOX_concat.version},
        }

    RETURN_TYPES = ("STRING", "STRING", "STRING", "STRING", "STRING", "STRING", "STRING", "STRING",)
    RETURN_NAMES = ("text1", "text2", "text3", "text4", "text5", "text6", "text7", "concat",)
    FUNCTION = "conmeow"

    CATEGORY = "ttN/text"

    def conmeow(self, text1, text2, text3, text4, text5, text6, text7, delimiter):
        text1 = '' if text1 == 'undefined' else text1
        text2 = '' if text2 == 'undefined' else text2
        text3 = '' if text3 == 'undefined' else text3
        text4 = '' if text4 == 'undefined' else text4
        text5 = '' if text5 == 'undefined' else text5
        text6 = '' if text6 == 'undefined' else text6
        text7 = '' if text7 == 'undefined' else text7

        if delimiter == '\\n':
            delimiter = '\n'
            
        texts = [text1, text2, text3, text4, text5, text6, text7]        
        concat = delimiter.join(text for text in texts if text)
        return text1, text2, text3, text4, text5, text6, text7, concat

```
