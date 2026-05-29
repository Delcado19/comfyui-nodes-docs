
# Documentation
- Class name: SizeSelector
- Category: Size
- Output node: True
- Repo Ref: https://github.com/klinter-com/ComfyUI

The SizeSelector node provides a mechanism for selecting a specific size configuration (width and height) from a predefined list of sizes. It abstracts the complexity of handling different resolution needs by allowing users to choose from a human-readable list of size options, which are then converted into corresponding numerical width and height values.

# Input types
## Required
- size_selected
    - This parameter allows the user to select a size from a predefined list of size options. Each option corresponds to a specific resolution, and the selected option determines the output width and height of the node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- width
    - The width component of the selected size configuration, represented as an integer.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height component of the selected size configuration, represented as an integer.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/klinter-com/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
