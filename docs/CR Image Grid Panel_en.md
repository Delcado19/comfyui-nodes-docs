# Documentation
- Class name: CR_ImageGridPanel
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ImageGridPanel is a node designed to efficiently create and organize image grids. It takes a series of images and arranges them into a structured grid layout, suitable for preview, composite display, and other uses. The node offers customizable border and outline settings to enhance visual appeal. It is especially useful for workflows that need to batch process images into a single, coherent grid.

# Input types
## Required
- images
    - The `images` parameter is a series of image tensors that will be arranged into a grid. This input is essential because it defines the grid's content. The images are processed and combined to form the grid layout.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- border_thickness
    - The `border_thickness` parameter specifies the thickness of the border applied around each image in the grid. It allows customization of the grid's appearance and can be adjusted for the desired aesthetics.
    - Comfy dtype: INT
    - Python dtype: int
- border_color
    - The `border_color` parameter determines the color of the border surrounding each image. It is an important aspect of node customization, allowing users to match the border color to the overall design theme.
    - Comfy dtype: COLOR
    - Python dtype: str
- outline_thickness
    - The `outline_thickness` parameter sets the thickness of the outline around each image. This optional feature can be used to make images in the grid stand out more.
    - Comfy dtype: INT
    - Python dtype: int
- outline_color
    - The `outline_color` parameter defines the color of the outline around each image. It complements the border and enhances visual distinction of each image in the grid.
    - Comfy dtype: COLOR
    - Python dtype: str
- max_columns
    - The `max_columns` parameter indicates the maximum number of columns in the grid. It is a key parameter that controls the layout and affects image distribution.
    - Comfy dtype: INT
    - Python dtype: int
- border_color_hex
    - The `border_color_hex` parameter allows setting the border color using a custom hexadecimal color value. It provides extra flexibility, letting users specify an exact border color that may not be available in predefined options.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The `image` output is the resulting grid panel composed of the input images, arranged in a structured layout. It represents the final product of the node's operation, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The `show_help` output provides a URL link to the documentation page for additional guidance and information on using the node and its features.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ImageGridPanel:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'border_thickness': ('INT', {'default': 0, 'min': 0, 'max': 1024}), 'border_color': (COLORS,), 'outline_thickness': ('INT', {'default': 0, 'min': 0, 'max': 1024}), 'outline_color': (COLORS[1:],), 'max_columns': ('INT', {'default': 5, 'min': 0, 'max': 256})}, 'optional': {'border_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'make_panel'
    CATEGORY = icons.get('Comfyroll/Graphics/Layout')

    def make_panel(self, images, border_thickness, border_color, outline_thickness, outline_color, max_columns, border_color_hex='#000000'):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Layout-Nodes#cr-image-grid-panel'
        border_color = get_color_values(border_color, border_color_hex, color_mapping)
        images = [tensor2pil(image) for image in images]
        images = apply_outline_and_border(images, outline_thickness, outline_color, border_thickness, border_color)
        combined_image = make_grid_panel(images, max_columns)
        image_out = pil2tensor(combined_image)
        return (image_out, show_help)
```