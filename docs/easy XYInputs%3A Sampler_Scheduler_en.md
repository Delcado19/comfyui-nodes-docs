
# Documentation
- Class name: easy XYInputs: Sampler_Scheduler
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to simplify the visualization and comparison process for different sampler and scheduler combinations. It abstracts the complexity of selecting and configuring samplers and schedulers, providing users with a streamlined interface for generating and visualizing the impact of these choices on model performance or output.

# Input types
## Required
- target_parameter
    - Decide whether the focus of visualization and comparison is the sampler or the scheduler. This choice guides the node's processing and output generation, highlighting the impact of the sampler or scheduler on model performance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- input_count
    - Specify the number of samplers or schedulers to consider in the visualization. This allows for a comprehensive comparison across a range of configurations, facilitating a deeper understanding of their effects.
    - Comfy dtype: INT
    - Python dtype: int
- sampler_i
    - Define the specific samplers to include in the comparison. The index 'i' is variable, allowing multiple samplers to be specified and compared simultaneously.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler_i
    - Specify the specific schedulers to include in the comparison. Similar to 'sampler_i', the index 'i' allows multiple schedulers to be included, enabling detailed comparative analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- X or Y
    - Output the comparison results between the selected samplers or schedulers, depending on 'target_parameter'. This helps understand how each choice affects model performance.
    - Comfy dtype: X_Y
    - Python dtype: str
- ui
    - Provide a user interface component for visualizing the effects of different sampler and scheduler combinations, aiding in intuitive comparison and selection of the most suitable configuration.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYplot_Sampler_Scheduler:
    parameters = ["sampler", "scheduler", "sampler & scheduler"]

    @classmethod
    def INPUT_TYPES(cls):
        samplers = ["None"] + comfy.samplers.KSampler.SAMPLERS
        schedulers = ["None"] + comfy.samplers.KSampler.SCHEDULERS
        inputs = {
            "required": {
                "target_parameter": (cls.parameters,),
                "input_count": ("INT", {"default": 1, "min": 1, "max": 30, "step": 1})
            }
        }
        for i in range(1, 30 + 1):
            inputs["required"][f"sampler_{i}"] = (samplers,)
            inputs["required"][f"scheduler_{i}"] = (schedulers,)

        return inputs

    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, target_parameter, input_count, **kwargs):
        axis, values, = None, None,
        if target_parameter == "scheduler":
            axis = "advanced: Scheduler"
            schedulers = [kwargs.get(f"scheduler_{i}") for i in range(1, input_count + 1)]
            values = [scheduler for scheduler in schedulers if scheduler != "None"]
        elif target_parameter == "sampler":
            axis = "advanced: Sampler"
            samplers = [kwargs.get(f"sampler_{i}") for i in range(1, input_count + 1)]
            values = [sampler for sampler in samplers if sampler != "None"]
        else:
            axis = "advanced: Sampler&Scheduler"
            samplers = [kwargs.get(f"sampler_{i}") for i in range(1, input_count + 1)]
            schedulers = [kwargs.get(f"scheduler_{i}") for i in range(1, input_count + 1)]
            values = []
            for sampler, scheduler in zip(samplers, schedulers):
                sampler = sampler if sampler else 'None'
                scheduler = scheduler if scheduler else 'None'
                values.append(sampler +', '+ scheduler)
        values = "; ".join(values)
        return ({"axis": axis, "values": values},) if values else (None,)

```
