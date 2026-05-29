# Documentation
- Class name: CR_ConditioningInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ConditioningInputSwitch node manages data flow based on conditional input. It selects one of two conditional inputs according to the value of the 'Input' parameter. This node is crucial in complex workflows, guiding data flow and enabling conditional logic without nested structures.

# Input types
## Required
- Input
- The 'Input' parameter is essential for determining which conditional data is selected. It acts as a switch: a value of 1 selects 'conditioning1', any other value selects 'conditioning2'. This parameter directly influences the node's output, facilitating decision-making in the workflow.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- conditioning1
- The 'conditioning1' parameter is an optional input used when the 'Input' parameter equals 1. It represents a set of conditional data that can be applied when the specified condition is met, allowing context-specific information to be seamlessly integrated into the workflow.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- conditioning2
- The 'conditioning2' parameter is an alternative to 'conditioning1' and is invoked when the 'Input' parameter does not equal 1. It provides different conditional data based on other conditions, ensuring the node remains flexible and adaptable across scenarios.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Output types
- CONDITIONING
- The 'CONDITIONING' output contains the conditional data chosen based on the 'Input' parameter value. It reflects the result of the node's conditional logic and supplies necessary information for subsequent steps in the workflow.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- show_help
- The 'show_help' output provides a URL link to the node documentation, enabling users to quickly access additional information and guidance on effective node usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ConditioningInputSwitch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'Input': ('INT', {'default': 1, 'min': 1, 'max': 2})}, 'optional': {'conditioning1': ('CONDITIONING',), 'conditioning2': ('CONDITIONING',)}}
    RETURN_TYPES = ('CONDITIONING', 'STRING')
    RETURN_NAMES = ('CONDITIONING', 'show_help')
    FUNCTION = 'switch'
    CATEGORY = icons.get('Comfyroll/Utils/Logic')

    def switch(self, Input, conditioning1=None, conditioning2=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Logic-Nodes#cr-conditioning-input-switch'
        if Input == 1:
            return (conditioning1, show_help)
        else:
            return (conditioning2, show_help)
```