
# Documentation
- Class name: WeightScheduleConvert
- Category: KJNodes
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The WeightScheduleConvert node aims to convert weight schedules to adapt them to different scenarios or needs. This node abstracts the conversion process of weight schedules, focusing on their flexibility and adaptability in various applications.

# Input types
## Required
- input_values
    - Represents the initial value used for conversion, serving as the primary input. It plays a key role in defining the starting point of the conversion process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- output_type
    - Specifies the output format required for the conversion, affecting the structure and format of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- invert
    - A boolean flag to determine whether the input values should be inverted during the conversion process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- repeat
    - Defines the number of times the input values should be repeated in the output, affecting the length and composition of the result.
    - Comfy dtype: INT
    - Python dtype: int

## Optional
- remap_to_frames
    - Optional parameter that allows remapping the output to a specific number of frames, adjusting the conversion to fit a predetermined frame count.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation_curve
    - Optional parameter that specifies the curve used for interpolation during the conversion process, affecting the smoothness and distribution of the output values.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - Outputs the values converted according to the specified format, reflecting the adjustments made during the conversion process.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
