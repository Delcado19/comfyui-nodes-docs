# Documentation
- Class name: CR_FeatheredBorder
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_FeatheredBorder node aims to add a feathered border to an image, providing a soft and visually appealing transition between the image and its surroundings. It allows customization of border thickness and color, giving users a high degree of control over the final appearance of the image.

# Input types
## Required
- image
    - Image parameter is the core input of the node, representing the image to which the feathered border will be applied. It is crucial for node execution because it determines the base content for the border effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- top_thickness
    - top_thickness parameter specifies the border thickness applied to the top edge of the image. It plays an important role in defining the overall size of the final image with border.
    - Comfy dtype: INT
    - Python dtype: int
- bottom_thickness
    - bottom_thickness parameter sets the border thickness on the bottom edge of the image, contributing to the overall border appearance and final image size.
    - Comfy dtype: INT
    - Python dtype: int
- left_thickness
    - left_thickness parameter determines the border thickness on the left side of the image, affecting the final presentation of the image with border.
    - Comfy dtype: INT
    - Python dtype: int
- right_thickness
    - right_thickness parameter controls the border thickness on the right side of the image, affecting the total width of the image including the border.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - border_color parameter is essential for defining the color of the border to be applied to the image. It significantly impacts the visual aesthetics of the final output.
    - Comfy dtype: COLOR
    - Python dtype: str
- feather_amount
    - feather_amount parameter determines the softness of the border edges, creating a smooth transition between the image and the border. It is key to achieving a professional and refined look.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- border_color_hex
    - border_color_hex parameter allows custom hex color values for the border, offering users additional flexibility to achieve specific color schemes.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - Image output parameter represents the final image with the feathered border applied. It is the main result of node execution and the core of the node's purpose.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL to the node documentation page, offering users additional information and guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_FeatheredBorder:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'top_thickness': ('INT', {'default': 0, 'min': 0, 'max': 4096}), 'bottom_thickness': ('INT', {'default': 0, 'min': 0, 'max': 4096}), 'left_thickness': ('INT', {'default': 0, 'min': 0, 'max': 4096}), 'right_thickness': ('INT', {'default': 0, 'min': 0, 'max': 4096}), 'border_color': (COLORS,), 'feather_amount': ('INT', {'default': 0, 'min': 0, 'max': 1024})}, 'optional': {'border_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'make_border'
    CATEGORY = icons.get('Comfyroll/Graphics/Layout')

    def make_border(self, image, top_thickness, bottom_thickness, left_thickness, right_thickness, border_color, feather_amount, border_color_hex='#000000'):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Layout-Nodes#cr-feathered-border'
        images = []
        border_color = get_color_values(border_color, border_color_hex, color_mapping)
        for img in image:
            im = tensor2pil(img)
            RADIUS = feather_amount
            diam = 2 * RADIUS
            back = Image.new('RGB', (im.size[0] + diam, im.size[1] + diam), border_color)
            back.paste(im, (RADIUS, RADIUS))
            mask = Image.new('L', back.size, 0)
            draw = ImageDraw.Draw(mask)
            (x0, y0) = (0, 0)
            (x1, y1) = back.size
            for d in range(diam + RADIUS):
                (x1, y1) = (x1 - 1, y1 - 1)
                alpha = 255 if d < RADIUS else int(255 * (diam + RADIUS - d) / diam)
                draw.rectangle([x0, y0, x1, y1], outline=alpha)
                (x0, y0) = (x0 + 1, y0 + 1)
            blur = back.filter(ImageFilter.GaussianBlur(RADIUS / 2))
            back.paste(blur, mask=mask)
            if left_thickness > 0 or right_thickness > 0 or top_thickness > 0 or (bottom_thickness > 0):
                img = ImageOps.expand(back, (left_thickness, top_thickness, right_thickness, bottom_thickness), fill=border_color)
            else:
                img = back
            images.append(pil2tensor(img))
        images = torch.cat(images, dim=0)
        return (images, show_help)
```