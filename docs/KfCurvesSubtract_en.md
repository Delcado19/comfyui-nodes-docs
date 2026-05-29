# Documentation
- Class name: KfCurvesSubtract
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node implements the functionality of subtracting one curve from another, combining keyframe operations and mathematical calculations to achieve desired results in animation and data visualization.

# Input types
## Required
- curve_1
    - The first curve input is critical as it sets the baseline for the subtraction operation. It is central to the process as it determines the form and structure of the resulting curve after the operation.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_2
    - The second curve serves as the element to be subtracted from the first curve. Its role is crucial as it directly affects the final result of the subtraction, determining the shape and characteristics of the resulting curve.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Output types
- result_curve
    - The output represents the result of the subtraction operation, combining the essence of both input curves into a single, refined curve that reflects the difference between the original two curves.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Usage tips
- Infra type: CPU

# Source code
```
class KfCurvesSubtract:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve_1': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve_2': ('KEYFRAMED_CURVE', {'forceInput': True})}}

    def main(self, curve_1, curve_2):
        curve_1 = deepcopy(curve_1)
        curve_2 = deepcopy(curve_2)
        return (curve_1 - curve_2,)
```