# Documentation
- Class name: CR_XYProduct
- Category: Comfyroll/List/Utils
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_XYProduct node is designed to perform a cross-join operation on two string lists. It accepts two multi-line text inputs and generates all possible combinations of elements from both lists, creating a Cartesian product. This node is particularly useful in scenarios where exploring all possible pairings between two datasets is required.

# Input types
## Required
- text_x
    - The parameter 'text_x' is a multi-line text input representing the first string list to be used in the cross-join operation. It plays a key role in determining which elements will be combined with elements from 'text_y'.
    - Comfy dtype: STRING
    - Python dtype: str
- text_y
    - The parameter 'text_y' is another multi-line text input representing the second string list to be used in the cross-join operation. It works together with 'text_x' to produce the Cartesian product.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- x_values
    - The output 'x_values' is a string list representing the elements from the first input list after the cross-join operation. It contains the first element of each unique combination.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- y_values
    - The output 'y_values' is a string list representing the elements from the second input list after the cross-join operation. It contains the second element of each unique combination.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
    - The output 'show_help' provides a URL link for further help or information about the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
