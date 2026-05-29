
# Documentation
- Class name: SaltScheduleRandomValues
- Category: SALT/Scheduling
- Output node: False

This node is designed to generate a list of random values within a specified range, with the option to force the values to be integers. It is useful for creating randomized schedules or sequences that require variability.

# Input types
## Required
- count
    - Specify the number of random values to generate, which determines the length of the output list.
    - Comfy dtype: INT
    - Python dtype: int
- min_value
    - Define the minimum value that can be generated, setting the lower bound of the random range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_value
    - Set the upper bound of the random values, establishing the maximum possible value within the range.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- force_integer
    - Determine whether the generated random values should be integers, adding a layer of control over the output data type.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- schedule_list
    - The generated list of random values, conforming to the specified constraints and data type.
    - Comfy dtype: LIST
    - Python dtype: List[float] or List[int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltScheduleRandomValues:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "count": ("INT", {"min": 1}),
                "min_value": ("FLOAT", {}),
                "max_value": ("FLOAT", {}),
            },
            "optional": {
                "force_integer": ("BOOLEAN", {"default": False}),
            },
        }

    RETURN_TYPES = ("LIST",)
    RETURN_NAMES = ("schedule_list", )
    FUNCTION = "generate_random"
    CATEGORY = "SALT/Scheduling"

    def generate_random(self, count, min_value, max_value, force_integer=False):
        if min_value >= max_value:
            raise ValueError("Schedule min_value must be less than max_value.")
        
        output_type = int if force_integer or (isinstance(min_value, int) and isinstance(max_value, int)) else float
        
        if output_type == int:
            random_schedule = [random.randint(int(min_value), int(max_value)) for _ in range(count)]
        else:
            random_schedule = [random.uniform(min_value, max_value) for _ in range(count)]

        return (random_schedule, )

```
