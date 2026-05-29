# Documentation
- Class name: WAS_Image_Rotate_Hue
- Category: WAS Suite/Image/Adjustment
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Rotate_Hue node is designed to adjust the hue of an image, providing a method to change the overall tone of the image without altering its brightness or saturation. It is particularly useful for creating variations of images for visual effects or color correction purposes.

# Input types
## Required
- image
    - The image parameter is crucial for the node's operation, as it is the input on which the hue adjustment will be performed. It is the primary data that the node will process to achieve the desired color transformation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
## Optional
- hue_shift
    - The hue_shift parameter allows fine-tuning of the color rotation in the image. It is a floating-point number that affects the degree of hue shift, thereby influencing the final visual effect of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- rotated_image
    - The rotated_image output represents the result of applying the hue rotation to the input image. It is the color-adjusted transformed image, ready for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Rotate_Hue:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'hue_shift': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'rotate_hue'
    CATEGORY = 'WAS Suite/Image/Adjustment'

    def rotate_hue(self, image, hue_shift=0.0):
        if hue_shift > 1.0 or hue_shift < 0.0:
            cstr(f'The hue_shift `{cstr.color.LIGHTYELLOW}{hue_shift}{cstr.color.END}` is out of range. Valid range is {cstr.color.BOLD}0.0 - 1.0{cstr.color.END}').error.print()
            hue_shift = 0.0
        shifted_hue = pil2tensor(self.hue_rotation(image, hue_shift))
        return (shifted_hue,)

    def hue_rotation(self, image, hue_shift=0.0):
        import colorsys
        if hue_shift > 1.0 or hue_shift < 0.0:
            print(f"The hue_shift '{hue_shift}' is out of range. Valid range is 0.0 - 1.0")
            hue_shift = 0.0
        pil_image = tensor2pil(image)
        (width, height) = pil_image.size
        rotated_image = Image.new('RGB', (width, height))
        for x in range(width):
            for y in range(height):
                (r, g, b) = pil_image.getpixel((x, y))
                (h, l, s) = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
                h = (h + hue_shift) % 1.0
                (r, g, b) = colorsys.hls_to_rgb(h, l, s)
                (r, g, b) = (int(r * 255), int(g * 255), int(b * 255))
                rotated_image.putpixel((x, y), (r, g, b))
        return rotated_image
```