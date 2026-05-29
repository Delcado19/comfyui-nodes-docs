
# Documentation
- Class name: Show any to JSON [Crystools]
- Category: crystools 🪛/Debugger
- Output node: True
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

This node converts any given value to a JSON string (if possible) and displays it. It focuses on handling lists that contain dictionaries or other lists, aiming to serialize them into readable JSON format for debugging or inspection.

# Input types
## Optional
- any_value
    - The 'any_value' parameter accepts any data type, including lists, dictionaries, or basic types. It attempts to serialize the data structure into JSON format, aiding visualization or debugging.
    - Comfy dtype: *
    - Python dtype: any

# Output types
- string
    - Returns the serialized JSON string; if serialization fails, returns an error message.
    - Comfy dtype: STRING
    - Python dtype: str
- ui
    - The 'ui' output parameter provides a UI element that displays the serialized JSON string, or shows an error message if serialization fails.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/crystian/ComfyUI-Crystools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
