# Documentation
- Class name: CR_ColorPanel
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ColorPanel is a node for generating solid color panels. It allows users to specify panel size and color, then use it as image output. This node is versatile, serving as a foundation for more complex image compositions or as a standalone visual element.

# Input types
## Required
- panel_width
- The panel_width parameter defines the width of the color panel. It is crucial for setting the horizontal size of the output image and affects overall composition when combined with other visual elements.
    - Comfy dtype: INT
    - Python dtype: int
- panel_height
- The panel_height parameter determines the height of the color panel. Together with panel_width, it sets the overall image size, essential for creating a visually balanced layout.
    - Comfy dtype: INT
    - Python dtype: int
- fill_color
- The fill_color parameter sets the panel's fill color. It is a key aspect of the node's functionality, allowing customization of the panel's appearance to meet specific design requirements.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- fill_color_hex
- The fill_color_hex parameter provides an alternative way to specify the fill color using a hexadecimal value. It enables precise color control, especially when a specific hue is needed that is not directly available in predefined color options.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
- Image output is the color panel rendered as a tensor. It represents the visual result of the node's operation and can be used as input for further image processing or displayed directly.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- The show_help output provides a URL link to the node documentation. It is useful for users seeking additional guidance or information on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ColorPanel:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'panel_width': ('INT', {'default': 512, 'min': 8, 'max': 4096}), 'panel_height': ('INT', {'default': 512, 'min': 8, 'max': 4096}), 'fill_color': (COLORS,)}, 'optional': {'fill_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'make_panel'
    CATEGORY = icons.get('Comfyroll/Graphics/Layout')

    def make_panel(self, panel_width, panel_height, fill_color, fill_color_hex='#000000'):
        fill_color = get_color_values(fill_color, fill_color_hex, color_mapping)
        size = (panel_width, panel_height)
        panel = Image.new('RGB', size, fill_color)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Layout-Nodes#cr-color-panel'
        return (pil2tensor(panel), show_help)
```