# Documentation
- Class name: KfPGroupCurveAdd
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

Node integrates curves into parameter groups. Enhances data model structure and functionality. Simplifies combining keyframe animation elements with parameter settings. Improves data operation efficiency within the system.

# Input types
## Required
- parameter_group
    - Parameter group provides basis for curve integration. Key component affecting node overall behavior and output. Determines structural context for curve operations.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: Dict[str, Any]
- curve
    - Curve input introduces dynamic changes to parameter group. Carries animation data merged with static parameters. Adds complexity and smoothness to final result.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve

# Output types
- result
    - Combined output of result parameter group and curve signifies successful integration. Represents crystallization of node operations. Encapsulates combined properties and behaviors of two inputs.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class KfPGroupCurveAdd:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('PARAMETER_GROUP',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'parameter_group': ('PARAMETER_GROUP', {'forceInput': True}), 'curve': ('KEYFRAMED_CURVE', {'forceInput': True})}}

    def main(self, parameter_group, curve):
        parameter_group = deepcopy(parameter_group)
        curve = deepcopy(curve)
        return (parameter_group + curve,)
```