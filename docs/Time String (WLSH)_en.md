# Documentation
- Class name: WLSH_Time_String
- Category: WLSH Nodes/text
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

WLSH_Time_String node generates a timestamp string based on the provided time format. It captures the current date and time and formats it according to the specified style, providing a human-readable time representation.

# Input types
## Required
- style
    - The ‘style’ parameter determines the output timestamp format. It is crucial as it decides the date and time representation, affecting the readability and utility of the generated string.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- time_format
    - The ‘time_format’ parameter is the formatted timestamp string output by the node. It is important as the main result, encapsulating the current date and time in the specified format.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Time_String:
    time_format = ['%Y%m%d%H%M%S', '%Y%m%d%H%M', '%Y%m%d', '%Y-%m-%d-%H%M%S', '%Y-%m-%d-%H%M', '%Y-%m-%d']

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'style': (s.time_format,)}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('time_format',)
    FUNCTION = 'get_time'
    CATEGORY = 'WLSH Nodes/text'

    def get_time(self, style):
        now = datetime.now()
        timestamp = now.strftime(style)
        return (timestamp,)
```