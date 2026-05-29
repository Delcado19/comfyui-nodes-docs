# Documentation
- Class name: WAS_Image_Transpose
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Transpose node is designed to perform image manipulation tasks, specifically transforming images through rotation and resizing. It allows overlaying one image onto another, with configurable output width and height, overlay position, and rotation degree. Additionally, it provides a feathering function to soften the edges of the overlay for more natural blending. This node is essential for creating composite images with precise control over element positioning and appearance.

# Input types
## Required
- image
    - The base image onto which the overlay will be applied. It serves as the canvas for composite image creation. The choice of this image significantly affects the final appearance of the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_overlay
    - The image to be overlaid on the base image. It is manipulated according to the specified parameters to blend seamlessly with the base image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- width
    - The desired width of the output image. It determines the scaling of both the base and overlay images to fit the specified dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The desired height of the output image. Together with the width, it determines the final composite image size.
    - Comfy dtype: INT
    - Python dtype: int
- X
    - The X coordinate of the position where the overlay image is placed on the base image.
    - Comfy dtype: INT
    - Python dtype: int
- Y
    - The Y coordinate of the position where the overlay image is placed on the base image.
    - Comfy dtype: INT
    - Python dtype: int
- rotation
    - The degree of rotation to apply to the overlay image before placing it on the base image.
    - Comfy dtype: INT
    - Python dtype: int
- feathering
    - The amount of feathering applied to the edges of the overlay image for smoother blending with the base image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - The final composite image resulting from the transformation of the base and overlay images according to the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Transpose:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'image_overlay': ('IMAGE',), 'width': ('INT', {'default': 512, 'min': -48000, 'max': 48000, 'step': 1}), 'height': ('INT', {'default': 512, 'min': -48000, 'max': 48000, 'step': 1}), 'X': ('INT', {'default': 0, 'min': -48000, 'max': 48000, 'step': 1}), 'Y': ('INT', {'default': 0, 'min': -48000, 'max': 48000, 'step': 1}), 'rotation': ('INT', {'default': 0, 'min': -360, 'max': 360, 'step': 1}), 'feathering': ('INT', {'default': 0, 'min': 0, 'max': 4096, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_transpose'
    CATEGORY = 'WAS Suite/Image/Transform'

    def image_transpose(self, image: torch.Tensor, image_overlay: torch.Tensor, width: int, height: int, X: int, Y: int, rotation: int, feathering: int=0):
        return (pil2tensor(self.apply_transpose_image(tensor2pil(image), tensor2pil(image_overlay), (width, height), (X, Y), rotation, feathering)),)

    def apply_transpose_image(self, image_bg, image_element, size, loc, rotate=0, feathering=0):
        image_element = image_element.rotate(rotate, expand=True)
        image_element = image_element.resize(size)
        if feathering > 0:
            mask = Image.new('L', image_element.size, 255)
            draw = ImageDraw.Draw(mask)
            for i in range(feathering):
                alpha_value = int(255 * (i + 1) / feathering)
                draw.rectangle((i, i, image_element.size[0] - i, image_element.size[1] - i), fill=alpha_value)
            alpha_mask = Image.merge('RGBA', (mask, mask, mask, mask))
            image_element = Image.composite(image_element, Image.new('RGBA', image_element.size, (0, 0, 0, 0)), alpha_mask)
        new_image = Image.new('RGBA', image_bg.size, (0, 0, 0, 0))
        new_image.paste(image_element, loc)
        image_bg = image_bg.convert('RGBA')
        image_bg.paste(new_image, (0, 0), new_image)
        return image_bg
```