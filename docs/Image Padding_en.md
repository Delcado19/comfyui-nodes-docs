# Documentation
- Class name: WAS_Image_Padding
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Padding node enhances images by adding padding to the edges, useful for various image processing tasks such as data augmentation or preparing images for machine learning models. It provides an advanced feature that allows adding padding with an optional feathering effect to smoothly blend the padded edges with the original image.

# Input types
## Required
- image
    - The image parameter is the input image that the node will process. It plays a central role in the node's operation, as the entire padding and feathering process is applied to this image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- feathering
    - The feather parameter determines the degree of feathering effect applied to the padded edges of the image. This is an optional parameter that can enhance the visual smoothness of the padding.
    - Comfy dtype: INT
    - Python dtype: int
- feather_second_pass
    - The feather_second_pass parameter controls whether a second pass of feathering is applied to the image. This can add an additional layer of smoothness to the padded edges.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- left_padding
    - The left_padding parameter specifies the amount of padding to add to the left side of the image. It is an important parameter as it directly affects the final dimensions of the image.
    - Comfy dtype: INT
    - Python dtype: int
- right_padding
    - The right_padding parameter specifies the amount of padding to add to the right side of the image. It is crucial for controlling the total width of the padded image.
    - Comfy dtype: INT
    - Python dtype: int
- top_padding
    - The top_padding parameter determines the amount of padding to add to the top of the image. It is a key parameter for adjusting the vertical dimensions of the image.
    - Comfy dtype: INT
    - Python dtype: int
- bottom_padding
    - The bottom_padding parameter sets the amount of padding to add to the bottom of the image. It is crucial for modifying the total height of the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- padded_image
    - The padded_image parameter is the output of the node, which is the original image with the specified padding applied. It represents the final result of the image padding process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- padding_mask
    - The padding_mask parameter is an additional output that provides a visual representation of the padding applied to the image. It can be used for further processing or visual inspection.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Padding:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'feathering': ('INT', {'default': 120, 'min': 0, 'max': 2048, 'step': 1}), 'feather_second_pass': (['true', 'false'],), 'left_padding': ('INT', {'default': 512, 'min': 8, 'max': 48000, 'step': 1}), 'right_padding': ('INT', {'default': 512, 'min': 8, 'max': 48000, 'step': 1}), 'top_padding': ('INT', {'default': 512, 'min': 8, 'max': 48000, 'step': 1}), 'bottom_padding': ('INT', {'default': 512, 'min': 8, 'max': 48000, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'IMAGE')
    FUNCTION = 'image_padding'
    CATEGORY = 'WAS Suite/Image/Transform'

    def image_padding(self, image, feathering, left_padding, right_padding, top_padding, bottom_padding, feather_second_pass=True):
        padding = self.apply_image_padding(tensor2pil(image), left_padding, right_padding, top_padding, bottom_padding, feathering, second_pass=True)
        return (pil2tensor(padding[0]), pil2tensor(padding[1]))

    def apply_image_padding(self, image, left_pad=100, right_pad=100, top_pad=100, bottom_pad=100, feather_radius=50, second_pass=True):
        mask = Image.new('L', image.size, 255)
        draw = ImageDraw.Draw(mask)
        draw.rectangle((0, 0, feather_radius * 2, image.height), fill=0)
        draw.rectangle((image.width - feather_radius * 2, 0, image.width, image.height), fill=0)
        draw.rectangle((0, 0, image.width, feather_radius * 2), fill=0)
        draw.rectangle((0, image.height - feather_radius * 2, image.width, image.height), fill=0)
        mask = mask.filter(ImageFilter.GaussianBlur(radius=feather_radius))
        if second_pass:
            mask2 = Image.new('L', image.size, 255)
            draw2 = ImageDraw.Draw(mask2)
            feather_radius2 = int(feather_radius / 4)
            draw2.rectangle((0, 0, feather_radius2 * 2, image.height), fill=0)
            draw2.rectangle((image.width - feather_radius2 * 2, 0, image.width, image.height), fill=0)
            draw2.rectangle((0, 0, image.width, feather_radius2 * 2), fill=0)
            draw2.rectangle((0, image.height - feather_radius2 * 2, image.width, image.height), fill=0)
            mask2 = mask2.filter(ImageFilter.GaussianBlur(radius=feather_radius2))
            feathered_im = Image.new('RGBA', image.size, (0, 0, 0, 0))
            feathered_im.paste(image, (0, 0), mask)
            feathered_im.paste(image, (0, 0), mask)
            feathered_im.paste(image, (0, 0), mask2)
            feathered_im.paste(image, (0, 0), mask2)
        else:
            feathered_im = Image.new('RGBA', image.size, (0, 0, 0, 0))
            feathered_im.paste(image, (0, 0), mask)
        new_size = (feathered_im.width + left_pad + right_pad, feathered_im.height + top_pad + bottom_pad)
        new_im = Image.new('RGBA', new_size, (0, 0, 0, 0))
        new_im.paste(feathered_im, (left_pad, top_pad))
        padding_mask = Image.new('L', new_size, 0)
        gradient = [int(255 * (1 - p[3] / 255)) if p[3] != 0 else 255 for p in new_im.getdata()]
        padding_mask.putdata(gradient)
        return (new_im, padding_mask.convert('RGB'))
```