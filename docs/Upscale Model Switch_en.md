# Documentation
- Class name: WAS_Upscale_Model_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method 'upscale_model_switch' is designed to provide a conditional selection mechanism that selects one of two upscaling models based on a boolean flag. It acts as a logical switch that determines the model used for image upscaling operations, thereby enhancing system flexibility.

# Input types
## Required
- upscale_model_a
    - Parameter 'upscale_model_a' represents the first upscaling model for selection. It is crucial in the decision process as it is one of the two models that can be selected based on the boolean flag value.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: Union[torch.nn.Module, Any]
- upscale_model_b
    - Parameter 'upscale_model_b' represents the second upscaling model, an alternative option for the node. It plays a key role when the boolean flag is set to False, as it is then selected for image upscaling.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: Union[torch.nn.Module, Any]
## Optional
- boolean
    - Parameter 'boolean' serves as a control flag that influences which upscaling model the node returns. When set to True, it selects 'upscale_model_a'; when False, it selects 'upscale_model_b'.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_upscale_model
    - Output 'selected_upscale_model' represents the upscaling model selected based on the boolean flag. It is important as it determines the subsequent image upscaling process.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: Union[torch.nn.Module, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Upscale_Model_Input_Switch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'upscale_model_a': ('UPSCALE_MODEL',), 'upscale_model_b': ('UPSCALE_MODEL',), 'boolean': ('BOOLEAN', {'forceInput': True})}}
    RETURN_TYPES = ('UPSCALE_MODEL',)
    FUNCTION = 'upscale_model_switch'
    CATEGORY = 'WAS Suite/Logic'

    def upscale_model_switch(self, upscale_model_a, upscale_model_b, boolean=True):
        if boolean:
            return (upscale_model_a,)
        else:
            return (upscale_model_b,)
```