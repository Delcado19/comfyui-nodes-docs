# Documentation
- Class name: CR_DrawShape
- Category: Comfyroll/Graphics/Shape
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_DrawShape is a versatile node designed to generate multiple geometric shapes and allow custom attributes. It emphasizes flexibility in shape creation, enabling users to define size, color, and orientation. The node also modifies the background and applies transformations such as rotation and scaling for customized visual output.

# Input types
## Required
- width
    - Width determines the horizontal range of the shape canvas, affecting the overall scale of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical size of the canvas, together with width defining the canvas dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- shape
    - Shape defines the geometric figure to draw, offering several standard shapes to choose from.
    - Comfy dtype: STRING
    - Python dtype: str
- shape_color
    - Shape color determines the hue of the shape itself, providing visual distinction and aesthetic appeal.
    - Comfy dtype: STRING
    - Python dtype: str
- back_color
    - Background color sets the canvas tone, providing contrast or complementary background for the shape.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- x_offset
    - X offset adjusts the horizontal position of the shape, allowing precise placement on the canvas.
    - Comfy dtype: INT
    - Python dtype: int
- y_offset
    - Y offset modifies the vertical position, giving control over the shape's location on the canvas.
    - Comfy dtype: INT
    - Python dtype: int
- zoom
    - Scale controls the shape's scaling factor, affecting its size on the canvas without changing canvas dimensions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation
    - Rotation applies a degree of rotation to the shape, enhancing its visual dynamics.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - IMAGE output provides the rendered shape as an image for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL to the node documentation for additional guidance and information.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_DrawShape:

    @classmethod
    def INPUT_TYPES(cls):
        shapes = ['circle', 'oval', 'square', 'diamond', 'triangle', 'hexagon', 'octagon', 'quarter circle', 'half circle', 'quarter circle', 'starburst', 'star', 'cross', 'diagonal regions']
        return {'required': {'width': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'shape': (shapes,), 'shape_color': (COLORS,), 'back_color': (COLORS,), 'x_offset': ('INT', {'default': 0, 'min': -2048, 'max': 2048}), 'y_offset': ('INT', {'default': 0, 'min': -2048, 'max': 2048}), 'zoom': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.05}), 'rotation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 3600.0, 'step': 0.1})}, 'optional': {'shape_color_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'bg_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'make_shape'
    CATEGORY = icons.get('Comfyroll/Graphics/Shape')

    def make_shape(self, width, height, rotation, shape, shape_color, back_color, x_offset=0, y_offset=0, zoom=1.0, shape_color_hex='#000000', bg_color_hex='#000000'):
        bg_color = get_color_values(back_color, bg_color_hex, color_mapping)
        shape_color = get_color_values(shape_color, shape_color_hex, color_mapping)
        back_img = Image.new('RGB', (width, height), color=bg_color)
        shape_img = Image.new('RGB', (width, height), color=shape_color)
        shape_mask = Image.new('L', (width, height))
        draw = ImageDraw.Draw(shape_mask)
        center_x = width // 2 + x_offset
        center_y = height // 2 + y_offset
        size = min(width - x_offset, height - y_offset) * zoom
        aspect_ratio = width / height
        color = 'white'
        shape_functions = {'circle': draw_circle, 'oval': draw_oval, 'diamond': draw_diamond, 'square': draw_square, 'triangle': draw_triangle, 'hexagon': draw_hexagon, 'octagon': draw_octagon, 'quarter circle': draw_quarter_circle, 'half circle': draw_half_circle, 'starburst': draw_starburst, 'star': draw_star, 'cross': draw_cross}
        if shape in shape_functions:
            shape_function = shape_functions.get(shape)
            shape_function(draw, center_x, center_y, size, aspect_ratio, color)
        if shape == 'diagonal regions':
            draw.polygon([(width, 0), (width, height), (0, height)], fill=color)
        shape_mask = shape_mask.rotate(rotation, center=(center_x, center_y))
        result_image = Image.composite(shape_img, back_img, shape_mask)
        image_out = pil2tensor(result_image)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pattern-Nodes-2#cr-draw-shape'
        return (image_out, show_help)
```