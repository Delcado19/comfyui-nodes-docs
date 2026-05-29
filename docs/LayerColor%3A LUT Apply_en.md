# Documentation
- Class name: ColorCorrectLevels
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Apply LUT to image. Only .cube format LUT files are supported.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- LUT
    - This lists the available .cube files in the LUT folder. The selected LUT file will be applied to the image. *The LUT folder is defined in resource_dir.ini, located in the plugin root directory. The default filename is resource_dir.ini.example. On first use, rename the file extension to .ini. Open it with a text editor, find the line starting with "LUT_dir=", and edit the path after "=" to your custom folder path. All .cube files in this folder will be collected and displayed in the node list during ComfyUI initialization. If the folder specified in the ini is invalid, the plugin's built-in LUT folder will be used instead.
    - Comfy dtype: LUT_LIST
    - Python dtype: str

- color_space
    - For regular images, select linear. For images in log color space, select log.
    - Comfy dtype: str
    - Python dtype: str
    - Options: ['linear', 'log']

# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class ColorCorrectLUTapply:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        color_space_list = ['linear', 'log']
        return {
            "required": {
                "image": ("IMAGE", ),  #
                "LUT": (LUT_LIST,),  # LUT文件
                "color_space":  (color_space_list,),
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = 'color_correct_LUTapply'
    CATEGORY = '😺dzNodes/LayerColor'

    def color_correct_LUTapply(self, image, LUT, color_space):
        ret_images = []
        for i in image:
            i = torch.unsqueeze(i, 0)
            _image = tensor2pil(i)

            lut_file = LUT_DICT[LUT]
            ret_image = apply_lut(_image, lut_file, log=(color_space == 'log'))

            if _image.mode == 'RGBA':
                ret_image = RGB2RGBA(ret_image, _image.split()[-1])
            ret_images.append(pil2tensor(ret_image))

        log(f"{NODE_NAME} Processed {len(ret_images)} image(s).", message_type='finish')
        return (torch.cat(ret_images, dim=0),)

```