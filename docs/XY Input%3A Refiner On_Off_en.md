
# Documentation
- Class name: XY Input: Refiner On_Off
- Category: Efficiency Nodes/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node refines the input of an XY plot according to a specified percentage, enabling dynamic adjustment of the refinement process in data visualization or processing tasks to optimize efficiency and accuracy.

# Input types
## Required
- refine_at_percent
- Specify the percentage at which the refinement process starts, allowing precise control over when to apply refinement adjustments to the XY plot.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- X or Y
- Output a tuple containing the refinement type ('Refiner On/Off') and the corresponding XY values after refinement at the specified percentage. This output matches the expected 'X or Y' identifier, indicating that the X or Y value has been refined.
    - Comfy dtype: XY
    - Python dtype: Tuple[str, List[float]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
