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
```python
class CreateLoraHookKeyframeInterpolation:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "start_percent": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "end_percent": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "strength_start": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.001}, ),
                "strength_end": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.001}, ),
                "interpolation": (InterpolationMethod._LIST, ),
                "intervals": ("INT", {"default": 5, "min": 2, "max": 100, "step": 1}),
                "print_keyframes": ("BOOLEAN", {"default": False}),
            },
            "optional": {
                "prev_hook_kf": ("LORA_HOOK_KEYFRAMES",),
            }
        }
    
    RETURN_TYPES = ("LORA_HOOK_KEYFRAMES",)
    RETURN_NAMES = ("HOOK_KF",)
    CATEGORY = "Animate Diff 🎭🅐🅓/conditioning/schedule lora hooks"
    FUNCTION = "create_hook_keyframes"

    def create_hook_keyframes(self,
                              start_percent: float, end_percent: float,
                              strength_start: float, strength_end: float, interpolation: str, intervals: int,
                              prev_hook_kf: LoraHookKeyframeGroup=None, print_keyframes=False):
        if prev_hook_kf:
            prev_hook_kf = prev_hook_kf.clone()
        else:
            prev_hook_kf = LoraHookKeyframeGroup()
        percents = InterpolationMethod.get_weights(num_from=start_percent, num_to=end_percent, length=intervals, method=interpolation)
        strengths = InterpolationMethod.get_weights(num_from=strength_start, num_to=strength_end, length=intervals, method=interpolation)
        
        is_first = True
        for percent, strength in zip(percents, strengths):
            guarantee_steps = 0
            if is_first:
                guarantee_steps = 1
                is_first = False
            prev_hook_kf.add(LoraHookKeyframe(strength=strength, start_percent=percent, guarantee_steps=guarantee_steps))
            if print_keyframes:
                logger.info(f"LoraHookKeyframe - start_percent:{percent} = {strength}")
        return (prev_hook_kf,)