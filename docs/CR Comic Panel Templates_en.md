# Documentation
- Class name: CR_ComicPanelTemplates
- Category: Comfyroll/Graphics/Template
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ComicPanelTemplates is a node for creating comic panel layouts from a set of images. It allows customization of panel layout, reading direction, and the colors of borders, outlines, and backgrounds. This node can handle predefined and custom panel layouts to create comic strip effects.

# Input types
## Required
- page_width
    - page_width parameter determines the width of the comic panel layout. It is crucial for setting the overall size of the output and affects the spacing and arrangement of panels within the layout.
    - Comfy dtype: INT
    - Python dtype: int
- page_height
    - page_height parameter sets the height of the comic panel layout. It works together with page_width to determine the overall canvas size of the comic strip.
    - Comfy dtype: INT
    - Python dtype: int
- template
    - template parameter specifies the predefined or custom layout of the comic panels. It is a key input that determines the structure of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- reading_direction
    - reading_direction parameter determines the reading flow of the comic panels, which can be from left to right or from right to left, which is crucial for reading the panels in the correct order.
    - Comfy dtype: STRING
    - Python dtype: str
- border_thickness
    - border_thickness parameter defines the thickness of the border around each comic panel. It contributes to the aesthetics and clarity of individual panels.
    - Comfy dtype: INT
    - Python dtype: int
- outline_thickness
    - outline_thickness parameter sets the thickness of the outline around each panel, enhancing the visual distinction between panels.
    - Comfy dtype: INT
    - Python dtype: int
- outline_color
    - outline_color parameter specifies the color of the outline around each comic panel, which plays a role in the overall visual style of the layout.
    - Comfy dtype: STRING
    - Python dtype: str
- panel_color
    - panel_color parameter determines the background color of each comic panel, setting the basis for the artwork inside.
    - Comfy dtype: STRING
    - Python dtype: str
- background_color
    - background_color parameter sets the background color of the entire comic panel layout, providing a backdrop canvas for the panels.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- images
    - images parameter is an optional list of image tensors that will be used to fill the comic panels. It allows dynamic content filling within the layout.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- custom_panel_layout
    - custom_panel_layout parameter accepts a string that defines a custom grid layout of panels. It is used when the 'custom' template is selected.
    - Comfy dtype: STRING
    - Python dtype: str
- outline_color_hex
    - outline_color_hex parameter provides the hexadecimal color value for the outline, providing an alternative way to specify the outline color.
    - Comfy dtype: STRING
    - Python dtype: str
- panel_color_hex
    - panel_color_hex parameter allows specifying a hexadecimal color value for the panel background, offering flexibility in color selection.
    - Comfy dtype: STRING
    - Python dtype: str
- bg_color_hex
    - bg_color_hex parameter sets the hexadecimal color value for the overall layout background, providing a direct way to input the background color.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - image output contains the rendered comic panel layout as an image tensor, which can be used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL pointing to the documentation page for additional guidance on using this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ComicPanelTemplates:

    @classmethod
    def INPUT_TYPES(s):
        directions = ['left to right', 'right to left']
        templates = ['custom', 'G22', 'G33', 'H2', 'H3', 'H12', 'H13', 'H21', 'H23', 'H31', 'H32', 'V2', 'V3', 'V12', 'V13', 'V21', 'V23', 'V31', 'V32']
        return {'required': {'page_width': ('INT', {'default': 512, 'min': 8, 'max': 4096}), 'page_height': ('INT', {'default': 512, 'min': 8, 'max': 4096}), 'template': (templates,), 'reading_direction': (directions,), 'border_thickness': ('INT', {'default': 5, 'min': 0, 'max': 1024}), 'outline_thickness': ('INT', {'default': 2, 'min': 0, 'max': 1024}), 'outline_color': (COLORS,), 'panel_color': (COLORS,), 'background_color': (COLORS,)}, 'optional': {'images': ('IMAGE',), 'custom_panel_layout': ('STRING', {'multiline': False, 'default': 'H123'}), 'outline_color_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'panel_color_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'bg_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'layout'
    CATEGORY = icons.get('Comfyroll/Graphics/Template')

    def layout(self, page_width, page_height, template, reading_direction, border_thickness, outline_thickness, outline_color, panel_color, background_color, images=None, custom_panel_layout='G44', outline_color_hex='#000000', panel_color_hex='#000000', bg_color_hex='#000000'):
        panels = []
        k = 0
        len_images = 0
        if images is not None:
            images = [tensor2pil(image) for image in images]
            len_images = len(images)
        outline_color = get_color_values(outline_color, outline_color_hex, color_mapping)
        panel_color = get_color_values(panel_color, panel_color_hex, color_mapping)
        bg_color = get_color_values(background_color, bg_color_hex, color_mapping)
        size = (page_width - 2 * border_thickness, page_height - 2 * border_thickness)
        page = Image.new('RGB', size, bg_color)
        draw = ImageDraw.Draw(page)
        if template == 'custom':
            template = custom_panel_layout
        first_char = template[0]
        if first_char == 'G':
            rows = int(template[1])
            columns = int(template[2])
            panel_width = (page.width - 2 * columns * (border_thickness + outline_thickness)) // columns
            panel_height = (page.height - 2 * rows * (border_thickness + outline_thickness)) // rows
            for i in range(rows):
                for j in range(columns):
                    create_and_paste_panel(page, border_thickness, outline_thickness, panel_width, panel_height, page.width, panel_color, bg_color, outline_color, images, i, j, k, len_images, reading_direction)
                    k += 1
        elif first_char == 'H':
            rows = len(template) - 1
            panel_height = (page.height - 2 * rows * (border_thickness + outline_thickness)) // rows
            for i in range(rows):
                columns = int(template[i + 1])
                panel_width = (page.width - 2 * columns * (border_thickness + outline_thickness)) // columns
                for j in range(columns):
                    create_and_paste_panel(page, border_thickness, outline_thickness, panel_width, panel_height, page.width, panel_color, bg_color, outline_color, images, i, j, k, len_images, reading_direction)
                    k += 1
        elif first_char == 'V':
            columns = len(template) - 1
            panel_width = (page.width - 2 * columns * (border_thickness + outline_thickness)) // columns
            for j in range(columns):
                rows = int(template[j + 1])
                panel_height = (page.height - 2 * rows * (border_thickness + outline_thickness)) // rows
                for i in range(rows):
                    create_and_paste_panel(page, border_thickness, outline_thickness, panel_width, panel_height, page.width, panel_color, bg_color, outline_color, images, i, j, k, len_images, reading_direction)
                    k += 1
        if border_thickness > 0:
            page = ImageOps.expand(page, border_thickness, bg_color)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Template-Nodes#cr-comic-panel-templates'
        return (pil2tensor(page), show_help)
```