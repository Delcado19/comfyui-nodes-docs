
# Documentation
- Class name: Display Any (rgthree)
- Category: rgthree
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Display Any node is designed to display data of any type, gracefully handling various data formats and types. It attempts to serialize input data into a JSON string for display; if serialization fails, it falls back to a simple string representation. This ensures any data can be visualized.

# Input types
## Required
- source
    - The source parameter accepts data of any type, making this node highly versatile for displaying different data formats. It plays a critical role in the node's ability to process and visualize any input data, regardless of complexity or type.
    - Comfy dtype: *
    - Python dtype: AnyType

# Output types
- ui
    - The ui output parameter provides a user interface element—specifically a text display—for visualizing input data. This allows easy display of any data type in a readable format.
    - Comfy dtype: UI
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
