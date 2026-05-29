# Documentation
- Class name: KfSinusoidalAdjustWavelength
- Category: ROOT_CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This type of node provides a method to adjust the wavelength of a sine curve, effectively changing its period without affecting other properties such as phase or amplitude. The adjustment is applied in a manner that preserves the overall shape of the curve, ensuring a smooth and continuous transformation, suitable for various application scenarios where fine-tuning the temporal characteristics of the curve is required.

# Input types
## Required
- curve
    - The input curve parameter is necessary; it defines the base sine curve whose wavelength is to be adjusted. This parameter directly affects the input processed by the node, determining the initial characteristics of the curve before any adjustment.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: kf.SinusoidalCurve
## Optional
- adjustment
    - The adjustment parameter acts as a multiplier for the wavelength adjustment, allowing precise control over the extent of change applied to the curve. It plays a crucial role in fine-tuning the temporal characteristics of the sine curve.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- curve
    - The output represents the adjusted sine curve, reflecting the result of node processing. It is important because it provides the updated curve that can be used for subsequent operations or visualization.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- sinusoidal_curve
    - This output is the same as the 'curve' output, providing the adjusted sine curve for further use. It ensures that users can access the modified curve in its new form, suitable for integration into various workflows.
    - Comfy dtype: SINUSOIDAL_CURVE
    - Python dtype: kf.SinusoidalCurve

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
