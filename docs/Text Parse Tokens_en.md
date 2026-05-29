# Documentation
- Class name: WAS_Text_Parse_Tokens
- Category: WAS Suite/Text/Tokens
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Parse_Tokens node handles and replaces tokens within a given text string. It operates by identifying predefined and custom tokens and substituting them with corresponding values, enabling dynamic text generation based on contextual data such as the current time, hostname, and user information.

# Input types
## Required
- text
    - The 'text' parameter is essential for the node's operation because it supplies the input text that will be scanned for token replacement. The node's functionality largely depends on this input to perform its replacement task, making it a key component of overall execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- parsed_text
    - The 'parsed_text' output contains the text after the token replacement process is complete. It marks the successful execution of the node and the transformation of the input text based on predefined and custom tokens.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_Parse_Tokens:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False})}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'text_parse_tokens'
    CATEGORY = 'WAS Suite/Text/Tokens'

    def text_parse_tokens(self, text):
        tokens = TextTokens()
        return (tokens.parseTokens(text),)

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
```