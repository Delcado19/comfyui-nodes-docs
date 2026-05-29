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
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
