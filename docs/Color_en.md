# Documentation
- Class name: ColorInput
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node facilitates processing and extracting input color information, providing detailed analysis of color components in a structured format.

# Input types
## Required
- color
    - The color parameter is essential for the node's operation, as it serves as the primary data source for color analysis.
    - Comfy dtype: TCOLOR
    - Python dtype: Dict[str, Union[str, int]]

# Output types
- hex
    - The hex output represents the hexadecimal color code, a standard representation in web and graphic design.
    - Comfy dtype: STRING
    - Python dtype: str
- r
    - The r output represents the red component of the color, contributing to overall hue and saturation.
    - Comfy dtype: INT
    - Python dtype: int
- g
    - The g output represents the green component, affecting the mid-tones of the color.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - The b output corresponds to the blue component, influencing the coolness or warmth of the color.
    - Comfy dtype: INT
    - Python dtype: int
- a
    - The a output represents the alpha channel, indicating the transparency level of the color.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class ColorInput:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'color': ('TCOLOR',)}}
    RETURN_TYPES = ('STRING', 'INT', 'INT', 'INT', 'FLOAT')
    RETURN_NAMES = ('hex', 'r', 'g', 'b', 'a')
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False, False, False, False, False)

    def run(self, color):
        h = color['hex']
        r = color['r']
        g = color['g']
        b = color['b']
        a = color['a']
        return (h, r, g, b, a)
```