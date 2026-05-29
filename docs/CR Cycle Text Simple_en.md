# Documentation
- Class name: CR_CycleTextSimple
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_CycleTextSimple is a node designed to sequentially cycle through a list of text strings. It can handle multiple text inputs and cycle according to the specified frame interval and number of loops. This node is especially suitable for creating dynamic text animations in the Comfy UI environment.

# Input types
## Required
- mode
    - The mode parameter determines the cycle order of the text strings. It is crucial for defining the order and pattern of the text animation.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- frame_interval
    - The frame interval determines the rate at which the text strings cycle, affecting the speed of the animation.
    - Comfy dtype: int
    - Python dtype: int
- loops
    - The number of loops parameter specifies how many times the text strings will cycle, affecting the duration of the animation.
    - Comfy dtype: int
    - Python dtype: int
- current_frame
    - The current frame indicates the current position in the animation sequence, used to determine which text string is displayed.
    - Comfy dtype: int
    - Python dtype: int
## Optional
- text_1
    - Text_1 is an optional input for the first text string in the list. It provides diverse text content for the cycle.
    - Comfy dtype: str
    - Python dtype: str
- text_list_simple
    - Text_list_simple is an optional parameter that allows simplified input of multiple text strings, streamlining the process of adding text content.
    - Comfy dtype: TEXT_LIST_SIMPLE
    - Python dtype: List[str]

# Output types
- current_text_item
    - The current text item represents the text string currently being displayed, as part of the text cycle animation.
    - Comfy dtype: str
    - Python dtype: str
- show_help
    - show_help output provides a URL link to documentation for further help and information on using the node.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
