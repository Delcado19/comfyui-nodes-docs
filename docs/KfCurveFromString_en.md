# Documentation
- Class name: KfCurveFromString
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

Interprets and converts a string representation of a mathematical curve into a format for further processing. It encapsulates parsing logic for Chigozie strings, a compact keyframe curve description, and outputs a curve object for visualization or use in mathematical and graphical applications.

# Input types
## Required
- chigozie_string
    - The input parameter is a string defining a curve in Chigozie notation, essential for generating the curve object. It directly influences the shape and features of the output curve.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- curve
    - The output is a curve object representing the mathematical curve from the input string. It is the node's main result, used for rendering, analysis, or further processing in keyframe workflows.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.Curve

# Usage tips
- Infra type: CPU

# Source code
```
class KfCurveFromString:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'chigozie_string': ('STRING', {'multiline': True, 'default': '0:(1)'})}}

    def main(self, chigozie_string):
        curve = curve_from_cn_string(chigozie_string)
        return (curve,)
```