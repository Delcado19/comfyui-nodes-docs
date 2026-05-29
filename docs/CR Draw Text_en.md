# Documentation
- Class name: CR_DrawText
- Category: Comfyroll/Graphics/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_DrawText node is designed to render text onto an image. It allows customization of font, color, and position to create visually appealing text overlays. This node is versatile and can be used in various applications where text needs to be dynamically added to images.

# Input types
## Required
- image_width
    - The width of the image on which the text will be drawn. This is a critical parameter that determines the overall size of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- image_height
    - The height of the image. It works together with the width to set the dimensions of the canvas on which the text will be rendered.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - The actual text content to be drawn onto the image. It can contain multiple lines of text to accommodate paragraphs or lists.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
    - The name of the font used for the text. It must be a valid .ttf font file available in the specified font directory.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - The size of the font, in points. It affects the readability and visual prominence of the text in the image.
    - Comfy dtype: INT
    - Python dtype: int
- font_color
    - The color of the font. It is specified by a name corresponding to a color in a predefined color map.
    - Comfy dtype: STRING
    - Python dtype: str
- background_color
    - The background color of the text area. It is used to create a contrasting background for the text, making it stand out more.
    - Comfy dtype: STRING
    - Python dtype: str
- align
    - The horizontal alignment of the text. It determines how the text is distributed across the width of the image.
    - Comfy dtype: STRING
    - Python dtype: str
- justify
    - The alignment of the text. It controls the spacing between words and characters in the text.
    - Comfy dtype: STRING
    - Python dtype: str
- margins
    - The space around the text, in pixels. It adds a buffer between the text and the edges of the image.
    - Comfy dtype: INT
    - Python dtype: int
- line_spacing
    - The space between lines of text, which affects the overall readability and layout of multi-line text.
    - Comfy dtype: INT
    - Python dtype: int
- position_x
    - The horizontal position where the text will start. It is measured in pixels, starting from the left edge of the image.
    - Comfy dtype: INT
    - Python dtype: int
- position_y
    - The vertical position where the text will start. It is measured in pixels, starting from the top edge of the image.
    - Comfy dtype: INT
    - Python dtype: int
- rotation_angle
    - The angle by which the text will be rotated. It can be used to create stylized effects by tilting the text.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation_options
    - Determines the pivot point for text rotation. It can be the center of the text or the center of the image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The resulting image with the text drawn on it. It is the primary output of the node, representing the final visual product.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- show_help
    - A URL link to the node documentation. It provides additional information and guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_DrawText:

    @classmethod
    def INPUT_TYPES(s):
        font_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts')
        file_list = [f for f in os.listdir(font_dir) if os.path.isfile(os.path.join(font_dir, f)) and f.lower().endswith('.ttf')]
        return {'required': {'image_width': ('INT', {'default': 512, 'min': 64, 'max': 2048}), 'image_height': ('INT', {'default': 512, 'min': 64, 'max': 2048}), 'text': ('STRING', {'multiline': True, 'default': 'text'}), 'font_name': (file_list,), 'font_size': ('INT', {'default': 50, 'min': 1, 'max': 1024}), 'font_color': (COLORS,), 'background_color': (COLORS,), 'align': (ALIGN_OPTIONS,), 'justify': (JUSTIFY_OPTIONS,), 'margins': ('INT', {'default': 0, 'min': -1024, 'max': 1024}), 'line_spacing': ('INT', {'default': 0, 'min': -1024, 'max': 1024}), 'position_x': ('INT', {'default': 0, 'min': -4096, 'max': 4096}), 'position_y': ('INT', {'default': 0, 'min': -4096, 'max': 4096}), 'rotation_angle': ('FLOAT', {'default': 0.0, 'min': -360.0, 'max': 360.0, 'step': 0.1}), 'rotation_options': (ROTATE_OPTIONS,)}, 'optional': {'font_color_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'bg_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'draw_text'
    CATEGORY = icons.get('Comfyroll/Graphics/Text')

    def draw_text(self, image_width, image_height, text, font_name, font_size, font_color, background_color, margins, line_spacing, position_x, position_y, align, justify, rotation_angle, rotation_options, font_color_hex='#000000', bg_color_hex='#000000'):
        text_color = get_color_values(font_color, font_color_hex, color_mapping)
        bg_color = get_color_values(background_color, bg_color_hex, color_mapping)
        size = (image_width, image_height)
        text_image = Image.new('RGB', size, text_color)
        back_image = Image.new('RGB', size, bg_color)
        text_mask = Image.new('L', back_image.size)
        rotated_text_mask = draw_masked_text(text_mask, text, font_name, font_size, margins, line_spacing, position_x, position_y, align, justify, rotation_angle, rotation_options)
        image_out = Image.composite(text_image, back_image, rotated_text_mask)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Text-Nodes#cr-draw-text'
        return (pil2tensor(image_out), show_help)
```