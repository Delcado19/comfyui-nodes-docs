
# Documentation
- Class name: easy XYInputs: NegativeCond
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

easy XYInputs: NegativeCond node is designed to handle negative condition inputs for XY plotting. It dynamically generates values and conditions based on the specified negative inputs, helping to create intuitive representations of negative conditions in charts.

# Input types
## Optional
- negative_i
    - Specifies the negative conditions to be considered in the XY plot. It plays an important role in determining the chart's representation of negative conditions, where 'i' can range from 1 to 4, representing up to four negative conditions.
    - Comfy dtype: C
    - Python dtype: str

# Output types
- X or Y
    - Outputs processed XY values and conditions, encapsulating negative conditions into a format suitable for plotting.
    - Comfy dtype: X_Y
    - Python dtype: Dict[str, List]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
