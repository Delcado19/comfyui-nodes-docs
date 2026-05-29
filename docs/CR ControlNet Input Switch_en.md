# Documentation
- Class name: CR_ControlNetInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ControlNetInputSwitch node provides a conditional switching mechanism for control nets. It allows users to select between two control nets based on an input value, facilitating routing of data to the desired network path.

# Input types
## Required
- Input
    - The 'Input' parameter is critical for determining which control net to use. It specifies the index of the control net to select, dictating the internal execution flow of the node.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- control_net1
    - The 'control_net1' parameter represents the first control net the node can choose. When the 'Input' parameter is set to 1, it plays a key role in the node's decision-making process.
    - Comfy dtype: CONTROL_NET
    - Python dtype: str
- control_net2
    - The 'control_net2' parameter represents the second control net the node can choose. When the 'Input' parameter is set to 2, it becomes relevant, guiding the node's selection.
    - Comfy dtype: CONTROL_NET
    - Python dtype: str

# Output types
- CONTROL_NET
    - The 'CONTROL_NET' output provides the control net selected based on the input value. It is the primary output, carrying the node's decision forward into the workflow.
    - Comfy dtype: CONTROL_NET
    - Python dtype: str
- show_help
    - The 'show_help' output is a URL providing additional information and guidance on how to use the node effectively. It is a secondary output, giving users access to the node's documentation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ControlNetInputSwitch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'Input': ('INT', {'default': 1, 'min': 1, 'max': 2}), 'control_net1': ('CONTROL_NET',), 'control_net2': ('CONTROL_NET',)}, 'optional': {'control_net1': ('CONTROL_NET',), 'control_net2': ('CONTROL_NET',)}}
    RETURN_TYPES = ('CONTROL_NET', 'STRING')
    RETURN_NAMES = ('CONTROL_NET', 'show_help')
    FUNCTION = 'switch'
    CATEGORY = icons.get('Comfyroll/Utils/Logic')

    def switch(self, Input, control_net1=None, control_net2=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Logic-Nodes#cr-controlnet-input-switch'
        if Input == 1:
            return (control_net1, show_help)
        else:
            return (control_net2, show_help)
```