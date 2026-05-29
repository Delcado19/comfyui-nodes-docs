# Documentation
- Class name: KfGetCurveFromPGroup
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node helps extract a specific curve from a parameter group, allowing users to isolate and analyze individual data trends within complex datasets.

# Input types
## Required
- curve_label
    - The identifier of the curve to extract is crucial for precisely locating the exact data trend to analyze.
    - Comfy dtype: STRING
    - Python dtype: str
- parameter_group
    - The parameter collection forming the dataset, from which the curve will be extracted, plays a vital role in the overall data analysis process.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: kf.ParameterGroup

# Output types
- curve
    - The extracted curve represents an isolated data trend, providing a clear and focused view of specific patterns within the larger dataset.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.Curve

# Usage tips
- Infra type: CPU

# Source code
```
class KfGetCurveFromPGroup:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CURVE',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve_label': ('STRING', {'default': 'My Curve'}), 'parameter_group': ('PARAMETER_GROUP', {'forceInput': True})}}

    def main(self, curve_label, parameter_group):
        curve = parameter_group.parameters[curve_label]
        return (deepcopy(curve),)
```