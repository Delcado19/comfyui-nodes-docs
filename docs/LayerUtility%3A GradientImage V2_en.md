# Documentation
- Class name: GradientImage
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Generate an image of specified size and specified color gradient. V2 upgrade of GradientImage.

*Only image and mask inputs are allowed. Forcing other input types will cause node errors.
*Preset sizes are defined in custom_size.ini. This file is located in the plugin root directory. The default name is custom_size.ini.example. When using this file for the first time, change the file extension to .ini. Open it with a text editor and edit the custom sizes. Each line represents a size. The first number is width, the second is height, separated by a lowercase "x". To avoid errors, do not input extra characters.

# Input types
## Required

- size
    - The size of the image.
    - Comfy dtype: STRING
    - Python dtype: str
    - Optional values: 'custom',

- custom_width
    - Image width. Valid when size is set to "custom". If size_as input is provided, this option will be ignored.
    - Comfy dtype: INT
    - Python dtype: int

- custom_height
    - Image height. Effective when size is set to "custom". If size_as is provided, this option will be ignored.
    - Comfy dtype: INT
    - Python dtype: int

- angle
    - The angle of the gradient.
    - Comfy dtype: INT
    - Python dtype: int

- start_color
    - The start color of the gradient.
    - Comfy dtype: STRING
    - Python dtype: str

- end_color
    - The end color of the gradient.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- size_as
    - Input image or mask. The output image will be generated according to its size. Note that this input has higher priority than other size settings.
    - Comfy dtype: IMAGE, MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Generated image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class GradientImageV2:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        size_list = ['custom']
        size_list.extend(load_custom_size())
        return {
            "required": {
                "size": (size_list,),
                "custom_width": ("INT", {"default": 512, "min": 4, "max": 99999, "step": 1}),
                "custom_height": ("INT", {"default": 512, "min": 4, "max": 99999, "step": 1}),
                "angle": ("INT", {"default": 0, "min": -360, "max": 360, "step": 1}),
                "start_color": ("STRING", {"default": "#FFFFFF"},),
                "end_color": ("STRING", {"default": "#000000"},),
            },
            "optional": {
                "size_as": (any, {}),
            }
        }

    RETURN_TYPES = ("IMAGE", )
    RETURN_NAMES = ("image", )
    FUNCTION = 'gradient_image_v2'
    CATEGORY = '😺dzNodes/LayerUtility'

    def gradient_image_v2(self, size, custom_width, custom_height, angle, start_color, end_color, size_as=None):

        if size_as is not None:
            if size_as.shape[0] > 0:
                _asimage = tensor2pil(size_as[0])
            else:
                _asimage = tensor2pil(size_as)
            width, height = _asimage.size
        else:
            if size == 'custom':
                width = custom_width
                height = custom_height
            else:
                try:
                    _s = size.split('x')
                    width = int(_s[0].strip())
                    height = int(_s[1].strip())
                except Exception as e:
                    log(f"Warning: {NODE_NAME} invalid size, check {custom_size_file}", message_type='warning')
                    width = custom_width
                    height = custom_height


        ret_image = gradient(start_color, end_color, width, height, angle)

        return (pil2tensor(ret_image), )
```