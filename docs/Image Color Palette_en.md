# Documentation
- Class name: WAS_Image_Color_Palette
- Category: WAS Suite/Image/Analyze
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Color_Palette node is designed to analyze and process image data to generate a color palette. It accepts an image as input and returns a transformed image along with a list of color palettes extracted from the original image. This node is particularly suitable for application scenarios that require extracting and representing color data from images, such as design, image editing, or any process that requires image color data.

# Input types
## Required
- image
    - The input image from which to generate the color palette. This image will be processed by the node to extract color information and create a visual representation of the palette.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
## Optional
- colors
    - The number of colors to include in the generated palette. It provides a way to control the granularity of the color scheme derived from the image.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The display mode of the color palette. It determines how the palette is visually presented, offering options such as chart or back-to-back arrangement.
    - Comfy dtype: COMBO['Chart', 'back_to_back']
    - Python dtype: str

# Output types
- image
    - The transformed image, in which the color palette is visually embedded or changed according to the input image and provided parameters.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- color_palettes
    - A list of color palettes extracted from the input image. Each entry in the list represents a color, expressed as a hexadecimal string code.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Color_Palette:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'colors': ('INT', {'default': 16, 'min': 8, 'max': 256, 'step': 1}), 'mode': (['Chart', 'back_to_back'],)}}
    RETURN_TYPES = ('IMAGE', 'LIST')
    RETURN_NAMES = ('image', 'color_palettes')
    FUNCTION = 'image_generate_palette'
    CATEGORY = 'WAS Suite/Image/Analyze'

    def image_generate_palette(self, image, colors=16, mode='chart'):
        WTools = WAS_Tools_Class()
        res_dir = os.path.join(WAS_SUITE_ROOT, 'res')
        font = os.path.join(res_dir, 'font.ttf')
        if not os.path.exists(font):
            font = None
        elif mode == 'Chart':
            cstr(f'Found font at `{font}`').msg.print()
        if len(image) > 1:
            palette_strings = []
            palette_images = []
            for img in image:
                img = tensor2pil(img)
                (palette_image, palette) = WTools.generate_palette(img, colors, 128, 10, font, 15, mode.lower())
                palette_images.append(pil2tensor(palette_image))
                palette_strings.append(palette)
            palette_images = torch.cat(palette_images, dim=0)
            return (palette_images, palette_strings)
        else:
            image = tensor2pil(image)
            (palette_image, palette) = WTools.generate_palette(image, colors, 128, 10, font, 15, mode.lower())
            return (pil2tensor(palette_image), [palette])
```