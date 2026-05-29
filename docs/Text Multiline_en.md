# Documentation
- Class name: WAS_Text_Multiline
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Multiline node is designed to process and format multiline text input. It filters out comments and empty lines, then replaces predefined and custom tokens with their corresponding values, providing a versatile way to inject dynamic data into text templates.

# Input types
## Required
- text
    - The 'text' parameter is the primary input for the node, accepting a multiline string that may contain comments and token placeholders. It is essential to the node's operation, as it defines the base text to be processed and formatted.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- new_text
    - The 'new_text' output parameter represents the processed text after filtering and token replacement. It is important because it is the final output of the node, providing the user with ready-to-use formatted text.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_Multiline:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'default': '', 'multiline': True})}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'text_multiline'
    CATEGORY = 'WAS Suite/Text'

    def text_multiline(self, text):
        import io
        new_text = []
        for line in io.StringIO(text):
            if not line.strip().startswith('#'):
                if not line.strip().startswith('\n'):
                    line = line.replace('\n', '')
                new_text.append(line)
        new_text = '\n'.join(new_text)
        tokens = TextTokens()
        new_text = tokens.parseTokens(new_text)
        return (new_text,)
```