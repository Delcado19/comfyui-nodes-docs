# Documentation
- Class name: CR_CompositeText
- Category: Graphics/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_CompositeText node is designed to overlay text onto an image background. It provides a comprehensive set of features to customize the appearance of the text, including font selection, size, alignment, and rotation. The primary purpose of this node is to create visually appealing composite images with text, which can be used for various purposes such as graphic design, branding, or social media content.

# Input types
## Required
- image_text
    - The image_text parameter is the source image onto which the text will be composited. It plays a crucial role in determining the final appearance of the output image, as the text will be placed on this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_background
    - The image_background parameter specifies the background image to be used in the composition. This is essential for setting the context in which the text appears.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The text parameter contains the actual text that will be rendered onto the image. It is a fundamental input as it directly affects the message conveyed by the final composite image.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
    - The font_name parameter is used to select the font for the text. It is important for controlling the style and readability of the text in the composite image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- font_size
    - The font_size parameter determines the size of the text. This is a critical factor affecting the visual prominence and readability of the text in the composition.
    - Comfy dtype: INT
    - Python dtype: int
- margins
    - The margins parameter specifies the space around the text. This is important to ensure the text does not appear crowded and maintains a clean and professional look.
    - Comfy dtype: INT
    - Python dtype: int
- line_spacing
    - The line_spacing parameter controls the vertical space between lines of text. It affects the overall layout and readability of multi-line text.
    - Comfy dtype: INT
    - Python dtype: int
- position_x
    - The position_x parameter sets the horizontal position of the text on the image. This is crucial for aligning the text in the composition to achieve the desired aesthetic effect.
    - Comfy dtype: INT
    - Python dtype: int
- position_y
    - The position_y parameter sets the vertical position of the text on the image. It works together with position_x to accurately place the text in the composition.
    - Comfy dtype: INT
    - Python dtype: int
- align
    - The align parameter determines the horizontal alignment of the text. This is critical for the overall composition and visual balance of the text in the image.
    - Comfy dtype: STRING
    - Python dtype: str
- justify
    - The justify parameter controls the distribution of text within the image, affecting how the text spans across the available width.
    - Comfy dtype: STRING
    - Python dtype: str
- rotation_angle
    - The rotation_angle parameter specifies the angle by which the text will be rotated. This is an important feature for adding a dynamic appearance to the text in the composite image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation_options
    - The rotation_options parameter determines the reference point for text rotation, which can be either the center of the text or the center of the image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output provides the final composite image with the text overlay. It is the primary result of the node's operation, representing the combined outcome of all input parameters and settings.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a URL linking to a documentation page for further assistance or details on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_CompositeText:

    @classmethod
    def INPUT_TYPES(s):
        font_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts')
        file_list = [f for f in os.listdir(font_dir) if os.path.isfile(os.path.join(font_dir, f)) and f.lower().endswith('.ttf')]
        return {'required': {'image_text': ('IMAGE',), 'image_background': ('IMAGE',), 'text': ('STRING', {'multiline': True, 'default': 'text'}), 'font_name': (file_list,), 'font_size': ('INT', {'default': 50, 'min': 1, 'max': 1024}), 'align': (ALIGN_OPTIONS,), 'justify': (JUSTIFY_OPTIONS,), 'margins': ('INT', {'default': 0, 'min': -1024, 'max': 1024}), 'line_spacing': ('INT', {'default': 0, 'min': -1024, 'max': 1024}), 'position_x': ('INT', {'default': 0, 'min': -4096, 'max': 4096}), 'position_y': ('INT', {'default': 0, 'min': -4096, 'max': 4096}), 'rotation_angle': ('FLOAT', {'default': 0.0, 'min': -360.0, 'max': 360.0, 'step': 0.1}), 'rotation_options': (ROTATE_OPTIONS,)}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'composite_text'
    CATEGORY = icons.get('Comfyroll/Graphics/Text')

    def composite_text(self, image_text, image_background, text, font_name, font_size, margins, line_spacing, position_x, position_y, align, justify, rotation_angle, rotation_options):
        image_text_3d = image_text[0, :, :, :]
        image_back_3d = image_background[0, :, :, :]
        text_image = tensor2pil(image_text_3d)
        back_image = tensor2pil(image_back_3d)
        text_mask = Image.new('L', back_image.size)
        rotated_text_mask = draw_masked_text(text_mask, text, font_name, font_size, margins, line_spacing, position_x, position_y, align, justify, rotation_angle, rotation_options)
        image_out = Image.composite(text_image, back_image, rotated_text_mask)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Text-Nodes#cr-composite-text'
        return (pil2tensor(image_out), show_help)
```