# LoRA Hook Keyframes Interpolation 🎭🅐🅓
## Documentation
- Class name: ADE_LoraHookKeyframeInterpolation
- Category: Animate Diff 🎭🅐🅓/conditioning/schedule lora hooks
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is used to create interpolated LoRA hook keyframes, enabling dynamic adjustment of model behavior over time. It generates a series of keyframes based on specified start and end percentages, strength values, and interpolation methods, allowing fine-grained control over model parameters.

## Input types
### Required
- start_percent
    - Defines the starting percentage of interpolation, setting the starting point for the generated keyframe sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Specifies the ending percentage of interpolation, determining the endpoint of the generated keyframe sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_start
    - Sets the initial strength value for interpolation, marking the beginning of the strength adjustment range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_end
    - Determines the ending strength value for interpolation, concluding the strength adjustment range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation
    - Selects the interpolation method used to generate the keyframe sequence, affecting the transition between start and end values.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: InterpolationMethod
- intervals
    - Specifies the number of intervals (or keyframes) generated between the start and end points, affecting the granularity of interpolation.
    - Comfy dtype: INT
    - Python dtype: int
- print_keyframes
    - Optional. Controls whether to log the generated keyframes, aiding in debugging and visualizing the interpolation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

### Optional
- prev_hook_kf
    - Optional. Allows inclusion of a previously defined set of LoRA hook keyframes, to which the new interpolated keyframes will be added.
    - Comfy dtype: LORA_HOOK_KEYFRAMES
    - Python dtype: LoraHookKeyframeGroup

## Output types
- HOOK_KF
    - Comfy dtype: LORA_HOOK_KEYFRAMES
    - Returns a set of LoRA hook keyframes, including both previously existing and newly interpolated keyframes, ready for application in model conditioning.
    - Python dtype: LoraHookKeyframeGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
