
# Documentation
- Class name: SaltScheduleSmoothing
- Category: SALT/Scheduling/Filter
- Output node: False

SaltScheduleSmoothing node aims to apply a smoothing filter to the schedule list, using the specified smoothing factor to blend consecutive values. The goal of this process is to create more gradual transitions between points in the schedule, thus increasing the smoothness of the entire sequence.

# Input types
## Required
- schedule_list
    - schedule_list is the sequence of values to be smoothed. It serves as the main data source for the smoothing operation, directly affecting the smoothness of the final schedule.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- smoothing_factor
    - smoothing_factor determines the degree of smoothing applied to the schedule list. A higher factor results in smoother transitions between points, directly affecting the smoothness of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- schedule_list
    - The output is a smoothed version of the input schedule list, with more gradual transitions between points achieved through the smoothing process.
    - Comfy dtype: LIST
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltScheduleSmoothing:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "schedule_list": ("LIST", ),
                "smoothing_factor": ("FLOAT", {"min": 0.0, "max": 1.0, "default": 0.5}),
            },
        }

    RETURN_TYPES = ("LIST",)
    RETURN_NAMES = ("schedule_list", )
    FUNCTION = "smooth"
    CATEGORY = "SALT/Scheduling/Filter"

    def smooth(self, schedule_list, smoothing_factor):
        smoothed_schedule = schedule_list[:]
        for i in range(1, len(schedule_list)):
            smoothed_schedule[i] = smoothed_schedule[i-1] * (1 - smoothing_factor) + schedule_list[i] * smoothing_factor
        return (smoothed_schedule, )

```
