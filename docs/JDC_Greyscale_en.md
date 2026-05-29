# Documentation
- Class name: GreyScale
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

This node converts the input color image to a grayscale image, enhancing visual detail clarity by focusing on luminance changes. It is a fundamental step in the image processing pipeline, enabling subsequent tasks such as feature extraction and image analysis to operate more effectively on simplified grayscale data.

# Input types
## Required
- IMAGE
    - The IMAGE parameter is required because it provides the original input for the grayscale conversion. It influences the node's overall operation and determines the output image's size and quality.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- IMAGE
    - The output IMAGE is the grayscale-processed version of the input image, essential for subsequent image analysis tasks and serving as a foundational layer in the image processing stack.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class GreyScale:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'IMAGE': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'process_image'
    CATEGORY = 'image/postprocessing'

    def process_image(self, IMAGE):
        cimg = conv_tensor_pil(IMAGE)
        gimg = ImageOps.grayscale(cimg)
        rgbimg = Image.new('RGB', (gimg.width, gimg.height))
        rgbimg.paste(gimg)
        return conv_pil_tensor(rgbimg)
```