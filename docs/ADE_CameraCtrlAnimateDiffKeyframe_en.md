# AnimateDiff+CameraCtrl Keyframe 🎭🅐🅓
## Documentation
- Class name: ADE_CameraCtrlAnimateDiffKeyframe
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to generate and manage animation keyframes that include camera control, creating dynamic and complex camera movements within the AnimateDiff framework. It allows specifying the start percentage of the animation, applying multiple values for scaling, effects, and camera control, and inheriting missing values to ensure continuity between keyframes.

## Input types
### Required
- start_percent
    - Specify the start percentage of the animation, allowing precise control over the timing of camera movement and effects in the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float

### Optional
- prev_ad_keyframes
    - Optional. Allows including previously defined AnimateDiff keyframes, enabling more complex sequence chains and layering in the animation.
    - Comfy dtype: AD_KEYFRAMES
    - Python dtype: ADKeyframeGroup or None
- scale_multival
    - Optional. Apply a scale factor to the animation, allowing adjustment of the size of animation elements.
    - Comfy dtype: MULTIVAL
    - Python dtype: float or torch.Tensor
- effect_multival
    - Optional. Apply various effects to the animation, allowing visual enhancements or modifications.
    - Comfy dtype: MULTIVAL
    - Python dtype: float or torch.Tensor
- cameractrl_multival
    - Optional. Specify multiple values for camera control, enabling the creation of complex camera movements within the animation.
    - Comfy dtype: MULTIVAL
    - Python dtype: float or torch.Tensor
- inherit_missing
    - Determine whether missing values in the current keyframe should be inherited from the previous keyframe to ensure animation continuity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- guarantee_steps
    - Specify the minimum guaranteed steps in the animation, ensuring a certain level of smoothness and continuity.
    - Comfy dtype: INT
    - Python dtype: int

## Output types
- ad_keyframes
    - Comfy dtype: AD_KEYFRAMES
    - Generate a series of AnimateDiff keyframes, enabling the animation to have complex camera movements.
    - Python dtype: ADKeyframeGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
