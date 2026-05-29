
# Documentation
- Class name: XY Input: Aesthetic Score
- Category: Efficiency Nodes/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node generates aesthetic score values for XY plots, enabling users to visualize and analyze the aesthetic quality of images or outputs based on specified criteria. It supports both positive and negative aesthetic scores, allowing for a comprehensive evaluation of aesthetic attributes.

# Input types
## Required
- target_ascore
    - Specify the target aesthetic score type, which can be "positive" or "negative", used to determine the nature of the aesthetic evaluation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_count
    - Determine the number of aesthetic score values to generate, facilitating batch processing for efficiency and scalability.
    - Comfy dtype: INT
    - Python dtype: int
- first_ascore
    - Set the starting point of the aesthetic score range, allowing customization of the evaluation range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_ascore
    - Define the endpoint of the aesthetic score range, enabling precise control of the evaluation interval.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- X or Y
    - Output the generated aesthetic score values, categorized as "AScore+" (positive) or "AScore-" (negative), suitable for XY plots.
    - Comfy dtype: XY
    - Python dtype: Tuple[str, List[float]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_XYplot_AScore:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "target_ascore": (["positive", "negative"],),
                "batch_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM}),
                "first_ascore": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1000.0, "step": 0.01}),
                "last_ascore": ("FLOAT", {"default": 10.0, "min": 0.0, "max": 1000.0, "step": 0.01}),
            }
        }

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def xy_value(self, target_ascore, batch_count, first_ascore, last_ascore):
        if target_ascore == "positive":
            xy_type = "AScore+"
        else:
            xy_type = "AScore-"
        xy_value = generate_floats(batch_count, first_ascore, last_ascore)
        return ((xy_type, xy_value),) if xy_value else (None,)

```
