# Documentation
- Class name: ImageResizeCalculator
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The ImageResizeCalculator node aims to intelligently resize images while maintaining the aspect ratio, meeting specific requirements such as target dimensions and alignment to multiples of 8, which is critical for certain image processing tasks.

# Input types
## Required
- image
    - The image parameter is required as it is the primary input for the node's operation. It determines the source material to be processed, affecting the node's output dimensions and calculations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_size
    - The target_size parameter specifies the desired dimensions of the resized image. It plays a crucial role in the resizing process, directly influencing the final dimensions and scaling calculations.
    - Comfy dtype: INT
    - Python dtype: int
- force_8x
    - The force_8x parameter determines whether the resized dimensions should be aligned to multiples of 8. This is especially important for certain image processing algorithms that benefit from such alignment.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- width
    - The width output provides the new width of the resized image, which is a direct result of the node's resizing calculations.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output corresponds to the new height of the resized image, another key result of the resizing process.
    - Comfy dtype: INT
    - Python dtype: int
- min
    - The minimum value output indicates the smaller of the two dimensions after resizing, providing insight into the aspect ratio of the resized image.
    - Comfy dtype: INT
    - Python dtype: int
- scale
    - The scale output represents the scaling factor from the original width to the new width, a key value for understanding the resizing transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_r
    - The scale_r output represents the reciprocal of the scaling factor from the original height to the new height, providing a comprehensive understanding of the vertical resizing aspect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class ImageResizeCalculator:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE', {}), 'target_size': ('INT', {'default': 512, 'min': 1, 'step': 1}), 'force_8x': ('BOOLEAN', {'default': True})}}
    RETURN_TYPES = ('INT', 'INT', 'INT', 'FLOAT', 'FLOAT')
    RETURN_NAMES = ('width', 'height', 'min', 'scale', 'scale_r')
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, image: Tensor, target_size: int, force_8x: bool):
        w = image[0].shape[1]
        h = image[0].shape[0]
        ratio = h * 1.0 / w
        if w >= h:
            w_new = target_size
            h_new = target_size * ratio
            if force_8x:
                w_new = int(w_new / 8) * 8
                h_new = int(h_new / 8) * 8
            return (w_new, int(h_new), h_new, w_new * 1.0 / w, w * 1.0 / w_new)
        else:
            w_new = target_size / ratio
            h_new = target_size
            if force_8x:
                w_new = int(w_new / 8) * 8
                h_new = int(h_new / 8) * 8
            return (int(w_new), h_new, w_new, h_new * 1.0 / h, h * 1.0 / h_new)
```