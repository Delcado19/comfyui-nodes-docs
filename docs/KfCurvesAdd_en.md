# Documentation
- Class name: KfCurvesAdd
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfCurvesAdd node is designed to merge two keyframe curves into a single composite curve. When merging curves is essential for creating complex animations or data representations, this node plays a critical role in the workflow. It receives two input curves and seamlessly integrates them to produce a unified output curve, enhancing the overall functionality and versatility of the animation or graphics process.

# Input types
## Required
- curve_1
    - The first keyframe curve to be merged is the fundamental input of the KfCurvesAdd node. It is essential for forming the final composite curve and directly influences the outcome of the animation or graphical representation. The node heavily relies on the structure and properties of this curve to effectively perform its function.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_2
    - The second keyframe curve, like the first, is a required input for the node. It is crucial to the curve merging process and significantly influences the shape and characteristics of the final composite curve. The node combines this curve with the first to achieve the desired animation or graphical effect.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Output types
- combined_curve
    - The output of the KfCurvesAdd node is a keyframe curve representing the sum of the two input curves. This output is important because it encompasses the combined effects of the input curves, providing a single, coherent curve for further use in animation or data visualization workflows.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Usage tips
- Infra type: CPU

# Source code
```
class KfCurvesAdd:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve_1': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve_2': ('KEYFRAMED_CURVE', {'forceInput': True})}}

    def main(self, curve_1, curve_2):
        curve_1 = deepcopy(curve_1)
        curve_2 = deepcopy(curve_2)
        return (curve_1 + curve_2,)
```