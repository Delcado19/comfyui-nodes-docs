# Documentation
- Class name: KfCurveDraw
- Category: experimental
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node visualizes a given curve by plotting it and generating its image representation. It is designed to abstractly represent trends and fluctuations within the curve's data points, providing a visual analysis tool for understanding the curve's behavior over time.

# Input types
## Required
- curve
    - The curve parameter is essential for the node's operation, as it defines the dataset to be visualized. It contains keyframes representing specific time points, each with a corresponding value.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve
## Optional
- n
    - This parameter determines the number of points plotted on the curve, affecting the granularity of the visualization. It ensures the curve is adequately represented for analysis.
    - Comfy dtype: INT
    - Python dtype: int
- show_legend
    - When enabled, this parameter adds a legend to the chart, providing a reference for each curve and enhancing the clarity of the visualization.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- img_tensor
    - The output is an image tensor representing the plotted curve. It serves as a visual summary of the data, allowing for straightforward interpretation and further processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
