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
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
