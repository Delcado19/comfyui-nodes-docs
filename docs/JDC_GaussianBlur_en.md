# Documentation
- Class name: GaussianBlur
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

This node applies Gaussian blur to the image, often used to reduce noise or create soft effects. It emphasizes the node's role in improving image quality and preparing for further processing by smoothing the image appearance.

# Input types
## Required
- IMAGE
    - The image parameter is required because it is the main input for the Gaussian blur operation. It determines the quality and characteristics of the output after processing.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- blur_radius
    - The blur radius parameter controls the extent of the blur effect. It affects the smoothness of the final image, with larger radii resulting in more pronounced blur.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - The output image is the result after applying Gaussian blur. It represents the transformation of the input image, now with reduced noise and a softer appearance.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class GaussianBlur:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'IMAGE': ('IMAGE',), 'blur_radius': ('FLOAT', {'default': 1, 'min': 1, 'max': 1024, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'process_image'
    CATEGORY = 'image/postprocessing'

    def process_image(self, IMAGE, blur_radius):
        img = conv_tensor_pil(IMAGE)
        return conv_pil_tensor(img.filter(ImageFilter.GaussianBlur(blur_radius)))
```