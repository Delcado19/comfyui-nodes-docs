
# Documentation
- Class name: easy XYInputs: Steps
- Category: EasyUse/XY Inputs
- Output node: False

This node aims to simplify the manipulation and visualization of step values, allowing users to easily specify and adjust the step range of operations. It abstracts the complexity of handling step intervals, enabling users to intuitively define and visualize step-based configurations.

# Input types
## Required
- target_parameter
    - Specifies the target parameter that the step value will adjust, such as 'steps', 'start_at_step', or 'end_at_step', affecting how the node calculates and presents step intervals.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_count
    - Determines the number of step values to be generated, influencing the granularity of the presented step intervals.
    - Comfy dtype: INT
    - Python dtype: int
- first_step
    - Starting value of the step range, setting the lower bound for step calculation.
    - Comfy dtype: INT
    - Python dtype: int
- last_step
    - Ending value of the step range, setting the upper bound for step calculation.
    - Comfy dtype: INT
    - Python dtype: int
- first_start_step
    - When 'start_at_step' is the target parameter, specifies the initial step value, defining the start of this specific interval.
    - Comfy dtype: INT
    - Python dtype: int
- last_start_step
    - When 'start_at_step' is the target parameter, specifies the final step value, marking the end of this specific interval.
    - Comfy dtype: INT
    - Python dtype: int
- first_end_step
    - When 'end_at_step' is the target parameter, specifies the initial step value, defining the start of this specific interval.
    - Comfy dtype: INT
    - Python dtype: int
- last_end_step
    - When 'end_at_step' is the target parameter, specifies the final step value, marking the end of this specific interval.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- X or Y
    - Outputs a structured representation of step values within the specified range, facilitating easy visualization and manipulation of steps in a given process.
    - Comfy dtype: X_Y
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYplot_Steps:
    parameters = ["steps", "start_at_step", "end_at_step",]

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "target_parameter": (cls.parameters,),
                "batch_count": ("INT", {"default": 3, "min": 0, "max": 50}),
                "first_step": ("INT", {"default": 10, "min": 1, "max": 10000}),
                "last_step": ("INT", {"default": 20, "min": 1, "max": 10000}),
                "first_start_step": ("INT", {"default": 0, "min": 0, "max": 10000}),
                "last_start_step": ("INT", {"default": 10, "min": 0, "max": 10000}),
                "first_end_step": ("INT", {"default": 10, "min": 0, "max": 10000}),
                "last_end_step": ("INT", {"default": 20, "min": 0, "max": 10000}),
            }
        }

    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, target_parameter, batch_count, first_step, last_step, first_start_step, last_start_step,
                 first_end_step, last_end_step,):

        axis, xy_first, xy_last = None, None, None

        if target_parameter == "steps":
            axis = "advanced: Steps"
            xy_first = first_step
            xy_last = last_step
        elif target_parameter == "start_at_step":
            axis = "advanced: StartStep"
            xy_first = first_start_step
            xy_last = last_start_step
        elif target_parameter == "end_at_step":
            axis = "advanced: EndStep"
            xy_first = first_end_step
            xy_last = last_end_step

        values = generate_ints(batch_count, xy_first, xy_last)
        return ({"axis": axis, "values": values},) if values is not None else (None,)

```
