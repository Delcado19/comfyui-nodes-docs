# Documentation
- Class name: CR_RandomShapePattern
- Category: Comfyroll/Graphics/Shape
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_RandomShapePattern is a node that generates pattern images composed of randomly placed shapes. It provides a creative method for producing visually diverse and structured patterns, suitable for artistic expression or data visualization purposes. The node leverages randomness to select shapes, colors, and positions, ensuring each output is unique.

# Input types
## Required
- width
    - Width determines the horizontal extent of the output image. This is a critical parameter as it defines the overall scale of the pattern and the size of individual shapes within it.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical dimension of the generated image, affecting the vertical spacing and arrangement of shapes within the pattern.
    - Comfy dtype: INT
    - Python dtype: int
- num_rows
    - Number of rows determines the vertical structure of the pattern grid, influencing the distribution of shapes along the height of the image.
    - Comfy dtype: INT
    - Python dtype: int
- num_cols
    - Number of columns specifies the horizontal structure of the pattern grid, determining the distribution of shapes across the width of the image.
    - Comfy dtype: INT
    - Python dtype: int
- color1
    - Color1 is one of two colors used to randomly fill shapes within the pattern. It contributes to the overall color scheme and visual contrast of the generated image.
    - Comfy dtype: COLORS
    - Python dtype: str
- color2
    - Color2 is the second color option used to fill shapes in the pattern. It is used alongside Color1 to create diverse and visually appealing color combinations.
    - Comfy dtype: COLORS
    - Python dtype: str
## Optional
- color1_hex
    - Color1 Hex allows the use of a custom hex color value for Color1, providing greater flexibility in color selection for shapes.
    - Comfy dtype: STRING
    - Python dtype: str
- color2_hex
    - Color2 Hex provides a method to specify a custom hex color value for Color2, enhancing the node's ability to produce a wide variety of color combinations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - Image output is the primary result of the node, displaying a pattern image composed of randomly placed shapes with varying colors and sizes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL link to the documentation page for additional help and information regarding the node's usage and functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_RandomShapePattern:

    @classmethod
    def INPUT_TYPES(cls):
        shapes = ['circle', 'oval', 'square', 'diamond', 'triangle', 'hexagon', 'octagon', 'half circle', 'quarter circle', 'starburst', 'star', 'cross']
        return {'required': {'width': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'num_rows': ('INT', {'default': 5, 'min': 1, 'max': 128}), 'num_cols': ('INT', {'default': 5, 'min': 1, 'max': 128}), 'color1': (COLORS,), 'color2': (COLORS,)}, 'optional': {'color1_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'color2_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'plot_random_shapes'
    CATEGORY = icons.get('Comfyroll/Graphics/Shape')

    def plot_random_shapes(self, num_rows, num_cols, width, height, color1, color2, color1_hex='#000000', color2_hex='#000000'):
        color1 = get_color_values(color1, color1_hex, color_mapping)
        color2 = get_color_values(color2, color2_hex, color_mapping)
        image = Image.new('RGB', (width, height), color='white')
        draw = ImageDraw.Draw(image)
        shape_functions = [draw_circle, draw_oval, draw_diamond, draw_square, draw_triangle, draw_hexagon, draw_octagon, draw_half_circle, draw_quarter_circle, draw_starburst, draw_star, draw_cross]
        for row in range(num_rows):
            for col in range(num_cols):
                shape_function = random.choice(shape_functions)
                color = random.choice([color1, color2])
                size = random.uniform(20, min(width, height) / 2)
                aspect_ratio = random.uniform(0.5, 2.0)
                center_x = col * (width / num_cols) + width / num_cols / 2
                center_y = row * (height / num_rows) + height / num_rows / 2
                shape_function(draw, center_x, center_y, size, aspect_ratio, color)
        image_out = pil2tensor(image)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pattern-Nodes-2#cr-random-shape-pattern'
        return (image_out, show_help)
```