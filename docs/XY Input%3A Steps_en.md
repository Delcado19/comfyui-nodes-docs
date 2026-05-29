
# Documentation
- Class name: XY Input: Steps
- Category: Efficiency Nodes/XY Inputs
- Output node: False

XY Input: Steps node is used to generate value sequences based on specified step parameters, suitable for batch or iterative operations. It simplifies the complexity of step sequence generation, facilitating efficient data processing and visualization in XY plots.

# Input types
## Required
- target_parameter
    - Specifies the target parameter used to generate step values, affecting the sequence generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_count
    - Determines the number of values to generate, directly affecting the length of the output sequence.
    - Comfy dtype: INT
    - Python dtype: int
- first_step
    - The starting value of the step sequence, setting the initial point of generation.
    - Comfy dtype: INT
    - Python dtype: int
- last_step
    - The ending value of the step sequence, defining the final point of the generated sequence.
    - Comfy dtype: INT
    - Python dtype: int
- first_start_step
    - Defines the initial step value of the start_at_step parameter, affecting the starting point of the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- last_start_step
    - Specifies the final step value of the start_at_step parameter, affecting the starting point of the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- first_end_step
    - Sets the initial step value of the end_at_step parameter, affecting the termination point of the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- last_end_step
    - Determines the final step value of the end_at_step parameter, defining the end point of the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- first_refine_step
    - Represents the initial step value of the refine_at_step parameter, affecting the refined starting point of the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- last_refine_step
    - Specifies the final step value of the refine_at_step parameter, affecting the refined end point of the sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- X or Y
    - Contains a tuple of the generated step sequence type (X or Y) and the sequence itself, facilitating further processing or visualization.
    - Comfy dtype: XY
    - Python dtype: Tuple[str, List[int]]


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [XY Plot](../../efficiency-nodes-comfyui/Nodes/XY Plot.md)



## Source code
```python
class TSC_XYplot_Steps:
    parameters = ["steps","start_at_step", "end_at_step", "refine_at_step"]
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "target_parameter": (cls.parameters,),
                "batch_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM}),
                "first_step": ("INT", {"default": 10, "min": 1, "max": 10000}),
                "last_step": ("INT", {"default": 20, "min": 1, "max": 10000}),
                "first_start_step": ("INT", {"default": 0, "min": 0, "max": 10000}),
                "last_start_step": ("INT", {"default": 10, "min": 0, "max": 10000}),
                "first_end_step": ("INT", {"default": 10, "min": 0, "max": 10000}),
                "last_end_step": ("INT", {"default": 20, "min": 0, "max": 10000}),
                "first_refine_step": ("INT", {"default": 10, "min": 0, "max": 10000}),
                "last_refine_step": ("INT", {"default": 20, "min": 0, "max": 10000}),
            }
        }

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def xy_value(self, target_parameter, batch_count, first_step, last_step, first_start_step, last_start_step,
                 first_end_step, last_end_step, first_refine_step, last_refine_step):

        if target_parameter == "steps":
            xy_type = "Steps"
            xy_first = first_step
            xy_last = last_step
        elif target_parameter == "start_at_step":
            xy_type = "StartStep"
            xy_first = first_start_step
            xy_last = last_start_step
        elif target_parameter == "end_at_step":
            xy_type = "EndStep"
            xy_first = first_end_step
            xy_last = last_end_step
        elif target_parameter == "refine_at_step":
            xy_type = "RefineStep"
            xy_first = first_refine_step
            xy_last = last_refine_step

        xy_value = generate_ints(batch_count, xy_first, xy_last)
        return ((xy_type, xy_value),) if xy_value else (None,)

```
