# Documentation
- Class name: ConditioningSetTimestepRange
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningSetTimestepRange node is designed to modify the timestep range of a conditioning set. It allows specifying start and end percentages, which the node then applies to the conditioning data to set the desired range. This node plays a critical role in controlling the temporal scope of conditioning information, which can significantly influence the behavior of subsequent model operations.

# Input types
## Required
- conditioning
    - The conditioning parameter is critical because it represents the dataset that will be operated on by the node. This is the core input that determines the node's operation and the subsequent modification of the timestep range within the conditioning set.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- start
    - The start parameter defines the beginning of the timestep range to be set within the conditioning data. It is essential for determining where the node will begin making changes to the conditioning set's timestep range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end
    - The end parameter represents the endpoint of the timestep range to be set within the conditioning data. It is crucial for establishing the final point at which the node will modify the conditioning set's timestep range.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output conditioning parameter represents the modified conditioning set after applying the specified timestep range. It is important because it carries the updated temporal information that will be used in subsequent steps of model operations.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
```
class ConditioningSetTimestepRange:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning': ('CONDITIONING',), 'start': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'set_range'
    CATEGORY = 'advanced/conditioning'

    def set_range(self, conditioning, start, end):
        c = node_helpers.conditioning_set_values(conditioning, {'start_percent': start, 'end_percent': end})
        return (c,)
```