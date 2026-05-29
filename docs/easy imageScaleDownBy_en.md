# Documentation
- Class name: imageScaleDownBy
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node resizes images by proportionally reducing their dimensions, preserving visual content integrity while reducing file size for more efficient processing or storage.

# Input types
## Required
- images
    - The input images are the primary data the node will process. They are essential to the node's operation, as they determine the visual representation and quality of the output.
    - Comfy dtype: COMBO[numpy.ndarray]
    - Python dtype: numpy.ndarray
- scale_by
    - This parameter defines the scaling factor for the image dimensions. It is critical, as it directly affects the final dimensions and aspect ratio of the resized image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - The output includes the resized images, which are now smaller in size but retain the important visual elements of the original images, ready for further processing or storage.
    - Comfy dtype: COMBO[numpy.ndarray]
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
```
class imageScaleDownBy(imageScaleDown):

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'scale_by': ('FLOAT', {'default': 0.5, 'min': 0.01, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    CATEGORY = 'EasyUse/Image'
    FUNCTION = 'image_scale_down_by'

    def image_scale_down_by(self, images, scale_by):
        width = images.shape[2]
        height = images.shape[1]
        new_width = int(width * scale_by)
        new_height = int(height * scale_by)
        return self.image_scale_down(images, new_width, new_height, 'center')
```