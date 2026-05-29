
# Documentation
- Class name: ImageTransformResizeClip
- Category: image/transform
- Output node: False

This node resizes images within specified maximum and minimum dimension ranges, using various interpolation methods to preserve image quality. It dynamically calculates scaling ratios, ensuring the resized image meets the given constraints, providing a flexible approach to image resizing.

# Input types
## Required
- images
- A collection of images to be resized. This parameter is critical because it directly affects the output and determines which images undergo resizing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- max_width
- Maximum width constraint for the resize operation. It sets an upper limit on the width of the resized image.
    - Comfy dtype: INT
    - Python dtype: int
- max_height
- Maximum height constraint for the resize operation. It sets an upper limit on the height of the resized image.
    - Comfy dtype: INT
    - Python dtype: int
- min_width
- Minimum width constraint for the resize operation. It ensures the resized image width does not fall below this value.
    - Comfy dtype: INT
    - Python dtype: int
- min_height
- Minimum height constraint for the resize operation. It ensures the resized image height does not fall below this value.
    - Comfy dtype: INT
    - Python dtype: int
- method
- Interpolation method used for resizing. This affects the quality and algorithm of the resizing process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
- Images resized within the specified maximum and minimum dimension ranges.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageTransformResizeClip:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "max_width": ("INT", {
                    "default": 1024,
                }),
                "max_height": ("INT", {
                    "default": 1024,
                }),
                "min_width": ("INT", {
                    "default": 0,
                }),
                "min_height": ("INT", {
                    "default": 0,
                }),
                "method": (["lanczos", "bicubic", "hamming", "bilinear", "box", "nearest"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/transform"

    def node(self, images, max_width, max_height, min_width, min_height, method):
        height, width = images[0, :, :, 0].shape

        if min_width >= max_width or min_height >= max_height:
            return (images,)

        scale_min = max(min_width / width, min_height / height)
        scale_max = min(max_width / width, max_height / height)

        scale = max(scale_min, scale_max)

        return ImageTransformResizeRelative().node(images, scale, scale, method)

```
