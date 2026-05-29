# Apply AnimateDiff Model (Adv.) 🎭🅐🅓②
## Documentation
- Class name: ADE_ApplyAnimateDiffModel
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADE_ApplyAnimateDiffModel node aims to apply advanced AnimateDiff model configurations to generate motion in images. It utilizes a comprehensive set of parameters to fine-tune the animation process, adapting to various motion effects and styles.

## Input types
### Required
- motion_model
    - Specifies the motion model used for animation. It is crucial for defining the behavior and characteristics of the animation.
    - Comfy dtype: MOTION_MODEL_ADE
    - Python dtype: MotionModelPatcher
- start_percent
    - Defines the starting percentage of the animation effect, marking the beginning of motion application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Specifies the ending percentage of the animation effect, determining the point where motion stops.
    - Comfy dtype: FLOAT
    - Python dtype: float

### Optional
- motion_lora
    - Optional parameter that allows adjustment of motion using LoRA (Low-Rank Adaptation) technology, enhancing animation quality.
    - Comfy dtype: MOTION_LORA
    - Python dtype: MotionLoraList
- scale_multival
    - Optional parameter that affects the scale of the animation effect, allowing fine-tuning of the animation intensity.
    - Comfy dtype: MULTIVAL
    - Python dtype: float
- effect_multival
    - Optional parameter that adjusts the overall effect of the animation, allowing customization of the visual result.
    - Comfy dtype: MULTIVAL
    - Python dtype: float
- ad_keyframes
    - Optional parameter that specifies the keyframes of the animation, allowing precise control over the timing and sequence of motion.
    - Comfy dtype: AD_KEYFRAMES
    - Python dtype: ADKeyframeGroup
- prev_m_models
    - Optional parameter that includes previous motion models to be considered in the current animation process, allowing cumulative effects.
    - Comfy dtype: M_MODELS
    - Python dtype: M_MODELS

## Output types
- m_models
    - Comfy dtype: M_MODELS
    - Outputs the motion model used during the animation process, including all adjustments and configurations.
    - Python dtype: M_MODELS

## Usage tips
- Infra type: GPU
<!-- - Common nodes:
    - [ADE_UseEvolvedSampling](../../ComfyUI-AnimateDiff-Evolved/Nodes/ADE_UseEvolvedSampling.md) -->

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
