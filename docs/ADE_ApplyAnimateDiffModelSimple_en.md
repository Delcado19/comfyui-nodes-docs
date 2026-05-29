# Apply AnimateDiff Model 🎭🅐🅓②
## Documentation
- Class name: ADE_ApplyAnimateDiffModelSimple
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node aims to apply motion models to animate images or sequences, providing a simplified interface to integrate motion effects. It abstracts the complexity of the animation process, allowing users to easily apply predefined motion models to their content.

## Input types
### Required
- motion_model
    - Specify the motion model to be applied. It is crucial for defining the animation behavior and effect of the target content.
    - Comfy dtype: MOTION_MODEL_ADE
    - Python dtype: MotionModelPatcher

### Optional
- motion_lora
    - Optional parameter to integrate motion LoRA adjustments, enhancing the animation effect.
    - Comfy dtype: MOTION_LORA
    - Python dtype: MotionLoraList
- scale_multival
    - Optional parameter to scale the effect, providing flexibility in applying motion intensity.
    - Comfy dtype: MULTIVAL
    - Python dtype: Optional[MultiVal]
- effect_multival
    - Optional parameter for effect adjustment, customizing the visual impact of the motion.
    - Comfy dtype: MULTIVAL
    - Python dtype: Optional[MultiVal]
- ad_keyframes
    - Optional parameter to specify keyframes, allowing more controlled and precise animation effects.
    - Comfy dtype: AD_KEYFRAMES
    - Python dtype: Optional[ADKeyframeGroup]

## Output types
- m_models
    - Comfy dtype: M_MODELS
    - Outputs the applied motion effects, keyframes, and adjusted motion model.
    - Python dtype: MotionModelGroup

## Usage tips
- Infra type: GPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
