# Documentation
- Class name: ImageBorder
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The ImageBorder node is designed to add decorative borders to images, enhancing their visual appeal. It supports various border styles such as checkerboard, blur, or solid colors, allowing customization to suit different design needs.

# Input types
## Required
- image
    - The image parameter is required as it is the base input for applying the border. It directly affects the appearance of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- border_width
    - The border_width parameter defines the thickness of the border to be added around the image, which significantly affects the overall aesthetics of the bordered image.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - The border_color parameter allows users to specify the color of the border, which can be a solid color, checkerboard pattern, or blur effect for a more refined look.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output image includes the original image with the newly applied border, which can be used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImageBorder:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'border_width': ('INT', {'default': 10, 'min': 0, 'max': 1000}), 'border_color': ('STRING', {'default': 'black'})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'border'
    CATEGORY = 'Mikey/Image'

    def blur_border(self, image, border_width):
        scale_factor = (image.width + border_width * 2) / image.width
        border_image = image.resize((int(image.width * scale_factor), int(image.height * scale_factor)))
        border_image = border_image.filter(ImageFilter.GaussianBlur(radius=border_width * 0.5))
        border_image.paste(image, (border_width, border_width))
        return pil2tensor(border_image)[None, :, :, :]

    @apply_to_batch
    def border(self, image, border_width, border_color):
        orig_image = tensor2pil(image)
        (width, height) = orig_image.size
        if border_color == 'checkerboard':
            return checkerboard_border(image, border_width, 'black')
        if border_color == 'blur':
            return self.blur_border(orig_image, border_width)
        if border_color.startswith('(') and border_color.endswith(')'):
            border_color = border_color[1:-1]
            border_color = tuple(map(int, border_color.split(',')))
        border_image = Image.new('RGB', (width + border_width * 2, height + border_width * 2), border_color)
        border_image.paste(orig_image, (border_width, border_width))
        return pil2tensor(border_image)
```