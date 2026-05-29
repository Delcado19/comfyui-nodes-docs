# Documentation
- Class name: ResizeFactor
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The ResizeFactor node is designed to resize images, scaling up or down by a specified factor. This process is crucial for adapting images to different display requirements or input specifications of subsequent image processing tasks.

# Input types
## Required
- IMAGE
    - The IMAGE parameter is required because it provides the source image to be resized by the node. It directly affects the output and determines the initial resolution and format of the image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- factor
    - The factor parameter is crucial for defining the scaling ratio of the image. It determines how much the image will be enlarged or reduced, thus changing the final dimensions.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- resampler
    - The resampler parameter is important for selecting the interpolation method used during resizing. It affects the quality and appearance of the resized image.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- IMAGE
    - The output IMAGE is the result of the resizing process, reflecting the new dimensions and potential quality changes based on the selected resampling method.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class ResizeFactor:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'IMAGE': ('IMAGE',), 'factor': ('FLOAT', {'default': 2, 'min': 0.01, 'max': 10, 'step': 0.01}), 'resampler': (['nearest', 'box', 'bilinear', 'bicubic', 'hamming', 'lanczos'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'process_image'
    CATEGORY = 'image/postprocessing'

    def process_image(self, IMAGE, factor, resampler):
        cimg = conv_tensor_pil(IMAGE)
        (w, h) = (int(cimg.width * factor), int(cimg.height * factor))
        sampler = get_pil_resampler(resampler)
        return conv_pil_tensor(cimg.resize((w, h), resample=sampler))
```