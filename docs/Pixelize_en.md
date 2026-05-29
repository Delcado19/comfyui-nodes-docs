# Documentation
- Class name: Pixelize
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Pixelize node applies a pixelation effect to the input image, converting it into a stylized, blocky representation. It achieves this by averaging color values within a grid defined by the specified pixel size, reducing the image resolution to a more abstract form. This node is particularly useful for creating retro or artistic looks, as well as for privacy-protecting image processing.

# Input types
## Required
- image
    - The image parameter is the input that the Pixelize node will process. It is critical because it determines the visual content to be pixelated. The node's operation is directly influenced by the image dimensions and pixel data, which are essential for the pixelation effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pixel_size
    - The pixel_size parameter determines the granularity of the pixelation effect. It specifies the size of each pixel block in the output image. Larger pixel_size values result in more pronounced pixelation, while smaller values retain more detail. This parameter plays a key role in controlling the stylized outcome of the node's processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pixelized_image
    - The pixelized_image output represents the final result of the pixelation process. It is an image where each pixel block has been averaged to create a stylized, pixelated appearance. This output is important because it embodies the node's primary function and the creative intent behind the pixelation effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class Pixelize:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'pixel_size': ('INT', {'default': 8, 'min': 2, 'max': 128, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'apply_pixelize'
    CATEGORY = 'postprocessing/Effects'

    def apply_pixelize(self, image: torch.Tensor, pixel_size: int):
        pixelized_image = self.pixelize_image(image, pixel_size)
        pixelized_image = torch.clamp(pixelized_image, 0, 1)
        return (pixelized_image,)

    def pixelize_image(self, image: torch.Tensor, pixel_size: int):
        (batch_size, height, width, channels) = image.shape
        new_height = height // pixel_size
        new_width = width // pixel_size
        image = image.permute(0, 3, 1, 2)
        image = F.avg_pool2d(image, kernel_size=pixel_size, stride=pixel_size)
        image = F.interpolate(image, size=(height, width), mode='nearest')
        image = image.permute(0, 2, 3, 1)
        return image
```