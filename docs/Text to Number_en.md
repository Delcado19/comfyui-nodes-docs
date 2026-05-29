# Documentation
- Class name: WAS_Text_To_Number
- Category: WAS Suite/Text/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node converts text data into numbers, enabling further processing and analysis in numerical format.

# Input types
## Required
- text
    - The text parameter is required, it provides the raw text data that needs to be converted to numerical format. It is the main input that determines the node's output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- NUMBER
    - The output is a numerical representation of the input text, which can be an integer or a floating-point number, depending on the text content.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_To_Number:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False})}}
    RETURN_TYPES = ('NUMBER',)
    FUNCTION = 'text_to_number'
    CATEGORY = 'WAS Suite/Text/Operations'

    def text_to_number(self, text):
        if text.replace('.', '').isnumeric():
            number = float(text)
        else:
            number = int(text)
        return (number,)
```