# Documentation
- Class name: ImpactRemoteBoolean
- Category: ImpactPack/Logic/_for_test
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

This node serves as a logical component for remote execution, capable of transmitting and evaluating boolean values in distributed systems. It evaluates the truth of input conditions and propagates results to other nodes, playing a critical role in controlling data flow and execution paths.

# Input types
## Required
- node_id
    - The node_id parameter is essential for uniquely identifying nodes within the system. It ensures the correct node receives inputs and results are accurately associated with the correct instance.
    - Comfy dtype: INT
    - Python dtype: int
- widget_name
    - The widget_name parameter is critical for the user interface, as it labels the input field for boolean values. This parameter affects user interaction with the system and interface clarity.
    - Comfy dtype: STRING
    - Python dtype: str
- value
    - The value parameter is the core element of this node, representing the boolean condition to evaluate. It is the primary input that drives the node's functionality and subsequent actions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactRemoteBoolean:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'node_id': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'widget_name': ('STRING', {'multiline': False}), 'value': ('BOOLEAN', {'default': True, 'label_on': 'True', 'label_off': 'False'})}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic/_for_test'
    RETURN_TYPES = ()
    OUTPUT_NODE = True

    def doit(self, **kwargs):
        return {}
```