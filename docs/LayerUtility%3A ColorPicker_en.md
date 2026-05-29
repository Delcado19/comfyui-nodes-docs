# Documentation
- Class name: ColorPicker
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Select a color on the color swatch and output it. Modified from the web extensions of mtb nodes, thanks to the original author.

# Input types

## Required

- color
    - Input color.
    - Comfy dtype: COLOR
    - Python dtype: str
    - Options: {"default": "#FFFFFF"}

- mode
    - Output mode
    - Comfy dtype: STRING
    - Python dtype: str
    - Options: ['HEX', 'DEC']

# Output types

- value
    - Output color.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
```
class ColorPicker:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        mode_list = ['HEX', 'DEC']
        return {
            "required": {
                "color": ("COLOR", {"default": "#FFFFFF"},),
                "mode": (mode_list,),  # 输出模式
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("value",)
    FUNCTION = 'picker'
    CATEGORY = '😺dzNodes/LayerUtility'

    def picker(self, color, mode):
        ret = color
        if mode == 'DEC':
            ret = Hex_to_RGB(ret)
        return (ret,)
```