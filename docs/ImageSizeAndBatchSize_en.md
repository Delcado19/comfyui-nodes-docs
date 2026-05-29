# Documentation
- Class name: ImageSizeAndBatchSize
- Category: Animate Diff/Utils
- Output node: False
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

These nodes extract and return key image attributes such as size and batch dimension, facilitating further processing and analysis within the system.

# Input types
## Required
- image
- Image parameters are critical because they serve as the primary input for node execution. They affect node operation by determining output size and batch size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
- Width parameter represents the horizontal dimension of the image, a fundamental aspect of image analysis and processing.
    - Comfy dtype: INT
    - Python dtype: int
- height
- Height parameter denotes the vertical dimension of the image, playing a key role in structural understanding and manipulation of image data.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
- Batch size parameter indicates the number of images in a batch, essential for optimizing computational efficiency and managing resources during image processing.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class ImageSizeAndBatchSize:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',)}}
    CATEGORY = 'Animate Diff/Utils'
    RETURN_TYPES = ('INT', 'INT', 'INT')
    RETURN_NAMES = ('width', 'height', 'batch_size')
    FUNCTION = 'batch_size'

    def batch_size(self, image: Tensor):
        (batch_size, height, width) = image.shape[0:3]
        return (width, height, batch_size)
```