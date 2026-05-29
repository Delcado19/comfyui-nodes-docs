# Documentation
- Class name: CR_ImageBorder
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImageBorder node is designed to add decorative borders to images to enhance their visual appeal in various layouts. It allows customization of border thickness and color, with an optional outline for additional emphasis. This node plays a key role in graphic design workflows where images require a professional and polished presentation.

# Input types
## Required
- image
    - The image parameter is required because it defines the base visual content to which the border will be applied. The quality and resolution of the input image directly affect the final output, making it a fundamental element in the node's execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- top_thickness
    - The top_thickness parameter specifies the border thickness applied to the top edge of the image. It allows fine-tuning the border's appearance to meet design requirements, contributing to the overall aesthetics of the image.
    - Comfy dtype: INT
    - Python dtype: int
- bottom_thickness
    - The bottom_thickness parameter determines the border thickness on the bottom edge of the image. Adjusting this parameter helps achieve a balanced and symmetrical border design, enhancing the visual harmony of the image.
    - Comfy dtype: INT
    - Python dtype: int
- left_thickness
    - The left_thickness parameter controls the thickness of the border on the left side of the image. This is an important aspect when designing borders to ensure the image has a uniform and consistent appearance across all edges.
    - Comfy dtype: INT
    - Python dtype: int
- right_thickness
    - The right_thickness parameter sets the border thickness on the right side of the image. It plays a role in the overall border design, ensuring the edges of the image remain visually consistent with the rest of the layout.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - The border_color parameter is used to define the color of the border. It is a key element in setting the tone and style of the image border, influencing the overall mood and presentation of the final image.
    - Comfy dtype: COLOR
    - Python dtype: str
- outline_thickness
    - The outline_thickness parameter specifies the thickness of an outline line to be added around the image. This can add depth and emphasis to the image, making it stand out more in a composition.
    - Comfy dtype: INT
    - Python dtype: int
- outline_color
    - The outline_color parameter determines the color of the outline line surrounding the image. This is an important choice for designers looking to create contrast or harmony with the border_color and the image itself.
    - Comfy dtype: COLOR
    - Python dtype: str
- border_color_hex
    - The border_color_hex parameter allows the use of a custom hex color value to set the border color, providing designers with greater flexibility and control over the exact shade of color desired.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The image output of the CR_ImageBorder node is the processed image with the border and optional outline applied. It represents the final visual result of the node's operation, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a URL link to a documentation page for further assistance or guidance on using the CR_ImageBorder node. It is a useful resource for users seeking more information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ImageBorder:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'top_thickness': ('INT', {'default': 0, 'min': 0, 'max': 4096}), 'bottom_thickness': ('INT', {'default': 0, 'min': 0, 'max': 4096}), 'left_thickness': ('INT', {'default': 0, 'min': 0, 'max': 4096}), 'right_thickness': ('INT', {'default': 0, 'min': 0, 'max': 4096}), 'border_color': (COLORS,), 'outline_thickness': ('INT', {'default': 0, 'min': 0, 'max': 1024}), 'outline_color': (COLORS[1:],)}, 'optional': {'border_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'make_panel'
    CATEGORY = icons.get('Comfyroll/Graphics/Layout')

    def make_panel(self, image, top_thickness, bottom_thickness, left_thickness, right_thickness, border_color, outline_thickness, outline_color, border_color_hex='#000000'):
        images = []
        border_color = get_color_values(border_color, border_color_hex, color_mapping)
        for img in image:
            img = tensor2pil(img)
            if outline_thickness > 0:
                img = ImageOps.expand(img, outline_thickness, fill=outline_color)
            if left_thickness > 0 or right_thickness > 0 or top_thickness > 0 or (bottom_thickness > 0):
                img = ImageOps.expand(img, (left_thickness, top_thickness, right_thickness, bottom_thickness), fill=border_color)
            images.append(pil2tensor(img))
        images = torch.cat(images, dim=0)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Layout-Nodes#cr-image-border'
        return (images, show_help)
```