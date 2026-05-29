# Documentation
- Class name: GetColorTone
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Get the main color or average color from the image.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mode
    - Modes, two options: main color main_color and average color average.
    - Comfy dtype: STRING
    - Python dtype: str
    - Optional values: 'average', 'main'


# Output types

- RGB color in HEX
    - Described using hexadecimal RGB string format, e.g. '#FA3D86'.
    - Comfy dtype: STRING
    - Python dtype: str

- HSV color in list
    - Color described using HSV format.
    - Comfy dtype: LIST
    - Python dtype: list

# Usage tips
- Infra type: GPU

# Source code
```
class GetColorTone:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        mode_list = ['main_color', 'average']
        return {
            "required": {
                "image": ("IMAGE", ),  #
                "mode": (mode_list,),  # 主色/平均色
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("STRING", "LIST")
    RETURN_NAMES = ("RGB color in HEX", "HSV color in list")
    FUNCTION = 'get_color_tone'
    CATEGORY = '😺dzNodes/LayerUtility'

    def get_color_tone(self, image, mode,):
        if image.shape[0] > 0:
            image = torch.unsqueeze(image[0], 0)
        _canvas = tensor2pil(image).convert('RGB')
        _canvas = gaussian_blur(_canvas, int((_canvas.width + _canvas.height) / 200))
        if mode == 'main_color':
            ret_color = get_image_color_tone(_canvas)
        else:
            ret_color = get_image_color_average(_canvas)
        hsv_color = RGB_to_HSV(Hex_to_RGB(ret_color))

        return (ret_color, hsv_color)
```