# Documentation
- Class name: JoinImageBatch
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node merges multiple images into a single large image by stacking them vertically or horizontally. It simplifies creating image collages or combining visual data for comparison and analysis.

# Input types
## Required
- images
    - The images parameter is the key input providing the batch of images to merge. It is a numpy array containing batches of images, where each image is a multidimensional array of pixel values.
    - Comfy dtype: COMBO[numpy.ndarray]
    - Python dtype: numpy.ndarray
## Optional
- mode
    - The mode parameter determines the direction of merging, either 'horizontal' or 'vertical'. It affects how images are arranged in the final merged image.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- image
    - The output image is the result of merging the input image batch. It represents a single large image containing all input images arranged horizontally or vertically.
    - Comfy dtype: numpy.ndarray
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
```
class JoinImageBatch:
    """Turns an image batch into one big image."""

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'mode': (('horizontal', 'vertical'), {'default': 'horizontal'})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'join'
    CATEGORY = 'EasyUse/Image'

    def join(self, images, mode):
        (n, h, w, c) = images.shape
        image = None
        if mode == 'vertical':
            image = images.reshape(1, n * h, w, c)
        elif mode == 'horizontal':
            image = torch.transpose(torch.transpose(images, 1, 2).reshape(1, n * w, h, c), 1, 2)
        return (image,)
```