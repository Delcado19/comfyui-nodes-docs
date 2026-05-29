# Documentation
- Class name: ImpactConditionalBranchSelMode
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactConditionalBranchSelMode node acts as a conditional switch in the workflow. It evaluates the 'cond' input to decide whether to return 'tt_value' (true value) or 'ff_value' (false value), thereby guiding the execution flow based on the condition.

# Input types
## Required
- cond
    - The 'cond' parameter is a boolean value that determines the execution path of the node. It is critical because it directly affects whether 'tt_value' or 'ff_value' is returned, thereby influencing downstream operations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- sel_mode
    - The 'sel_mode' parameter indicates whether the node should select based on prompt or execution. It is important because it can change the node's behavior without altering the condition, providing flexibility in the decision-making process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tt_value
    - When the condition is true, 'tt_value' is the returned value. Its importance lies in defining the node's result for the affirmative case, which is critical for subsequent steps in the workflow.
    - Comfy dtype: any_typ
    - Python dtype: Any
- ff_value
    - When the condition is false, 'ff_value' is the returned value. It is important because it sets the node's output for the negative case, which may be critical for the continuity and logic of subsequent workflow steps.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Output types
- result
    - The 'result' output represents the result of the conditional execution. If the condition is true, it is 'tt_value'; if the condition is false, it is 'ff_value', providing critical data for subsequent operations.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactConditionalBranchSelMode:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'cond': ('BOOLEAN',), 'sel_mode': ('BOOLEAN', {'default': True, 'label_on': 'select_on_prompt', 'label_off': 'select_on_execution'})}, 'optional': {'tt_value': (any_typ,), 'ff_value': (any_typ,)}}
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Logic'
    RETURN_TYPES = (any_typ,)

    def doit(self, cond, sel_mode, tt_value=None, ff_value=None):
        print(f'tt={tt_value is None}\nff={ff_value is None}')
        if cond:
            return (tt_value,)
        else:
            return (ff_value,)
```