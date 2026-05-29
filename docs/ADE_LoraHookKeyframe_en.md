# LoRA Hook Keyframe 🎭🅐🅓
## Documentation
- Class name: ADE_LoraHookKeyframe
- Category: Animate Diff 🎭🅐🅓/conditioning/schedule lora hooks
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is used to create LoRA hook keyframes, which is a mechanism for adjusting the influence of LoRA (Low-Rank Adaptation) hooks at specific points in an animation sequence. It allows dynamic scheduling of LoRA hook strength, enabling precise control of their effects during the animation process.

## Input types
### Required
- strength_model
    - Specify the intensity of the LoRA hook at the keyframe, affecting the hook's influence on model behavior at this point in the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Determine the starting point of the keyframe effect as a percentage of the total animation length, allowing precise control over the timing of LoRA hook influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guarantee_steps
    - Ensure the minimum number of steps the keyframe effect will be applied, guaranteeing that the LoRA hook influence is maintained for at least this duration.
    - Comfy dtype: INT
    - Python dtype: int

### Optional
- prev_hook_kf
    - Optional previous LoRA hook keyframe group; the new keyframe will be added to it, allowing chaining multiple keyframes together to achieve complex animation effects.
    - Comfy dtype: LORA_HOOK_KEYFRAMES
    - Python dtype: LoraHookKeyframeGroup

## Output types
- HOOK_KF
    - Comfy dtype: LORA_HOOK_KEYFRAMES
    - Returns a set of LoRA hook keyframes, including the newly created keyframe, facilitating management and application of multiple keyframes in the animation.
    - Python dtype: LoraHookKeyframeGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
