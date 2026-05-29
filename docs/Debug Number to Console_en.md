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
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
