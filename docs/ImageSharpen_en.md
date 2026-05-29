# Documentation
- Class name: Sharpen
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Sharpen node is designed to enhance image details by applying a sharpening filter. It uses a Gaussian kernel to generate a sharpening mask that highlights edges and details in the image. This node's functionality is critical in post-processing tasks where image clarity and definition are paramount.

# Input types
## Required
- image
    - The input image is the primary data processed by the Sharpen node. It serves as the foundation for applying the sharpening effect, and its quality directly impacts the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- sharpen_radius
    - The sharpen_radius parameter determines the extent of the sharpening effect. A larger radius results in a more pronounced sharpening effect, while a smaller radius provides a subtler enhancement.
    - Comfy dtype: INT
    - Python dtype: int
- sigma
    - The sigma parameter controls the standard deviation of the Gaussian kernel used for sharpening. It affects the smoothness of the sharpening transition and the spread of the kernel's influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha
    - The alpha parameter adjusts the intensity of the sharpening effect. A higher alpha value produces a stronger sharpening effect, while a lower value yields a milder effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sharpened_image
    - The sharpened_image output is the result of applying the sharpening process to the input image. It showcases enhanced details and edges, providing a clearer and more defined visual representation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class Sharpen:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'sharpen_radius': ('INT', {'default': 1, 'min': 1, 'max': 31, 'step': 1}), 'sigma': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 10.0, 'step': 0.01}), 'alpha': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 5.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'sharpen'
    CATEGORY = 'image/postprocessing'

    def sharpen(self, image: torch.Tensor, sharpen_radius: int, sigma: float, alpha: float):
        if sharpen_radius == 0:
            return (image,)
        (batch_size, height, width, channels) = image.shape
        kernel_size = sharpen_radius * 2 + 1
        kernel = gaussian_kernel(kernel_size, sigma, device=image.device) * -(alpha * 10)
        center = kernel_size // 2
        kernel[center, center] = kernel[center, center] - kernel.sum() + 1.0
        kernel = kernel.repeat(channels, 1, 1).unsqueeze(1)
        tensor_image = image.permute(0, 3, 1, 2)
        tensor_image = F.pad(tensor_image, (sharpen_radius, sharpen_radius, sharpen_radius, sharpen_radius), 'reflect')
        sharpened = F.conv2d(tensor_image, kernel, padding=center, groups=channels)[:, :, sharpen_radius:-sharpen_radius, sharpen_radius:-sharpen_radius]
        sharpened = sharpened.permute(0, 2, 3, 1)
        result = torch.clamp(sharpened, 0, 1)
        return (result,)
```