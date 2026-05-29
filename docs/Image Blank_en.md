# Documentation
- Class name: WAS_Image_Blank
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Blank node generates a blank image with specified dimensions and color. It plays a key role in creating a visual canvas for further image processing tasks. The node is essential for initializing an image with desired size and color attributes, which can then be manipulated or used as a starting point for various image-related operations.

# Input types
## Required
- width
    - The 'width' parameter defines the width of the blank image to be generated. This is a fundamental attribute that determines the horizontal extent of the image. 'Width' is critical for setting the image's dimensions and influences the overall composition and layout of any subsequent image processing.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter sets the vertical dimension of the blank image. It is equally important as the width in defining the overall shape and structure of the image. This parameter ensures the generated image has the desired vertical extent, which is important for aligning with other visual elements or meeting specific display requirements.
    - Comfy dtype: INT
    - Python dtype: int
- red
    - The 'red' parameter specifies the intensity of the red channel in the blank image. It is a critical component in determining the overall color of the image. By adjusting the 'red' value, users can create images with specific red shades, which can be used for various purposes such as background colors or color filtering.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - The 'green' parameter controls the intensity of the green channel in the image. It works in conjunction with the red and blue parameters to produce the final color of the blank image. The 'green' value is important for achieving the desired color balance and hue, which may be essential for certain design or visual requirements.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - The 'blue' parameter determines the intensity of the blue channel, contributing to the overall color of the blank image. It is a fundamental element in the color mixing process, allowing users to fine-tune the image's color to meet specific visual or aesthetic standards.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The 'IMAGE' output provides the generated blank image with the specified dimensions and color. It serves as the foundation layer for any subsequent image manipulation or processing tasks. This output is important as it represents the primary result of the node's functionality, ready for downstream workflows.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Blank:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'width': ('INT', {'default': 512, 'min': 8, 'max': 4096, 'step': 1}), 'height': ('INT', {'default': 512, 'min': 8, 'max': 4096, 'step': 1}), 'red': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1}), 'green': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1}), 'blue': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'blank_image'
    CATEGORY = 'WAS Suite/Image'

    def blank_image(self, width, height, red, green, blue):
        width = width // 8 * 8
        height = height // 8 * 8
        blank = Image.new(mode='RGB', size=(width, height), color=(red, green, blue))
        return (pil2tensor(blank),)
```