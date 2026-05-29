
# Documentation
- Class name: XY Input: Sampler_Scheduler
- Category: Efficiency Nodes/XY Inputs
- Output node: False

This node handles and validates the combination of sampler and scheduler used for generating models. It ensures the provided sampler and scheduler names are valid and compatible, and may adjust them according to predefined constraints to optimize the sampling process.

# Input types
## Required
- target_parameter
    - Specifies the target parameters of the sampling or scheduling process, indicating the specific aspects that need optimization or adjustment in the generation model operation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- input_count
    - Indicates the number of inputs to be processed, reflecting the amount of data or parameters the node will handle when optimizing sampling or scheduling.
    - Comfy dtype: INT
    - Python dtype: int
- sampler_i
    - Specifies the index of the sampler to use, playing a key role in determining the sampling strategy and its compatibility with the scheduler.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: int
- scheduler_i
    - Defines the index of the scheduler to use with the sampler, dynamically adjusting sampling parameters to achieve efficient generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: int

# Output types
- X or Y
    - The result of the processing, possibly optimized parameter values (X) or decision metrics (Y), ensuring the sampler and scheduler are effectively paired.
    - Comfy dtype: XY
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_XYplot_Sampler_Scheduler:
    parameters = ["sampler", "scheduler", "sampler & scheduler"]

    @classmethod
    def INPUT_TYPES(cls):
        samplers = ["None"] + comfy.samplers.KSampler.SAMPLERS
        schedulers = ["None"] + comfy.samplers.KSampler.SCHEDULERS
        inputs = {
            "required": {
                "target_parameter": (cls.parameters,),
                "input_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM, "step": 1})
            }
        }
        for i in range(1, XYPLOT_LIM+1):
            inputs["required"][f"sampler_{i}"] = (samplers,)
            inputs["required"][f"scheduler_{i}"] = (schedulers,)

        return inputs

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def xy_value(self, target_parameter, input_count, **kwargs):
        if target_parameter == "scheduler":
            xy_type = "Scheduler"
            schedulers = [kwargs.get(f"scheduler_{i}") for i in range(1, input_count + 1)]
            xy_value = [scheduler for scheduler in schedulers if scheduler != "None"]
        elif target_parameter == "sampler":
            xy_type = "Sampler"
            samplers = [kwargs.get(f"sampler_{i}") for i in range(1, input_count + 1)]
            xy_value = [(sampler, None) for sampler in samplers if sampler != "None"]
        else:
            xy_type = "Sampler"
            samplers = [kwargs.get(f"sampler_{i}") for i in range(1, input_count + 1)]
            schedulers = [kwargs.get(f"scheduler_{i}") for i in range(1, input_count + 1)]
            xy_value = [(sampler, scheduler if scheduler != "None" else None) for sampler,
            scheduler in zip(samplers, schedulers) if sampler != "None"]

        return ((xy_type, xy_value),) if xy_value else (None,)

```
