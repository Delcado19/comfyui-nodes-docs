
# Documentation
- Class name: `SaltKeyframeSchedulerBFN`
- Category: `SALT/Scheduling`
- Output node: `False`

This node aims to schedule keyframe animations through customizable easing functions. It allows precise control over animation timing and sequence by specifying keyframes, easing modes, and optional parameters, enabling fine-grained adjustment of the animation process.

# Input types
## Required
- keyframe_schedule
    - Defines the keyframe sequence for the animation. It is the core of the scheduling process, determining the timing and values of animation frames.
    - Comfy dtype: STRING
    - Python dtype: str
- easing_mode
    - Specifies the easing function applied between keyframes, affecting the rhythm and style of the animation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list

## Optional
- end_frame
    - Determines the last frame of the animation, allowing the duration of the animation to be limited.
    - Comfy dtype: INT
    - Python dtype: int
- ndigits
    - Sets the precision of the calculated keyframe values, affecting the smoothness and accuracy of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- a
    - Custom variable 'a', providing additional flexibility for defining animations, supporting complex scheduling scenarios.
    - Comfy dtype: *
    - Python dtype: list | int | float | bool
- b
    - Custom variable 'b', providing additional flexibility for defining animations, supporting complex scheduling scenarios.
    - Comfy dtype: *
    - Python dtype: list | int | float | bool
- c
    - Custom variable 'c', expanding the flexibility and complexity of animation scheduling.
    - Comfy dtype: *
    - Python dtype: list | int | float | bool
- d
    - Custom variable 'd', further enhancing scheduling functionality through additional customization options.
    - Comfy dtype: *
    - Python dtype: list | int | float | bool
- e
    - Custom variable 'e', adding another layer of customization for complex animation scheduling.
    - Comfy dtype: *
    - Python dtype: list | int | float | bool
- f
    - Custom variable 'f', allowing more detailed control over the scheduling of animations.
    - Comfy dtype: *
    - Python dtype: list | int | float | bool
- g
    - Custom variable 'g', providing deep customization possibilities for scheduling animations.
    - Comfy dtype: *
    - Python dtype: list | int | float | bool
- h
    - Custom variable 'h', completing the extensive set of customization options for detailed animation scheduling.
    - Comfy dtype: *
    - Python dtype: list | int | float | bool

# Output types
- schedule_list
    - The calculated list of keyframe value schedules, which can be directly used for animating objects or scenes.
    - Comfy dtype: LIST
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltKeyframeSchedulerBFN:
    @classmethod
    def INPUT_TYPES(cls):
        easing_funcs = list(easing_functions.keys())
        easing_funcs.insert(0, "None")
        return {
            "required": {
                "keyframe_schedule": ("STRING", {"multiline": True, "dynamicPrompts": False}),
                "easing_mode": (easing_funcs, )
            },
            "optional": {
                "end_frame": ("INT", {"min": 0}),
                "ndigits": ("INT", {"min": 1, "max": 12, "default": 5}),
                "a": (WILDCARD, {}),
                "b": (WILDCARD, {}),
                "c": (WILDCARD, {}),
                "d": (WILDCARD, {}),
                "e": (WILDCARD, {}),
                "f": (WILDCARD, {}),
                "g": (WILDCARD, {}),
                "h": (WILDCARD, {}),
            }
        }

    RETURN_TYPES = ("LIST", )
    RETURN_NAMES = ("schedule_list", )

    FUNCTION = "keyframe_schedule"
    CATEGORY = "SALT/Scheduling"

    def keyframe_schedule(self, keyframe_schedule, easing_mode, end_frame=0, ndigits=2, a=[0], b=[0], c=[0], d=[0], e=[0], f=[0], g=[0], h=[0]):
        print("Received keyframe_schedule:", keyframe_schedule)
        custom_vars = {"a": a, "b": b, "c": c, "d": d, "e": e, "f": f, "g": g, "h": h}
        scheduler = KeyframeScheduler(end_frame=end_frame, custom_vars=custom_vars)
        schedule = scheduler.generate_schedule(keyframe_schedule, easing_mode=easing_mode, ndigits=ndigits)
        return (schedule, )

```
