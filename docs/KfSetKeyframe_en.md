# Documentation
- Class name: KfSetKeyframe
- Category: RootCategory
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node aims to manage and modify the keyframe conditions in the plan, allowing dynamic adjustment of parameters during model training.

# Input types
## Required
- keyframed_condition
    - This parameter is crucial because it defines the conditions for setting keyframes, which are essential for controlling the model's behavior at specific intervals.
    - Comfy dtype: KEYFRAMED_CONDITION
    - Python dtype: Dict[str, Any]
## Optional
- schedule
    - The plan parameter is important for defining the timing and frequency of model updates, and combined with keyframe conditions, it can optimize the training process.
    - Comfy dtype: SCHEDULE
    - Python dtype: Optional[kf.ParameterGroup]

# Output types
- schedule
    - The output is a modified plan containing updated keyframe conditions, which is crucial for guiding the model's progress and performance.
    - Comfy dtype: SCHEDULE
    - Python dtype: Tuple[kf.ParameterGroup, Dict[str, Any]]

# Usage tips
- Infra type: CPU

# Source code
```
class KfSetKeyframe:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('SCHEDULE',)

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'keyframed_condition': ('KEYFRAMED_CONDITION', {})}, 'optional': {'schedule': ('SCHEDULE', {})}}

    def main(self, keyframed_condition, schedule=None):
        schedule = set_keyframed_condition(keyframed_condition, schedule)
        return (schedule,)
```