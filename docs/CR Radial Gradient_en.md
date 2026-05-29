# Documentation
- Class name: CR_RadialGradient
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_RadialGradient node is designed to generate radial gradient images. It provides a seamless way to gradient from a start color to an end color over a specified width and height, while allowing customization of the radial center and gradient distance.

# Input types
## Required
- width
    - The width parameter defines the width of the output image. It is crucial because it determines the horizontal extent of the gradient pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the output image. It is critical because it determines the vertical extent of the gradient pattern.
    - Comfy dtype: INT
    - Python dtype: int
- start_color
    - The start color parameter specifies the initial color of the radial gradient. It plays an important role in determining the overall appearance of the gradient effect.
    - Comfy dtype: COLORS
    - Python dtype: str
- end_color
    - The end color parameter determines the final color of the radial gradient. It is important in setting the destination color in the gradient transition.
    - Comfy dtype: COLORS
    - Python dtype: str
## Optional
- radial_center_x
    - The radial center x parameter adjusts the horizontal position of the radial gradient center. It affects the distribution of colors on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- radial_center_y
    - The radial center y parameter sets the vertical position of the radial gradient center. It affects how the gradient color spreads across the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gradient_distance
    - The gradient distance parameter controls the spread of the gradient, determining the speed of color transition from the start color to the end color.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_color_hex
    - The start color hex parameter allows setting a custom hex color as the start color, providing flexibility for precise color specification.
    - Comfy dtype: STRING
    - Python dtype: str
- end_color_hex
    - The end color hex parameter allows specifying a custom hex color for the end color, providing control over the exact color used at the gradient endpoint.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output provides the generated radial gradient image, which is the main result of the node execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_Help
    - The show_Help output provides a link to the documentation for further guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_RadialGradient:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'start_color': (COLORS,), 'end_color': (COLORS,), 'gradient_distance': ('FLOAT', {'default': 1, 'min': 0, 'max': 2, 'step': 0.05}), 'radial_center_x': ('FLOAT', {'default': 0.5, 'min': 0, 'max': 1, 'step': 0.05}), 'radial_center_y': ('FLOAT', {'default': 0.5, 'min': 0, 'max': 1, 'step': 0.05})}, 'optional': {'start_color_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'end_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_Help')
    FUNCTION = 'draw'
    CATEGORY = icons.get('Comfyroll/Graphics/Pattern')

    def draw(self, width, height, start_color, end_color, radial_center_x=0.5, radial_center_y=0.5, gradient_distance=1, start_color_hex='#000000', end_color_hex='#000000'):
        if start_color == 'custom':
            color1_rgb = hex_to_rgb(start_color_hex)
        else:
            color1_rgb = color_mapping.get(start_color, (255, 255, 255))
        if end_color == 'custom':
            color2_rgb = hex_to_rgb(end_color_hex)
        else:
            color2_rgb = color_mapping.get(end_color, (0, 0, 0))
        canvas = np.zeros((height, width, 3), dtype=np.uint8)
        center_x = int(radial_center_x * width)
        center_y = int(radial_center_y * height)
        max_distance = np.sqrt(max(center_x, width - center_x) ** 2 + max(center_y, height - center_y) ** 2) * gradient_distance
        for i in range(width):
            for j in range(height):
                distance_to_center = np.sqrt((i - center_x) ** 2 + (j - center_y) ** 2)
                t = distance_to_center / max_distance
                t = max(0, min(t, 1))
                interpolated_color = [int(c1 * (1 - t) + c2 * t) for (c1, c2) in zip(color1_rgb, color2_rgb)]
                canvas[j, i] = interpolated_color
        (fig, ax) = plt.subplots(figsize=(width / 100, height / 100))
        ax.imshow(canvas)
        plt.axis('off')
        plt.tight_layout(pad=0, w_pad=0, h_pad=0)
        plt.autoscale(tight=True)
        img_buf = io.BytesIO()
        plt.savefig(img_buf, format='png')
        img = Image.open(img_buf)
        image_out = pil2tensor(img.convert('RGB'))
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pattern-Nodes#cr-radial-gradiant'
        return (image_out, show_help)
```