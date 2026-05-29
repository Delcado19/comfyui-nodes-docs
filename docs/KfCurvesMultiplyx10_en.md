# Documentation
- Class name: KfCurvesMultiplyx10
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node facilitates the multiplication of multiple curves, enhancing the ability to manipulate and combine keyframe data to achieve complex animations or simulations. It is designed to simplify the process of scaling and integrating various curve inputs, thereby enabling the creation of intricate motion sequences.

# Input types
## Required
- curve_0
    - The primary curve input is crucial for the multiplication process, serving as the base upon which other curves will factor. Its presence ensures the node can initiate complex operations.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
## Optional
- curve_1
    - Subsequent curve inputs act as multipliers, contributing to the overall scaling effect of the primary curve. Each curve enriches the complexity and detail of the final output.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_2
    - Additional curve inputs further refine the scaling process, allowing for nuanced control over the resulting motion sequence.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_3
    - Including more curve inputs increases the versatility of the node, enabling a wide range of effects through the combination of multiple curve values.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_4
    - More curve inputs provide fine-grained control, allowing for sophisticated manipulation of the final output based on the specific characteristics of each curve.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_5
    - Combining additional curves enables a more intricate level of detail in the final animation, as each curve contributes a unique scaling factor.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_6
    - The multiplication of more curves offers a higher degree of precision and customization in the generated motion sequence.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_7
    - By including more curve inputs, the node can generate highly complex and nuanced animations that meet specific creative requirements.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_8
    - Further integration of curves enhances the node's ability to generate complex and detailed animations, responding to the demands of advanced motion design.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_9
    - The final set of curve inputs gives the node the capability to achieve exceptional detail and precision in the final animation, pushing the boundaries of possibility.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Output types
- curve_out
    - The output represents the cumulative result of the multiplication of all input curves, providing a single, unified curve that encapsulates the combined effects.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Usage tips
- Infra type: CPU

# Source code
```
class KfCurvesMultiplyx10:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve_0': ('KEYFRAMED_CURVE', {'forceInput': True})}, 'optional': {'curve_1': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 1}), 'curve_2': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 1}), 'curve_3': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 1}), 'curve_4': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 1}), 'curve_5': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 1}), 'curve_6': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 1}), 'curve_7': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 1}), 'curve_8': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 1}), 'curve_9': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 1})}}

    def main(self, curve_0, curve_1, curve_2, curve_3, curve_4, curve_5, curve_6, curve_7, curve_8, curve_9):
        curve_out = curve_0 * curve_1 * curve_2 * curve_3 * curve_4 * curve_5 * curve_6 * curve_7 * curve_8 * curve_9
        return (curve_out,)
```