# Documentation
- Class name: WAS_Text_to_Console
- Category: WAS Suite/Debug
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_to_Console node is designed to output text to the console, optionally with label formatting. It enhances console output by applying color and style to the text for improved visibility and distinction.

# Input types
## Required
- text
    - The 'text' parameter is essential to the node's operation, as it defines the content to be printed to the console. It plays a critical role in the node's execution, determining the information displayed.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- label
    - The 'label' parameter is used to prepend a custom label to the text output. While not required, it can be useful for categorizing or highlighting console output for improved readability and organization.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- output
    - The 'output' parameter represents the text that has been formatted and printed to the console. It marks the final result of the node's operation, encapsulating the styled text.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_to_Console:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False}), 'label': ('STRING', {'default': f'Text Output', 'multiline': False})}}
    RETURN_TYPES = (TEXT_TYPE,)
    OUTPUT_NODE = True
    FUNCTION = 'text_to_console'
    CATEGORY = 'WAS Suite/Debug'

    def text_to_console(self, text, label):
        if label.strip() != '':
            cstr(f'\x1b[33m{label}\x1b[0m:\n{text}\n').msg.print()
        else:
            cstr(f'\x1b[33mText to Console\x1b[0m:\n{text}\n').msg.print()
        return (text,)
```