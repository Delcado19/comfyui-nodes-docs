# Documentation
- Class name: CR_CurrentFrame
- Category: Comfyroll/Animation/Utils
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_CurrentFrame node is designed to facilitate recording and displaying the current frame index in a console environment. It provides a tool for developers to track the progress of an animation or a sequence of frames.

# Input types
## Required
- index
    - The ‘index’ parameter represents the current frame index in the animation sequence. It is crucial to the node as it determines the specific frame being recorded or monitored.
    - Comfy dtype: INT
    - Python dtype: int
- print_to_console
    - The ‘print_to_console’ parameter determines whether the current frame index should be printed to the console. It is an important switch for controlling the visibility of the node's output.
    - Comfy dtype: COMBO['Yes', 'No']
    - Python dtype: str

# Output types
- index
    - The ‘index’ output provides the current frame index processed by the node, which can be used for further manipulation or analysis in the animation workflow.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class CR_CurrentFrame:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'index': ('INT', {'default': 1, 'min': -10000, 'max': 10000}), 'print_to_console': (['Yes', 'No'],)}}
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('index',)
    FUNCTION = 'to_console'
    CATEGORY = icons.get('Comfyroll/Animation/Utils')

    def to_console(self, index, print_to_console):
        if print_to_console == 'Yes':
            print(f'[Info] CR Current Frame:{index}')
        return (index,)
```