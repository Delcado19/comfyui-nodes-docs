# Documentation
- Class name: CR_SimpleTextPanel
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimpleTextPanel aims to create visually appealing text panels with customizable font, color, and layout options. It allows rendering text onto image backgrounds with various styling features such as font outlines and alignment to enhance the presentation of text information.

# Input types
## Required
- panel_width
    - The width of the text panel determines the horizontal range of the output image. This is a critical parameter as it defines the space available for text content, affecting the overall layout and appearance.
    - Comfy dtype: INT
    - Python dtype: int
- panel_height
    - The height of the text panel sets the vertical dimension of the panel, which is essential for controlling the vertical space for text and ensuring the text fits within the image boundaries.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - The text parameter is the actual content to be displayed on the panel. It can contain multiple lines of text, which is particularly useful for longer paragraphs or when a more complex layout is needed.
    - Comfy dtype: STRING
    - Python dtype: str
- font_name
    - The font name parameter specifies the type of font used for the text. The choice of font can significantly affect the style and readability of the text within the panel.
    - Comfy dtype: STRING
    - Python dtype: str
- font_color
    - The font color determines the color of the text, allowing users to match the text with the background or a specific design theme. It plays a crucial role in ensuring text readability and visual contrast.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - The font size controls the scale of the text, which is an important factor for readability and adjusting the text to fit the specified panel dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- font_outline_thickness
    - The thickness of the font outline adds emphasis to the text and can improve its visibility on complex backgrounds. This is an optional styling choice that can enhance the appearance of the text.
    - Comfy dtype: INT
    - Python dtype: int
- font_outline_color
    - The font outline color provides a contrasting boundary that can enhance the definition of the text and make it stand out from the background, especially when the font color and background are similar.
    - Comfy dtype: STRING
    - Python dtype: str
- background_color
    - The background color sets the base tone for the text panel and can influence the overall mood and aesthetic of the design. It is a key element in creating a harmonious visual composition.
    - Comfy dtype: STRING
    - Python dtype: str
- align
    - The alignment parameter determines the horizontal alignment of the text within the panel, which can affect the symmetry and balance of the design.
    - Comfy dtype: STRING
    - Python dtype: str
- justify
    - The alignment option controls the spacing between words and characters, ensuring the text is evenly aligned along the left and right margins.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The result image is the primary output of the CR_SimpleTextPanel node, containing the styled text laid out on the specified background. It represents the final visual product of the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a URL link to the documentation page for further help or information about the node's usage and functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SimpleTextPanel:

    @classmethod
    def INPUT_TYPES(s):
        font_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts')
        file_list = [f for f in os.listdir(font_dir) if os.path.isfile(os.path.join(font_dir, f)) and f.lower().endswith('.ttf')]
        return {'required': {'panel_width': ('INT', {'default': 512, 'min': 8, 'max': 4096}), 'panel_height': ('INT', {'default': 512, 'min': 8, 'max': 4096}), 'text': ('STRING', {'multiline': True, 'default': 'text'}), 'font_name': (file_list,), 'font_color': (COLORS,), 'font_size': ('INT', {'default': 100, 'min': 0, 'max': 1024}), 'font_outline_thickness': ('INT', {'default': 0, 'min': 0, 'max': 50}), 'font_outline_color': (COLORS,), 'background_color': (COLORS,), 'align': (ALIGN_OPTIONS,), 'justify': (JUSTIFY_OPTIONS,)}, 'optional': {'font_color_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'bg_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'layout'
    CATEGORY = icons.get('Comfyroll/Graphics/Layout')

    def layout(self, panel_width, panel_height, text, align, justify, font_name, font_color, font_size, font_outline_thickness, font_outline_color, background_color, font_color_hex='#000000', font_outline_color_hex='#000000', bg_color_hex='#000000'):
        font_color = get_color_values(font_color, font_color_hex, color_mapping)
        outline_color = get_color_values(font_outline_color, font_outline_color_hex, color_mapping)
        bg_color = get_color_values(background_color, bg_color_hex, color_mapping)
        margins = 50
        line_spacing = 0
        position_x = 0
        position_y = 0
        rotation_angle = 0
        rotation_options = 'image center'
        panel = text_panel(panel_width, panel_height, text, font_name, font_size, font_color, font_outline_thickness, outline_color, bg_color, margins, line_spacing, position_x, position_y, align, justify, rotation_angle, rotation_options)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Layout-Nodes#cr-simple-text-panel'
        return (pil2tensor(panel), show_help)
```