# Documentation
- Class name: CR_VignetteFilter
- Category: Comfyroll/Graphics/Filter
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_VignetteFilter is a node used to apply a vignette visual effect to images. This effect gradually darkens the corners of the image, creating a soft focus transition from the center to the edges. It enhances visual depth and draws attention to the image center, commonly used in photography and film.

# Input types
## Required
- image
    - The input image to which the vignette effect is applied. This is the primary data the node processes; the final output quality largely depends on the characteristics of this input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- vignette_shape
    - Determines the shape of the vignette applied to the image. The choice of shape significantly affects the aesthetic appeal and emotional response of the final image.
    - Comfy dtype: COMBO['circle', 'oval', 'square', 'diamond']
    - Python dtype: str
- feather_amount
    - Controls the softness of the vignette edge. A higher feather value results in a more gradual transition from the darkened corners to the image center, while a lower value creates a more abrupt transition.
    - Comfy dtype: INT
    - Python dtype: int
- x_offset
    - Allows horizontal adjustment of the vignette center. This shifts the focal area within the image, creating subtle compositional variations.
    - Comfy dtype: INT
    - Python dtype: int
- y_offset
    - Allows vertical adjustment of the vignette center. Similar to x_offset, it fine-tunes the visual focus within the image.
    - Comfy dtype: INT
    - Python dtype: int
- zoom
    - Adjusts the size of the vignette effect. A higher scale value increases the vignette size, making it more pronounced, while a lower value reduces its size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- reverse
    - If set to 'yes', inverts the vignette effect. Instead of darkening the edges, it darkens the image center, creating a contrasting visual style.
    - Comfy dtype: COMBO['no', 'yes']
    - Python dtype: str

# Output types
- IMAGE
    - The resulting image after applying the vignette effect. This is the main output, reflecting creative adjustments made via node parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - An alpha mask representing vignette transparency. It can be used for further image processing or as a selection tool in post-production.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - Provides a documentation link for further guidance on using the node. Useful for users seeking more information about the node’s features and options.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_VignetteFilter:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'vignette_shape': (['circle', 'oval', 'square', 'diamond'],), 'feather_amount': ('INT', {'default': 100, 'min': 0, 'max': 1024}), 'x_offset': ('INT', {'default': 0, 'min': -2048, 'max': 2048}), 'y_offset': ('INT', {'default': 0, 'min': -2048, 'max': 2048}), 'zoom': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.1}), 'reverse': (['no', 'yes'],)}}
    RETURN_TYPES = ('IMAGE', 'MASK', 'STRING')
    RETURN_NAMES = ('IMAGE', 'MASK', 'show_help')
    FUNCTION = 'make_vignette'
    CATEGORY = icons.get('Comfyroll/Graphics/Filter')

    def make_vignette(self, image, feather_amount, reverse, vignette_shape='circle', x_offset=0, y_offset=0, zoom=1.0):
        images = []
        masks = []
        vignette_color = 'black'
        for img in image:
            im = tensor2pil(img)
            RADIUS = feather_amount
            alpha_mask = Image.new('L', im.size, 255)
            draw = ImageDraw.Draw(alpha_mask)
            center_x = im.size[0] // 2 + x_offset
            center_y = im.size[1] // 2 + y_offset
            radius = min(center_x, center_y) * zoom
            size_x = (im.size[0] - RADIUS) * zoom
            size_y = (im.size[1] - RADIUS) * zoom
            if vignette_shape == 'circle':
                if reverse == 'no':
                    draw.ellipse([(center_x - radius, center_y - radius), (center_x + radius, center_y + radius)], fill=0)
                elif reverse == 'yes':
                    draw.rectangle([(0, 0), im.size], fill=0)
                    draw.ellipse([(center_x - radius, center_y - radius), (center_x + radius, center_y + radius)], fill=255)
                else:
                    raise ValueError("Invalid value for reverse. Use 'yes' or 'no'.")
            elif vignette_shape == 'oval':
                if reverse == 'no':
                    draw.ellipse([(center_x - size_x / 2, center_y - size_y / 2), (center_x + size_x / 2, center_y + size_y / 2)], fill=0)
                elif reverse == 'yes':
                    draw.rectangle([(0, 0), im.size], fill=0)
                    draw.ellipse([(center_x - size_x / 2, center_y - size_y / 2), (center_x + size_x / 2, center_y + size_y / 2)], fill=255)
            elif vignette_shape == 'diamond':
                if reverse == 'no':
                    size = min(im.size[0] - x_offset, im.size[1] - y_offset) * zoom
                    draw.polygon([(center_x, center_y - size / 2), (center_x + size / 2, center_y), (center_x, center_y + size / 2), (center_x - size / 2, center_y)], fill=0)
                elif reverse == 'yes':
                    size = min(im.size[0] - x_offset, im.size[1] - y_offset) * zoom
                    draw.rectangle([(0, 0), im.size], fill=0)
                    draw.polygon([(center_x, center_y - size / 2), (center_x + size / 2, center_y), (center_x, center_y + size / 2), (center_x - size / 2, center_y)], fill=255)
            elif vignette_shape == 'square':
                if reverse == 'no':
                    size = min(im.size[0] - x_offset, im.size[1] - y_offset) * zoom
                    draw.rectangle([(center_x - size / 2, center_y - size / 2), (center_x + size / 2, center_y + size / 2)], fill=0)
                elif reverse == 'yes':
                    size = min(im.size[0] - x_offset, im.size[1] - y_offset) * zoom
                    draw.rectangle([(0, 0), im.size], fill=0)
                    draw.rectangle([(center_x - size / 2, center_y - size / 2), (center_x + size / 2, center_y + size / 2)], fill=255)
                else:
                    raise ValueError("Invalid value for reverse. Use 'yes' or 'no'.")
            else:
                raise ValueError("Invalid vignette_shape. Use 'circle', 'oval', or 'square'.")
            alpha_mask = alpha_mask.filter(ImageFilter.GaussianBlur(RADIUS))
            masks.append(pil2tensor(alpha_mask).unsqueeze(0))
            vignette_img = Image.new('RGBA', im.size, vignette_color)
            vignette_img.putalpha(alpha_mask)
            result_img = Image.alpha_composite(im.convert('RGBA'), vignette_img)
            images.append(pil2tensor(result_img.convert('RGB')))
        images = torch.cat(images, dim=0)
        masks = torch.cat(masks, dim=0)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Layout-Nodes#cr-vignette-filter'
        return (images, masks, show_help)
```