# Documentation
- Class name: Blur
- Category: postprocessing/Filters
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Blur node applies Gaussian blur to images, effectively reducing noise and smoothing edges, which is highly useful in post-processing steps for image analysis and enhancement.

# Input types
## Required
- image
    - The image parameter is required as it is the primary input for the blur operation. It determines the source data to be processed by the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blur_radius
    - The blur radius determines the degree of the blur effect. A larger radius results in more pronounced blurring, which may be important for the overall visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- sigma
    - The sigma parameter affects the standard deviation of the Gaussian kernel, directly influencing the smoothness of the blur. This is a key factor in achieving the desired aesthetic effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- blurred_image
    - The output is the blurred image, which is the processed result of the input image after applying Gaussian blur.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class Blur:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'blur_radius': ('INT', {'default': 1, 'min': 1, 'max': 15, 'step': 1}), 'sigma': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 10.0, 'step': 0.1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'blur'
    CATEGORY = 'postprocessing/Filters'

    def blur(self, image: torch.Tensor, blur_radius: int, sigma: float):
        if blur_radius == 0:
            return (image,)
        (batch_size, height, width, channels) = image.shape
        kernel_size = blur_radius * 2 + 1
        kernel = gaussian_kernel(kernel_size, sigma).repeat(channels, 1, 1).unsqueeze(1)
        image = image.permute(0, 3, 1, 2)
        blurred = F.conv2d(image, kernel, padding=kernel_size // 2, groups=channels)
        blurred = blurred.permute(0, 2, 3, 1)
        return (blurred,)
```