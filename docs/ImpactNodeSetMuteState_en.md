# Documentation
- Class name: ImpactNodeSetMuteState
- Category: ImpactPack/Logic/_for_test
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactNodeSetMuteState node is designed to control the mute state of a signal processing node. It allows users to activate or mute the node based on the provided 'set_state' parameter, thereby affecting the flow of signals in the system.

# Input types
## Required
- signal
    - The 'signal' parameter represents the input signal that the node will process. It is a fundamental part of the node's operation, as it determines the data that will be affected by the mute state change.
    - Comfy dtype: ANY
    - Python dtype: Any
- node_id
    - The 'node_id' parameter specifies the unique identifier of the node whose mute state is to be changed. It is critical for accurately targeting the intended node in a network of multiple nodes.
    - Comfy dtype: INT
    - Python dtype: int
- set_state
    - The 'set_state' parameter determines whether the node should be set to an active or muted state. It is a key input, as it directly controls the operational state of the node within the system.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- signal_opt
    - The 'signal_opt' output represents the optionally modified signal after the mute state change. It marks the result of the node's operation, reflecting whether the signal has been processed or muted.
    - Comfy dtype: ANY
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactNodeSetMuteState:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'signal': (any_typ,), 'node_id': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'set_state': ('BOOLEAN', {'default': True, 'label_on': 'active', 'label_off': 'mute'})}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic/_for_test'
    RETURN_TYPES = (any_typ,)
    RETURN_NAMES = ('signal_opt',)
    OUTPUT_NODE = True

    def doit(self, signal, node_id, set_state):
        PromptServer.instance.send_sync('impact-node-mute-state', {'node_id': node_id, 'is_active': set_state})
        return (signal,)
```