
# Documentation
- Class name: SaltScheduleListExponentialFade
- Category: SALT/Scheduling/Filter
- Output node: False

This node is used to apply exponential decay effects to a schedule list. Depending on the specified decay type and intensity, it can enhance or weaken the values in the list, thus creating dynamic transition effects.

# Input types
## Required
- schedule_list
    - A list of values for applying exponential decay effects, serving as the basis for dynamic transitions.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- fade_type
    - Specifies the type of decay effect to apply: 'in' for increasing, 'out' for decreasing, 'in-and-out' for a combination of both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength
    - Determines the intensity of the decay effect; the higher the value, the more noticeable the decay.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- start_index
    - The list index at which to start applying the decay effect, allowing partial decay within the list.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- schedule_list
    - The modified schedule list after applying the exponential decay effect, demonstrating the dynamic transition effect.
    - Comfy dtype: LIST
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltScheduleListExponentialFade:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "schedule_list": ("LIST", ),
                "fade_type": (["in", "out", "in-and-out"],),
                "strength": ("FLOAT", {"min": 0.01, "max": 10.0, "default": 1.0}),
            },
            "optional": {
                "start_index": ("INT", {"min": 0, "default": 0}),
            }
        }

    RETURN_TYPES = ("LIST",)
    RETURN_NAMES = ("schedule_list", )
    FUNCTION = "exponential_fade"
    CATEGORY = "SALT/Scheduling/Filter"

    def exponential_fade(self, schedule_list, fade_type, strength, start_index=0):
        length = len(schedule_list)
        faded_schedule = []
        
        for i in range(length):
            if i < start_index:
                faded_schedule.append(schedule_list[i])
                continue

            if fade_type in ["in", "out"]:
                t = (i - start_index) / max(1, (length - 1 - start_index))
                if fade_type == "in":
                    value = t ** strength
                else:
                    value = ((1 - t) ** strength)
            elif fade_type == "in-and-out":
                midpoint = (length - start_index) // 2 + start_index
                if i <= midpoint:
                    t = (i - start_index) / max(1, (midpoint - start_index))
                    value = t ** strength
                else:
                    t = (i - midpoint) / max(1, (length - 1 - midpoint))
                    value = ((1 - t) ** strength)

            faded_schedule.append(value)
        
        faded_schedule = [original * fade for original, fade in zip(schedule_list, faded_schedule)]

        return (faded_schedule, )

```
