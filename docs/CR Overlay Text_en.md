# Documentation
- Class name: CR_OverlayText
- Category: Comfyroll/Graphics/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_OverlayText node overlays text onto an image, offering customization options such as font size, color, and rotation. It integrates text elements in a user-defined way, enhancing visual appeal and information density of the image.

# Input types
## Required
- image
- The base image onto which text will be overlaid. It serves as the canvas for text visualization.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- text
- The text content to overlay on the image. It may contain multiple lines and is the core of the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
- The font used for the text overlay. Font choice affects style and readability.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
- The font size for the text. Larger sizes make text more prominent; smaller sizes create a subtle effect.
    - Comfy dtype: INT
    - Python dtype: int
- font_color
- The font color for the text overlay. Color choice influences contrast and visual impact on the image.
    - Comfy dtype: STRING
    - Python dtype: str
- align
- The horizontal alignment of the text on the image. This is crucial for aesthetically positioning the text.
    - Comfy dtype: STRING
    - Python dtype: str
- justify
- The alignment of text within the specified margins. It affects spacing between words on each line.
    - Comfy dtype: STRING
    - Python dtype: str
- margins
- The margins around the text. Proper margins prevent crowding and improve readability.
    - Comfy dtype: INT
    - Python dtype: int
- line_spacing
- The spacing between text lines. Appropriate line spacing enhances readability.
    - Comfy dtype: INT
    - Python dtype: int
- position_x
- The horizontal start position (x-coordinate) of the text on the image.
    - Comfy dtype: INT
    - Python dtype: int
- position_y
- The vertical start position (y-coordinate) of the text on the image.
    - Comfy dtype: INT
    - Python dtype: int
- rotation_angle
- The rotation angle of the text. This can position text at various angles for creative effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation_options
- The rotation pivot for the text. It can be the center of the text or the center of the image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- font_color_hex
- A hexadecimal color code for the font. This allows custom colors not present in predefined options.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
- The resulting image with the text overlay applied. It represents the final visual output of the node operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- A documentation link for further guidance on using this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_OverlayText:

    @classmethod
    def INPUT_TYPES(s):
        font_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts')
        file_list = [f for f in os.listdir(font_dir) if os.path.isfile(os.path.join(font_dir, f)) and f.lower().endswith('.ttf')]
        return {'required': {'image': ('IMAGE',), 'text': ('STRING', {'multiline': True, 'default': 'text'}), 'font_name': (file_list,), 'font_size': ('INT', {'default': 50, 'min': 1, 'max': 1024}), 'font_color': (COLORS,), 'align': (ALIGN_OPTIONS,), 'justify': (JUSTIFY_OPTIONS,), 'margins': ('INT', {'default': 0, 'min': -1024, 'max': 1024}), 'line_spacing': ('INT', {'default': 0, 'min': -1024, 'max': 1024}), 'position_x': ('INT', {'default': 0, 'min': -4096, 'max': 4096}), 'position_y': ('INT', {'default': 0, 'min': -4096, 'max': 4096}), 'rotation_angle': ('FLOAT', {'default': 0.0, 'min': -360.0, 'max': 360.0, 'step': 0.1}), 'rotation_options': (ROTATE_OPTIONS,)}, 'optional': {'font_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'overlay_text'
    CATEGORY = icons.get('Comfyroll/Graphics/Text')

    def overlay_text(self, image, text, font_name, font_size, font_color, margins, line_spacing, position_x, position_y, align, justify, rotation_angle, rotation_options, font_color_hex='#000000'):
        text_color = get_color_values(font_color, font_color_hex, color_mapping)
        image_3d = image[0, :, :, :]
        back_image = tensor2pil(image_3d)
        text_image = Image.new('RGB', back_image.size, text_color)
        text_mask = Image.new('L', back_image.size)
        rotated_text_mask = draw_masked_text(text_mask, text, font_name, font_size, margins, line_spacing, position_x, position_y, align, justify, rotation_angle, rotation_options)
        image_out = Image.composite(text_image, back_image, rotated_text_mask)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Text-Nodes#cr-overlay-text'
        return (pil2tensor(image_out), show_help)
```