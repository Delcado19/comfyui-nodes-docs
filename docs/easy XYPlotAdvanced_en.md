# Documentation
- Class name: pipeXYPlotAdvanced
- Category: EasyUse/Pipe
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node provides advanced XY plotting capabilities, specifically designed to meet the needs of pipeline lines. It integrates with various data types and settings to generate visual charts, offering insights into data structures and relationships within the pipeline. The node's design emphasizes adaptability and ease of use, ensuring users can quickly generate meaningful visualizations without extensive configuration.

# Input types
## Required
- pipe
    - The 'pipe' parameter is the backbone of this node, representing the pipeline line from which data is extracted and visualized. It is essential to the node's operation, as it contains all necessary information and settings required for plotting.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- grid_spacing
    - The 'grid_spacing' parameter determines the spacing between grid lines in the chart, affecting the overall clarity and readability of the visualization. It plays a significant role in presenting data points and trends in an easily understandable manner.
    - Comfy dtype: INT
    - Python dtype: int
- output_individuals
    - The 'output_individuals' parameter allows users to control whether individual data points are displayed separately in the chart. This is important for analyzing specific data points and their relationships within the dataset.
    - Comfy dtype: BOOL
    - Python dtype: bool
- flip_xy
    - The 'flip_xy' parameter allows users to flip the X and Y axes, which is useful in certain data visualization scenarios, especially when the traditional orientation is not optimal.
    - Comfy dtype: BOOL
    - Python dtype: bool
## Optional
- X
    - The 'X' parameter represents the configuration of the X-axis, including axis labels and associated values. It is critical for defining the horizontal dimension of the chart and can be customized through various models and settings.
    - Comfy dtype: X_Y
    - Python dtype: Dict
- Y
    - The 'Y' parameter corresponds to the configuration of the Y-axis, specifying axis labels and corresponding values. It is essential for establishing the vertical dimension of the chart and can be adjusted through different models and settings.
    - Comfy dtype: X_Y
    - Python dtype: Dict

# Output types
- pipe
    - The 'pipe' output is an updated version of the input 'pipe', now containing the generated XY chart information. It represents the progression of the pipeline, reintegrating the visualization results into the data flow for further analysis or processing.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
