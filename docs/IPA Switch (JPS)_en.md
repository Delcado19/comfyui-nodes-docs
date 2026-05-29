
# Documentation
- Class name: IPA Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False

The IPA Switch node selects and outputs one of multiple IP Adapter configurations based on a given selection input. It enables dynamic switching between different IP Adapter settings, allowing flexible adaptation to various needs during the processing pipeline.

# Input types
## Required
- select
    - Determines which IP Adapter configuration to output based on the numeric selection.
    - Comfy dtype: INT
    - Python dtype: int

## Optional
- ipa_i
    - Represents a series of optional IP Adapter configurations (ipa_1 to ipa_5). The range of 'i' is 1 to 5, where ipa_1 is required and the rest are optional, allowing dynamic selection based on 'select'.
    - Comfy dtype: IPADAPTER
    - Python dtype: IPADAPTER

# Output types
- IPA_out
    - The selected IP Adapter configuration.
    - Comfy dtype: IPADAPTER
    - Python dtype: IPADAPTER


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IPA_Switch:

    CATEGORY = 'JPS Nodes/Switches'
    RETURN_TYPES = ("IPADAPTER",)
    RETURN_NAMES = ("IPA_out",)
    FUNCTION = "get_ipa"

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "select": ("INT", {}),
            },
            "optional": {
                "ipa_1": ("IPADAPTER",),
                "ipa_2": ("IPADAPTER",),
                "ipa_3": ("IPADAPTER",),
                "ipa_4": ("IPADAPTER",),
                "ipa_5": ("IPADAPTER",),
            }
        }

    def get_ipa(self,select,ipa_1,ipa_2=None,ipa_3=None,ipa_4=None,ipa_5=None,):
        
        ipa_out = ipa_1

        if (select == 2):
            ipa_out = ipa_2
        elif (select == 3):
            ipa_out  = ipa_3
        elif (select == 4):
            ipa_out = ipa_4
        elif (select == 5):
            ipa_out = ipa_5

        return (ipa_out,)

```
