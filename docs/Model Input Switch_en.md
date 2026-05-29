# Documentation
- Class name: WAS_Model_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The model switch method selects one of two models based on a boolean condition. It acts as a decision node in the workflow, directing data flow to either model_a or model_b depending on the boolean input. This node plays a critical role in conditional logic within model processing sequences.

# Input types
## Required
- model_a
    - The parameter `model_a` represents the first model the node can choose. It is essential to the node's decision process, as it determines one possible outcome when the boolean condition is met.
    - Comfy dtype: MODEL
    - Python dtype: Union[torch.nn.Module, Any]
- model_b
    - The parameter `model_b` represents the second model the node can choose. It plays an important role in the decision process, as it determines the alternative outcome when the boolean condition is not met.
    - Comfy dtype: MODEL
    - Python dtype: Union[torch.nn.Module, Any]
## Optional
- boolean
    - The parameter `boolean` acts as a switch, determining which model the node returns. It is important because it directly affects the node's output, thereby influencing subsequent steps in the workflow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_model
    - The output `selected_model` represents the model selected based on the boolean condition. It is a critical output because it determines the subsequent processing steps in the workflow.
    - Comfy dtype: MODEL
    - Python dtype: Union[torch.nn.Module, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Model_Input_Switch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model_a': ('MODEL',), 'model_b': ('MODEL',), 'boolean': ('BOOLEAN', {'forceInput': True})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'model_switch'
    CATEGORY = 'WAS Suite/Logic'

    def model_switch(self, model_a, model_b, boolean=True):
        if boolean:
            return (model_a,)
        else:
            return (model_b,)
```