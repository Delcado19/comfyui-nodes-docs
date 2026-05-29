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
```python
class CreateLoraHookKeyframeFromStrengthList:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "strengths_float": ("FLOAT", {"default": -1, "min": -1, "step": 0.001, "forceInput": True}),
                "start_percent": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                "end_percent": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.001}),
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

    def create_hook_keyframes(self, strengths_float: Union[float, list[float]],
                              start_percent: float, end_percent: float,
                              prev_hook_kf: LoraHookKeyframeGroup=None, print_keyframes=False):
        if prev_hook_kf:
            prev_hook_kf = prev_hook_kf.clone()
        else:
            prev_hook_kf = LoraHookKeyframeGroup()
        if type(strengths_float) in (float, int):
            strengths_float = [float(strengths_float)]
        elif isinstance(strengths_float, Iterable):
            pass
        else:
            raise Exception(f"strengths_floast must be either an interable input or a float, but was {type(strengths_float).__repr__}.")
        percents = InterpolationMethod.get_weights(num_from=start_percent, num_to=end_percent, length=len(strengths_float), method=InterpolationMethod.LINEAR)

        is_first = True
        for percent, strength in zip(percents, strengths_float):
            guarantee_steps = 0
            if is_first:
                guarantee_steps = 1
                is_first = False
            prev_hook_kf.add(LoraHookKeyframe(strength=strength, start_percent=percent, guarantee_steps=guarantee_steps))
            if print_keyframes:
                logger.info(f"LoraHookKeyframe - start_percent:{percent} = {strength}")
        return (prev_hook_kf,)