# Documentation
- Class name: CR_SimpleBanner
- Category: Comfyroll/Graphics/Template
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimpleBanner node aims to create visually appealing banners from provided images and text. It intelligently adjusts text size and position, ensuring the banner is both readable and aesthetically pleasing, offering customization options for font, color, and outline to meet different design needs.

# Input types
## Required
- image
    - The image parameter is crucial for the banner creation process, as it forms the visual foundation of the output. It determines the canvas on which the text will be rendered.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- banner_text
    - Banner text is a key input that conveys the information or message intended for the audience. It is the main content that will be styled and displayed on the banner.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
    - The font name parameter determines the style of the text on the banner, affecting the overall feel of the final output. It is a key factor in setting the tone for the banner message.
    - Comfy dtype: STRING
    - Python dtype: str
- max_font_size
    - The maximum font size parameter ensures that the text fits the banner dimensions while maintaining readability. This is a critical factor in laying out and designing the banner text.
    - Comfy dtype: INT
    - Python dtype: int
- font_color
    - The font color parameter allows customization of the text appearance, ensuring it stands out against the banner background for maximum visual impact.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- outline_thickness
    - The outline thickness parameter adds a border around the text, enhancing its visibility and giving it a more defined look. This is an optional feature that can be adjusted according to design preferences.
    - Comfy dtype: INT
    - Python dtype: int
- outline_color
    - The outline color parameter complements the text by defining the color of the text border, contributing to the overall aesthetic appeal of the banner.
    - Comfy dtype: STRING
    - Python dtype: str
- margin_size
    - The margin size parameter adjusts the spacing around the text, providing a balanced look and ensuring the text does not appear too cramped or too sparse on the banner.
    - Comfy dtype: INT
    - Python dtype: int
- font_color_hex
    - The font color hex parameter allows precise color customization of the text using hexadecimal values, providing a wide range of color choices for the banner text.
    - Comfy dtype: STRING
    - Python dtype: str
- outline_color_hex
    - The outline color hex parameter specifies the hexadecimal color value for the text outline, allowing detailed color adjustments and enhancing the visual design of the banner.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output image is the final banner that combines the styled text and design elements. It represents the outcome of all input parameters and customizations made to the banner.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The display help parameter provides a link to documentation for further guidance and assistance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimpleBanner:

    @classmethod
    def INPUT_TYPES(s):
        font_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts')
        file_list = [f for f in os.listdir(font_dir) if os.path.isfile(os.path.join(font_dir, f)) and f.lower().endswith('.ttf')]
        return {'required': {'image': ('IMAGE',), 'banner_text': ('STRING', {'multiline': True, 'default': 'text'}), 'font_name': (file_list,), 'max_font_size': ('INT', {'default': 150, 'min': 20, 'max': 2048}), 'font_color': (COLORS,), 'outline_thickness': ('INT', {'default': 0, 'min': 0, 'max': 500}), 'outline_color': (COLORS,), 'margin_size': ('INT', {'default': 0, 'min': 0, 'max': 500})}, 'optional': {'font_color_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'outline_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'make_banner'
    CATEGORY = icons.get('Comfyroll/Graphics/Template')

    def make_banner(self, image, banner_text, font_name, max_font_size, font_color, outline_thickness, outline_color, margin_size, font_color_hex='#000000', outline_color_hex='#000000'):
        text_color = get_color_values(font_color, font_color_hex, color_mapping)
        outline_color = get_color_values(outline_color, outline_color_hex, color_mapping)
        total_images = []
        for img in image:
            back_image = tensor2pil(img).convert('RGBA')
            size = (back_image.width, back_image.height)
            font_file = os.path.join('fonts', font_name)
            resolved_font_path = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), font_file)
            draw = ImageDraw.Draw(back_image)
            area_width = back_image.width - margin_size * 2
            area_height = back_image.width - margin_size * 2
            font = get_font_size(draw, banner_text, area_width, area_height, resolved_font_path, max_font_size)
            x = back_image.width // 2
            y = back_image.height // 2
            if outline_thickness > 0:
                draw.text((x, y), banner_text, fill=text_color, font=font, anchor='mm', stroke_width=outline_thickness, stroke_fill=outline_color)
            else:
                draw.text((x, y), banner_text, fill=text_color, font=font, anchor='mm')
            out_image = np.array(back_image.convert('RGB')).astype(np.float32) / 255.0
            out_image = torch.from_numpy(out_image).unsqueeze(0)
            total_images.append(out_image)
        images_out = torch.cat(total_images, 0)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Template-Nodes#cr-simple-banner'
        return (images_out, show_help)
```