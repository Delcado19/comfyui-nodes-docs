# Documentation
- Class name: KfGetScheduleConditionAtTime
- Category: RootCategory
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node is designed to extract and process condition data from the schedule at a given time point, providing a seamless way to analyze and utilize the scheduling state at that moment.

# Input types
## Required
- schedule
    - The schedule parameter is critical because it contains the structured data and configuration required for the node to determine the state of the conditions at the specified time. It is the primary input driving the node's operation.
    - Comfy dtype: SCHEDULE
    - Python dtype: dict
- time
    - The time parameter is essential, as it indicates the specific time at which the node needs to evaluate the schedule. It directly affects the output by determining which set of conditions will be extracted and processed.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- CONDITIONING
    - The output provides a detailed set of condition data reflecting the state of the schedule at the specified time. It is key information for further analysis and decision-making.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
