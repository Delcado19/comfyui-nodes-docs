# Documentation
- Class name: KfCurvesDivide
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node performs a division operation on two curves, providing a means to analyze the relationship between them. Essential for operations requiring curve data normalization or comparison, it offers a direct method to obtain a new curve containing the division result.

# Input types
## Required
- curve_1
    - The first curve is the fundamental input that defines one operand in the division operation. Its values are critical to determining the outcome of the division, as they directly influence the shape and characteristics of the result curve.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_2
    - The second curve is another important input, serving as the divisor in the division operation. Its significance lies in how it affects the scaling of the result curve relative to the first curve.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Output types
- result_curve
    - The node's output is a new curve representing the result of dividing the first input curve by the second curve. This result curve is important because it contains the normalized relationship between the two original curves.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
