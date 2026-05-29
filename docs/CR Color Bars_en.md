# Documentation
- Class name: CR_ColorBars
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ColorBars node is designed to generate a visualization of color bars with customizable parameters. It allows users to specify the orientation, frequency, and colors of the bars, providing a versatile tool for creating patterns or testing display devices. This node contributes to the overall workflow by offering a simple method to produce and manipulate color bar patterns.

# Input types
## Required
- mode
    - The Mode parameter determines the type of color bars to generate. It is essential for setting the initial style of the pattern and influences the overall appearance of the output.
    - Comfy dtype: COMBO['2-color']
    - Python dtype: str
- width
    - The Width parameter sets the width of the color bar pattern. It is an important aspect of the node's functionality as it directly affects the dimensions of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The Height parameter defines the height of the color bar pattern. Similar to Width, it is a key factor in determining the size and proportions of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- color_1
    - The Color1 parameter specifies the first color used in the color bars. It plays a significant role in the visual outcome of the pattern, allowing creative control over the color scheme.
    - Comfy dtype: COLORS
    - Python dtype: str
- color_2
    - The Color2 parameter sets the second color of the color bars. It works in conjunction with Color1 to create contrast that enhances the visual impact of the pattern.
    - Comfy dtype: COLORS
    - Python dtype: str
- orientation
    - The Direction parameter determines the orientation in which the color bars are arranged. It is a fundamental setting that dictates the layout of the pattern.
    - Comfy dtype: COMBO['vertical', 'horizontal', 'diagonal', 'alt_diagonal']
    - Python dtype: str
- bar_frequency
    - The Bar Frequency parameter controls the frequency of the color bars. It is an important factor in determining the density and spacing of the bars within the pattern.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- offset
    - The Offset parameter adjusts the starting position of the color bars, allowing fine-tuning of the pattern's alignment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color1_hex
    - The Color1 Hex parameter allows users to input a custom hex color value for the first color, providing greater flexibility and precision in color selection.
    - Comfy dtype: STRING
    - Python dtype: str
- color2_hex
    - The Color2 Hex parameter enables users to specify a custom hex color value for the second color, enhancing the node's ability to produce a wide range of color combinations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The Image output provides the color bar pattern generated as an image. It is the primary result of the node's execution and is essential to the node's purpose.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a link to the documentation for further assistance and guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ColorBars:

    @classmethod
    def INPUT_TYPES(s):
        modes = ['2-color']
        return {'required': {'mode': (modes,), 'width': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'color_1': (COLORS,), 'color_2': (COLORS,), 'orientation': (['vertical', 'horizontal', 'diagonal', 'alt_diagonal'],), 'bar_frequency': ('INT', {'default': 5, 'min': 1, 'max': 200, 'step': 1}), 'offset': ('FLOAT', {'default': 0, 'min': 0, 'max': 20, 'step': 0.05})}, 'optional': {'color1_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'color2_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'draw'
    CATEGORY = icons.get('Comfyroll/Graphics/Pattern')

    def draw(self, mode, width, height, color_1, color_2, orientation, bar_frequency, offset=0, color1_hex='#000000', color2_hex='#000000'):
        if color_1 == 'custom':
            color1_rgb = hex_to_rgb(color1_hex)
        else:
            color1_rgb = color_mapping.get(color_1, (255, 255, 255))
        if color_2 == 'custom':
            color2_rgb = hex_to_rgb(color2_hex)
        else:
            color2_rgb = color_mapping.get(color_2, (0, 0, 0))
        canvas = np.zeros((height, width, 3), dtype=np.uint8)
        bar_width = width / bar_frequency
        bar_height = height / bar_frequency
        offset_pixels = int(offset * max(width, height))
        if orientation == 'vertical':
            for j in range(height):
                for i in range(width):
                    if (i + offset_pixels) // bar_width % 2 == 0:
                        canvas[j, i] = color1_rgb
                    else:
                        canvas[j, i] = color2_rgb
        elif orientation == 'horizontal':
            for j in range(height):
                for i in range(width):
                    if (j + offset_pixels) // bar_height % 2 == 0:
                        canvas[j, i] = color1_rgb
                    else:
                        canvas[j, i] = color2_rgb
        elif orientation == 'diagonal':
            bar_width = int(bar_height / np.tan(np.pi / 4)) * 2
            for j in range(height):
                for i in range(width):
                    bar_number = (i + j + offset_pixels) // bar_width
                    if bar_number % 2 == 0:
                        canvas[j, i] = color1_rgb
                    else:
                        canvas[j, i] = color2_rgb
        elif orientation == 'alt_diagonal':
            bar_width = int(bar_height / np.tan(np.pi / 4)) * 2
            for j in range(height):
                for i in range(width):
                    bar_number = (i - j + width + offset_pixels) // bar_width
                    if bar_number % 2 == 0:
                        canvas[j, i] = color1_rgb
                    else:
                        canvas[j, i] = color2_rgb
        (fig, ax) = plt.subplots(figsize=(width / 100, height / 100))
        ax.imshow(canvas)
        plt.axis('off')
        plt.tight_layout(pad=0, w_pad=0, h_pad=0)
        plt.autoscale(tight=True)
        img_buf = io.BytesIO()
        plt.savefig(img_buf, format='png')
        img = Image.open(img_buf)
        image_out = pil2tensor(img.convert('RGB'))
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pattern-Nodes#cr-color-bars'
        return (image_out, show_help)
```