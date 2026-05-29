# Documentation
- Class name: KfSetCurveLabel
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node allows assigning a descriptive label to the curve, enhancing the traceability and interpretability of the curve in data visualization or analysis contexts.

# Input types
## Required
- curve
    - The curve parameter is required because it represents the data structure to which the label will be assigned, ensuring the curve can be identified and referenced in the system.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
## Optional
- label
    - The label parameter serves as a text identifier for the curve, helping to organize and retrieve specific curves in larger datasets or workflows.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- curve
    - The output curve now includes the assigned label, providing a more comprehensive data representation for further analysis or presentation.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Usage tips
- Infra type: CPU

# Source code
```
class KfSetCurveLabel:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve': ('KEYFRAMED_CURVE', {'forceInput': True}), 'label': ('STRING', {'multiline': False, 'default': '~curve~'})}}

    def main(self, curve, label):
        curve = deepcopy(curve)
        curve.label = label
        return (curve,)
```