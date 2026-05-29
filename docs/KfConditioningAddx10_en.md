# Documentation
- Class name: KfConditioningAddx10
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node processes conditional inputs cumulatively, enhancing the overall conditional data by aggregating the provided inputs.

# Input types
## Required
- cond_0
    - The initial conditional data is crucial for the node's operation. It sets the baseline for subsequent aggregation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
## Optional
- cond_1
    - An optional conditional input that contributes to the cumulative effect of the output. It merges with the base conditional data.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- cond_2
    - Another additional optional conditional input that further contributes to the cumulative processing of the node operation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- cond_3
    - Another optional conditional input that is integrated into the cumulative output, enhancing the overall functionality of the node.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- cond_4
    - This optional conditional input is part of the cumulative data flow, affecting the node's final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- cond_5
    - This conditional input further refines the cumulative data, playing a role in the node's comprehensive processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- cond_6
    - An optional input that aids the node's cumulative data processing, affecting the quality of the output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- cond_7
    - This optional conditional input is integrated into the cumulative data, further enhancing the node's processing capability.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- cond_8
    - This conditional input contributes to the final cumulative output, influencing the overall effect of the node.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- cond_9
    - An additional optional conditional input that is part of the cumulative data, affecting the node's final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]

# Output types
- cond_t_out
    - The cumulative result of the conditional inputs, representing the aggregated and processed data.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[Any, Dict[str, Any]]

# Usage tips
- Infra type: CPU

# Source code
```
class KfConditioningAddx10:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('CONDITIONING',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'cond_0': ('CONDITIONING', {'forceInput': True})}, 'optional': {'cond_1': ('CONDITIONING', {'forceInput': True, 'default': 0}), 'cond_2': ('CONDITIONING', {'forceInput': True, 'default': 0}), 'cond_3': ('CONDITIONING', {'forceInput': True, 'default': 0}), 'cond_4': ('CONDITIONING', {'forceInput': True, 'default': 0}), 'cond_5': ('CONDITIONING', {'forceInput': True, 'default': 0}), 'cond_6': ('CONDITIONING', {'forceInput': True, 'default': 0}), 'cond_7': ('CONDITIONING', {'forceInput': True, 'default': 0}), 'cond_8': ('CONDITIONING', {'forceInput': True, 'default': 0}), 'cond_9': ('CONDITIONING', {'forceInput': True, 'default': 0})}}

    def main(self, cond_0, **kwargs):
        ((cond_t_out, cond_d_out),) = deepcopy(cond_0)
        for ((cond_t, cond_d),) in kwargs.values():
            (cond_t, cond_d) = (deepcopy(cond_t), deepcopy(cond_d))
            cond_t_out = cond_t_out + cond_t
            cond_d_out['pooled_output'] = cond_d_out['pooled_output'] + cond_d['pooled_output']
        return [((cond_t_out, cond_d_out),)]
```