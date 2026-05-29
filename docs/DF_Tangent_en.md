
# Documentation
- Class name: DF_Tangent
- Category: Derfuu_Nodes/Math/Trigonometry
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DF_Tangent node computes the tangent or arctangent of a given value. It provides an option to specify the angular measurement unit (degrees or radians). This functionality enables transformation and analysis of angular data in mathematical and trigonometric calculations.

# Input types
## Required
- value
    - The numerical value for which the tangent or arctangent needs to be computed. This input is essential for determining a specific angle or its tangent value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- type_
    - Specifies the angular measurement unit of the input value, which can be radians (RAD) or degrees (DEG), affecting how the value is interpreted and processed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- arcTan
    - A boolean flag that determines whether to compute the arctangent (True) or tangent (False) of the input value, providing flexibility for trigonometric calculations.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool

# Output types
- float
    - The computed result of the input value, i.e., the tangent or arctangent value, provided as a floating-point number.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
