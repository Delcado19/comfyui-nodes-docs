
# Documentation
- Class name: SaltScheduleConverter
- Category: SALT/Scheduling
- Output node: False

The SaltScheduleConverter node is designed to convert a schedule list into a format compatible with various modules. It ensures interoperability with modules requiring specific numeric types by converting the list input into floating-point numbers.

# Input types
## Required
- schedule_list
    - The schedule_list parameter is a list of values to be converted. It plays a key role in determining the output format and type, affecting compatibility with other modules.
    - Comfy dtype: LIST
    - Python dtype: List[float]

# Output types
- floats
    - A list of the original floating-point values from the input schedule list, preserving the original numeric format.
    - Comfy dtype: FLOATS
    - Python dtype: List[float]
- float
    - A copy of the original floating-point list, serving as an alternative format for compatibility.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- int
    - An integer list obtained by rounding the original schedule list values, tailored for modules requiring integer input.
    - Comfy dtype: INT
    - Python dtype: List[int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltScheduleConverter:
    """
        Converts a LIST input to FLOATS or FLOAT type
        Makes schedule lists compatible with MTB, IPAdapter, and other modules that use false types.
    """
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "schedule_list": ("LIST",)
            },
        }
    
    RETURN_TYPES = ("FLOATS", "FLOAT", "INT")
    RETURN_NAMES = ("floats", "float", "int")
    FUNCTION = "convert"
    CATEGORY = "SALT/Scheduling"

    def convert(self, schedule_list):
        int_schedule = [int(round(val)) for val in schedule_list]
        return (schedule_list, schedule_list, int_schedule)

```
