
# Documentation
- Class name: BuildColorRangeHSV (hsv)
- Category: Bmad/CV/Color A.
- Output node: False
- Repo Ref: https://github.com/Suzie1/ComfyUI_Bmad_nodes/blob/main/nodes/color_nodes_a.py

BuildColorRangeHSV (hsv) node builds an HSV (hue, saturation, value) color range based on given samples and modifiers. It dynamically adjusts color boundaries and determines the hue adjustment mode needed to construct an accurate color range.

# Input types
## Required
- samples
- Represents HSV color samples used to derive the color range. These samples are essential for determining the median or average when constructing the range.
    - Comfy dtype: HSV_SAMPLES
    - Python dtype: HSV_Samples
- percentage_modifier
- Modifier that affects the size of the color range. It adjusts boundaries by percentage, influencing the final range width.
    - Comfy dtype: INT
    - Python dtype: int
- interval_type
- Specifies the method used to calculate the color range interval. This choice determines how boundaries are adjusted, affecting the final range.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- hsv_color
- Output is a tuple containing the lower and upper bounds of the adjusted HSV color range.
    - Comfy dtype: HSV_COLOR
    - Python dtype: Tuple[Tuple[int, int, int], Tuple[int, int, int]]
- combo[string]
- Indicates the hue mode determined for range construction, which affects how hue is handled within the color range.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Suzie1/ComfyUI_Bmad_nodes/blob/main/nodes/color_nodes_a.py)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
