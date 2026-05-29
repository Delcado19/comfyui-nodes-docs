# Documentation
- Class name: KfCurvesAddx10
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node aggregates multiple input curves by summing their values to enhance the overall representation of the data. It serves as a tool for simplifying the analysis and visualization of keyframe curves through summation.

# Input types
## Required
- curve_0
    - The initial curve input is critical because it sets the baseline for the addition of subsequent curves. Its presence is mandatory and directly affects the result of the node operation.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
## Optional
- curve_1
    - Additional curve inputs are indispensable to the node's function, contributing to the cumulative effect. They enhance the comprehensiveness of the final output.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_2
    - More curve inputs play an important role in the aggregation process, influencing the final sum and the node's effectiveness in synthesizing data.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_3
    - Subsequent curve inputs are essential for the node to achieve comprehensive aggregation, affecting the depth and breadth of the synthesized data.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_4
    - Including more curve inputs enriches the node's ability to aggregate and process data, contributing to a more nuanced final output.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_5
    - Additional curve inputs are critical for enhancing the node's ability to synthesize a broader range of data, contributing to a more comprehensive understanding of the aggregated information.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_6
    - Incorporating more curve inputs into the node operation allows for more detailed and complex aggregation, enriching the final representation of the data.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_7
    - The presence of extra curve inputs enhances the node's functionality, enabling it to process and integrate a wider range of data points into the final sum.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_8
    - By including more curve inputs, the node can effectively aggregate diverse datasets, which is essential for achieving a holistic view of the combined curves.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_9
    - The final curve input adds the last layer of data to the aggregation process, ensuring the node's output is a comprehensive representation of all combined curves.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Output types
- curve_out
    - The output represents the sum of all input curves, providing a comprehensive and integrated view of the aggregated data.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Usage tips
- Infra type: CPU

# Source code
```
class KfCurvesAddx10:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve_0': ('KEYFRAMED_CURVE', {'forceInput': True})}, 'optional': {'curve_1': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 0}), 'curve_2': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 0}), 'curve_3': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 0}), 'curve_4': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 0}), 'curve_5': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 0}), 'curve_6': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 0}), 'curve_7': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 0}), 'curve_8': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 0}), 'curve_9': ('KEYFRAMED_CURVE', {'forceInput': True, 'default': 0})}}

    def main(self, curve_0=0, curve_1=0, curve_2=0, curve_3=0, curve_4=0, curve_5=0, curve_6=0, curve_7=0, curve_8=0, curve_9=0):
        curve_out = curve_0 + curve_1 + curve_2 + curve_3 + curve_4 + curve_5 + curve_6 + curve_7 + curve_8 + curve_9
        return (curve_out,)
```