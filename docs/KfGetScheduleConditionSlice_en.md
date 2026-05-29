# Documentation
- Class name: KfGetScheduleConditionSlice
- Category: RootCategory
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node is designed to extract and process conditional data from a given schedule for a specified time interval. It divides the schedule into a series of time slices, evaluates the conditions of each slice, and aggregates the results to provide a comprehensive overview of the conditions over the specified time span.

# Input types
## Required
- schedule
    - The schedule parameter is crucial because it contains structured data that defines conditions over time. It is the primary input parameter and determines the node's operation and the quality of its output.
    - Comfy dtype: SCHEDULE
    - Python dtype: dict
## Optional
- start
    - The start parameter specifies the beginning of the time interval for the node to process the schedule. It is important because it sets the starting point for the time slicing operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- step
    - The step parameter defines the interval between each time slice. It is important because it affects the granularity of the extracted condition data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- n
    - The n parameter determines how many time slices the schedule is divided into. It is critical because it determines the number of individual evaluations performed by the node.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- CONDITIONING
    - The output provides a detailed and structured representation of the conditions extracted from the schedule over the specified time interval. It is important because it contains the results of the node's operation.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: CPU

# Source code
```
class KfGetScheduleConditionSlice:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('CONDITIONING',)

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'schedule': ('SCHEDULE', {}), 'start': ('FLOAT', {'default': 0}), 'step': ('FLOAT', {'default': 1}), 'n': ('INT', {'default': 24})}}

    def main(self, schedule, start, step, n):
        stop = start + n * step
        times = np.linspace(start=start, stop=stop, num=n, endpoint=True)
        conds = [evaluate_schedule_at_time(schedule, time)[0] for time in times]
        lerped_tokenized = [c[0] for c in conds]
        lerped_pooled = [c[1]['pooled_output'] for c in conds]
        lerped_tokenized_t = torch.cat(lerped_tokenized, dim=0)
        out_dict = deepcopy(conds[0][1])
        if isinstance(lerped_pooled[0], torch.Tensor) and isinstance(lerped_pooled[-1], torch.Tensor):
            out_dict['pooled_output'] = torch.cat(lerped_pooled, dim=0)
        return [[(lerped_tokenized_t, out_dict)]]
```