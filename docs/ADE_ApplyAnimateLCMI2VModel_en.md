# Apply AnimateLCM-I2V Model 🎭🅐🅓②
## Documentation
- Class name: ADE_ApplyAnimateLCMI2VModel
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/AnimateLCM-I2V
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to apply the AnimateLCM-I2V model, using latent code motion reasoning via the I2V (image-to-video) function to animate images. It integrates a motion model and a set of keyframes to generate dynamic animated visual effects from static images, and enhances their motion and effects according to specified parameters.

## Input types
### Required
- motion_model
    - Motion model parameters are crucial for defining the motion characteristics and dynamics that will be applied to the static image. They affect the node's execution by determining the types of animation and motion effects to be introduced.
    - Comfy dtype: MOTION_MODEL_ADE
    - Python dtype: MotionModelPatcher
- ref_latent
    - This parameter stores the reference latent representation of the image to be animated. It is essential for preserving the original characteristics of the image when motion effects are applied.
    - Comfy dtype: LATENT
    - Python dtype: dict
- ref_drift
    - Specifies the degree to which the original image characteristics deviate when motion is applied, allowing subtle or pronounced changes in the animated output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- apply_ref_when_disabled
    - Determines whether reference features (such as drift) are applied even when the motion model is disabled, ensuring continuity of the animation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- start_percent
    - Defines the start point of the animation on the motion model timeline, allowing precise control over when the animation effect begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Sets the end point of the animation on the motion model timeline, allowing customization of the animation's duration and conclusion.
    - Comfy dtype: FLOAT
    - Python dtype: float

### Optional
- motion_lora
    - A set of LoRA settings specific to motion, which can be applied to further customize the animation's effects and dynamics.
    - Comfy dtype: MOTION_LORA
    - Python dtype: MotionLoraList
- scale_multival
    - A multiplier for scaling effects, providing additional control over the size and proportion of animated elements.
    - Comfy dtype: MULTIVAL
    - Python dtype: Optional[List[float]]
- effect_multival
    - Multipliers for various effects, offering the ability to further customize the visual appearance and dynamics of the animation.
    - Comfy dtype: MULTIVAL
    - Python dtype: Optional[List[float]]
- ad_keyframes
    - Specifies a keyframe group for advanced animation control, allowing detailed customization of motion and effects over time.
    - Comfy dtype: AD_KEYFRAMES
    - Python dtype: ADKeyframeGroup
- prev_m_models
    - Previously applied motion model groups, enabling the node to build upon or modify existing animations to enhance or alter effects.
    - Comfy dtype: M_MODELS
    - Python dtype: MotionModelGroup

## Output types
- m_models
    - Comfy dtype: M_MODELS
    - An updated list of motion models, including the most recently applied models with their configured animations and effects.
    - Python dtype: MotionModelGroup

## Usage tips
- Infra type: GPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
