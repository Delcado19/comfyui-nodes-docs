# Documentation
- Class name: KfDrawSchedule
- Category: RootCategory
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node aims to visualize the schedule defined in keyframed, abstracting the complex scheduling process into an easy-to-understand graphical representation. It converts the schedule into a series of weight curves, each curve corresponding to the contribution of a keyframe, facilitating analysis and understanding of the scheduling dynamics.

# Input types
## Required
- schedule
    - The scheduling parameter is crucial because it defines the keyframed curves and their related parameters that will be visualized by the node. It is the main input for generating the weight curves and the resulting graph.
    - Comfy dtype: SCHEDULE
    - Python dtype: kf.Keyframed
## Optional
- n
    - The parameter 'n' is very important for determining the resolution of the graph. It affects the number of points sampled from the curves, which can influence the clarity and detail of the visualization.
    - Comfy dtype: INT
    - Python dtype: int
- show_legend
    - The parameter 'show_legend' controls whether to display a legend on the graph. This helps to distinguish between different weight curves and understand their respective contributions to the overall schedule.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- img_tensor
    - The output img_tensor represents the visualization graph of the input schedule as a result of plotting. It encapsulates the weight curves and their dynamics, providing a clear and concise graphical summary of the scheduling process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class KfDrawSchedule:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('IMAGE',)

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'schedule': ('SCHEDULE', {'forceInput': True}), 'n': ('INT', {'default': 64}), 'show_legend': ('BOOLEAN', {'default': True})}}

    def main(self, schedule, n, show_legend):
        curves = schedule_to_weight_curves(schedule)
        img_tensor = plot_curve(curves, n, show_legend, is_pgroup=True)
        return (img_tensor,)
```