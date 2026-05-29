# 🧪Inject I2V into AnimateDiff Model 🎭🅐🅓②
## Documentation
- Class name: ADE_InjectI2VIntoAnimateDiffModel
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/AnimateLCM-I2V/🧪experimental
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node aims to integrate the I2V (Image to Video) model into the AnimateDiff framework, enhancing its functionality by introducing motion models. It serves as a bridge, enriching the animation process of AnimateDiff by adding more motion dynamics, thereby achieving more complex and detailed animation outputs.

## Input types
### Required
- model_name
    - Specifies the name of the motion model to be loaded, playing a crucial role in determining the motion dynamics of the animation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- motion_model
    - Represents the motion model object to be injected into the AnimateDiff model, which is essential for applying specific motion dynamics during the animation process.
    - Comfy dtype: MOTION_MODEL_ADE
    - Python dtype: MotionModelPatcher

### Optional
- ad_settings
    - Optional settings for the AnimateDiff process, allowing customization of the animation's appearance and behavior.
    - Comfy dtype: AD_SETTINGS
    - Python dtype: AnimateDiffSettings

## Output types
- MOTION_MODEL
    - Comfy dtype: MOTION_MODEL_ADE
    - The enhanced AnimateDiff model with I2V functionality injected, ready for animation tasks.
    - Python dtype: MotionModelPatcher

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
