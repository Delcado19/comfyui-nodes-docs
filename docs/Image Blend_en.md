# Documentation
- Class name: WAS_Image_Blend
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'image_blend' method of the WAS_Image_Blend node is designed to seamlessly blend two images. It uses the blend_percentage parameter to control the degree of blending, creating a visually harmonious composite image that reflects a balance between the input images.

# Input types
## Required
- image_a
    - The first image to be blended. It plays a crucial role in determining the initial visual context of the blended image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- image_b
    - The second image to be blended with the first. It contributes to the final appearance by overlaying visual elements on top of the base image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- blend_percentage
    - The blend_percentage parameter determines the visibility of image_b in the final blend. It is a floating-point value ranging from 0.0 to 1.0, where 0.0 means only image_a is visible, and 1.0 means only image_b is visible.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output is a blended image that visually combines elements of the two input images according to the specified blend_percentage.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Blend:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image_a': ('IMAGE',), 'image_b': ('IMAGE',), 'blend_percentage': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'image_blend'
    CATEGORY = 'WAS Suite/Image'

    def image_blend(self, image_a, image_b, blend_percentage):
        img_a = tensor2pil(image_a)
        img_b = tensor2pil(image_b)
        blend_mask = Image.new(mode='L', size=img_a.size, color=round(blend_percentage * 255))
        blend_mask = ImageOps.invert(blend_mask)
        img_result = Image.composite(img_a, img_b, blend_mask)
        del img_a, img_b, blend_mask
        return (pil2tensor(img_result),)
```