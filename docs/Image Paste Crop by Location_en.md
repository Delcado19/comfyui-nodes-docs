# Documentation
- Class name: WAS_Image_Paste_Crop_Location
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Paste_Crop_Location node is designed to manipulate and composite images by pasting one image onto another at a specified location, then cropping the result. It allows fine-tuning the blend factor and sharpness of the pasted image for seamless integration into the target image.

# Input types
## Required
- image
    - The main image onto which crop_image will be pasted. It serves as the canvas for the operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- crop_image
    - The image to be pasted onto the main image. It is the primary object of the paste and crop process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- top
    - The vertical position at which the pasted image is placed on the main image. It is critical for determining the exact placement of the pasted image.
    - Comfy dtype: INT
    - Python dtype: int
- left
    - The horizontal position at which the pasted image is placed on the main image. It works together with the top parameter to set the paste location.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The right boundary of the crop operation. It defines the width of the crop area together with the left parameter.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The bottom boundary of the crop operation. It defines the height of the crop area together with the top parameter.
    - Comfy dtype: INT
    - Python dtype: int
- crop_blending
    - The blend factor of the pasted image. It controls how much the pasted image blends with the main image, affecting the final visual appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_sharpening
    - The sharpness level of the pasted image. Increasing this value will enhance the sharpness of the pasted image, making it more prominent.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_image
    - The final image after the paste and crop process, including the main image with the pasted and cropped image integrated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- result_mask
    - The mask image produced by the blending process, which can be used for further image operations or as a transparency mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Paste_Crop_Location:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'crop_image': ('IMAGE',), 'top': ('INT', {'default': 0, 'max': 10000000, 'min': 0, 'step': 1}), 'left': ('INT', {'default': 0, 'max': 10000000, 'min': 0, 'step': 1}), 'right': ('INT', {'default': 256, 'max': 10000000, 'min': 0, 'step': 1}), 'bottom': ('INT', {'default': 256, 'max': 10000000, 'min': 0, 'step': 1}), 'crop_blending': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'crop_sharpening': ('INT', {'default': 0, 'min': 0, 'max': 3, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'IMAGE')
    FUNCTION = 'image_paste_crop_location'
    CATEGORY = 'WAS Suite/Image/Process'

    def image_paste_crop_location(self, image, crop_image, top=0, left=0, right=256, bottom=256, crop_blending=0.25, crop_sharpening=0):
        (result_image, result_mask) = self.paste_image(tensor2pil(image), tensor2pil(crop_image), top, left, right, bottom, crop_blending, crop_sharpening)
        return (result_image, result_mask)

    def paste_image(self, image, crop_image, top=0, left=0, right=256, bottom=256, blend_amount=0.25, sharpen_amount=1):
        image = image.convert('RGBA')
        crop_image = crop_image.convert('RGBA')

        def inset_border(image, border_width=20, border_color=0):
            (width, height) = image.size
            bordered_image = Image.new(image.mode, (width, height), border_color)
            bordered_image.paste(image, (0, 0))
            draw = ImageDraw.Draw(bordered_image)
            draw.rectangle((0, 0, width - 1, height - 1), outline=border_color, width=border_width)
            return bordered_image
        (img_width, img_height) = image.size
        top = min(max(top, 0), img_height)
        left = min(max(left, 0), img_width)
        bottom = min(max(bottom, 0), img_height)
        right = min(max(right, 0), img_width)
        crop_size = (right - left, bottom - top)
        crop_img = crop_image.resize(crop_size)
        crop_img = crop_img.convert('RGBA')
        if sharpen_amount > 0:
            for _ in range(sharpen_amount):
                crop_img = crop_img.filter(ImageFilter.SHARPEN)
        if blend_amount > 1.0:
            blend_amount = 1.0
        elif blend_amount < 0.0:
            blend_amount = 0.0
        blend_ratio = max(crop_size) / 2 * float(blend_amount)
        blend = image.copy()
        mask = Image.new('L', image.size, 0)
        mask_block = Image.new('L', crop_size, 255)
        mask_block = inset_border(mask_block, int(blend_ratio / 2), 0)
        Image.Image.paste(mask, mask_block, (left, top))
        blend.paste(crop_img, (left, top), crop_img)
        mask = mask.filter(ImageFilter.BoxBlur(radius=blend_ratio / 4))
        mask = mask.filter(ImageFilter.GaussianBlur(radius=blend_ratio / 4))
        blend.putalpha(mask)
        image = Image.alpha_composite(image, blend)
        return (pil2tensor(image), pil2tensor(mask.convert('RGB')))
```