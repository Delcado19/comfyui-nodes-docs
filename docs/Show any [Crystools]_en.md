
# Documentation
- Class name: Show any [Crystools]
- Category: crystools 🪛/Debugger
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed for debugging purposes, allowing any value to be visualized on the console or display interface. It supports a wide range of data types, making it very versatile (multi-functional) when inspecting values during development.

# Input types
## Optional
- any_value
    - The value to display. It can be any data type, which gives this node high versatility (multi-functionality) during debugging.
    - Comfy dtype: *
    - Python dtype: Any
- console
    - Determines whether to print the value to the console. It enhances debugging by allowing direct observation of the value.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- display
    - Controls whether to display the value on the UI, facilitating user interaction and data visualization.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- prefix
    - An optional prefix added before the value when printing to the console, helping to distinguish different debug outputs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui
    - Provides a UI element to display the value, enhancing the debugging experience by visualizing data directly on the interface.
    - Comfy dtype: UI


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
