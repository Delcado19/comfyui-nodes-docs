# Load AnimateLCM-I2V Model 🎭🅐🅓②
## Documentation
- Class name: ADE_LoadAnimateLCMI2VModel
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/AnimateLCM-I2V
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADE_LoadAnimateLCMI2VModel node is designed to load and prepare the AnimateLCM-I2V motion model for animation processes. It ensures the selected motion model is compatible with the AnimateLCM-I2V format and has an image encoder, facilitating the integration of motion models into animation workflows.

## Input types
### Required
- model_name
    - Specify the name of the motion model to load, ensuring the model is available and compatible with the AnimateLCM-I2V format.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

### Optional
- ad_settings
    - Optional settings for the Animate Diff process that can be applied to the motion model, allowing customization of the animation.
    - Comfy dtype: AD_SETTINGS
    - Python dtype: AnimateDiffSettings or None

## Output types
- MOTION_MODEL
    - Comfy dtype: MOTION_MODEL_ADE
    - The loaded motion model, ready for the animation process.
    - Python dtype: MotionModelPatcher
- encoder_only
    - Comfy dtype: MOTION_MODEL_ADE
    - A version of the motion model containing only the encoder, suitable for specific animation tasks.
    - Python dtype: MotionModelPatcher

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
