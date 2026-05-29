# LoRA Hook Keyframes From List 🎭🅐🅓
## Documentation
- Class name: ADE_LoraHookKeyframeFromStrengthList
- Category: Animate Diff 🎭🅐🅓/conditioning/schedule lora hooks
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is used to create a series of LoRA hook keyframes based on a list of strengths, thereby dynamically adjusting multiple steps of the model's behavior. It allows customizing keyframe attributes such as strength and start percentage, enabling precise control over the animation or transformation process.

## Input types
### Required
- strengths_float
    - Specifies the strength of each keyframe in the sequence. This parameter can accept a single float value or a list of float values, allowing flexible definition of each keyframe's strength.
    - Comfy dtype: FLOAT
    - Python dtype: Union[float, List[float]]
- start_percent
    - Defines the start percentage of the keyframe sequence, setting the start point of the animation or transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Sets the end percentage of the keyframe sequence, marking the end point of the animation or transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- print_keyframes
    - A boolean flag that, when enabled, prints detailed information about each keyframe to the log, aiding in debugging and visualizing the keyframe sequence.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

### Optional
- prev_hook_kf
    - An optional parameter that allows continuing from a previous LoRA hook keyframe sequence, enabling seamless transitions between sequences.
    - Comfy dtype: LORA_HOOK_KEYFRAMES
    - Python dtype: LoraHookKeyframeGroup

## Output types
- HOOK_KF
    - Comfy dtype: LORA_HOOK_KEYFRAMES
    - Returns a set of LoRA hook keyframes, representing a series of adjustments to be applied to the model.
    - Python dtype: LoraHookKeyframeGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
