# Documentation
- Class name: KfPGroupCurveMultiply
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node multiplies a set of parameters with a curve, dynamically adjusting the parameter values over time according to keyframe data.

# Input types
## Required
- parameter_group
    - The parameter group, whose values will be multiplied with the curve. This is crucial for defining the set of parameters that the node will adjust.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: Dict[str, Any]
- curve
    - The curve defines the multiplication factor for the parameter group at different points in time. It is essential for controlling the dynamic adjustment.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.Curve

# Output types
- result
    - The output is the modified parameter group, whose values have been adjusted based on the curve multiplication.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class KfPGroupCurveMultiply:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('PARAMETER_GROUP',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'parameter_group': ('PARAMETER_GROUP', {'forceInput': True}), 'curve': ('KEYFRAMED_CURVE', {'forceInput': True})}}

    def main(self, parameter_group, curve):
        parameter_group = deepcopy(parameter_group)
        curve = deepcopy(curve)
        return (parameter_group * curve,)
```