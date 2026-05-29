# Documentation
- Class name: CR_StarburstLines
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_StarburstLines node is designed to generate a visually appealing starburst pattern consisting of lines radiating uniformly from a central point. It allows customization of various parameters such as the number of lines, line length, and color to create a unique and symmetrical design.

# Input types
## Required
- width
    - The width parameter determines the width of the generated image. It is essential for setting the overall size of the starburst pattern and ensuring it fits the desired canvas size.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the image, and together with the width, it determines the full canvas size for the starburst pattern.
    - Comfy dtype: INT
    - Python dtype: int
- num_lines
    - The number of lines determines how many lines will form the starburst, affecting the complexity and visual symmetry of the final pattern.
    - Comfy dtype: INT
    - Python dtype: int
- line_length
    - The line length specifies how far each line extends from the center, contributing to the overall visual impact and radial distribution of the starburst.
    - Comfy dtype: FLOAT
    - Python dtype: float
- line_width
    - The line width parameter controls the thickness of each line in the starburst, affecting the prominence and detail of the pattern's appearance.
    - Comfy dtype: INT
    - Python dtype: int
- line_color
    - The line color defines the color of the lines in the starburst, allowing for creative expression and visual contrast in the design.
    - Comfy dtype: COLORS
    - Python dtype: str
- background_color
    - The background color sets the color of the canvas behind the starburst, providing a backdrop that complements the pattern and enhances its visibility.
    - Comfy dtype: COLORS
    - Python dtype: str
- center_x
    - Center x specifies the x-coordinate of the central point from which the starburst lines emanate, affecting the alignment of the pattern on the canvas.
    - Comfy dtype: INT
    - Python dtype: int
- center_y
    - Center y determines the y-coordinate of the starburst center, affecting the vertical positioning of the pattern.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- rotation
    - Rotation allows adjusting the orientation of the starburst pattern by a specified number of degrees, providing control over the pattern's direction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- line_color_hex
    - Line color hex provides a hex color code for customizing the line color, enabling more precise color selection for the starburst lines.
    - Comfy dtype: STRING
    - Python dtype: str
- bg_color_hex
    - Background color hex provides a hex color code for customizing the background color, allowing personalization of the canvas background.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output contains the rendered starburst pattern as an image file, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a link to documentation for additional information and guidance on using the CR_StarburstLines node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_StarburstLines:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'num_lines': ('INT', {'default': 6, 'min': 1, 'max': 500}), 'line_length': ('FLOAT', {'default': 5, 'min': 0, 'max': 100, 'step': 0.1}), 'line_width': ('INT', {'default': 5, 'min': 1, 'max': 512}), 'line_color': (COLORS,), 'background_color': (COLORS,), 'center_x': ('INT', {'default': 0, 'min': 0, 'max': 1024}), 'center_y': ('INT', {'default': 0, 'min': 0, 'max': 1024}), 'rotation': ('FLOAT', {'default': 0, 'min': 0, 'max': 720})}, 'optional': {'line_color_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'bg_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'draw'
    CATEGORY = icons.get('Comfyroll/Graphics/Pattern')

    def draw(self, width, height, num_lines, line_length, line_width, line_color, background_color, center_x, center_y, rotation=0, line_color_hex='#000000', bg_color_hex='#000000'):
        if line_color == 'custom':
            line_color = line_color_hex
        else:
            line_color = line_color
        if background_color == 'custom':
            bgc = bg_color_hex
        else:
            bgc = background_color
        angle = 360 / num_lines
        (fig, ax) = plt.subplots(figsize=(width / 100, height / 100))
        plt.xlim(-width / 100, width / 100)
        plt.ylim(-height / 100, height / 100)
        plt.axis('off')
        plt.tight_layout(pad=0, w_pad=0, h_pad=0)
        plt.autoscale(False)
        center_x = center_x / 100
        center_y = center_y / 100
        for i in range(num_lines):
            x_unrotated = center_x + line_length * np.cos(np.radians(i * angle))
            y_unrotated = center_y + line_length * np.sin(np.radians(i * angle))
            x = center_x + x_unrotated * np.cos(np.radians(rotation)) - y_unrotated * np.sin(np.radians(rotation))
            y = center_y + x_unrotated * np.sin(np.radians(rotation)) + y_unrotated * np.cos(np.radians(rotation))
            fig.patch.set_facecolor(bgc)
            ax.plot([center_x, x], [center_y, y], color=line_color, linewidth=line_width)
        img_buf = io.BytesIO()
        plt.savefig(img_buf, format='png')
        img = Image.open(img_buf)
        image_out = pil2tensor(img.convert('RGB'))
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pattern-Nodes#cr-starburst-lines'
        return (image_out, show_help)
```