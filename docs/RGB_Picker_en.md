# Documentation
- Class name: RGB_Picker
- Category: 😺dzNodes/WordCloud
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_WordCloud.git

The RGB_Picker node facilitates color value conversion and selection. It handles color inputs in various formats, focusing on providing users with flexibility in working with colors in both hexadecimal and decimal representations.

# Input types
## Required
- color
    - The 'color' parameter is required as it defines the initial color input for the node's operation. It serves as the foundation for all subsequent color conversions and is critical in determining the final output.
    - Comfy dtype: COLOR
    - Python dtype: str
## Optional
- mode
    - The 'mode' parameter determines the conversion process for the color input. It affects how the color is interpreted and the resulting output format, enhancing the node's adaptability to different color representation requirements.
    - Comfy dtype: COMBO[mode_list]
    - Python dtype: str

# Output types
- value
    - The 'value' output represents the processed color in the desired format, encompassing the node's primary functionality of color conversion and selection.
    - Comfy dtype: STRING
    - Python dtype: tuple

# Usage tips
- Infra type: CPU

# Source code
```
class RGB_Picker:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {'required': {'color': ('COLOR', {'default': 'white'}), 'mode': (mode_list,)}, 'optional': {}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('value',)
    FUNCTION = 'picker'
    CATEGORY = '😺dzNodes/WordCloud'
    OUTPUT_NODE = True

    def picker(self, color, mode):
        ret = color
        if mode == 'DEC':
            ret = hex_to_dec(color)
        return (ret,)
```