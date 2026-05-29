# Documentation
- Class name: WAS_Text_String
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `text_string` method is designed to process and tokenize input strings, replacing predefined and custom tokens with their corresponding values. It plays a key role in dynamic text generation, allowing contextual elements such as timestamps and system information to be incorporated.

# Input types
## Required
- text
    - The 'text' parameter is essential for the node's operation as it is the primary input to be tokenized and processed. It influences execution by determining the base text from which tokens will be replaced with actual values.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- text_b
    - The 'text_b' parameter is optional and serves as an additional text input for the node. It allows more complex token replacement and text manipulation, enhancing the flexibility of the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- text_c
    - The 'text_c' parameter is similar to 'text_b', another optional text input that can be processed by the node. It extends the node's ability to handle multiple text inputs for more complex tokenization tasks.
    - Comfy dtype: STRING
    - Python dtype: str
- text_d
    - The 'text_d' parameter is also optional, providing further text input for processing. It helps the node manage additional text inputs to meet more complex tokenization needs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text_output
    - The 'text_output' parameter represents the processed text after token replacement. It is important because it reflects the result of the node's text manipulation and tokenization process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_String:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'default': '', 'multiline': False})}, 'optional': {'text_b': ('STRING', {'default': '', 'multiline': False}), 'text_c': ('STRING', {'default': '', 'multiline': False}), 'text_d': ('STRING', {'default': '', 'multiline': False})}}
    RETURN_TYPES = (TEXT_TYPE, TEXT_TYPE, TEXT_TYPE, TEXT_TYPE)
    FUNCTION = 'text_string'
    CATEGORY = 'WAS Suite/Text'

    def text_string(self, text='', text_b='', text_c='', text_d=''):
        tokens = TextTokens()
        text = tokens.parseTokens(text)
        text_b = tokens.parseTokens(text_b)
        text_c = tokens.parseTokens(text_c)
        text_d = tokens.parseTokens(text_d)
        return (text, text_b, text_c, text_d)
```