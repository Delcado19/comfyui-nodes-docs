# Documentation
- Class name: WAS_Debug_Number_to_Console
- Category: WAS Suite/Debug
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

“debug_to_console” method as a developer utility, allows printing numbers to the console with custom tags for debugging. It enhances visibility of debug information by applying color coding to the output.

# Input types
## Required
- number
    - “number” parameter is crucial for node operation, as it is the value printed to the console. It plays a key role in debugging by providing the specific data point to inspect.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]
## Optional
- label
    - “label” parameter adds descriptive text before the number, making it easier to identify the context of the debug message. It is especially useful when multiple debug statements are used in a script.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result
    - “result” parameter represents the original number used for debugging. It is returned to maintain data flow through the node and, if needed, allow further processing.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Debug_Number_to_Console:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'number': ('NUMBER',), 'label': ('STRING', {'default': 'Debug to Console', 'multiline': False})}}
    RETURN_TYPES = ('NUMBER',)
    OUTPUT_NODE = True
    FUNCTION = 'debug_to_console'
    CATEGORY = 'WAS Suite/Debug'

    def debug_to_console(self, number, label):
        if label.strip() != '':
            cstr(f'\x1b[33m{label}\x1b[0m:\n{number}\n').msg.print()
        else:
            cstr(f'\x1b[33mDebug to Console\x1b[0m:\n{number}\n').msg.print()
        return (number,)

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
```