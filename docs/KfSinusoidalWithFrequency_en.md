# Documentation
- Class name: KfSinusoidalWithFrequency
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node generates a sine curve with adjustable frequency, phase, and amplitude, simulating periodic motion patterns. It is designed to provide users with a versatile tool for creating smooth, oscillating transitions in their projects.

# Input types
## Required
- frequency
    - The frequency parameter determines the rate at which the sine curve oscillates, with higher values resulting in faster, more frequent cycles. This is essential for setting the rhythm and tempo of animations.
    - Comfy dtype: FLOAT
    - Python dtype: float
- phase
    - The phase parameter shifts the sine curve along the timeline, allowing control over the starting point of the oscillation. This is critical for aligning motion with specific events or actions in an animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- amplitude
    - The amplitude parameter controls the range of oscillation, determining the peaks and troughs of the sine curve. It affects the overall intensity and magnitude of the motion.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- curve
    - The output is a keyframe curve object containing the sine pattern, which can be used in various animation and simulation scenarios.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.SinusoidalCurve
- sinusoidal_curve
    - This output provides the sine curve in a format that can be directly applied to visual elements, offering a smooth and dynamic representation of oscillation.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: keyframed.SinusoidalCurve

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
