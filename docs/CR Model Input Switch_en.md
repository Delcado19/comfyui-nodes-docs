# Documentation
- Class name: CR_ModelInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ModelInputSwitch node selects between two provided models based on the input value. It simplifies model selection in workflows, enabling conditional model deployment without complex branching logic.

# Input types
## Required
- Input
- The 'Input' parameter is crucial for deciding which model to select. It directs the node's logic to choose 'model1' or 'model2' based on its value, affecting the node's output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- model1
- The 'model1' parameter represents the first model the node can select. When the 'Input' parameter is set to 1, it becomes a relevant optional input.
    - Comfy dtype: MODEL
    - Python dtype: Any
- model2
- The 'model2' parameter represents the second model the node can select. When the 'Input' parameter is not equal to 1, it is considered and determines the output in that case.
    - Comfy dtype: MODEL
    - Python dtype: Any

# Output types
- MODEL
- The 'MODEL' output is the model chosen based on the 'Input' parameter. It reflects the node's decision about which model to provide.
    - Comfy dtype: MODEL
    - Python dtype: Any
- show_help
- The 'show_help' output provides a URL to the node documentation, offering additional information and guidance on effective node usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ModelInputSwitch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'Input': ('INT', {'default': 1, 'min': 1, 'max': 2})}, 'optional': {'model1': ('MODEL',), 'model2': ('MODEL',)}}
    RETURN_TYPES = ('MODEL', 'STRING')
    RETURN_NAMES = ('MODEL', 'show_help')
    FUNCTION = 'switch'
    CATEGORY = icons.get('Comfyroll/Utils/Logic')

    def switch(self, Input, model1=None, model2=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Logic-Nodes#cr-model-input-switch'
        if Input == 1:
            return (model1, show_help)
        else:
            return (model2, show_help)
```