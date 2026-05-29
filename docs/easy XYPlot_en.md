# Documentation
- Class name: pipeXYPlot
- Category: EasyUse/Pipe
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The pipeXYPlot node aims to simplify the process of generating and managing XY plots, providing users with a streamlined interface to visualize data relationships. It focuses on delivering a user-friendly experience, enabling the creation of charts with various customization options even without extensive technical knowledge.

# Input types
## Required
- grid_spacing
    - Grid spacing is a critical parameter that determines the resolution of the chart. It affects the granularity of the visualization, with higher values resulting in a coarser representation, while lower values provide finer detail.
    - Comfy dtype: INT
    - Python dtype: int
- output_individuals
    - Output individual parameters allow users to control whether each data point is plotted separately. This can significantly impact chart clarity, especially when working with large datasets.
    - Comfy dtype: BOOL
    - Python dtype: bool
- flip_xy
    - Enabling flip XY allows users to reverse the axes of the chart, which is useful for aligning data according to specific conventions or for better visual representation.
    - Comfy dtype: BOOL
    - Python dtype: bool
- x_axis
    - The x_axis parameter is essential for defining the horizontal axis of the chart. It determines the categories or variables used to represent x values, shaping the overall structure of the chart.
    - Comfy dtype: COMBO
    - Python dtype: str
- x_values
    - X values are crucial for chart construction as they provide the data points for the x-axis. Correct input of these values ensures the accuracy and relevance of the chart representation.
    - Comfy dtype: STRING
    - Python dtype: str
- y_axis
    - The y_axis parameter is essential for defining the vertical axis of the chart. It specifies the categories or variables used to represent y values, influencing the overall interpretation of the data.
    - Comfy dtype: COMBO
    - Python dtype: str
- y_values
    - Y values are critical for plotting as they represent the data points on the y-axis. Accurate input of these values is necessary for a true reflection of the data in the chart.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pipe
    - The output named 'pipe' is a comprehensive structure containing the entire chart configuration, including axes, values, and other settings. It serves as the channel for the visualization process, ensuring the chart is generated according to user specifications.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
