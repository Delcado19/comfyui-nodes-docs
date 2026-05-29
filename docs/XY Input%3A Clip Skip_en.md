
# Documentation
- Class name: XY Input: Clip Skip
- Category: Efficiency Nodes/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

XY Input: The Clip Skip node is specifically used to process and validate clip skip values for generating XY plots. Its main function is to adjust clip skip values within a specified range and ensure these values are applicable to the target checkpoint ("Base" or "Refiner"). This node optimizes the generation process by fine-tuning the clip skip parameter, which is crucial for controlling the granularity of the chart data.

# Input types
## Required
- target_ckpt
    - Specify the target checkpoint for adjusting clip skip values. It determines the context ("Base" or "Refiner") in which clip skip values are applied, thereby affecting the output precision of the XY plot.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[str]
- batch_count
    - Define the batch size for generating clip skip values. This affects the amount of data processed and the level of detail in the final XY plot.
    - Comfy dtype: INT
    - Python dtype: int
- first_clip_skip
    - The start of the clip skip range. It sets the lower limit for clip skip adjustment, affecting the level of detail in the chart.
    - Comfy dtype: INT
    - Python dtype: int
- last_clip_skip
    - The end of the clip skip range. It sets the upper limit for clip skip adjustment, affecting the level of detail in the chart.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- X or Y
    - Output data for the XY plot, containing processed and validated clip skip values. This data is directly used to generate the final XY plot.
    - Comfy dtype: XY
    - Python dtype: unknown


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
