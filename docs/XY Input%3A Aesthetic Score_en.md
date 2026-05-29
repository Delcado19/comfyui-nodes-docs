
# Documentation
- Class name: XY Input: Aesthetic Score
- Category: Efficiency Nodes/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node generates aesthetic score values for XY plots, enabling users to visualize and analyze the aesthetic quality of images or outputs based on specified criteria. It supports both positive and negative aesthetic scores, allowing for a comprehensive evaluation of aesthetic attributes.

# Input types
## Required
- target_ascore
    - Specify the target aesthetic score type, which can be "positive" or "negative", used to determine the nature of the aesthetic evaluation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_count
    - Determine the number of aesthetic score values to generate, facilitating batch processing for efficiency and scalability.
    - Comfy dtype: INT
    - Python dtype: int
- first_ascore
    - Set the starting point of the aesthetic score range, allowing customization of the evaluation range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_ascore
    - Define the endpoint of the aesthetic score range, enabling precise control of the evaluation interval.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- X or Y
    - Output the generated aesthetic score values, categorized as "AScore+" (positive) or "AScore-" (negative), suitable for XY plots.
    - Comfy dtype: XY
    - Python dtype: Tuple[str, List[float]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
