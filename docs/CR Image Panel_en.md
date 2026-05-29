# Documentation
- Class name: CR_ImagePanel
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImagePanel node combines multiple images into a single image panel according to a specified layout direction. It supports adding borders and outlines to images to enhance visual effects, and allows custom colors. It is suitable for creating image grids or organizing multiple preview images into a single image strip, widely used in image display and layout design.

# Input types
## Required
- image_1
    - The first image to combine, which serves as the foundation for building the image panel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- border_thickness
    - The thickness of the border, used to define the width of the image border, enhancing the visual effect of the image edges.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - The color of the border, allowing users to customize the border color to suit different design needs.
    - Comfy dtype: COLOR
    - Python dtype: str
- outline_thickness
    - The thickness of the outline, defining the width of the image outline, used to enhance the visible boundary of the image.
    - Comfy dtype: INT
    - Python dtype: int
- outline_color
    - The color of the outline, users can customize the outline color to match the design theme.
    - Comfy dtype: COLOR
    - Python dtype: str
- layout_direction
    - The layout direction, determining whether images are combined horizontally or vertically, affecting the layout structure of the final image panel.
    - Comfy dtype: COMBO[horizontal, vertical]
    - Python dtype: str
## Optional
- image_2
    - The second optional image, used to display alongside the first image in the image panel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_3
    - The third optional image, used to display alongside the first two images in the image panel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_4
    - The fourth optional image, used to display alongside the first three images in the image panel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- border_color_hex
    - The hexadecimal value of the border color, providing another way to precisely specify the border color.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The combined image panel, containing the final image composed of all input images combined according to the specified layout direction and style.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - A link to help documentation, through which users can obtain more information on how to use this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ImagePanel:

    @classmethod
    def INPUT_TYPES(s):
        directions = ['horizontal', 'vertical']
        return {'required': {'image_1': ('IMAGE',), 'border_thickness': ('INT', {'default': 0, 'min': 0, 'max': 1024}), 'border_color': (COLORS,), 'outline_thickness': ('INT', {'default': 0, 'min': 0, 'max': 1024}), 'outline_color': (COLORS[1:],), 'layout_direction': (directions,)}, 'optional': {'image_2': ('IMAGE',), 'image_3': ('IMAGE',), 'image_4': ('IMAGE',), 'border_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'make_panel'
    CATEGORY = icons.get('Comfyroll/Graphics/Layout')

    def make_panel(self, image_1, border_thickness, border_color, outline_thickness, outline_color, layout_direction, image_2=None, image_3=None, image_4=None, border_color_hex='#000000'):
        border_color = get_color_values(border_color, border_color_hex, color_mapping)
        images = []
        images.append(tensor2pil(image_1))
        if image_2 is not None:
            images.append(tensor2pil(image_2))
        if image_3 is not None:
            images.append(tensor2pil(image_3))
        if image_4 is not None:
            images.append(tensor2pil(image_4))
        images = apply_outline_and_border(images, outline_thickness, outline_color, border_thickness, border_color)
        combined_image = combine_images(images, layout_direction)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Layout-Nodes#cr-image-panel'
        return (pil2tensor(combined_image), show_help)
```