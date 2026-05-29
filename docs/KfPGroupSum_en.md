# Documentation
- Class name: KfPGroupSum
- Category: keyframed/experimental
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfPGroupSum node is designed to aggregate keyframe curves into a single composite curve. It operates by summing the individual curves associated with a given parameter group, thereby generating a unified representation that encapsulates the collective behavior of the input curves.

# Input types
## Required
- parameter_group
    - The parameter group is a key input to the KfPGroupSum node as it contains the set of keyframe curves to be summed. This input directly affects the output curve by determining which curves contribute to the final composite curve.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: Dict[str, kf.Curve]

# Output types
- composite_curve
    - The output of the KfPGroupSum node is a composite keyframe curve that is the sum of all input curves in the parameter group. This curve is important because it provides a simplified view of the combined motion or effect represented by the input curves.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.Curve

# Usage tips
- Infra type: CPU

# Source code
```
class KfPGroupSum:
    CATEGORY = 'keyframed/experimental'
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'parameter_group': ('PARAMETER_GROUP', {'forceInput': True})}}

    def main(self, parameter_group):
        parameter_group = deepcopy(parameter_group)
        outv = kf.Curve(0)
        for curve in parameter_group.parameters.values():
            outv += curve
        return (outv,)
```