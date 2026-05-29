# Documentation
- Class name: ImpactConditionalStopIteration
- Category: ImpactPack/Logic
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactConditionalStopIteration node is designed to control the execution flow based on a condition check. When called with a true condition, it sends a signal to stop the iteration process. This node plays a critical role in managing execution flow within a workflow, allowing conditional interruption when certain conditions are met.

# Input types
## Required
- cond
    - The 'cond' parameter is a boolean value that determines whether the iteration should stop. It is essential to the node's operation, as it directly influences the decision process regarding whether iteration continues or terminates.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- None
    - The 'doit' method returns no output. It is a void method whose sole purpose is to send a 'stop-iteration' signal when the condition is true, thereby affecting the control flow of the program.
    - Comfy dtype: DICT
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactConditionalStopIteration:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'cond': ('BOOLEAN', {'forceInput': True})}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic'
    RETURN_TYPES = ()
    OUTPUT_NODE = True

    def doit(self, cond):
        if cond:
            PromptServer.instance.send_sync('stop-iteration', {})
        return {}
```