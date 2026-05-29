# Documentation
- Class name: KfCurveConstant
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfCurveConstant node is designed to generate a constant curve within the keyframe framework. It encapsulates a single value provided as input and represents it as a constant curve that does not change over time. This node is particularly useful for creating stable states or fixed points in dynamic systems where a constant value is required over a period.

# Input types
## Required
- value
    - The 'value' parameter is critical as it defines the constant value of the curve. It is the sole input of the node and directly affects the output, ensuring the curve remains unchanged throughout its duration. This parameter is essential for establishing steady states in simulations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- curve
    - The output 'curve' represents a constant curve in the keyframe framework. It is generated based on the input value and then used to create a time-invariant curve. This output is important as it provides a visual and computational representation of the constant state in the system.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Usage tips
- Infra type: CPU

# Source code
```
class KfCurveConstant:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'value': ('FLOAT', {'forceInput': True})}}

    def main(self, value):
        curve = kf.Curve(value)
        return (curve,)
```