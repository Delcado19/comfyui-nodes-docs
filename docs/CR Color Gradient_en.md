# Documentation
- Class name: CR_ColorGradient
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ColorGradient node is designed to generate a smooth color gradient between two specified colors, spanning the canvas either horizontally or vertically. It allows customization of the gradient's transition and distance, providing users with a versatile tool for creating visually appealing gradients for various applications.

# Input types
## Required
- width
    - The width parameter determines the width of the gradient canvas. It is a key factor in setting the output image size, influencing the overall scale of the gradient pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical size of the canvas, defining the canvas size together with the width, and directly impacts the display of the gradient.
    - Comfy dtype: INT
    - Python dtype: int
- start_color
    - The start color parameter specifies the initial color of the gradient. It is a fundamental input that sets the tone for the beginning of the color transition.
    - Comfy dtype: COLORS
    - Python dtype: str
- end_color
    - The end color parameter determines the final color of the gradient. It works together with the start color to create a seamless transition between the two colors.
    - Comfy dtype: COLORS
    - Python dtype: str
- orientation
    - The direction parameter determines whether the gradient is rendered horizontally or vertically. This choice significantly changes the orientation of the color transition across the canvas.
    - Comfy dtype: COMBO['vertical', 'horizontal']
    - Python dtype: str
## Optional
- linear_transition
    - The linear transition parameter controls the midpoint of the gradient transition, allowing fine-tuning of the gradient's spread across the canvas.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gradient_distance
    - The gradient distance parameter adjusts the length over which the gradient transition occurs, affecting the smoothness and range of the color blend.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_color_hex
    - The start color hex parameter allows the use of a custom hexadecimal color value as the start color of the gradient, providing greater flexibility in color selection.
    - Comfy dtype: STRING
    - Python dtype: str
- end_color_hex
    - The end color hex parameter allows specifying a custom hexadecimal color value for the end color of the gradient, enhancing the user's ability to define the color range.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The image output provides the generated color gradient as an image, which can be used for further processing or display purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The help output provides a link to documentation for further guidance on how to use the node and understand its functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ColorGradient:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'height': ('INT', {'default': 512, 'min': 64, 'max': 4096}), 'start_color': (COLORS,), 'end_color': (COLORS,), 'gradient_distance': ('FLOAT', {'default': 1, 'min': 0, 'max': 2, 'step': 0.05}), 'linear_transition': ('FLOAT', {'default': 0.5, 'min': 0, 'max': 1, 'step': 0.05}), 'orientation': (['vertical', 'horizontal'],)}, 'optional': {'start_color_hex': ('STRING', {'multiline': False, 'default': '#000000'}), 'end_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'draw'
    CATEGORY = icons.get('Comfyroll/Graphics/Pattern')

    def draw(self, width, height, start_color, end_color, orientation, linear_transition=0.5, gradient_distance=1, start_color_hex='#000000', end_color_hex='#000000'):
        if start_color == 'custom':
            color1_rgb = hex_to_rgb(start_color_hex)
        else:
            color1_rgb = color_mapping.get(start_color, (255, 255, 255))
        if end_color == 'custom':
            color2_rgb = hex_to_rgb(end_color_hex)
        else:
            color2_rgb = color_mapping.get(end_color, (0, 0, 0))
        canvas = np.zeros((height, width, 3), dtype=np.uint8)
        transition_pixel = int(linear_transition * (width if orientation == 'horizontal' else height))

        def get_gradient_value(pos, length, linear_transition, gradient_distance):
            transition_length = length * gradient_distance
            transition_start = linear_transition * length - transition_length / 2
            transition_end = linear_transition * length + transition_length / 2
            if pos < transition_start:
                return 0
            elif pos > transition_end:
                return 1
            else:
                return (pos - transition_start) / transition_length
        if orientation == 'horizontal':
            x = [0, width * linear_transition - 0.5 * width * gradient_distance, width * linear_transition + 0.5 * width * gradient_distance, width]
            y = [0, 0, 1, 1]
            t_values = np.interp(np.arange(width), x, y)
            for (i, t) in enumerate(t_values):
                interpolated_color = [int(c1 * (1 - t) + c2 * t) for (c1, c2) in zip(color1_rgb, color2_rgb)]
                canvas[:, i] = interpolated_color
        elif orientation == 'vertical':
            x = [0, height * linear_transition - 0.5 * height * gradient_distance, height * linear_transition + 0.5 * height * gradient_distance, height]
            y = [0, 0, 1, 1]
            t_values = np.interp(np.arange(height), x, y)
            for (j, t) in enumerate(t_values):
                interpolated_color = [int(c1 * (1 - t) + c2 * t) for (c1, c2) in zip(color1_rgb, color2_rgb)]
                canvas[j, :] = interpolated_color
        (fig, ax) = plt.subplots(figsize=(width / 100, height / 100))
        ax.imshow(canvas)
        plt.axis('off')
        plt.tight_layout(pad=0, w_pad=0, h_pad=0)
        plt.autoscale(tight=True)
        img_buf = io.BytesIO()
        plt.savefig(img_buf, format='png')
        img = Image.open(img_buf)
        image_out = pil2tensor(img.convert('RGB'))
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pattern-Nodes#cr-color-gradient'
        return (image_out, show_help)
```