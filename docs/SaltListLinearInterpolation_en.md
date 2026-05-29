
# Documentation
- Class name: SaltListLinearInterpolation
- Category: SALT/Scheduling/Filter
- Output node: False

The SaltListLinearInterpolation node is designed to perform linear interpolation between two schedule value lists based on a specified interpolation factor. This node is essential for creating smooth transitions between different states or values in a schedule, generating intermediate states that blend the characteristics of the input schedules.

# Input types
## Required
- schedule_list_a
    - The first schedule value list used for interpolation. It serves as the starting point of the interpolation process.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- schedule_list_b
    - The second schedule value list used for interpolation. It serves as the target endpoint of the interpolation process.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- interpolation_factor
    - A floating-point value between 0.0 and 1.0 that determines the weight of each input list in the interpolated output. A factor of 0.0 yields the first list, while 1.0 yields the second list.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- schedule_list
    - The resulting interpolated schedule value list, blending the input lists according to the interpolation factor.
    - Comfy dtype: LIST
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltListLinearInterpolation:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "schedule_list_a": ("LIST", ),
                "schedule_list_b": ("LIST", ),
                "interpolation_factor": ("FLOAT", {"min": 0.0, "max": 1.0}),
            },
        }

    RETURN_TYPES = ("LIST",)
    RETURN_NAMES = ("schedule_list",)
    FUNCTION = "lerp"
    CATEGORY = "SALT/Scheduling/Filter"

    def lerp(self, schedule_list_a, schedule_list_b, interpolation_factor):
        if len(schedule_list_a) != len(schedule_list_b):
            raise ValueError("Schedule lists must have the same length.")
        
        interpolated_list = []
        
        for a, b in zip(schedule_list_a, schedule_list_b):
            interpolated_value = (1 - interpolation_factor) * a + interpolation_factor * b
            interpolated_list.append(interpolated_value)

        return (interpolated_list, )

```
