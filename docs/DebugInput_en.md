# Documentation
- Class name: WAS_DebugThis
- Category: debug
- Output node: True
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The 'debug' method in the 'WAS_DebugThis' node serves as a fundamental tool for developers to inspect and understand the structure and content of input data. It provides clear, concise input printing, helping identify any anomalies or unexpected behavior. During development, this method is especially useful for debugging purposes, ensuring inputs match expected formats and contributing to overall system quality assurance.

# Input types
## Required
- input
    - In the 'debug' method, the 'input' parameter is crucial because it is the data to be inspected and printed. It can be of any type, allowing debugging of a wide range of data. The method's ability to handle various data types is essential for its usefulness in debugging scenarios, as it offers insight into complex objects and data structures.
    - Comfy dtype: wildcard
    - Python dtype: Any

# Output types
- None
    - The 'debug' method does not return any value; its primary function is to print the input data and its properties (if the input is an object). This allows developers to examine the input without altering the program flow or the state of the input data.
    - Comfy dtype: None
    - Python dtype: NoneType

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_DebugThis:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'input': (wildcard, {})}}
    RETURN_TYPES = ()
    OUTPUT_NODE = True
    FUNCTION = 'debug'
    CATEGORY = 'debug'

    def debug(self, input):
        print('Debug:')
        print(input)
        if isinstance(input, object) and (not isinstance(input, (str, int, float, bool, list, dict, tuple))):
            print('Objects directory listing:')
            pprint(dir(input), indent=4)
        return ()
```