# Documentation
- Class name: WAS_Image_Blend_Mask
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Image_Blend_Mask node aims to seamlessly blend two images using a provided mask and blend percentage. It leverages the power of image compositing to create a visually coherent result where the masked area of one image is replaced by the corresponding area of the other image according to the specified blend level.

# Input types
## Required
- image_a
    - Image A is the main image to be blended with Image B. It is a key input as it forms the base layer of the final composited image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- image_b
    - Image B is the secondary image, its masked area will be blended onto Image A. It contributes to the final appearance by overlaying specific parts on the base image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- mask
    - Mask is a binary image that defines which parts of Image B should be visible in the final blend. It plays a key role in determining the area of Image A to be replaced by Image B.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
## Optional
- blend_percentage
    - Blend percentage determines the degree to which the masked area of Image B is blended with Image A. It is an optional parameter that allows fine-tuning of the blending effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result_image
    - Result image is the final output of the blending process, which combines Image A and Image B based on the mask and blend percentage.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Blend_Mask:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image_a': ('IMAGE',), 'image_b': ('IMAGE',), 'mask': ('IMAGE',), 'blend_percentage': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_blend_mask'
    CATEGORY = 'WAS Suite/Image'

    def image_blend_mask(self, image_a, image_b, mask, blend_percentage):
        img_a = tensor2pil(image_a)
        img_b = tensor2pil(image_b)
        mask = ImageOps.invert(tensor2pil(mask).convert('L'))
        masked_img = Image.composite(img_a, img_b, mask.resize(img_a.size))
        blend_mask = Image.new(mode='L', size=img_a.size, color=round(blend_percentage * 255))
        blend_mask = ImageOps.invert(blend_mask)
        img_result = Image.composite(img_a, masked_img, blend_mask)
        del img_a, img_b, blend_mask, mask
        return (pil2tensor(img_result),)
```