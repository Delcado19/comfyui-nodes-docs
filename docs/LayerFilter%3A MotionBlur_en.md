# Documentation
- Class name: MotionBlur
- Category: 😺dzNodes/LayerFilter
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Node for applying motion blur effect on images.

# Input types

## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- angle
    - Angle of the blur.
    - Comfy dtype: INT
    - Python dtype: int

- blur
    - Amount of blur.
    - Comfy dtype: INT
    - Python dtype: int

# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```python
class MotionBlur:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):

        return {
            "required": {
                "image": ("IMAGE", ),  #
                "angle": ("INT", {"default": 0, "min": -90, "max": 90, "step": 1}),  # 角度
                "blur": ("INT", {"default": 20, "min": 1, "max": 999, "step": 1}),  # 模糊
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = 'motion_blur'
    CATEGORY = '😺dzNodes/LayerFilter'

    def motion_blur(self, image, angle, blur):

        ret_images = []

        for i in image:

            _canvas = tensor2pil(torch.unsqueeze(i, 0)).convert('RGB')

            ret_images.append(pil2tensor(motion_blur(_canvas, angle, blur)))

        log(f"{NODE_NAME} Processed {len(ret_images)} image(s).", message_type='finish')
        return (torch.cat(ret_images, dim=0),)
```