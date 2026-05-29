# Documentation
- Class name: CR_SelectISOSize
- Category: Comfyroll/Utils/Other
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SelectISOSize node aims to provide the corresponding dimensions for the user-selected ISO paper size. It plays an important role in applications that require standard paper sizes, ensuring output conforms to international standards.

# Input types
## Required
- iso_size
    - The parameter 'iso_size' is crucial for determining the specific ISO paper size. It influences the node's execution by specifying which set of dimensions will be returned.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- width
    - The output 'width' represents the width dimension of the selected ISO paper size. It is very important for applications that require precise paper size specifications.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The output 'height' provides the height dimension of the selected ISO paper size. It is essential to ensure the paper size meets the specifications required for various printing or design tasks.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The output 'show_help' provides a URL link to a help page with more information about ISO paper sizes. This is useful for users seeking additional guidance or clarification on the topic.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
