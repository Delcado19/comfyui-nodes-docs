# Documentation
- Class name: WAS_Image_Blending_Mode
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Blending_Mode node blends two images using various blending modes, offering a versatile way to combine visual elements. It emphasizes the creative aspect of image processing, enabling a wide range of effects through different blending techniques.

# Input types
## Required
- image_a
    - Image A is the first input image to be blended with Image B. It plays a crucial role in determining the final appearance of the blended result, as it is one of the primary visual elements being combined.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- image_b
    - Image B is the second input image to be blended with Image A. It is equally important in influencing the final output, contributing to the overall look and feel of the blended image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- mode
    - The blending mode determines how the colors of Image A and Image B are mixed. Each mode provides a different visual effect, allowing for a high degree of customization during the blending process.
    - Comfy dtype: COMBO['add', 'color', 'color_burn', 'color_dodge', 'darken', 'difference', 'exclusion', 'hard_light', 'hue', 'lighten', 'multiply', 'overlay', 'screen', 'soft_light']
    - Python dtype: str
- blend_percentage
    - The blending percentage controls the intensity of the blending effect. It allows fine-tuning of the blend, enabling subtle or significant merging of the two images.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image is the result of blending Image A and Image B using the specified blending mode and blending percentage. It encapsulates the combined visual elements of the input images, reflecting the creative intent of the blending operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Blending_Mode:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image_a': ('IMAGE',), 'image_b': ('IMAGE',), 'mode': (['add', 'color', 'color_burn', 'color_dodge', 'darken', 'difference', 'exclusion', 'hard_light', 'hue', 'lighten', 'multiply', 'overlay', 'screen', 'soft_light'],), 'blend_percentage': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'image_blending_mode'
    CATEGORY = 'WAS Suite/Image'

    def image_blending_mode(self, image_a, image_b, mode='add', blend_percentage=1.0):
        if 'pilgram' not in packages():
            install_package('pilgram')
        import pilgram
        img_a = tensor2pil(image_a)
        img_b = tensor2pil(image_b)
        if mode:
            if mode == 'color':
                out_image = pilgram.css.blending.color(img_a, img_b)
            elif mode == 'color_burn':
                out_image = pilgram.css.blending.color_burn(img_a, img_b)
            elif mode == 'color_dodge':
                out_image = pilgram.css.blending.color_dodge(img_a, img_b)
            elif mode == 'darken':
                out_image = pilgram.css.blending.darken(img_a, img_b)
            elif mode == 'difference':
                out_image = pilgram.css.blending.difference(img_a, img_b)
            elif mode == 'exclusion':
                out_image = pilgram.css.blending.exclusion(img_a, img_b)
            elif mode == 'hard_light':
                out_image = pilgram.css.blending.hard_light(img_a, img_b)
            elif mode == 'hue':
                out_image = pilgram.css.blending.hue(img_a, img_b)
            elif mode == 'lighten':
                out_image = pilgram.css.blending.lighten(img_a, img_b)
            elif mode == 'multiply':
                out_image = pilgram.css.blending.multiply(img_a, img_b)
            elif mode == 'add':
                out_image = pilgram.css.blending.normal(img_a, img_b)
            elif mode == 'overlay':
                out_image = pilgram.css.blending.overlay(img_a, img_b)
            elif mode == 'screen':
                out_image = pilgram.css.blending.screen(img_a, img_b)
            elif mode == 'soft_light':
                out_image = pilgram.css.blending.soft_light(img_a, img_b)
            else:
                out_image = img_a
        out_image = out_image.convert('RGB')
        blend_mask = Image.new(mode='L', size=img_a.size, color=round(blend_percentage * 255))
        blend_mask = ImageOps.invert(blend_mask)
        out_image = Image.composite(img_a, out_image, blend_mask)
        return (pil2tensor(out_image),)
```