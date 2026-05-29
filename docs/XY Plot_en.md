
# Documentation
- Class name: XY Plot
- Category: Efficiency Nodes/Scripts
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The XY Plot node is designed to generate and manipulate XY charts based on various parameters and conditions. It supports multiple operations such as flipping axes, adjusting label orientation, caching models, and handling unique identifiers for chart generation. This node is flexible in processing and visualizing data in a structured XY chart format, adapting to different chart inputs and configurations.

# Input types
## Required
- grid_spacing
    - Specifies the spacing between grid lines in the chart, affecting the granularity and visual density of the chart.
    - Comfy dtype: INT
    - Python dtype: int
- XY_flip
    - A boolean parameter that determines whether to flip the X and Y axes, thereby changing the chart orientation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- Y_label_orientation
    - Controls the orientation of Y-axis labels, enhancing readability based on the chart's layout and presentation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cache_models
    - Indicates whether to cache model data for efficiency, reducing load time when generating charts repeatedly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- ksampler_output_image
    - Output image from a ksampler, used as a reference or base for the XY chart.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- dependencies
    - Optional dependencies required for chart generation, such as additional data sources or configurations.
    - Comfy dtype: DEPENDENCIES
    - Python dtype: Dict[str, Any]
- X
    - X-axis values or data points of the chart, if connected they can be unpacked as a tuple.
    - Comfy dtype: XY
    - Python dtype: Tuple[float, ...]
- Y
    - Y-axis values or data points of the chart, similar to X, if connected they can be unpacked as a tuple.
    - Comfy dtype: XY
    - Python dtype: Tuple[float, ...]

# Output types
- SCRIPT
    - Returns a dictionary containing XY chart script configuration, including chart parameters and data points.
    - Comfy dtype: SCRIPT
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [KSampler SDXL (Eff.)](../../efficiency-nodes-comfyui/Nodes/KSampler SDXL (Eff.).md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
