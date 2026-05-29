# Documentation
- Class name: CR_MultiplyIndex
- Category: Comfyroll/Utils/Index
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_MultiplyIndex node multiplies an index value by a given factor. This utility node enhances index manipulation in workflows, providing a direct way to scale or adjust index values as needed.

# Input types
## Required
- index
    - The 'index' parameter is the base value multiplied by 'factor'. It is critical to the node's final output, as it is the starting point of the multiplication.
    - Comfy dtype: INT
    - Python dtype: int
- factor
    - The 'factor' parameter is the multiplier applied to 'index'. It is essential to the node's operation, as it determines the degree of the multiplication's effect on the index value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- index
    - The 'index' output represents the result of the multiplication between the input 'index' and 'factor'. It is the new scaled index value after the multiplication.
    - Comfy dtype: INT
    - Python dtype: int
- factor
    - The 'factor' output is the multiplier used in the multiplication. It is included in the output to maintain consistency with the input parameters and provide transparency into the operation performed.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The 'show_help' output provides a URL link to documentation for additional guidance or help on using the node. This is a useful resource for users seeking more information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
