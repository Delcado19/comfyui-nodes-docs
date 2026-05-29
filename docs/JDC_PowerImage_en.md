# Documentation
- Class name: PowerImage
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

This node enhances images by adjusting brightness and contrast according to specified power factors and modes, allowing manipulation of visual elements to meet specific aesthetic or analytical requirements.

# Input types
## Required
- IMAGE
    - The source image to be processed by the node, serving as the base input for all enhancement operations.
    - Comfy dtype: PIL.Image
    - Python dtype: PIL.Image
- power_of
    - Controls the degree of enhancement applied to the image; higher values result in more pronounced effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - Determines the type of enhancement to apply, such as brightening, darkening, or emphasizing both aspects of the image simultaneously.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- IMAGE
    - The processed image with enhancements applied, ready for further use or analysis.
    - Comfy dtype: PIL.Image
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class PowerImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'IMAGE': ('IMAGE',), 'power_of': ('FLOAT', {'default': 1, 'min': 1, 'max': 65536, 'step': 0.01}), 'mode': (['darken', 'lighten', 'emphasize both'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'process_image'
    CATEGORY = 'image/postprocessing'

    def process_image(self, IMAGE, power_of, mode):
        cimg = conv_tensor_pil(IMAGE)
        (w, h) = cimg.size
        pbar = comfy.utils.ProgressBar(h)
        step = 0
        for y in range(h):
            for x in range(w):
                (r, g, b) = cimg.getpixel((x, y))
                if mode == 'lighten':
                    r *= 1 + pow(r / 255, power_of)
                    g *= 1 + pow(g / 255, power_of)
                    b *= 1 + pow(b / 255, power_of)
                elif mode == 'emphasize both':
                    r *= 0.5 + pow(r / 255, power_of)
                    g *= 0.5 + pow(g / 255, power_of)
                    b *= 0.5 + pow(b / 255, power_of)
                else:
                    r *= pow(r / 255, power_of)
                    g *= pow(g / 255, power_of)
                    b *= pow(b / 255, power_of)
                r = clamp(r, 0, 255)
                g = clamp(g, 0, 255)
                b = clamp(b, 0, 255)
                cimg.putpixel((x, y), (int(r), int(g), int(b)))
            step += 1
            pbar.update_absolute(step, h)
        return conv_pil_tensor(cimg)
```