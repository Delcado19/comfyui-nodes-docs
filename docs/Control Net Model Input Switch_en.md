# Documentation
- Class name: WAS_Control_Net_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'control_net_switch' method is designed to intelligently select one of two control networks based on a boolean condition. It serves as a decision node in the workflow, ensuring the appropriate control network is used at any given time, thereby enhancing system flexibility and adaptability.

# Input types
## Required
- control_net_a
    - The 'control_net_a' parameter represents the first control network option the node can switch to. It plays a critical role in the decision process, as the node will select this network when the boolean condition is met.
    - Comfy dtype: CONTROL_NET
    - Python dtype: Optional[Union[comfy.sd.CONTROL_NET, torch.Tensor]]
- control_net_b
    - The 'control_net_b' parameter is the alternative control network the node may select when the boolean condition is not met. It is essential to the node's functionality, providing a fallback option for the control network.
    - Comfy dtype: CONTROL_NET
    - Python dtype: Optional[Union[comfy.sd.CONTROL_NET, torch.Tensor]]
## Optional
- boolean
    - The 'boolean' parameter acts as a conditional switch, determining whether 'control_net_a' or 'control_net_b' is returned. Its importance lies in the fact that its truth value directly determines the node's output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_control_net
    - The 'selected_control_net' output represents the control network selected by the node based on the boolean condition. It is critical, as it determines the subsequent processing steps in the workflow.
    - Comfy dtype: CONTROL_NET
    - Python dtype: Union[comfy.sd.CONTROL_NET, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Control_Net_Input_Switch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'control_net_a': ('CONTROL_NET',), 'control_net_b': ('CONTROL_NET',), 'boolean': ('BOOLEAN', {'forceInput': True})}}
    RETURN_TYPES = ('CONTROL_NET',)
    FUNCTION = 'control_net_switch'
    CATEGORY = 'WAS Suite/Logic'

    def control_net_switch(self, control_net_a, control_net_b, boolean=True):
        if boolean:
            return (control_net_a,)
        else:
            return (control_net_b,)
```