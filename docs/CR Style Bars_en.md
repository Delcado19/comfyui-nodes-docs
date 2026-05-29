# Documentation
- Class name: CR_StyleBars
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_StyleBars is a node that generates bar‑style visual patterns for various graphic applications. It provides a way to create bar styles and direction ranges using parameters such as pattern, width, height, bar style, and frequency for customization. The node’s functionality focuses on producing a stylized image output that can be used for pattern design or as a visual aid in other contexts.

# Input types
## Required
- mode
    - The pattern parameter determines the visual pattern type the node will generate. It can be set to 'color bars', 'sin wave', or 'gradient bars', each producing a distinct visual effect. This parameter is critical because it defines the basic appearance of the output image.
    - Comfy dtype: COMBO['color bars', 'sin wave', 'gradient bars']
    - Python dtype: str
- width
    - The width parameter specifies the width of the generated image in pixels. It is an important aspect of the node’s functionality because it directly affects the size of the output image, influencing its visual presentation.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the generated image in pixels. Like width, it is a key determinant of image size, playing an important role in how the final pattern is displayed.
    - Comfy dtype: INT
    - Python dtype: int
- bar_style
    - The bar style parameter defines the color mapping applied to the bars in the generated image. It affects the visual appeal of the bars, allowing various styles to be represented.
    - Comfy dtype: STYLES
    - Python dtype: str
- orientation
    - The direction parameter determines whether the bars in the generated image are arranged vertically or horizontally. This choice influences the layout and flow of the pattern within the image.
    - Comfy dtype: COMBO['vertical', 'horizontal']
    - Python dtype: str
- bar_frequency
    - The bar frequency parameter controls how frequently bars appear in the generated image. It is an important factor in determining the density and spacing of the bars, contributing to the overall visual texture.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The image output provides a generated pattern as an image. It is the primary result of the node’s operation, essential for the pattern’s subsequent use in graphic design or other applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL link to documentation for further assistance or guidance on effectively using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_StyleBars:

    @classmethod
    def INPUT_TYPES(s):
        modes = ['color bars', 'sin wave', 'gradient bars']
        return {'required': {'mode': (modes,), 'width': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'bar_style': (STYLES,), 'orientation': (['vertical', 'horizontal'],), 'bar_frequency': ('INT', {'default': 5, 'min': 1, 'max': 200, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'draw'
    CATEGORY = icons.get('Comfyroll/Graphics/Pattern')

    def draw(self, mode, width, height, bar_style, orientation, bar_frequency):
        if orientation == 'vertical':
            x = np.linspace(0, 1, width)
            y = np.zeros((height, width))
        elif orientation == 'horizontal':
            x = np.zeros((height, width))
            y = np.linspace(0, 1, height)
        (X, Y) = np.meshgrid(x, y)
        if mode == 'color bars':
            bar_width = 1 / bar_frequency
            if orientation == 'vertical':
                colors = X // bar_width % 2
            elif orientation == 'horizontal':
                colors = Y // bar_width % 2
        elif mode == 'sin wave':
            if orientation == 'vertical':
                colors = np.sin(2 * np.pi * bar_frequency * X)
            elif orientation == 'horizontal':
                colors = np.sin(2 * np.pi * bar_frequency * Y)
        elif mode == 'gradient bars':
            if orientation == 'vertical':
                colors = X * bar_frequency * 2 % 2
            elif orientation == 'horizontal':
                colors = Y * bar_frequency * 2 % 2
        (fig, ax) = plt.subplots(figsize=(width / 100, height / 100))
        ax.imshow(colors, cmap=bar_style, aspect='auto')
        plt.axis('off')
        plt.tight_layout(pad=0, w_pad=0, h_pad=0)
        plt.autoscale(tight=True)
        img_buf = io.BytesIO()
        plt.savefig(img_buf, format='png')
        img = Image.open(img_buf)
        image_out = pil2tensor(img.convert('RGB'))
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pattern-Nodes#cr-style-bars'
        return (image_out, show_help)
```