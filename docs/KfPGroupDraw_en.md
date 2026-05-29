# Documentation
- Class name: KfPGroupDraw
- Category: experimental
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node visualizes a set of parameter groups as a curve graph, enabling the analysis of parameter changes over time or other variables. Its purpose is to provide a graphical representation of parameter evolution, which is crucial for understanding the dynamics of the modeled system.

# Input types
## Required
- parameter_group
    - This parameter holds a collection of parameter groups whose dynamics will be visualized. It is crucial because it forms the basis of the node's operation, determining the data plotted and how the visualization represents the system's behavior.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: Dict[str, Any]
## Optional
- n
    - This parameter specifies the number of points for evaluating the curve. It affects the resolution of the chart; higher values can lead to a smoother representation of parameter evolution.
    - Comfy dtype: INT
    - Python dtype: int
- show_legend
    - This parameter controls whether a legend is displayed in the chart. It is important for identifying different curves when visualizing multiple parameter groups.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- img_tensor
    - The output is a tensor representing the curve graph image, which provides a visual summary of parameter evolution over the specified range.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class KfPGroupDraw:
    CATEGORY = f'{CATEGORY}/experimental'
    FUNCTION = 'main'
    RETURN_TYPES = ('IMAGE',)

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'parameter_group': ('PARAMETER_GROUP', {'forceInput': True}), 'n': ('INT', {'default': 64}), 'show_legend': ('BOOLEAN', {'default': True})}}

    def main(self, parameter_group, n, show_legend):
        img_tensor = plot_curve(parameter_group, n, show_legend, is_pgroup=True)
        return (img_tensor,)
```