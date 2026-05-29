
# Documentation
- Class name: Conditioning Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False

The Conditioning Switch node selects and outputs one of multiple condition inputs based on a specified selection index. It provides flexible control over which condition data is passed through the processing pipeline, enabling dynamic manipulation of conditional contexts in generative models or other computational frameworks.

# Input types
## Required
- select
    - The select parameter determines which condition input is output via its numeric index. It is critical for controlling the flow of different conditional contexts within the node.
    - Comfy dtype: INT
    - Python dtype: int

## Optional
- con_i
    - Represents a series of optional condition inputs (con_1 to con_5), where 'i' can range from 1 to 5. These inputs allow dynamic selection of condition data based on the select parameter, providing diverse contextual inputs for processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING

# Output types
- con_out
    - The output condition data selected according to the select parameter. It enables dynamic switching between different conditional contexts.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Conditioning_Switch:

    CATEGORY = 'JPS Nodes/Switches'
    RETURN_TYPES = ("CONDITIONING",)
    RETURN_NAMES = ("con_out",)
    FUNCTION = "get_con"

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "select": ("INT", {}),
            },
            "optional": {
                "con_1": ("CONDITIONING",),
                "con_2": ("CONDITIONING",),
                "con_3": ("CONDITIONING",),
                "con_4": ("CONDITIONING",),
                "con_5": ("CONDITIONING",),
            }
        }

    def get_con(self,select,con_1,con_2=None,con_3=None,con_4=None,con_5=None,):
        
        con_out = con_1

        if (select == 2):
            con_out = con_2
        elif (select == 3):
            con_out  = con_3
        elif (select == 4):
            con_out = con_4
        elif (select == 5):
            con_out = con_5

        return (con_out,)

```
