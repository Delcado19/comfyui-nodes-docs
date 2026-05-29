# Documentation
- Class name: WAS_Inset_Image_Bounds
- Category: WAS Suite/Image/Bound
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Inset_Image_Bounds node aims to adjust image bounds by inserting values, ensuring the modified image retains structural integrity. It operates by increasing or decreasing specified bounds; verify that generated image bounds are logically reasonable and do not exceed the original size.

# Input types
## Required
- image_bounds
- image_bounds parameter defines the initial bounds of the image to which the inset value will be applied. This is crucial for determining the starting point of image size modification.
    - Comfy dtype: IMAGE_BOUNDS
    - Python dtype: List[Tuple[int, int, int, int]]
- inset_left
- inset_left parameter specifies the amount to inset the left side of the image. It plays an important role in determining the new left edge of the image after processing.
    - Comfy dtype: INT
    - Python dtype: int
- inset_right
- inset_right parameter defines the amount to inset the right side of the image. This is important for establishing the new right edge of the adjusted image.
    - Comfy dtype: INT
    - Python dtype: int
- inset_top
- inset_top parameter indicates the amount to inset the top side of the image. Setting the new top edge of the image after applying the inset is crucial.
    - Comfy dtype: INT
    - Python dtype: int
- inset_bottom
- inset_bottom parameter determines the amount to inset the bottom side of the image. This is essential for defining the new bottom edge of the adjusted image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- inset_bounds
- inset_bounds output represents the new bounds of the image after applying the inset. It is important because it reflects the final dimensions of the processed image.
    - Comfy dtype: IMAGE_BOUNDS
    - Python dtype: List[Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Inset_Image_Bounds:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {'required': {'image_bounds': ('IMAGE_BOUNDS',), 'inset_left': ('INT', {'default': 64, 'min': 0, 'max': 18446744073709551615}), 'inset_right': ('INT', {'default': 64, 'min': 0, 'max': 18446744073709551615}), 'inset_top': ('INT', {'default': 64, 'min': 0, 'max': 18446744073709551615}), 'inset_bottom': ('INT', {'default': 64, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('IMAGE_BOUNDS',)
    FUNCTION = 'inset_image_bounds'
    CATEGORY = 'WAS Suite/Image/Bound'

    def inset_image_bounds(self, image_bounds, inset_left, inset_right, inset_top, inset_bottom):
        inset_bounds = []
        for (rmin, rmax, cmin, cmax) in image_bounds:
            rmin += inset_top
            rmax -= inset_bottom
            cmin += inset_left
            cmax -= inset_right
            if rmin > rmax or cmin > cmax:
                raise ValueError('Invalid insets provided. Please make sure the insets do not exceed the image bounds.')
            inset_bounds.append((rmin, rmax, cmin, cmax))
        return (inset_bounds,)
```