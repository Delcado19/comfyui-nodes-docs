# Documentation
- Class name: CR_HalftoneGrid
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_HalftoneGrid is a node for creating halftone grid patterns with customizable parameters. It allows users to set the grid's width, height, dot style, frequency, and position, providing a versatile way to generate visually appealing patterns for graphic design purposes. The node's functionality centers on producing halftone effects, an image rendering method that uses dots of varying sizes and spacing to simulate different grayscale shades.

# Input types
## Required
- width
    - Width determines the horizontal extent of the halftone grid. This is a critical parameter as it directly affects the overall size and proportion of the generated pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical size of the grid, which is essential for controlling the vertical dimensions of the pattern and ensuring it fits the desired layout.
    - Comfy dtype: INT
    - Python dtype: int
- dot_style
    - Dot style defines the visual appearance of the dots within the grid, allowing customization of the pattern's aesthetic properties.
    - Comfy dtype: STYLES
    - Python dtype: str
- reverse_dot_style
    - Invert dot style provides an option to invert the dot pattern, creating a mirrored effect that can enhance the visual interest of the grid.
    - Comfy dtype: COMBO['No', 'Yes']
    - Python dtype: str
- dot_frequency
    - Dot frequency controls the number of dots within the grid, affecting the granularity and level of detail in the halftone pattern.
    - Comfy dtype: INT
    - Python dtype: int
- background_color
    - Background color sets the background color of the grid, which can be customized or set to a default color to complement the pattern.
    - Comfy dtype: COLORS
    - Python dtype: str
- x_pos
    - X position determines the horizontal positioning of the dot pattern within the grid, allowing precise control over pattern alignment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_pos
    - Y position sets the vertical positioning of the dot pattern, which is important for aligning the pattern within the vertical space of the grid.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- bg_color_hex
    - Background color hex allows the use of a custom hex color for the grid's background, providing additional flexibility in color selection.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - IMAGE output provides the generated halftone grid pattern as an image, available for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL link to the documentation page for further help and guidance on using the CR_HalftoneGrid node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_HalftoneGrid:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'dot_style': (STYLES,), 'reverse_dot_style': (['No', 'Yes'],), 'dot_frequency': ('INT', {'default': 50, 'min': 1, 'max': 200, 'step': 1}), 'background_color': (COLORS,), 'x_pos': ('FLOAT', {'default': 0.5, 'min': 0, 'max': 1, 'step': 0.01}), 'y_pos': ('FLOAT', {'default': 0.5, 'min': 0, 'max': 1, 'step': 0.01})}, 'optional': {'bg_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'halftone'
    CATEGORY = icons.get('Comfyroll/Graphics/Pattern')

    def halftone(self, width, height, dot_style, reverse_dot_style, dot_frequency, background_color, x_pos, y_pos, bg_color_hex='#000000'):
        if background_color == 'custom':
            bgc = bg_color_hex
        else:
            bgc = background_color
        reverse = ''
        if reverse_dot_style == 'Yes':
            reverse = '_r'
        (fig, ax) = plt.subplots(figsize=(width / 100, height / 100))
        dotsx = np.linspace(0, 1, dot_frequency)
        dotsy = np.linspace(0, 1, dot_frequency)
        (X, Y) = np.meshgrid(dotsx, dotsy)
        dist = np.sqrt((X - x_pos) ** 2 + (Y - y_pos) ** 2)
        fig.patch.set_facecolor(bgc)
        ax.scatter(X, Y, c=dist, cmap=dot_style + reverse)
        plt.axis('off')
        plt.tight_layout(pad=0, w_pad=0, h_pad=0)
        plt.autoscale(tight=True)
        img_buf = io.BytesIO()
        plt.savefig(img_buf, format='png')
        img = Image.open(img_buf)
        image_out = pil2tensor(img.convert('RGB'))
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pattern-Nodes#cr-halftone-grid'
        return (image_out, show_help)
```