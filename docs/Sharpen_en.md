# Documentation
- Class name: Sharpen
- Category: postprocessing/Filters
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Sharpen node enhances image clarity by boosting local contrast. It applies a sharpening kernel to the input image, amplifying edges and fine details to produce a more defined and crisp visual result.

# Input types
## Required
- image
    - The Image parameter is the primary input for the Sharpen node and is essential to its operation. It determines the source material to be sharpened, directly affecting the quality and clarity of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- sharpen_radius
    - The Sharpen Radius parameter controls the extent of the sharpening effect. A larger radius produces a more pronounced sharpening result, aggressively enhancing edges and details, while a smaller radius yields a subtler effect.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The Alpha parameter adjusts the intensity of the sharpening effect. Higher alpha values increase contrast enhancement, resulting in more dramatic sharpening, while lower values produce a milder effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
    - The Result parameter is the output of the Sharpen node, representing the sharpened image. It reflects the applied sharpening effect, showcasing improved clarity and well-defined edges.
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
        return {'required': {'image': ('IMAGE',), 'sharpen_radius': ('INT', {'default': 1, 'min': 1, 'max': 15, 'step': 1}), 'alpha': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 5.0, 'step': 0.1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'sharpen'
    CATEGORY = 'postprocessing/Filters'

    def sharpen(self, image: torch.Tensor, blur_radius: int, alpha: float):
        if blur_radius == 0:
            return (image,)
        (batch_size, height, width, channels) = image.shape
        kernel_size = blur_radius * 2 + 1
        kernel = torch.ones((kernel_size, kernel_size), dtype=torch.float32) * -1
        center = kernel_size // 2
        kernel[center, center] = kernel_size ** 2
        kernel *= alpha
        kernel = kernel.repeat(channels, 1, 1).unsqueeze(1)
        tensor_image = image.permute(0, 3, 1, 2)
        sharpened = F.conv2d(tensor_image, kernel, padding=center, groups=channels)
        sharpened = sharpened.permute(0, 2, 3, 1)
        result = torch.clamp(sharpened, 0, 1)
        return (result,)
```