# Documentation
- Class name: OffsetImage
- Category: image
- Output node: False
- Repo Ref: https://github.com/spinagon/ComfyUI-seamless-tiling

The OffsetImage node is designed to perform translation operations on the input image, shifting pixels based on the provided x and y axis percentage values. This node is important in creating visual effects and can be used for different image processing tasks such as alignment, composition, or data augmentation.

# Input types
## Required
- pixels
    - The 'pixels' parameter is the primary input of the OffsetImage node, representing the image data to be operated on. It is essential to the node's operation, as it determines what content will be translated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- x_percent
    - The 'x_percent' parameter specifies the percentage of the image width to move pixels along the x-axis. It affects the horizontal position of the image after the operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_percent
    - The 'y_percent' parameter determines the percentage of the image height to move pixels along the y-axis. It is important for determining the vertical position of the image after translation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- offset_image
    - The 'offset_image' output is the result of applying the translation to the input image. It represents the shifted image, which can be used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class OffsetImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pixels': ('IMAGE',), 'x_percent': ('FLOAT', {'default': 50.0, 'min': 0.0, 'max': 100.0, 'step': 1}), 'y_percent': ('FLOAT', {'default': 50.0, 'min': 0.0, 'max': 100.0, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'run'
    CATEGORY = 'image'

    def run(self, pixels, x_percent, y_percent):
        (n, y, x, c) = pixels.size()
        y = round(y * y_percent / 100)
        x = round(x * x_percent / 100)
        return (pixels.roll((y, x), (1, 2)),)
```