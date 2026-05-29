# Documentation
- Class name: ImageScaleToTotalPixels
- Category: image/upscaling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageScaleToTotalPixels node is designed to resize an image to a specified total number of pixels. It offers multiple upscaling methods to ensure image quality is maintained during the scaling process. The main goal of this node is to provide a simple and efficient way to scale images for various applications without compromising visual fidelity.

# Input types
## Required
- image
    - The image parameter is crucial for the operation of the node, as it is the input that the node will process. It is the original data that will be upscaled to the desired total pixels, and its quality directly affects the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- upscale_method
    - The upscale_method parameter determines how the image will be resized. It is essential for controlling the quality of the upscaled image, allowing users to choose between different algorithms that may yield different results depending on the image content.
    - Comfy dtype: STRING
    - Python dtype: str
- megapixels
    - The megapixels parameter defines the target total number of pixels for the upscaled image. It is a key factor in the scaling process, determining the final dimensions of the image, i.e., its width and height.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- upscaled_image
    - The upscaled_image output represents the result of the scaling process. It is the main output of the node, containing the image resized to the specified total number of pixels, following the chosen upscaling method to maintain quality.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImageScaleToTotalPixels:
    upscale_methods = ['nearest-exact', 'bilinear', 'area', 'bicubic', 'lanczos']
    crop_methods = ['disabled', 'center']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'upscale_method': (s.upscale_methods,), 'megapixels': ('FLOAT', {'default': 1.0, 'min': 0.01, 'max': 16.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'upscale'
    CATEGORY = 'image/upscaling'

    def upscale(self, image, upscale_method, megapixels):
        samples = image.movedim(-1, 1)
        total = int(megapixels * 1024 * 1024)
        scale_by = math.sqrt(total / (samples.shape[3] * samples.shape[2]))
        width = round(samples.shape[3] * scale_by)
        height = round(samples.shape[2] * scale_by)
        s = comfy.utils.common_upscale(samples, width, height, upscale_method, 'disabled')
        s = s.movedim(1, -1)
        return (s,)
```