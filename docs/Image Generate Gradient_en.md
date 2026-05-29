# Documentation
- Class name: WAS_Image_Generate_Gradient
- Category: WAS Suite/Image/Generate
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Generate_Gradient node generates seamless gradient textures from a set of given color stops. It intelligently handles transitions between colors to ensure smooth gradients that can be tiled without visible seams. This is particularly useful for generating background textures for applications like games or 3D modeling that require seamless patterns.

# Input types
## Required
- gradient_stops
    - The gradient_stops parameter defines the color stops used to create the gradient. Each stop is specified as a percentage of the gradient length, followed by an RGB color value, separated by a colon. This parameter is critical for determining the colors and distribution of the gradient.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- width
    - The width parameter sets the width of the generated gradient image. It is an important parameter as it determines the horizontal resolution of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the generated gradient image. It is an important parameter as it determines the vertical resolution of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- direction
    - The direction parameter specifies the direction of the gradient. It can be 'horizontal' or 'vertical', affecting the layout of the color gradient in the output image.
    - Comfy dtype: COMBO['horizontal', 'vertical']
    - Python dtype: str
- tolerance
    - The tolerance parameter adjusts the blending at the edges of the gradient. Higher tolerance values can produce smoother transitions between colors but may result in a less distinct gradient.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output of the WAS_Image_Generate_Gradient node is a seamless gradient image that can be used as a texture. It is important as it provides the final visual result of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Generate_Gradient:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        gradient_stops = '0:255,0,0\n25:255,255,255\n50:0,255,0\n75:0,0,255'
        return {'required': {'width': ('INT', {'default': 512, 'max': 4096, 'min': 64, 'step': 1}), 'height': ('INT', {'default': 512, 'max': 4096, 'min': 64, 'step': 1}), 'direction': (['horizontal', 'vertical'],), 'tolerance': ('INT', {'default': 0, 'max': 255, 'min': 0, 'step': 1}), 'gradient_stops': ('STRING', {'default': gradient_stops, 'multiline': True})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_gradient'
    CATEGORY = 'WAS Suite/Image/Generate'

    def image_gradient(self, gradient_stops, width=512, height=512, direction='horizontal', tolerance=0):
        import io
        WTools = WAS_Tools_Class()
        colors_dict = {}
        stops = io.StringIO(gradient_stops.strip().replace(' ', ''))
        for stop in stops:
            parts = stop.split(':')
            colors = parts[1].replace('\n', '').split(',')
            colors_dict[parts[0].replace('\n', '')] = colors
        image = WTools.gradient((width, height), direction, colors_dict, tolerance)
        return (pil2tensor(image),)
```