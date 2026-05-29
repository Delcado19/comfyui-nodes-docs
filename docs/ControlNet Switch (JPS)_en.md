
# Documentation
- Class name: ControlNet Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ControlNet Switch node is designed to dynamically select one among multiple control network configurations based on a given selection input. It enables flexible manipulation of control networks within the processing pipeline, allowing conditional application of different control network settings.

# Input types
## Required
- select
    - Specifies the index of the control network to output. This input determines which control network configuration is applied, enabling dynamic switching between configurations.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- ctrlnet_i
    - Represents a generic control network configuration option, where 'i' can range from 1 to 5, denoting the selectable control network configurations based on the 'select' input.
    - Comfy dtype: CONTROL_NET
    - Python dtype: CONTROL_NET

# Output types
- ctrlnet_out
    - Outputs the selected control network configuration for application in subsequent processing steps.
    - Comfy dtype: CONTROL_NET
    - Python dtype: CONTROL_NET


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ControlNet_Switch:

    CATEGORY = 'JPS Nodes/Switches'
    RETURN_TYPES = ("CONTROL_NET",)
    RETURN_NAMES = ("ctrlnet_out",)
    FUNCTION = "get_ctrlnet"

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "select": ("INT", {}),
            },
            "optional": {
                "ctrlnet_1": ("CONTROL_NET",),
                "ctrlnet_2": ("CONTROL_NET",),
                "ctrlnet_3": ("CONTROL_NET",),
                "ctrlnet_4": ("CONTROL_NET",),
                "ctrlnet_5": ("CONTROL_NET",),
            }
        }

    def get_ctrlnet(self,select,ctrlnet_1=None,ctrlnet_2=None,ctrlnet_3=None,ctrlnet_4=None,ctrlnet_5=None,):
        
        ctrlnet_out = ctrlnet_1

        if (select == 2):
            ctrlnet_out = ctrlnet_2
        elif (select == 3):
            ctrlnet_out = ctrlnet_3
        elif (select == 4):
            ctrlnet_out = ctrlnet_4
        elif (select == 5):
            ctrlnet_out = ctrlnet_5

        return (ctrlnet_out,)

```
