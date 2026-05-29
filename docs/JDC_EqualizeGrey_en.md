# Documentation
- Class name: Equalize
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

This node class aims to enhance contrast by adjusting the image histogram, which improves visual clarity and detail by spreading out pixel intensity values, making the image more suitable for further analysis or visualization, ensuring results are sharper and more visually appealing.

# Input types
## Required
- IMAGE
    - The IMAGE parameter is essential because it provides the input image to be processed by the node. It directly affects the output, determining the quality and appearance of the enhanced image. Without this input, the node cannot perform its intended function.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- IMAGE
    - The output IMAGE represents a processed version of the input with improved contrast and visual clarity. It is a direct result of the node's functionality and is critical for subsequent image analysis or display.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class Equalize:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'IMAGE': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'process_image'
    CATEGORY = 'image/postprocessing'

    def process_image(self, IMAGE):
        cimg = conv_tensor_pil(IMAGE)
        return conv_pil_tensor(ImageOps.equalize(cimg))
```