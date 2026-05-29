# Documentation
- Class name: ImpactRemoteInt
- Category: ImpactPack/Logic/_for_test
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

This node serves as a testing tool within the ImpactPack logic suite, designed to evaluate and demonstrate remote interaction capabilities through defined interfaces.

# Input types
## Required
- node_id
    - The node_id parameter is critical for uniquely identifying the node within the system, enabling targeted communication and processing.
    - Comfy dtype: INT
    - Python dtype: int
- widget_name
    - The widget_name parameter specifies the widget name to interact with, directing the node's operation to the correct interface.
    - Comfy dtype: STRING
    - Python dtype: str
- value
    - The value parameter holds the data to be processed or transmitted during remote interaction, forming the core of the node's functionality.
    - Comfy dtype: INT
    - Python dtype: int

# Output types

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactRemoteInt:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'node_id': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'widget_name': ('STRING', {'multiline': False}), 'value': ('INT', {'default': 0, 'min': -18446744073709551615, 'max': 18446744073709551615})}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic/_for_test'
    RETURN_TYPES = ()
    OUTPUT_NODE = True

    def doit(self, **kwargs):
        return {}
```