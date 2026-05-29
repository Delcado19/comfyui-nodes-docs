
# Documentation
- Class name: easy XYInputs: Sampler_Scheduler
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to simplify the visualization and comparison process for different sampler and scheduler combinations. It abstracts the complexity of selecting and configuring samplers and schedulers, providing users with a streamlined interface for generating and visualizing the impact of these choices on model performance or output.

# Input types
## Required
- target_parameter
    - Decide whether the focus of visualization and comparison is the sampler or the scheduler. This choice guides the node's processing and output generation, highlighting the impact of the sampler or scheduler on model performance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- input_count
    - Specify the number of samplers or schedulers to consider in the visualization. This allows for a comprehensive comparison across a range of configurations, facilitating a deeper understanding of their effects.
    - Comfy dtype: INT
    - Python dtype: int
- sampler_i
    - Define the specific samplers to include in the comparison. The index 'i' is variable, allowing multiple samplers to be specified and compared simultaneously.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler_i
    - Specify the specific schedulers to include in the comparison. Similar to 'sampler_i', the index 'i' allows multiple schedulers to be included, enabling detailed comparative analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- X or Y
    - Output the comparison results between the selected samplers or schedulers, depending on 'target_parameter'. This helps understand how each choice affects model performance.
    - Comfy dtype: X_Y
    - Python dtype: str
- ui
    - Provide a user interface component for visualizing the effects of different sampler and scheduler combinations, aiding in intuitive comparison and selection of the most suitable configuration.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
