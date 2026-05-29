
# Documentation
- Class name: Text Concatenate (JPS)
- Category: JPS Nodes/Text
- Output node: False

The Text Concatenate node is designed to merge multiple text inputs into a single string, using a specified separator to separate these texts. This functionality is crucial for creating concatenated strings from various inputs, allowing flexible text manipulation and aggregation.

# Input types
## Required
- delimiter
    - Specifies the separator type used to separate text inputs, such as space or comma, affecting the format of the concatenated text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- text1
    - The first text input to concatenate.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The second text input to concatenate, which will be added after the first input, with the specified separator in between.
    - Comfy dtype: STRING
    - Python dtype: str
- text3
    - The third text input to concatenate, which will be added after the previous inputs, with the specified separator in between.
    - Comfy dtype: STRING
    - Python dtype: str
- text4
    - The fourth text input to concatenate, which will be added after the previous inputs, with the specified separator in between.
    - Comfy dtype: STRING
    - Python dtype: str
- text5
    - The fifth text input to concatenate, which will be added after the previous inputs, with the specified separator in between.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The resulting string after concatenating the given text inputs using the specified separator.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Text_Concatenate:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "delimiter": (["none", "space", "comma"],),
            },
            "optional": {
                "text1": ("STRING", {"forceInput": True}),
                "text2": ("STRING", {"forceInput": True}),      
                "text3": ("STRING", {"forceInput": True}),      
                "text4": ("STRING", {"forceInput": True}),      
                "text5": ("STRING", {"forceInput": True}),       
            }
        }
    
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("text",)
    FUNCTION = "get_contxt"
    CATEGORY = "JPS Nodes/Text"

    def get_contxt(self, delimiter, text1=None, text2=None, text3=None, text4=None, text5=None):
        needdelim = False
        delim = ""
        if delimiter == "space":
            delim = " "
        if delimiter == "comma":
            delim = ", "

        concatenated = ""

        if text1:
            concatenated = text1
            needdelim = True
        
        if text2:
            if needdelim:
                concatenated += delim
            concatenated += text2
            needdelim = True
        
        if text3:
            if needdelim:
                concatenated += delim
            concatenated += text3
            needdelim = True

        if text4:
            if needdelim:
                concatenated += delim
            concatenated += text4
            needdelim = True

        if text5:
            if needdelim:
                concatenated += delim
            concatenated += text5
            needdelim = True

        return (concatenated,)

```
