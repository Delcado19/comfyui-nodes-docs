# Documentation
- Class name: KfCurvesMultiply
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfCurvesMultiply node is designed to perform element-wise multiplication of two given keyframe curves, effectively combining their respective values at corresponding keyframes. This operation is essential for adjusting and manipulating the intensity or amplitude of animation curves in a nonlinear manner, enhancing creative control in animation and simulation processes.

# Input types
## Required
- curve_1
    - The first keyframe curve input is crucial because it defines the initial keyframes and their associated values that will be multiplied with the second curve. This parameter is essential for establishing a baseline animation or effect that will be modified by the second curve.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
- curve_2
    - The second keyframe curve input acts as a multiplier for the first curve, allowing adjustment of the animation or effect defined by the first curve. This parameter is essential for changing the dynamics of the animation in a controlled manner or applying complex effects.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Output types
- result
    - The output of the KfCurvesMultiply node is a new keyframe curve that represents the element-wise product of the two input curves. This resulting curve can be used to further refine the animation or introduce new complexity and detail levels in the animation sequence.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
