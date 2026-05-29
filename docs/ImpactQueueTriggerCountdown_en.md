# Documentation
- Class name: ImpactQueueTriggerCountdown
- Category: ImpactPack/Logic/_for_test
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactQueueTriggerCountdown node is designed to manage the countdown and trigger mechanism in the queue system. It advances the count and decides whether to trigger an event based on the total count and current mode. This node plays a key role in controlling the operation flow in queue-based workflows.

# Input types
## Required
- count
    - The parameter 'count' is used to track the current position in the countdown sequence. It is crucial for determining the progress of the queue and the timing of triggering events.
    - Comfy dtype: INT
    - Python dtype: int
- total
    - The parameter 'total' defines the maximum count before the trigger condition is met. It is important for setting the expected number of steps in the countdown process.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The parameter 'mode' determines whether the node should trigger an event. It is an important switch that controls the activation state of the countdown mechanism.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- unique_id
    - The parameter 'unique_id' is used to identify the node in the system for feedback and queue management. It plays a crucial role in ensuring accurate communication and tracking in the workflow.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- signal
    - The parameter 'signal' is an optional input that can be used to pass additional information or control to the node. It provides flexibility for the node's operation.
    - Comfy dtype: ANY
    - Python dtype: Any

# Output types
- signal_opt
    - The output 'signal_opt' allows the node to optionally pass a signal, which can be used for further processing or communication in the system.
    - Comfy dtype: ANY
    - Python dtype: Any
- count
    - The output 'count' reflects the updated count after the node's operation. It is important for tracking the progress of the countdown in the queue.
    - Comfy dtype: INT
    - Python dtype: int
- total
    - The output 'total' provides the total count value, which is essential for understanding the remaining steps in the countdown sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactQueueTriggerCountdown:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'count': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'total': ('INT', {'default': 10, 'min': 1, 'max': 18446744073709551615}), 'mode': ('BOOLEAN', {'default': True, 'label_on': 'Trigger', 'label_off': "Don't trigger"})}, 'optional': {'signal': (any_typ,)}, 'hidden': {'unique_id': 'UNIQUE_ID'}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic/_for_test'
    RETURN_TYPES = (any_typ, 'INT', 'INT')
    RETURN_NAMES = ('signal_opt', 'count', 'total')
    OUTPUT_NODE = True

    def doit(self, count, total, mode, unique_id, signal=None):
        if mode:
            if count < total - 1:
                PromptServer.instance.send_sync('impact-node-feedback', {'node_id': unique_id, 'widget_name': 'count', 'type': 'int', 'value': count + 1})
                PromptServer.instance.send_sync('impact-add-queue', {})
            if count >= total - 1:
                PromptServer.instance.send_sync('impact-node-feedback', {'node_id': unique_id, 'widget_name': 'count', 'type': 'int', 'value': 0})
        return (signal, count, total)
```