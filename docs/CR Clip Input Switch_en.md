# Documentation
- Class name: CR_ClipInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ClipInputSwitch is a utility node that provides a conditional switching mechanism between two input clips. It operates on a single input parameter, allowing users to select between the two provided clips based on the input value. The node’s functionality focuses on simplifying workflows by intelligently selecting the appropriate clip for further processing or display.

# Input types
## Required
- Input
    - The ‘Input’ parameter is critical for the node’s operation because it determines which clip will be returned. When the ‘Input’ value is 1, ‘clip1’ is selected; otherwise, ‘clip2’ is selected. This parameter is essential for defining the node’s output according to the user’s specific needs.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- clip1
    - The ‘clip1’ parameter is an optional input representing the first clip the node can choose. When the ‘Input’ parameter is set to 1, it plays a key role in subsequent processing as the selected output.
    - Comfy dtype: CLIP
    - Python dtype: Clip
- clip2
    - The ‘clip2’ parameter is another optional input representing the second clip the node can choose. When the ‘Input’ parameter is not 1, its importance emerges, making ‘clip2’ the output for subsequent operations.
    - Comfy dtype: CLIP
    - Python dtype: Clip

# Output types
- CLIP
    - The ‘CLIP’ output represents the selected clip based on the value of the ‘Input’ parameter. It is the node’s primary output and is used for further video processing or display.
    - Comfy dtype: CLIP
    - Python dtype: Clip
- show_help
    - The ‘show_help’ output provides a URL link to the node documentation for additional guidance. It is a secondary output that gives users easy access to more information about the node’s usage and features.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
